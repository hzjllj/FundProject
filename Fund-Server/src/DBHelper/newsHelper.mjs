import News from "../models/news.mjs";


export default class NewsHelper  {
    /**
     * 查看热点新闻
     * @param code 基金代码
     */
    static async seachNews(data){
        const res  =await News.find(data,(error,result)=>{
                return result?result:''
        });
        return res 
    }
}