<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>HTML的表格、列表、表单。</h3>
        <h2>1、表格</h2>
        <div class="pleft-15">
          <p>
            <b>(1).表格的组成</b>
          </p>
          <div class="pleft-15">
            <p>表格不用来布局。主要用来展示数据。</p>
            <p>创建一个表格，最基本的表格包含三部分，缺一不可。 table，tr，td。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/32/wKgBOV4O3vaATZiVAAA2K_xzpCI542.jpg" />
            <p>&lt;table&gt;用来创建表格</p>
            <p>&lt;tr&gt;表示表格中的一行，必须嵌套在&lt;table&gt;里</p>
            <p>&lt;td&gt;表示表格里一行中的某个单元格。必须嵌套在&lt;tr&gt;里，td里可以放任何内容（文字，链接，图片等等）</p>
            <p>&lt;th&gt;表头单元格标签。必须嵌套在&lt;tr&gt;里。用作第一行做表头，会自动居中加粗效果。</p>
            <p>&lt;caption&gt;表格标题。必须嵌套在&lt;table&gt;里。用作表格的标题。</p>
          </div>
          <p>
            <b>(2).表格的属性</b>
          </p>
          <div class="pleft-15">
            <p>
              <b>width,height：</b>和图片一样，可以设置表格的宽高。
            </p>
            <p>
              <b>border：</b>设置表格的边框。
            </p>
            <p>
              <b>align：</b>设置单元格内的文字对齐方式。值：left center right。
            </p>
            <p>
              <b>cellpadding：</b>单元格内文字与单元格边框之间的距离。
            </p>
            <p>
              <b>cellspacing：</b>单元格之间的距离。一般设置为0
            </p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/40/wKgBOV4O51qAOAoiAAASfkDCn44562.jpg" />
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/39/wKgBOV4O4y6AE0LUAAA8bLCQq4Q995.jpg" />
            <p>练习：</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/3D/wKgBOV4O5bSAGv9aAAChyMqX-WA632.jpg" />
          </div>
          <p>
            <b>(3).合并单元格</b>
          </p>
          <div class="pleft-15">
            <p>合并单元格有两种方式。跨行单元格（rowspan）和跨列单元格（colspan）。使用合并单元格时一定要先分析是跨行还是跨列。横向：叫跨列。纵向：叫跨行。</p>
            <p>合并方向：跨行:从上到下。跨列：从左到右。</p>
            <p>
              <b>合并步骤</b>。
            </p>
            <p>1.首先确定是跨行合并还是跨列合并。</p>
            <p>2.找到目标单元格。根据从上到下，从左到右的原则。在目标单元格上写上合并方式（rowspan || colspan）和 合并数量。</p>
            <p>3.删除多余单元格。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/47/wKgBOV4O7DmAPdPEAAApgaQ4Li8549.jpg" />
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/47/wKgBOV4O7BaAdDWoAABSnOfcjjU818.jpg" />
          </div>
          <p>
            <b>(4).表格的结构划分</b>
          </p>
          <div class="pleft-15">
            <p>thead,tbody,tfoot。为了表格的结构更加清晰。注意：thead里必须有tr。</p>
          </div>
        </div>
        <hr />
        <h2>2、列表</h2>
        <div class="pleft-15">
          <p>列表用来布局。多个行或者列的排版样式一致的时候，适合用列表。</p>
          <p>列表分3大类。无序列表，有序列表，自定义列表。</p>
          <b>(1).无序列表</b>
          <div class="pleft-15">
            <p>无序列表是工作中用到最多的。重点记忆。</p>
            <p>代码结构：由ul 嵌套 li 组成。li 和td一样，只是容器。里面内容放什么都可以（文字，图片，链接等等）。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/51/wKgBOV4O8haAbNW3AAAocS6DxkI238.jpg" />
            <p>下面图片红框部分的内容都适合用列表来做。</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/50/wKgBOV4O8ZGAKBDfAAFQGB3oNpQ835.jpg" />
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/50/wKgBOV4O8Z6AV8qHAACzgZULZqk578.jpg" />
            <p>和表格相比，列表更加自由，表格有行的概念，里面的td也是对应的，每行的td个数相等。列表更适合布局。</p>
          </div>
          <b>(2).有序列表</b>
          <div class="pleft-15">
            <p>工作中很少用到有序列表。就算是有要求排序的列表，也会用js 计算。很少用这个。</p>
            <p>有序列表的所有特性和无序列表都一致</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/6E/wKgBOV4PA6SAXd1zAAAc_9QvdyQ652.jpg" />
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/6E/wKgBOV4PA4OAMtQ_AAA1-9T_Pe4819.jpg" />
          </div>
          <b>(3).自定义列表</b>
          <div class="pleft-15">
            <p>自定义列表由dl,dt,dd。组成。dl嵌套dt 和dd。注意dt和dd是同级的。dd是围绕着dt的。示例：</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/75/wKgBOV4PBqiAWmfpAAAifYkhDDc132.jpg" />
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/74/wKgBOV4PBo2AFSgyAAANrS4zNNA612.jpg" />

            <p>实际工作中也会用到自定义列表。比如：</p>
            <img src="https://cdn.u1.huluxia.com/g3/M01/C2/75/wKgBOV4PBviAU_8xAABxhAnM-O4347.jpg" />
          </div>
        </div>
        <h2>3、表单</h2>
        <div class="pleft-15">
          <p>
            表单一般用于填写用户信息。前台提交给后台。表单主要由
            <b>表单控件，提示文本，表单域</b>组成。
          </p>
          <div class="pleft-15">
            <h2>1.input控件</h2>
            <div class="pleft-15">
              <b>(1).input 的属性 type(类型)</b>
              <div class="pleft-15">
                <p>
                  type = text 输入框为 文本框
                  <span class="code">&lt;input text="text" &gt;</span>
                  <input type="text" />
                </p>
                <p>
                  type = password 输入框为 密码框
                  <span class="code">&lt;input text="password" &gt;</span>
                  <input type="password" />
                </p>
              </div>
              <b>(2).input 的属性 value(值)</b>
              <div class="pleft-15">
                <p>
                  可删除默认值
                  <span class="code">&lt;input text="text" value="wangsainan" &gt;</span>
                  <input type="text" value="wangsainan" />
                </p>
                <p>
                  默认显示文字。这个不代表有值。只是提示作用
                  <span
                    class="code"
                  >&lt; input text="password" placeholder="请输入。。。" &gt;</span>
                  <input type="text" placeholder="请输入。。。" />
                </p>
              </div>
              <b>(3).input 的属性 name(名称)</b>
              <div class="pleft-15">
                <p>为了区分众多的 控件。再给后台传值的时候，可以根据name名字来区分各个控件的值。</p>
                <p>
                  type = radio 输入框为 单选按钮 用相同的name 来划分是否为同一组。
                  <span
                    class="code"
                  >&lt;input text="radio" &gt;</span>
                  男：
                  <input type="radio" name="sex" /> 女：
                  <input type="radio" name="sex" />
                </p>
                <p>
                  type = checkbox 输入框为复选框 也是用相同的name 来划分是否为同一组。
                  <span
                    class="code"
                  >&lt;input text="checkbox" &gt;</span>
                  唱歌：
                  <input type="checkbox" name="Hobby" />
                  跳舞：
                  <input type="checkbox" name="Hobby" />
                  打篮球：
                  <input type="checkbox" name="Hobby" />
                </p>
              </div>
              <b>(4). 控件的属性 checked(默认选中)</b>
              <div class="pleft-15">
                <p>
                  在
                  <span class="code">&lt;input text="radio" &gt;</span> 和
                  <span class="code">&lt;input text="checkbox" &gt;</span>中 可以添加checked 来默认选中一个。示例：
                </p>
                <div>
                  唱歌：
                  <input type="checkbox" name="Hobby" checked />
                  跳舞：
                  <input type="checkbox" name="Hobby" />
                  打篮球：
                  <input type="checkbox" name="Hobby" />
                </div>
                <img
                  src="https://cdn.u1.huluxia.com/g3/M01/C2/88/wKgBOV4PD7SAf2PnAAA0y1FO-Hc227.jpg"
                />
                <div>
                  男：
                  <input type="radio" name="sex" checked />
                  女：
                  <input type="radio" name="sex" />
                </div>
                <img
                  src="https://cdn.u1.huluxia.com/g3/M01/C2/89/wKgBOV4PD-uAOtyqAAAgkHoDDOU900.jpg"
                />
              </div>
              <b>(5). button</b>
              <div class="pleft-15">
                <p>
                  普通按钮,普通按钮需要加value属性。用来展示按钮信息
                  <span class="code">&lt;input type="button"&gt;</span>
                  <input type="button" value="普通按钮" />
                </p>
                <p>
                  提交按钮,提交按钮用来提交表单数据。提交按钮可以不加value属性。默认展示“提交”。当然也可以加value属性来修改默认文字。
                  <span
                    class="code"
                  >&lt;input type="button"&gt;</span>
                  <input type="submit" />
                </p>
                <p>
                  重置按钮,重置按钮用来清空表单数据。重置按钮可以不加value属性。默认展示“重置”。当然也可以加value属性来修改默认文字。
                  <span
                    class="code"
                  >&lt;input type="button"&gt;</span>
                  <input type="reset" />
                </p>
              </div>
              <b>(6).文件域，用来上传文件</b>
              <div class="pleft-15">
                <p>
                  <span class="code">&lt;input type="file"&gt;</span>
                </p>
                <input type="file" />
              </div>
              <b>(7).label标签</b>
              <div class="pleft-15">
                <p>label标签是为了用户体验。不用点击控件才能选中，点击文字也能选中控件。有两种方法。</p>
                <p>
                  方法一： 直接用label包含住控件。
                  <span
                    class="code"
                  >&lt;label&gt;用户名 &lt;input type="text"&gt;&lt;/label&gt;</span>
                  <label>
                    用户名
                    <input type="text" />
                  </label>
                </p>
                <p>
                  方法二： for 和 id 。label 的for 和控件的id 组成对应。
                  <span
                    class="code"
                  >&lt;label for="ids"&gt;用户名&lt;/label&gt; &lt;input type="text" id="ids"&gt;</span>
                  <label for="ids">用户名</label>
                  <input type="text" id="ids" />
                </p>
              </div>
            </div>
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