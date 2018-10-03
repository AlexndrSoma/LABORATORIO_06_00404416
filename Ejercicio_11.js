function objetog(Nombre, Apellido, Fecha, Numero, Correo){
g=[];
    var objeto={
    N: Nombre,
    A: Apellido,
    F: Fecha,
    Nu: Numero,
    C: Correo
        };
    
    
    g=(Object.values(objeto));
    console.log(g);
    };