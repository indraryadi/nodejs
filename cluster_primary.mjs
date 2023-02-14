import cluster from "cluster";
import os from "os"
import http from "http"
import process, { cpuUsage } from "process";

console.info(os.cpus().length)
// console.table(os.cpus())

if(cluster.isPrimary){
    console.info(`primary: ${process.pid}`)
    for(let i =0;i<os.cpus().length;i++){
        cluster.fork() //for runnning worker
    }
    cluster.addListener("exit",(worker)=>{
        console.info(`worker ${worker.id} is exit`)
        cluster.fork() //for runnning worker
    })
}

if(cluster.isWorker){
    console.info(`worker: ${process.pid}`)

    const server = http.createServer((req,res)=>{
        res.write(`response for process ${process.pid}`)
        res.end()
        process.exit() //for stop worker
    })

    server.listen(3000)
    console.info(`start cluster worker ${process.pid}`)
}