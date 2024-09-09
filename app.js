function Pesquisar(){
  console.log(dados);

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if(campoPesquisa == "" ){
    return
  }
   campoPesquisa = campoPesquisa.toLowerCase()

  let resultados ="";
  let titulo ="";
  let descrição ="";

  let section = document.getElementById("resultados-pesquisa")
  
  for(let dado of dados) {
    titulo=dado.titulo.toLowerCase()
    descrição=dado.descrição.toLowerCase()
    if
    (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)
  ){
      resultados += `
      <Div class="item-resultado">
        <h2>
           <a href=""target="_blank">${dado.titulo}</a>
        </h2>
            <p class="descrição-meta">${dado.descrição}</p>
                <a href="${dado.link}"target="_blank">Mais informações</a>
    </Div>
    `;
     }
  
 
  }
    if (!resultados){resultados = "<p>Nada foi encontrado</p>"}
  
  section.innerHTML = resultados 
  
}
