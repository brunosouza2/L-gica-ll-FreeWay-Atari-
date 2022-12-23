//Variáveis do Ator
let xAtor = 115;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30,30)
 
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if  (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
        yAtor +=2
        }
 
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for(let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,xAtor,yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
        meusPontos -= 1;
        }
      }
   
  }
}

function colidiu(){
  yAtor = 368
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, 20, 25);
  fill(128, 0, 128)
  
}

function marcaPonto(){
  if (yAtor <= 4){
    meusPontos += 1;
    somDoPonto.play();
    colidiu();
    
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 368
}