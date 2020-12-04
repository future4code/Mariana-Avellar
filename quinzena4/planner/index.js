function criaTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    const diaDaSemana = document.getElementsById("dias-semana")
    
    if (inputTarefa.value !== "") {
        
        const optionTarefa = diaDaSemana.value;
        const imprimeTarefa = document.getElementsByTagName("div")

        for(let i of imprimeTarefa === optionTarefa) {
            imprimeTarefa.innerHTML += `<li>${inputTarefa.value}</li>`
            inputTarefa.value = ""
        }  
    
    }

    else {
      alert("Digite uma tarefa")  
    }

}