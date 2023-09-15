//atribui o  valor da tag h1 para a variável título
let titulo = document. querySelector("h1"). textContent;
//mostra no console do navegador a variável título
console.log(titulo);
//modificar p valor o titulo para a frase "fica grandão"
titulo.textContent = "fica gradão birllll";

//---------aqui vamo mexer na tebal e imc----
//armazeno no array paciente as informações de todos paciente//
let pacientes = document.querySelectorAll(".paciente")
//console.log(paciente);
//loop for para percorrer a array
for(let i = 0; i < pacientes.length ; i++){
    let paciente = pacientes[i];
    console.log(paciente);//armazena somente as colunas de peso e altura//
    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    //armazena somente as informações de testo de peso e altura//
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;
    
    //acessa a coluna imc e altera o valor do resultado//
    let tdImc = paciente.querySelector(".info-imc");
    
    //validação dos dados//
    let pesoEhValido = true;
    let alturaEhValida = true;
    
    if(peso < 0 || peso > 1000){
        console.log("Peso Inválido!");
        tdImc.textContent = "Peso Inválido!"
        pesoEhValido = false;
    }
    
    if(altura < 0 || altura > 3){
        console.log("Altura Inválida!");
        tdImc.textContent = "Altura Inválida!"
        alturaEhValida = false;
    }
    
    if(pesoEhValido === true && alturaEhValida === true){
        //realiza o calculo do imc
        let imc = peso/ (altura * altura);
        console.log(imc);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Peso e/ou Altura Inválidos!";
    }
    
}


