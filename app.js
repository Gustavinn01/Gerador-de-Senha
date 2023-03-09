let senhaElmento = document.querySelector("div.gerador-senha p");
const btnGerarSenha = document.querySelector("div.gerador-senha button");
const caracteres = ["a", "b" ,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L"
,"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@","#","$","0","1","2","3","4","5","6","7","8","9"];

let senha = "" , intervalo;

const gerarSenha = ()=>{
    for(let i = 1; i <= 12; i++){
        senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    senhaElmento.textContent = senha;

    senha = "";
}

const efeitoGerarSenha = () =>{
    intervalo = setInterval(() =>{
        gerarSenha();
    }, 12);

    setTimeout (()=>{
        clearInterval(intervalo);
        btnGerarSenha.removeAttribute("disabled");
    } ,12 * 50);
}


btnGerarSenha.onclick = () => {
    btnGerarSenha.setAttribute("disabled", "true");
    gerarSenha(); 
}

btnGerarSenha.addEventListener("click", efeitoGerarSenha);

senhaElmento.onclick = () =>{
    navigator.clipboard.writeText(senhaElmento.textContent)

    senhaElmento.classList.add("copiada")

    setTimeout(()=>{
        senhaElmento.classList.remove("copiada")
    },2000)
}
