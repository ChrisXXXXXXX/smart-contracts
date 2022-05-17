/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface StairstepExponentialDecreaseInterface extends utils.Interface {
  functions: {
    "cut()": FunctionFragment;
    "deny(address)": FunctionFragment;
    "file(bytes32,uint256)": FunctionFragment;
    "price(uint256,uint256)": FunctionFragment;
    "rely(address)": FunctionFragment;
    "step()": FunctionFragment;
    "wards(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cut"
      | "deny"
      | "file"
      | "price"
      | "rely"
      | "step"
      | "wards"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cut", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [string]): string;
  encodeFunctionData(
    functionFragment: "file",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "rely", values: [string]): string;
  encodeFunctionData(functionFragment: "step", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [string]): string;

  decodeFunctionResult(functionFragment: "cut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;

  events: {
    "Deny(address)": EventFragment;
    "File(bytes32,uint256)": EventFragment;
    "Rely(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deny"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "File"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rely"): EventFragment;
}

export interface DenyEventObject {
  usr: string;
}
export type DenyEvent = TypedEvent<[string], DenyEventObject>;

export type DenyEventFilter = TypedEventFilter<DenyEvent>;

export interface FileEventObject {
  what: string;
  data: BigNumber;
}
export type FileEvent = TypedEvent<[string, BigNumber], FileEventObject>;

export type FileEventFilter = TypedEventFilter<FileEvent>;

export interface RelyEventObject {
  usr: string;
}
export type RelyEvent = TypedEvent<[string], RelyEventObject>;

export type RelyEventFilter = TypedEventFilter<RelyEvent>;

export interface StairstepExponentialDecrease extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StairstepExponentialDecreaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cut(overrides?: CallOverrides): Promise<[BigNumber]>;

    deny(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    file(
      what: BytesLike,
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    price(
      top: BigNumberish,
      dur: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rely(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    step(overrides?: CallOverrides): Promise<[BigNumber]>;

    wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cut(overrides?: CallOverrides): Promise<BigNumber>;

  deny(
    usr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  file(
    what: BytesLike,
    data: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  price(
    top: BigNumberish,
    dur: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rely(
    usr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  step(overrides?: CallOverrides): Promise<BigNumber>;

  wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cut(overrides?: CallOverrides): Promise<BigNumber>;

    deny(usr: string, overrides?: CallOverrides): Promise<void>;

    file(
      what: BytesLike,
      data: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    price(
      top: BigNumberish,
      dur: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rely(usr: string, overrides?: CallOverrides): Promise<void>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Deny(address)"(usr?: string | null): DenyEventFilter;
    Deny(usr?: string | null): DenyEventFilter;

    "File(bytes32,uint256)"(
      what?: BytesLike | null,
      data?: null
    ): FileEventFilter;
    File(what?: BytesLike | null, data?: null): FileEventFilter;

    "Rely(address)"(usr?: string | null): RelyEventFilter;
    Rely(usr?: string | null): RelyEventFilter;
  };

  estimateGas: {
    cut(overrides?: CallOverrides): Promise<BigNumber>;

    deny(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    file(
      what: BytesLike,
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    price(
      top: BigNumberish,
      dur: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rely(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cut(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deny(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    file(
      what: BytesLike,
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    price(
      top: BigNumberish,
      dur: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rely(
      usr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    step(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
