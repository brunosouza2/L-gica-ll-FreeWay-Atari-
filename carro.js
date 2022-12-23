//Variáveis Carro
xCarros =  [490, 490, 490, 490, 490, 490];
yCarros = [45, 95, 149, 215, 269, 315];
velocidadeCarros = [2, 2.5, 3, 3.1, 5.2, 2.2];
let comprimentoCarro = 40;
let alturaCarro = 35;

function mostraCarro(){
  for(let i = 0;i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i++){
  if(passouTodaATela(xCarros[i])){
     xCarros[i] = 490
     }
  
}
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}
