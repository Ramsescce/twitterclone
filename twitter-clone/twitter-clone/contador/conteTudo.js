class conteTudo {
    constructor() {
        this.contador = document.querySelector("#cont")
    }
    MostreContagem(dados) {
        let conte = ''
        conte +=
            `   <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Following</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Followers</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Likes</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
            </a>
        `
        this.contador.innerHTML = conte


    }

}
