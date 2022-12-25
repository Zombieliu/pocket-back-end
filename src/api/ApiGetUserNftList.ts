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
            "title":"Azuki",
            "img":"https://img.seadn.io/files/22e01765d5c0f9b082200af01ec55c14.png?fit=max&w=1000",
            "metadata":JSON.stringify({
                "describe":"Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "2" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title": "BoredApeYachtClub",
            "img":"https://i.seadn.io/gae/rV7OOA0zZF1bCkcdDgP09m3SgwqaGm5_SBZ11wvBlwvJtxEV9Qr6J7HYeGAsGYBVRxOBfVMDGFXnyGyywVlXUB1dSTCX2nsVyyzX2nI?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.\n" +
                    "Category PFPs",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "3" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title": "Doodles_LLC",
            "img":"https://i.seadn.io/gcs/files/3ecd8cbbfa8b5a27f67f10acc73d7f85.png?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "4" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"CryptoPunk",
            "img":"https://i.seadn.io/gcs/files/f3564ef33373939b024fb791f21ec37b.png?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "5" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"Azuki",
            "img":"https://i.seadn.io/gcs/files/05279a1843cb8119ea2da1add6e55510.png?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "6" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"Azuki",
            "img":"https://i.seadn.io/gcs/files/e7d7670db38e01cfb76120e1c7567058.png?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
            })
        },
        {
            "id" : "7" ,
            "name" : "Wallet 2" ,
            "address": "hHxb...ywyY" ,
            "title":"Azuki",
            "img":"https://i.seadn.io/gcs/files/55b808183c4c32dd74821b148be32eae.png?auto=format&w=750",
            "metadata":JSON.stringify({
                "describe":"Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.",
                "Grade":"UnCommon",
                "color":"Black",
                "style":"Pop",
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
