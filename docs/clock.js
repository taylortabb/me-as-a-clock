
  function startTime() {
    var now = new Date();
    var h = ((now.getHours() + 11) % 12 + 1);
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = addZerostoNumberslessThanten(m);
    s = addZerostoNumberslessThanten(s);

  var string = h + ":" + m + ":" + s;
  var img = numberToimagesOfyou(string, h);
  document.getElementById('clock').innerHTML = img;

  var t = setTimeout(startTime, 1000);
}

function addZerostoNumberslessThanten(i) {
  if (i < 10) {
    i = "0" + i
  } 
  return i;
}

function numberToimagesOfyou(s, h) {
  var canvas = ""
  if (h >= 10) {
    w = '12.5%'
  }
  else {
    w='14%'
  }
  for (var i = 0; i < s.length; i++) {
    canvas = canvas + "<img width=" + w + "' src='" + img[s[i]] + "'/>"
  }
  return canvas
}


var img = {
  "1": "1.jpg",
  "2": "2.jpg",
  "3": "3.jpg",
  "4": "4.jpg",
  "5": "5.jpg",
  "6": "6.jpg",
  "7": "7.jpg",
  "8": "8.jpg",
  "9": "9.jpg",
  "0": "0.jpg",
  ":": "colon.jpg"
}

//code in part derived from https://stackoverflow.com/questions/42964421/digital-clock-with-images
