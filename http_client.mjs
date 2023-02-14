import http from 'http'

const endpoint = "http://localhost:3000"

const request = http.request(endpoint,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
},(response)=>{
    response.addListener("data",(data)=>{
        console.info(`recieve data from server ${data.toString()}`)
    })
})

const message=JSON.stringify({
    "name":"kira"
})

request.write(message)
request.end()