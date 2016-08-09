//Change font size
function addClass(ele,cls) {
  if($(ele).length > 0) {
    $(ele).addClass(cls);
  }
}

function removeClass(ele,cls) {
  if($(ele).length > 0) {
    $(ele).removeClass(cls);
  }
}

function changeFont(f){
  var classname;
  var fonts = f;
  
  switch(f){
    case -1: 
      classname = "fontSizeSmall";
      break;
    case 0: 
      classname = "fontSizeNormal";
      $('.list-big-photo li').css('min-height','280px');
      break;
    case 1: 
      classname = "fontSizeLarge";
      $('.list-big-photo li').css('min-height','280px');
      break;
  }

  removeClass("#main", "fontSizeLarge");
  removeClass("#main", "fontSizeNormal");
  removeClass("#main", "fontSizeSmall");
  addClass("#main", ""+classname);

  createCookie("fontsize",fonts,5);
}

function createCookie(name,value,days){
  if (days){
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";

  if(value == null){
    value = 1;
  }else if (value > 1)
  {
    value = 1;
  }else if (value < -1)
  {
    value = -1;
  }

  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name){
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }

  return null;
}