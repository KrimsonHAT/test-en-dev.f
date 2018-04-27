let cinta_blanca =[
    {
        "nombre":"omar",
        "edad":24
    },
    {
        "nombre":"francisco",
        "edad":24
    },
    {
        "nombre":"carlos",
        "edad":24
    }
]
let sujeto={
    "nombre":"israel",
    "edad":25
}

//console.log(cinta_blanca);
cinta_blanca.push(sujeto);
console.log(sujeto);
for(i=0;i<cinta_blanca.length;i++)
console.log("este wey se llama" + cinta_blanca[i].nombre + "y tiene"
+ cinta_blanca[i].edad + "años");
//concole.log(cinta_blanca)