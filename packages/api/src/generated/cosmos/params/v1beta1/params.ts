/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.params.v1beta1';

/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  $type: 'cosmos.params.v1beta1.ParameterChangeProposal';
  title: string;
  description: string;
  changes: ParamChange[];
}

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  $type: 'cosmos.params.v1beta1.ParamChange';
  subspace: string;
  key: string;
  value: string;
}

function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    $type: 'cosmos.params.v1beta1.ParameterChangeProposal',
    title: '',
    description: '',
    changes: [],
  };
}

export const ParameterChangeProposal = {
  $type: 'cosmos.params.v1beta1.ParameterChangeProposal' as const,

  encode(
    message: ParameterChangeProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ParameterChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParameterChangeProposal {
    return {
      $type: ParameterChangeProposal.$type,
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => ParamChange.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ParameterChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.changes) {
      obj.changes = message.changes.map(e =>
        e ? ParamChange.toJSON(e) : undefined,
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(
    object: I,
  ): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.changes =
      object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ParameterChangeProposal.$type, ParameterChangeProposal);

function createBaseParamChange(): ParamChange {
  return {
    $type: 'cosmos.params.v1beta1.ParamChange',
    subspace: '',
    key: '',
    value: '',
  };
}

export const ParamChange = {
  $type: 'cosmos.params.v1beta1.ParamChange' as const,

  encode(
    message: ParamChange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.subspace !== '') {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamChange {
    return {
      $type: ParamChange.$type,
      subspace: isSet(object.subspace) ? String(object.subspace) : '',
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: ParamChange): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(
    object: I,
  ): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? '';
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

messageTypeRegistry.set(ParamChange.$type, ParamChange);

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
