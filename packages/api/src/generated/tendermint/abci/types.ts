/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Header } from '../../tendermint/types/types';
import { ProofOps } from '../../tendermint/crypto/proof';
import {
  EvidenceParams,
  ValidatorParams,
  VersionParams,
} from '../../tendermint/types/params';
import { PublicKey } from '../../tendermint/crypto/keys';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'tendermint.abci';

export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}

export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case 'NEW':
      return CheckTxType.NEW;
    case 1:
    case 'RECHECK':
      return CheckTxType.RECHECK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}

export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return 'NEW';
    case CheckTxType.RECHECK:
      return 'RECHECK';
    default:
      return 'UNKNOWN';
  }
}

export enum EvidenceType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}

export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return EvidenceType.UNKNOWN;
    case 1:
    case 'DUPLICATE_VOTE':
      return EvidenceType.DUPLICATE_VOTE;
    case 2:
    case 'LIGHT_CLIENT_ATTACK':
      return EvidenceType.LIGHT_CLIENT_ATTACK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}

export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return 'UNKNOWN';
    case EvidenceType.DUPLICATE_VOTE:
      return 'DUPLICATE_VOTE';
    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return 'LIGHT_CLIENT_ATTACK';
    default:
      return 'UNKNOWN';
  }
}

export interface Request {
  $type: 'tendermint.abci.Request';
  echo?: RequestEcho | undefined;
  flush?: RequestFlush | undefined;
  info?: RequestInfo | undefined;
  setOption?: RequestSetOption | undefined;
  initChain?: RequestInitChain | undefined;
  query?: RequestQuery | undefined;
  beginBlock?: RequestBeginBlock | undefined;
  checkTx?: RequestCheckTx | undefined;
  deliverTx?: RequestDeliverTx | undefined;
  endBlock?: RequestEndBlock | undefined;
  commit?: RequestCommit | undefined;
  listSnapshots?: RequestListSnapshots | undefined;
  offerSnapshot?: RequestOfferSnapshot | undefined;
  loadSnapshotChunk?: RequestLoadSnapshotChunk | undefined;
  applySnapshotChunk?: RequestApplySnapshotChunk | undefined;
}

export interface RequestEcho {
  $type: 'tendermint.abci.RequestEcho';
  message: string;
}

export interface RequestFlush {
  $type: 'tendermint.abci.RequestFlush';
}

export interface RequestInfo {
  $type: 'tendermint.abci.RequestInfo';
  version: string;
  blockVersion: Long;
  p2pVersion: Long;
}

/** nondeterministic */
export interface RequestSetOption {
  $type: 'tendermint.abci.RequestSetOption';
  key: string;
  value: string;
}

export interface RequestInitChain {
  $type: 'tendermint.abci.RequestInitChain';
  time?: Date;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: Long;
}

export interface RequestQuery {
  $type: 'tendermint.abci.RequestQuery';
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}

export interface RequestBeginBlock {
  $type: 'tendermint.abci.RequestBeginBlock';
  hash: Uint8Array;
  header?: Header;
  lastCommitInfo?: LastCommitInfo;
  byzantineValidators: Evidence[];
}

export interface RequestCheckTx {
  $type: 'tendermint.abci.RequestCheckTx';
  tx: Uint8Array;
  type: CheckTxType;
}

export interface RequestDeliverTx {
  $type: 'tendermint.abci.RequestDeliverTx';
  tx: Uint8Array;
}

export interface RequestEndBlock {
  $type: 'tendermint.abci.RequestEndBlock';
  height: Long;
}

export interface RequestCommit {
  $type: 'tendermint.abci.RequestCommit';
}

/** lists available snapshots */
export interface RequestListSnapshots {
  $type: 'tendermint.abci.RequestListSnapshots';
}

/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  $type: 'tendermint.abci.RequestOfferSnapshot';
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}

/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  $type: 'tendermint.abci.RequestLoadSnapshotChunk';
  height: Long;
  format: number;
  chunk: number;
}

/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  $type: 'tendermint.abci.RequestApplySnapshotChunk';
  index: number;
  chunk: Uint8Array;
  sender: string;
}

export interface Response {
  $type: 'tendermint.abci.Response';
  exception?: ResponseException | undefined;
  echo?: ResponseEcho | undefined;
  flush?: ResponseFlush | undefined;
  info?: ResponseInfo | undefined;
  setOption?: ResponseSetOption | undefined;
  initChain?: ResponseInitChain | undefined;
  query?: ResponseQuery | undefined;
  beginBlock?: ResponseBeginBlock | undefined;
  checkTx?: ResponseCheckTx | undefined;
  deliverTx?: ResponseDeliverTx | undefined;
  endBlock?: ResponseEndBlock | undefined;
  commit?: ResponseCommit | undefined;
  listSnapshots?: ResponseListSnapshots | undefined;
  offerSnapshot?: ResponseOfferSnapshot | undefined;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk | undefined;
  applySnapshotChunk?: ResponseApplySnapshotChunk | undefined;
}

/** nondeterministic */
export interface ResponseException {
  $type: 'tendermint.abci.ResponseException';
  error: string;
}

export interface ResponseEcho {
  $type: 'tendermint.abci.ResponseEcho';
  message: string;
}

export interface ResponseFlush {
  $type: 'tendermint.abci.ResponseFlush';
}

export interface ResponseInfo {
  $type: 'tendermint.abci.ResponseInfo';
  data: string;
  version: string;
  appVersion: Long;
  lastBlockHeight: Long;
  lastBlockAppHash: Uint8Array;
}

/** nondeterministic */
export interface ResponseSetOption {
  $type: 'tendermint.abci.ResponseSetOption';
  code: number;
  /** bytes data = 2; */
  log: string;
  info: string;
}

export interface ResponseInitChain {
  $type: 'tendermint.abci.ResponseInitChain';
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}

export interface ResponseQuery {
  $type: 'tendermint.abci.ResponseQuery';
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  codespace: string;
}

export interface ResponseBeginBlock {
  $type: 'tendermint.abci.ResponseBeginBlock';
  events: Event[];
}

export interface ResponseCheckTx {
  $type: 'tendermint.abci.ResponseCheckTx';
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}

export interface ResponseDeliverTx {
  $type: 'tendermint.abci.ResponseDeliverTx';
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}

export interface ResponseEndBlock {
  $type: 'tendermint.abci.ResponseEndBlock';
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
  events: Event[];
}

export interface ResponseCommit {
  $type: 'tendermint.abci.ResponseCommit';
  /** reserve 1 */
  data: Uint8Array;
  retainHeight: Long;
}

export interface ResponseListSnapshots {
  $type: 'tendermint.abci.ResponseListSnapshots';
  snapshots: Snapshot[];
}

export interface ResponseOfferSnapshot {
  $type: 'tendermint.abci.ResponseOfferSnapshot';
  result: ResponseOfferSnapshot_Result;
}

export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}

export function responseOfferSnapshot_ResultFromJSON(
  object: any,
): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case 'ACCEPT':
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case 'ABORT':
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case 'REJECT':
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case 'REJECT_FORMAT':
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case 'REJECT_SENDER':
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}

export function responseOfferSnapshot_ResultToJSON(
  object: ResponseOfferSnapshot_Result,
): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return 'UNKNOWN';
    case ResponseOfferSnapshot_Result.ACCEPT:
      return 'ACCEPT';
    case ResponseOfferSnapshot_Result.ABORT:
      return 'ABORT';
    case ResponseOfferSnapshot_Result.REJECT:
      return 'REJECT';
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return 'REJECT_FORMAT';
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return 'REJECT_SENDER';
    default:
      return 'UNKNOWN';
  }
}

