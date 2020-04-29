import Router from "koa-router";
import  NewsController from "../controller/newsController.mjs";

const router = new Router();

//登录
router.post("/news/newsdata", NewsController.seachNews);
export default router;