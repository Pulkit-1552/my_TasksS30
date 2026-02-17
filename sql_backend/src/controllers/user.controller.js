import { db } from "../config/db.js"

export const getAllUsers =async()=>{
 const [data] = await db.query("SELECT * from users");
 return data;
}

export const createUser = async()=>{
    
}