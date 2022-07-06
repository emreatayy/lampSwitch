var x = true;
function light() {
  var pic;
  
  if(x  == true) {
  	pic = "/src/pict/on.gif";
    x = false;
  }
  else {
  	pic = "/src/pict/off.gif"
    x= true;
  }
  
  document.getElementById('myImage').src = pic;
}