import {
    DB,
    Schema
} from "../mongoDB/index.mjs";
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true}
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "updated"
    }
});

const user = DB.model("Users", userSchema);

export default user;