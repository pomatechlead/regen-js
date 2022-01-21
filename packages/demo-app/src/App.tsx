import { RegenApi } from '@regen-network/api';
import { useEffect, useState } from 'react';
import * as React from 'react';

import { MyBalance } from './MyBalance';

const DEVNET_NODE_TM_URL = 'http://devnet.regen.network:26657'; // CORS not enabled on this one yet.
const AMAURY_NODE_TM_URL = 'http://hambach.regen.network:26657/';

export function App(): React.ReactElement {
	const [tmUrl, setTmUrl] = useState(AMAURY_NODE_TM_URL);
	const [tmError, setTmError] = useState<Error | undefined>();

	const [api, setApi] = useState<RegenApi | undefined>(undefined);

	useEffect(() => {
		setApi(undefined);
		setTmError(undefined);

		RegenApi.connect({
			url: tmUrl,
		})
			.then(setApi)
			.catch((err: Error) => {
				console.error(err);
				setTmError(err);
			});
	}, [tmUrl]);

	return (
		<div>
			<h1>
				Regen Network Demo App using <code>@regen-network/api</code>
			</h1>

			{api ? (
				<div>
					<MyBalance api={api} />
				</div>
			) : (
				<p>Loading RegenApi...</p>
			)}

			<div>
				<h2>Settings</h2>
				<label htmlFor="tm">
					The current Tendermint RPC endpoint we&apos;re using:
				</label>
				<input
					name="tmUrl"
					value={tmUrl}
					onChange={({ target: { value } }) => setTmUrl(value)}
				/>
				<p>
					Switch to a known public endpoint:
					<button onClick={() => setTmUrl(DEVNET_NODE_TM_URL)}>
						Official Regen Devnet node
					</button>
					<button onClick={() => setTmUrl(AMAURY_NODE_TM_URL)}>
						Hmab&apos;s node
					</button>
				</p>

				<p>
					Tendermint Client Status:{' '}
					{tmError?.message
						? tmError?.message
						: api
						? 'ok'
						: 'loading...'}
				</p>
			</div>
		</div>
	);
}
