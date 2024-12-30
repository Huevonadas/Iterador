let Arreglo = [65,90,32,32,32];

function deArrayAString(Array) {
    let Cadena= "";
    for (Arr in Array){
        Cadena = Cadena + String.fromCharCode(Array[Arr])
    };
    return Cadena;
}

function Iterador(Array, indice){         
    if (Array[indice] < 126) {
        Array[indice]= Array[indice]+1;                    
    } else if (Array[indice] == 126 && indice > 0) {
        Array[indice] = 32;        
        Iterador(Array, indice - 1);        
    } else if (Array[indice] == 126 && indice == 0) {
        Array.push(32);
        for (Arr in Array) {
            Array[Arr] = 32;
        } 
    }
    return Array;    
}

function dec(){
    let ini = new Date;
    decodificador:
    do {
        let pass = deArrayAString(Arreglo);
        if (pass == "Angel") {
           break decodificador;               
        } else {            
            Arreglo = Iterador(Arreglo, (Arreglo.length - 1)); 
        }
    } while (1 == 1);
    let fin = new Date;
    let contador = fin - ini;
    document.write((parseInt(contador) / 1000)+ " Segundos");
}

