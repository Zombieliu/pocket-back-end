import { ApiCall } from "tsrpc";
import {ReqGetNextProgramId, ResGetNextProgramId} from "../shared/protocols/PtlGetNextProgramId";
import chain_api from "../chain";

export default async function (call: ApiCall<ReqGetNextProgramId, ResGetNextProgramId>) {
    // Error
    if (call.req.address === '') {
        await call.error('Content is empty');
        return;
    }


    let time = new Date();


    const api = await chain_api()
    const data = await api.query.proxyPay.nextProgramId();
    const next_program_id = data.toString();


    await call.succ({
          time,
          next_program_id
    });
}
