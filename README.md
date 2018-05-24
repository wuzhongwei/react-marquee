环境要求
react > 15.6.2 以上
react-dom > 15.6.2 以上

## 引入方式 npm
```javascript
npm install iyb-marquee --save
```

## Usage 使用
```javascript
import { Marquee } from 'iyb-marquee';

// 引入样式
@import "node_modules/iyb-marquee/lib/styles/components.scss";
```

Api
----

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | iyb-marquee | | 类名前缀 |
| className | string | | | 追加类名 |
| speed | number | 300 |  | continuous为false的动画时间，单位：毫秒|
| activeIndex | number | 0 | | 当前页面的索引 |
| continuous | bool | false |  | 延迟滚动false,连续滚动true |
| timer | number | 2000 | | continuous为flase才生效 |
| direction | string | vertical | 'vertical', 'landscape' |滑动方向 |
| children | array | [] |  | 子元素 |  


