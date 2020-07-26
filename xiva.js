// IF ELSE | Método sujo

var status = 'ON';

if (status === 'ON') {
status = 'está on'; 

} else {
    status = 'está off';
}

console.log (status)

// IF ELSE | Método limpo

var retorno = (status === 'ON') ? 'está online' : 'está offline';
console.log (retorno)


// For - indicado para 'quando se sabe o tamanho do intervalo'

for (var i = 0; i <= 100; i++) {
    console.log(i)
}

// While - indicado para 'descobrir o tamanho do intervalo'

var j = 0;
while (j <= 100) {
    console.log(j)
    j++;
}

// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares


function pares(x, y) {
    while (x <= y) {
        console.log(x)
        x++, x++;   }}

   pares(32, 321);

   // Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.
   function temHabilidade(skills) {
if (skills[0] === 'Javascript') {
return true }
else {
    return false
}}  

console.log(temHabilidade)

   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false



/* Escreva 
O Marcel possui as habilidades: Javascript, PHP, CSS
A Andressa possui as habilidades: Gerenciamento de Social Media, Branding, Planejamento Estratégico de Marketing.
*/

   var usuarios = [
    {
    nome: "Marcel",
    habilidades: ["Javascript", " PHP", " CSS"]
    },
    {
    nome: "Andressa",
    habilidades: ["Gerenciamento de Social Media", " Branding", " Planejamento Estratégico de Marketing"]
    }
   ];


var output = `O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidades}, já a ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidades}`;

console.log(output);

count = 0

function contador() {

    console.log('Oi')

                    }

setTimeout (contador, 500)

// DOM

function mostraAlerta() {
    alert('Algo aconteceu!')
}

