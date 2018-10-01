function tipo(arreglo){
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    for(i=0;i<arreglo.length;i++){
        switch(typeof(arreglo[i])){
            case "string": a++;
            break;
            case "number": b++;
            break;
            case "boolean": c++;
            break;
            case "null": d++;
            break;
            case "undefined": e++;
            break;
        };
    };
    console.log('El arreglo contiene '+a+' cadenas de texto, '+b+' numeros, '+c+' booleanos, '+d+' nulos y '+e+' indefinidos.');
};