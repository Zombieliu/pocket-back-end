// This is a demo code file
// Feel free to delete it



/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqGetProxyPayTimes {
    /** 要增加的消息内容 */
    program_id:string;
    address:string;
}

export interface ResGetProxyPayTimes {
    /** 服务端内容创建时间 */
    time: Date
    times: string
}
