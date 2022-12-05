import { ApiCall } from "tsrpc";
import {ReqGetUserNftList, ResGetUserNftList} from "../shared/protocols/PtlGetUserNftList";


export default async function (call: ApiCall<ReqGetUserNftList, ResGetUserNftList>) {
    // Error
    if (call.req.address === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();



    ///



    let nft_list_info = JSON.stringify([
        {
            "id" : "1" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"1",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "2" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"2",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "3" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"3",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "4" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"4",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "5" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"5",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "6" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"6",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "7" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"7",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
        {
            "id" : "8" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"8",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"1",
                "Grade":"",
                "color":"",
                "style":"",
            })
        },
    ])



    console.log(nft_list_info)
    // Success
    await call.succ({
        time: time,
        nft_list_info:nft_list_info
    });
}
