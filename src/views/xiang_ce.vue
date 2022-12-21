<template>
  <audio autoplay auto id="vd1" @ended="overAudio" @pause="onPause" @play="onPlay" >
    <source :src="my_src" ref="audio"/>
  </audio>
  <div class="bigbox">
    <div class="yinyue yinyue1" id="disc" ref="bt_yinyue" @click="dingShi" @touchmove="dingShi">
      <span class="music1" @click="shenSuo">
        <div class="watch">
          <!-- <Icon type="md-disc" size="40" color="#9970a5" class="icoo"/> -->
        </div>
      </span>
      <div class="kongjian">
        <span @click="topp">
          <Icon type="md-rewind" size="30" style="height:30px;" />
        </span>
        <Icon type="md-pause" size="30" style="height:30px;" v-if="flag" @click="boFang" />
        <Icon type="md-play" size="30" style="height:30px;" v-else @click="boFang" />
        <span @click="bott">
          <Icon type="md-fastforward" size="30" style="height:30px;" />
        </span>
        <span>
          <Icon type="md-menu" size="30" style="height:30px;" @click="musciList" />
        </span>
      </div>
      <div class="music_list">
        <ul class="music_index">
          <li v-for="(item ,index) in music_name" :key="index" @click="bofang_index(index)">
            {{item}}
            <van-icon name="success" class="music_lodd" color="#1989fa" size="20" style="margin-top:8px" />
          </li>
        </ul>
      </div>
    </div>
    <div class="wenan">
      <van-swipe :width="390" :show-indicators="false" :autoplay="4000">
        <van-swipe-item>
          <van-icon name="smile-comment" size="45" />
          其实真的爱一个人 是不会嫌弃他是扫大街还是工地搬砖 只有心疼
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="video" size="45" />
          一路跌跌撞撞，原来一个人笨手笨脚也可以走的很远
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="shop-collect" size="45" />
          顺其自然不一定会有奇迹，刻意成长才一定会有改变
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="wap-home" size="45" />
          晚霞虽好昙花现，纵有万情也不然
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="photo" size="45" />
          小时候画在手腕上的表永远不会走，却带走了我最美好的时光
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="gift-card" size="45" />
          有一种遗憾，是在错误的时间遇上对的人
        </van-swipe-item>
        <van-swipe-item>
          <van-icon name="column" size="45" />
          抓不住的东西，连伸手都是多余
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="lan">
      <Modal v-model="modal" title="我看你选哪一个" @on-ok="ok" @on-cancel="cancel">
        <p>想点微信？没门，不给</p>
      </Modal>
      <span class="fenxiang" @click="modal = true">
        <van-icon name="wechat" badge="99+" size="1.8rem" />
      </span>
      <Modal v-model="modal_aixin" title="点爱心真是个不错的选择">
        <p>别让爱把自己变成幼稚鬼 那样会讨人厌的</p>
      </Modal>
      <Modal v-model="modal_aixin_1" title="呜呜呜~~~">
        <p>为什么要取消爱心😭😭😭</p>
      </Modal>
      <span class="fenxiang">
        <van-icon name="like" size="1.8rem" @click="aixin" />
      </span>
      <Modal v-model="shou_cang" title="随手收藏是个好习惯">
        <p>都说秋天适合思念，但更适合见面所以我们什么时候见一面？</p>
      </Modal>
      <span class="fenxiang">
        <van-icon name="star" size="1.8rem" @click="shouCang" />
      </span>
    </div>
  </div>
  <h1>双月湾</h1>
  <div class="xiangce_box">
        <Card class="card" v-for=" (i_shuang,index1) in shuangyuewan_img_arr" :key="index1">
          <div class="card_div">
            <img v-lazy="shuangyuewan_img_arr[index1]" alt="" @click="img_yulan(this.shuangyuewan_img_arr,index1)">
            <div class="card_text">
              {{ shuangyuewan_text_arr[index1] }}
            </div>
          </div>
        </Card>
  </div>
  <h1>娱乐</h1>
  <div class="xiangce_box">
    <Card class="card" v-for=" (i_chu,index1) in chuqu_img_arr" :key="index1">
      <div class="card_div">
        <img v-lazy="chuqu_img_arr[index1]" alt="" @click="img_yulan(this.chuqu_img_arr,index1)">
        <div class="card_text">
          {{ chuqu_img_text[index1] }}
        </div>
      </div>
    </Card>
  </div>
  <h1>school</h1>
  <div class="xiangce_box">
    <Card class="card" v-for=" (i_xue,index1) in xuexiaobiye_img_arr" :key="index1">
      <div class="card_div">
        <img v-lazy="xuexiaobiye_img_arr[index1]" alt="" @click="img_yulan(this.xuexiaobiye_img_arr,index1)">
        <div class="card_text">
          {{ xuexiaobiye_text[index1] }}
        </div>
      </div>
    </Card>
  </div>
  <h1>其他</h1>
  <div class="xiangce_box">
    <Card class="card" v-for=" (i_xue,index1) in qita_img_arr" :key="index1">
      <div class="card_div">
        <img v-lazy="qita_img_arr[index1]" alt="" @click="img_yulan(this.qita_img_arr,index1)">
        <div class="card_text">
          {{ qita_text[index1] }}
        </div>
      </div>
    </Card>
  </div>
  <h2 style="float:right;margin: 20px 50px 0 0;">——KK</h2>
  <div style="width: 100%; height: 40px; margin-top:60px;opacity: .5;">
    <!-- <h3 style="transform: translateX(8%);">------------------------------------------</h3> -->
  </div>
