import { ApiCall } from "tsrpc";
import chain_api from "../chain";
import {ReqGetProgramInfo, ResGetProgramInfo} from "../shared/protocols/PtlGetProgramInfo";

export default async function (call: ApiCall<ReqGetProgramInfo, ResGetProgramInfo>) {
    // Error
    if (call.req.program_id === '') {
        await call.error('Content is empty');
        return;
    }


    let time = new Date();

    const program_id = call.req.program_id
    const api = await chain_api()
    const data = await api.query.proxyPay.programInfo(program_id);

    await call.succ({
          time,
          program_info:JSON.stringify(data.toHuman())
    });
}
