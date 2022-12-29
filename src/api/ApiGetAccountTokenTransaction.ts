import { ApiCall } from "tsrpc";
import axios from "axios";
import {
    ReqGetAccountTokenTransaction,
    ResGetAccountTokenTransaction
} from "../shared/protocols/PtlGetAccountTokenTransaction";

export default async function (call: ApiCall<ReqGetAccountTokenTransaction, ResGetAccountTokenTransaction>) {
    // Error
    if (call.req.address === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    const explorer_api = axios.create({
        baseURL: 'https://explorer-testnet-restful-api.web3games.org',
        timeout: 9999,
        headers:{
            accept: 'application/json'
        }
    });

    const address = call.req.address;
    const fungibleTokenId = call.req.fungibleTokenId;
    const data = await explorer_api.post('/tokenFungible/ListTokenFungibleTransfer',{
        address,
        fungibleTokenId
    });

    const data_list = JSON.parse(data.data.res.content);


    if(data_list.total == 0 ){
        await call.error('Content is empty');
        return;
    }else{
            let new_data_list = []
            for (let i = 0; i < data_list.total; i++){
                const data = data_list.items[i];
                data.tokenName = 'W3G';
                data.decimals = '18';
                delete data.tokenFungibleCreated;
                delete data.fungibleTokenId;
                delete data.blockNum;
                delete data.eventIndex;
                delete data.extrinsicIndex;
                new_data_list.push(data);
            }
            await call.succ({
                time: time,
                data_list:JSON.stringify(new_data_list)
            });
    }
}