</template>

<script>
// import IMG_1555 from "../assets/music/IMG_1555.mp3"
// import video from "../assets/music/video.mp3"
// import blue from "../assets/music/blue.mp3"
// import chunyinyue from "../assets/music/chunyinyue.mp3"
// import fengzhongdexin from "../assets/music/fengzhongdexin.mp3"
// import kuchazi from "../assets/music/kuchazi.mp3"
// import luoshnegmen from "../assets/music/luoshnegmen.mp3"
// import nalidoushi from "../assets/music/nalidoushi.mp3"
// import tongkuai from "../assets/music/tongkuai.mp3"
// import wanfeng from "../assets/music/wanfeng.mp3"
// import Inst from "../assets/music/Inst.mp3"
// import dagai from "../assets/music/dagai.mp3"
// import daoshu from "../assets/music/daoshu.mp3"
// import geqian from "../assets/music/geqian.ogg"
// import huanghunzhishi from "../assets/music/huanghunzhishi.ogg"
// import longjuanfeng from "../assets/music/longjuanfeng.ogg"
// import wanfengdejie from "../assets/music/wanfengdejie.ogg"
// import yunyayu from "../assets/music/yunyayu.ogg"
import { showImagePreview } from 'vant'
export default {
  name: "myXiangCe",
  data() {
    return {
      flag: true,
      aixin_ico: true,
      shoucang_ico: true,
      musciList_shenSuo: false,
      music_data: [
        require("../assets/music/shuolezaijian.mp3"),
        require("../assets/music/IMG_1555.mp3"),
        require("../assets/music/video.mp3"),
        require("../assets/music/blue.mp3"),
        require("../assets/music/chunyinyue.mp3"),
        require("../assets/music/fengzhongdexin.mp3"),
        require("../assets/music/kuchazi.mp3"),
        require("../assets/music/luoshnegmen.mp3"),
        require("../assets/music/nalidoushi.mp3"),
        require("../assets/music/tongkuai.mp3"),
        require("../assets/music/wanfeng.mp3"),
        require("../assets/music/Inst.mp3"),
        require("../assets/music/dagai.mp3"),
        require("../assets/music/daoshu.mp3"),
        require("../assets/music/geqian.mp3"),
        require("../assets/music/huanghunzhishi.mp3"),
        require("../assets/music/longjuanfeng.mp3"),
        require("../assets/music/wanfengdejie.mp3"),
        require("../assets/music/yunyayu.mp3"),
      ],
      music_name: [
        "说了再见 - 周杰伦",
        "轻快的音乐 - 未知",
        "该释怀了 - JJJ",
        "blue - bbbluelee",
        "纯音乐 - 未知",
        "写在风中的信 - 鲸鱼",
        "苦茶子 - Starling8/MoreLearn",
        "罗生门 - 梨冻紧/Wiz_H张子豪",
        "哪里都是你 - 队长",
        "痛快 - Aioz/董唧唧",
        "晚风 - 7copy/BT07",
        "Inst - Um",
        "たぶん(大概) - YOASBI",
        "倒数 - WF_Liang",
        "搁浅 - 周杰伦",
        "黄昏之时 - RADWIMPS",
        "龙卷风 - 周杰伦",
        "一起吹过晚风的街 - 聂思诗",
        "云压雨 - 鱼子chloe"
      ],
      modal: false,
      modal_aixin: false,
      modal_aixin_1: false,
      shou_cang: false,
      shuangyuewan_img_arr: [
        require('../assets/img/hsuangyuewan/IMG_1075.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1100.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1077.jpg'),
        require('../assets/img/hsuangyuewan/IMG_0003.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1069.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1074.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1076.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1077.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1078.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1079.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1080.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1086.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1087.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1088.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1089.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1099.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1090.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1091.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1092.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1093.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1095.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1096.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1097.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1098.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1101.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1102.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1103.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1104.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1106.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1108.jpg'),
        require('../assets/img/hsuangyuewan/IMG_1114.jpg'),
      ],
      shuangyuewan_text_arr: [
        '遗憾吗 自己舍不得踩的油门 却被别人暴力驾驶',
        '一个非常特殊的拍石子角度',
        '总有人成功，总有人失败，你为什么不做成功的那一方',
        '去趟厦门吧！凌晨四点的山和凌晨四点的海总要去一个吧',
        '渐渐的喜欢上了现在的生活，没有惊喜，也没有意外',
        '这里面有一个憨批🐏',
        '连崩溃都要考虑后果的人，是懂事还是无能无力',
        'φ(*￣0￣)',
        '🚁',
        '放大了不能滑动，好可惜啊',
        '寻思着可以有日落看看，大意了',
        '第一次在夜里的海边散步',
        '生猛海鲜~',
        '跟阿伟偷偷跑出来看日出',
        '天气不好，日出没看成（；´д｀）ゞ',
        '一个好看的贝壳',
        '我的日出哇~',
        '想去那边的那个小岛',
        '这才是海的颜色，那边下好大雨哎！',
        '捡贝壳ing...',
        '人生漫长，唯有两件事需要选择，一条路和一个人',
        '有意义的人等再久都不算久',
        '雨后的太阳',
        '见过花就好了，又何必在乎花属于谁呢',
        '生怕它突然下雨',
        '照片终究还是照片',
        '阿伟的新家',
        '这个阿伟不知道在看啥(偷偷看妹子)',
        '偷跑出来拍的帅伟',
        '这个是憨批创作者(某K)',
        '(^_-)db(-_^)',
      ],
      chuqu_img_arr: [
        require('../assets/img/chuqu/IMG_0050.jpg'),
        require('../assets/img/chuqu/IMG_0078.jpg'),
        require('../assets/img/chuqu/IMG_0084.jpg'),
        require('../assets/img/chuqu/IMG_0110.jpg'),
        require('../assets/img/chuqu/IMG_0127.jpg'),
        require('../assets/img/chuqu/IMG_0222.jpg'),
        require('../assets/img/chuqu/IMG_0223.jpg'),
        require('../assets/img/chuqu/IMG_0225.jpg'),
        require('../assets/img/chuqu/IMG_0227.jpg'),
        require('../assets/img/chuqu/IMG_0228.jpg'),
        require('../assets/img/chuqu/IMG_0229.jpg'),
        require('../assets/img/chuqu/IMG_0532.jpg'),
        require('../assets/img/chuqu/IMG_0533.jpg'),
        require('../assets/img/chuqu/IMG_0539.jpg'),
        require('../assets/img/chuqu/IMG_0541.jpg'),
        require('../assets/img/chuqu/IMG_0544.jpg'),
      ],
      chuqu_img_text: [
        '这是一张搞笑表情包',
        '其实这是早上拍滴',
        '这个也是早上拍的',
        '一只只因',
        '在火堆旁怎么会感觉不到热呢？',
        '我们难过的从来不是一无所有，而是差一点点',
        '有时候盯着一个地方发呆好久，回过神来才发现其实自己看的不是风景',
        '这是第一次出去吃火锅喔',
        '这是第一次出去吃烤肉╰(￣ω￣ｏ)',
        '🚵‍♀️',
        '在车水马龙的人海中，拾着曾经那些早已荒芜的梦',
        '(〃￣︶￣)人(￣︶￣〃)',
        '有人夜里看海，以心为灯，眼前精彩呈现',
        '小时候大家都是梦想家，长大后梦醒了，只剩想家了',
        '已经不记得这里是哪里了',
        '你是生活的作者，结局在于你想怎么书写'
      ],
      xuexiaobiye_img_arr: [
        require('../assets/img/xuexiaobiye/IMG_0043.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0045.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0131.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0155.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0161.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0280.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0855.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0874.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0880.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0897.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0899.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0913.jpg'),
        require('../assets/img/xuexiaobiye/IMG_0953.jpg'),
        require('../assets/img/xuexiaobiye/IMG_1133.jpg'),
        require('../assets/img/xuexiaobiye/IMG_1161.jpg'),
        require('../assets/img/xuexiaobiye/IMG_1167.jpg'),
      ],
      xuexiaobiye_text: [
        '这个好像是唯一一张宿舍照了',
        '这是三个憨批',
        '(oﾟvﾟ)ノ',
        '这个憨批富豪，偷偷睡觉',
        '阿伟的迷之笑容',
        '这个是某🐏生日抓拍的，关灯的一瞬间抓拍到滴，很神奇，纯原图片',
        '这不是阿戈嘛，好帅哇',
        '这美好的校园操场夜生活',
        '又在偷偷跟妹子聊天是吧',
        '经常偷偷来图书馆卷舍友',
        '光照在你身上，你却盯着自己的影子看',
        '这个....',
        '太开心了，刷到了某🐏的抖音作品',
        '',
        '准备毕业咯~~~',
        'w(ﾟДﾟ)w'
      ],
      qita_img_arr: [
        require('../assets/img/qita/IMG_0243.jpg'),
        require('../assets/img/qita/IMG_0613.jpg'),
        require('../assets/img/qita/IMG_1259.jpg'),
        require('../assets/img/qita/IMG_1296.jpg'),
        require('../assets/img/kaifa.jpg'),
      ],
      qita_text: [
        '故事总会有结局，爱情终究会遗憾，遗憾也会讲完，过后又是一个新故事',
        '端游第一次光明正大吃鸡吃鸡嘿嘿',
        '世界上最尴尬的事，别人根本没把你当回事，你自己还在那里多愁善感',
        '被爱的前提是足够优秀，当然你很废物也可以被爱，但你不能因为已经被爱从而继续废物',
        '最后附上我的发呆抓狂时刻'
      ],
      t: '',
      my_src: require("../assets/music/chunyinyue.mp3"),
      title: ['双月湾', '嗨嗨嗨','school','其他']
    }
  },
  methods: {
    //伸缩按钮
    shenSuo() {
      let disc = this.$refs.bt_yinyue
      console.log()
      if (disc.offsetWidth == 30) {
        let music1 = document.querySelector(".music1")
        disc.classList.toggle("big")
        disc.classList.add("yuanjiao")
        disc.classList.remove("yinyue1")
        music1.classList.toggle("big1")
        // console.log(yinyue)
      }
    },
    //开始播放后的回调函数
    onPlay() {
      let fff = document.querySelector("#vd1").firstElementChild
      console.log(fff)
      console.log("开始播放"+fff.src)
      this.flag = true
    },
    //暂停播放的回调函数
    onPause() {
      console.log("暂停播放")
      this.flag = false
    },
    //播放完毕下一首
    overAudio() {
      console.log("结束播放")
      let index = this.music_data.indexOf(this.my_src)
      console.log("index: " + index)
      index = index + 1
      if (index >= this.music_data.length) {
        index = 0
      }
      this.my_src = this.music_data[index]
      let audio1 = document.querySelector("#vd1");
      audio1.load();
      this.bofang_index(index)
    },
    //播放按钮
    boFang() {
      let audio1 = document.querySelector("#vd1");
      if (audio1.paused) {
        audio1.play();
      } else {
        audio1.pause();
      }
    },
    //上一首
    topp() {
      console.log("上一首")
      let index = this.music_data.indexOf(this.my_src)
      index -= 1
      if (index < 0) {
        index = this.music_data.length - 1
      }
      this.my_src = this.music_data[index]
      let audio1 = document.querySelector("#vd1");
      audio1.load();
      this.bofang_index(index)
    },
    //下一首
    bott() {
      console.log("下一首")
      let index = this.music_data.indexOf(this.my_src)
      console.log("index: " + index)
      index = index + 1
      if (index >= this.music_data.length) {
        index = 0
      }
      this.my_src = this.music_data[index]
      let audio1 = document.querySelector("#vd1");
      audio1.load();
      this.bofang_index(index)
    },
    //自动收起播放器
    dingShi() {
      //判断上一次定时器是否执行完
      if (this.t) {
        clearTimeout(this.t)
      }
      // let disc = this.$refs.bt_yinyue.offsetWidth
      this.t = setTimeout(() => {
          // if (disc == 30) {
            let disc = document.querySelector("#disc")
            let music1 = document.querySelector(".music1")
            disc.classList.toggle("big")
            disc.classList.add("yinyue1")
            music1.classList.toggle("big1")
          disc.classList.remove("music_list_big")
          this.musciList_shenSuo = false
          // }
      },3000)
    },
    //组件库弹出提示
    ok() {
      this.$Message.info('点确定就对了嘛~~~');
    },
    //组件库弹出提示
    cancel() {
      this.$Message.info('你居然不点确定，你干嘛哎哟~~~');
    },
    //判断爱心颜色
    aixin(e) {
      if (this.aixin_ico) {
        e.target.style.color = "red"
        this.aixin_ico = false
      } else {
        e.target.style.color = "#515a6e"
        this.aixin_ico = true
      }
      
      if (e.target.style.color == "red") {
        this.modal_aixin = true
      } else {
        this.modal_aixin_1 = true
      }
    },
    //判断收藏颜色
    shouCang(e) {
      if (this.shoucang_ico) {
        e.target.style.color = "#ffcc00"
        this.shoucang_ico = false
      } else {
        e.target.style.color = "#515a6e"
        this.shoucang_ico = true
      }
      if (!this.shoucang_ico) {
        this.shou_cang = true
      }
    },
    //打开收起音乐歌单列表
    musciList() {
      let disc = this.$refs.bt_yinyue
      if (this.musciList_shenSuo) {
        disc.classList.remove("music_list_big")
        this.musciList_shenSuo = false
      } else {
        disc.classList.add("music_list_big")
        this.musciList_shenSuo = true
      }
      
    },
    //判断播放哪一首歌
    bofang_index(index) {
      console.log(index)
      let lis_arr = document.querySelectorAll(`.music_index li`)
      lis_arr.forEach((li) => {
        // li.childNodes[1].classList.toggle("music_lodd")
        li.childNodes[1].style.display = "none"
        li.style.color = "#515a6e"
      })
      let lis = document.querySelector(`.music_index li:nth-of-type(${index + 1})`)
      lis.style.color = "#1989fa"
      console.log(lis.childNodes[1])
      let lis_index = lis.childNodes[1]
      // lis_index.classList.toggle("music_lodd_xian")
      lis_index.style.display = "inline-block"
      this.my_src = this.music_data[index]
      let audio1 = document.querySelector("#vd1");
      audio1.load();
    },
    img_yulan(Arr,index) {
      showImagePreview({
        images: Arr,
        showIndex: false,
        loop: false,
        startPosition: index,
        // overlayStyle: 
      });
    }
  },
  created() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    });
  },
  mounted() {
    let audio1 = document.querySelector("#vd1");
    if (audio1.paused) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    let music_data = this.music_data;
    var index = Math.floor((Math.random() * music_data.length));
    console.log(music_data[index]);
    // let sui_ji_yin_yue = this.$refs.audio
    // console.log(sui_ji_yin_yue);
    this.my_src = music_data[index]
    this.bofang_index(index)
  },
}
</script>

