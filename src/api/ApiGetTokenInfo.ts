import { ApiCall } from "tsrpc";
import {ReqGetTokenInfo, ResGetTokenInfo} from "../shared/protocols/PtlGetTokenInfo";
import chain_api from "../chain";


export default async function (call: ApiCall<ReqGetTokenInfo, ResGetTokenInfo>) {
    // Error
    if (call.req.fungible_token_Id === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();




    // Construct
    const api = await chain_api()
    const data = await api.query.tokenFungible.tokens(call.req.fungible_token_Id);

    if (data.toHuman() == null){
        await call.error('Content is empty');
        return;
    }else{
        const token_info = JSON.stringify(
            data.toHuman()

        )
        await call.succ({
            time: time,
            token_info:token_info
        });
    }


    // Success

}
