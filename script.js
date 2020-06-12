function autenticar() {
    let login = document
        .getElementById("login")
        .value
    let senha = document
        .getElementById("senha")
        .value
    let res = document.getElementById("resultado")

    //msg senha e login corretos
    if (login === "joao" && senha === "1234" || login === "caio" && senha === "senha" || login === "bruno" && senha === "senha123") {
        res.innerHTML = "Logado!"
        console.log("logado")
        document.getElementById("login").value = ""
        document.getElementById("senha").value = ""
        return
    }

    //msg login inválido
    if (login !== "joao" && senha === "1234" || login !== "caio" && senha === "senha" || login !== "bruno" && senha === "senha123") {
        res.innerHTML = "[Erro] Login inválido!"
        console.log("login inválido")
        document.getElementById("login").value = ""
        document.getElementById("senha").value = ""
        return
    }

    //msg senha inválida
    if (login === "joao" && senha !== "1234" || login === "caio" && senha !== "senha" || login === "bruno" && senha !== "senha123") {
        res.innerHTML = "[Erro] Senha inválida!"
        console.log("senha inválida")
        document.getElementById("login").value = ""
        document.getElementById("senha").value = ""
        return
    }

    res.innerHTML = "[Erro] Login e senha inválidos!"
    document.getElementById("login").value = ""
    document.getElementById("senha").value = ""

}