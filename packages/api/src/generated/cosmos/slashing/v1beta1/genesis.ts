/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Params,
  ValidatorSigningInfo,
} from '../../../cosmos/slashing/v1beta1/slashing';

export const protobufPackage = 'cosmos.slashing.v1beta1';

/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  $type: 'cosmos.slashing.v1beta1.GenesisState';
  /** params defines all the paramaters of related to deposit. */
  params?: Params;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}

/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  $type: 'cosmos.slashing.v1beta1.SigningInfo';
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo?: ValidatorSigningInfo;
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  $type: 'cosmos.slashing.v1beta1.ValidatorMissedBlocks';
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missedBlocks: MissedBlock[];
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  $type: 'cosmos.slashing.v1beta1.MissedBlock';
  /** index is the height at which the block was missed. */
  index: Long;
  /** missed is the missed status. */
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'cosmos.slashing.v1beta1.GenesisState',
    params: undefined,
    signingInfos: [],
    missedBlocks: [],
  };
}

export const GenesisState = {
  $type: 'cosmos.slashing.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.signingInfos.push(
            SigningInfo.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.missedBlocks.push(
            ValidatorMissedBlocks.decode(reader, reader.uint32()),
          );
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
      signingInfos: Array.isArray(object?.signingInfos)
        ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e))
        : [],
      missedBlocks: Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.signingInfos) {
      obj.signingInfos = message.signingInfos.map(e =>
        e ? SigningInfo.toJSON(e) : undefined,
      );
    } else {
      obj.signingInfos = [];
    }
    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e =>
        e ? ValidatorMissedBlocks.toJSON(e) : undefined,
      );
    } else {
      obj.missedBlocks = [];
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
    message.signingInfos =
      object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks =
      object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

function createBaseSigningInfo(): SigningInfo {
  return {
    $type: 'cosmos.slashing.v1beta1.SigningInfo',
    address: '',
    validatorSigningInfo: undefined,
  };
}

export const SigningInfo = {
  $type: 'cosmos.slashing.v1beta1.SigningInfo' as const,

  encode(
    message: SigningInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(
        message.validatorSigningInfo,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = ValidatorSigningInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningInfo {
    return {
      $type: SigningInfo.$type,
      address: isSet(object.address) ? String(object.address) : '',
      validatorSigningInfo: isSet(object.validatorSigningInfo)
        ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo)
        : undefined,
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.validatorSigningInfo !== undefined &&
      (obj.validatorSigningInfo = message.validatorSigningInfo
        ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningInfo>, I>>(
    object: I,
  ): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? '';
    message.validatorSigningInfo =
      object.validatorSigningInfo !== undefined &&
      object.validatorSigningInfo !== null
        ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SigningInfo.$type, SigningInfo);

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    $type: 'cosmos.slashing.v1beta1.ValidatorMissedBlocks',
    address: '',
    missedBlocks: [],
  };
}

export const ValidatorMissedBlocks = {
  $type: 'cosmos.slashing.v1beta1.ValidatorMissedBlocks' as const,

  encode(
    message: ValidatorMissedBlocks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(
            MissedBlock.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      $type: ValidatorMissedBlocks.$type,
      address: isSet(object.address) ? String(object.address) : '',
      missedBlocks: Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e =>
        e ? MissedBlock.toJSON(e) : undefined,
      );
    } else {
      obj.missedBlocks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorMissedBlocks>, I>>(
    object: I,
  ): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? '';
    message.missedBlocks =
      object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ValidatorMissedBlocks.$type, ValidatorMissedBlocks);

function createBaseMissedBlock(): MissedBlock {
  return {
    $type: 'cosmos.slashing.v1beta1.MissedBlock',
    index: Long.ZERO,
    missed: false,
  };
}

export const MissedBlock = {
  $type: 'cosmos.slashing.v1beta1.MissedBlock' as const,

  encode(
    message: MissedBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64() as Long;
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MissedBlock {
    return {
      $type: MissedBlock.$type,
      index: isSet(object.index) ? Long.fromString(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false,
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = (message.index || Long.ZERO).toString());
    message.missed !== undefined && (obj.missed = message.missed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MissedBlock>, I>>(
    object: I,
  ): MissedBlock {
    const message = createBaseMissedBlock();
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.ZERO;
    message.missed = object.missed ?? false;
    return message;
  },
};

messageTypeRegistry.set(MissedBlock.$type, MissedBlock);

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
