
// import axios from "axios";
// import { signKey, qiniuConfig } from "../config";
import UserHelper from "../DBHelper/userHelper.mjs";
import {Decrypt,Encrypt} from "../util/crypto.mjs"
// import { upToken, forceUpToken } from "../util/qiniu";

export default class UserController {
    /**
     * 用户登录查询
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async adminLogin(ctx) {
        let data =ctx.request.body.data;
        data = Decrypt(data)
        const res = await UserHelper.login(data.username, data.password);
        if(res){
            ctx.body = Encrypt({ message: "登录成功!", type: "success", code:'000',id:res._id});
        }else{
            ctx.body = Encrypt({ message: "登录失败!", type: "error", code:'004'});
            
        }
    }
    /**
     * 用于注册账户时的短信发送（模拟，真的要钱）所以用get就可以了
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async mobileauthcode(ctx) {
            let data =ctx.request.body.data;
            data = Decrypt(data)
            const res = await UserHelper.mobileauthcode(data.telNum);
            if(res){
                ctx.body = Encrypt({ message: "用户已存在!", type: "error", code:'003'});
            }else{
                ctx.body = Encrypt({ message: "验证码发送成功!", type: "success", code:'000',verifytype:'123456'});
            }
        }    

    /**
     * 搜索用户
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async authcode(ctx) {
        let data =ctx.request.body.data;
        data = Decrypt(data)
        const res = await UserHelper.authcode(data.telNum);
        if(res){
            ctx.body = Encrypt({ message: "查询成功!", type: "error", code:'000',data:res});
        }else{
            ctx.body = Encrypt({ message: "查询失败!", type: "success", code:'003'});
        }
    } 
/**
     * 用于注册用户
     * @param ctx.request 请求内容
     * @param ctx.body 发送内容
     */
    static async register(ctx) {
        let data =ctx.request.body.data;
        data = Decrypt(data)
        const res = await UserHelper.register(data.username, data.password);
        if(res){
            ctx.body = Encrypt({ message: "用户已存在!", type: "error", code:'003'});
        }else{
            ctx.body = Encrypt({ message: "用户添加成功!", type: "success", code:'000'});
        }
    }

    // /**
    //  * 用于注册买入基金
    //  * @param ctx.request 请求内容
    //  * @param ctx.body 发送内容
    //  */
    // static async buyFund(ctx) {
    //     let data =ctx.request.body.data;
    //     data = Decrypt(data)
    //     console.log('data: ', data);
    //     const res = await UserHelper.buyFund(data.id, data.funddata);
    //     if(res){
    //         ctx.body = Encrypt({ message: "购买成功!", type: "success", code:'000'});
    //     }else{
    //         ctx.body = Encrypt({ message: "购买失败!", type: "error", code:'003'});
    //     }
    // }
}