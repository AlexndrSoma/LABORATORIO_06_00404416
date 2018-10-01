function prosum(arreglo){
    a=0
    for(i=0;i<arreglo.length;i++){
        a+=arreglo[i];
    };
    console.log('La suma es: '+a+', y el promedio: '+a/arreglo.length)
};