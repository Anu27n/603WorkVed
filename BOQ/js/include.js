var sWOChatElement,sWOSession,sWOUrl,sWOGateway="hostedusa2.whoson.com",sWOGatewaySSL="hostedusa2.whoson.com",sWODomain="www.cubicles.com",sWOChatstart="https://hostedusa2.whoson.com/newchat/chat.aspx",sWODepartment="",sWOSkillNames="",sWOLanguage="",sWOBackgroundURL="",sWOResponse="Y",sWOInvite="Y",sWOPreselect="",sWOUser="",sWOPage="",sWOStatus="offline",sWOInline=!0,sWOCost=0,sWORevenue=0,sWOName="",sWOCompany="",sWOEmail="",sWOTelephone="",sWOProtocol=window.location.protocol,sWOImage=document.createElement("img"),sWOHide=!1;sWOImage.border=0,function(){if(""==sWOUser){var a=new Date,b=document.cookie.toString();if(-1==b.indexOf("whoson")&&(sWOSession=parseInt(1e3*Math.random())+"-"+a.getTime(),document.cookie="whoson="+sWOSession+";expires="+new Date(new Date().getTime()+31540000000).toUTCString()+"; path=/"),b=document.cookie.toString(),-1==b.indexOf("whoson"))sWOSession="";else{var c=b.indexOf("whoson=")+7,d=b.indexOf(";",c);-1==d&&(d=b.length),sWOSession=b.substring(c,d)}"https:"==sWOProtocol&&(sWOGateway=sWOGatewaySSL),""!=sWOUser&&(sWOSession=sWOUser),"file:"==sWOProtocol&&(sWOProtocol="http:")}}();function sWOStartChat(){return window.open(sWOChatElement.href,sWODomain+"-Chat","width=540,height=430"),!1}function sWOImageLoaded(){1==sWOImage.width||(sWOChatElement.href=sWOChatstart,sWOChatElement.target="_blank",sWOChatElement.appendChild(sWOImage),sWOChatElement.onclick=sWOStartChat)}function sWOAddVariable(a,b){if(0<$("#wo_chatholder_wo").length){var c=$("#wo_chatholder_wo").attr("src");c+="&x-"+a+"="+b,$("#wo_chatholder_wo").attr("src",c)}else sWODomain+="&x-"+a+"="+b}function sWOTrackPage(){var a=document.getElementsByTagName("body")[0];if(""==sWOPage&&(sWOPage=escape(window.location)),sWOUrl=sWOProtocol+"//"+sWOGateway+"/?u="+sWOSession+"&d="+sWODomain,0<sWODepartment.length&&(sWOUrl+="&t="+escape(sWODepartment)),sWOUrl+="&p='"+sWOPage+"'&r='"+escape(document.referrer)+"'",0!=sWOCost&&(sWOUrl+="&c="+sWOCost),0!=sWORevenue&&(sWOUrl+="&v="+sWORevenue),(""!=sWOName||""!=sWOCompany||""!=sWOEmail||""!=sWOTelephone)&&(sWOUrl+="&n="+encodeURIComponent(encodeURIComponent(sWOName))+"|"+sWOCompany+"|"+sWOEmail+"|"+sWOTelephone),""!=sWOSkillNames&&(sWOUrl+="&sn="+escape(sWOSkillNames)),""==sWOResponse||sWOHide){var b=document.createElement("div");b.style.cssText="position:absolute;display:none;",sWOImage.src=sWOUrl,b.appendChild(sWOImage),a.appendChild(b)}else{if(sWOImage.onload=sWOImageLoaded,sWOChatElement=document.getElementById("whoson_chat_link"),!sWOChatElement){sWOChatElement=document.createElement("a"),sWOChatElement.id="whoson_chat_link";var c=document.querySelector("script[src*='include.js?domain="+sWODomain+"']");null==c?a.appendChild(sWOChatElement,a):c.parentNode.insertBefore(sWOChatElement,c)}sWOUrl+="&response=g",/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)&&!navigator.userAgent.match(/iemobile/i)&&(sWOChatstart=sWOChatstart.replace("chat.aspx","mobile.aspx"),sWOUrl+="&m=1"),sWOChatstart+="?domain="+sWODomain,0<sWOLanguage.length&&(sWOChatstart+="&lang="+sWOLanguage),0<sWODepartment.length&&(sWOChatstart+="&dept="+escape(sWODepartment)),0<sWOPreselect.length&&(sWOChatstart+="&select="+sWOPreselect),""!=sWOSkillNames&&(sWOChatstart+="&x-requestedskills="+escape(sWOSkillNames)),sWOChatstart+="&timestamp="+new Date().getTime(),sWOUrl+="&timestamp="+new Date().getTime(),""!=sWOSession&&(sWOChatstart+="&session="+sWOSession),sWOImage.src=sWOUrl}if("Y"==sWOInvite){var d={i:function(){"function"==typeof woAfterLoad&&(woAfterLoad(),woAfterLoad=function(){})}};if("undefined"==typeof sWOInvite||""==sWOInvite)return;var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.onload=d.i,e.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&d.i()},e.src=sWOUrl=sWOProtocol+"//"+sWOGateway+"/invite.js?domain="+sWODomain,document.body.appendChild(e)}}