export interface ResponseLoadSnapshotChunk {
  $type: 'tendermint.abci.ResponseLoadSnapshotChunk';
  chunk: Uint8Array;
}

export interface ResponseApplySnapshotChunk {
  $type: 'tendermint.abci.ResponseApplySnapshotChunk';
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}

export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}

export function responseApplySnapshotChunk_ResultFromJSON(
  object: any,
): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case 'ACCEPT':
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case 'ABORT':
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case 'RETRY':
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case 'RETRY_SNAPSHOT':
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case 'REJECT_SNAPSHOT':
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}

export function responseApplySnapshotChunk_ResultToJSON(
  object: ResponseApplySnapshotChunk_Result,
): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return 'UNKNOWN';
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return 'ACCEPT';
    case ResponseApplySnapshotChunk_Result.ABORT:
      return 'ABORT';
    case ResponseApplySnapshotChunk_Result.RETRY:
      return 'RETRY';
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return 'RETRY_SNAPSHOT';
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return 'REJECT_SNAPSHOT';
    default:
      return 'UNKNOWN';
  }
}

/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
  $type: 'tendermint.abci.ConsensusParams';
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
}

/** BlockParams contains limits on the block size. */
export interface BlockParams {
  $type: 'tendermint.abci.BlockParams';
  /** Note: must be greater than 0 */
  maxBytes: Long;
  /** Note: must be greater or equal to -1 */
  maxGas: Long;
}

export interface LastCommitInfo {
  $type: 'tendermint.abci.LastCommitInfo';
  round: number;
  votes: VoteInfo[];
}

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  $type: 'tendermint.abci.Event';
  type: string;
  attributes: EventAttribute[];
}

/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  $type: 'tendermint.abci.EventAttribute';
  key: Uint8Array;
  value: Uint8Array;
  /** nondeterministic */
  index: boolean;
}

/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
  $type: 'tendermint.abci.TxResult';
  height: Long;
  index: number;
  tx: Uint8Array;
  result?: ResponseDeliverTx;
}

/** Validator */
export interface Validator {
  $type: 'tendermint.abci.Validator';
  /** The first 20 bytes of SHA256(public key) */
  address: Uint8Array;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: Long;
}

/** ValidatorUpdate */
export interface ValidatorUpdate {
  $type: 'tendermint.abci.ValidatorUpdate';
  pubKey?: PublicKey;
  power: Long;
}

/** VoteInfo */
export interface VoteInfo {
  $type: 'tendermint.abci.VoteInfo';
  validator?: Validator;
  signedLastBlock: boolean;
}

export interface Evidence {
  $type: 'tendermint.abci.Evidence';
  type: EvidenceType;
  /** The offending validator */
  validator?: Validator;
  /** The height when the offense occurred */
  height: Long;
  /** The corresponding time where the offense occurred */
  time?: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: Long;
}

export interface Snapshot {
  $type: 'tendermint.abci.Snapshot';
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}

function createBaseRequest(): Request {
  return {
    $type: 'tendermint.abci.Request',
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
  };
}

