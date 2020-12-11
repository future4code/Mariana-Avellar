let arrayObjetos = []

function enviarFormulario() {

    const inputTitulo = document.getElementById("titulo-post").value
    const inputAutor = document.getElementById("autor-post").value
    const inputConteudo = document.getElementById("conteudo-post").value
    
    const blog = {
        titulo: inputTitulo,
        autor: inputAutor,
        conteudo: inputConteudo
    }
    
    arrayObjetos.push(blog)

    inputTitulo.innerHTML = ""
    inputAutor.innerHTML = ""
    inputConteudo.innerHTML = ""   
}

function adicionarConteudo() {
    let postContainer = document.getElementById("container-de-posts")
    postContainer.innerHTML += `<div>${arrayObjetos}<div>`
}




