console.log("App Calculadora")

        function sumar(){
            const forma = document.getElementById("forma")
            let operando_1= forma ["operando_1"]
            let operando_2= forma ["operando_2"]
            let resultado = parseInt(operando_1.value) + parseInt(operando_2.value)

            if(isNaN(resultado)){
                resultado = "La operacion no incluye numeros :("
            }
            document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`
            console.log(`Resultado: ${resultado}`)
        }