
var switch1 = 0;
var kontor1 = 0;
var kontorClick = 0;
var tremble;
var layer1 = document.getElementById(1);
var layer2 = document.getElementById(2);
var layer3 = document.getElementById(3);
var layer4 = document.getElementById(4);
var layer5 = document.getElementById(5);
var layer6 = document.getElementById(6);
var layer7 = document.getElementById(7);
var layer8 = document.getElementById(8);
var canvas = document.getElementById(9);
var randomText = shuffle(text);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
var maxWidth = canvas.height/4;
var x = (canvas.width - maxWidth + canvas.height/4) / 2;
var y = canvas.height/5;
var ctx = canvas.getContext('2d');
var lineHeight = canvas.height/30;
ctx.font = canvas.height/30+'pt wltr';
ctx.textAlign="center";
ctx.textBaseline = "middle";
ctx.fillStyle = '#fff';
//firstText();

    layer6.style.visibility = "hidden";
    layer7.style.visibility = "hidden";
    layer8.style.visibility = "hidden";




function engine(){
    layer8.style.visibility = "visible";
    playSound();
    draw();
    clearInterval(tremble);
    tremble = setInterval(function(){ vibrator() }, 10);

}



function draw(){

     ctx.clearRect(0, 0, canvas.width, canvas.height);

      kontorClick++;
      var text = randomText[randomText.length  - kontorClick];

      if(kontorClick>=randomText.length){kontorClick = 0;}


      wrapText(ctx, text, x, y, maxWidth, lineHeight);
}


function vibrator() {
    kontor1++;
    if(switch1 === 0){
        layer5.style.visibility = "hidden";
        layer6.style.visibility = "hidden";
        layer7.style.visibility = "visible";
        switch1++;

    }else if(switch1 === 1){
        layer5.style.visibility = "hidden";
        layer6.style.visibility = "visible";
        layer7.style.visibility = "hidden";
        switch1++;

    }else if(switch1 === 2){
        layer5.style.visibility = "visible";
        layer6.style.visibility = "hidden";
        layer7.style.visibility = "hidden";
        switch1 = 0;
    }

    if(kontor1 > 10){
        clearInterval(tremble);
        layer5.style.visibility = "visible";
        layer6.style.visibility = "hidden";
        layer7.style.visibility = "hidden";

        layer8.style.visibility = "hidden";
        kontor1 = 0;

    }
}


function firstText(){
var initialText  = "Buna! Da-mi un tap pentru putina incredere!";
wrapText(ctx, initialText, x, y, maxWidth, lineHeight);
    // var song = new Audio("assets/Padure.mp3");
    // song.loop = true;
    // song.autoplay = true;
    // document.body.appendChild(song);
}

function playSound() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'assets/Bloop.mp3');
  audioElement.play();
}

  function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

function shuffle(array) {
    var currentIndex = array.length , temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


