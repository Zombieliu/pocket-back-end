import { ApiCall } from "tsrpc";
import chain_api from "../chain";
import {ReqGetChainTokenBalance, ResGetChainTokenBalance} from "../shared/protocols/PtlGetChainTokenBalance";



export default async function (call: ApiCall<ReqGetChainTokenBalance, ResGetChainTokenBalance>) {
    // Error
    if (call.req.address === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    // Construct
    const address = call.req.address;
    const api = await chain_api()

    const balance = (await api.query.system.account(address)).toHuman();
    // @ts-ignore
    const balance_amount = balance['data'].free;

    // Success
    await call.succ({
        time: time,
        chain_token_balance:balance_amount
    });
}
