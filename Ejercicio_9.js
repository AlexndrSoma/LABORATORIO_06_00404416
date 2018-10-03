function random(n){
r=[];
a=false;
    for(i=0;i<20;i++){
    var x = Math.floor((Math.random() * 100) + 1);
r.push(x);
    };
    for(i=0;i<20;i++){
        if(n==r[i]){
           a==true}
           else{
            a==false;
           };
    };
if(a==true){
    console.log('Has adivinado!');
}
else{
    console.log('Perdió!');
}
    console.log(r);
};