import winston, { info } from "winston";

test("logger test",()=>{
    const logger = winston.createLogger({
        level:"debug",
        transports:[
            new winston.transports.Console({})
        ]
    })

    logger.log({"level":"error","message":"Error Message"})
    logger.log({"level":"warn","message":"Warn Message"})
    logger.log({"level":"info","message":"Info Message"})
    logger.log({"level":"http","message":"Http Message"})
    logger.log({"level":"verbose","message":"Verbose Message"})
    logger.log({"level":"debug","message":"Debug Message"})
    logger.log({"level":"silly","message":"Silly Message"})

})