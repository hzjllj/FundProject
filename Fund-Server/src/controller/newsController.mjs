import NewsHelper from "../DBHelper/newsHelper.mjs";
import {Decrypt,Encrypt} from "../util/crypto.mjs"

export default class NewsController {
    /**
     * 查询基金详情
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async seachNews(ctx) {
        let data =ctx.request.body.data;
        data = Decrypt(data)
        const res = await NewsHelper.seachNews(data);
        if(res){
            ctx.body = Encrypt({ message: "查询新闻成功!", type: "success", code:'000',data:res});
        }else{
            ctx.body = Encrypt({ message: "查询新闻失败!", type: "error", code:'004'});
            
        }
    }
}