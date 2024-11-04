const mongoose = require("mongoose")
const CONFIG = require("../config/config")



function connectToDb() {
    mongoose.connect(CONFIG.MONGODB_URL)
    
    //test dp
    mongoose.connection.on("connected", () => {
        console.log("Mongodb connected successfully")

    mongoose.connection.on("error", (err) => {
        console.log("An error occured")
    })
    })
}
    module.exports = connectToDb()