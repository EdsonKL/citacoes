const texto = document.getElementById('texto')
const autor = document.getElementById('autor-texto')

function escolherAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const citacoes = [
  '"Tempo é aquilo que o homem está sempre tentando matar, mas que no fim acaba matando-o."',
  '"Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar."',
  '"Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro"', 
  '"Às vezes construímos sonhos em cima de grandes pessoas. O tempo passa e descobrimos que grandes mesmo eram os sonhos e as pessoas pequenas demais para torná-los reais!"',
  '"Todo mundo é capaz de dominar uma dor, exceto quem a sente."',
  '"A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez."'

]
const autores = [
  "Herbert Spencer",
  "William Shakespeare",
  "Clarice Lispector",
  "Bob Marley",
  "William Shakespeare",
  "Friedrich Nietzsche"
]



window.document.addEventListener('click', () => {

  let numeroAleatorio = escolherAleatorio(1, citacoes.length)

  texto.textContent = citacoes[numeroAleatorio - 1]
  autor.textContent = autores[numeroAleatorio - 1]
})
