œ# GeekPark 前端代码规范  
![GeekPark](http://www.geekpark.net/public/img/icons/white-logo.jpg) 
![BusinessValue](http://businessvalue.com.cn/css/images/logo.gif)

[GeekPark] & [ITvalue] 前端开发团队遵循和约定的代码书写规范，意在提高代码的规范性和可维护性。

## 索引
* [规范内容](#规范内容)
* [书写规范](#书写规范)
    * [样式与内容分离](#样式与内容分离)
    * [CSS 细化规范](#css-细化规范)
    * [XHTML 细化规范](#xhtml-细化规范)
    * [JS 细化规范](#js-细化规范)
* [Newletter制作规范](#newletter制作规范)œ
* [工具推荐(Mac)](#工具推荐mac)
* [相关技巧](#相关技巧)
* [参考数据](#参考数据)

## 规范内容
----
1. CSS reset 文件：[base.css]  
所有代码都基于这个文件。重设浏览器，解决依赖引起的耦合问题。 
    * `base.css` 的作用:
        * CSS reset
    * 其他功能：
        * `.fn-clear` 清除浮动
        * `.fn-hide/.fn-show` 相当于 `display:block;/display:none;`
        * `.fn-left/.fn-right` 相当于 `float:left;/float:right;`

2. 规范：
此规范为参考规范，不是硬性要求，部分硬性约定见下一条\[书写约定\]，统一团队编码规范和风格。让所有代码都是有规可循的，并且能够得到沉淀，减少重复劳动。
 
3. 工具：[通用兼容解决方案库]  
常见浏览器兼容问题的解决方案，可以参考这里的库，只参考思路即可。

## 书写规范
----
### 样式与内容分离

#### 文件结构： 
>
    ---
     |---- images/                存放CSS文件中使用到的 image 图片  
     |---- js/                    调用js文件  
     |---- base.css               CSS reset 文件  
     |---- style.css              样式表  
     |---- index.html             内容文件  

#### 重构步骤约定：
1. `index.html` 全部样式附着于 `class="xxx"` **注：** _此时文件中不包含任何一个 id="xxx"_
2. 为上一步书写 CSS style  
**\[至此重构完成\]**
3. 开始书写`js`交互文件，使用 `ID` 和 `Class` 定位被操作句柄
4. 向 `index.html` 中需要的地方添加 id="xxx"  
**\[至此交互效果完成\]**

#### 命名规范：  
* 文件及文件夹: 全部英文小写字母+数字或连接符"`-` , `_` "，不可出现中文等字符。  
如：`../geekevent/css/style.css, jquery.1.x.x.js` 
* ID: [匈牙利命名法] & [小駝峰式命名法]  
如：`firstName` `topBoxList` `footerCopyright`
* Class: [减号连接符]  
如：`top-item` `main-box` `box-list-item-1`

#### 格式&编码：
* 文本文件： .xxx UTF-8_\(无BOM\)_ 编码
* 透明图片： .png _(PNG-24)_
* 动态图片： .gif
* 打包文件： .zip

### CSS 细化规范

#### CSS 注释格式约定  
>
    /*
    @name: Drop Down Menu
    @description: Style of top bar drop down menu.
    @require: base.css
    @author: Andy Huang(andyahung@geekpark.net)
    */

_其中，@require为可选项目_ 

* CSS换行制表：使用 4 个空格，而非\[tab\]
       
    * 书写格式：
        * CSS名称+冒号+属性  
        如：`.box1{float:left;}`
        * 最优压缩，省略一切可以省略的空格，字体名用`\`包含，中文需转义。  
        如：`.box1,.box2,.box3{font-family:Courier,'Courier New';}`
        
#### CSS各属性的排列顺序：不做硬性要求  
_如：以下2种顺序均可_

    .box{
        /* 顺序1 */
        background: none repeat scroll 0 0 transparent;
        bottom: 11px;
        position: relative;
        width: 22px;
        z-index: 33;
    }
    .box{
        /* 顺序2 */
        z-index: 33;
        width: 22px;
        bottom: 11px;
        background: transparent none repeat scroll 0 0 ;
        position: relative;
    }
  
#### 切记业界书写准则：HTML不要相互嵌套，CSS 推荐嵌套。  
    /* 推荐嵌套层级 */
    .ui-icon-rarr{background:...}
    .ui-icon-larr{background:...}
    .ui-title{font-size:...}
    .ui-nav .ui-list{...}
    .ui-table .ui-list{...}

    /* 不推荐 */
    .ui-icon-rarr{background:...}
    .ui-icon-larr{background:...}
    .ui-title{font-size:...}
    .ui-list{}
    .ui-nav{}

#### CSS格式化：最终网站上输出的CSS，每个选择器单行，最优压缩，保留注释  

    /* 注释内容 */
    .box{z-index:33;width:22px;bottom:11px;background:transparent none repeat scroll 0 0 ;position:relative;}
    .box2{z-index:44;width:55px;}
    .box3,#box4{z-index:66;width:77px;}
_可使用工具：[CSS Compressor] 并选择\[highest\]压缩_  
    
### XHTML 细化规范

#### HTML 注释格式约定  
    <!--
    @name: Drop Down Menu
    @description: Style of top bar drop down menu.
    @require: base.css
    @author: Andy Huang(andyahung@geekpark.net)
    -->
    
    <div id="header">
        <div class="xxx">
            <span>HTML行内注释格式</span>
        </div>
    </div><!-- #header end-->

* HTML换行缩进：采用 2 空格

#### 切记业界书写准则：HTML不要相互嵌套，CSS 推荐嵌套。  
    /* 推荐嵌套层级 */
      <ul class="ui-nav">
        <li class="ui-nav-item"> some text
            <ul class="ui-nav-item-child">
                <li> some text
                    <ul class="ui-list">
                        <li class="ui-list-item"> some text</li>
                    </ul...
            </ul>
        </li>
        <li...
    </ul>

    /* 不推荐 */
      <ul class="ui-nav">
        <li class="ui-nav-item"> some text
            <ul class="ui-nav-item-child">
                <li> some text
                    <ul class="ui-nav">
                        <li class="ui-nav-item"> some text </li>
                    </ul...
            </ul>
        </li>
        <li...
    </ul>

##### \* 第一行统一使用：<!DOCTYPE html>
    <!DOCTYPE html>
    <html dir="ltr" lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <title>极客公园 | 创新者社区</title>
        <meta name="keywords" content="xxxx, xxx, xxxxx" />
        <meta name="description" content="xxxxxxxxxxxxxxxxxxxx" />
        

##### Meta 的使用：（需呀根据具体需求按需选择）
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Cache-Control" content="max-age=7200" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://feeds.geekpark.net/" />
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <script type='text/javascript' src='/js/xxx.js'></script>
    <link rel="stylesheet" href="/css/xxx.css">
    
    <script type="text/javascript">
        Google 统计代码 的位置在离</head>最近的位置
	</script>
    </head>

* `<img>`标签默认缺省格式：`<img src="xxx.png" alt="缺省时文字" />` 避免出现[src="" 问题]
* `<a>`标签缺省格式：`<a href="#" title="链接名称">xxx</>` 注：`target="_blank"` 根据需求决定  
* 所有标签需要符合XHTML标准
* 一律统一标签结尾斜杠的书写形式：`<br />` `<hr />` 注意之间空格
* 避免使用已过时标签，如：`<b>` `<u>` `<i>` 而是用 `<strong>` `<em>`等代替
* 使用`data-xxx`来添加自定义数据，如：`<input data-xxx="yyy"/>`
* 避免使用`style="xxx:xxx"`的内联样式表
* 特殊符号使用参考[HTML 符号实体]

###JS 细化规范
----

#####文件结构：
>
    ---
    |---- /mylib/plugin-1/       使用到的js插件1  
    |---- /mylib/plugin-2/       使用到的js插件2  
    |---- /mylib/plugin-3/       使用到的js插件3  
    |---- script.js              单独书写的js  
    |---- plugins.js             调用的plugins汇总  
    |---- juqery-1.8.x.min.js    调用jq库文件  

* 结束行需添加分号`;`
* jQuery变量要求首字符为 `$`, 私有变量:首字符为`_`; 尽量避免全局变量.
* 避免使用 eval()，setTimeOut使用调用函数，考虑重绘，回流 操作对页面影响  参看：[reflows，repaints]
* JS调试使用`console.log()`进行，避免使用弹出框，线上版不能要注释掉所有的调试代码
* JS压缩混淆工具: [JS Compressor]  如果使用了压缩，需要留 `name-src.js`在同路径供今后修改使用

#####jQuery Call
    <!-- Grab Google CDN jQuery. fall back to local if necessary -->  
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>  
    <script>!window.jQuery && document.write('<script src="js/jquery-1.7.2.min.js"><\/script>')</script>            
#####jQuery Plugin：

* IE对HTML5标签支持，以及浏览器特性检测：[Modernizr] & [html5shiv]
* 定制&统一 浏览器的滚动条样式：[jquery-scroll] & [Lionbars]
* hover提示效果文字：[bootstrap-tooltips]
* 滚动条跟随nav效果：[bootstrap-scrollspy]
* 提示冒泡文字：[grumble.js]
* 导航栏过渡效果：[lavalamp]
* 移动设备的滚动效果：[iscroll 4]
* Mac OS Lion 风格的滚动条：[Lionbars]
* 弹性SlideShow：[kwicks for jQuery]
* 瀑布流：[isotope]
* 抖动效果：[jQ shake]
* LightBox：[fancyBox]
* KenDo UI：[KenDo UI]
* textarea自适应高度：[elastic]

#####JSON格式规范：参考[JSON Style Guide翻译]，原版：[Google JSON Style Guide]


### Newletter制作规范
* 整理排版中，待发

### 工具推荐(Mac)
*for more app detial check -> [IUSETHIS](http://osx.iusethis.com/user/hzlzh 'App pack')*  

* 编辑器：[Sublime Text 2] / [TextMate 2] / [Vim]
* 浏览器：[Chrome] / [Firefox] + [Firebug]
* 兼容性测试：[VirtualBox] + Win XP（IE 8）
* 版本控制工具：[Versions] / [GitHub for Mac] / [SourceTree]
* FTP工具：[Filezilla] / [ForkLift]
* HTTP代理或镜像：[Charles]
* PHP集成环境：[XAMPP for Mac]
* 标注工具：[Mark Man] / [xScope]
* 取色拾色器：[Sip] / [Snip] / [xScope]
* MarkDown编辑器：[Mou]
* 免刷新环境：[LiveReLoad]
* 其他相关工具：[Cookie] / [ColorSchemer Studio] / [Less] / [SpriteRight] / [iTerm2]

### 相关技巧
[Wiki page index](https://github.com/GeekPark/Doc/wiki/_pages)  
* [各浏览器的缓存清除方法]  
* [测试技巧Gmail 添加词缀\(.+\)获得多个邮件的方法]

### 参考数据
涉及到 `设计`->`重构`->`兼容性`->`测试` 时可参考各浏览器的占用情况  
*-- updated: `2012-08`*  via `Google Analytics of GeekPark`  

| 总浏览器        |     占有率 |
|:---------------|----------:|
| Chrome         |    38.41% |
| IE             |    23.10% |
| Mozilla Agent  |     9.57% |
| Android Browser|     9.02% |
| Firefox        |     7.99% |
| Safari         |     7.09% |
| Safari (in-app)|     2.45% |
| Opera          |     0.86% |

| IE版本分布     |       占有率 |
|:--------------|------------:|
| IE 8          |      57.73% |
| IE 9          |      21.63% | 
| *IE 6*        |      10.87% |
| *IE 7*        |       9.03% |  
| IE 10         |       0.70% | 

| 移动设备       |       占有率 |
|:--------------|------------:|
| iOS           |      57.99% |
| Android       |      40.72% |
| Nokia         |       0.55% |
| Windows Phone |       0.49% |  

| 屏幕分辨率     |       占有率 |
|:--------------|------------:|
| 1366x768      |      20.23% |
| 1440x900      |      13.17% |
| 1280x800      |      12.85% |
| 320x480       |      10.05% |
| 1024x768      |       5.93% |   

本规范目前完善中，有任何新的条例欢迎 `Fork` 本项目修改后 `Pull Request`

[GeekPark]: http://geekpark.net/ "http://geekpark.net/"
[ITvalue]: http://www.itvalue.com.cn/ "http://www.itvalue.com.cn/"

[Bootstrap]: http://twitter.github.com/bootstrap/ "Bootstrap, from Twitter"
[Alice]: https://github.com/alipay/alice "Alice 支付宝前端样式解决方案"
[base.css]: https://github.com/h5bp/html5-boilerplate/blob/master/css/main.css "CSS reset 文件"
[CSS 规范]: http://aliceui.com/css-spec/ "CSS 代码书写规范"
[样式库构建规范]: http://aliceui.com/alice-css-guide/ "该项不予参考"
[通用兼容解决方案库]: http://aliceui.com/alice-css/#solutions "该项不予参考"

[reflows，repaints]: http://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/  "重绘,回流参考"
[src="" 问题]: http://js8.in/555.html "src="" 问题"

[匈牙利命名法]: http://zh.wikipedia.org/wiki/%E5%8C%88%E7%89%99%E5%88%A9%E5%91%BD%E5%90%8D%E6%B3%95 "Wiki:匈牙利命名法"
[小駝峰式命名法]:http://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB "小駝峰式命名法"
[CSS Compressor]: http://www.csscompressor.com/ "CSS 压缩"
[JS Compressor]: http://javascriptcompressor.com/ "JS 压缩和混淆"
[HTML 符号实体]: http://www.w3school.com.cn/html/html_entities.asp 
[Google JSON Style Guide]:http://google-styleguide.googlecode.com/svn/trunk/jsoncstyleguide.xml
[JSON Style Guide翻译]:https://github.com/darcyliu/google-styleguide/blob/master/JSONStyleGuide.md

[Modernizr]: http://modernizr.com/download/
[html5shiv]: https://github.com/aFarkas/html5shiv
[jquery-scroll]: https://github.com/thomd/jquery-scroll/
[Lionbars]: https://github.com/Charuru/lionbars
[bootstrap-tooltips]: http://twitter.github.com/bootstrap/javascript.html#tooltips
[bootstrap-scrollspy]: http://twitter.github.com/bootstrap/javascript.html#scrollspy
[grumble.js]: https://github.com/jamescryer/grumble.js
[lavalamp]: http://www.gmarwaha.com/blog/2007/08/23/lavalamp-for-jquery-lovers/
[iscroll 4]: https://github.com/cubiq/iscroll
[kwicks for jQuery]: https://github.com/Mottie/Kwicks
[isotope]: https://github.com/desandro/isotope
[jQ shake]: https://gist.github.com/3270711
[fancyBox]: https://github.com/fancyapps/fancyBox
[KenDo UI]: http://www.kendoui.com/purchase.aspx
[elastic]: http://unwrongest.com/projects/elastic/

[各浏览器的缓存清除方法]: https://github.com/GeekPark/Doc/wiki/%5B%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E7%BC%93%E5%AD%98%5D%E5%90%84%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B5%8B%E8%AF%95%E7%BD%91%E9%A1%B5%E6%97%B6%E6%B8%85%E9%99%A4%E7%BC%93%E5%AD%98%E7%9A%84%E6%96%B9%E6%B3%95
[测试技巧Gmail 添加词缀\(.+\)获得多个邮件的方法]: https://github.com/GeekPark/Doc/wiki/%5B%E6%B5%8B%E8%AF%95%E6%8A%80%E5%B7%A7%5DGmail-%E6%B7%BB%E5%8A%A0%E8%AF%8D%E7%BC%80(.--)%E8%8E%B7%E5%BE%97%E5%A4%9A%E4%B8%AA%E9%82%AE%E4%BB%B6%E7%9A%84%E6%96%B9%E6%B3%95

[Sublime Text 2]:http://www.sublimetext.com/2
[TextMate 2]:https://github.com/textmate/textmate
[Vim]:http://macvim.org/
[Chrome]:http://www.google.com/chrome
[Firefox]:http://www.mozilla.org/
[Firebug]:http://getfirebug.com/
[VirtualBox]:https://www.virtualbox.org/
[Versions]:http://versionsapp.com/
[GitHub for Mac]:http://mac.github.com/
[SourceTree]:http://www.sourcetreeapp.com/
[Filezilla]:http://filezilla-project.org/
[ForkLift]:http://itunes.apple.com/us/app/forklift/id412448059?mt=12
[Charles]:http://www.charlesproxy.com/
[XAMPP for Mac]:http://www.apachefriends.org/en/xampp-macosx.html
[Mark Man]:http://www.getmarkman.com/
[xScope]:http://itunes.apple.com/us/app/xscope/id447661441?mt=12
[Sip]:http://itunes.apple.com/app/sip/id507257563?mt=12
[Snip]:http://itunes.apple.com/us/app/snip/id512505421?mt=12
[Mou]:http://mouapp.com/
[LiveReLoad]:http://http://livereload.com/
[Cookie]:http://itunes.apple.com/us/app/cookie/id415585910?mt=12
[ColorSchemer Studio]:http://itunes.apple.com/us/app/colorschemer-studio/id417896628?mt=12
[Less]:http://incident57.com/less/
[SpriteRight]:http://itunes.apple.com/us/app/spriteright/id488584662?mt=12
