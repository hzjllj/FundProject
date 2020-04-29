import User from "../models/user.mjs";


export default class UserHelper  {
    /**
     * 用户登录-请求数据库查询用户是否存在
     * @param username 用户名，暂时为手机号码
     * @param password 用户密码
     * @returns {Object} res 数据库查询结果
     */
    static async login(username,password){
        const res  =await User.findOne({ 'username':username,'password':password },(error,result)=>{
                return result?result:''
        });
        return res 
        
    }

    /**
     * 注册-验证码验证，查看用户是否已存在
     * @param username 用户名，暂时为手机号码
     * @returns {Object} res 数据库查询结果
     */
    static async mobileauthcode(username){
        const res  = User.findOne({ 'username':username},(error,result)=>{
                return result?result:''
        });
        return res 
    }

    /**
     * 根据用户输入的信息，搜索用户
     * @param object {id: id,username:username}等，参数可选
     * @returns {Object} res 数据库查询结果
     */
    static async authcode(obj){
        const res  = User.findOne(obj,(error,result)=>{
                return result?result:''
        });
        return res 
    }
    /**
     * 购买基金，由于业务复杂，只做买入的时候添加基金，并且个人财产减去购买金额，也就是说只能买没有买过
     * @param id 用户id
     * @param funddata 购买的基金信息
     * @returns {Object} res 数据库查询结果
     */
    // static async buyFund(id,funddata){
    //         User.findOne({'_id':id},(error,result)=>{
    //             if(result){
    //                 let ownPrice = result.ownPrice - (funddata.buyPrice*funddata.buyShare)
    //                 User.update({'_id':id},{$push:{ownFund:{'code':funddata.code,'buyPrice':funddata.buyPrice,'buyShare':funddata.buyShare}},'ownPrice':ownPrice},(error,result)=>{
    //                     console.log(result);
    //                     return result?result:''
    //                 });
    //             }
    //             else return ''
    //         })
    //     }
    
}