   
       	var startTime = Date.now();
	    var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
        var isWxWork = /\bwxwork\/([\d\.]+)/.test(navigator.userAgent);
	    
	    
	    
	    
		var getUrlParam = function(name, href, noDecode) {
		    var re = new RegExp("(?:\\?|#|&)" + name + "=([^&]*)(?:$|&|#)", "i"),
		    m = re.exec(href);
		    var ret = m ? m[1] : "";
		    return ! noDecode ? decodeURIComponent(ret) : ret
		};

		var jump_from = getUrlParam("jump_from", location.href);
		var auth_key = getUrlParam("auth", location.href);
		var app_name = getUrlParam("app_name", location.href);
        
        var auth_sig = getUrlParam("authKey", location.href);
        
        var isQR = getUrlParam("qr", location.href) === '1';
		var isQim = app_name === 'qim';

       if(isQim){
           document.getElementById('update_link').innerHTML = '升级DOV';
           document.getElementById('going_wording').innerHTML = '正在前往DOV';

           document.title = 'DOV-无乐不作';

           var m_container = document.getElementById('m_container');

           m_container.setAttribute('class',m_container.getAttribute('class') + ' qim');
       }


		var reportData = function(nvalue, error) {
		    var img = new Image();
		    var str = "//cgi.pub.qq.com/report/bnl?data=" + 0 + "," + nvalue + "," + (error || 0) + "," + p;
		    img.src = str
		};
		var speed = {
		    report: function(f1, f2, f3, f4, time) {
		        var ISD_REPORT_URL = "//isdspeed.qq.com/cgi-bin/r.cgi?";
		        var isdTransport = new Image();
		        var reportData = f4 + "=" + time;
		        var url = ISD_REPORT_URL + "flag1=" + f1 + "&flag2=" + f2 + "&flag3=" + f3 + "&" + reportData;
		        isdTransport.src = url
		    }
		};



        
        function animateRound(dom, initialState, max_top, min_top, speed) {
            dom.style.top = initialState + 'px';
            var isUp = true;
            setInterval(function () {
                var top = parseInt(dom.style.top);
                if (isUp) {
                    if (max_top < top) {
                        top -= 1;
                    } else {
                        isUp = false;
                        top += 1;
                    }
                } else {
                    if (min_top > top) {
                        top += 1;
                    } else {
                        isUp = true;
                        top -= 1;
                    }
                }
                dom.style.top = top + 'px';
            }, speed);
        }


		var ua = navigator.userAgent;
		var p;
		var REGEXP_IOS_QQ = /(iPad|iPhone|iPod).*? QQ\/([\d\.]+)/;
		var isiOSMQ = REGEXP_IOS_QQ.test(ua);
       if(ua.indexOf('QIM') > -1 || ua.indexOf('DOV') > -1){
           isiOSMQ = false;
       }
		var isSafari = ua.indexOf("Safari") > -1;
		
		var mobile_q_jump = {
			android:"//im.qq.com",
			ios:"itms-apps://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8",
			winphone:"//www.windowsphone.com/zh-cn/store/app/qq/b45f0a5f-13d8-422b-9be5-c750af531762",
			pc:"//im.qq.com/"
		};

       if(isQim){
           mobile_q_jump = {
               android:"//im.qq.com",
               ios:"itms-apps://itunes.apple.com/cn/app/dov/id1334674854?mt=8",
               winphone:"//im.qq.com",
               pc:"//im.qq.com"
           };
       }

		if(typeof type == "undefined") type = 1;

		if(ua.indexOf("Android")>-1){
			p = "android";
		}
		else if(ua.indexOf("iPhone")>-1 || ua.indexOf("iPad")>-1 || ua.indexOf("iPod")>-1){
			p = "ios";
		}
		else if(ua.indexOf("Windows Phone") > -1 || ua.indexOf("WPDesktop") > -1){
			p = "winphone";
		}
		else {
			p = "pc";
		}
		
		if(p == "ios"){
			
			if(history.pushState && !isiOSMQ)
				history.pushState({},"t","#");
		}
		else if(p == "pc" && qsig != "undefined"){
			window.open(qsig + "&jump_from=" + jump_from,"_self");
		}

       function checkWechat(version){
           var v = version.split('.');

           var version656 = (6 * 1000 * 1000) + (5 * 1000 ) + 6;

           var newVersion = (v[0] * 1000000) + (v[1] * 1000) + (v[2]);

           return newVersion >= version656;
       }

        

        
            document.querySelector('.tips').classList.add('mobile-tips')
            document.querySelector('.tips').style.display = "block"
            var rounds = document.querySelectorAll('.box');
            for (var i = 0, len = rounds.length; i < len; i++) {
                var aspeed = 50;
                (function (i) {
                    setTimeout(function () {
                        animateRound(rounds[i], 2, -1, 5, aspeed);
                    }, 5 * (i + 1) * (aspeed - 10));
                })(i);
            }            
        

        document.getElementById("update_link").onclick = function(){
            var jumpUrl = mobile_q_jump[p]; 
            if(jumpUrl) window.open(jumpUrl,"_self");
        }        

		if(wechatInfo && checkWechat(wechatInfo[1]) && !isWxWork){
			var doLaunch = function () { 
			     setTimeout(function() {  
			     	var url = '';
					if(p == "ios" && sid == 2){
                        var scheme = 'mqqapi';
                        if(isQim){
                            scheme = 'qimapi';
                        }
						url = scheme + "://card/show_pslcard?src_type=internal&version=1&uin="+ rawuin +"&card_type=group&source=qrcode&jump_from=" + jump_from + "&auth=" + auth_key +"&authSig=" + auth_sig + "&source_id=" + (isQR ? '2_40002' : '2_40001');
					} else if(p !== "pc"){
						var url = window.location.href.split("&");
						var kParam = getUrlParam("k", location.href);
                        var scheme = 'mqqopensdkapi';
                        if(isQim){
                            scheme = 'qimopensdkapi';
                        }
						if(p=='ios'){
							url = scheme  + "://bizAgent/qm/qr?url=" + encodeURIComponent("http://qm.qq.com/cgi-bin/qm/qr?k=" + kParam+"&jump_from=" + jump_from + "&auth=" + auth_key+ "&app_name=" + app_name+"&authSig=" + auth_sig + "&source_id=" + (isQR ? '2_40002' : '2_40001')) ;
						}else{
							url = scheme + "://bizAgent/qm/qr?url=" + encodeURIComponent("https://qm.qq.com/cgi-bin/qm/qr?k=" + kParam+"&jump_from=" + jump_from + "&auth=" + auth_key+ "&app_name=" + app_name+"&authSig=" + auth_sig + "&source_id=" + (isQR ? '3_40002' : '3_40001')) ;
						}
					}

			        WeixinJSBridge.invoke('launchApplication', { 
			             "schemeUrl" : url
			        }, function (res) {
                        if(res && res.err_msg === 'launchApplication:fail'){
                            var jumpUrl = mobile_q_jump[p];

                            reportData(11780, 1);

                            if(jumpUrl) {
                                setTimeout(function(){
                                    window.open(jumpUrl,"_self");
                                },0);
                            }
                        }
			        });
			    },500); 
			}

			if(window.WeixinJSBridge){
				doLaunch();
			}else{
				document.addEventListener('WeixinJSBridgeReady', function (){
					doLaunch();
				});
			}
		}else if(type == 1){
			var isSuccess = true;

			var f = document.createElement("iframe");
			f.style.display = "none";
			document.body.appendChild(f);

			reportData(11780);

			f.onload = function(){
				isSuccess = false;
			};
			setTimeout(function(){
				if(p == "ios" && sid == 2){
                    var scheme = 'mqqapi';
                    if(isQim){
                        scheme = 'qimapi';
                    }

					var iosUrl = scheme + "://card/show_pslcard?src_type=internal&version=1&uin="+ rawuin +"&card_type=group&source=qrcode&jump_from=" + jump_from + "&auth=" + auth_key+"&authSig=" + auth_sig + "&source_id=" + (isQR ? '2_40002' : '2_40001');

					
					if(isSafari){
						location.href = iosUrl;
					}
					else{
						f.src = iosUrl;				
					}

				}
				else if(p != "pc"){
					var url = window.location.href.split("&");
					var kParam = getUrlParam("k", location.href);
                    var scheme = 'mqqopensdkapi';
                    if(isQim){
                        scheme = 'qimopensdkapi';
                    }
					if(p=='ios'){
						f.src = scheme + "://bizAgent/qm/qr?url=" + encodeURIComponent("http://qm.qq.com/cgi-bin/qm/qr?k=" + kParam+"&jump_from=" + jump_from + "&auth=" + auth_key+ "&app_name=" + app_name+"&authSig=" + auth_sig + "&source_id=" + (isQR ? '2_40002' : '2_40001')) ;
					}else{
						f.src = scheme + "://bizAgent/qm/qr?url=" + encodeURIComponent("https://qm.qq.com/cgi-bin/qm/qr?k=" + kParam+"&jump_from=" + jump_from + "&auth=" + auth_key + "&app_name=" + app_name+"&authSig=" + auth_sig + "&source_id=" + (isQR ? '3_40002' : '3_40001')) ;
					}
					
				}
				
				if(sid == 2 && p != "pc" && !isQim){
					document.title = "申请加入我们";
					document.getElementById("m_container").style.display = "block";
				}

				var now = Date.now();
				setTimeout( function(){
					if((p == "ios" && (!isiOSMQ || isQim) && Date.now() - now < 2000) || (p == "android" && (!isSuccess || isQim)) || ((p == "winphone" && Date.now() - now < 2000))){
						var jumpUrl = mobile_q_jump[p]; 

						reportData(11780, 1);

						if(jumpUrl) {
							setTimeout(function(){
								window.open(jumpUrl,"_self");
							},800);
						}
					}
				} , 1500);
			},1500);
			
		}
		speed.report("7832", "19", "2", "1", Date.now() - window.startTime);