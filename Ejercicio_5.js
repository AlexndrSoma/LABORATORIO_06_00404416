function contar_tipo(arreglo, tipo) {
a=[];
b=[];
c=[];
d=[];
e=[];
    for (i = 0; i < arreglo.length; i++) {
        switch (typeof(arreglo[i])) {
            case "string":
            a.push(arreglo[i]);
                break;
            case "number": b.push(arreglo[i]);
                break;
            case "boolean": c.push(arreglo[i]);
                break;
            case "null": d.push(arreglo[i]);
                break;
            case "undefined": e.push(arreglo[i]);
                break;
        };
    };
    switch (tipo) {
        case "string":
        console.log('El arreglo contiene :'+a+' '+tipo)
            break;
        case "number":  console.log('El arreglo contiene :'+b+' '+tipo)
            break;
        case "boolean":  console.log('El arreglo contiene :'+c+' '+tipo)
            break;
        case "null":  console.log('El arreglo contiene :'+d+' '+tipo)
            break;
        case "undefined":  console.log('El arreglo contiene :'+e+' '+tipo)
            break;
    };
};