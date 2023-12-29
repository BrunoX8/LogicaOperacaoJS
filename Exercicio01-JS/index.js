let firstNumber;
let secondNumber;
let sum;
let result;
let isPair;
let isEqual;

firstNumber = Number(prompt("Digite o primeiro número: "));
secondNumber = Number(prompt ("Digite o segundo número "));
sum = (firstNumber + secondNumber);

result = alert(`A soma dos dois números é: ${sum}`);
result = alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`);
result = alert(`A multiplicação dos dois números é: ${firstNumber * secondNumber}`);
result = alert(`A divisão dos dois números é: ${((firstNumber / secondNumber).toFixed(2))}`);
result = alert(`O resto da divisão dos dois números é: ${firstNumber % secondNumber}`);

if(sum % 2 == 0)
{
    alert(`A soma dos resultados é par.`)
    isPair = true;
}
else
{
    alert(`A soma dos resultados é ímpar.`)
    isPair = false;
}

if(firstNumber == secondNumber)
{
    alert(`Os dois números digitados são iguais`);
    isEqual = true;
}
else {
    alert(`Os dois números digitados são diferentes`);
    isEqual = false;
}