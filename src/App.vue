<template>
  <div>
    <Header v-if="hasHeader" />
    <GallerySide v-if="hasGallerySide" />
    <SocialSide v-if="hasSocialSide" />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
  <Footer v-if="hasFooter"/>
</template>

<script>
import Header from '@/components/Header.vue'
import GallerySide from '@/components/GallerySide.vue'
import SocialSide from '@/components/SocialSide.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  components: {
    Header,
    GallerySide,
    SocialSide,
    Footer
  },
  created() {
    window.addEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  },
  computed: {
    hasHeader() {
      return this.$route.name !== 'Home'
    },
    hasGallerySide() {
      return this.$route.name !== 'Gallery' && this.$route.name !== 'Home' && this.width >= 576
    },
    hasSocialSide() {
      return this.$route.name !== 'Home'
    },
    hasFooter() {
      return this.$route.name !== 'Home'
    }
  }
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*overflow: hidden;*/
}

.main{
  margin-top: -168px;
  overflow: hidden;
}

.no-overflow{
  overflow: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li{
    list-style: none;
}

.bg-dark{
  background-color: black !important;
}

.center{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-align: center;
}

.banner-cont > img{
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.gallery img{
  background-color: rgba(81,81,81,1);
}

/* route transitions */
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.3s ease-in;
}

@media (max-width: 576px){
  .main {
    margin-top: 0 !important;
  }
}
</style>
