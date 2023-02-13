function samplePromise(){
    return Promise.resolve("kira")
}

const res = await samplePromise()
console.info(res)