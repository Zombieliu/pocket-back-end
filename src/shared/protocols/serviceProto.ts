import { ServiceProto } from 'tsrpc-proto';
import { ReqCheckEmail, ResCheckEmail } from './PtlCheckEmail';
import { ReqGetChainTokenBalance, ResGetChainTokenBalance } from './PtlGetChainTokenBalance';
import { ReqGetTokenBalance, ResGetTokenBalance } from './PtlGetTokenBalance';
import { ReqGetTokenInfo, ResGetTokenInfo } from './PtlGetTokenInfo';
import { ReqGetUserNftList, ResGetUserNftList } from './PtlGetUserNftList';
import { ReqSendEmail, ResSendEmail } from './PtlSendEmail';

export interface ServiceType {
    api: {
        "CheckEmail": {
            req: ReqCheckEmail,
            res: ResCheckEmail
        },
        "GetChainTokenBalance": {
            req: ReqGetChainTokenBalance,
            res: ResGetChainTokenBalance
        },
        "GetTokenBalance": {
            req: ReqGetTokenBalance,
            res: ResGetTokenBalance
        },
        "GetTokenInfo": {
            req: ReqGetTokenInfo,
            res: ResGetTokenInfo
        },
        "GetUserNftList": {
            req: ReqGetUserNftList,
            res: ResGetUserNftList
        },
        "SendEmail": {
            req: ReqSendEmail,
            res: ResSendEmail
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 5,
    "services": [
        {
            "id": 1,
            "name": "CheckEmail",
            "type": "api"
        },
        {
            "id": 9,
            "name": "GetChainTokenBalance",
            "type": "api"
        },
        {
            "id": 7,
            "name": "GetTokenBalance",
            "type": "api"
        },
        {
            "id": 8,
            "name": "GetTokenInfo",
            "type": "api"
        },
        {
            "id": 6,
            "name": "GetUserNftList",
            "type": "api"
        },
        {
            "id": 5,
            "name": "SendEmail",
            "type": "api"
        }
    ],
    "types": {
        "PtlCheckEmail/ReqCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlCheckEmail/ResCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "state",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlGetChainTokenBalance/ReqGetChainTokenBalance": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetChainTokenBalance/ResGetChainTokenBalance": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "chain_token_balance",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetTokenBalance/ReqGetTokenBalance": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "fungible_token_Id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetTokenBalance/ResGetTokenBalance": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "fungible_token_balance",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetTokenInfo/ReqGetTokenInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "fungible_token_Id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetTokenInfo/ResGetTokenInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "token_info",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUserNftList/ReqGetUserNftList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUserNftList/ResGetUserNftList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "nft_list_info",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSendEmail/ReqSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSendEmail/ResSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};