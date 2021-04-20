import express, { response } from "express";//importamos a dependencia do express

const app = express();
app.get("/", (request, response)=>{
    return response.json({
        message:"Olá NLW 05",
        day:"20/04/2021",
    });
});

app.post("/", (request, response)=>{
    return response.json({
        message:"Usuário salvo com sucesso!"
    });
})

app.listen(3333, ()=> console.log("The server is running on port 3333"));

