import express from 'express'
import request from 'supertest'

const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/reqTest',(req,res)=>{
    res.send(`hello ${req.query.name}`)
})

app.get('/reqTest2',(req,res)=>{
    res.json({
        path:req.path,
        originalURL:req.originalUrl,
        protocol:req.protocol,
        hostname:req.hostname,
    })
})

app.get('/getParam',(req,res)=>{
    res.send(`hello ${req.query.first_name} ${req.query.last_name}`)
})

app.get('/getQueryHeader',(req,res)=>{
    const header = req.get('Accept')
    res.send(`header: ${header}`)
})

app.get('/status',(req,res)=>{
    if(req.query.name){
        res.status(200).send(`hello ${req.query.name}`)
    }else{
        res.status(404).end()
    }
})

app.get('/setResponseHeader',(req,res)=>{
    res.set({
        'X-Powered-By':'New SE',
        'X-Author':'Kira'
    }).end()
})

app.get('/responseBody',(req,res)=>{
    res.set({
        // 'Content-type':'application/json'
        'Content-type':'text/html'
    })
    res.send('Kira')
})

test("Test Hello function",async ()=>{
    const response = await request(app).get('/')
    expect(response.text).toBe('hello')
})

test("Test Request Query Parameter", async ()=>{
    const response= await request(app).get('/reqTest').query({'name':'kira'})
    expect(response.text).toBe('hello kira')
})

test("Test Others Request",async ()=>{
    const response=await request(app).get('/reqTest2').query({'name':'kira'})
    expect(response.body).toEqual({
        path:'/reqTest2',
        originalURL:'/reqTest2?name=kira',
        protocol:'http',
        hostname:'127.0.0.1',
    })
})

test("Test Get Query Param",async ()=>{
    const response=await request(app).get('/getParam').query({first_name:'Marlowe',last_name:'kira'})
    expect(response.text).toBe('hello Marlowe kira')
})

test("Test Get Query Header",async ()=>{
    const response= await request(app).get('/getQueryHeader').set('Accept','text/html')
    expect(response.text).toBe('header: text/html')
})

describe("Test Response Status",()=>{
    test("Status 200", async ()=>{
        const response = await request(app).get('/status').query({name:'kira'})
        expect(response.status).toBe(200)
    })

    test("Status 404", async ()=>{
        const response = await request(app).get('/status')
        expect(response.status).toBe(404)
    })
})

test("Test Set Response Header",async ()=>{
    const response = await request(app).get('/setResponseHeader')
    expect(response.get('X-Powered-By')).toEqual('New SE')
    expect(response.get('X-Author')).toEqual('Kira')
})

test("Test Response Body",async ()=>{
    const response = await request(app).get('/responseBody')

    // expect(response.get('Content-type')).toContain('application/json')
    expect(response.get('Content-type')).toContain('text/html')
    expect(response.text).toBe('Kira')
})