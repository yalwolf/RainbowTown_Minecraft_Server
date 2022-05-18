<?php
	$html = file_get_contents('tab.json');
	$nic = json_decode($html,true);
	$time = $nic['time'];
	$text = $nic['text'];
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RainboTown服务器 - 生电/生存服 丨 Minecraft服务器</title>
    <meta name="description" content="这是一个纯净生存的和谐生电服，欢迎各位生电/生存党玩家的入驻~">
    <meta name="keywords" content="我的世界服务器,Minecraft服务器,Minecraft">
    <link rel="stylesheet" type="text/css" href="static/css/rainbowtown.css">
    <link rel="stylesheet" type="text/css" href="static/css/style.css">
    <link rel="icon" href="static/image/logo.png">
    <script>
        window.addEventListener('scroll', () => {
          let header = document.querySelector('header')
          header.classList.toggle('sticky', window.scrollY > 0)
        })
      </script>
</head>

<body>
    <header>
        <a href="" class="logo">彩虹乡</a>
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="#about" data-uk-scroll="duration: 400; offset: -200">关于</a></li>
          <li><a href="#tab" data-uk-scroll="duration: 400; offset: -100">公告</a></li>
          <li><a href="#author" data-uk-scroll="duration: 400; offset: -100">作者的话</a></li>
          <li><a href="#download" data-uk-scroll="duration: 400; offset: -100">下载</a></li>
          <li><a href="#join" data-uk-scroll="duration: 400; offset: -200">加入我们</a></li>
        </ul>
      </header>
      
    <!-- 首页标题 -->
    <div id="Home" class="nutscraftBox Box1">
        <div class="wow Box1-title">
            <p class="wow Box1-title1">Hello RainbowTown.</p>
            <p class="wow Box1-title2">欢迎来到，彩虹乡！</p>
            <a href="#about" data-uk-scroll="duration: 400; offset: -200" class="wow scrollOnClick Box1-title-Buttom" easing="smooth">More...</a>
        </div>
    </div>
    <!-- 特色介绍 -->
    <div class="nutscraftBox">
        <div id="about"></div>
        <div class="Box2-nutscraft">
            <ul>
                <li class="wow OutRight">
                    <img src="static/picture/server.png" alt="server">
                    <h2>什么是生电？</h2>
                    <p>“生电是指利用游戏机制或者特性,来做到生存资源的长期供应,其中通常会与红石机器进行相互搭配。”</p>
                </li>
                <li class="wow OutTop">
                    <img src="static/picture/friend.png" alt="server">
                    <h2>环境温馨</h2>
                    <p>本服的初衷就是和谐温馨，友好的小型公益服，本服即使你的财产不保护，也没有玩家会来盗取哦</p>
                </li>
                <li class="wow OutTop">
                    <span data-uk-icon="icon: comments; ratio: 5"></span>
                    <h2>公平公正</h2>
                    <p>本服为公益服，只接受无条件赞助，任何玩家都是平等的，让玩家享受最公平的游戏环境</p>
                </li>
                <li class="wow OutLeft">
                    <img src="static/picture/backup.png" alt="server">
                    <h2>数据安全</h2>
                    <p>服务器每天都会自动备份，并且安装有回档插件保驾护航，基本保障了玩家不会造成一切损失</p>
                </li>
            </ul>
            <a href="#author" data-uk-scroll="duration: 400; offset: -100" class="scrollOnClick Box2-More wow" easing="smooth">Next...</a>
        </div>
    </div>

    <!-- 公告 -->

    <div class="nutscraftBox tab">
        <div id="tab"></div>
        <div class="tab-talk OutBottom wow">
            <div class="tab-talk-text">
                <h1></h1>
                <h2>公告</h2>
                <div class="p"></div>
                <p style="text-align: center;">网站目前已运营<span id="web-time"></span>。</p>
                <p style="text-align: center;">服务器起步于2022年x月xx日，目前已运营。</p>
                <div class="p"></div>
                <br/>
                <p style="text-align: center;"></p>
                <h3 class="Box3-talk-text-end"><?php echo $time;?></h3>
                <p style="text-align: center;">-<?php echo $text;?></p>
            </div>
        </div>
        <a href="#download" data-uk-scroll="duration: 400; offset: -200" class="scrollOnClick tab-More wow" easing="smooth">Next...</a>
    </div>

    <!-- 一些话 -->
    <div class="nutscraftBox Box3">
        <div id="author"></div>
        <div class="Box3-talk OutBottom wow">
            <div class="Box3-talk-text">
                <h1></h1>
                <h2><span style="color: black;">鸽子</span></del>服主的一些话</h2>
                <div class="p"></div>
                <p style="text-align: center;">2022年服务器与网站正式开始运营</p>
                <p style="text-align: center;">感谢各位玩家前往游玩！！</p>
                <h3 class="Box3-talk-text-end">欢迎你的到来，陌生人！</h3>
            </div>
        </div>
        <a href="#download" data-uk-scroll="duration: 400; offset: -200" class="scrollOnClick Box3-More wow" easing="smooth">Next...</a>
    </div>

    <div class="nutscraftBox download"><a href="">
        <div id="download"></div>
        <div class="download-rainbowtown">
            <ul>
                <li class="wow OutTop">
                    <span data-uk-icon="icon: download; ratio: 5"></span>
                    <h2>下载</h2>
                    <p style="text-align: center;">RainbowTown客户端</p>
                </li>
            </ul>
            <a href="#join" data-uk-scroll="duration: 400; offset: -100" class="scrollOnClick download-More wow" easing="smooth">Next...</a>
        </div>
    </div></a>

    <!-- 加入我们 -->
    <div class="nutscraftBox Box5">
        <div id="join"></div>
        <div class="Box5-Join OutBottom wow">
            <div class="Box5-Join-talk">
                <h1>加入我们？</h1>
                <p>加入我们一起打造属于我们的世界！</p>
                <ul>
                    <li><a href="join/">QQ群</a></li>
                    <li><a href="javascript:;">社区</a></li>
                    <li><a href="javascript:;">特色介绍</a></li>
                </ul>
            </div>
        </div>

        <!-- 页脚 -->
        <div class="footer">
            <p>&copy;2022 <a href="">RainbowTown</a></p>
            <p>友情链接： <a href="https://alwolf.cn">ALWOLF</a></p>
            <br/>
        </div>
    </div>
    <script type="text/javascript" src="static/js/server-time.js"></script>
    <script type="text/javascript" src="static/js/web-time.js"></script>
    <script src="static/js/jquery.js"></script>
    <script type="text/javascript" src="static/js/main.js" ></script>
</body>

</html>