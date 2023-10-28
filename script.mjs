function doSum(event){
    event.preventDefault();

    console.log("the function is running")

    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;
    let result = Number (firstNumber) + Number (secondNumber);

    let resultMessage = `the sum of ${firstNumber} and  ${secondNumber}= ${result}`;

    console.log(firstNumber)
    console.log(secondNumber)
    console.log(result)

    document.querySelector("#resultWindow").innerHTML=resultMessage
}