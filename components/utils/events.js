export default {
  /**
   * 元素绑定事件
   * @param {object}   el        目标元素
   * @param {string}   type      事件类型
   * @param {function} callback  处理函数
   */
  on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      el.attachEvent(`on ${type}`, () => {
        callback.call(el);
      });
    }
  },
  /**
   * 元素删除事件
   * @param {object}   el        目标元素
   * @param {string}   type      事件类型
   * @param {function} callback  处理函数
   */
  off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      el.detachEvent(`off ${type}`, callback);
    }
  },
  once(el, type, callback) {
    const typeArray = type.split(' ');
    const recursiveFunction = (e) => {
      e.target.removeEventListener(e.type, recursiveFunction);
      return callback(e);
    };

    for (let i = typeArray.length - 1; i >= 0; i -= 1) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
};
