/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { CapabilityOwners } from '../../../cosmos/capability/v1beta1/capability';

export const protobufPackage = 'cosmos.capability.v1beta1';

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  $type: 'cosmos.capability.v1beta1.GenesisOwners';
  /** index is the index of the capability owner. */
  index: Long;
  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  $type: 'cosmos.capability.v1beta1.GenesisState';
  /** index is the capability global index. */
  index: Long;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}

function createBaseGenesisOwners(): GenesisOwners {
  return {
    $type: 'cosmos.capability.v1beta1.GenesisOwners',
    index: Long.UZERO,
    indexOwners: undefined,
  };
}

export const GenesisOwners = {
  $type: 'cosmos.capability.v1beta1.GenesisOwners' as const,

  encode(
    message: GenesisOwners,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(
        message.indexOwners,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(
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

  fromJSON(object: any): GenesisOwners {
    return {
      $type: GenesisOwners.$type,
      index: isSet(object.index) ? Long.fromString(object.index) : Long.UZERO,
      indexOwners: isSet(object.indexOwners)
        ? CapabilityOwners.fromJSON(object.indexOwners)
        : undefined,
    };
  },

  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    message.indexOwners !== undefined &&
      (obj.indexOwners = message.indexOwners
        ? CapabilityOwners.toJSON(message.indexOwners)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisOwners>, I>>(
    object: I,
  ): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.indexOwners =
      object.indexOwners !== undefined && object.indexOwners !== null
        ? CapabilityOwners.fromPartial(object.indexOwners)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GenesisOwners.$type, GenesisOwners);

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'cosmos.capability.v1beta1.GenesisState',
    index: Long.UZERO,
    owners: [],
  };
}

export const GenesisState = {
  $type: 'cosmos.capability.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
      index: isSet(object.index) ? Long.fromString(object.index) : Long.UZERO,
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => GenesisOwners.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    if (message.owners) {
      obj.owners = message.owners.map(e =>
        e ? GenesisOwners.toJSON(e) : undefined,
      );
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.owners =
      object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
