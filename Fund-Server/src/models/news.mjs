import {
    DB,
    Schema
} from "../mongoDB/index.mjs";
const newsSchema = new Schema({
    _id:String,
    title:String,
    subtitle:String,
    provenance:String,
    time:String,
    url:String
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "updated"
    }
});

const news = DB.model("news", newsSchema);

export default news;