import readline from 'readline/promises'
import process from 'process'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const signal = AbortSignal.timeout(10_000)
signal.addEventListener('abort',()=>{
    console.log('the food question timed out')
},{once:true})

const answer = await rl.question('what is your fav food?',{signal})
console.info(`oh that is ${answer}`)