
	var url_popup = 'https://www.facebook.com/B%E1%BA%A5t-%C4%90%E1%BB%99ng-S%E1%BA%A3n-Xanh-171393500028485/?ref=bookmarks';

      //<![CDATA[
	  // var url_ppp = 'https://www.facebook.com/B%E1%BA%A5t-%C4%90%E1%BB%99ng-S%E1%BA%A3n-Xanh-171393500028485/?ref=bookmarks';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
