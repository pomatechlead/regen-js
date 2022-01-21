import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { messageTypeRegistry } from './generated/typeRegistry';
import { DirectSecp256k1HdWallet, Registry, GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";

interface TendermintConnection {
	type: 'tendermint';
	url: string;
}

/**
 * Options to pass into the RegenApi constructor.
 */
export interface RegenApiOptions {
	url: string;
}

/**
 * The main entry point for interacting with the Regen Ledger. The class needs
 * a client connection
 */
export class RegenApi {
	readonly rpc: ProtobufRpcClient;

	constructor(rpc: ProtobufRpcClient) {
		this.rpc = rpc;
	}

	/**
	 * Create a RegenApi object which connects to the given gRPC connection.
	 *
	 * @param options - Options to pass into RegenAPI.
	 */
	public static async connect(options: RegenApiOptions): Promise<RegenApi> {
		const tendermintClient = await Tendermint34Client.connect(
			options.url,
		);
		// The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
		const queryClient = new QueryClient(tendermintClient);

		// This helper function wraps the generic Stargate query client for use by the specific generated query client
		const rpcClient = createProtobufRpcClient(queryClient);
		
		console.log('messageTypeRegistry',messageTypeRegistry)
		const customRegistry: Array<[string, GeneratedType]> = [];
		messageTypeRegistry.forEach((value, key) => {
			customRegistry.push([key, value]);
		})
		let myRegistry = new Registry([
			...defaultRegistryTypes,
			...customRegistry,
		]);
		console.log('myRegistry',myRegistry)

		return new RegenApi(
			rpcClient
		);
	}
}
