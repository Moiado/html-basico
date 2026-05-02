let tarefas = JSON.parse(localStorage.getItem("tarefas"))||[]

function criarItem(texto){
  let item = document.createElement("li")

  let botao = document.createElement("button")
  
  botao.innerText = "X"
  botao.className = "remover"
  
  
  botao.onclick = function(event){
    event.stopPropagation()
    
    item.remove()
    
    tarefas = tarefas.filter(t=> t!== texto)
    
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }
  
  item.onclick = function(){
    
    if(item.style.textDecoration === "line-through"){
    item.style.textDecoration = "none"
  }else{
    item.style.textDecoration = "line-through"
  }}
  
  let textoItem = document.createElement("span")
  textoItem.innerText = texto
  
  item.appendChild(textoItem)
  
  item.appendChild(botao)
  
  document.getElementById("lista").appendChild(item)
}


function adicionar(){
  let texto = document.getElementById("texto").value
  
  if(texto.trim() === ""){
    return
  }
  
  tarefas.push(texto)

  localStorage.setItem("tarefas", JSON.stringify(tarefas))
  
  criarItem(texto)
  
  document.getElementById("texto").value = ""
}

tarefas.forEach(function(tarefa){
  criarItem(tarefa)
})
