<template>
  
  <video src="../assets/video.mp4" autoplay @ended="overAudio" @play="onPlay"></video>
    <van-loading vertical color="#7A3BDA" size="30" class="loadd" v-if="aaa">
      <template #icon>
        <van-icon name="star-o" size="30" />
      </template>
      视频有点大，还在加载哦...
    </van-loading>
</template>

<script>
export default {
  name: "myShiPing",
  data() {
    return {
      aaa:true,
    }
  },
  methods: {
    onPlay() {
      console.log("开始播放")
    },
    overAudio() {
      console.log("播放完毕")
      this.$router.push('/xiangCe')
    }
  },
  mounted() {
    let videoElem = document.querySelector("video")
    videoElem.addEventListener('canplaythrough', () => {
      this.aaa = false
    });
  },
  // created() {
  //   history.pushState(null, null, document.URL);
  //   window.addEventListener("popstate", function () {
  //     history.pushState(null, null, document.URL);
  //   });
  // },

}
</script>

<style lang="less" scoped>
video {
  position: absolute;
  width: 100%;
  height: 100%;
  // position: absolute;
}
.loadd {
  position: relative;
  top: 50%;
}
</style>