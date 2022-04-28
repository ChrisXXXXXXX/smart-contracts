import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "hardhat-spdx-license-identifier";
import "hardhat-abi-exporter";
import "hardhat-storage-layout";
import "@tenderly/hardhat-tenderly";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from "hardhat/types";
import { subtask, task, types } from "hardhat/config";
import fs from "fs";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },

  networks: {
    // hardhat: {
    //   accounts: {
    //     accountsBalance: "100000000000000000000000000",
    //   },
    //   mining: {
    //     auto: false,
    //     interval: 1000,
    //   },
    //   loggingEnabled: true,
    // },
    // hardhat: {
    // allowUnlimitedContractSize: true,
    // 	forking: {
    // 		url: "https://rpc.ftm.tools",
    // 		accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
    // 		blockNumber: 32968090
    // 	}
    // },
    // hardhat: {
    // // allowUnlimitedContractSize: true,
    // 	forking: {
    // 		url: "https://rpc.ftm.tools",
    // 		accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
    // 		blockNumber: 32968090
    // 	}
    // },
    // 	hardhat: {
    //   // allowUnlimitedContractSize: true,
    // 		forking: {
    // 			url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_PROJECT_ID}/bsc/mainnet`,
    // 			accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
    // 			blockNumber: 16682038
    // 		}
    // 	},

    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY as string],
    },

    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      // accounts: [process.env.DEPLOYER_PRIVATE_KEY as string],
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY as string,
        "05d31a2ba8175de33c447105a5ff5463db3b02172620a542d73ee1235c5d0ccb",
        "1b03e5128365892533178abce41b55c2b7b7956ed8507042120d3759f242d66a",
      ],
    },
  },

  etherscan: {
    apiKey: {
      bsc: process.env.BSC_API_KEY,
      bscTestnet: process.env.BSC_API_KEY,
    },
  },

  mocha: {
    grep: "^(?!.*; using Ganache).*",
  },

  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "USD",
  },
};

function getSortedFiles(dependenciesGraph: any) {
  const tsort = require("tsort");
  const graph = tsort();

  const filesMap: any = {};
  const resolvedFiles = dependenciesGraph.getResolvedFiles();
  resolvedFiles.forEach((f: any) => (filesMap[f.sourceName] = f));

  for (const [from, deps] of dependenciesGraph.entries()) {
    for (const to of deps) {
      graph.add(to.sourceName, from.sourceName);
    }
  }

  const topologicalSortedNames = graph.sort();

  // If an entry has no dependency it won't be included in the graph, so we
  // add them and then dedup the array
  const withEntries = topologicalSortedNames.concat(
    resolvedFiles.map((f: any) => f.sourceName)
  );

  const sortedNames = [...new Set(withEntries)];
  return sortedNames.map((n: any) => filesMap[n]);
}

function getFileWithoutImports(resolvedFile: any) {
  const IMPORT_SOLIDITY_REGEX = /^\s*import(\s+)[\s\S]*?;\s*$/gm;

  return resolvedFile.content.rawContent
    .replace(IMPORT_SOLIDITY_REGEX, "")
    .trim();
}

subtask(
  "flat:get-flattened-sources",
  "Returns all contracts and their dependencies flattened"
)
  .addOptionalParam("files", undefined, undefined, types.any)
  .addOptionalParam("output", undefined, undefined, types.string)
  .setAction(async ({ files, output }, { run }) => {
    const dependencyGraph = await run("flat:get-dependency-graph", { files });
    console.log(dependencyGraph);

    let flattened = "";

    if (dependencyGraph.getResolvedFiles().length === 0) {
      return flattened;
    }

    const sortedFiles = getSortedFiles(dependencyGraph);

    let isFirst = true;
    for (const file of sortedFiles) {
      if (!isFirst) {
        flattened += "\n";
      }
      flattened += `// File ${file.getVersionedName()}\n`;
      flattened += `${getFileWithoutImports(file)}\n`;

      isFirst = false;
    }

    // Remove every line started with "// SPDX-License-Identifier:"
    flattened = flattened.replace(
      /SPDX-License-Identifier:/gm,
      "License-Identifier:"
    );

    flattened = `// SPDX-License-Identifier: MIXED\n\n${flattened}`;

    // Remove every line started with "pragma experimental ABIEncoderV2;" except the first one
    flattened = flattened.replace(
      /pragma experimental ABIEncoderV2;\n/gm,
      (
        (i) => (m: any) =>
          !i++ ? m : ""
      )(0)
    );
    // Remove every line started with "pragma abicoder v2;" except the first one
    flattened = flattened.replace(
      /pragma abicoder v2;\n/gm,
      (
        (i) => (m: any) =>
          !i++ ? m : ""
      )(0)
    );
    // Remove every line started with "pragma solidity ****" except the first one
    flattened = flattened.replace(
      /pragma solidity .*$\n/gm,
      (
        (i) => (m: any) =>
          !i++ ? m : ""
      )(0)
    );

    flattened = flattened.trim();
    if (output) {
      console.log("Writing to", output);
      fs.writeFileSync(output, flattened);
      return "";
    }
    return flattened;
  });

subtask("flat:get-dependency-graph")
  .addOptionalParam("files", undefined, undefined, types.any)
  .setAction(async ({ files }, { run }) => {
    const sourcePaths =
      files === undefined
        ? await run("compile:solidity:get-source-paths")
        : files.map((f: any) => fs.realpathSync(f));

    const sourceNames = await run("compile:solidity:get-source-names", {
      sourcePaths,
    });

    const dependencyGraph = await run("compile:solidity:get-dependency-graph", {
      sourceNames,
    });

    return dependencyGraph;
  });

task("flat", "Flattens and prints contracts and their dependencies")
  .addOptionalVariadicPositionalParam(
    "files",
    "The files to flatten",
    undefined,
    types.inputFile
  )
  .addOptionalParam(
    "output",
    "Specify the output file",
    undefined,
    types.string
  )
  .setAction(async ({ files, output }, { run }) => {
    console.log(
      await run("flat:get-flattened-sources", {
        files,
        output,
      })
    );
  });

export default config;