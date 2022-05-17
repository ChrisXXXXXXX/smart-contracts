/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBinancePool,
  IBinancePoolInterface,
} from "../../../../contracts/ceros/interfaces/IBinancePool";

const _abi = [
  {
    inputs: [],
    name: "getMinimumStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRelayerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "pendingUnstakesOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeAndClaimCerts",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "unstakeCerts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBinancePool__factory {
  static readonly abi = _abi;
  static createInterface(): IBinancePoolInterface {
    return new utils.Interface(_abi) as IBinancePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBinancePool {
    return new Contract(address, _abi, signerOrProvider) as IBinancePool;
  }
}
