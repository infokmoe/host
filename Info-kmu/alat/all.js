/*<![CDATA[*/function updatedPosts(e){if(document.getElementById("updated-posts")){for(var t,n=e.feed.entry,a="",o=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],i=document.getElementById("updated-posts"),r=0;7>r;r++){for(var l=0;7>l;l++)if("alternate"==n[r].link[l].rel){t=n[r].link[l].href;break}var s=n[r].title.$t,c=n[r].published.$t.substring(0,10).split("-");a+='<li class="late"><div class="item-thumbnail"><img src="'+("media$thumbnail"in n[r]?n[r].media$thumbnail.url:"https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png").replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+s+'" height="40px" width="40px"/></div>',a+='<div class="item-title"><h4><a href="'+t+'" title="'+s+'" target="_parent">'+s+'</a></h4></div><time class="lates-footer" datetime="'+c.join("-")+'">  '+c[2]+" "+o[parseInt(c[1],10)-1]+" "+c[0]+"</time></li>"}i.innerHTML=a}}function asyncData(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){"function"==typeof t&&t(),t=null},n.onreadystatechange=function(){4!=n.readyState&&"complete"!=n.readyState||("function"==typeof t&&t(),t=null)},document.getElementsByTagName("head")[0].appendChild(n)}function createCookie(e,t,n){if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),o="; expires="+a.toGMTString()}else var o="";document.cookie=e+"="+t+o+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var giftofspeed=document.createElement("link");giftofspeed.rel="stylesheet",giftofspeed.href="https://cdn.rawgit.com/w4hyou/host/ce6f874/Info-kmu/alat/combine.css",giftofspeed.type="text/css";var godefer=document.getElementsByTagName("link")[0];godefer.parentNode.insertBefore(giftofspeed,godefer),function(e,t){var n="getSelection",a="removeAllRanges",o="addRange",i="parentNode",r="appendChild",l="test";if(e[n]){var s,c,d,u,f,h;t.addEventListener("copy",function(m){for(c=m.target;3===c.nodeType;)c=c[i];if(u=t.createElement("div"),(s=e[n]())&&s.rangeCount&&(s=s.getRangeAt(0))&&(d=s.cloneRange(),s=s.cloneContents())){for(;f=s.firstChild;)u[r](f);if(!/^(pre|code)$/i[l](c.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[l](c.className||"")){var g=e.location.href;u.innerHTML+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+g+'">'+g+"</a><br>Author: yOu wAhyou twitter: @Infok.moe facebook: @infokmu_com"}h=t.createRange(),t.body[r](u),h.selectNodeContents(u),(s=e[n]())[a](),s[o](h),setTimeout(function(){u[i].removeChild(u),s[a](),s[o](d)})}},!1)}}(window,document),document.getElementById("translate-me").onclick=function(){return window.open("http://translate.google.com/translate?u="+encodeURIComponent(location.href)+"&langpair=id%7C"+document.getElementById("translate-language").value+"&hl=en"),!1},function(e){var t=e("#search-form"),n=t.find(":text");t.append('<div id="search-result"></div>');var a=e("#hasil");t.on("submit",function(){var t=n.val();return a.show().html("Loading..."),e.ajax({url:"//www.infokmoe.id/feeds/posts/summary?alt=json-in-script&q="+t+"&max-results=9999",type:"get",dataType:"jsonp",success:function(e){var n,o,i,r=e.feed.entry,l="";if(void 0!==r){l='<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a>',l+="<h4>hasil pencarian untuk kata kunci &#8220;"+t+"&#8221;</h4><ol>";for(var s=0;s<r.length;s++){s==r.length;for(var c=new RegExp(t,"ig"),d=r[s],u=d.title.$t.replace(c,"<b class='highlight'>"+t+"</b>"),f=0;f<d.link.length;f++)"alternate"==d.link[f].rel&&(n=d.link[f].href);i="media$thumbnail"in d?"media$thumbnail"in d?'<img alt="'+u+'" src="'+d.media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s40-c")+'" width="40" height="40">':"":'<img alt="'+u+'" src="https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png" width="40" height="40">',o="summary"in d?d.summary.$t.replace(/<br ?\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",o=o.length>100?o.substring(0,100)+"&hellip;":o,o=o.replace(c,"<b class='highlight'>"+t+"</b>"),l+="<li>"+i+'<a href="'+n+'" title="'+u+'">'+u+"</a><br><span class='cm-text lates-footer'>"+o+"</span></li>"}l+="</ol>",a.html(l)}else a.html('<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>No result!</strong>')},error:function(){a.html('<a class="close pull-right no-print" rel="nofollow" href="javascript:;"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>Error loading feed.</strong>')}}),!1}),t.on("click",".close",function(){return a.fadeOut(),!1})}(jQuery),$("#hasil").click(function(){$("#hasil, .close").toggle()}),$(".close").click(function(){$("#hasil, .close").hide()}),$(".img-attachment").attr("src",function(){return $(this).data("src").replace(/\/s[0-9]+(\-c)?/i,"/s400")}),!function(e){var t=e(window),n=e("nav"),a=n.offset().top;t.on("scroll",function(){a<e(this).scrollTop()?n.addClass("fixed"):n.removeClass("fixed")})}(jQuery),function(){$(document).ready(function(){return $(window).scroll(function(){return $(window).scrollTop()>600?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}),$("#back-to-top").click(function(){return $("html,body").animate({scrollTop:"0"},1e3,"easeInOutQuad")})})}.call(this);var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")}),$(".toggleMenu").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".nav").toggle()}),adjustMenu()}),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu()});var adjustMenu=function(){768>ww?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("hover")})):ww>=768&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};asyncData("/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts"),setTimeout(function(){$(".jsfiddle-demo").each(function(){$(this).html('<iframe width="100%" height="300px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),setTimeout(function(){$(".facebookpopup").each(function(){$(this).html('<iframe width="100%" height="130px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),$(".open-dialog").click(function(){return $("#kotak-dialog").show().find("#iframeContainer").html('<iframe src="'+this.href+'"></iframe>'),$("#dialog-overlay").fadeTo(400,.8),!1}),$("#kotak-dialog .closed").click(function(){return $("#kotak-dialog").fadeOut("normal",function(){$("iframe",this).remove()}),$("#dialog-overlay").hide(),!1}),function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.async=!0,a.src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&appId=390824627655103&version=v2.0",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk");var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-46796025-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");readCookie("fb_box_once")||$(window).load(function(){return $dialog.show(4e3),$overlay.fadeTo(400,.8),!1}),$dialog.find(".closed").click(function(){return createCookie("fb_box_once",null,1),$dialog.fadeOut("normal",function(){$frame.remove()}),$overlay.hide(),!1});window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":"http://www.infokmoe.id/p/privacy.html"};(function(){var e=document.createElement("script");e.async=true;e.type="text/javascript";e.src="https://cdn.rawgit.com/w4hyou/host/d62aa6b/cc.js";(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(e)})();!function(){var t=document.getElementsByTagName("a"),e=document.createElement("span");e.id="tooltips",document.body.appendChild(e);for(var i=document.getElementById("tooltips"),n=0;n<t.length;n++)t[n].title&&(t[n].onmouseover=function(t){i.style.display="block",i.innerHTML=this.title,i.style.top=t.pageY+25+"px",i.style.left=t.pageX+"px",this.setAttribute("original",this.title),this.title=""},t[n].onmouseout=function(){i.innerHTML="",i.style.display="none",this.title=this.getAttribute("original"),this.removeAttribute("original")})}();/*]]>*/
