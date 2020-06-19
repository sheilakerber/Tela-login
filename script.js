function autenticar() {
    let login = document
        .getElementById("login")
        .value
    let senha = document
        .getElementById("senha")
        .value
    let res = document.getElementById("resultado")

    let logins = ["joao", "caio", "bruno"]
    let senhas = ["1234", "senha", "senha123"]

    //msg senha e login corretos
    for (i = 0; i < logins.length; i++) {
        if (login == logins[i] && senha == senhas[i]) {
            res.innerHTML = "Logado!"
            console.log("logado")
            document.getElementById("login").value = ""
            document.getElementById("senha").value = ""
            return
        }
    }

    //msg login inválido
    if (!logins.includes(login)) {
        res.innerHTML = "[Erro] Login inválido!"
        console.log("login inválido")
        document.getElementById("login").value = ""
        document.getElementById("senha").value = ""
        return
    }

    //msg senha inválida
    if (!senhas.includes(senha)) {
        res.innerHTML = "[Erro] Senha inválida!"
        console.log("senha inválida")
        document.getElementById("login").value = ""
        document.getElementById("senha").value = ""
        return
    }

    //msg senha e login inválidos
    res.innerHTML = "[Erro] Login e senha inválidos!"
    document.getElementById("login").value = ""
    document.getElementById("senha").value = ""

}