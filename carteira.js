const prompt = require("prompt-sync")()

const idade = parseFloat (prompt("qual sua idade? "))

const cnh = prompt("possui cnh? ")


if(idade >= 18 && cnh == "sim" )
{
    console.log("pode dirigir!")
}
else if (idade <= 18 || cnh == "nao")
{
    console.log("não pode dirigir!")
}
else
{
    console.log("digite novamente.")
}