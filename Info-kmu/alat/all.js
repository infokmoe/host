function(e,t){var n="getSelection",o="removeAllRanges",a="addRange",r="parentNode",i="appendChild",d="test";if(e[n]){var c,l,f,s,g,m;t.addEventListener("copy",function(u){for(l=u.target;3===l.nodeType;)l=l[r];if(s=t.createElement("div"),(c=e[n]())&&c.rangeCount&&(c=c.getRangeAt(0))&&(f=c.cloneRange(),c=c.cloneContents())){for(;g=c.firstChild;)s[i](g);if(!/^(pre|code)$/i[d](l.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[d](l.className||"")){var p=e.location.href;s.innerHTML+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+p+'">'+p+"</a><br>Author: yOu wAhyou twitter: @Infok.moe facebook: @infokmu_com"}m=t.createRange(),t.body[i](s),m.selectNodeContents(s),(c=e[n]())[o](),c[a](m),setTimeout(function(){s[r].removeChild(s),c[o](),c[a](f)})}},!1)}}(window,document),document.getElementById("translate-me").onclick=function(){return window.open("http://translate.google.com/translate?u="+encodeURIComponent(location.href)+"&langpair=id%7C"+document.getElementById("translate-language").value+"&hl=en"),!1};(function($){var $form=$("#search-form"),$input=$form.find(":text");$form.append('<div id="search-result"></div>');var $result_container=$("#hasil");$form.on("submit",function(){var keyword=$input.val();$result_container.show().html("Loading...");$.ajax({url:"//www.infokmoe.id/feeds/posts/summary?alt=json-in-script&q="+keyword+"&max-results=9999",type:"get",dataType:"jsonp",success:function(json){var entry=json.feed.entry,link,summary,thumbnail,skeleton="";if(entry!==undefined){skeleton='<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a>';skeleton+="<h4>hasil pencarian untuk kata kunci &#8220;"+keyword+"&#8221;</h4><ol>";for(var i=0;i<entry.length;i++){if(i==entry.length){}var mark=new RegExp(keyword,"ig"),entries=entry[i],title=entries.title.$t.replace(mark,"<mark class='highlight'>"+keyword+"</mark>");for(var j=0;j<entries.link.length;j++){if(entries.link[j].rel=="alternate"){link=entries.link[j].href}}if("media$thumbnail" in entries){thumbnail=("media$thumbnail" in entries)?'<img alt="" src="'+entries.media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s40-c")+'" width="40" height="40">':""}else{thumbnail='<img alt="" src="https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png" width="40" height="40">'}summary=("summary" in entries)?entries.summary.$t.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"";summary=summary.length>100?summary.substring(0,100)+"&hellip;":summary;summary=summary.replace(mark,"<mark class='highlight'>"+keyword+"</mark>");skeleton+="<li>"+thumbnail+'<a href="'+link+'">'+title+"</a><br><span class='cm-text lates-footer'>"+summary+"</span></li>"}skeleton+="</ol>";$result_container.html(skeleton)}else{$result_container.html('<a href="javascript:;" rel="nofollow" class="close pull-right no-print"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>No result!</strong>')}},error:function(){$result_container.html('<a class="close pull-right no-print" rel="nofollow" href="javascript:;"><i aria-hidden="true" class="fa fa-window-close"/></a><strong>Error loading feed.</strong>')}});return false});$form.on("click",".close",function(){$result_container.fadeOut();return false})})(jQuery);$("#hasil").click(function(){$("#hasil, .close").toggle()});$(".close").click(function(){$("#hasil, .close").hide()});$(".img-attachment").attr("src",function(){return $(this).data("src").replace(/\/s[0-9]+(\-c)?/i, "/s400")});function updatedPosts(e){if(document.getElementById("updated-posts")){for(var t,n=e.feed.entry,a="",o=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],i=document.getElementById("updated-posts"),s=0;s<7;s++){for(var l=0;l<7;l++)if("alternate"==n[s].link[l].rel){t=n[s].link[l].href;break}var r=n[s].title.$t,c=n[s].published.$t.substring(0,10).split("-");a+='<li class="late"><div class="item-thumbnail"><img src="'+("media$thumbnail"in n[s]?n[s].media$thumbnail.url:"https://3.bp.blogspot.com/-hTp5KI2WC_w/WeL55AU7egI/AAAAAAAAMzg/cVjFowE2_6QgCeEUg7SY8uvOGDVGzUGbACPcBGAYYCw/s40/infokmoe.id.png").replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+r+'" height="40px" width="40px"/></div>',a+='<div class="item-title"><h4><a href="'+t+'" title="'+r+'" target="_parent">'+r+'</a></h4></div><time class="lates-footer" datetime="'+c.join("-")+'">  '+c[2]+" "+o[parseInt(c[1],10)-1]+" "+c[0]+"</time></li>"}i.innerHTML=a}}function asyncData(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){"function"==typeof t&&t(),t=null},n.onreadystatechange=function(){4!=n.readyState&&"complete"!=n.readyState||("function"==typeof t&&t(),t=null)},document.getElementsByTagName("head")[0].appendChild(n)}function createCookie(e,t,n){if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);o="; expires="+a.toGMTString()}else var o="";document.cookie=e+"="+t+o+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}!function(e){var t=e(window),n=e("nav"),a=n.offset().top;t.on("scroll",function(){a<e(this).scrollTop()?n.addClass("fixed"):n.removeClass("fixed")})}(jQuery),function(){$(document).ready(function(){return $(window).scroll(function(){return $(window).scrollTop()>600?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")}),$("#back-to-top").click(function(){return $("html,body").animate({scrollTop:"0"},1e3,"easeInOutQuad")})})}.call(this);var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")}),$(".toggleMenu").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".nav").toggle()}),adjustMenu()}),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu()});var adjustMenu=function(){ww<768?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("hover")})):ww>=768&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};asyncData("/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts"),setTimeout(function(){$(".jsfiddle-demo").each(function(){$(this).html('<iframe width="100%" height="300px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),setTimeout(function(){$(".facebookpopup").each(function(){$(this).html('<iframe width="100%" height="130px" src="'+$(this).data("src")+'" allowfullscreen></iframe>')})},5e3),$(".open-dialog").click(function(){return $("#kotak-dialog").show().find("#iframeContainer").html('<iframe src="'+this.href+'"></iframe>'),$("#dialog-overlay").fadeTo(400,.8),!1}),$("#kotak-dialog .closed").click(function(){return $("#kotak-dialog").fadeOut("normal",function(){$("iframe",this).remove()}),$("#dialog-overlay").hide(),!1}),function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.async=!0,a.src="//connect.facebook.net/id_ID/sdk.js#xfbml=1&appId=390824627655103&version=v2.0",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk");var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-46796025-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");readCookie("fb_box_once")||$(window).load(function(){return $dialog.show(4e3),$overlay.fadeTo(400,.8),!1}),$dialog.find(".closed").click(function(){return createCookie("fb_box_once",null,1),$dialog.fadeOut("normal",function(){$frame.remove()}),$overlay.hide(),!1});
