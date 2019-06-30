var FGimage = null;
var BGimage = null;
var canv1 = null;
var canv2 = null;
var greenBias = 5;

function uploadFG(){
  canv1 = document.getElementById('canv1');
  //canv2 = document.getElementById('canv2');
  var fileinput = document.getElementById('FGimg');
  FGimage = new SimpleImage(fileinput);
  FGimage.drawTo(canv1);
}

function uploadBG(){
  canv2 = document.getElementById('canv2');
  var fileinput = document.getElementById('BGimg');
  BGimage = new SimpleImage(fileinput);
  BGimage.drawTo(canv2);
}

function ChromaKey(){
  if(FGimage == null || BGimage == null){
    alert('Select Foreground and Background Images')
  }
  else{
    for (var pixel of FGimage.values()){
      if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()+greenBias){

          pixel.setGreen(BGimage.getGreen(pixel.getX(), pixel.getY()));
          pixel.setRed(BGimage.getRed(pixel.getX(), pixel.getY()));
          pixel.setBlue(BGimage.getBlue(pixel.getX(), pixel.getY()));
      }
    }
    FGimage.drawTo(canv2);
  }
}

 function clearCanvas(){
    location.reload(foreGet=true);
  }

  function doAdjust(){
    var biasInput = document.getElementById('greenBias');
    greenBias = biasInput.value - 50;
  }
