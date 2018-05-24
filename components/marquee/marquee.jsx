import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { events } from '../utils';


class Index extends Component {
  constructor(props) {
    super(props);
    this.moveInterval = null;
    this.state = {
      items: [],
      activeIndex: props.activeIndex,
    };
    this.transitionEnd = this.transitionEnd.bind(this);
  }
  componentWillMount() {
    const { children } = this.props;
    const newItems = this.newCreateData(children);
    this.setState({
      items: newItems,
    });
  }
  componentDidMount() {
    this.parseItems(this.props);
    this.startAutoPlay(this.props);
    events.on(this.swipeItems, 'webkitTransitionEnd', this.transitionEnd);
    events.on(this.swipeItems, 'transitionend', this.transitionEnd);
    this.doTransition(this.props.activeIndex, this.props.speed);
  }

  componentWillReceiveProps(nextProps) {
    if ('children' in nextProps) {
      this.parseItems(nextProps);
    }

    if ('activeIndex' in nextProps) {
      this.doTransition(nextProps.activeIndex, nextProps.speed);
    }
  }
  componentWillUnmount() {
    // 自动轮播结束
    this.pauseAutoPlay();
    // 移除监听窗口变化
    events.off(this.swipeItems, 'webkitTransitionEnd', this.transitionEnd);
    events.off(this.swipeItems, 'transitionend', this.transitionEnd);
  }
  pauseAutoPlay() {
    if (this.moveInterval) {
      clearInterval(this.moveInterval);
    }
  }
  transitionEnd() {
    const len = this.props.children.length ? this.props.children.length : 1;
    if (this.state.activeIndex === len) {
      this.doTransition(0, 0);
    }
  }
  startAutoPlay(props) {
    const obj = this.swipeItems.children[0];
    const child = props.children;
    const value = props.direction === 'vertical' ? obj.offsetHeight : obj.offsetWidth;
    const parent = this.swipeItems.parentNode;
    const wrapVal = props.direction === 'vertical' ? parent.offsetHeight : parent.offsetWidth;
    const len = child.length ? child.length : 1;
    if (child.length === 0 || wrapVal > len * value) {
      return;
    }
    this.moveInterval = setInterval(() => {
      const newLocal = this.state.activeIndex;
      let activeIndex = newLocal;
      const maxLength = props.children.length ? props.children.length : 1; // 解决存在一个子元素的问题
      const dom = this.swipeItems;
      activeIndex += 1;
      if (props.continuous) {
        const val = props.direction === 'vertical' ? dom.children[0].offsetHeight : dom.children[0].offsetWidth;

        if (-activeIndex <= -maxLength * val) {
          activeIndex = 0;
        }

        this.doTransition(activeIndex, 0);
      } else {
        if (activeIndex > maxLength) {
          activeIndex = 0;
        }

        this.doTransition(activeIndex, props.speed);
      }
    }, props.continuous ? 30 : this.props.timer);
  }
  // 是否复制
  parseItems(props) {
    let items = [];
    const obj = this.swipeItems.children[0];
    const child = props.children;
    const val = props.direction === 'vertical' ? obj.offsetHeight : obj.offsetWidth;
    const parent = this.swipeItems.parentNode;
    const wrapVal = props.direction === 'vertical' ? parent.offsetHeight : parent.offsetWidth;
    const len = child.length ? child.length : 1;
    if (child.length === 0) {
      return;
    }
    if (wrapVal < len * val) {
      items = [].concat(child, child);
    } else {
      items = [].concat(child);
    }
    const newItems = this.newCreateData(items);
    this.setState({
      items: newItems,
    });
  }
  // 创建子元素
  newCreateData(items) {
    const { props } = this;
    return Children.map(items, (element, index) => {
      return cloneElement(element, {
        key: index,
        className: classnames({
          [`${props.prefixCls}-${props.direction}-item`]: true,
          [element.props.className]: !!element.props.className,
        }),
      });
    });
  }
  doTransition(index, duration) {
    const dom = this.swipeItems;
    const domChild = dom.children[index];
    let y = 0;
    let x = 0;
    if (this.props.direction === 'vertical') {
      y = this.props.continuous ? -index : (-index * domChild.offsetHeight);
    } else if (this.props.direction === 'landscape') {
      x = this.props.continuous ? -index : (-index * domChild.offsetWidth);
    }

    dom.style.webkitTransitionDuration = `${duration}ms`;
    dom.style.transitionDuration = `${duration}ms`;
    dom.style.webkitTransform = `translate3d(${x}px, ${y}px, 0)`;
    dom.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    this.setState({
      activeIndex: index,
    });
  }
  render() {
    const {
      className, direction,
    } = this.props;
    let { prefixCls } = this.props;

    prefixCls = `${prefixCls}-${direction}`;

    const classes = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
    });
    return (
      <div className={classes}>
        <div
          className={`${prefixCls}-wrap`}
          ref={(ele) => { this.swipeItems = ele; }}
        >
          { this.state.items }
        </div>

      </div>
    );
  }
}

Index.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  speed: PropTypes.number,
  activeIndex: PropTypes.number,
  continuous: PropTypes.bool,
  timer: PropTypes.number,
  direction: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Index.defaultProps = {
  prefixCls: 'iyb-marquee',
  className: '',
  speed: 300, // 动画完成时间
  activeIndex: 0, // 位置
  continuous: false, // 连续滚动还是间接滚动 默认间接滚动false
  timer: 2000, // continuous为flase才生效
  direction: 'vertical', // 方向 是垂直还是横向.vertical landscape
  children: [],
};

export default Index;
