





//>>>>>>>>Usuario<<<<<<<<

const objUsuario = new usuario()
// Instance the card tweet and create a object
const objAdd = new AddUsuario()

objUsuario.buscaUsuario()
  .then((resposta) => {
    resposta.json()

      .then((dados) => {
        objAdd.mostraUsuario(dados)
      })
  })

//>>>>>>>>Seguidores<<<<<<<<

const objDevoto = new Dev()
const objDevo = new AddDevoto()

objDevoto.buscaDevoto()
  .then((resposta) => {
    resposta.json()

      .then((dados) => {
        objDevo.mostraDevoto(dados)
      })
  })

//>>>>>>>>Mensagens<<<<<<<<

const objMensagem = new msg()
const objMsg = new AddMensagem()

objMensagem.buscaMensagem()
  .then((resposta) => {
    resposta.json()

      .then((dados) => {
        objMsg.mostraMensagem(dados)
      })
  })

//>>>>>>Contador de Seguidores<<<<<<<

const contTweet = new Contador()
const contadorTweet = new conteTudo()

contTweet.buscaCont()
  .then((resposta) => {
    resposta.json()

      .then((dados) => {
        contadorTweet.MostreContagem(dados)
      })
  }) 