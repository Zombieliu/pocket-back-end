import { ApiCall } from "tsrpc";
import {ReqGetTokenBalance, ResGetTokenBalance} from "../shared/protocols/PtlGetTokenBalance";
import chain_api from "../chain";



export default async function (call: ApiCall<ReqGetTokenBalance, ResGetTokenBalance>) {
    // Error
    if (call.req.fungible_token_Id === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    // Construct
    const api = await chain_api()
    const data = await api.query.tokenFungible.balances(call.req.fungible_token_Id,call.req.address);
    const fungible_token_balance = data.toString();


    // Success
    await call.succ({
        time: time,
        fungible_token_balance:fungible_token_balance
    });
}
