import express from "express"
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const PORT = process.env.PORT | 8000

const API_KEY = `${process.env.API_KEY}`

app.use(express.json())
app.use(cors())

app.post('/testing', (req,res)=>{
    res.send({"name": "Jakaza"})
})


app.post('/completions', async (req,res)=>{


    try {
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: req.body.message}],
                max_tokens: 100,
            })
        }
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)

        const data = await response.json()

        res.send(data)

    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT , ()=> console.log(`Server running on port ${PORT}`))
