import {EventEmitter} from "events"

const emitter = new EventEmitter

// listener
emitter.addListener("hello",(name)=>{
    console.info(`hello ${name}`)
})

emitter.emit("hello","kira")