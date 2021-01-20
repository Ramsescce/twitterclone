class AddDevoto {
  constructor() {
    this.devoto = document.querySelector("#followers")
  }
  mostraDevoto(dados) {

    let addDevoto = ''

    dados.followers.map((dados) => {
      addDevoto +=
        `
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/5.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${dados.nome}</strong>
                      </span>
                      <span class="username">${dados.usuario}</span>
                    </div>
                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
            `
    })

    this.devoto.innerHTML = addDevoto
  }

}































