import Router from "koa-router";
import  FundController from "../controller/fundController.mjs";

const router = new Router();

//登录
router.post("/fund/funddata", FundController.seachFund);
export default router;