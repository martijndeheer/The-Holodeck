// Experiment 02 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp2_Specs = {
  id : "Experiment 02",
  name : "Navigational 3D space",
  library : {
    link : "P5js",
    representation : "P5js"
  },
  description: "Navigating through 3D space with mouse and keys.",
  repository: {
    link : "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_02/Exp2.js",
    representation: "See Experiment 02's code"
  }
};

var exp2 = function(p) {

  var cols, rows;
  var scl = 50;
  var w = elementWidth*1.5;
  var h = elementHeight*1.5;

  var flying = 0;

  var terrain = [];

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight, p.WEBGL);

    cols = w / scl;
    rows = h/ scl;

    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
      for (var y = 0; y < rows; y++) {
        terrain[x][y] = 0;
      }
    }

  };

  p.draw = function() {
    if (keyIsPressed === true) {
      flying -= 0.05;
    }
    
    var yoff = flying;

    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -200, 200);
        xoff += 0.2;
      }
      yoff += 0.2;
    }

    p.background(0);
    p.translate(0, 50);

    p.rotateX(-Math.PI/3);
    p.ambientLight(255, 255, 255);
    p.fill(200,200,200, 64);
    p.translate(-w/2, -h/2);

    for (var y = 0; y < rows-1; y++) {
      for (var x = 0; x < cols; x++) {
        p.push();
        p.translate(0, 0, terrain[x][y]);
        p.ellipse(x*scl-10, y*scl-10, 10, 10);
        p.pop();
      }
    }
  };

};











