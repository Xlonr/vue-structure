### 按钮类型
#### class
&emsp;is_per:       默认primary
&emsp;is_warn:      警告
&emsp;is_success:   成功
&emsp;is_error:     失败/错误
&emsp;is_disabled:  禁用

#### Type
&emsp;fillet:  圆角
&emsp;circle:  圆形按钮
&emsp;text:    文本导航

### code
<table class="_table"><tr><td bgcolor=#DCDCDC>

```
<div class="view_cont">
  <div class="col">
    <btn class="is_small" >按钮</btn>
    <btn class="is_per is_small" >按钮</btn>
    <btn class="is_warn" >按钮</btn>
    <btn class="is_success" >按钮</btn>
    <btn class="is_warn is_disabled" >按钮</btn>
    <btn class="is_error is_larger" >按钮</btn>
  </div>
  <div class="col">
    <btn class="is_small" type="fillet" >小型按钮</btn>
    <btn class="is_per is_small" type="fillet" >小型按钮</btn>
    <btn class="is_warn" type="fillet" >默认按钮</btn>
    <btn class="is_success" type="fillet" >默认按钮</btn>
    <btn class="is_warn is_disabled" type="fillet" >默认按钮</btn>
    <btn class="is_error is_larger" type="fillet" >大型按钮</btn>
  </div>
  <div class="col">
    <btn class="is_small" icon="icon-sousuo" >按钮</btn>
    <btn class="is_per is_small" icon="icon-sousuo" >按钮</btn>
    <btn class="is_warn" icon="icon-sousuo" >按钮</btn>
    <btn class="is_success" icon="icon-sousuo" >按钮</btn>
    <btn class="is_warn is_disabled" icon="icon-sousuo" >按钮</btn>
    <btn class="is_error is_larger" icon="icon-sousuo" >按钮</btn>
  </div>
  <div class="col">
    <btn icon="icon-sousuo" class="is_small" type="circle" ></btn>
    <btn icon="icon-sousuo" class="is_per is_small" type="circle" ></btn>
    <btn icon="icon-sousuo" class="is_warn" type="circle" ></btn>
    <btn icon="icon-sousuo" class="is_success" type="circle" ></btn>
    <btn icon="icon-sousuo" class="is_warn is_disabled" type="circle" ></btn>
    <btn icon="icon-sousuo" class="is_error is_larger" type="circle" ></btn>
  </div>
  <div class="col">
    <btn type="text" class="is_active">标题1</btn>
    <btn type="text">标题2</btn>
    <btn type="text">标题3</btn>
    <btn type="text">标题4</btn>
    <btn type="text">标题5<tip tipContent="提示内容"></tip></btn>
  </div>
</div>
```
</td></tr></table>