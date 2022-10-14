function maior(){
    var numero1 = parseFloat(document.getElementsByClassName("num1")[0].value);
    var numero2 = parseFloat(document.getElementsByClassName("num2")[0].value);
    
    if (numero1 > numero2)
        alert("digite um número onde A seja menosr que B");
    else
        if(numero2 > numero1)
            alert("isso ai!!");
        else
            alert("Os dois números são iguais, tente digitar dois números diferentes");
        }

        let botao = document.getElementsByClassName("btn")[0];
        console.log(botao)
        botao.addEventListener("click",maior)