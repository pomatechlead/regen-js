import type { RegenApi } from '@regen-network/api';
import type { QueryAllBalancesResponse } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryAllBalancesRequest } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { MsgClientImpl } from '@regen-network/api/lib/generated/regen/ecocredit/v1alpha1/tx';
import React, { useEffect, useState } from 'react';

interface MyBalanceProps {
	api: RegenApi;
}

export function MyBalance(props: MyBalanceProps): React.ReactElement {
	const { api } = props;

	const [address, setAddress] = useState(
		'regen1gtlfmszmhv3jnlqx6smt9n6rcwsfydrhznqyk9'
	);
	const [balance, setBalance] = useState<
		QueryAllBalancesResponse | undefined
	>();

	useEffect(() => {
		const msgClient = new MsgClientImpl(api.rpc);
		const bankClient = new QueryClientImpl(api.rpc);
		bankClient
			.AllBalances(QueryAllBalancesRequest.fromPartial({
				address,
			}))
			.then(setBalance)
			.catch(console.error);
	}, [address, api.rpc]);

	return (
		<div>
			<h2>Balance Checker</h2>
			<label htmlFor="tm">My address:</label>
			<input
				name="tmUrl"
				value={address}
				onChange={({ target: { value } }) => setAddress(value)}
			/>
			<br />
			My balance is:{' '}
			<code>{balance ? JSON.stringify(balance) : '(loading...)'}</code>
		</div>
	);
}
