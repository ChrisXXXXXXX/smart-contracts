/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Pot,
  PotInterface,
} from "../../../../contracts/makerdaoCore/pot.sol/Pot";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vat_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Pie",
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
    name: "chi",
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
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drip",
    outputs: [
      {
        internalType: "uint256",
        name: "tmp",
        type: "uint256",
      },
    ],
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
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "file",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pie",
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
    inputs: [],
    name: "rho",
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
    name: "usr",
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
    name: "vat",
    outputs: [
      {
        internalType: "contract VatLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vow",
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
  "0x608060405234801561001057600080fd5b50604051610a39380380610a3983398101604081905261002f91610086565b336000908152602081905260409020600190819055600580546001600160a01b0319166001600160a01b0393909316929092179091556b033b2e3c9fd0803ce80000006003819055600455426007556008556100b6565b60006020828403121561009857600080fd5b81516001600160a01b03811681146100af57600080fd5b9392505050565b610974806100c56000396000f3fe608060405234801561001057600080fd5b50600436106100eb5760003560e01c806365fae35e1161009257806365fae35e146101a457806369245009146101b75780637f8661a1146101bf578063957aa58c146101d25780639c52a7f1146101db5780639f678cca146101ee578063bf353dbb146101f6578063c92aecc414610216578063d4e8be831461021f57600080fd5b8063049878f3146100f05780630bebac861461010557806320aba08b1461013857806329ae8114146101415780632c69ed581461015457806336569e771461015d5780634f0099f414610188578063626cb3c514610191575b600080fd5b6101036100fe3660046107e1565b610232565b005b610125610113366004610816565b60016020526000908152604090205481565b6040519081526020015b60405180910390f35b61012560075481565b61010361014f366004610838565b61030f565b61012560025481565b600554610170906001600160a01b031681565b6040516001600160a01b03909116815260200161012f565b61012560035481565b600654610170906001600160a01b031681565b6101036101b2366004610816565b6103fb565b610103610447565b6101036101cd3660046107e1565b61048d565b61012560085481565b6101036101e9366004610816565b6104ed565b610125610536565b610125610204366004610816565b60006020819052908152604090205481565b61012560045481565b61010361022d36600461085a565b610648565b600754421461025c5760405162461bcd60e51b815260040161025390610886565b60405180910390fd5b3360009081526001602052604090205461027690826106a5565b3360009081526001602052604090205560025461029390826106a5565b6002556005546004546001600160a01b039091169063bb35783b90339030906102bc90866106bb565b6040518463ffffffff1660e01b81526004016102da939291906108b3565b600060405180830381600087803b1580156102f457600080fd5b505af1158015610308573d6000803e3d6000fd5b5050505050565b3360009081526020819052604090205460011461033e5760405162461bcd60e51b8152600401610253906108d7565b60085460011461037f5760405162461bcd60e51b815260206004820152600c60248201526b506f742f6e6f742d6c69766560a01b6044820152606401610253565b60075442146103a05760405162461bcd60e51b815260040161025390610886565b81623ab9b960e91b036103b35760035550565b60405162461bcd60e51b815260206004820152601b60248201527f506f742f66696c652d756e7265636f676e697a65642d706172616d00000000006044820152606401610253565b3360009081526020819052604090205460011461042a5760405162461bcd60e51b8152600401610253906108d7565b6001600160a01b0316600090815260208190526040902060019055565b336000908152602081905260409020546001146104765760405162461bcd60e51b8152600401610253906108d7565b60006008556b033b2e3c9fd0803ce8000000600355565b336000908152600160205260409020546104a790826106e5565b336000908152600160205260409020556002546104c490826106e5565b6002556005546004546001600160a01b039091169063bb35783b90309033906102bc90866106bb565b3360009081526020819052604090205460011461051c5760405162461bcd60e51b8152600401610253906108d7565b6001600160a01b0316600090815260208190526040812055565b600060075442101561057c5760405162461bcd60e51b815260206004820152600f60248201526e506f742f696e76616c69642d6e6f7760881b6044820152606401610253565b6105ad6105a5600354600754426105939190610903565b6b033b2e3c9fd0803ce80000006106f5565b6004546107b3565b905060006105bd826004546106e5565b6004839055426007556005546006546002549293506001600160a01b039182169263f24e23eb929091169030906105f490866106bb565b6040518463ffffffff1660e01b8152600401610612939291906108b3565b600060405180830381600087803b15801561062c57600080fd5b505af1158015610640573d6000803e3d6000fd5b505050505090565b336000908152602081905260409020546001146106775760405162461bcd60e51b8152600401610253906108d7565b8162766f7760e81b036103b357600680546001600160a01b0383166001600160a01b03199091161790555050565b808201828110156106b557600080fd5b92915050565b60008115806106dc575050808202828282816106d9576106d9610928565b04145b6106b557600080fd5b808203828111156106b557600080fd5b60008380156107955760018416801561071057859250610714565b8392505b50600283046002850494505b841561078f57858602868782041461073757600080fd5b8181018181101561074757600080fd5b859004965050600185161561078457858302838782041415871515161561076d57600080fd5b8181018181101561077d57600080fd5b8590049350505b600285049450610720565b506107ab565b8380156107a557600092506107a9565b8392505b505b509392505050565b60006b033b2e3c9fd0803ce80000006107cc84846106bb565b816107d9576107d9610928565b049392505050565b6000602082840312156107f357600080fd5b5035919050565b80356001600160a01b038116811461081157600080fd5b919050565b60006020828403121561082857600080fd5b610831826107fa565b9392505050565b6000806040838503121561084b57600080fd5b50508035926020909101359150565b6000806040838503121561086d57600080fd5b8235915061087d602084016107fa565b90509250929050565b602080825260139082015272141bdd0bdc9a1bcb5b9bdd0b5d5c19185d1959606a1b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b602080825260129082015271141bdd0bdb9bdd0b585d5d1a1bdc9a5e995960721b604082015260600190565b60008282101561092357634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052601260045260246000fdfea2646970667358221220d186ace01f2f6fe3813cdc87b11c0763d52150045170cb05574589807183d8ee64736f6c634300080d0033";

type PotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pot__factory extends ContractFactory {
  constructor(...args: PotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vat_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Pot> {
    return super.deploy(vat_, overrides || {}) as Promise<Pot>;
  }
  override getDeployTransaction(
    vat_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(vat_, overrides || {});
  }
  override attach(address: string): Pot {
    return super.attach(address) as Pot;
  }
  override connect(signer: Signer): Pot__factory {
    return super.connect(signer) as Pot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PotInterface {
    return new utils.Interface(_abi) as PotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pot {
    return new Contract(address, _abi, signerOrProvider) as Pot;
  }
}
