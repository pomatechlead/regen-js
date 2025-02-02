/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'tendermint.p2p';

export interface NetAddress {
  $type: 'tendermint.p2p.NetAddress';
  id: string;
  ip: string;
  port: number;
}

export interface ProtocolVersion {
  $type: 'tendermint.p2p.ProtocolVersion';
  p2p: Long;
  block: Long;
  app: Long;
}

export interface DefaultNodeInfo {
  $type: 'tendermint.p2p.DefaultNodeInfo';
  protocolVersion?: ProtocolVersion;
  defaultNodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: DefaultNodeInfoOther;
}

export interface DefaultNodeInfoOther {
  $type: 'tendermint.p2p.DefaultNodeInfoOther';
  txIndex: string;
  rpcAddress: string;
}

function createBaseNetAddress(): NetAddress {
  return { $type: 'tendermint.p2p.NetAddress', id: '', ip: '', port: 0 };
}

export const NetAddress = {
  $type: 'tendermint.p2p.NetAddress' as const,

  encode(
    message: NetAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== '') {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetAddress {
    return {
      $type: NetAddress.$type,
      id: isSet(object.id) ? String(object.id) : '',
      ip: isSet(object.ip) ? String(object.ip) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetAddress>, I>>(
    object: I,
  ): NetAddress {
    const message = createBaseNetAddress();
    message.id = object.id ?? '';
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

messageTypeRegistry.set(NetAddress.$type, NetAddress);

function createBaseProtocolVersion(): ProtocolVersion {
  return {
    $type: 'tendermint.p2p.ProtocolVersion',
    p2p: Long.UZERO,
    block: Long.UZERO,
    app: Long.UZERO,
  };
}

export const ProtocolVersion = {
  $type: 'tendermint.p2p.ProtocolVersion' as const,

  encode(
    message: ProtocolVersion,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64() as Long;
          break;
        case 2:
          message.block = reader.uint64() as Long;
          break;
        case 3:
          message.app = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    return {
      $type: ProtocolVersion.$type,
      p2p: isSet(object.p2p) ? Long.fromString(object.p2p) : Long.UZERO,
      block: isSet(object.block) ? Long.fromString(object.block) : Long.UZERO,
      app: isSet(object.app) ? Long.fromString(object.app) : Long.UZERO,
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined &&
      (obj.p2p = (message.p2p || Long.UZERO).toString());
    message.block !== undefined &&
      (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined &&
      (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(
    object: I,
  ): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p =
      object.p2p !== undefined && object.p2p !== null
        ? Long.fromValue(object.p2p)
        : Long.UZERO;
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.UZERO;
    message.app =
      object.app !== undefined && object.app !== null
        ? Long.fromValue(object.app)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(ProtocolVersion.$type, ProtocolVersion);

function createBaseDefaultNodeInfo(): DefaultNodeInfo {
  return {
    $type: 'tendermint.p2p.DefaultNodeInfo',
    protocolVersion: undefined,
    defaultNodeId: '',
    listenAddr: '',
    network: '',
    version: '',
    channels: new Uint8Array(),
    moniker: '',
    other: undefined,
  };
}

export const DefaultNodeInfo = {
  $type: 'tendermint.p2p.DefaultNodeInfo' as const,

  encode(
    message: DefaultNodeInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(
        message.protocolVersion,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.defaultNodeId !== '') {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== '') {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== '') {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== '') {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== '') {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(
        message.other,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfo {
    return {
      $type: DefaultNodeInfo.$type,
      protocolVersion: isSet(object.protocolVersion)
        ? ProtocolVersion.fromJSON(object.protocolVersion)
        : undefined,
      defaultNodeId: isSet(object.defaultNodeId)
        ? String(object.defaultNodeId)
        : '',
      listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : '',
      network: isSet(object.network) ? String(object.network) : '',
      version: isSet(object.version) ? String(object.version) : '',
      channels: isSet(object.channels)
        ? bytesFromBase64(object.channels)
        : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : '',
      other: isSet(object.other)
        ? DefaultNodeInfoOther.fromJSON(object.other)
        : undefined,
    };
  },

  toJSON(message: DefaultNodeInfo): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = message.protocolVersion
        ? ProtocolVersion.toJSON(message.protocolVersion)
        : undefined);
    message.defaultNodeId !== undefined &&
      (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined &&
      (obj.channels = base64FromBytes(
        message.channels !== undefined ? message.channels : new Uint8Array(),
      ));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined &&
      (obj.other = message.other
        ? DefaultNodeInfoOther.toJSON(message.other)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(
    object: I,
  ): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    message.protocolVersion =
      object.protocolVersion !== undefined && object.protocolVersion !== null
        ? ProtocolVersion.fromPartial(object.protocolVersion)
        : undefined;
    message.defaultNodeId = object.defaultNodeId ?? '';
    message.listenAddr = object.listenAddr ?? '';
    message.network = object.network ?? '';
    message.version = object.version ?? '';
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? '';
    message.other =
      object.other !== undefined && object.other !== null
        ? DefaultNodeInfoOther.fromPartial(object.other)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DefaultNodeInfo.$type, DefaultNodeInfo);

function createBaseDefaultNodeInfoOther(): DefaultNodeInfoOther {
  return {
    $type: 'tendermint.p2p.DefaultNodeInfoOther',
    txIndex: '',
    rpcAddress: '',
  };
}

export const DefaultNodeInfoOther = {
  $type: 'tendermint.p2p.DefaultNodeInfoOther' as const,

  encode(
    message: DefaultNodeInfoOther,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.txIndex !== '') {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== '') {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DefaultNodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfoOther {
    return {
      $type: DefaultNodeInfoOther.$type,
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : '',
      rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : '',
    };
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(
    object: I,
  ): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    message.txIndex = object.txIndex ?? '';
    message.rpcAddress = object.rpcAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(DefaultNodeInfoOther.$type, DefaultNodeInfoOther);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
}

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
