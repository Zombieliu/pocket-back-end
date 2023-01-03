import { ApiCall } from "tsrpc";
import {
    ReqGetAccountTokenTransaction,
    ResGetAccountTokenTransaction
} from "../shared/protocols/PtlGetAccountTokenTransaction";
import {hexToString} from '@polkadot/util'
import client from "../client";

export default async function (call: ApiCall<ReqGetAccountTokenTransaction, ResGetAccountTokenTransaction>) {
    // Error
    if (call.req.fromAccount === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    const fromAccount = call.req.fromAccount;
    const toAccount = call.req.toAccount;
    const fungibleTokenId = call.req.fungibleTokenId;



    const data = await client.callApi('tokenFungible/ListTokenFungibleTransfer', {
        fromAccount,
        toAccount,
        fungibleTokenId
    });


    const data_list = JSON.parse(<string>data.res?.content);

    if(data_list.total == 0 ){
        await call.error('Content is empty');
        return;
    }else{
            let new_data_list = []
            for (let i = 0; i < data_list.total; i++){
                const data = data_list.items[i]
                if (fungibleTokenId !== "-1"){
                    const symbol = data_list.items[i].tokenFungibleCreated.symbol
                    const decimals = data_list.items[i].tokenFungibleCreated.decimals
                    data.tokenName = hexToString(symbol)
                    data.decimals =  decimals
                    delete data.tokenFungibleCreated
                    delete data.fungibleTokenId
                    delete data.blockNum
                    delete data.eventIndex
                    delete data.extrinsicIndex
                    new_data_list.push(data)
                }else{
                    data.tokenName = 'W3G'
                    data.decimals = 18
                    delete data.tokenFungibleCreated
                    delete data.fungibleTokenId
                    delete data.blockNum
                    delete data.eventIndex
                    delete data.extrinsicIndex
                    new_data_list.push(data)
                }
            };
            await call.succ({
                time: time,
                data_list:JSON.stringify(new_data_list)
            });
    }
}
