let palavra;

function setup() {
  
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Estudante", "Professor", "Diretor"];
  return random(palavras);
  
}

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function arrumarTexto() {
  
  background(230);
  textSize(64);
  textAlign(CENTER,CENTER)
  
}

function draw() {
  
  arrumarTexto();
  
  let texto = palavraParcial(0, width);
  text(texto,200,200);
  
}