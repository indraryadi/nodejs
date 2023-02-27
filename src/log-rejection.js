import winston, { createLogger } from "winston";

async function  callAsync(){
    return Promise.reject("wadaw")
}
const logger = winston.createLogger({
    level:"debug",
    transports:[
        new winston.transports.File({
            handleExceptions:true,
            handleRejection:true,
            filename:"exception.log"
        })
    ]
})

callAsync()