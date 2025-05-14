const express=require("express");
const misfns=require("./misfns.js");
const app=express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Servidor funcionando correctamente :)");
});

app.post("/batch", (req, res)=>{
    try{
        const datos=req.body;
        const resultado=datos.map((e)=>{
            const fn=misfns[e.tipo];
            if (!fn) throw new Error("Operacion no soportada");
            return {...e, resultado: fn(e.a, e.b)};
        });
        res.status(201).json(resultado);
    }catch(e){
        res.status(500).json({mensaje: e.message});
    }
});

app.listen(5000, ()=>{
    console.log("App funcionando...")
});