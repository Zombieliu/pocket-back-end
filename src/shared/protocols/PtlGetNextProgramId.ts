// This is a demo code file
// Feel free to delete it



/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqGetNextProgramId {
    /** 要增加的消息内容 */
    address:string
}

export interface ResGetNextProgramId {
    /** 服务端内容创建时间 */
    time: Date
    next_program_id: string
}
