import mongoose from "mongoose";

export const dbConnection = ()=>{

    mongoose.connect(process.env.MONGO_URI, {

        dbName: "Restaurant"
    }).then(() => {
        console.log("Connected to databse succesfully!");
    }).catch(err=>{
        console.log(`Error occured while connecting to database!' ${err}`)
    });
};

