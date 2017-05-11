

<head>
<meta name="robots" content="noindex" /> 
<script src="//cdn.rawgit.com/Ceicih/bm/9423499b/jw.js" type="text/javascript"></script>

 </head>
<style>*{margin:0;padding:0}</style>
<body style="overflow: hidden"> 
<style>
.responsive img {
    max-width:100%;
    /*width:100%;*/
    height: auto;
}
.play-wrapper[data-poster] svg{background-color: #F40A36;	border-radius: 6px;	padding: 4px;}
.play-wrapper[data-poster] svg path {border: 1px solid #7D85F4;fill:#FFF !important}
#ch{font-size:12px;line-height:20px;position:absolute;top:0;left:0;background-color:#;border:0px solid #DFDFDF;border-radius:1px;padding:1px 2px 2px;color:#6E6E6E;z-index:999;}
#ch:hover{cursor:pointer;border:1px solid #999999;}
#btn{color:#fff;background: #3498db;background-image: -webkit-linear-gradient(top, #3498db, #2980b9);background-image: -moz-linear-gradient(top, #3498db, #2980b9);background-image: -ms-linear-gradient(top, #3498db, #2980b9);background-image: -o-linear-gradient(top, #3498db, #2980b9);background-image: linear-gradient(to bottom, #3498db, #2980b9);-webkit-border-radius: 2;-moz-border-radius: 4;border-radius: 2px;font-family: Arial;color: #ffffff;font-size: 10px;padding: 2px;text-decoration: none;}
#btn a{color:#fff}
#btn:hover {background: #3cb0fd;background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);background-image: -o-linear-gradient(top, #3cb0fd, #3498db);background-image: linear-gradient(to bottom, #3cb0fd, #3498db);text-decoration: none;}
.clear{clear:both;}
 </style>
 <span id="ch">
  <a id='btn' style="cursor: pointer;" onclick="href='/f/sctv.php'">CH1</a> 
<a id='btn' style="cursor: pointer;" onclick="href='/f/sctv1.php'">CH2</a> 
<a id='btn' style="cursor: pointer;" onclick="href='/f/sctv2.php'">CH3</a> 
<a id='btn' style="cursor: pointer;" onclick="href='/tv/bola1.php'">CH BOLA</a>
</span>  

<div id="algitv"></div>
<script>
var playerInstance = jwplayer("algitv");
playerInstance.setup({
        file: "//smartvradar.com/hls/sctv.m3u8",
        //file: "//t5-id-1.nim.mivo.tv/antvgbzz08k63rfu/sctv2_all/playlist.m3u8?nimblesessionid=41147005&wmsAuthSign=c2VydmVyX3RpbWU9NC83LzIwMTcgMToxNDo1OCBQTSZoYXNoX3ZhbHVlPVBudlk0Vk40cXlWT3UvT1RXVUplSVE9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0yNDMwMzE1fDIwMi4xMjkuMjE3LjQ=",
        image: '',
        skin: {
          name: "thin",
    },
        width: '100%',
        height: '100%',
        stretching: "exactfit",
        autostart: true,
        androidhls: true,
        primary: 'html5',
        advertising: {
        client: "vast",
        admessage: 'Your TV will resume in XX seconds.',
        tag: ""
  }
    });
    
</script>
</BODY>


