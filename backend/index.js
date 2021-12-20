import express from 'express';
import request from 'request';
import cors from 'cors'
import { config } from 'dotenv';

config()
const port = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())

/**
 * End point to get  video details from YTStream api
 * @param id = youtube video id
 * read this 
 * https://gist.github.com/sidneys/7095afe4da4ae58694d128b1034e01e2
 * for detailed response codes 
 * */ 
app.post('/video/:id', (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
        qs: {id: req.params.id, geo: 'IN'},
        headers: {
          'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com',
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
          useQueryString: true
        }
      };
      try{
        return request(options).pipe(res);
    }catch (e){
        return res.status(404).send('Bad request')
    }
})

/**
 * End point to get  video binaries in video/mp4 format
 * @param url = video url from YTStream api 
 * */ 
app.post('/download',(req,res)=> {
    const reqUrl = req.body.url
    console.log(req.body)
    try{
        const checkUrl = new URL(reqUrl)
        if (checkUrl.host !== "redirector.googlevideo.com"){
            console.log(checkUrl.host) 
            throw new Error("Invalid url")
            }
        return request(reqUrl).pipe(res)
    }
    catch(e) {
        console.log(e)
        return res.status(404).send("Not found")
    }    
})

app.get('/*', (req,res)=> {
    res.send("Successfully created")
})

app.listen(port, ()=>{
    console.log(`programm started at port-${port}`)
})