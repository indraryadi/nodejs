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