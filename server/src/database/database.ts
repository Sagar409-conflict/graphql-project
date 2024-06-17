import mongoose from "mongoose";

export const connectDB = (uri:string)=>
    mongoose.connect(uri,{dbName: "6packProgrammer"}).then((connection)=>{
        console.log(`${process.env.SUCCESS_PATTERN_CELEBRATE}  DATABASE CONNECTION `)
        console.log(`Database has been connected  🖇️  sucessfully ✅ : ${connection.connection.name}`)
    }).catch((error)=>{
        console.log(`${process.env.FAILURE_PATTERN_CROSS_RED}  DATABASE CONNECTION `)
        console.log(`(≧﹏ ≦) Server is facing issue while establishing connection with a Database ✖️ : `);
        console.error(error)
    }) 