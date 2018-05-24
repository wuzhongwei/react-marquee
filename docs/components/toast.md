
### 引入

```js
import { Marquee } from 'wzw-components';
```

### 代码演示

#### 基本用法

###### 普通(默认是纵向、间歇滚动)
```jsx
<Marquee>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Marquee>
```

###### 横向滚动(横向、间歇滚动)
```jsx
<Marquee direction="landscape">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Marquee>
```
###### 横向滚动(横向、连续滚动)
```jsx
<Marquee direction="landscape" continuous>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Marquee>
```

