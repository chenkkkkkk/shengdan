<template>
  <!-- <fengMian></fengMian> -->
  <transition :name="transitionName">
    <keep-alive>
      <router-view class="fold-left-enter-active"></router-view>
    </keep-alive>
  </transition>
  
  <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
  <!-- <router-view /> -->
  <!-- <shiPing></shiPing> -->
</template>

<script>
import fengMian from './views/feng_mian.vue'
import shiPing from './components/shi_ping.vue'
import xiangCe from './views/xiang_ce.vue'
export default {
  name: 'myApp',
  components: {
    fengMian,
    shiPing,
    xiangCe
  },
  data() {
    return {
      transitionName:"fold-left"
    }
  },
  watch: {
    "$route"(to, from) {
      // console.log(to)
      // console.log(from)
      const routeDeep = ['/', '/fengMian', '/shiPing','/xiangCe'];
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      // console.log("阿松大", this.transitionName, toDepth, fromDepth)
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  height: 100%;
  /* background-color: black; */
  background-image: linear-gradient(82deg, #d4037f, #b651a0, #8972c2, #138ce5);
  overflow-x: hidden;
  /* position: fixed; */
}
html {
  overflow-x: hidden;
  /* height: 950%; */
  /* width: 100%; */
  /* height: 1000px; */
  /* position: fixed; */
 }
/* #app {
  width: 100%;
  height: 100%;
} */
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: .8s;
}

.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: .8s;
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: .8s;
}

.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: .8s;
}
@keyframes fold-left-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
</style>
  

