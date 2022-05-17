/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JarR,
  JarRInterface,
} from "../../../../contracts/alternative/jarR.sol/JarR";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usb",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Cage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Exit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "exitDelay",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Join",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address[]",
        name: "user",
        type: "address[]",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "Replenished",
    type: "event",
  },
  {
    inputs: [],
    name: "USB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfWithRewards",
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
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exitDelay",
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
        internalType: "uint256",
        name: "_spread",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_exitDelay",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "live",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ratio",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "redeemBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "redeemables",
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
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "replenish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spread",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "",
        type: "address",
      },
    ],
    name: "unstakeTime",
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
    name: "usbDeposit",
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
        name: "",
        type: "address",
      },
    ],
    name: "wards",
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
];

const _bytecode =
  "0x60806040526003805460ff191660121790553480156200001e57600080fd5b506040516200136338038062001363833981016040819052620000419162000227565b33600090815260208181526040909120600190819055600d819055600a80546001600160a01b0319166001600160a01b03871617905583516200008792850190620000b4565b5080516200009d906002906020840190620000b4565b5050670de0b6b3a764000060095550620002ed9050565b828054620000c290620002b1565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018257600080fd5b81516001600160401b03808211156200019f576200019f6200015a565b604051601f8301601f19908116603f01168101908282118183101715620001ca57620001ca6200015a565b81604052838152602092508683858801011115620001e757600080fd5b600091505b838210156200020b5785820183015181830184015290820190620001ec565b838211156200021d5760008385830101525b9695505050505050565b6000806000606084860312156200023d57600080fd5b83516001600160a01b03811681146200025557600080fd5b60208501519093506001600160401b03808211156200027357600080fd5b620002818783880162000170565b935060408601519150808211156200029857600080fd5b50620002a78682870162000170565b9150509250925092565b600181811c90821680620002c657607f821691505b602082108103620002e757634e487b7160e01b600052602260045260246000fd5b50919050565b61106680620002fd6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c357806395d89b411161007c57806395d89b41146102be5780639c52a7f1146102c6578063bc0e610a146102d9578063bf353dbb146102ec578063ce06bbb61461030c578063e4a301161461031557600080fd5b806370a082311461025357806371ca337d146102735780637f8661a11461027c5780638554ba151461028f57806394324445146102a2578063957aa58c146102b557600080fd5b8063313ce56711610115578063313ce567146101c55780633a93635b146101e457806350faa5e61461020f5780635c25c76c1461022f57806365fae35e14610238578063692450091461024b57600080fd5b8063049878f31461015257806306fdde031461016757806318160ddd14610185578063283886301461019c5780632ac1aa35146101a5575b600080fd5b610165610160366004610cc6565b610328565b005b61016f61041a565b60405161017c9190610d0b565b60405180910390f35b61018e60045481565b60405190815260200161017c565b61018e60085481565b61018e6101b3366004610d5a565b600c6020526000908152604090205481565b6003546101d29060ff1681565b60405160ff909116815260200161017c565b600a546101f7906001600160a01b031681565b6040516001600160a01b03909116815260200161017c565b61018e61021d366004610d5a565b600b6020526000908152604090205481565b61018e60065481565b610165610246366004610d5a565b6104a8565b6101656104f4565b61018e610261366004610d5a565b60056020526000908152604090205481565b61018e60095481565b61016561028a366004610cc6565b610553565b61016561029d366004610cc6565b610662565b61018e6102b0366004610d5a565b61073e565b61018e600d5481565b61016f61077f565b6101656102d4366004610d5a565b61078c565b6101656102e7366004610d8b565b6107d5565b61018e6102fa366004610d5a565b60006020819052908152604090205481565b61018e60075481565b610165610323366004610e50565b610961565b600d546001146103535760405162461bcd60e51b815260040161034a90610e72565b60405180910390fd5b6000670de0b6b3a76400006009548361036c9190610eae565b6103769190610ecd565b3360009081526005602052604081208054929350839290919061039a908490610eef565b9250508190555080600460008282546103b39190610eef565b9250508190555081600760008282546103cc9190610eef565b9091555050600a546103e9906001600160a01b03163330856109cb565b604051819033907fb4e09949657f21548b58afe74e7b86cd2295da5ff1598ae1e5faecb1cf19ca9590600090a35050565b6001805461042790610f07565b80601f016020809104026020016040519081016040528092919081815260200182805461045390610f07565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b505050505081565b336000908152602081905260409020546001146104d75760405162461bcd60e51b815260040161034a90610f41565b6001600160a01b0316600090815260208190526040902060019055565b336000908152602081905260409020546001146105235760405162461bcd60e51b815260040161034a90610f41565b6000600d8190556040517f2308ed18a14e800c39b86eb6ea43270105955ca385b603b64eca89f98ae8fbda9190a1565b600d546001146105755760405162461bcd60e51b815260040161034a90610e72565b60095460009061058d83670de0b6b3a7640000610eae565b6105979190610ecd565b336000908152600560205260408120805492935084929091906105bb908490610f6d565b9250508190555081600460008282546105d49190610f6d565b9091555050336000908152600b6020526040812080548392906105f8908490610eef565b9250508190555080600760008282546106119190610f6d565b90915550506008546106239042610eef565b336000818152600c602052604080822093909355915183927f22d324652c93739755cf4581508b60875ebdd78c20c0cff5cf8e23452b29963191a35050565b600454156106d9576000600754116106b35760405162461bcd60e51b815260206004820152601460248201527304a61722f64656e6f6d696e61746f722d69732d360641b604482015260640161034a565b6007546004546106cb90670de0b6b3a7640000610eae565b6106d59190610ecd565b6009555b80600760008282546106eb9190610eef565b9091555050600a54610708906001600160a01b03163330846109cb565b6040518181527fc38f9a7f7e6a60286c03e404e4a1890a1434a5633900261bf999356064b031da9060200160405180910390a150565b6009546001600160a01b03821660009081526005602052604081205490919061076f90670de0b6b3a7640000610eae565b6107799190610ecd565b92915050565b6002805461042790610f07565b336000908152602081905260409020546001146107bb5760405162461bcd60e51b815260040161034a90610f41565b6001600160a01b0316600090815260208190526040812055565b600d546001146107f75760405162461bcd60e51b815260040161034a90610e72565b60005b815181101561091f57600c600083838151811061081957610819610f84565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054421061090d576000600b600084848151811061086057610860610f84565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020549050600081111561090b576000600b60008585815181106108ac576108ac610f84565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555061090b8383815181106108ed576108ed610f84565b6020908102919091010151600a546001600160a01b03169083610a3c565b505b8061091781610f9a565b9150506107fa565b508060405161092e9190610fb3565b604051908190038120907fd0d66a181530eab5234479616eb1b8ecdb27a88c91dab20b07d5bcc7b02fa94e90600090a250565b336000908152602081905260409020546001146109905760405162461bcd60e51b815260040161034a90610f41565b60068290556008819055604051819083907f997896709b4e932ee42750e2e14ed1f7ab6c60bd911ff567aa2485cf0b20051b90600090a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610a369085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610a71565b50505050565b6040516001600160a01b038316602482015260448101829052610a6c90849063a9059cbb60e01b906064016109ff565b505050565b6000610ac6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610b439092919063ffffffff16565b805190915015610a6c5780806020019051810190610ae49190610ff2565b610a6c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161034a565b6060610b528484600085610b5c565b90505b9392505050565b606082471015610bbd5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161034a565b6001600160a01b0385163b610c145760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161034a565b600080866001600160a01b03168587604051610c309190611014565b60006040518083038185875af1925050503d8060008114610c6d576040519150601f19603f3d011682016040523d82523d6000602084013e610c72565b606091505b5091509150610c82828286610c8d565b979650505050505050565b60608315610c9c575081610b55565b825115610cac5782518084602001fd5b8160405162461bcd60e51b815260040161034a9190610d0b565b600060208284031215610cd857600080fd5b5035919050565b60005b83811015610cfa578181015183820152602001610ce2565b83811115610a365750506000910152565b6020815260008251806020840152610d2a816040850160208701610cdf565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610d5557600080fd5b919050565b600060208284031215610d6c57600080fd5b610b5582610d3e565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610d9e57600080fd5b823567ffffffffffffffff80821115610db657600080fd5b818501915085601f830112610dca57600080fd5b813581811115610ddc57610ddc610d75565b8060051b604051601f19603f83011681018181108582111715610e0157610e01610d75565b604052918252848201925083810185019188831115610e1f57600080fd5b938501935b82851015610e4457610e3585610d3e565b84529385019392850192610e24565b98975050505050505050565b60008060408385031215610e6357600080fd5b50508035926020909101359150565b6020808252600c908201526b4a61722f6e6f742d6c69766560a01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610ec857610ec8610e98565b500290565b600082610eea57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610f0257610f02610e98565b500190565b600181811c90821680610f1b57607f821691505b602082108103610f3b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526012908201527112985c8bdb9bdd0b585d5d1a1bdc9a5e995960721b604082015260600190565b600082821015610f7f57610f7f610e98565b500390565b634e487b7160e01b600052603260045260246000fd5b600060018201610fac57610fac610e98565b5060010190565b815160009082906020808601845b83811015610fe65781516001600160a01b031685529382019390820190600101610fc1565b50929695505050505050565b60006020828403121561100457600080fd5b81518015158114610b5557600080fd5b60008251611026818460208701610cdf565b919091019291505056fea2646970667358221220539729586904d8c18301fe50160a91e74772c40bb9f5a30674dbd5fabb318eca64736f6c634300080d0033";

type JarRConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JarRConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JarR__factory extends ContractFactory {
  constructor(...args: JarRConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usb: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JarR> {
    return super.deploy(_usb, _name, _symbol, overrides || {}) as Promise<JarR>;
  }
  override getDeployTransaction(
    _usb: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usb, _name, _symbol, overrides || {});
  }
  override attach(address: string): JarR {
    return super.attach(address) as JarR;
  }
  override connect(signer: Signer): JarR__factory {
    return super.connect(signer) as JarR__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JarRInterface {
    return new utils.Interface(_abi) as JarRInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): JarR {
    return new Contract(address, _abi, signerOrProvider) as JarR;
  }
}
