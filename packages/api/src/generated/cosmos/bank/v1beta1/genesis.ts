/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Params, Metadata } from '../../../cosmos/bank/v1beta1/bank';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
  $type: 'cosmos.bank.v1beta1.GenesisState';
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** balances is an array containing the balances of all the accounts. */
  balances: Balance[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */
  supply: Coin[];
  /** denom_metadata defines the metadata of the differents coins. */
  denomMetadata: Metadata[];
}

/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
  $type: 'cosmos.bank.v1beta1.Balance';
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */
  coins: Coin[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'cosmos.bank.v1beta1.GenesisState',
    params: undefined,
    balances: [],
    supply: [],
    denomMetadata: [],
  };
}

export const GenesisState = {
  $type: 'cosmos.bank.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.denomMetadata) {
      Metadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Balance.fromJSON(e))
        : [],
      supply: Array.isArray(object?.supply)
        ? object.supply.map((e: any) => Coin.fromJSON(e))
        : [],
      denomMetadata: Array.isArray(object?.denomMetadata)
        ? object.denomMetadata.map((e: any) => Metadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.balances) {
      obj.balances = message.balances.map(e =>
        e ? Balance.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    if (message.supply) {
      obj.supply = message.supply.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    if (message.denomMetadata) {
      obj.denomMetadata = message.denomMetadata.map(e =>
        e ? Metadata.toJSON(e) : undefined,
      );
    } else {
      obj.denomMetadata = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.denomMetadata =
      object.denomMetadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

function createBaseBalance(): Balance {
  return { $type: 'cosmos.bank.v1beta1.Balance', address: '', coins: [] };
}

export const Balance = {
  $type: 'cosmos.bank.v1beta1.Balance' as const,

  encode(
    message: Balance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return {
      $type: Balance.$type,
      address: isSet(object.address) ? String(object.address) : '',
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? '';
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Balance.$type, Balance);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
