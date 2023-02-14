import timers from "timers/promises"


// callback
// setInterval(()=>{
//     console.info(`start at ${new Date()}`)
// },1000)

// promise
console.info(new Date())
await timers.setTimeout(3000)
console.info(new Date())

console.info('this is interval using for await')
for await (const startTime of timers.setInterval(1000,"ignored")){
    console.info(`start time at ${new Date()}`)
}