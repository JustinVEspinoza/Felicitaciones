
$( document ).ready(function() {
});
var canvas =  document.createElement( 'canvas' ) ,
    context = canvas.getContext( '2d' );
context.globalCompositeOperation = 'lighter';
var w=0;
var h =0;
var count=0;
ViewPort();
canvas.width = w-5;
canvas.height = 800;

function Init(){
     var snd = new Audio("epic.mp3");
      snd.volume=0.90;
  snd.play();
     document.body.innerHTML="";
    document.body.appendChild(canvas);
    draw();
}
function ViewPort()
{
 w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
 h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
var viewsize = w + "," + h;
}
var textStrip = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];

var stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random()*w);
    stripY[i] = -100;
    dY[i] = Math.floor(Math.random()*7)+3;
    stripFontSize[i] = Math.floor(Math.random()*16)+8;
}

var theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];

var elem, context, timer;

function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];
        if (context.fillText) {
            switch (k) {
            case 0:
                context.fillStyle = theColors[0]; break;
            case 1:
                context.fillStyle = theColors[1]; break;
            case 3:
                context.fillStyle = theColors[2]; break;
            case 7:
                context.fillStyle = theColors[3]; break;
            case 13:
                context.fillStyle = theColors[4]; break;
            case 17:
                context.fillStyle = theColors[5]; break;
            }
            context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    // clear the canvas and set the properties
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = '#94f475';
    
    for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j]+'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        
        if (stripY[j] > 1358) {
            stripX[j] = Math.floor(Math.random()*canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random()*7)+3;
            stripFontSize[j] = Math.floor(Math.random()*16)+8;
            drawStrip(stripX[j], stripY[j]);
        } else drawStrip(stripX[j], stripY[j]);
        
        stripY[j] += dY[j];
    }
    if(count==200){
        count++;
        document.body.innerHTML="";
        typed();

         
                  
    }else{
        count++;
          setTimeout(draw, 70);
    }

}

function typed(){

    var link = document.createElement( "link" );
    link.href = "typed.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
    setTimeout(function(){
        remove("typed.css");
        secuence();
    },25000);
}

function remove(link){
    var linkNode = document.querySelector('link[href*="'+link+'"]');
    linkNode.parentNode.removeChild(linkNode);
}

