import mongoose from "mongoose";

export const connect = async ()=>{
    return await mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Database connect successfully....");
})
.catch((err)=>{
    console.log("Failed to connect Database!" , err);
})
}
