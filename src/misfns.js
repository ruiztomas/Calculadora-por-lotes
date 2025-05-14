const misfns={
    suma:(a,b)=>a+b,
    resta:(a,b)=>a-b,
    multiplicacion:(a,b)=>a*b,
    division:(a,b)=>{
        if(b==0)return "Error: division por cero";
        return a/b;
    },
    resto:(a,b)=>a%b,
};

module.exports=misfns;