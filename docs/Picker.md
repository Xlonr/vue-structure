### 日历
#### Type（触发类型）
&emsp;isHover:    hover状态下显示
&emsp;isCheck:    click点击状态下显示

### code
<table class="_table"><tr><td bgcolor=#DCDCDC>

```
<picker @dateTimes="dateTimes" :isHover="Boolean(true)">
  <span slot="slot-cont">
    <input-cont class="picker_calculate_num" input_text="选择日期" :value="dt"></input-cont>
  </span>
</picker>
```
</td></tr></table>