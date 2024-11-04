//鼠标移动特效
(function () {
  var colors = ["#FF0080", "#002FA7", "#FFFF00"];
  characters = ["❄", "♥"];
  elementGroup = [];
  //定义元素类
  class Element {
    //构造函数
    constructor() {
      num = Math.floor(Math.random() * characters.length);
      this.character = characters[num];
      this.lifeSpan = 120;
      this.initialStyles = {
        position: "fixed",
        top: "0",
        display: "block",
        pointerEvents: "none",
        "z-index": "10000000",
        fontSize: "25px",
        "will-change": "transform",
        color: "#000000",
      };
      //初始化
      this.init = function (x, y, color) {
        this.velocity = {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1,
        };
        this.position = { x: x - 10, y: y - 20 };
        this.initialStyles.color = color;
        this.element = document.createElement("span");
        this.element.innerHTML = this.character;
        ApplyStyle(this.element, this.initialStyles);
        this.update();
        document.body.appendChild(this.element);
      };
      //更新
      this.update = function () {
        //移动，缩放
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
        this.element.style.transform =
          "translate3d(" +
          this.position.x +
          "px," +
          this.position.y +
          "px,0) scale(" +
          this.lifeSpan / 120 +
          ")";
      };
      //销毁
      this.die = function () {
        this.element.parentNode.removeChild(this.element);
      };
    }
  }

  AddListener();
  //循环
  setInterval(function () {
    Rander();
  }, 1000 / 60);
  //添加事件监听器
  function AddListener() {
    //当前事件对象会作为第一个参数传入函数
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", Touch);
    document.addEventListener("touchstart", Touch);
  }
  //逐个渲染
  function Rander() {
    for (var i = 0; i < elementGroup.length; i++) {
      elementGroup[i].update();
      if (elementGroup[i].lifeSpan < 0) {
        elementGroup[i].die();
        elementGroup.splice(i, 1);
      }
    }
  }
  //鼠标移动事件函数
  function onMouseMove(t) {
    num = Math.floor(Math.random() * colors.length);
    CreateElement(t.clientX, t.clientY, colors[num]);
  }
  //添加元素
  function CreateElement(x, y, color) {
    var e = new Element();
    e.init(x, y, color);
    elementGroup.push(e);
  }
  //调整元素属性
  function ApplyStyle(element, style) {
    for (var i in style) {
      element.style[i] = style[i];
    }
  }
  //触摸事件函数
  function Touch(t) {
    if (t.touches.length > 0) {
      for (var i = 0; i < t.touches.length; i++) {
        num = Math.floor(Math.random() * r.length);
        s(t.touches[i].clientX, t.touches[i].clientY, r[num]);
      }
    }
  }
})();
//电影按钮功能函数
function Movierecommend() {
  //显示随机电影
  const MovieValue = [
    "《肖申克的救赎》",
    "《霸王别姬》",
    "《阿甘正传》",
    "《泰坦尼克号》",
    "《千与千寻》",
    "《美丽人生》",
    "《这个杀手不太冷》",
    "《星际穿越》",
    "《楚门的世界》",
    "《辛德勒的名单》 ",
    "《忠犬八公的故事》",
    "《海上钢琴师》 ",
    "《三傻大闹宝莱坞》",
    "《放牛班的春天》",
    "《机器人总动员》",
    "《疯狂动物城》",
    "《无间道》",
    "《控方证人》",
    "《大话西游之大圣娶亲》",
    "《熔炉》",
    "《教父》",
    "《触不可及》",
    "《寻梦环游记》",
    "《当幸福来敲门》",
    "《末代皇帝》",
    "《龙猫》",
    "《哈利·波特与魔法石》",
    "《怦然心动》",
    "《活着》",
    "《蝙蝠侠：黑暗骑士》",
  ];
  const randomIndex = Math.floor(Math.random() * MovieValue.length);
  const randomMovie = MovieValue[randomIndex];
  document.getElementById("randomValue").innerHTML = randomMovie; // 显示随机值
  // 显示弹出框
  document.querySelector(".popup").style.display = "block";
}
function hidePopup() {
  document.querySelector(".popup").style.display = "none";
}
function reselect() {
  Movierecommend();
}
