let edad=3;

if(edad>=18){
    console.log("ya es mayor de edad");
    if(edad>=40 & edad <=60){
        console.log("podria ser tu jefe");
    }
     if (edad>60 & edad<=90){
        console.log("podria ser tu abuelo");

    }
    else if(edad>90){
        console.log("ya es una momia");
    }
}

else{
    console.log("esta morro");
    if(edad<18 & edad >=15){
        console.log("esta en la prepa");
    }
    if(edad>=12 && edad<15){
        console.log("esta en la secundaria");
    }
    if(edad>=6 && edad<12){
        console.log("esta en la primaria");
    }
    if(edad>=3 && edad<6){
        console.log("esta en el kinder");

    }
    else 
    console.log ("es un bebito");

}


