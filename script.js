const add_repositorio = () => {
    for (let i = 0; i<repositorios.length; i++){
        document.querySelector("#repositorios").innerHTML += `
        <a href="${repositorios[i].link}" target="_blank" class="repositorio_link">
            <div class="cards" id="repositorio">
                <img src="./assets/folder.svg" class="repositorio_icon">
                <h3 class="repositorio_nome">${repositorios[i].nome}</h3>
                <span class="repositorio_descricao">${repositorios[i].descricao}</span>
                <p class="repositorio_criacao">${repositorios[i].criacao}</p>
                <span class="repositorio_linguagem">${repositorios[i].linguagemPrincipal}</span>
            </div>
        </a>
     `;
    };
};

window.onload = () => {
    add_repositorio();
}