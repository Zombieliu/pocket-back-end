import { ApiCall } from "tsrpc";
import {ReqGetProxyPayTimes, ResGetProxyPayTimes} from "../shared/protocols/PtlGetProxyPayTimes";
import chain_api from "../chain";

export default async function (call: ApiCall<ReqGetProxyPayTimes, ResGetProxyPayTimes>) {
    // Error
    if (call.req.address === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    const program_id = call.req.program_id;
    const address = call.req.address;

    const api = await chain_api()
    const data = await api.query.proxyPay.proxyPayTimes(program_id,address);
    const times = data.toString();


    await call.succ({
        time,
        times
    });
}
