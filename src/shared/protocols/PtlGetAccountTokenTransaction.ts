// This is a demo code file
// Feel free to delete it



/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqGetAccountTokenTransaction {
    /** 要增加的消息内容 */
    fromAccount:string;
    toAccount:string;
    fungibleTokenId:string;
}

export interface ResGetAccountTokenTransaction {
    /** 服务端内容创建时间 */
    time: Date
    data_list: string
}
