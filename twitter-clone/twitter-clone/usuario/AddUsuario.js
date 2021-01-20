class AddUsuario {

    constructor() {
        this.dadosUsuario = document.querySelector(".profile-header")
    }

    mostraUsuario(dados) {
        localStorage.setItem("usuarioLocal", dados[0].nome)
        let userLocalStorage = localStorage.getItem("usuarioLocal")

        let Add = ''

        Add +=
            `        
<h3 class="profile-fullname"><a>${dados[0].nome}<a></h3>
<h2 class="profile-element"><a>${dados[0].usuario}</a></h2>
<a class="profile-element profile-website" hrerf=""><i
    class="octicon octicon-link"></i>&nbsp;${dados[0].usuario}.com</a>
<a class="profile-element profile-website" hrerf=""><i
    class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
<h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${dados[0].cadastro}</h2>
<button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
        `


        this.dadosUsuario.innerHTML = Add
    }
}


