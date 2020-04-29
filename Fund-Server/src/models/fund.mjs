import {
    DB,
    Schema
} from "../mongoDB/index.mjs";
const fundSchema = new Schema({
    code:String,
    fundName:String,
    pieData:Array,
    baseNum:Number,
    dayrate:Number,
    heavyHoldings:Array
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "updated"
    }
});

const fund = DB.model("funddatas", fundSchema);

export default fund;