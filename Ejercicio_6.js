function murcielago(cadena) {
    a = [];
    for (i = 0; i < cadena.length; i++) {
        switch (cadena.charAt(i)){
            case "m":
                a.push(0);
                break;
            case "u":
                a.push(1);
                break;
                case "r":
                a.push(2);
                break;
                case "c":
                a.push(3);
                break;
                case "i":
                a.push(4);
                break;
                case "e":
                a.push(5);
                break;
                case "l":
                a.push(6);
                break;
                case "a":
                a.push(7);
                break;
                case "g":
                a.push(8);
                break;
                case "o":
                a.push(9);
                break;
                default:
                a.push(cadena.charAt(i));
                break;

        };
    };
    console.log(a.join(''));

};