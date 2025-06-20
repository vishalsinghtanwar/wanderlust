const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../MODELS/listing");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to DB")
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner : "68476c6e7b23e1148cc99a27",
    }))
    await Listing.insertMany(initData.data);
    console.log("dat was initialized")
}

initDB();