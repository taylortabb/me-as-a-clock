
  function startTime() {
    var now = new Date();
    var h = ((now.getHours() + 11) % 12 + 1);
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = addZerostoNumberslessThanten(m);
    s = addZerostoNumberslessThanten(s);

  var string = h + ":" + m + ":" + s;
  var img = numberToimagesOfyou(string);
  document.getElementById('clock').innerHTML = img;

  var t = setTimeout(startTime, 1000);
}

function addZerostoNumberslessThanten(i) {
  if (i < 10) {
    i = "0" + i
  } 
  return i;
}

function numberToimagesOfyou(s) {
  var canvas = ""
  for (var i = 0; i < s.length; i++) {
    canvas = canvas + "<img width='12.5%' src='" + img[s[i]] + "'/>"
  }
  return canvas
}


var img = {
  "1": "img/1.jpg",
  "2": "img/2.jpg",
  "3": "img/3.jpg",
  "4": "img/4.jpg",
  "5": "img/5.jpg",
  "6": "img/6.jpg",
  "7": "img/7.jpg",
  "8": "img/8.jpg",
  "9": "img/9.jpg",
  "0": "img/0.jpg",
  ":": "img/colon.jpg"
}

//code in part derived from https://stackoverflow.com/questions/42964421/digital-clock-with-images
