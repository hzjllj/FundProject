
import FundHelper from "../DBHelper/fundHelper.mjs";
import {Decrypt,Encrypt} from "../util/crypto.mjs"

export default class FundController {
    /**
     * 查询基金详情
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async seachFund(ctx) {
        let data =ctx.request.body.data;
        data = Decrypt(data)
        const res = await FundHelper.seachFund(data);
        if(res){
            ctx.body = Encrypt({ message: "查询基金成功!", type: "success", code:'000',data:res});
        }else{
            ctx.body = Encrypt({ message: "查询基金失败!", type: "error", code:'004'});
            
        }
    }
}