/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Vow,
  VowInterface,
} from "../../../../contracts/makerdaoCore/vow.sol/Vow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vat_",
        type: "address",
      },
      {
        internalType: "address",
        name: "flapper_",
        type: "address",
      },
      {
        internalType: "address",
        name: "flopper_",
        type: "address",
      },
      {
        internalType: "address",
        name: "multisig_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Ash",
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
    name: "Sin",
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
    name: "bump",
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
    inputs: [
      {
        internalType: "address",
        name: "usr",
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
    name: "dump",
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
        name: "tab",
        type: "uint256",
      },
    ],
    name: "fess",
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
        name: "data",
        type: "address",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flap",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flapper",
    outputs: [
      {
        internalType: "contract FlapLike",
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
        internalType: "uint256",
        name: "era",
        type: "uint256",
      },
    ],
    name: "flog",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flop",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flopper",
    outputs: [
      {
        internalType: "contract FlopLike",
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
        internalType: "uint256",
        name: "rad",
        type: "uint256",
      },
    ],
    name: "heal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hump",
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
        name: "rad",
        type: "uint256",
      },
    ],
    name: "kiss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lever",
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
    name: "multisig",
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
        name: "usr",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "sin",
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
    name: "sump",
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
    name: "wait",
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
  "0x60806040523480156200001157600080fd5b506040516200164038038062001640833981016040819052620000349162000112565b336000908152602081905260409081902060019081905580546001600160a01b03199081166001600160a01b038881169182179093556002805483168885169081179091556003805484168886161790556004805490931693861693909317825592516328ec8bf160e21b81529081019190915263a3b22fc490602401600060405180830381600087803b158015620000cc57600080fd5b505af1158015620000e1573d6000803e3d6000fd5b50506001600e55506200016f945050505050565b80516001600160a01b03811681146200010d57600080fd5b919050565b600080600080608085870312156200012957600080fd5b6200013485620000f5565b93506200014460208601620000f5565b92506200015460408601620000f5565b91506200016460608601620000f5565b905092959194509250565b6114c1806200017f6000396000f3fe608060405234801561001057600080fd5b506004361061016e5760003560e01c806369245009116100ce578063c349d36211610087578063c349d362146102ae578063cb5cc109146102b7578063d0adc35f146102d7578063d4e8be83146102e0578063d7ee674b146102f3578063e433054514610306578063f37ac61c1461030f57600080fd5b8063692450091461024f578063697efb7814610257578063957aa58c1461026a5780639c52a7f114610273578063bbbb0d7b14610286578063bf353dbb1461028e57600080fd5b806336cd60521161012b57806336cd6052146101e85780634081d73a146101f15780634783c35b146102045780635ca0d7231461021757806364bd70131461022a57806365fae35e1461023357806368110b2f1461024657600080fd5b80630e01198b146101735780631b8e8cfa1461018e5780632506855a1461019757806329ae8114146101ac5780632a1d2b3c146101bf57806336569e77146101c8575b600080fd5b61017b610322565b6040519081526020015b60405180910390f35b61017b600c5481565b6101aa6101a53660046112e2565b6107ed565b005b6101aa6101ba3660046112fb565b610935565b61017b60075481565b6001546101db906001600160a01b031681565b604051610185919061131d565b61017b600d5481565b6003546101db906001600160a01b031681565b6004546101db906001600160a01b031681565b6002546101db906001600160a01b031681565b61017b60085481565b6101aa61024136600461134d565b610a25565b61017b600b5481565b6101aa610a93565b6101aa6102653660046112e2565b610d6c565b61017b600e5481565b6101aa61028136600461134d565b610dd8565b61017b610e21565b61017b61029c36600461134d565b60006020819052908152604090205481565b61017b600a5481565b61017b6102c53660046112e2565b60056020526000908152604090205481565b61017b60065481565b6101aa6102ee366004611368565b610f84565b6101aa6103013660046112e2565b611108565b61017b60095481565b6101aa61031d3660046112e2565b61118b565b6000600d546000146105755760015460405163782c909560e11b81526103b7916103af916001600160a01b039091169063f059212a9061036690309060040161131d565b602060405180830381865afa158015610383573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a79190611394565b600b546112a3565b600c546112a3565b600154604051633bf8efc960e21b81526001600160a01b039091169063efe3bf24906103e790309060040161131d565b602060405180830381865afa158015610404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104289190611394565b101561044f5760405162461bcd60e51b8152600401610446906113ad565b60405180910390fd5b60015460405163782c909560e11b81526104d8916104d0916001600160a01b039091169063f059212a9061048790309060040161131d565b602060405180830381865afa1580156104a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c89190611394565b6006546112b9565b6007546112b9565b156104f55760405162461bcd60e51b8152600401610446906113df565b600254600b5460405163ca40c41960e01b81526004810191909152600060248201526001600160a01b039091169063ca40c419906044015b6020604051808303816000875af115801561054c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105709190611394565b905090565b60015460405163782c909560e11b81526105e8916001600160a01b03169063f059212a906105a790309060040161131d565b602060405180830381865afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103af9190611394565b600154604051633bf8efc960e21b81526001600160a01b039091169063efe3bf249061061890309060040161131d565b602060405180830381865afa158015610635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106599190611394565b10156106775760405162461bcd60e51b8152600401610446906113ad565b60015460405163782c909560e11b81526106a9916001600160a01b03169063f059212a9061048790309060040161131d565b156106c65760405162461bcd60e51b8152600401610446906113df565b600154604051633bf8efc960e21b8152600091610775916001600160a01b039091169063efe3bf24906106fd90309060040161131d565b602060405180830381865afa15801561071a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073e9190611394565b60015460405163782c909560e11b8152610770916001600160a01b03169063f059212a906105a790309060040161131d565b6112b9565b6001546004805460405163bb35783b60e01b815230928101929092526001600160a01b0390811660248301526044820184905292935091169063bb35783b90606401600060405180830381600087803b1580156107d157600080fd5b505af11580156107e5573d6000803e3d6000fd5b505050505090565b6007548111156108345760405162461bcd60e51b81526020600482015260126024820152710acdeee5edcdee85acadcdeeaced05ac2e6d60731b6044820152606401610446565b600154604051633bf8efc960e21b81526001600160a01b039091169063efe3bf249061086490309060040161131d565b602060405180830381865afa158015610881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a59190611394565b8111156108c45760405162461bcd60e51b8152600401610446906113ad565b6108d0600754826112b9565b600755600154604051633cdeb18760e21b8152600481018390526001600160a01b039091169063f37ac61c906024015b600060405180830381600087803b15801561091a57600080fd5b505af115801561092e573d6000803e3d6000fd5b5050505050565b336000908152602081905260409020546001146109645760405162461bcd60e51b81526004016104469061140a565b81631dd85a5d60e21b036109785760085550565b8163062756d760e41b0361098c57600b5550565b8163073756d760e41b036109a057600a5550565b8163064756d760e41b036109b45760095550565b8163068756d760e41b036109c857600c5550565b81643632bb32b960d91b036109dd57600d5550565b60405162461bcd60e51b815260206004820152601b60248201527f566f772f66696c652d756e7265636f676e697a65642d706172616d00000000006044820152606401610446565b33600090815260208190526040902054600114610a545760405162461bcd60e51b81526004016104469061140a565b600e54600114610a765760405162461bcd60e51b815260040161044690611436565b6001600160a01b0316600090815260208190526040902060019055565b33600090815260208190526040902054600114610ac25760405162461bcd60e51b81526004016104469061140a565b600e54600114610ae45760405162461bcd60e51b815260040161044690611436565b6000600e8190556006819055600755600254600154604051633bf8efc960e21b81526001600160a01b039283169263a2f91af292169063efe3bf2490610b2e90859060040161131d565b602060405180830381865afa158015610b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6f9190611394565b6040518263ffffffff1660e01b8152600401610b8d91815260200190565b600060405180830381600087803b158015610ba757600080fd5b505af1158015610bbb573d6000803e3d6000fd5b50505050600360009054906101000a90046001600160a01b03166001600160a01b031663692450096040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c0f57600080fd5b505af1158015610c23573d6000803e3d6000fd5b5050600154604051633bf8efc960e21b81526001600160a01b03909116925063f37ac61c9150610d1a90839063efe3bf2490610c6390309060040161131d565b602060405180830381865afa158015610c80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca49190611394565b60015460405163782c909560e11b81526001600160a01b039091169063f059212a90610cd490309060040161131d565b602060405180830381865afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d159190611394565b6112c9565b6040518263ffffffff1660e01b8152600401610d3891815260200190565b600060405180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b50505050565b33600090815260208190526040902054600114610d9b5760405162461bcd60e51b81526004016104469061140a565b42600090815260056020526040902054610db590826112a3565b42600090815260056020526040902055600654610dd290826112a3565b60065550565b33600090815260208190526040902054600114610e075760405162461bcd60e51b81526004016104469061140a565b6001600160a01b0316600090815260208190526040812055565b60015460405163782c909560e11b8152600091610e5a916104d0916001600160a01b03169063f059212a9061048790309060040161131d565b600a541115610e7b5760405162461bcd60e51b81526004016104469061145c565b600154604051633bf8efc960e21b81526001600160a01b039091169063efe3bf2490610eab90309060040161131d565b602060405180830381865afa158015610ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eec9190611394565b15610f305760405162461bcd60e51b8152602060048201526014602482015273566f772f737572706c75732d6e6f742d7a65726f60601b6044820152606401610446565b610f3e600754600a546112a3565b600755600354600954600a54604051632dfa734960e21b8152306004820152602481019290925260448201526001600160a01b039091169063b7e9cd249060640161052d565b33600090815260208190526040902054600114610fb35760405162461bcd60e51b81526004016104469061140a565b8166333630b83832b960c91b036110a757600154600254604051636e26907d60e11b81526001600160a01b039283169263dc4d20fa92610ff89291169060040161131d565b600060405180830381600087803b15801561101257600080fd5b505af1158015611026573d6000803e3d6000fd5b5050600280546001600160a01b0319166001600160a01b03858116919091179091556001546040516328ec8bf160e21b81529116925063a3b22fc4915061107190849060040161131d565b600060405180830381600087803b15801561108b57600080fd5b505af115801561109f573d6000803e3d6000fd5b505050505050565b8166333637b83832b960c91b036110d757600380546001600160a01b0319166001600160a01b0383161790555050565b81676d756c746973696760c01b036109dd57600480546001600160a01b0319166001600160a01b0383161790555050565b42611115826008546112a3565b111561115b5760405162461bcd60e51b8152602060048201526015602482015274159bddcbddd85a5d0b5b9bdd0b599a5b9a5cda1959605a1b6044820152606401610446565b60065460008281526005602052604090205461117791906112b9565b600655600090815260056020526040812055565b600154604051633bf8efc960e21b81526001600160a01b039091169063efe3bf24906111bb90309060040161131d565b602060405180830381865afa1580156111d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111fc9190611394565b81111561121b5760405162461bcd60e51b8152600401610446906113ad565b60015460405163782c909560e11b8152611253916104d0916001600160a01b039091169063f059212a9061048790309060040161131d565b8111156112725760405162461bcd60e51b81526004016104469061145c565b600154604051633cdeb18760e21b8152600481018390526001600160a01b039091169063f37ac61c90602401610900565b808201828110156112b357600080fd5b92915050565b808203828111156112b357600080fd5b6000818311156112d957816112db565b825b9392505050565b6000602082840312156112f457600080fd5b5035919050565b6000806040838503121561130e57600080fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b80356001600160a01b038116811461134857600080fd5b919050565b60006020828403121561135f57600080fd5b6112db82611331565b6000806040838503121561137b57600080fd5b8235915061138b60208401611331565b90509250929050565b6000602082840312156113a657600080fd5b5051919050565b602080825260189082015277566f772f696e73756666696369656e742d737572706c757360401b604082015260600190565b602080825260119082015270566f772f646562742d6e6f742d7a65726f60781b604082015260600190565b602080825260129082015271159bddcbdb9bdd0b585d5d1a1bdc9a5e995960721b604082015260600190565b6020808252600c908201526b566f772f6e6f742d6c69766560a01b604082015260600190565b602080825260159082015274159bddcbda5b9cdd59999a58da595b9d0b5919589d605a1b60408201526060019056fea2646970667358221220a3d0d4f5ed0d1107bb1d04977a64f6989bd5b869125d616f21594fa196ba4bb264736f6c634300080d0033";

type VowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vow__factory extends ContractFactory {
  constructor(...args: VowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vat_: string,
    flapper_: string,
    flopper_: string,
    multisig_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vow> {
    return super.deploy(
      vat_,
      flapper_,
      flopper_,
      multisig_,
      overrides || {}
    ) as Promise<Vow>;
  }
  override getDeployTransaction(
    vat_: string,
    flapper_: string,
    flopper_: string,
    multisig_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vat_,
      flapper_,
      flopper_,
      multisig_,
      overrides || {}
    );
  }
  override attach(address: string): Vow {
    return super.attach(address) as Vow;
  }
  override connect(signer: Signer): Vow__factory {
    return super.connect(signer) as Vow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VowInterface {
    return new utils.Interface(_abi) as VowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vow {
    return new Contract(address, _abi, signerOrProvider) as Vow;
  }
}
