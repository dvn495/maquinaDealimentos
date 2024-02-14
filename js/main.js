// Máquina de alimentos
// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.

// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.

// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.

const A = 270
const B = 340
const C = 390

let vuelto = 0

let producto = Number(prompt("---Productos---\n  1. Producto A = $270 \n  2. Producto B = $340\n  3. Producto C = $390"))

switch (producto) {
    case 1:
        let monedas = 0;
        let activador = 0;
        let Isactivesecond = " ";
        while (activador = 0){
            let valormonedas = Number(prompt(" Ingrese una moneda (solo de $100-$50-$10)"))
            if (valormonedas === 100 || valormonedas === 50 ||valormonedas === 10 ) {
                monedas += valormonedas
            }else{
                alert("solo de $100-$50-$10")
            }
            Isactivesecond = String(prompt("¿Desea ingresar otra moneda? S(si)//N(no)"));
            if (Isactivesecond = "n" && monedas < A){
               activador = 1;
            }else{
                alert(`Hacen falta ${A - monedas} monedas para comprar el producto`)
            }
            console.log(monedas)
        }
        
        let vuelto = monedas - A;

        while (vuelto > 0) {
            confirm(`Sus vueltos son de ${vuelto}`)
            if (vuelto < 100){

                console.log(vuelto)
            }
            

        }
        break;
    case 2:
        vuelto = vuelto + 50
        break;
    case 3:
        vuelto = vuelto + 100
        break;
    default:
        alert("No existe el producto")
}

