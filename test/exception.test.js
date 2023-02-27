import winston, { createLogger } from "winston";

const logger = winston.createLogger({
    level:"debug",
    transports:[
        new winston.transports.File({
            handleExceptions:true,
            filename:"exception.log"
        })
    ]
})

hello()
