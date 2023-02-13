import fs from "fs/promises"

const buffer = await fs.readFile("hello.js")
console.info(buffer.toString())
await fs.writeFile("fileoutput.txt","from file system mjs")