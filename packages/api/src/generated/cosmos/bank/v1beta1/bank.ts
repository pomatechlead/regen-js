/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** Params defines the parameters for the bank module. */
export interface Params {
  $type: 'cosmos.bank.v1beta1.Params';
  sendEnabled: SendEnabled[];
  defaultSendEnabled: boolean;
}

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
  $type: 'cosmos.bank.v1beta1.SendEnabled';
  denom: string;
  enabled: boolean;
}

/** Input models transaction input. */
export interface Input {
  $type: 'cosmos.bank.v1beta1.Input';
  address: string;
  coins: Coin[];
}

/** Output models transaction outputs. */
export interface Output {
  $type: 'cosmos.bank.v1beta1.Output';
  address: string;
  coins: Coin[];
}

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @deprecated
 */
export interface Supply {
  $type: 'cosmos.bank.v1beta1.Supply';
  total: Coin[];
}

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
  $type: 'cosmos.bank.v1beta1.DenomUnit';
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 1^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}

/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
  $type: 'cosmos.bank.v1beta1.Metadata';
  description: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denomUnits: DenomUnit[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /** name defines the name of the token (eg: Cosmos Atom) */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   */
  symbol: string;
}

function createBaseParams(): Params {
  return {
    $type: 'cosmos.bank.v1beta1.Params',
    sendEnabled: [],
    defaultSendEnabled: false,
  };
}

export const Params = {
  $type: 'cosmos.bank.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultSendEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      sendEnabled: Array.isArray(object?.sendEnabled)
        ? object.sendEnabled.map((e: any) => SendEnabled.fromJSON(e))
        : [],
      defaultSendEnabled: isSet(object.defaultSendEnabled)
        ? Boolean(object.defaultSendEnabled)
        : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map(e =>
        e ? SendEnabled.toJSON(e) : undefined,
      );
    } else {
      obj.sendEnabled = [];
    }
    message.defaultSendEnabled !== undefined &&
      (obj.defaultSendEnabled = message.defaultSendEnabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.sendEnabled =
      object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    message.defaultSendEnabled = object.defaultSendEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseSendEnabled(): SendEnabled {
  return {
    $type: 'cosmos.bank.v1beta1.SendEnabled',
    denom: '',
    enabled: false,
  };
}

export const SendEnabled = {
  $type: 'cosmos.bank.v1beta1.SendEnabled' as const,

  encode(
    message: SendEnabled,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendEnabled {
    return {
      $type: SendEnabled.$type,
      denom: isSet(object.denom) ? String(object.denom) : '',
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: SendEnabled): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendEnabled>, I>>(
    object: I,
  ): SendEnabled {
    const message = createBaseSendEnabled();
    message.denom = object.denom ?? '';
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(SendEnabled.$type, SendEnabled);

function createBaseInput(): Input {
  return { $type: 'cosmos.bank.v1beta1.Input', address: '', coins: [] };
}

export const Input = {
  $type: 'cosmos.bank.v1beta1.Input' as const,

  encode(message: Input, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Input {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInput();
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

  fromJSON(object: any): Input {
    return {
      $type: Input.$type,
      address: isSet(object.address) ? String(object.address) : '',
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Input): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Input>, I>>(object: I): Input {
    const message = createBaseInput();
    message.address = object.address ?? '';
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Input.$type, Input);

function createBaseOutput(): Output {
  return { $type: 'cosmos.bank.v1beta1.Output', address: '', coins: [] };
}

export const Output = {
  $type: 'cosmos.bank.v1beta1.Output' as const,

  encode(
    message: Output,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Output {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutput();
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

  fromJSON(object: any): Output {
    return {
      $type: Output.$type,
      address: isSet(object.address) ? String(object.address) : '',
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Output>, I>>(object: I): Output {
    const message = createBaseOutput();
    message.address = object.address ?? '';
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Output.$type, Output);

function createBaseSupply(): Supply {
  return { $type: 'cosmos.bank.v1beta1.Supply', total: [] };
}

export const Supply = {
  $type: 'cosmos.bank.v1beta1.Supply' as const,

  encode(
    message: Supply,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Supply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Supply {
    return {
      $type: Supply.$type,
      total: Array.isArray(object?.total)
        ? object.total.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Supply): unknown {
    const obj: any = {};
    if (message.total) {
      obj.total = message.total.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Supply>, I>>(object: I): Supply {
    const message = createBaseSupply();
    message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Supply.$type, Supply);

function createBaseDenomUnit(): DenomUnit {
  return {
    $type: 'cosmos.bank.v1beta1.DenomUnit',
    denom: '',
    exponent: 0,
    aliases: [],
  };
}

export const DenomUnit = {
  $type: 'cosmos.bank.v1beta1.DenomUnit' as const,

  encode(
    message: DenomUnit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomUnit {
    return {
      $type: DenomUnit.$type,
      denom: isSet(object.denom) ? String(object.denom) : '',
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      aliases: Array.isArray(object?.aliases)
        ? object.aliases.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DenomUnit): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exponent !== undefined &&
      (obj.exponent = Math.round(message.exponent));
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DenomUnit>, I>>(
    object: I,
  ): DenomUnit {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? '';
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(DenomUnit.$type, DenomUnit);

function createBaseMetadata(): Metadata {
  return {
    $type: 'cosmos.bank.v1beta1.Metadata',
    description: '',
    denomUnits: [],
    base: '',
    display: '',
    name: '',
    symbol: '',
  };
}

export const Metadata = {
  $type: 'cosmos.bank.v1beta1.Metadata' as const,

  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== '') {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== '') {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== '') {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== '') {
      writer.uint32(50).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      $type: Metadata.$type,
      description: isSet(object.description) ? String(object.description) : '',
      denomUnits: Array.isArray(object?.denomUnits)
        ? object.denomUnits.map((e: any) => DenomUnit.fromJSON(e))
        : [],
      base: isSet(object.base) ? String(object.base) : '',
      display: isSet(object.display) ? String(object.display) : '',
      name: isSet(object.name) ? String(object.name) : '',
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.denomUnits) {
      obj.denomUnits = message.denomUnits.map(e =>
        e ? DenomUnit.toJSON(e) : undefined,
      );
    } else {
      obj.denomUnits = [];
    }
    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.description = object.description ?? '';
    message.denomUnits =
      object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? '';
    message.display = object.display ?? '';
    message.name = object.name ?? '';
    message.symbol = object.symbol ?? '';
    return message;
  },
};

messageTypeRegistry.set(Metadata.$type, Metadata);

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
