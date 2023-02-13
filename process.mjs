import process from 'process'

process.addListener("exit",(exitCode)=>{
    console.info(`NodeJS exit with code ${exitCode}`)

})