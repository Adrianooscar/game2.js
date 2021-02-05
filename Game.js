//let btnStart = document.getElementById("botao");
//btnStart.onclick = function(){
//inicio();

//}  
//function comeca() {
  //  document.getElementById("container").innerHTML += `<br> <button  onclick="inicio()"> Start</button>`;
 
//}


function inicio()
{
    //tela 1.2 do jogo. 
    document.getElementById("container").innerHTML = `<br><p class= "textojs">Hank, Sheila, Bobby, Presto, Diana e Eric, depois de entrarem em um estranho brinquedo chamado <i><span style="color: red">CAVERNA DO DRAGÃO</span></i> em um Parque de Diversões. São transportados num portal para um Reino. Lá, com armas e roupas mágicas, eles contam com dicas do Mestre dos Magos para se livrar dos vilões e voltar para suas casas.</p>`;
    document.getElementById("container").innerHTML += `<button class="botao" onclick= "parte1()"> Próximo </button>`
  
    //document.getElementById("container-imagem").innerHTML = ``;
}
  
  
function parte1()
{

  document.getElementById("container").innerHTML = `<p class= "textojs"> Pouco depois de entrar, os seis são jogados para um outro mundo, sem entender nada e já com estranhas roupas.</p>`;
document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "parte2()"> Próximo </button>`;
}

function parte2(){
  document.getElementById("container").innerHTML = `<p class= "textojs"> Hank se torna um ranger, armado com um arco de flechas de energia. Presto, um mago (com chapéu mágico). Eric, um cavaleiro com e um escudo místico; Bobby, um bárbaro com uma clava poderosíssima. Sheyla ganha uma capa de invisibilidade (uma ladra) e Diana recebe uma vara mágica.</p>`;
  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "parte3()"> Próximo </button>`;
    
}

function parte3(){

  document.getElementById("container").innerHTML = `<p class= "textojs"> Uni aparece e vai ao encontro de Bobby, fugindo de um imenso dragão com várias cabeças (Tiamat), que aparece logo em seguida. De repente aparece o Vingador, que luta contra Tiamat e, na batalha, ambos acabam se afastando dali.</p>`;
  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "parte4()"> Próximo </button>`;
}

function parte4(){
  
  document.getElementById("container").innerHTML = `<p class= "textojs">Nesse ambiente hostil você é o MESTRE DOS MAGOS e tem missão de conduzir cada passo a fim de levá-los salvos para fora da caverna.</p>`;
  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "parte5()"> Próximo </button>`;
}

function parte5(){
  document.getElementById("container").innerHTML = `<p class= "textojs">Todos estão famintos. Presto, o mago, resolve fazer uma mágica e fazer sanduiche para todos:</p>`;

  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "deixar()"> Deixar fazer a mágica </button>`;
  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "naoDeixar()"> Não Deixar</button>`;
}
  function deixar(){

    document.getElementById("container").innerHTML = `<p class= "textojs"> Presto faz a mágica, porém erra e aparece uma vaca.</p>`;
    document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "naoDeixar()"> Próximo </button>`;

  }
  function naoDeixar(){

    document.getElementById("container").innerHTML = `<p class= "textojs"> Não havendo alternativa continuaram andando para encontrar alguma pista que os levassem para fora da caverna. Quando avistam um portal, nele se ver a cidade.</p>`;
    document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "aproximar()"> Aproximar para averiguar </button>`;
    document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "manter()"> Manter o Rumo </button>`;
  }
  function aproximar(){

    document.getElementById("container").innerHTML = `<p class= "textojs"> Eles se aproximam do portal, porém descobriram ser uma armadilha do vingador e saíram correndo a tempo.</p>`;

    document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "manter()"> Próximo </button>`;
    
  }
  function manter(){

  document.getElementById("container").innerHTML = `<p class= "textojs"> Avistam uma cachoeira, se aproximam e atrás dela há uma gruta, onde encontram o carro da montanha russa junto de um painel que controla o verdadeiro portal da caverna. Nesse painel há dois botões, um vermelho e outro azul. Qual deseja apertar?</p>`;

  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "vermelho()"> Vermelhor </button>`;
  document.getElementById("container").innerHTML += `<br>  <button class="botao" onclick = "azul()"> Azul </button>`;
  }
  function vermelho(){
    document.getElementById("container").innerHTML =`<p class= "textojs"> Você apertou o botão vermelho, acionou uma bomba e todos morreram. GAME OVER.</p>`;

    document.getElementById("container").innerHTML += `<button class="botao" onclick=  "window.location.reload()">Reiniciar</button>` 
  }
  function azul(){

    document.getElementById("container").innerHTML = `<p class= "textojs"> Você apertou o botão azul, o qual te dar a possibilizada de reprogramar o tempo, a qual abre o portal...</p>`;
    document.getElementById("container").innerHTML += `<button class= "botao" onclick="ganhou()"> Próximo </button>`;
  
  }

  function ganhou(){

    document.getElementById("container").innerHTML = `<p class= "textojs">  PARABÉNS MESTRE DOS MAGOS, TODOS FORAM SALVOS! </p>`;

    document.getElementById("container").innerHTML += `<button class="botao" onclick="window.location.reload()"> Recomeçar </button>`
  }

  //  document.getElementById("saudacao").innerHTML = //`Você precisa escolher como quer ir para Brasilia.<br> De carro, demorando 2 dias e sobrando 400R$ na carteira ou de avião, demorando 4h e sobrando 1,50R$ na carteira?`;
    //document.getElementById("saudacao").innerHTML += //`<button class="botao" onclick="carro()">Ir de carro</button>`;
    //document.getElementById("saudacao").innerHTML += //`<button class="botao" onclick="aviao()">Avião</button>`;
