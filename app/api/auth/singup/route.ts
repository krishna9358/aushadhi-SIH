
import client from "@/db"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST (request:Request){
    const { email, password, name, role } = await request.json();
      
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = await client.user.create({
            data :{
                email,password:hashedPassword,name,role
            }
        });
        return NextResponse.json({user})
    }catch(e){
        console.log("Error while signup")
        return NextResponse.error();
    }



}