<style lang="less" scoped>
.bigbox {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // top: 10px;
  // background-color: aquamarine;
  // background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
  padding-top: 5px;
  border-radius: 0 0 10px 10px;
  position: relative;
}
.wenan{
  width: 100%;
  transform: translateY(30%);
  height: 100px;
  display: flex;
  justify-content: center;
  // background-color: #fff;
}
.music_list_big {
  height: 200px !important;
}
.music_list {
  width: 100%;
  height: 139px;
  // background-color: #fff;
  border-radius: 0 0 30px 30px;
  backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, 0.12);
}
.music_index {
  width: 100%;
  height: 100%;
  border-radius: 0 0 30px 30px;
  overflow: scroll;
}
.music_index li {
  height: 35px;
  width: 100%;
  // background-color: #fff;
  // align-content: center;
  line-height: 35px;
  // border-bottom: 1px solid #eee;
  padding-left: 20px;
  padding-right: 40px;
}
.music_lodd {
  float: right;
  display: none;
}
.yinyue {
  width: 30px;
  height: 30px;
  // background-color: #fff;
  // box-shadow: 0 0 10px rgb(0,0,0,.4);
  position: relative;
  transition: all .3s;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
  z-index: 890;
}
.yuanjiao {
  border-radius: 30px;
}
.yinyue1 {
    border-radius: 54% 46% 40% 60% / 50% 28% 72% 50%;
    box-shadow: inset 5px 5px 16px rgba(0, 0, 0, 0.5),
      3px 2px 2px rgba(0, 0, 0, 0.3),
      3px 2px 2px rgba(0, 0, 0, 0.05);
    animation: watch 3s linear infinite alternate;
}
.big {
  width: 310px;
  height: 60px;
  // overflow: visible;
}
.big1 {
  width: 60px !important;
  height: 60px !important;
}
.music1 {
    width: 30px;
    height: 30px;
    // background-color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    // border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    
}
.watch {
  width: 45px;
  height: 45px;
  // border: 1px solid #000;
  border-radius: 54% 46% 40% 60% / 50% 28% 72% 50%;
  box-shadow: inset 5px 5px 16px rgba(0, 0, 0, 0.5),
              3px 2px 2px rgba(0, 0, 0, 0.3),
              3px 2px 2px rgba(0, 0, 0, 0.05);
  animation: watch 3s linear infinite alternate;
  background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
}
.kongjian {
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background-color: aqua;
  position: absolute;
  top: 0;
  left: 60px;
  border-radius:0 60px 60px 0;
}

