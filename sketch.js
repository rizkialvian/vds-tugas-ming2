let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0

}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(2)
  line(200,0,200,200);

  //Gambar Kiri
  //Badan
  strokeWeight(2)
  rect(50,50,100,100);
  //Mata
  ellipse(75,75,25,25);
  ellipse(125,75,25,25);
  //Hidung
  strokeWeight(10)
  point(100,100);
  //Mulut
  strokeWeight(4)
  line(75,125,125,125)

  //Gambar Kanan
  //Badan
  var s = 100 + 5*Math.sin(PI*j/20)
  j+=1
  strokeWeight(2)
  rect(250,50,s,s);
  //Mata
  var r = 25 + 5*Math.sin(PI*j/20)
  ellipse(275,75,r,r);
  ellipse(325,75,r,r);
  //Hidung
  strokeWeight(10)
  point(300,s);
  //Mulut
  strokeWeight(3)
  var s = 10 + 5*Math.sin(PI*j/20)
  rect(275,125,50,s);

  //Warna
  fill(240,192,35)
}