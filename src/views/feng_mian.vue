<template>
  <audio autoplay  loop auto id="vd" @ended="overAudio" @pause="onPause" @play="onPlay">
    <source src="../assets/music/IMG_1555.mp3"/>
  </audio>
  <div @click="boFang" id="btn" class="ico" ref="btnn">
        <Icon type="md-volume-up" size="40" v-if="falg"/>
        <Icon type="md-volume-off" size="40" v-if="falg1"/>
  </div>
  <div class="fnegmian">
    <!-- <img src="../assets/img/hsuangyuewan/IMG_0003.jpg" alt=""> -->
    <div class="box1">
      <!-- <router-link to="/shiPing"> -->
      <button class="btn" @click="tiaoZhuan"></button>
      <!-- </router-link> -->
    </div>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
// import shiPing from './components/shi_ping.vue'
export default {
  name: "myFengMian",
  data() {
    return {
      falg: false,
      falg1:true,
    }
  },
  methods: {
    // 当音频播放
    onPlay() {
      console.log('开始播放声音');
      this.falg = true;
      this.falg1 = false;
      document.querySelector(".btn").style.transition = 'all 1.5s';
      document.querySelector(".btn").style.opacity = '1';
    },
    // 当音频暂停
    onPause() {
      console.log('暂停播放声音');
      this.falg = false;
      this.falg1 = true;
      document.querySelector(".btn").style.opacity = '0';
    },
    //播放完毕执行
    overAudio() {
      console.log('播放声音完毕');
      this.falg = true;
      this.falg1 = false;
      // this.audioArr.forEach(item => {
      //   item.isStart = true;
      // })
    },
    toggleSound() {
      var music = document.getElementById("vd");//获取ID  
      if (music.paused) { //判读是否播放  
        music.play(); //没有就播放 
      }
    },
    boFang() {
      let audio = document.querySelector("#vd");
      if (audio.paused) {
        audio.play();
        this.falg = true;
        this.falg1 = false;
        document.querySelector(".btn").style.transition = 'all 1.5s';
        document.querySelector(".btn").style.opacity = '1';
        // this.falg = true;
      } else {
        audio.pause();
        this.falg = false;
        this.falg1 = true;
        // this.falg = false;
        document.querySelector(".btn").style.opacity = '0';
      }
    },
    tiaoZhuan() {
      // let url = this.$route.resolve({
      //   path: "/shiPing",
      // })
      this.$router.push('/shiPing')
      // window.open(url,'_blank')
    }
  },
  mounted() {
    let audio = document.querySelector("#vd");
    if (!audio.paused) {
      document.querySelector(".btn").style.transition = 'all 1.5s';
      document.querySelector(".btn").style.opacity = '1';
    }
  },
  

}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fnegmian {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/beijin.png") no-repeat center;
  background-size: 100% 100%;
}
.box1 {
    width: 150px;
    height: 70px;
    transform: translateY(370%);
}
.btn {
  width: 150px;
  height: 70px;
  box-shadow: 16px 14px 20px #000000;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0;
  z-index: 555;
  // transition: all 1s;
}

.btn::before {
  content: "";
  background-image: conic-gradient(#57c8a2 20deg,transparent 120deg);
  width: 250%;
  height: 250%;
  position: absolute;
  animation: rotate 2s linear infinite;
}
.btn::after {
  content: "点击探索";
  width: 140px;
  height: 60px;
  background: #101010;
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  // color: #fe2441;
  color: #57c8a2;
  font-size: 20px;
  box-shadow: inset 20px 20px 20px #000000;
  font-family: STHupo;
}
.ico {
  position: fixed;
  right: 20px;
  width: 35px;
  height: 45px;
  font-size: 40px;
  margin: 20px 20px;
  align-items: center;
  line-height: 45px;
  animation: rotate1 2s linear infinite;
  float: right;
  z-index: 555;
  // background-color: #000000;
}
.el-icon {
  position: fixed;
  z-index:999;
  background-color: red;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>