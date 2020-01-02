<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>初始HTML</h3>
        <p>一个网站主要由HTML+css+js组成，我们先学习HTML</p>
        <p>
          HTML 指的是
          <b>超文本标记语言</b> (Hyper Text Markup Language)
        </p>
        <p>HTML 不是一种编程语言，而是一种标记语言 (markup language)</p>
        <p>
          标记语言是一套
          <b>标记标签</b> (markup tag)
        </p>
        <p>
          HTML 使用
          <b>标记标签</b>来描述网页
        </p>

        <p>准备工具：Hbuilder ，Chrome浏览器。安装方法略。下载地址：</p>
        <p>
          Hbuilder：
          <a
            href="https://www.dcloud.io/hbuilderx.html"
          >https://www.dcloud.io/hbuilderx.html</a>
        </p>
        <img src="https://cdn.u1.huluxia.com/g3/M01/C0/0A/wKgBOV4Nk8mAdTY6AAEMwE1nio4517.jpg" />
        <p>
          chrome:
          <a
            href="https://www.google.cn/intl/zh-CN/chrome/"
          >https://www.google.cn/intl/zh-CN/chrome/</a>
        </p>
        <img src="https://cdn.u1.huluxia.com/g3/M01/C0/0B/wKgBOV4NlCuAdEa5AAD3sAL5E9E008.jpg" />
        <h2>浏览器介绍</h2>
        <div class="pleft-15">
            <p>常用浏览器，谷歌，IE，火狐，欧朋,Safari</p>
            <p>浏览器内核 （作为了解）</p>
            <div class="pleft-15">
                <p>1、IE浏览器内核：Trident内核，也是俗称的IE内核；</p>
                <p>2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核；</p>
                <p>3、火狐浏览器内核：Gecko内核，俗称Firefox内核；</p>
                <p>4、Safari浏览器内核：Webkit内核；</p>
                <p>5、Opera浏览器内核：最初是自己的Presto内核，后来是Webkit，现在是Blink内核；</p>
            </div>
            <p>代码在各个浏览器有兼容性，就是有的代码在Chrome浏览器生效，在ie可能就不生效。所以要注意代码的兼容性。</p>
        </div>

        <h2>HTML标签。</h2>
        <div class="pleft-15">
          <p>(1).语义化标签。意思就是 合适的内容使用合适的标签。使得代码结构清晰。 方便浏览器的搜索引擎的搜索。</p>
          <p>(2).html 的常用标签。</p>
          <div class="pleft-15">
            <p>1.标题标签。（熟记）</p>
            <p>2.段落标签。（熟记）</p>
            <p>3.换行标签 br (熟记)</p>
            <p>4.div和span标签。（熟记）</p>
            <p>5.水平线标签 hr (知道就行，一般不会用到)</p>
          </div>
          <h3>1.标题标签</h3>
          <div class="pleft-15">
            <p>h1 到 h6 ,分别称为一级标签到6级标签。字体越来越小，标题都有加粗效果,一行只能放一个标题标签，（一行只能放一个的称之为 块元素。后面再详细说块元素）。示例：</p>
            <h1>一级标签</h1>
            <h2>二级标签</h2>
            <h3>三级标签</h3>
            <h4>四级标签</h4>
            <h5>五级标签</h5>
            <h6>六级标签</h6>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/18/wKgBOV4Nm7SAQZf_AAAlfMHbHO0432.jpg" />
          </div>
          <h3>2.段落标签</h3>
          <div class="pleft-15">
            <p>
              在HTML里面不识别回车和空格。只识别
              <b>标签</b> ,段落标签是 &lt;p&gt; 用法非常简单。示例：
            </p>
            <p>
              <b>无段落标签</b>
            </p>
            <div>
              标题第一段内容PingWest品玩1月1日讯，据9to5Mac消息，美国苹果公司获得处理音频信号系统的专利，这项专利将可以在虚拟现实设备上使用。
              美国专利商标局的档案中出现了一个名为“为使用抑制串扰设备的听众消除虚拟声音系统”的申请。该申请中描述了旨在把音频信号分为几个频道的声音处理系统。
              在使用这种技术时用户应该有一种感觉，就是声音来自不同区域，而不是直接来自扬声器或者耳机。预计，为虚拟现实系统工作而配备3D传感系统的新iPad Pro平板电脑将成为可能使用新技术的一个设备。
            </div>
            <p>
              <b>有段落标签</b>
            </p>
            <div>
              <h4>标题</h4>
              <p>第一段内容PingWest品玩1月1日讯，据9to5Mac消息，美国苹果公司获得处理音频信号系统的专利，这项专利将可以在虚拟现实设备上使用。</p>
              <p>美国专利商标局的档案中出现了一个名为“为使用抑制串扰设备的听众消除虚拟声音系统”的申请。该申请中描述了旨在把音频信号分为几个频道的声音处理系统。</p>
              <p>在使用这种技术时用户应该有一种感觉，就是声音来自不同区域，而不是直接来自扬声器或者耳机。预计，为虚拟现实系统工作而配备3D传感系统的新iPad Pro平板电脑将成为可能使用新技术的一个设备。</p>
            </div>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/28/wKgBOV4No0mAFkLcAAFTwqPDGiE424.jpg" />
          </div>
          <h3>3.强制换行标签</h3>
          <div class="pleft-15">
            <p>html中不识别回车键的换行，需要用标签 &lt;br/&gt; 示例：</p>
            <div>
              春眠不觉晓，
              <br />处处闻啼鸟。
              <br />夜来风雨声，
              <br />花落知多少。
            </div>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/23/wKgBOV4NoUSAeHIaAAAazkIIYuw666.jpg" />
            <p>看上去和 &lt;p&gt;(段落标签) 差不多，来对比一下。 &lt;p&gt;(段落标签)示例：</p>
            <p>春眠不觉晓，</p>
            <p>处处闻啼鸟。</p>
            <p>夜来风雨声，</p>
            <p>花落知多少。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/24/wKgBOV4Noc-AEs5DAAAy0Ot-ybo993.jpg" />
            <p>可以看到p标签的行间距更大。br标签的间距没有那么大。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/28/wKgBOV4No3KAZDYcAAC00l3iwUo980.jpg" />
          </div>
          <h3>div和span标签</h3>
          <div class="pleft-15">
            <p>div和span标签是没有语义的，是用来包含内容的。特点，div一行只能占一个（为块元素），span 一行可以占多个（为行元素）。示例：</p>
            <div>
              <p>div:</p>
              <div>这是div</div>
              <div>这是div</div>
              <div>这是div</div>
              <p>span:</p>
              <span>这是span</span>
              <span>这是span</span>
              <span>这是span</span>
              <span>这是span</span>
            </div>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/2D/wKgBOV4NpSeANWCTAAAvtbKF1RM335.jpg" />
          </div>
        </div>

        <h2>文本格式化标签。</h2>
        <div class="pleft-15">
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/33/wKgBOV4NprKAOpfQAABD7b-O3Qg705.jpg" />

          <p>加粗：&lt;b&gt;&lt;/b&gt; &lt;strong&gt;&lt;/strong&gt;,两种都可以实现加粗效果，但后者语义化更明显，strong为强壮的意思，强壮就粗了，推荐后者。</p>
          <p>斜体：&lt;i&gt;&lt;/i&gt; &lt;em&gt;&lt;/em&gt;,两种都可以实现斜体效果，但后者语义化更明显，推荐后者。</p>
          <p>加删除线：&lt;s&gt;&lt;/s&gt; &lt;del&gt;&lt;/del&gt;,两种都可以实现删除线效果，但后者语义化更明显，推荐后者。</p>
          <p>加下滑线：&lt;u&gt;&lt;/u&gt; &lt;ins&gt;&lt;/ins&gt;,两种都可以实现下滑线效果，但后者语义化更明显，推荐后者。</p>
          <p>示例：</p>
          <p>
            <b>加粗的字</b>，
            <i>斜体的字</i>，
            <s>带有删除线的字</s>，
            <u>带有下划线的字</u>
          </p>
          <p>
            <strong>加粗的字</strong>，
            <em>斜体的字</em>，
            <del>带有删除线的字</del>，
            <ins>带有下划线的字</ins>
          </p>
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/38/wKgBOV4NqIKAQEbmAABE64koUjU438.jpg" />
        </div>

        <h2>标签的属性</h2>
        <div class="pleft-15">
          <p>作用：给标签增加更多的信息。格式：在标签内，增加属性名和属性值。理论上可以增加无数的属性,中间用空格隔开。拿图片做示例：</p>
          <p>
            <span
              class="code"
            >&lt;img src="https://cdn.u1.huluxia.com/g3/M01/C0/39/wKgBOV4NqQyAF386AAAnJ4WLB8I449.jpg" /&gt;</span>
          </p>
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/39/wKgBOV4NqQyAF386AAAnJ4WLB8I449.jpg" />

          <p>src为属性名，双引号里面的src的值。属性都有固定的名称，对应不同的作用。以后还会接触到 自定义属性。</p>
        </div>
        <h2>img的更多属性。</h2>
        <div class="pleft-15">
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/3F/wKgBOV4Nq-SAIpxeAABwbCx2HYQ313.jpg" />
          <p>alt属性：图片路径不对不能正常显示，找不到图片时显示的文字。示例：</p>
          <img src="https://cdn.F/wKgBOV4Nq-SAIpxeAABwbCx2HYQ313.jpg" alt="图片找不到了。alt起作用了" />
          <p>title属性：鼠标悬浮到图片上显示的文字。示例：</p>
          <img
            src="https://cdn.u1.huluxia.com/g3/M01/C0/41/wKgBOV4NrHCAS_3BAAA2jIhD3Ls744.jpg"
            title="鼠标悬浮到图片上显示的文字"
          />
          <p>width和height属性：图片的宽高。可以直接用属性来修改图片宽高，如果单一修改其中一个值的话，另一个会等比例缩放。示例：</p>
          <img
            src="https://cdn.u1.huluxia.com/g3/M01/C0/41/wKgBOV4NrHCAS_3BAAA2jIhD3Ls744.jpg"
            width="100"
            height="100"
          />
          <p>代码:</p>
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/43/wKgBOV4NrWSAITlzAADK5yhcR3k347.jpg" />
        </div>
        <h2>链接标签</h2>
        <div class="pleft-15">
          <p>链接标签 &lt;a&gt;标签，a标签有两个属性，href 和 target。</p>
          <p>href： a链接跳转的地址</p>
          <p>target: 跳转的方式。默认是self ，新页面打开为 _blank.</p>
          <p>示例：</p>
          <p>
            <a href="http://www.baidu.com">当前页面打开百度，target为self，或者不加target属性</a>
          </p>
          <p>
            <a href="http://www.baidu.com" target="_blank">新页面打开百度，target为_blank</a>
          </p>
        </div>
        <h2>注释标签</h2>
        <div class="pleft-15">
          <!-- 注释是比较重要的，尤其是项目大，逻辑多的时候，需要写好注释。  也可以用于屏蔽无用代码。快捷键是 ctrl + / 。 -->
          <p>注释可以让我们清楚的知道代码的作用，程序中不会执行注释的代码。注释是比较重要的，尤其是项目大，逻辑多的时候，需要写好注释。 也可以用于屏蔽无用代码。快捷键是 ctrl + / 。</p>
          <img src="https://cdn.u1.huluxia.com/g3/M01/C0/5B/wKgBOV4NuLaABt7tAABPyBb3Cyo398.jpg" />
        </div>

        <hr />
        <h2>路径</h2>
        <div class="pleft-15">
          <p>路径分为相对路径和绝对路径。</p>
          <p>
            <b>相对路径：</b>文件的引入，图片的引入，都需要填写路径。路径无非就3种情况，要引入的资源在所属文件的 同级、下级、上级。
          </p>
          <div class="pleft-15">
            <p>拿图片举例：</p>
            <p>
              同级：可以直接写要引入的文件名。
              <span class="code">&lt;img src="imgName.jpg"&gt;</span>
            </p>
            <p>
              下级：/ 表示下一级，这行表示，引用同级img文件夹下的imgName.jpg图片。&lt;
              <span
                class="code"
              >img src="img/imgName.jpg"&gt;</span>
            </p>
            <p>
              上级：../ 表示上一级，这行表示，引用上级img文件夹下的imgName.jpg图片。
              <span
                class="code"
              >&lt;img src="../img/imgName.jpg"&gt;</span>
            </p>
            <p>
              上级的上级：../../ 表示上一级的上一级，这行表示，引用上级的上级的img文件夹下的imgName.jpg图片。
              <span
                class="code"
              >&lt;img src="../../img/imgName.jpg"&gt;</span>
            </p>
          </div>
          <p>
            <b>绝对路径：</b>
          </p>
          <div class="pleft-15">
            <p>（/ ：代表文件所在的根目录）其实可以理解成项目内部的绝对路径。绝对路径是指目录下的绝对位置，直接到达目标位置</p>
            <p>示例：</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C0/6A/wKgBOV4NvqmAeajpAAAomTpgN98197.jpg" />
            <p>目录结构如上，如果要在test.html中引入000.css，可以有以下写法：</p>
            <p>1、<span class="code">&lt;linkhref="./css/css1/000.css"/&gt; </span>(./可以省略)</p>
            <p> 2、<span class="code">&lt;link href="/html/css/css1/000.css" /&gt;</span>(这种就是绝对路径写法。)</p>
            <p>3、 <span class="code">&lt;link href="../html/css/css1/000.css" /&gt;</span></p>

            <p>还有外链的链接，写的都是绝对路径，http://开头，直接指定到某一个网站。示例：</p>
             <p><span class="code">&lt;img src="https://cdn.u1.huluxia.com/g3/M01/C0/6A/wKgBOV4NvqmAeajpAAAomTpgN98197.jpg" /&gt;</span></p>
             <p>这个就直接访问的https://cdn.u1.huluxia.com网站里的一张图片。</p>
          </div>
        </div>
      </div>
    </div>
    <div id="toTop"></div>
  </div>
</template>
<script>
import detailHeader from "../../../../components/detailHeader";
export default {
  components: { detailHeader },
  created() {}
};
</script>
<style  scoped>
</style>