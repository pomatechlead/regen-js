/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.staking.v1beta1';

/** AuthorizationType defines the type of staking module authorization type */
export enum AuthorizationType {
  /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
  AUTHORIZATION_TYPE_UNSPECIFIED = 0,
  /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
  AUTHORIZATION_TYPE_DELEGATE = 1,
  /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
  AUTHORIZATION_TYPE_UNDELEGATE = 2,
  /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
  AUTHORIZATION_TYPE_REDELEGATE = 3,
  UNRECOGNIZED = -1,
}

export function authorizationTypeFromJSON(object: any): AuthorizationType {
  switch (object) {
    case 0:
    case 'AUTHORIZATION_TYPE_UNSPECIFIED':
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
    case 1:
    case 'AUTHORIZATION_TYPE_DELEGATE':
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
    case 2:
    case 'AUTHORIZATION_TYPE_UNDELEGATE':
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
    case 3:
    case 'AUTHORIZATION_TYPE_REDELEGATE':
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}

export function authorizationTypeToJSON(object: AuthorizationType): string {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return 'AUTHORIZATION_TYPE_UNSPECIFIED';
    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return 'AUTHORIZATION_TYPE_DELEGATE';
    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return 'AUTHORIZATION_TYPE_UNDELEGATE';
    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return 'AUTHORIZATION_TYPE_REDELEGATE';
    default:
      return 'UNKNOWN';
  }
}

/** StakeAuthorization defines authorization for delegate/undelegate/redelegate. */
export interface StakeAuthorization {
  $type: 'cosmos.staking.v1beta1.StakeAuthorization';
  /**
   * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
   * empty, there is no spend limit and any amount of coins can be delegated.
   */
  maxTokens?: Coin;
  /**
   * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
   * account.
   */
  allowList?: StakeAuthorization_Validators | undefined;
  /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */
  denyList?: StakeAuthorization_Validators | undefined;
  /** authorization_type defines one of AuthorizationType. */
  authorizationType: AuthorizationType;
}

/** Validators defines list of validator addresses. */
export interface StakeAuthorization_Validators {
  $type: 'cosmos.staking.v1beta1.StakeAuthorization.Validators';
  address: string[];
}

function createBaseStakeAuthorization(): StakeAuthorization {
  return {
    $type: 'cosmos.staking.v1beta1.StakeAuthorization',
    maxTokens: undefined,
    allowList: undefined,
    denyList: undefined,
    authorizationType: 0,
  };
}

export const StakeAuthorization = {
  $type: 'cosmos.staking.v1beta1.StakeAuthorization' as const,

  encode(
    message: StakeAuthorization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.maxTokens !== undefined) {
      Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowList !== undefined) {
      StakeAuthorization_Validators.encode(
        message.allowList,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.denyList !== undefined) {
      StakeAuthorization_Validators.encode(
        message.denyList,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokens = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowList = StakeAuthorization_Validators.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.denyList = StakeAuthorization_Validators.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.authorizationType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeAuthorization {
    return {
      $type: StakeAuthorization.$type,
      maxTokens: isSet(object.maxTokens)
        ? Coin.fromJSON(object.maxTokens)
        : undefined,
      allowList: isSet(object.allowList)
        ? StakeAuthorization_Validators.fromJSON(object.allowList)
        : undefined,
      denyList: isSet(object.denyList)
        ? StakeAuthorization_Validators.fromJSON(object.denyList)
        : undefined,
      authorizationType: isSet(object.authorizationType)
        ? authorizationTypeFromJSON(object.authorizationType)
        : 0,
    };
  },

  toJSON(message: StakeAuthorization): unknown {
    const obj: any = {};
    message.maxTokens !== undefined &&
      (obj.maxTokens = message.maxTokens
        ? Coin.toJSON(message.maxTokens)
        : undefined);
    message.allowList !== undefined &&
      (obj.allowList = message.allowList
        ? StakeAuthorization_Validators.toJSON(message.allowList)
        : undefined);
    message.denyList !== undefined &&
      (obj.denyList = message.denyList
        ? StakeAuthorization_Validators.toJSON(message.denyList)
        : undefined);
    message.authorizationType !== undefined &&
      (obj.authorizationType = authorizationTypeToJSON(
        message.authorizationType,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeAuthorization>, I>>(
    object: I,
  ): StakeAuthorization {
    const message = createBaseStakeAuthorization();
    message.maxTokens =
      object.maxTokens !== undefined && object.maxTokens !== null
        ? Coin.fromPartial(object.maxTokens)
        : undefined;
    message.allowList =
      object.allowList !== undefined && object.allowList !== null
        ? StakeAuthorization_Validators.fromPartial(object.allowList)
        : undefined;
    message.denyList =
      object.denyList !== undefined && object.denyList !== null
        ? StakeAuthorization_Validators.fromPartial(object.denyList)
        : undefined;
    message.authorizationType = object.authorizationType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StakeAuthorization.$type, StakeAuthorization);

function createBaseStakeAuthorization_Validators(): StakeAuthorization_Validators {
  return {
    $type: 'cosmos.staking.v1beta1.StakeAuthorization.Validators',
    address: [],
  };
}

export const StakeAuthorization_Validators = {
  $type: 'cosmos.staking.v1beta1.StakeAuthorization.Validators' as const,

  encode(
    message: StakeAuthorization_Validators,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): StakeAuthorization_Validators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeAuthorization_Validators {
    return {
      $type: StakeAuthorization_Validators.$type,
      address: Array.isArray(object?.address)
        ? object.address.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: StakeAuthorization_Validators): unknown {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeAuthorization_Validators>, I>>(
    object: I,
  ): StakeAuthorization_Validators {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  StakeAuthorization_Validators.$type,
  StakeAuthorization_Validators,
);

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
