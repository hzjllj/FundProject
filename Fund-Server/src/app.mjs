// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
import Koa from "koa";
import cors from "koa2-cors";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import mongoDB from "./mongoDB/index.mjs";
import userRouter from "./router/userRouter.mjs";
import fundRouter from "./router/fundRouter.mjs"
import newsRouter from "./router/newsRouter.mjs"
// const Koa = require("koa")
// const cors = require("koa2-cors")
// const logger = require("koa-logger")
// const bodyParser = require("koa-bodyparser")
// const mongoDB = require("./mongoDB")
// const mongoDB = require("./router")
// import {
//     signKey
// } from "./config";
// 对于任何请求，app将调用该异步函数处理请求：
const app = new Koa();
mongoDB.connect();
app
    .use(
        cors({
            allowHeaders: ["Content-Type", "Authorization", "Accept"],
            allowMethods: ["GET", "POST"],
            credentials: true,
            exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
            maxAge: 5,
            origin: ctx => ctx.header.origin
        })
    )
    .use(logger())
    .use(bodyParser())
    .use(userRouter.routes())
    .use(userRouter.allowedMethods())
    .use(fundRouter.routes())
    .use(fundRouter.allowedMethods())
    .use(newsRouter.routes())
    .use(newsRouter.allowedMethods())
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');