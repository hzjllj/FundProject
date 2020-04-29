import Router from "koa-router";
import  UserController from "../controller/userController.mjs";

const router = new Router();

//登录
router.post("/login/adminLogin", UserController.adminLogin);
//发送验证码
router.post("/register/mobileauthcode",UserController.mobileauthcode)
//注册
router.post("/register/register",UserController.register)
//搜索用户
router.post("/seach/authcode",UserController.authcode)
//买入基金
// router.post("/user/buy",UserController.buyFund)
export default router;