function secuence(){
    var link = document.createElement( "link" );
    link.href = "secuence.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
    addSecuenceHTML();
    addJQueryFunction();
    setTimeout(function(){
         remove("secuence.css");
         conversation();
        
    },40000);
}
function addJQueryFunction(){
    $("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering(); 
}
function addSecuenceHTML(){
    document.body.innerHTML='<div class="container"> '+
     ' <div class="os-phrases" id="os-phrases">'+
       ' <h2>Es el momento</h2>'+
        '<h2>Más esperado</h2>'+
        '<h2>Final Del Año</h2>'+
        '<h2>2021</h2>'+
        '<h2>Preparate</h2>'+
        '<h2>Lo mejor...  </h2>'+
        '<h2>Esta por venir</h2>'+
      '</div>'+
    '</div><!-- /container -->';
}
function planet(){

        var link = document.createElement( "link" );
    link.href = "planet.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
       document.body.innerHTML=''+
               '<div class="title">'+
         '<h1 id="title">Feliz<br/>Nuevo Año</h1>'+
        '</div>'+
        ''+
        '<div class="globo"><div class="frontal"></div><div class="mapfront"></div><div class="mapback"></div><div class="back"></div></div>';
    let html="<div id='ieCov' style='position:absolute;top:0px;left:0px'><div style='position:relative'>";
    for (i=0; i < amount; i++){
        html+="<div id='iestars"+i+"' style='position:absolute;top:0px;left:0px;width:1px;height:1px;background:#ffffff;font-size:1px;z-index:10'></div>";
        
    }
    html+="</div></div>";
    document.body.innerHTML+=html;
    setInterval(function(){
        $("#title").html("Gracias<br/> Por Todo");
    },5000);
    setInterval(function(){
        $("#title").html("Te quiero<br/> Yetsabeth");
    },10000)
}
function conversation(){
     document.body.innerHTML='<div id="container">'+
              '<div id="message">'+
                ''+
              '</div>'+
            '</div>';
        var link = document.createElement( "link" );
    link.href = "effect.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
      initialise();
        
}
var ns=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0

amount=14;
//Clrs=new Array('ff0000','00ff00','ffffff','ff00ff','ffa500','ffff00','00ff00','ffffff','ff00ff')
sClrs=new Array('ffa500','00ff00','FFAAFF','fff000','fffffF')
Clrs=Clrs=new Array('439E19','F5FC0C','FC340C','0C58FC','8F0CFC','FF9B00','00FF51','00FFFF','E6E6E6');
Xpos=300;
Ypos=150;
initialStarColor='00ff00';
step=5;
currStep=0;
explosionSize=120;
var evaluateFirewors=true;
let countFireworks=0;
function Fireworks(){
   
    //console.log("Firewors");
var WinHeight=(ns||ns6)?window.innerHeight-200:window.document.body.clientHeight-200;
var WinWidth=(ns||ns6)?window.innerWidth-200:window.document.body.clientWidth-200;
var Yscroll=(ns||ns6)?window.pageYOffset:document.body.scrollTop;
for (i=0; i < amount; i++){
var layer=document.getElementById("iestars"+i);
var randCol=Math.round(Math.random()*8);
var randSz=Math.round(Math.random()*2);
let top= Ypos + explosionSize*Math.sin((currStep+i*5)/3)*Math.sin(currStep/100);
let left =Xpos + explosionSize*Math.cos((currStep+i*5)/3)*Math.sin(currStep/100);
$(layer).css("top",top+"px");
$(layer).css("left",left+"px");
if (currStep < 110){
    $(layer).css("background","#"+initialStarColor);
     $(layer).css("height",5+"px");
      $(layer).css("width",5+"px");
      $(layer).css("fontSize",5+"px");
}else{
    $(layer).css("background","#"+Clrs[randCol]);
      $(layer).css("height",randSz+"px");
      $(layer).css("width",randSz+"px");
      $(layer).css("fontSize",randSz+"px");
}

}
if (currStep > 220) 
{
      var snd = new Audio("firework.mp3");
      snd.volume=0.28;
      snd.play();
    countFireworks++;
 currStep=0;
 Ypos = 50+Math.round(Math.random()*WinHeight)+Yscroll;
 Xpos = 50+Math.round(Math.random()*WinWidth);
 for (i=0; i < sClrs.length; i++)
  {
  var newIcol=Math.round(Math.random()*i);
  }
initialStarColor=sClrs[newIcol];
explosionSize=Math.round(80*Math.random()+100);
}
currStep+=step;
if(countFireworks>=20){
    document.getElementById("ieCov").innerHTML="";

}else{
   setTimeout("Fireworks()",20); 
}

}


 var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;
let countWords=0;
  MESSAGES = [];

  MESSAGES.push({
    delay: 0,
    text: "Recibiendo Señal..."
  });

  MESSAGES.push({
    delay: 2200,
    text: "Gracias por haberme acompañado este año."
  });
  MESSAGES.push({
    delay: 5000,
    text: "No sabes lo importante que eres para mí."
  });
   MESSAGES.push({
    delay: 7500,
    text: "Te agradezco por ser como eres."
  });
    MESSAGES.push({
    delay: 10000,
    text: "Por ser tan linda y especial."
  });
  MESSAGES.push({
    delay: 12500,
    text: "Espero y te haya gustado."
  });

  MESSAGES.push({
    delay: 15000,
    text: "Te deseo un excelente nuevo año, un 2022 lleno de momentos felices "
  });

  MESSAGES.push({
    delay: 23000,
    text: "Deseo con todo mi corazón que tus planes para este próximo año sean éxitosos"
  });
  MESSAGES.push({
    delay: 29000,
    text: "Dios te bendiga"
  });
  

  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 40,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function() {
      var results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this);
    output = [];
// Build the output array.
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
   
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
   

    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
      
    }
    setTimeout(function(){
        if(evaluateFirewors){
             evaluateFirewors=false;
              planet();
             Fireworks();
         }
    },32000);
     
  };

  initialise = function() {
      $container = $("#container");

      $message = $("#message");

      $animate = $("#animate");
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };
