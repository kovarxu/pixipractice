// game state manager

function NOOP () {}

// 状态栈
var stack = [];

var stack_init = {
  leave: NOOP
}

stack.push(stack_init);

var gameState = {};

// 状态切换
gameState.switch = function (to, ...arg) {
  return pushState(0, to, ...arg);
}

// 新状态入栈
gameState.push = function (to, ...arg) {
  return pushState(1, to, ...arg);
}

// 活动状态出栈
gameState.pop = function (noop, ...arg) {
  if (stack.length < 2) {
    throw "Error in gameState: not enough states."
  }
  var pre = stack.pop();
  ;(pre.leave || NOOP)(...arg);
  var to = stack[stack.length - 1];
  return (to.resume || NOOP)(pre, ...arg);
}

function pushState (offset, to, ...arg) {
  var pre = stack[stack.length - 1];
  // 任何状态的init方法只被执行一次
  ;(to.init || NOOP)(...arg);
  to.init = undefined;
  
  ;(pre.leave || NOOP)(...arg);
  if (offset === 0) {
    stack[stack.length - 1] = to;
  } else if (offset === 1) {
    stack.push(to);
  }
  
  return (to.enter || NOOP)(...arg)
}

// 获取状态栈的浅拷贝副本
gameState.getStack = function () {
  return stack.slice();
}

export default gameState