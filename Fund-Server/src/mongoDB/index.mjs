import mongoose from "mongoose";
import { DBpath, DBUsername, DBPassword } from "../config/index.mjs";
export const DB = mongoose;
export const { Schema } = DB;

const connectOptions = {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  // 账号
  user: DBUsername,
  // 密码
  pass: DBPassword,

  // 保持连接
  keepAlive: true
};

// 连接数据库
 const connect = {
  connect:function(){
    DB.set("useCreateIndex", true);
    DB.connect(DBpath, connectOptions);
    DB.connection.on("error", error => {
      console.log("数据库连接失败！", error);
    });
    DB.connection.once("open", () => {
      console.log("数据库连接成功！");
    });
    return DB;
  }
};
export default connect