export const Request = {
  $type: 'tendermint.abci.Request' as const,

  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(
        message.setOption,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(
        message.initChain,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(
        message.beginBlock,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(
        message.deliverTx,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(
        message.endBlock,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(
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

  fromJSON(object: any): Request {
    return {
      $type: Request.$type,
      echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush)
        ? RequestFlush.fromJSON(object.flush)
        : undefined,
      info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption)
        ? RequestSetOption.fromJSON(object.setOption)
        : undefined,
      initChain: isSet(object.initChain)
        ? RequestInitChain.fromJSON(object.initChain)
        : undefined,
      query: isSet(object.query)
        ? RequestQuery.fromJSON(object.query)
        : undefined,
      beginBlock: isSet(object.beginBlock)
        ? RequestBeginBlock.fromJSON(object.beginBlock)
        : undefined,
      checkTx: isSet(object.checkTx)
        ? RequestCheckTx.fromJSON(object.checkTx)
        : undefined,
      deliverTx: isSet(object.deliverTx)
        ? RequestDeliverTx.fromJSON(object.deliverTx)
        : undefined,
      endBlock: isSet(object.endBlock)
        ? RequestEndBlock.fromJSON(object.endBlock)
        : undefined,
      commit: isSet(object.commit)
        ? RequestCommit.fromJSON(object.commit)
        : undefined,
      listSnapshots: isSet(object.listSnapshots)
        ? RequestListSnapshots.fromJSON(object.listSnapshots)
        : undefined,
      offerSnapshot: isSet(object.offerSnapshot)
        ? RequestOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk)
        ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk)
        ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.echo !== undefined &&
      (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? RequestFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined &&
      (obj.setOption = message.setOption
        ? RequestSetOption.toJSON(message.setOption)
        : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? RequestInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? RequestQuery.toJSON(message.query)
        : undefined);
    message.beginBlock !== undefined &&
      (obj.beginBlock = message.beginBlock
        ? RequestBeginBlock.toJSON(message.beginBlock)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? RequestCheckTx.toJSON(message.checkTx)
        : undefined);
    message.deliverTx !== undefined &&
      (obj.deliverTx = message.deliverTx
        ? RequestDeliverTx.toJSON(message.deliverTx)
        : undefined);
    message.endBlock !== undefined &&
      (obj.endBlock = message.endBlock
        ? RequestEndBlock.toJSON(message.endBlock)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? RequestCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? RequestListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? RequestOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? RequestEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? RequestFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? RequestInfo.fromPartial(object.info)
        : undefined;
    message.setOption =
      object.setOption !== undefined && object.setOption !== null
        ? RequestSetOption.fromPartial(object.setOption)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? RequestInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? RequestQuery.fromPartial(object.query)
        : undefined;
    message.beginBlock =
      object.beginBlock !== undefined && object.beginBlock !== null
        ? RequestBeginBlock.fromPartial(object.beginBlock)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? RequestCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.deliverTx =
      object.deliverTx !== undefined && object.deliverTx !== null
        ? RequestDeliverTx.fromPartial(object.deliverTx)
        : undefined;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? RequestEndBlock.fromPartial(object.endBlock)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? RequestCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? RequestListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? RequestOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Request.$type, Request);

function createBaseRequestEcho(): RequestEcho {
  return { $type: 'tendermint.abci.RequestEcho', message: '' };
}

export const RequestEcho = {
  $type: 'tendermint.abci.RequestEcho' as const,

  encode(
    message: RequestEcho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestEcho {
    return {
      $type: RequestEcho.$type,
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: RequestEcho): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(
    object: I,
  ): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? '';
    return message;
  },
};

messageTypeRegistry.set(RequestEcho.$type, RequestEcho);

function createBaseRequestFlush(): RequestFlush {
  return { $type: 'tendermint.abci.RequestFlush' };
}

export const RequestFlush = {
  $type: 'tendermint.abci.RequestFlush' as const,

  encode(
    _: RequestFlush,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestFlush {
    return {
      $type: RequestFlush.$type,
    };
  },

  toJSON(_: RequestFlush): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(
    _: I,
  ): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
};

messageTypeRegistry.set(RequestFlush.$type, RequestFlush);

function createBaseRequestInfo(): RequestInfo {
  return {
    $type: 'tendermint.abci.RequestInfo',
    version: '',
    blockVersion: Long.UZERO,
    p2pVersion: Long.UZERO,
  };
}

export const RequestInfo = {
  $type: 'tendermint.abci.RequestInfo' as const,

  encode(
    message: RequestInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== '') {
      writer.uint32(10).string(message.version);
    }
    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64() as Long;
          break;
        case 3:
          message.p2pVersion = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestInfo {
    return {
      $type: RequestInfo.$type,
      version: isSet(object.version) ? String(object.version) : '',
      blockVersion: isSet(object.blockVersion)
        ? Long.fromString(object.blockVersion)
        : Long.UZERO,
      p2pVersion: isSet(object.p2pVersion)
        ? Long.fromString(object.p2pVersion)
        : Long.UZERO,
    };
  },

  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.blockVersion !== undefined &&
      (obj.blockVersion = (message.blockVersion || Long.UZERO).toString());
    message.p2pVersion !== undefined &&
      (obj.p2pVersion = (message.p2pVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(
    object: I,
  ): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? '';
    message.blockVersion =
      object.blockVersion !== undefined && object.blockVersion !== null
        ? Long.fromValue(object.blockVersion)
        : Long.UZERO;
    message.p2pVersion =
      object.p2pVersion !== undefined && object.p2pVersion !== null
        ? Long.fromValue(object.p2pVersion)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(RequestInfo.$type, RequestInfo);

function createBaseRequestSetOption(): RequestSetOption {
  return { $type: 'tendermint.abci.RequestSetOption', key: '', value: '' };
}

export const RequestSetOption = {
  $type: 'tendermint.abci.RequestSetOption' as const,

  encode(
    message: RequestSetOption,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestSetOption {
    return {
      $type: RequestSetOption.$type,
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: RequestSetOption): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestSetOption>, I>>(
    object: I,
  ): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

messageTypeRegistry.set(RequestSetOption.$type, RequestSetOption);

function createBaseRequestInitChain(): RequestInitChain {
  return {
    $type: 'tendermint.abci.RequestInitChain',
    time: undefined,
    chainId: '',
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: Long.ZERO,
  };
}

export const RequestInitChain = {
  $type: 'tendermint.abci.RequestInitChain' as const,

  encode(
    message: RequestInitChain,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.chainId !== '') {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestInitChain {
    return {
      $type: RequestInitChain.$type,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : '',
      consensusParams: isSet(object.consensusParams)
        ? ConsensusParams.fromJSON(object.consensusParams)
        : undefined,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e))
        : [],
      appStateBytes: isSet(object.appStateBytes)
        ? bytesFromBase64(object.appStateBytes)
        : new Uint8Array(),
      initialHeight: isSet(object.initialHeight)
        ? Long.fromString(object.initialHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: RequestInitChain): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e =>
        e ? ValidatorUpdate.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    message.appStateBytes !== undefined &&
      (obj.appStateBytes = base64FromBytes(
        message.appStateBytes !== undefined
          ? message.appStateBytes
          : new Uint8Array(),
      ));
    message.initialHeight !== undefined &&
      (obj.initialHeight = (message.initialHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(
    object: I,
  ): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? '';
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromPartial(object.consensusParams)
        : undefined;
    message.validators =
      object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight =
      object.initialHeight !== undefined && object.initialHeight !== null
        ? Long.fromValue(object.initialHeight)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(RequestInitChain.$type, RequestInitChain);

function createBaseRequestQuery(): RequestQuery {
  return {
    $type: 'tendermint.abci.RequestQuery',
    data: new Uint8Array(),
    path: '',
    height: Long.ZERO,
    prove: false,
  };
}

export const RequestQuery = {
  $type: 'tendermint.abci.RequestQuery' as const,

  encode(
    message: RequestQuery,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== '') {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQuery {
    return {
      $type: RequestQuery.$type,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : '',
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      prove: isSet(object.prove) ? Boolean(object.prove) : false,
    };
  },

  toJSON(message: RequestQuery): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(
    object: I,
  ): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? '';
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  },
};

messageTypeRegistry.set(RequestQuery.$type, RequestQuery);

function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    $type: 'tendermint.abci.RequestBeginBlock',
    hash: new Uint8Array(),
    header: undefined,
    lastCommitInfo: undefined,
    byzantineValidators: [],
  };
}

export const RequestBeginBlock = {
  $type: 'tendermint.abci.RequestBeginBlock' as const,

  encode(
    message: RequestBeginBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(
        message.lastCommitInfo,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.byzantineValidators.push(
            Evidence.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestBeginBlock {
    return {
      $type: RequestBeginBlock.$type,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      lastCommitInfo: isSet(object.lastCommitInfo)
        ? LastCommitInfo.fromJSON(object.lastCommitInfo)
        : undefined,
      byzantineValidators: Array.isArray(object?.byzantineValidators)
        ? object.byzantineValidators.map((e: any) => Evidence.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RequestBeginBlock): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.lastCommitInfo !== undefined &&
      (obj.lastCommitInfo = message.lastCommitInfo
        ? LastCommitInfo.toJSON(message.lastCommitInfo)
        : undefined);
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map(e =>
        e ? Evidence.toJSON(e) : undefined,
      );
    } else {
      obj.byzantineValidators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(
    object: I,
  ): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    message.lastCommitInfo =
      object.lastCommitInfo !== undefined && object.lastCommitInfo !== null
        ? LastCommitInfo.fromPartial(object.lastCommitInfo)
        : undefined;
    message.byzantineValidators =
      object.byzantineValidators?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RequestBeginBlock.$type, RequestBeginBlock);

function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    $type: 'tendermint.abci.RequestCheckTx',
    tx: new Uint8Array(),
    type: 0,
  };
}

export const RequestCheckTx = {
  $type: 'tendermint.abci.RequestCheckTx' as const,

  encode(
    message: RequestCheckTx,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestCheckTx {
    return {
      $type: RequestCheckTx.$type,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: RequestCheckTx): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array(),
      ));
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(
    object: I,
  ): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RequestCheckTx.$type, RequestCheckTx);

function createBaseRequestDeliverTx(): RequestDeliverTx {
  return { $type: 'tendermint.abci.RequestDeliverTx', tx: new Uint8Array() };
}

export const RequestDeliverTx = {
  $type: 'tendermint.abci.RequestDeliverTx' as const,

  encode(
    message: RequestDeliverTx,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestDeliverTx {
    return {
      $type: RequestDeliverTx.$type,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
    };
  },

  toJSON(message: RequestDeliverTx): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestDeliverTx>, I>>(
    object: I,
  ): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(RequestDeliverTx.$type, RequestDeliverTx);

function createBaseRequestEndBlock(): RequestEndBlock {
  return { $type: 'tendermint.abci.RequestEndBlock', height: Long.ZERO };
}

export const RequestEndBlock = {
  $type: 'tendermint.abci.RequestEndBlock' as const,

  encode(
    message: RequestEndBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestEndBlock {
    return {
      $type: RequestEndBlock.$type,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
    };
  },

  toJSON(message: RequestEndBlock): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestEndBlock>, I>>(
    object: I,
  ): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(RequestEndBlock.$type, RequestEndBlock);

function createBaseRequestCommit(): RequestCommit {
  return { $type: 'tendermint.abci.RequestCommit' };
}

export const RequestCommit = {
  $type: 'tendermint.abci.RequestCommit' as const,

  encode(
    _: RequestCommit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestCommit {
    return {
      $type: RequestCommit.$type,
    };
  },

  toJSON(_: RequestCommit): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(
    _: I,
  ): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
};

messageTypeRegistry.set(RequestCommit.$type, RequestCommit);

function createBaseRequestListSnapshots(): RequestListSnapshots {
  return { $type: 'tendermint.abci.RequestListSnapshots' };
}

export const RequestListSnapshots = {
  $type: 'tendermint.abci.RequestListSnapshots' as const,

  encode(
    _: RequestListSnapshots,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestListSnapshots {
    return {
      $type: RequestListSnapshots.$type,
    };
  },

  toJSON(_: RequestListSnapshots): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(
    _: I,
  ): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
};

messageTypeRegistry.set(RequestListSnapshots.$type, RequestListSnapshots);

function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    $type: 'tendermint.abci.RequestOfferSnapshot',
    snapshot: undefined,
    appHash: new Uint8Array(),
  };
}

export const RequestOfferSnapshot = {
  $type: 'tendermint.abci.RequestOfferSnapshot' as const,

  encode(
    message: RequestOfferSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestOfferSnapshot {
    return {
      $type: RequestOfferSnapshot.$type,
      snapshot: isSet(object.snapshot)
        ? Snapshot.fromJSON(object.snapshot)
        : undefined,
      appHash: isSet(object.appHash)
        ? bytesFromBase64(object.appHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: RequestOfferSnapshot): unknown {
    const obj: any = {};
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot
        ? Snapshot.toJSON(message.snapshot)
        : undefined);
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(
    object: I,
  ): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot =
      object.snapshot !== undefined && object.snapshot !== null
        ? Snapshot.fromPartial(object.snapshot)
        : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(RequestOfferSnapshot.$type, RequestOfferSnapshot);

function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    $type: 'tendermint.abci.RequestLoadSnapshotChunk',
    height: Long.UZERO,
    format: 0,
    chunk: 0,
  };
}

export const RequestLoadSnapshotChunk = {
  $type: 'tendermint.abci.RequestLoadSnapshotChunk' as const,

  encode(
    message: RequestLoadSnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestLoadSnapshotChunk {
    return {
      $type: RequestLoadSnapshotChunk.$type,
      height: isSet(object.height)
        ? Long.fromString(object.height)
        : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0,
    };
  },

  toJSON(message: RequestLoadSnapshotChunk): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(
    object: I,
  ): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  RequestLoadSnapshotChunk.$type,
  RequestLoadSnapshotChunk,
);

function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    $type: 'tendermint.abci.RequestApplySnapshotChunk',
    index: 0,
    chunk: new Uint8Array(),
    sender: '',
  };
}

export const RequestApplySnapshotChunk = {
  $type: 'tendermint.abci.RequestApplySnapshotChunk' as const,

  encode(
    message: RequestApplySnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== '') {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestApplySnapshotChunk {
    return {
      $type: RequestApplySnapshotChunk.$type,
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk)
        ? bytesFromBase64(object.chunk)
        : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : '',
    };
  },

  toJSON(message: RequestApplySnapshotChunk): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(
        message.chunk !== undefined ? message.chunk : new Uint8Array(),
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(
    object: I,
  ): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  RequestApplySnapshotChunk.$type,
  RequestApplySnapshotChunk,
);

function createBaseResponse(): Response {
  return {
    $type: 'tendermint.abci.Response',
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
  };
}

export const Response = {
  $type: 'tendermint.abci.Response' as const,

  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(
        message.exception,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(
        message.setOption,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(
        message.initChain,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(
        message.beginBlock,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(
        message.checkTx,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(
        message.deliverTx,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(
        message.endBlock,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(
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

  fromJSON(object: any): Response {
    return {
      $type: Response.$type,
      exception: isSet(object.exception)
        ? ResponseException.fromJSON(object.exception)
        : undefined,
      echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush)
        ? ResponseFlush.fromJSON(object.flush)
        : undefined,
      info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption)
        ? ResponseSetOption.fromJSON(object.setOption)
        : undefined,
      initChain: isSet(object.initChain)
        ? ResponseInitChain.fromJSON(object.initChain)
        : undefined,
      query: isSet(object.query)
        ? ResponseQuery.fromJSON(object.query)
        : undefined,
      beginBlock: isSet(object.beginBlock)
        ? ResponseBeginBlock.fromJSON(object.beginBlock)
        : undefined,
      checkTx: isSet(object.checkTx)
        ? ResponseCheckTx.fromJSON(object.checkTx)
        : undefined,
      deliverTx: isSet(object.deliverTx)
        ? ResponseDeliverTx.fromJSON(object.deliverTx)
        : undefined,
      endBlock: isSet(object.endBlock)
        ? ResponseEndBlock.fromJSON(object.endBlock)
        : undefined,
      commit: isSet(object.commit)
        ? ResponseCommit.fromJSON(object.commit)
        : undefined,
      listSnapshots: isSet(object.listSnapshots)
        ? ResponseListSnapshots.fromJSON(object.listSnapshots)
        : undefined,
      offerSnapshot: isSet(object.offerSnapshot)
        ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk)
        ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk)
        ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.exception !== undefined &&
      (obj.exception = message.exception
        ? ResponseException.toJSON(message.exception)
        : undefined);
    message.echo !== undefined &&
      (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? ResponseFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined &&
      (obj.setOption = message.setOption
        ? ResponseSetOption.toJSON(message.setOption)
        : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? ResponseInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ResponseQuery.toJSON(message.query)
        : undefined);
    message.beginBlock !== undefined &&
      (obj.beginBlock = message.beginBlock
        ? ResponseBeginBlock.toJSON(message.beginBlock)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? ResponseCheckTx.toJSON(message.checkTx)
        : undefined);
    message.deliverTx !== undefined &&
      (obj.deliverTx = message.deliverTx
        ? ResponseDeliverTx.toJSON(message.deliverTx)
        : undefined);
    message.endBlock !== undefined &&
      (obj.endBlock = message.endBlock
        ? ResponseEndBlock.toJSON(message.endBlock)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? ResponseCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? ResponseListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? ResponseOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.exception =
      object.exception !== undefined && object.exception !== null
        ? ResponseException.fromPartial(object.exception)
        : undefined;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? ResponseEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? ResponseFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? ResponseInfo.fromPartial(object.info)
        : undefined;
    message.setOption =
      object.setOption !== undefined && object.setOption !== null
        ? ResponseSetOption.fromPartial(object.setOption)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? ResponseInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ResponseQuery.fromPartial(object.query)
        : undefined;
    message.beginBlock =
      object.beginBlock !== undefined && object.beginBlock !== null
        ? ResponseBeginBlock.fromPartial(object.beginBlock)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? ResponseCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.deliverTx =
      object.deliverTx !== undefined && object.deliverTx !== null
        ? ResponseDeliverTx.fromPartial(object.deliverTx)
        : undefined;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? ResponseEndBlock.fromPartial(object.endBlock)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? ResponseCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? ResponseListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Response.$type, Response);

function createBaseResponseException(): ResponseException {
  return { $type: 'tendermint.abci.ResponseException', error: '' };
}

export const ResponseException = {
  $type: 'tendermint.abci.ResponseException' as const,

  encode(
    message: ResponseException,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== '') {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseException {
    return {
      $type: ResponseException.$type,
      error: isSet(object.error) ? String(object.error) : '',
    };
  },

  toJSON(message: ResponseException): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(
    object: I,
  ): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseException.$type, ResponseException);

function createBaseResponseEcho(): ResponseEcho {
  return { $type: 'tendermint.abci.ResponseEcho', message: '' };
}

export const ResponseEcho = {
  $type: 'tendermint.abci.ResponseEcho' as const,

  encode(
    message: ResponseEcho,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseEcho {
    return {
      $type: ResponseEcho.$type,
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: ResponseEcho): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(
    object: I,
  ): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseEcho.$type, ResponseEcho);

function createBaseResponseFlush(): ResponseFlush {
  return { $type: 'tendermint.abci.ResponseFlush' };
}

export const ResponseFlush = {
  $type: 'tendermint.abci.ResponseFlush' as const,

  encode(
    _: ResponseFlush,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseFlush {
    return {
      $type: ResponseFlush.$type,
    };
  },

  toJSON(_: ResponseFlush): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(
    _: I,
  ): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
};

messageTypeRegistry.set(ResponseFlush.$type, ResponseFlush);

function createBaseResponseInfo(): ResponseInfo {
  return {
    $type: 'tendermint.abci.ResponseInfo',
    data: '',
    version: '',
    appVersion: Long.UZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockAppHash: new Uint8Array(),
  };
}

export const ResponseInfo = {
  $type: 'tendermint.abci.ResponseInfo' as const,

  encode(
    message: ResponseInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data !== '') {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== '') {
      writer.uint32(18).string(message.version);
    }
    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64() as Long;
          break;
        case 4:
          message.lastBlockHeight = reader.int64() as Long;
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseInfo {
    return {
      $type: ResponseInfo.$type,
      data: isSet(object.data) ? String(object.data) : '',
      version: isSet(object.version) ? String(object.version) : '',
      appVersion: isSet(object.appVersion)
        ? Long.fromString(object.appVersion)
        : Long.UZERO,
      lastBlockHeight: isSet(object.lastBlockHeight)
        ? Long.fromString(object.lastBlockHeight)
        : Long.ZERO,
      lastBlockAppHash: isSet(object.lastBlockAppHash)
        ? bytesFromBase64(object.lastBlockAppHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseInfo): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = message.version);
    message.appVersion !== undefined &&
      (obj.appVersion = (message.appVersion || Long.UZERO).toString());
    message.lastBlockHeight !== undefined &&
      (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.lastBlockAppHash !== undefined &&
      (obj.lastBlockAppHash = base64FromBytes(
        message.lastBlockAppHash !== undefined
          ? message.lastBlockAppHash
          : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(
    object: I,
  ): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? '';
    message.version = object.version ?? '';
    message.appVersion =
      object.appVersion !== undefined && object.appVersion !== null
        ? Long.fromValue(object.appVersion)
        : Long.UZERO;
    message.lastBlockHeight =
      object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
        ? Long.fromValue(object.lastBlockHeight)
        : Long.ZERO;
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(ResponseInfo.$type, ResponseInfo);

function createBaseResponseSetOption(): ResponseSetOption {
  return {
    $type: 'tendermint.abci.ResponseSetOption',
    code: 0,
    log: '',
    info: '',
  };
}

export const ResponseSetOption = {
  $type: 'tendermint.abci.ResponseSetOption' as const,

  encode(
    message: ResponseSetOption,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== '') {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseSetOption {
    return {
      $type: ResponseSetOption.$type,
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : '',
      info: isSet(object.info) ? String(object.info) : '',
    };
  },

  toJSON(message: ResponseSetOption): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseSetOption>, I>>(
    object: I,
  ): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.code = object.code ?? 0;
    message.log = object.log ?? '';
    message.info = object.info ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseSetOption.$type, ResponseSetOption);

function createBaseResponseInitChain(): ResponseInitChain {
  return {
    $type: 'tendermint.abci.ResponseInitChain',
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array(),
  };
}

export const ResponseInitChain = {
  $type: 'tendermint.abci.ResponseInitChain' as const,

  encode(
    message: ResponseInitChain,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseInitChain {
    return {
      $type: ResponseInitChain.$type,
      consensusParams: isSet(object.consensusParams)
        ? ConsensusParams.fromJSON(object.consensusParams)
        : undefined,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e))
        : [],
      appHash: isSet(object.appHash)
        ? bytesFromBase64(object.appHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseInitChain): unknown {
    const obj: any = {};
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e =>
        e ? ValidatorUpdate.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(
    object: I,
  ): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromPartial(object.consensusParams)
        : undefined;
    message.validators =
      object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(ResponseInitChain.$type, ResponseInitChain);

function createBaseResponseQuery(): ResponseQuery {
  return {
    $type: 'tendermint.abci.ResponseQuery',
    code: 0,
    log: '',
    info: '',
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: Long.ZERO,
    codespace: '',
  };
}

export const ResponseQuery = {
  $type: 'tendermint.abci.ResponseQuery' as const,

  encode(
    message: ResponseQuery,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== '') {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== '') {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64() as Long;
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64() as Long;
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQuery {
    return {
      $type: ResponseQuery.$type,
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : '',
      info: isSet(object.info) ? String(object.info) : '',
      index: isSet(object.index) ? Long.fromString(object.index) : Long.ZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
      proofOps: isSet(object.proofOps)
        ? ProofOps.fromJSON(object.proofOps)
        : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      codespace: isSet(object.codespace) ? String(object.codespace) : '',
    };
  },

  toJSON(message: ResponseQuery): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined &&
      (obj.index = (message.index || Long.ZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    message.proofOps !== undefined &&
      (obj.proofOps = message.proofOps
        ? ProofOps.toJSON(message.proofOps)
        : undefined);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(
    object: I,
  ): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? '';
    message.info = object.info ?? '';
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps =
      object.proofOps !== undefined && object.proofOps !== null
        ? ProofOps.fromPartial(object.proofOps)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.codespace = object.codespace ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseQuery.$type, ResponseQuery);

function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return { $type: 'tendermint.abci.ResponseBeginBlock', events: [] };
}

export const ResponseBeginBlock = {
  $type: 'tendermint.abci.ResponseBeginBlock' as const,

  encode(
    message: ResponseBeginBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseBeginBlock {
    return {
      $type: ResponseBeginBlock.$type,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseBeginBlock): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseBeginBlock>, I>>(
    object: I,
  ): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ResponseBeginBlock.$type, ResponseBeginBlock);

function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    $type: 'tendermint.abci.ResponseCheckTx',
    code: 0,
    data: new Uint8Array(),
    log: '',
    info: '',
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: '',
  };
}

export const ResponseCheckTx = {
  $type: 'tendermint.abci.ResponseCheckTx' as const,

  encode(
    message: ResponseCheckTx,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== '') {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== '') {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64() as Long;
          break;
        case 6:
          message.gasUsed = reader.int64() as Long;
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCheckTx {
    return {
      $type: ResponseCheckTx.$type,
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : '',
      info: isSet(object.info) ? String(object.info) : '',
      gasWanted: isSet(object.gas_wanted)
        ? Long.fromString(object.gas_wanted)
        : Long.ZERO,
      gasUsed: isSet(object.gas_used)
        ? Long.fromString(object.gas_used)
        : Long.ZERO,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : '',
    };
  },

  toJSON(message: ResponseCheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gas_used = (message.gasUsed || Long.ZERO).toString());
    if (message.events) {
      obj.events = message.events.map(e => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(
    object: I,
  ): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? '';
    message.info = object.info ?? '';
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseCheckTx.$type, ResponseCheckTx);

function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    $type: 'tendermint.abci.ResponseDeliverTx',
    code: 0,
    data: new Uint8Array(),
    log: '',
    info: '',
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: '',
  };
}

export const ResponseDeliverTx = {
  $type: 'tendermint.abci.ResponseDeliverTx' as const,

  encode(
    message: ResponseDeliverTx,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== '') {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== '') {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64() as Long;
          break;
        case 6:
          message.gasUsed = reader.int64() as Long;
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseDeliverTx {
    return {
      $type: ResponseDeliverTx.$type,
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : '',
      info: isSet(object.info) ? String(object.info) : '',
      gasWanted: isSet(object.gas_wanted)
        ? Long.fromString(object.gas_wanted)
        : Long.ZERO,
      gasUsed: isSet(object.gas_used)
        ? Long.fromString(object.gas_used)
        : Long.ZERO,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : '',
    };
  },

  toJSON(message: ResponseDeliverTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gas_used = (message.gasUsed || Long.ZERO).toString());
    if (message.events) {
      obj.events = message.events.map(e => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(
    object: I,
  ): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? '';
    message.info = object.info ?? '';
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? '';
    return message;
  },
};

messageTypeRegistry.set(ResponseDeliverTx.$type, ResponseDeliverTx);

function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    $type: 'tendermint.abci.ResponseEndBlock',
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: [],
  };
}

export const ResponseEndBlock = {
  $type: 'tendermint.abci.ResponseEndBlock' as const,

  encode(
    message: ResponseEndBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(
        message.consensusParamUpdates,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(
            ValidatorUpdate.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseEndBlock {
    return {
      $type: ResponseEndBlock.$type,
      validatorUpdates: Array.isArray(object?.validatorUpdates)
        ? object.validatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e))
        : [],
      consensusParamUpdates: isSet(object.consensusParamUpdates)
        ? ConsensusParams.fromJSON(object.consensusParamUpdates)
        : undefined,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseEndBlock): unknown {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map(e =>
        e ? ValidatorUpdate.toJSON(e) : undefined,
      );
    } else {
      obj.validatorUpdates = [];
    }
    message.consensusParamUpdates !== undefined &&
      (obj.consensusParamUpdates = message.consensusParamUpdates
        ? ConsensusParams.toJSON(message.consensusParamUpdates)
        : undefined);
    if (message.events) {
      obj.events = message.events.map(e => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseEndBlock>, I>>(
    object: I,
  ): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates =
      object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensusParamUpdates =
      object.consensusParamUpdates !== undefined &&
      object.consensusParamUpdates !== null
        ? ConsensusParams.fromPartial(object.consensusParamUpdates)
        : undefined;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ResponseEndBlock.$type, ResponseEndBlock);

function createBaseResponseCommit(): ResponseCommit {
  return {
    $type: 'tendermint.abci.ResponseCommit',
    data: new Uint8Array(),
    retainHeight: Long.ZERO,
  };
}

export const ResponseCommit = {
  $type: 'tendermint.abci.ResponseCommit' as const,

  encode(
    message: ResponseCommit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCommit {
    return {
      $type: ResponseCommit.$type,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      retainHeight: isSet(object.retainHeight)
        ? Long.fromString(object.retainHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: ResponseCommit): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.retainHeight !== undefined &&
      (obj.retainHeight = (message.retainHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(
    object: I,
  ): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retainHeight =
      object.retainHeight !== undefined && object.retainHeight !== null
        ? Long.fromValue(object.retainHeight)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(ResponseCommit.$type, ResponseCommit);

function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return { $type: 'tendermint.abci.ResponseListSnapshots', snapshots: [] };
}

export const ResponseListSnapshots = {
  $type: 'tendermint.abci.ResponseListSnapshots' as const,

  encode(
    message: ResponseListSnapshots,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseListSnapshots {
    return {
      $type: ResponseListSnapshots.$type,
      snapshots: Array.isArray(object?.snapshots)
        ? object.snapshots.map((e: any) => Snapshot.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseListSnapshots): unknown {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e =>
        e ? Snapshot.toJSON(e) : undefined,
      );
    } else {
      obj.snapshots = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(
    object: I,
  ): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots =
      object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ResponseListSnapshots.$type, ResponseListSnapshots);

function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return { $type: 'tendermint.abci.ResponseOfferSnapshot', result: 0 };
}

export const ResponseOfferSnapshot = {
  $type: 'tendermint.abci.ResponseOfferSnapshot' as const,

  encode(
    message: ResponseOfferSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseOfferSnapshot {
    return {
      $type: ResponseOfferSnapshot.$type,
      result: isSet(object.result)
        ? responseOfferSnapshot_ResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: ResponseOfferSnapshot): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(
    object: I,
  ): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResponseOfferSnapshot.$type, ResponseOfferSnapshot);

function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    $type: 'tendermint.abci.ResponseLoadSnapshotChunk',
    chunk: new Uint8Array(),
  };
}

export const ResponseLoadSnapshotChunk = {
  $type: 'tendermint.abci.ResponseLoadSnapshotChunk' as const,

  encode(
    message: ResponseLoadSnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseLoadSnapshotChunk {
    return {
      $type: ResponseLoadSnapshotChunk.$type,
      chunk: isSet(object.chunk)
        ? bytesFromBase64(object.chunk)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseLoadSnapshotChunk): unknown {
    const obj: any = {};
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(
        message.chunk !== undefined ? message.chunk : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(
    object: I,
  ): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(
  ResponseLoadSnapshotChunk.$type,
  ResponseLoadSnapshotChunk,
);

function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    $type: 'tendermint.abci.ResponseApplySnapshotChunk',
    result: 0,
    refetchChunks: [],
    rejectSenders: [],
  };
}

export const ResponseApplySnapshotChunk = {
  $type: 'tendermint.abci.ResponseApplySnapshotChunk' as const,

  encode(
    message: ResponseApplySnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseApplySnapshotChunk {
    return {
      $type: ResponseApplySnapshotChunk.$type,
      result: isSet(object.result)
        ? responseApplySnapshotChunk_ResultFromJSON(object.result)
        : 0,
      refetchChunks: Array.isArray(object?.refetchChunks)
        ? object.refetchChunks.map((e: any) => Number(e))
        : [],
      rejectSenders: Array.isArray(object?.rejectSenders)
        ? object.rejectSenders.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ResponseApplySnapshotChunk): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map(e => Math.round(e));
    } else {
      obj.refetchChunks = [];
    }
    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map(e => e);
    } else {
      obj.rejectSenders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(
    object: I,
  ): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ResponseApplySnapshotChunk.$type,
  ResponseApplySnapshotChunk,
);

function createBaseConsensusParams(): ConsensusParams {
  return {
    $type: 'tendermint.abci.ConsensusParams',
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined,
  };
}

export const ConsensusParams = {
  $type: 'tendermint.abci.ConsensusParams' as const,

  encode(
    message: ConsensusParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(
        message.evidence,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(
        message.validator,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusParams {
    return {
      $type: ConsensusParams.$type,
      block: isSet(object.block)
        ? BlockParams.fromJSON(object.block)
        : undefined,
      evidence: isSet(object.evidence)
        ? EvidenceParams.fromJSON(object.evidence)
        : undefined,
      validator: isSet(object.validator)
        ? ValidatorParams.fromJSON(object.validator)
        : undefined,
      version: isSet(object.version)
        ? VersionParams.fromJSON(object.version)
        : undefined,
    };
  },

  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block
        ? BlockParams.toJSON(message.block)
        : undefined);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence
        ? EvidenceParams.toJSON(message.evidence)
        : undefined);
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? ValidatorParams.toJSON(message.validator)
        : undefined);
    message.version !== undefined &&
      (obj.version = message.version
        ? VersionParams.toJSON(message.version)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(
    object: I,
  ): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block =
      object.block !== undefined && object.block !== null
        ? BlockParams.fromPartial(object.block)
        : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceParams.fromPartial(object.evidence)
        : undefined;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? ValidatorParams.fromPartial(object.validator)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? VersionParams.fromPartial(object.version)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConsensusParams.$type, ConsensusParams);

function createBaseBlockParams(): BlockParams {
  return {
    $type: 'tendermint.abci.BlockParams',
    maxBytes: Long.ZERO,
    maxGas: Long.ZERO,
  };
}

export const BlockParams = {
  $type: 'tendermint.abci.BlockParams' as const,

  encode(
    message: BlockParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64() as Long;
          break;
        case 2:
          message.maxGas = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockParams {
    return {
      $type: BlockParams.$type,
      maxBytes: isSet(object.maxBytes)
        ? Long.fromString(object.maxBytes)
        : Long.ZERO,
      maxGas: isSet(object.maxGas) ? Long.fromString(object.maxGas) : Long.ZERO,
    };
  },

  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.maxBytes !== undefined &&
      (obj.maxBytes = (message.maxBytes || Long.ZERO).toString());
    message.maxGas !== undefined &&
      (obj.maxGas = (message.maxGas || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(
    object: I,
  ): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null
        ? Long.fromValue(object.maxBytes)
        : Long.ZERO;
    message.maxGas =
      object.maxGas !== undefined && object.maxGas !== null
        ? Long.fromValue(object.maxGas)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(BlockParams.$type, BlockParams);

function createBaseLastCommitInfo(): LastCommitInfo {
  return { $type: 'tendermint.abci.LastCommitInfo', round: 0, votes: [] };
}

export const LastCommitInfo = {
  $type: 'tendermint.abci.LastCommitInfo' as const,

  encode(
    message: LastCommitInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastCommitInfo {
    return {
      $type: LastCommitInfo.$type,
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => VoteInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LastCommitInfo): unknown {
    const obj: any = {};
    message.round !== undefined && (obj.round = Math.round(message.round));
    if (message.votes) {
      obj.votes = message.votes.map(e => (e ? VoteInfo.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastCommitInfo>, I>>(
    object: I,
  ): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(LastCommitInfo.$type, LastCommitInfo);

function createBaseEvent(): Event {
  return { $type: 'tendermint.abci.Event', type: '', attributes: [] };
}

export const Event = {
  $type: 'tendermint.abci.Event' as const,

  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== '') {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(
            EventAttribute.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      $type: Event.$type,
      type: isSet(object.type) ? String(object.type) : '',
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => EventAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e =>
        e ? EventAttribute.toJSON(e) : undefined,
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.type = object.type ?? '';
    message.attributes =
      object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Event.$type, Event);

function createBaseEventAttribute(): EventAttribute {
  return {
    $type: 'tendermint.abci.EventAttribute',
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false,
  };
}

export const EventAttribute = {
  $type: 'tendermint.abci.EventAttribute' as const,

  encode(
    message: EventAttribute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAttribute {
    return {
      $type: EventAttribute.$type,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
      index: isSet(object.index) ? Boolean(object.index) : false,
    };
  },

  toJSON(message: EventAttribute): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAttribute>, I>>(
    object: I,
  ): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.index = object.index ?? false;
    return message;
  },
};

messageTypeRegistry.set(EventAttribute.$type, EventAttribute);

function createBaseTxResult(): TxResult {
  return {
    $type: 'tendermint.abci.TxResult',
    height: Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: undefined,
  };
}

export const TxResult = {
  $type: 'tendermint.abci.TxResult' as const,

  encode(
    message: TxResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(
        message.result,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxResult {
    return {
      $type: TxResult.$type,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      index: isSet(object.index) ? Number(object.index) : 0,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      result: isSet(object.result)
        ? ResponseDeliverTx.fromJSON(object.result)
        : undefined,
    };
  },

  toJSON(message: TxResult): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array(),
      ));
    message.result !== undefined &&
      (obj.result = message.result
        ? ResponseDeliverTx.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult {
    const message = createBaseTxResult();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result =
      object.result !== undefined && object.result !== null
        ? ResponseDeliverTx.fromPartial(object.result)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TxResult.$type, TxResult);

function createBaseValidator(): Validator {
  return {
    $type: 'tendermint.abci.Validator',
    address: new Uint8Array(),
    power: Long.ZERO,
  };
}

export const Validator = {
  $type: 'tendermint.abci.Validator' as const,

  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      $type: Validator.$type,
      address: isSet(object.address)
        ? bytesFromBase64(object.address)
        : new Uint8Array(),
      power: isSet(object.power) ? Long.fromString(object.power) : Long.ZERO,
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array(),
      ));
    message.power !== undefined &&
      (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(
    object: I,
  ): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Validator.$type, Validator);

function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    $type: 'tendermint.abci.ValidatorUpdate',
    pubKey: undefined,
    power: Long.ZERO,
  };
}

export const ValidatorUpdate = {
  $type: 'tendermint.abci.ValidatorUpdate' as const,

  encode(
    message: ValidatorUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorUpdate {
    return {
      $type: ValidatorUpdate.$type,
      pubKey: isSet(object.pubKey)
        ? PublicKey.fromJSON(object.pubKey)
        : undefined,
      power: isSet(object.power) ? Long.fromString(object.power) : Long.ZERO,
    };
  },

  toJSON(message: ValidatorUpdate): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.power !== undefined &&
      (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(
    object: I,
  ): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(ValidatorUpdate.$type, ValidatorUpdate);

function createBaseVoteInfo(): VoteInfo {
  return {
    $type: 'tendermint.abci.VoteInfo',
    validator: undefined,
    signedLastBlock: false,
  };
}

export const VoteInfo = {
  $type: 'tendermint.abci.VoteInfo' as const,

  encode(
    message: VoteInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteInfo {
    return {
      $type: VoteInfo.$type,
      validator: isSet(object.validator)
        ? Validator.fromJSON(object.validator)
        : undefined,
      signedLastBlock: isSet(object.signedLastBlock)
        ? Boolean(object.signedLastBlock)
        : false,
    };
  },

  toJSON(message: VoteInfo): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.signedLastBlock !== undefined &&
      (obj.signedLastBlock = message.signedLastBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  },
};

messageTypeRegistry.set(VoteInfo.$type, VoteInfo);

function createBaseEvidence(): Evidence {
  return {
    $type: 'tendermint.abci.Evidence',
    type: 0,
    validator: undefined,
    height: Long.ZERO,
    time: undefined,
    totalVotingPower: Long.ZERO,
  };
}

export const Evidence = {
  $type: 'tendermint.abci.Evidence' as const,

  encode(
    message: Evidence,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.totalVotingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Evidence {
    return {
      $type: Evidence.$type,
      type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : 0,
      validator: isSet(object.validator)
        ? Validator.fromJSON(object.validator)
        : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      totalVotingPower: isSet(object.totalVotingPower)
        ? Long.fromString(object.totalVotingPower)
        : Long.ZERO,
    };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (
        message.totalVotingPower || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence {
    const message = createBaseEvidence();
    message.type = object.type ?? 0;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Evidence.$type, Evidence);

function createBaseSnapshot(): Snapshot {
  return {
    $type: 'tendermint.abci.Snapshot',
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array(),
  };
}

export const Snapshot = {
  $type: 'tendermint.abci.Snapshot' as const,

  encode(
    message: Snapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      $type: Snapshot.$type,
      height: isSet(object.height)
        ? Long.fromString(object.height)
        : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(Snapshot.$type, Snapshot);

export interface ABCIApplication {
  Echo(request: DeepPartial<RequestEcho>): Promise<ResponseEcho>;
  Flush(request: DeepPartial<RequestFlush>): Promise<ResponseFlush>;
  Info(request: DeepPartial<RequestInfo>): Promise<ResponseInfo>;
  SetOption(request: DeepPartial<RequestSetOption>): Promise<ResponseSetOption>;
  DeliverTx(request: DeepPartial<RequestDeliverTx>): Promise<ResponseDeliverTx>;
  CheckTx(request: DeepPartial<RequestCheckTx>): Promise<ResponseCheckTx>;
  Query(request: DeepPartial<RequestQuery>): Promise<ResponseQuery>;
  Commit(request: DeepPartial<RequestCommit>): Promise<ResponseCommit>;
  InitChain(request: DeepPartial<RequestInitChain>): Promise<ResponseInitChain>;
  BeginBlock(
    request: DeepPartial<RequestBeginBlock>,
  ): Promise<ResponseBeginBlock>;
  EndBlock(request: DeepPartial<RequestEndBlock>): Promise<ResponseEndBlock>;
  ListSnapshots(
    request: DeepPartial<RequestListSnapshots>,
  ): Promise<ResponseListSnapshots>;
  OfferSnapshot(
    request: DeepPartial<RequestOfferSnapshot>,
  ): Promise<ResponseOfferSnapshot>;
  LoadSnapshotChunk(
    request: DeepPartial<RequestLoadSnapshotChunk>,
  ): Promise<ResponseLoadSnapshotChunk>;
  ApplySnapshotChunk(
    request: DeepPartial<RequestApplySnapshotChunk>,
  ): Promise<ResponseApplySnapshotChunk>;
}

export class ABCIApplicationClientImpl implements ABCIApplication {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Echo = this.Echo.bind(this);
    this.Flush = this.Flush.bind(this);
    this.Info = this.Info.bind(this);
    this.SetOption = this.SetOption.bind(this);
    this.DeliverTx = this.DeliverTx.bind(this);
    this.CheckTx = this.CheckTx.bind(this);
    this.Query = this.Query.bind(this);
    this.Commit = this.Commit.bind(this);
    this.InitChain = this.InitChain.bind(this);
    this.BeginBlock = this.BeginBlock.bind(this);
    this.EndBlock = this.EndBlock.bind(this);
    this.ListSnapshots = this.ListSnapshots.bind(this);
    this.OfferSnapshot = this.OfferSnapshot.bind(this);
    this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
    this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
  }
  Echo(request: DeepPartial<RequestEcho>): Promise<ResponseEcho> {
    const fromPartial = RequestEcho.fromPartial(request);
    const data = RequestEcho.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'Echo',
      data,
    );
    return promise.then(data => ResponseEcho.decode(new _m0.Reader(data)));
  }

  Flush(request: DeepPartial<RequestFlush>): Promise<ResponseFlush> {
    const fromPartial = RequestFlush.fromPartial(request);
    const data = RequestFlush.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'Flush',
      data,
    );
    return promise.then(data => ResponseFlush.decode(new _m0.Reader(data)));
  }

  Info(request: DeepPartial<RequestInfo>): Promise<ResponseInfo> {
    const fromPartial = RequestInfo.fromPartial(request);
    const data = RequestInfo.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'Info',
      data,
    );
    return promise.then(data => ResponseInfo.decode(new _m0.Reader(data)));
  }

  SetOption(
    request: DeepPartial<RequestSetOption>,
  ): Promise<ResponseSetOption> {
    const fromPartial = RequestSetOption.fromPartial(request);
    const data = RequestSetOption.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'SetOption',
      data,
    );
    return promise.then(data => ResponseSetOption.decode(new _m0.Reader(data)));
  }

  DeliverTx(
    request: DeepPartial<RequestDeliverTx>,
  ): Promise<ResponseDeliverTx> {
    const fromPartial = RequestDeliverTx.fromPartial(request);
    const data = RequestDeliverTx.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'DeliverTx',
      data,
    );
    return promise.then(data => ResponseDeliverTx.decode(new _m0.Reader(data)));
  }

  CheckTx(request: DeepPartial<RequestCheckTx>): Promise<ResponseCheckTx> {
    const fromPartial = RequestCheckTx.fromPartial(request);
    const data = RequestCheckTx.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'CheckTx',
      data,
    );
    return promise.then(data => ResponseCheckTx.decode(new _m0.Reader(data)));
  }

  Query(request: DeepPartial<RequestQuery>): Promise<ResponseQuery> {
    const fromPartial = RequestQuery.fromPartial(request);
    const data = RequestQuery.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'Query',
      data,
    );
    return promise.then(data => ResponseQuery.decode(new _m0.Reader(data)));
  }

  Commit(request: DeepPartial<RequestCommit>): Promise<ResponseCommit> {
    const fromPartial = RequestCommit.fromPartial(request);
    const data = RequestCommit.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'Commit',
      data,
    );
    return promise.then(data => ResponseCommit.decode(new _m0.Reader(data)));
  }

  InitChain(
    request: DeepPartial<RequestInitChain>,
  ): Promise<ResponseInitChain> {
    const fromPartial = RequestInitChain.fromPartial(request);
    const data = RequestInitChain.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'InitChain',
      data,
    );
    return promise.then(data => ResponseInitChain.decode(new _m0.Reader(data)));
  }

  BeginBlock(
    request: DeepPartial<RequestBeginBlock>,
  ): Promise<ResponseBeginBlock> {
    const fromPartial = RequestBeginBlock.fromPartial(request);
    const data = RequestBeginBlock.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'BeginBlock',
      data,
    );
    return promise.then(data =>
      ResponseBeginBlock.decode(new _m0.Reader(data)),
    );
  }

  EndBlock(request: DeepPartial<RequestEndBlock>): Promise<ResponseEndBlock> {
    const fromPartial = RequestEndBlock.fromPartial(request);
    const data = RequestEndBlock.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'EndBlock',
      data,
    );
    return promise.then(data => ResponseEndBlock.decode(new _m0.Reader(data)));
  }

  ListSnapshots(
    request: DeepPartial<RequestListSnapshots>,
  ): Promise<ResponseListSnapshots> {
    const fromPartial = RequestListSnapshots.fromPartial(request);
    const data = RequestListSnapshots.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'ListSnapshots',
      data,
    );
    return promise.then(data =>
      ResponseListSnapshots.decode(new _m0.Reader(data)),
    );
  }

  OfferSnapshot(
    request: DeepPartial<RequestOfferSnapshot>,
  ): Promise<ResponseOfferSnapshot> {
    const fromPartial = RequestOfferSnapshot.fromPartial(request);
    const data = RequestOfferSnapshot.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'OfferSnapshot',
      data,
    );
    return promise.then(data =>
      ResponseOfferSnapshot.decode(new _m0.Reader(data)),
    );
  }

  LoadSnapshotChunk(
    request: DeepPartial<RequestLoadSnapshotChunk>,
  ): Promise<ResponseLoadSnapshotChunk> {
    const fromPartial = RequestLoadSnapshotChunk.fromPartial(request);
    const data = RequestLoadSnapshotChunk.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'LoadSnapshotChunk',
      data,
    );
    return promise.then(data =>
      ResponseLoadSnapshotChunk.decode(new _m0.Reader(data)),
    );
  }

  ApplySnapshotChunk(
    request: DeepPartial<RequestApplySnapshotChunk>,
  ): Promise<ResponseApplySnapshotChunk> {
    const fromPartial = RequestApplySnapshotChunk.fromPartial(request);
    const data = RequestApplySnapshotChunk.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'tendermint.abci.ABCIApplication',
      'ApplySnapshotChunk',
      data,
    );
    return promise.then(data =>
      ResponseApplySnapshotChunk.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
