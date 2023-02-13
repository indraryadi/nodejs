import fs from "fs"

const writer = fs.createWriteStream("targetStream.log")
writer.write("kira")
writer.write("anon")
writer.close()

const reader = fs.createReadStream("targetStream.log")
reader.addListener("data",(data)=>{
    console.info(data.toString()) //this data is in form of buffer
})

