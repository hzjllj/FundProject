import Fund from "../models/fund.mjs";


export default class FundHelper  {
    /**
     * 根据基金代码查询数据库返回基金详情
     * @param code 基金代码
     */
    static async seachFund(data){
        const res  =await Fund.find(data,(error,result)=>{
                return result?result:''
        });
        return res 
    }
}