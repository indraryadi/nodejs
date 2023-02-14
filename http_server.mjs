import http from "http"

const server = http.createServer((req,res)=>{
    console.info(req.method)
    console.info(req.url)
    console.table(req.headers)

    res.write("hello from server")
    if(req.method === "POST"){
        req.addListener("data",(data)=>{
            res.write(data)
            res.end()
        })
    }

})

server.listen(3000,()=>{console.info("server run")})