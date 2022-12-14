import { ServiceProto } from 'tsrpc-proto';
import { ReqCheckEmail, ResCheckEmail } from './PtlCheckEmail';
import { ReqGetAccountTokenTransaction, ResGetAccountTokenTransaction } from './PtlGetAccountTokenTransaction';
import { ReqGetChainTokenBalance, ResGetChainTokenBalance } from './PtlGetChainTokenBalance';
import { ReqGetNextProgramId, ResGetNextProgramId } from './PtlGetNextProgramId';
import { ReqGetProgramInfo, ResGetProgramInfo } from './PtlGetProgramInfo';
import { ReqGetProxyPayTimes, ResGetProxyPayTimes } from './PtlGetProxyPayTimes';
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
        "GetAccountTokenTransaction": {
            req: ReqGetAccountTokenTransaction,
            res: ResGetAccountTokenTransaction
        },
        "GetChainTokenBalance": {
            req: ReqGetChainTokenBalance,
            res: ResGetChainTokenBalance
        },
        "GetNextProgramId": {
            req: ReqGetNextProgramId,
            res: ResGetNextProgramId
        },
        "GetProgramInfo": {
            req: ReqGetProgramInfo,
            res: ResGetProgramInfo
        },
        "GetProxyPayTimes": {
            req: ReqGetProxyPayTimes,
            res: ResGetProxyPayTimes
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
    "version": 11,
    "services": [
        {
            "id": 1,
            "name": "CheckEmail",
            "type": "api"
        },
        {
            "id": 11,
            "name": "GetAccountTokenTransaction",
            "type": "api"
        },
        {
            "id": 9,
            "name": "GetChainTokenBalance",
            "type": "api"
        },
        {
            "id": 12,
            "name": "GetNextProgramId",
            "type": "api"
        },
        {
            "id": 14,
            "name": "GetProgramInfo",
            "type": "api"
        },
        {
            "id": 13,
            "name": "GetProxyPayTimes",
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
        "PtlGetAccountTokenTransaction/ReqGetAccountTokenTransaction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "fromAccount",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "toAccount",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "fungibleTokenId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetAccountTokenTransaction/ResGetAccountTokenTransaction": {
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
                    "name": "data_list",
                    "type": {
                        "type": "String"
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
        "PtlGetNextProgramId/ReqGetNextProgramId": {
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
        "PtlGetNextProgramId/ResGetNextProgramId": {
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
                    "name": "next_program_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetProgramInfo/ReqGetProgramInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "program_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetProgramInfo/ResGetProgramInfo": {
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
                    "name": "program_info",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetProxyPayTimes/ReqGetProxyPayTimes": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "program_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "address",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetProxyPayTimes/ResGetProxyPayTimes": {
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
                    "name": "times",
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