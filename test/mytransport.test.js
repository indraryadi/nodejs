import winston from "winston";
import TransportStream from 'winston-transport'

test("logger test MyTransport",()=>{
    class MyTransport extends TransportStream{
        constructor(option){
            super(option)
        }
        log(info,next){
            console.log(`${new Date()} : ${info.message}`)
            next()
        }
    }
    const logger = winston.createLogger({
        level:"debug",
        transports:[
            new MyTransport({})
        ]
    })

    logger.debug("Debug Message")

})