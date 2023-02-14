import {Console} from "console"
// import fs from "fs/promises"
import fs from "fs"

const logFile = fs.createWriteStream("console.log")

const log = new Console({
    stdout:logFile,
    stderr:logFile
})

log.info("this is info")
log.error("ouch")

const person = {
    "name":"kira",
    "role":"senior software engineer"
}

log.table(person)