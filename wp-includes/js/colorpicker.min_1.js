/*! This file is auto-generated */
function getAnchorPosition(F){var e=new Object,t=0,i=0,o=!1,n=!1,s=!1;if(document.getElementById?o=!0:document.all?n=!0:document.layers&&(s=!0),o&&document.all)t=AnchorPosition_getPageOffsetLeft(document.all[F]),i=AnchorPosition_getPageOffsetTop(document.all[F]);else if(o)o=document.getElementById(F),t=AnchorPosition_getPageOffsetLeft(o),i=AnchorPosition_getPageOffsetTop(o);else if(n)t=AnchorPosition_getPageOffsetLeft(document.all[F]),i=AnchorPosition_getPageOffsetTop(document.all[F]);else{if(!s)return e.x=0,e.y=0,e;for(var d=0,C=0;C<document.anchors.length;C++)if(document.anchors[C].name==F){d=1;break}if(0==d)return e.x=0,e.y=0,e;t=document.anchors[C].x,i=document.anchors[C].y}return e.x=t,e.y=i,e}function getAnchorWindowPosition(F){var e=getAnchorPosition(F),t=0,F=0;return document.getElementById?F=isNaN(window.screenX)?(t=e.x-document.body.scrollLeft+window.screenLeft,e.y-document.body.scrollTop+window.screenTop):(t=e.x+window.screenX+(window.outerWidth-window.innerWidth)-window.pageXOffset,e.y+window.screenY+(window.outerHeight-24-window.innerHeight)-window.pageYOffset):document.all?(t=e.x-document.body.scrollLeft+window.screenLeft,F=e.y-document.body.scrollTop+window.screenTop):document.layers&&(t=e.x+window.screenX+(window.outerWidth-window.innerWidth)-window.pageXOffset,F=e.y+window.screenY+(window.outerHeight-24-window.innerHeight)-window.pageYOffset),e.x=t,e.y=F,e}function AnchorPosition_getPageOffsetLeft(F){for(var e=F.offsetLeft;null!=(F=F.offsetParent);)e+=F.offsetLeft;return e}function AnchorPosition_getWindowOffsetLeft(F){return AnchorPosition_getPageOffsetLeft(F)-document.body.scrollLeft}function AnchorPosition_getPageOffsetTop(F){for(var e=F.offsetTop;null!=(F=F.offsetParent);)e+=F.offsetTop;return e}function AnchorPosition_getWindowOffsetTop(F){return AnchorPosition_getPageOffsetTop(F)-document.body.scrollTop}function PopupWindow_getXYPosition(F){F=("WINDOW"==this.type?getAnchorWindowPosition:getAnchorPosition)(F);this.x=F.x,this.y=F.y}function PopupWindow_setSize(F,e){this.width=F,this.height=e}function PopupWindow_populate(F){this.contents=F,this.populated=!1}function PopupWindow_setUrl(F){this.url=F}function PopupWindow_setWindowProperties(F){this.windowProperties=F}function PopupWindow_refresh(){var F;null!=this.divName?this.use_gebi?document.getElementById(this.divName).innerHTML=this.contents:this.use_css?document.all[this.divName].innerHTML=this.contents:this.use_layers&&((F=document.layers[this.divName]).document.open(),F.document.writeln(this.contents),F.document.close()):null==this.popupWindow||this.popupWindow.closed||(""!=this.url?this.popupWindow.location.href=this.url:(this.popupWindow.document.open(),this.popupWindow.document.writeln(this.contents),this.popupWindow.document.close()),this.popupWindow.focus())}function PopupWindow_showPopup(F){var e;this.getXYPosition(F),this.x+=this.offsetX,this.y+=this.offsetY,this.populated||""==this.contents||(this.populated=!0,this.refresh()),null!=this.divName?this.use_gebi?(document.getElementById(this.divName).style.left=this.x+"px",document.getElementById(this.divName).style.top=this.y,document.getElementById(this.divName).style.visibility="visible"):this.use_css?(document.all[this.divName].style.left=this.x,document.all[this.divName].style.top=this.y,document.all[this.divName].style.visibility="visible"):this.use_layers&&(document.layers[this.divName].left=this.x,document.layers[this.divName].top=this.y,document.layers[this.divName].visibility="visible"):(null!=this.popupWindow&&!this.popupWindow.closed||(this.x<0&&(this.x=0),this.y<0&&(this.y=0),screen&&screen.availHeight&&this.y+this.height>screen.availHeight&&(this.y=screen.availHeight-this.height),screen&&screen.availWidth&&this.x+this.width>screen.availWidth&&(this.x=screen.availWidth-this.width),e=window.opera||document.layers&&!navigator.mimeTypes["*"]||"KDE"==navigator.vendor||document.childNodes&&!document.all&&!navigator.taintEnabled,this.popupWindow=window.open(e?"":"about:blank","window_"+F,this.windowProperties+",width="+this.width+",height="+this.height+",screenX="+this.x+",left="+this.x+",screenY="+this.y+",top="+this.y)),this.refresh())}function PopupWindow_hidePopup(){null!=this.divName?this.use_gebi?document.getElementById(this.divName).style.visibility="hidden":this.use_css?document.all[this.divName].style.visibility="hidden":this.use_layers&&(document.layers[this.divName].visibility="hidden"):this.popupWindow&&!this.popupWindow.closed&&(this.popupWindow.close(),this.popupWindow=null)}function PopupWindow_isClicked(F){if(null==this.divName)return!1;if(this.use_layers){var e=F.pageX,t=F.pageY;return e>(i=document.layers[this.divName]).left&&e<i.left+i.clip.width&&t>i.top&&t<i.top+i.clip.height}if(document.all){for(var i=window.event.srcElement;null!=i.parentElement;){if(i.id==this.divName)return!0;i=i.parentElement}return!1}if(this.use_gebi&&F){for(i=F.originalTarget;null!=i.parentNode;){if(i.id==this.divName)return!0;i=i.parentNode}return!1}return!1}function PopupWindow_hideIfNotClicked(F){this.autoHideEnabled&&!this.isClicked(F)&&this.hidePopup()}function PopupWindow_autoHide(){this.autoHideEnabled=!0}function PopupWindow_hidePopupWindows(F){for(var e=0;e<popupWindowObjects.length;e++)null!=popupWindowObjects[e]&&popupWindowObjects[e].hideIfNotClicked(F)}function PopupWindow_attachListener(){document.layers&&document.captureEvents(Event.MOUSEUP),window.popupWindowOldEventListener=document.onmouseup,null!=window.popupWindowOldEventListener?document.onmouseup=new Function("window.popupWindowOldEventListener(); PopupWindow_hidePopupWindows();"):document.onmouseup=PopupWindow_hidePopupWindows}function PopupWindow(){window.popupWindowIndex||(window.popupWindowIndex=0),window.popupWindowObjects||(window.popupWindowObjects=new Array),window.listenerAttached||(window.listenerAttached=!0,PopupWindow_attachListener()),this.index=popupWindowIndex++,(popupWindowObjects[this.index]=this).divName=null,this.popupWindow=null,this.width=0,this.height=0,this.populated=!1,this.visible=!1,this.autoHideEnabled=!1,this.contents="",this.url="",this.windowProperties="toolbar=no,location=no,status=no,menubar=no,scrollbars=auto,resizable,alwaysRaised,dependent,titlebar=no",0<arguments.length?(this.type="DIV",this.divName=arguments[0]):this.type="WINDOW",this.use_gebi=!1,this.use_css=!1,this.use_layers=!1,document.getElementById?this.use_gebi=!0:document.all?this.use_css=!0:document.layers?this.use_layers=!0:this.type="WINDOW",this.offsetX=0,this.offsetY=0,this.getXYPosition=PopupWindow_getXYPosition,this.populate=PopupWindow_populate,this.setUrl=PopupWindow_setUrl,this.setWindowProperties=PopupWindow_setWindowProperties,this.refresh=PopupWindow_refresh,this.showPopup=PopupWindow_showPopup,this.hidePopup=PopupWindow_hidePopup,this.setSize=PopupWindow_setSize,this.isClicked=PopupWindow_isClicked,this.autoHide=PopupWindow_autoHide,this.hideIfNotClicked=PopupWindow_hideIfNotClicked}function ColorPicker_writeDiv(){document.writeln('<DIV ID="colorPickerDiv" STYLE="position:absolute;visibility:hidden;"> </DIV>')}function ColorPicker_show(F){this.showPopup(F)}function ColorPicker_pickColor(F,e){e.hidePopup(),pickColor(F)}function pickColor(F){null!=ColorPicker_targetInput?ColorPicker_targetInput.value=F:alert("Target Input is null, which means you either didn't use the 'select' function or you have no defined your own 'pickColor' function to handle the picked color!")}function ColorPicker_select(F,e){if("text"!=F.type&&"hidden"!=F.type&&"textarea"!=F.type)return alert("colorpicker.select: Input object passed is not a valid form input object"),void(window.ColorPicker_targetInput=null);window.ColorPicker_targetInput=F,this.show(e)}function ColorPicker_highlightColor(F){var e=1<arguments.length?arguments[1]:window.document,t=e.getElementById("colorPickerSelectedColor");t.style.backgroundColor=F,(t=e.getElementById("colorPickerSelectedColorValue")).innerHTML=F}function ColorPicker(){var F,e=!1;0==arguments.length?C="colorPickerDiv":"window"==arguments[0]?e=!(C=""):C=arguments[0],""!=C?F=new PopupWindow(C):(F=new PopupWindow).setSize(225,250),F.currentValue="#FFFFFF",F.writeDiv=ColorPicker_writeDiv,F.highlightColor=ColorPicker_highlightColor,F.show=ColorPicker_show,F.select=ColorPicker_select;var t=new Array("#4180B6","#69AEE7","#000000","#000033","#000066","#000099","#0000CC","#0000FF","#330000","#330033","#330066","#330099","#3300CC","#3300FF","#660000","#660033","#660066","#660099","#6600CC","#6600FF","#990000","#990033","#990066","#990099","#9900CC","#9900FF","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#7FFFFF","#7FFFFF","#7FF7F7","#7FEFEF","#7FE7E7","#7FDFDF","#7FD7D7","#7FCFCF","#7FC7C7","#7FBFBF","#7FB7B7","#7FAFAF","#7FA7A7","#7F9F9F","#7F9797","#7F8F8F","#7F8787","#7F7F7F","#7F7777","#7F6F6F","#7F6767","#7F5F5F","#7F5757","#7F4F4F","#7F4747","#7F3F3F","#7F3737","#7F2F2F","#7F2727","#7F1F1F","#7F1717","#7F0F0F","#7F0707","#7F0000","#4180B6","#69AEE7","#003300","#003333","#003366","#003399","#0033CC","#0033FF","#333300","#333333","#333366","#333399","#3333CC","#3333FF","#663300","#663333","#663366","#663399","#6633CC","#6633FF","#993300","#993333","#993366","#993399","#9933CC","#9933FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF7FFF","#FF7FFF","#F77FF7","#EF7FEF","#E77FE7","#DF7FDF","#D77FD7","#CF7FCF","#C77FC7","#BF7FBF","#B77FB7","#AF7FAF","#A77FA7","#9F7F9F","#977F97","#8F7F8F","#877F87","#7F7F7F","#777F77","#6F7F6F","#677F67","#5F7F5F","#577F57","#4F7F4F","#477F47","#3F7F3F","#377F37","#2F7F2F","#277F27","#1F7F1F","#177F17","#0F7F0F","#077F07","#007F00","#4180B6","#69AEE7","#006600","#006633","#006666","#006699","#0066CC","#0066FF","#336600","#336633","#336666","#336699","#3366CC","#3366FF","#666600","#666633","#666666","#666699","#6666CC","#6666FF","#996600","#996633","#996666","#996699","#9966CC","#9966FF","#CC6600","#CC6633","#CC6666","#CC6699","#CC66CC","#CC66FF","#FF6600","#FF6633","#FF6666","#FF6699","#FF66CC","#FF66FF","#FFFF7F","#FFFF7F","#F7F77F","#EFEF7F","#E7E77F","#DFDF7F","#D7D77F","#CFCF7F","#C7C77F","#BFBF7F","#B7B77F","#AFAF7F","#A7A77F","#9F9F7F","#97977F","#8F8F7F","#87877F","#7F7F7F","#77777F","#6F6F7F","#67677F","#5F5F7F","#57577F","#4F4F7F","#47477F","#3F3F7F","#37377F","#2F2F7F","#27277F","#1F1F7F","#17177F","#0F0F7F","#07077F","#00007F","#4180B6","#69AEE7","#009900","#009933","#009966","#009999","#0099CC","#0099FF","#339900","#339933","#339966","#339999","#3399CC","#3399FF","#669900","#669933","#669966","#669999","#6699CC","#6699FF","#999900","#999933","#999966","#999999","#9999CC","#9999FF","#CC9900","#CC9933","#CC9966","#CC9999","#CC99CC","#CC99FF","#FF9900","#FF9933","#FF9966","#FF9999","#FF99CC","#FF99FF","#3FFFFF","#3FFFFF","#3FF7F7","#3FEFEF","#3FE7E7","#3FDFDF","#3FD7D7","#3FCFCF","#3FC7C7","#3FBFBF","#3FB7B7","#3FAFAF","#3FA7A7","#3F9F9F","#3F9797","#3F8F8F","#3F8787","#3F7F7F","#3F7777","#3F6F6F","#3F6767","#3F5F5F","#3F5757","#3F4F4F","#3F4747","#3F3F3F","#3F3737","#3F2F2F","#3F2727","#3F1F1F","#3F1717","#3F0F0F","#3F0707","#3F0000","#4180B6","#69AEE7","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#66CC00","#66CC33","#66CC66","#66CC99","#66CCCC","#66CCFF","#99CC00","#99CC33","#99CC66","#99CC99","#99CCCC","#99CCFF","#CCCC00","#CCCC33","#CCCC66","#CCCC99","#CCCCCC","#CCCCFF","#FFCC00","#FFCC33","#FFCC66","#FFCC99","#FFCCCC","#FFCCFF","#FF3FFF","#FF3FFF","#F73FF7","#EF3FEF","#E73FE7","#DF3FDF","#D73FD7","#CF3FCF","#C73FC7","#BF3FBF","#B73FB7","#AF3FAF","#A73FA7","#9F3F9F","#973F97","#8F3F8F","#873F87","#7F3F7F","#773F77","#6F3F6F","#673F67","#5F3F5F","#573F57","#4F3F4F","#473F47","#3F3F3F","#373F37","#2F3F2F","#273F27","#1F3F1F","#173F17","#0F3F0F","#073F07","#003F00","#4180B6","#69AEE7","#00FF00","#00FF33","#00FF66","#00FF99","#00FFCC","#00FFFF","#33FF00","#33FF33","#33FF66","#33FF99","#33FFCC","#33FFFF","#66FF00","#66FF33","#66FF66","#66FF99","#66FFCC","#66FFFF","#99FF00","#99FF33","#99FF66","#99FF99","#99FFCC","#99FFFF","#CCFF00","#CCFF33","#CCFF66","#CCFF99","#CCFFCC","#CCFFFF","#FFFF00","#FFFF33","#FFFF66","#FFFF99","#FFFFCC","#FFFFFF","#FFFF3F","#FFFF3F","#F7F73F","#EFEF3F","#E7E73F","#DFDF3F","#D7D73F","#CFCF3F","#C7C73F","#BFBF3F","#B7B73F","#AFAF3F","#A7A73F","#9F9F3F","#97973F","#8F8F3F","#87873F","#7F7F3F","#77773F","#6F6F3F","#67673F","#5F5F3F","#57573F","#4F4F3F","#47473F","#3F3F3F","#37373F","#2F2F3F","#27273F","#1F1F3F","#17173F","#0F0F3F","#07073F","#00003F","#4180B6","#69AEE7","#FFFFFF","#FFEEEE","#FFDDDD","#FFCCCC","#FFBBBB","#FFAAAA","#FF9999","#FF8888","#FF7777","#FF6666","#FF5555","#FF4444","#FF3333","#FF2222","#FF1111","#FF0000","#FF0000","#FF0000","#FF0000","#EE0000","#DD0000","#CC0000","#BB0000","#AA0000","#990000","#880000","#770000","#660000","#550000","#440000","#330000","#220000","#110000","#000000","#000000","#000000","#000000","#001111","#002222","#003333","#004444","#005555","#006666","#007777","#008888","#009999","#00AAAA","#00BBBB","#00CCCC","#00DDDD","#00EEEE","#00FFFF","#00FFFF","#00FFFF","#00FFFF","#11FFFF","#22FFFF","#33FFFF","#44FFFF","#55FFFF","#66FFFF","#77FFFF","#88FFFF","#99FFFF","#AAFFFF","#BBFFFF","#CCFFFF","#DDFFFF","#EEFFFF","#FFFFFF","#4180B6","#69AEE7","#FFFFFF","#EEFFEE","#DDFFDD","#CCFFCC","#BBFFBB","#AAFFAA","#99FF99","#88FF88","#77FF77","#66FF66","#55FF55","#44FF44","#33FF33","#22FF22","#11FF11","#00FF00","#00FF00","#00FF00","#00FF00","#00EE00","#00DD00","#00CC00","#00BB00","#00AA00","#009900","#008800","#007700","#006600","#005500","#004400","#003300","#002200","#001100","#000000","#000000","#000000","#000000","#110011","#220022","#330033","#440044","#550055","#660066","#770077","#880088","#990099","#AA00AA","#BB00BB","#CC00CC","#DD00DD","#EE00EE","#FF00FF","#FF00FF","#FF00FF","#FF00FF","#FF11FF","#FF22FF","#FF33FF","#FF44FF","#FF55FF","#FF66FF","#FF77FF","#FF88FF","#FF99FF","#FFAAFF","#FFBBFF","#FFCCFF","#FFDDFF","#FFEEFF","#FFFFFF","#4180B6","#69AEE7","#FFFFFF","#EEEEFF","#DDDDFF","#CCCCFF","#BBBBFF","#AAAAFF","#9999FF","#8888FF","#7777FF","#6666FF","#5555FF","#4444FF","#3333FF","#2222FF","#1111FF","#0000FF","#0000FF","#0000FF","#0000FF","#0000EE","#0000DD","#0000CC","#0000BB","#0000AA","#000099","#000088","#000077","#000066","#000055","#000044","#000033","#000022","#000011","#000000","#000000","#000000","#000000","#111100","#222200","#333300","#444400","#555500","#666600","#777700","#888800","#999900","#AAAA00","#BBBB00","#CCCC00","#DDDD00","#EEEE00","#FFFF00","#FFFF00","#FFFF00","#FFFF00","#FFFF11","#FFFF22","#FFFF33","#FFFF44","#FFFF55","#FFFF66","#FFFF77","#FFFF88","#FFFF99","#FFFFAA","#FFFFBB","#FFFFCC","#FFFFDD","#FFFFEE","#FFFFFF","#4180B6","#69AEE7","#FFFFFF","#FFFFFF","#FBFBFB","#F7F7F7","#F3F3F3","#EFEFEF","#EBEBEB","#E7E7E7","#E3E3E3","#DFDFDF","#DBDBDB","#D7D7D7","#D3D3D3","#CFCFCF","#CBCBCB","#C7C7C7","#C3C3C3","#BFBFBF","#BBBBBB","#B7B7B7","#B3B3B3","#AFAFAF","#ABABAB","#A7A7A7","#A3A3A3","#9F9F9F","#9B9B9B","#979797","#939393","#8F8F8F","#8B8B8B","#878787","#838383","#7F7F7F","#7B7B7B","#777777","#737373","#6F6F6F","#6B6B6B","#676767","#636363","#5F5F5F","#5B5B5B","#575757","#535353","#4F4F4F","#4B4B4B","#474747","#434343","#3F3F3F","#3B3B3B","#373737","#333333","#2F2F2F","#2B2B2B","#272727","#232323","#1F1F1F","#1B1B1B","#171717","#131313","#0F0F0F","#0B0B0B","#070707","#030303","#000000","#000000","#000000","#000000","#000000"),i=t.length,o=72,n="",s=e?"window.opener.":"";e&&(n+="<html><head><title>Select Color</title></head>",n+="<body marginwidth=0 marginheight=0 leftmargin=0 topmargin=0><span style='text-align: center;'>"),n+="<table style='border: none;' cellspacing=0 cellpadding=0>";for(var d,C,r=!(!document.getElementById&&!document.all),l=0;l<i;l++)l%o==0&&(n+="<tr>"),d=r?'onMouseOver="'+s+"ColorPicker_highlightColor('"+t[l]+"',window.document)\"":"",n+='<td style="background-color: '+t[l]+';"><a href="javascript:void()" onclick="'+s+"ColorPicker_pickColor('"+t[l]+"',"+s+"window.popupWindowObjects["+F.index+']);return false;" '+d+">&nbsp;</a></td>",(i<=l+1||(l+1)%o==0)&&(n+="</tr>");return document.getElementById&&(n+="<tr><td colspan='"+(C=Math.floor(o/2))+"' style='background-color: #FFF;' ID='colorPickerSelectedColor'>&nbsp;</td><td colspan='"+(o=C)+"' style='text-align: center;' id='colorPickerSelectedColorValue'>#FFFFFF</td></tr>"),n+="</table>",e&&(n+="</span></body></html>"),F.populate(n+"\n"),F.offsetY=25,F.autoHide(),F}ColorPicker_targetInput=null;