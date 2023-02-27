import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logger using transport level",()=>{
    const logger = winston.createLogger({
        level:"debug",
        format:winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports:[
            // new winston.transports.Console({}),
            new winston.transports.File({
                filename:"application.log"
            }),
            new winston.transports.File({
                level:"error",
                filename:"application-error.log"
            }),
            new DailyRotateFile({
                filename:'app-%DATE%-log',
                zippedArchive:true,
                maxSize:'1m',
                maxFiles:'14d'
            })
        ]
    })

    for (let i = 0; i < 100000; i++) {
       logger.debug(`hello debug ${i}`) 
    }

})