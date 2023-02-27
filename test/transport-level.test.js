import winston from "winston";

test("logger using transport level",()=>{
    const logger = winston.createLogger({
        level:"debug",
        format:winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports:[
            new winston.transports.Console({}),
            new winston.transports.File({
                filename:"application.log"
            }),
            new winston.transports.File({
                level:"error",
                filename:"application-error.log"
            })
        ]
    })

    logger.error("Error Message")
    // logger.warn("Warn Message")
    // logger.info("Info Message")
    logger.http("http Message")
    // logger.verbose("Verbose Message")
    logger.debug("Debug Message")
    // logger.silly("Silly Message")

})