const mongoose = require('mongoose')
require('dotenv').config();

const connectDb=async()=>{
try {
    let db= await mongoose.connect(process.env.databaseUrl);
    console.log(`db is connectect ${db.connection.host}`)
} catch (error) {
    throw error;
}
}
module.exports=connectDb;