.lan {
  display: flex;
  align-items: center;
  position: absolute;
  top: 62%;
  width: 100%;
  height: 60px;
  // background-color: #fff;
  border-radius: 0 0 10px 10px;
  transform: translateY(28%);
  // background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
}
.fenxiang {
  // background-color: #fff;
  width: 33.33%;
  height: 100%;
  text-align: center;
  line-height: 60px;
  
}
.fenxiang:first-child {
  border-bottom-left-radius: 10px;
  // border-right: 1px solid hsl(313, 44%, 51%);
}
.fenxiang:last-child {
  border-bottom-right-radius: 10px;
  // border-left: 1px solid hsl(313, 44%, 51%);
}
.van-swipe-item {
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  color: #515a6e;
}
.xiangce_box {
  width: 100%;
  column-count: 2;
  column-gap: 1;
  // height: 100%;
  // display: flex;
  // flex-wrap:wrap;
  // justify-content:space-between;
  // height: 105%;
  // background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
  // transform: translateY(-10px);
  padding: 0 23px;
  margin-bottom: 20px;
}
.card {
  
  width: 165px;
  // height: 270px;
  // height: 150px;
  background-color: rgba(255, 255, 255, .3);
  backdrop-filter: blur(1px);
  border: 0;
  border-radius: 18px;
  margin-bottom: 10px;
  // box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.15);
}

.card_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
h1 {
  margin-left: 36px;
  // margin-top: 20px;
}

// img {
//   // display: block;
//   // float: left;
//   // vertical-align: text-top;
//   // margin-right: 5px;
// }
//水滴晃动效果
@keyframes watch {
  25%{
    border-radius: 72% 28% 34% 66% / 32% 26% 74% 68%;
  }
  50%{
    border-radius: 72% 28% 58% 42% / 32% 62% 38% 68%;
  }
  // 75%{
  //   border-radius: 72% 28% 34% 66% / 32% 26% 74% 68%;
  // }
  100%{
    border-radius: 40% 60% 58% 42% / 48% 62% 38% 52%;
  }
}
</style>