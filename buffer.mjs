
const buffer = Buffer.from("kira")
console.info(buffer)
console.info(buffer.toString())

const bufferUTF = Buffer.from("kadek","utf-8")
console.info(bufferUTF.toString("base64"))
console.info(bufferUTF.toString("hex"))

const decodeBuffer = Buffer.from("a2FkZWs=","base64")
console.info(decodeBuffer.toString("utf-8"))