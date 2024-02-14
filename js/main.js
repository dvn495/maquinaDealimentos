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
        let monedasA = 0;
        let activadorA = true;
        let IsactivesecondA = true;
        while (activadorA === true ){
            let valormonedasA = Number(prompt(" Ingrese una moneda (solo de $100-$50-$10)"))
            if (valormonedasA === 100 || valormonedasA === 50 ||valormonedasA === 10 ) {
                monedasA += valormonedasA
            }else{
                alert("solo de $100-$50-$10")
            }
            IsactivesecondA = confirm("¿Desea ingresar otra moneda?");
            if (IsactivesecondA === false ){
                if (monedasA < A){
                    alert(`Hacen falta ${A - monedasA} monedas para comprar el producto`)
                }else{
                    activadorA = false;
                }
            }
            console.log(monedasA)
        }
        let vueltoA = monedasA - A;
        while (vueltoA > 0) {
            confirm(`Sus vueltos son de ${vueltoA}`)
            if (vueltoA > 100){
                vueltoA -= 100
                console.log(`Moneda de vuelto : $100\nHacen falta ${vueltoA}`)
            }else if (vueltoA > 50 && vueltoA < 100){
                vueltoA -= 50
                console.log(`Moneda de vuelto : $50\nHacen falta ${vueltoA}`)
            }else if(vueltoA >=10 && vueltoA <50){
                vueltoA -= 10
                console.log(`Moneda de vuelto : $10\nHacen falta ${vueltoA}`)
            }
        }
        alert(`Gracias por su compra`)
        break;
    case 2:
        let monedasB = 0;
        let activadorB = true;
        let IsactivesecondB = true;
        while (activadorB === true ){
            let valormonedasB = Number(prompt(" Ingrese una moneda (solo de $100-$50-$10)"))
            if (valormonedasB === 100 || valormonedasB === 50 ||valormonedasB === 10 ) {
                monedasB += valormonedasB
            }else{
                alert("solo de $100-$50-$10")
            }
            IsactivesecondB = confirm("¿Desea ingresar otra moneda?");
            if (IsactivesecondB === false ){
                if (monedasB < B){
                    alert(`Hacen falta ${B - monedasB} monedas para comprar el producto`)
                }else{
                    activadorB = false;
                }
            }
            console.log(monedasB)
        }
        let vueltoB = monedasB - B;
        while (vueltoB > 0) {
            confirm(`Sus vueltos son de ${vueltoB}`)
            if (vueltoB > 100){
                vueltoB -= 100
                console.log(`Moneda de vuelto : $100\nHacen falta ${vueltoB}`)
            }else if (vueltoB > 50 && vueltoB < 100){
                vueltoB -= 50
                console.log(`Moneda de vuelto : $50\nHacen falta ${vueltoB}`)
            }else if(vueltoB >=10 && vueltoB <50){
                vueltoB -= 10
                console.log(`Moneda de vuelto : $10\nHacen falta ${vueltoB}`)
            }
        }
        alert(`Gracias por su compra`)
        break;
    case 3:
        let monedasC = 0;
        let activadorC = true;
        let IsactivesecondC = true;
        while (activadorC === true ){
            let valormonedasC = Number(prompt(" Ingrese una moneda (solo de $100-$50-$10)"))
            if (valormonedasC === 100 || valormonedasC === 50 ||valormonedasC === 10 ) {
                monedasC += valormonedasC
            }else{
                alert("solo de $100-$50-$10")
            }
            IsactivesecondC = confirm("¿Desea ingresar otra moneda?");
            if (IsactivesecondC === false ){
                if (monedasC < C){
                    alert(`Hacen falta ${C - monedasB} monedas para comprar el producto`)
                }else{
                    activadorC = false;
                }
            }
            console.log(monedasC)
        }
        let vueltoC = monedasC - C;
        while (vueltoC > 0) {
            confirm(`Sus vueltos son de ${vueltoC}`)
            if (vueltoC > 100){
                vueltoC -= 100
                console.log(`Moneda de vuelto : $100\nHacen falta ${vueltoC}`)
            }else if (vueltoC > 50 && vueltoC < 100){
                vueltoC -= 50
                console.log(`Moneda de vuelto : $50\nHacen falta ${vueltoC}`)
            }else if(vueltoC >=10 && vueltoC <50){
                vueltoC -= 10
                console.log(`Moneda de vuelto : $10\nHacen falta ${vueltoC}`)
            }
        }
        alert(`Gracias por su compra`)
        break;  
    default:
        alert("No existe el producto")
}

