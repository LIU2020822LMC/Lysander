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
    {
      title: "《肖申克的救赎》",
      imgUrl:
        "https://img.doooor.com/img/forum/201706/23/022953vo9rjkz969mjroek.jpg",
      movieUrl: "https://www.4kvm.pro/movies/xskdjs",
    },
    {
      title: "《霸王别姬》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
      movieUrl: "https://www.4kvm.pro/movies/bwbj",
    },
    {
      title: "《阿甘正传》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp",
      movieUrl: "https://www.4kvm.pro/movies/agzz",
    },
    {
      title: "《泰坦尼克号》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.webp",
      movieUrl: "https://www.4kvm.pro/movies/ttnkh",
    },
    {
      title: "《千与千寻》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.webp",
      movieUrl: "https://4k-av.com/movie/005222-spirited-away/",
    },
    {
      title: "《美丽人生》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.webp",
      movieUrl: "https://www.ixkw2.cc/play/30862/1.html",
    },
    {
      title: "《这个杀手不太冷》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913554676.webp",
      movieUrl: "https://www.4kvm.pro/movies/zgsxbtl",
    },
    {
      title: "《星际穿越》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
      movieUrl: "https://www.4kvm.pro/movies/xjcy",
    },
    {
      title: "《盗梦空间》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p513344864.webp",
      movieUrl: "https://www.4kvm.pro/movies/dmkj",
    },
    {
      title: "《楚门的世界》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.webp",
      movieUrl: "https://www.4kvm.pro/movies/chumdsj",
    },
    {
      title: "《辛德勒的名单》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.webp",
      movieUrl: "https://www.4kvm.pro/movies/xdlmd",
    },
    {
      title: "《忠犬八公的故事》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2587099240.webp",
      movieUrl: "https://www.4kvm.pro/movies/zqbgdgs",
    },
    {
      title: "《海上钢琴师》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2914698334.webp",
      movieUrl: "https://www.4kvm.pro/movies/hsgqs",
    },
    {
      title: "《三傻大闹宝莱坞》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p579729551.webp",
      movieUrl: "https://www.4kvm.pro/movies/sansddblw",
    },
    {
      title: "《放牛班的春天》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884280708.webp",
      movieUrl: "https://www.4kvm.pro/movies/fnbdct",
    },
    {
      title: "《机器人总动员》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.webp",
      movieUrl:
        "https://www.4kvm.pro/movies/%e6%9c%ba%e5%99%a8%e4%ba%ba%e6%80%bb%e5%8a%a8%e5%91%98",
    },
    {
      title: "《疯狂动物城》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.webp",
      movieUrl: "https://www.4kvm.pro/movies/fkdwc",
    },
    {
      title: "《无间道》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2564556863.webp",
      movieUrl: "https://www.4kvm.pro/movies/wujd",
    },
    {
      title: "《控方证人》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2911817201.webp",
      movieUrl: "https://www.4kvm.pro/movies/kfzr",
    },
    {
      title: "《大话西游之大圣娶亲》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.webp",
      movieUrl: "https://www.4kvm.pro/movies/dhxyzdsqq",
    },
    {
      title: "《熔炉》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.webp",
      movieUrl: "https://www.4kvm.pro/movies/%e7%86%94%e7%82%89",
    },
    {
      title: "《教父》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p616779645.webp",
      movieUrl: "https://www.4kvm.pro/movies/jf",
    },
    {
      title: "《触不可及》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.webp",
      movieUrl: "https://www.4kvm.pro/movies/cbkj",
    },
    {
      title: "《寻梦环游记》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2505426431.webp",
      movieUrl: "https://www.4kvm.pro/movies/xunfhyj",
    },
    {
      title: "《当幸福来敲门》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614359276.webp",
      movieUrl: "https://www.4kvm.pro/movies/dxflcm",
    },
    {
      title: "《末代皇帝》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452089833.webp",
      movieUrl: "https://www.4kvm.pro/movies/mdhd",
    },
    {
      title: "《龙猫》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.webp",
      movieUrl: "https://www.nanhuyt.com/v/3316-3-1.html",
    },
    {
      title: "《哈利·波特与魔法石》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2913781448.webp",
      movieUrl: "https://www.kanmaoyy.com/dianying/230866-1-1.html",
    },
    {
      title: "《怦然心动》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501177648.webp",
      movieUrl: "https://www.4kvm.pro/movies/penranxd",
    },
    {
      title: "《活着》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2597919477.webp",
      movieUrl: "https://www.4kvm.pro/movies/hz-3",
    },
    {
      title: "《蝙蝠侠：黑暗骑士》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.webp",
      movieUrl: "https://www.mjzj.me/vodplay/8803-1-1.html",
    },
    {
      title: "《指环王3:王者无敌》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2642829472.webp",
      movieUrl: "https://www.4kvm.pro/movies/zhw3",
    },
    {
      title: "《我不是药神》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.webp",
      movieUrl: "https://www.4kvm.pro/movies/wbshiys",
    },
    {
      title: "《乱世佳人》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1963126880.webp",
      movieUrl: "https://www.cupfoxw.com/movies/luanshijiaren-1-1/",
    },
    {
      title: "《飞屋环游记》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553594918.webp",
      movieUrl: "https://www.4kvm.pro/movies/fwmyj",
    },
    {
      title: "《素媛》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.webp",
      movieUrl: "https://www.4kvm.pro/movies/sy",
    },
    {
      title: "《哈尔的移动城堡》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2907583906.webp",
      movieUrl: "https://www.4kvm.pro/movies/herdydcb",
    },
    {
      title: "《让子弹飞》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.webp",
      movieUrl: "https://vidhub1.cc/vodplay/21843-1-1.html",
    },
    {
      title: "《十二怒汉》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.webp",
      movieUrl: "https://vidhub1.cc/vodplay/159844-1-1.html",
    },
    {
      title: "《何以为家》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555295759.webp",
      movieUrl: "https://www.4kvm.pro/movies/hywj",
    },
    {
      title: "《海蒂和爷爷》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2554525534.webp",
      movieUrl: "https://vidhub1.cc/vodplay/152375-1-1.html",
    },
    {
      title: "《猫鼠游戏》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p453924541.webp",
      movieUrl: "https://www.4kvm.pro/movies/moshiyx",
    },
    {
      title: "《摔跤吧！爸爸》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2401676338.webp",
      movieUrl: "https://www.4kvm.pro/movies/sjbbb",
    },
    {
      title: "《天空之城》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892409201.webp",
      movieUrl: "https://www.4kvm.pro/movies/tkzc",
    },
    {
      title: "《鬼子来了》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553104888.webp",
      movieUrl: "https://vidhub1.cc/vodplay/159842-1-1.html",
    },
    {
      title: "《少年派的奇幻漂流》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.webp",
      movieUrl: "https://www.4kvm.pro/movies/snpplj",
    },
    {
      title: "《钢琴家》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1381339291.webp",
      movieUrl: "https://www.4kvm.pro/movies/gangqj",
    },
    {
      title: "《指环王2:双塔奇兵》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2640236255.webp",
      movieUrl: "https://www.4kvm.pro/movies/zhw2",
    },
    {
      title: "《大话西游之月光宝盒》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561721372.webp",
      movieUrl: "https://www.4kvm.pro/movies/dhxiyouygbh",
    },
    {
      title: "《闻香识女人》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550757929.webp",
      movieUrl: "https://www.4kvm.pro/movies/wenssnr",
    },
    {
      title: "《死亡诗社》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575465690.webp",
      movieUrl: "https://www.4kvm.pro/movies/swss",
    },
    {
      title: "《绿皮书》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2531065411.webp",
      movieUrl: "https://www.mjzj.me/vodplay/35412-1-1.html",
    },
    {
      title: "《大闹天宫》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2184505167.webp",
      movieUrl:
        "https://tv.cctv.com/2021/07/22/VIDE8Goquir89p7HeXog7CIe210722.shtml",
    },
    {
      title: "《罗马假日》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.webp",
      movieUrl: "https://www.daquan9.cc/play/78110-1-1.html",
    },
    {
      title: "《黑客帝国》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp",
      movieUrl: "https://www.4kvm.pro/movies/heikdg",
    },
    {
      title: "《指环王1:护戒使者》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2197698335.webp",
      movieUrl: "https://www.4kvm.pro/movies/zhw1",
    },
    {
      title: "《教父2》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2194138787.webp",
      movieUrl: "https://www.4kvm.pro/movies/jf2",
    },
    {
      title: "《天堂电影院》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2653054340.webp",
      movieUrl: "https://www.jibeny.com/play/22217-1-1.html",
    },
    {
      title: "《狮子王》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p726659067.webp",
      movieUrl: "https://www.4kvm.pro/movies/szw",
    },
    {
      title: "《辩护人》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.webp",
      movieUrl: "https://www.4kvm.pro/movies/bhr",
    },
    {
      title: "《饮食男女》",
      imgUrl:
        "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910899751.webp",
      movieUrl: "https://www.kanmaoyy.com/dianying/228817-1-1.html",
    },
    {
      title: "《搏击俱乐部》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910931622.webp",
      movieUrl: "https://www.4kvm.pro/movies/bjjlb",
    },
    {
      title: "《本杰明·巴顿奇事》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192535722.webp",
      movieUrl: "https://www.4kvm.pro/movies/bjmbdqs",
    },
    {
      title: "《美丽心灵》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1665997400.webp",
      movieUrl:
        "https://www.4kvm.pro/movies/%e7%be%8e%e4%b8%bd%e5%bf%83%e7%81%b5",
    },
    {
      title: "《穿条纹睡衣的男孩》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1473670352.webp",
      movieUrl: "https://libvioo.com/livodplay/40458-3-1.html",
    },
    {
      title: "《窃听风暴》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1808872109.webp",
      movieUrl: "https://www.4kvm.pro/movies/qtfb",
    },
    {
      title: "《情书》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2648230660.webp",
      movieUrl: "https://www.4kvm.pro/movies/qs",
    },
    {
      title: "《两杆大烟枪》",
      imgUrl:
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.webp",
      movieUrl: "https://www.4kvm.pro/movies/lgdyq",
    },
    {
      title: "《音乐之声》",
      imgUrl:
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453788577.webp",
      movieUrl: "https://www.bilibili.com/bangumi/play/ep284878",
    },
    {
      title: "《看不见的客人》",
      imgUrl:
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.webp",
      movieUrl: "https://www.4kvm.pro/movies/kanujdkr",
    },
  ];
  const randomIndex = Math.floor(Math.random() * MovieValue.length);
  const randomMovieValue = MovieValue[randomIndex];
  // 设置新窗口电影与图片的位置
  const randomMovie = `<div class="flex column"><a href="${randomMovieValue.movieUrl}" \
  style="text-decoration: none;color:rgb(20, 20, 107);" target="_blank">${randomMovieValue.title}</a>\
  <a href="${randomMovieValue.movieUrl}" target="_blank">\
  <img src="${randomMovieValue.imgUrl}" style="height: 100px;width: 100px;margin-top: 5px;margin-left: 5px;" class="imgfangda"></a></div>`;
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
function ClickOnLink() {
  // 在新窗口中打开随机的 URL 地址
  const randomMovielink = randomMovie.movieUrl;
  (wlocation.href = randomMovielink), "_blank";
}
