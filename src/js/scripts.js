const button = document.querySelector('#button')
const buttonClicked = document.querySelector('.response__waiting')
const response = document.querySelector('#response')
const containerresponse = document.querySelector('.container__response')

function getResponse() {
  button.style.visibility = 'hidden'
  buttonClicked.style.visibility = 'visible'

  generateReaction();
  generateChoice();
}

// GET QUOTE AND DISPLAY

const phrases = [
  'Tudo acontece na hora que tem que acontecer, da forma que precisa acontecer e com as pessoas que deve acontecer. E é simples assim.',
  'Faça o dinheiro e não deixe com que o dinheiro te faça. Mude o jogo, mas não deixe com que o jogo te mude.',
  'Não tente ser exemplo para ninguém, mas sim busque ser o mestre de si mesmo. Que esta postura sua seja o suficiente para com que as pessoas te levem como exemplo.',
  'Nós não sabemos quem somos até vermos o que somos capazes de fazer. Torne-se quem nunca foi para fazer o que nunca fez.',
  'Que dor você está tentando evitar ao não fazer o que você tem que fazer?',
  'Você quer ser parte do problema ou parte da solução?',
  'Os erros são pontos de referência fundamentais para o nosso aperfeiçoamento. Arrisque, enfrente e lute. Você vence apenas se lutar.',
  'A dor é inevitável, o sofrimento é opcional.',
  'Faça o que não quer para ter o resultado que busca.',
  'Não critique, condene ou reclame. Empatia é um recurso, torne-se uma pessoa inesquecível. Críticas são como pombo correio e eles sempre voltam para casa.',
  'Gere entusiasmo. A melhor forma de desenvolver o melhor que há em alguma pessoa é através da apreciação e dos estímulos. Não há nada que mais mate as ambições de uma pessoa do que as críticas das pessoas. Não critique ninguém, acredite em dar incentivos.',
  'Pessoas são diferentes de animais. Pessoas têm anseio pela importância, representatividade, influência e querem consideração pela dura realidade que viveram. Considere isso como uma dica para a vida.',
  'Todo comportamento exprime uma necessidade não atendida.',
  'Se me contar o que te faz sentir importante, te direi quem és.',
  'O animal humano é adaptado a um certo grau de luta pela vida. Ele precisa gastar energia, correr atrás, conquistar e depois contar a respeito.',
  'Talvez a felicidade esteja no esforço, talvez na recompensa, talvez na sensação de conquista, não no prazer em si. Entenda que a felicidade é um momento, e que ela pode estar no meio dos extremos da necessidade e do excesso.',
  'Faça as pessoas fazerem o que elas já querem fazer. Faça as pessoas fazerem o que você quer que elas façam através do raciocínio da pesca, baseado nos desejos delas.',
  'O segredo está em você enxergar o que as pessoas enxergam e vice-versa.',
  'Pessoas inteligentes não suportam a bajulação. Reconhecimento é encorajador, envolve sentimento verdadeiro, é de coração e profundo. A bajulação é falsa, barata, superficial e são coisas que a pessoa já sabe.',
  'O principal objetivo da comunicação é gerar ação.',
  'Se você quer coletar o mel, então não chute a colmeia.',
  'Frases proibidas: já sei; vou tentar; já faço; a culpa não é minha; e já tentei de tudo.',
  'Atente-se à tudo, pois o ser humano: distorce, omite e generaliza.',
  'Na escuridão existem dois tipos de pessoas, as que reclamam e as que acendem uma vela.',
  'Adote a filosofia da porta: qual é a mentalidade que você busca ter ao entrar em um ambiente? Que pessoa, e com qual energia entrarei por aquela porta?',
  'Seja maior do que as muralhas que eles construíram ou construírão ao seu redor.',
  'Mudar é complicado, mas acomodar é perecer. Mudar é abrir novas janelas para novos ares.',
  'Apenas o tolo perde tempo com o que está atrás dele. Todas escolhas que você faz, faz você.',
  'As pessoas não escolhem seu futuro, elas escolhem seus hábitos e seus hábitos determinam seus futuros.',
  'Um homem só deve olhar o outro de cima para baixo quando for para ajudá-lo a levantar.',
  'Não se pode amar mais a ferramenta de construção do que a casa que foi construída. O dinheiro é facilitador de riquezas.',
  'A nossa vida só tem real valor se o nosso jeito de viver transforma a realidade dos que estão à nossa volta.',
  'Quando você está chegando perto do seu objetivo de vida é quando você tem os seus maiores desafios.',
  'O primeiro passo para o futuro que você deseja pode ser o mesmo que você se recusa a dar agora.',
  'Que mentira você está contando para si mesmo?',
  'Busque ser bom o bastante, sendo 1% melhor todos os dias e faça o seu melhor enquanto ainda não tiver ferramentas para fazer melhor ainda.',
  'Procure ter a mentalidade de um desenvolvedor para automatizar tudo. Procure a mentalidade de um designer para pensar na experiência do cliente. A mentalidade de marketing para saber criar histórias para conectar organizações e pessoas. A mentalidade para organizar dados para tomar decisões, e não deixar que os dados tomem decisões por você.',
  'Ao invés de explicar tecnicamente, conte uma história.',
  'Toda boa fundação é feita de tijolo em tijolo, então não espere compreender de imediato a grandeza do que está sendo construindo.',
  'Não importa onde você começa, mas sim onde termina.',
  'Disciplina é uma campanha. Disciplina, por vezes, é apenas sobre deixar de ser preguiçoso.',
  'Todo trabalho parece fácil quando não é você que está fazendo.',
  'Arriscar algo que é importante para você em troca de algo que não é não faz sentido algum.'
]

function generateChoice() {
  const allPhrases = phrases.length
  const randomChoice = Math.floor(Math.random() * allPhrases)

  setTimeout(function () {
    response.innerHTML = '" ' + phrases[randomChoice] + ' "'
    response.style.visibility = 'visible'
    response.style.transition = '1s'

  }, 1500)  
}

// GET REACTION AND DISPLAY

const urugReactions = [
  'O Monge Urug, apenas pelo seu tom de voz, te diz de olhos fechados:',
  'Monge Urug abre apenas o olho direito, te olha nos olhos por três segundos, e diz:',
  'O Monge Urug te escuta, e com a voz em plena calmaria responde:',
  'O mestre abre os olhos ao te ouvir, esboça um sorriso como se te conhecesse há tempos e fala:',
  'O monge daquele monastério extraordinariamente alto e distante te responde:'
]

function generateReaction() {  
  const allReactions = urugReactions.length
  const randomReaction = Math.floor(Math.random() * allReactions)

  setTimeout(function () {

    button.disabled = true;
    button.style.visibility = 'visible'
    button.style.background = 'transparent'
    button.style.border = 'none'
    button.style.color = 'black'
    button.style.fontWeight = 'bolder'
    button.style.width = '100%'
    button.style.cursor = 'default'
    button.innerHTML = urugReactions[randomReaction]


    buttonClicked.style.visibility = 'hidden'
  
  
  }, 1500)  
}
