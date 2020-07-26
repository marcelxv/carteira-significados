


function preencheFicha() {
var nome = prompt('Seu nome');
var idade = prompt('Sua idade');
var signo = prompt('Seu signo');
var linguagem = prompt('Sua linguagem');


document.querySelector('#nome').innerHTML = 
`${nome}`
document.querySelector('#idade').innerHTML = 
`${idade}`
document.querySelector('#signo').innerHTML = 
`${signo}`
document.querySelector('#linguagem').innerHTML = 
`${linguagem}` 

}
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (e) {
    e.preventDefault()
    tabTrigger.show()
  })
})

