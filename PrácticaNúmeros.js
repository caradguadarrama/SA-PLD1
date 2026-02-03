// solicita un dato al usuario y lo transforma de string a tipo numérico number
let n1 = Number("3"); 
let n2 = Number("6");
let n3 = Number("9");

// un array para manipularlas juntas
let numeros = [n1, n2, n3];

// para comparar los valores entre si
if (n1 === n2 && n2 === n3) {
    console.log("Los números son iguales");
} else {

// El algoritmo resta (b - a) o (a - b)
    let mayorAMenor = [...numeros].sort((a, b) => b - a);
    let menorAMayor = [...numeros].sort((a, b) => a - b);


    console.log("Mayor a menor: " + mayorAMenor.join(", ")); 
    console.log("Menor a mayor: " + menorAMayor.join(", ")); 

    console.log("El mayor es: " + mayorAMenor[0]);
    console.log("El del centro es: " + mayorAMenor[1]); 
    console.log("El menor es: " + mayorAMenor[2]); 
}
