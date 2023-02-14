import net from "net"

const connection = net.createConnection({port:3000,host:"localhost"})

setInterval(()=>{
    connection.write("kira\r\n")
},2000)

connection.addListener("data",(data)=>{
    console.info(`response from server : ${data.toString()}`)
})