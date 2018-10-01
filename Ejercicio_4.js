function sumas(arreglo){
    l=arreglo.length;
    for(i=0;i<(l/2);i++){
        if(arreglo.length>2){
            b=arreglo.shift();
        a=arreglo.pop();
        c=a+b;
        console.log(c);
        }

        else if(arreglo.length==2){
            b=arreglo[0];
            a=arreglo[1];
            c=a+b;
            console.log(c);
        }

        else if(arreglo.length==1){
            b=arreglo[0];
            console.log(b);
        }
       
    }
    };
