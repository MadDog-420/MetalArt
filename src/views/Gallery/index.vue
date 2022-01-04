<template>
  <div class="gallery main">
    <Banner title='GALERÍA'>
      <img src="@/assets/img/Enmascarar_grupo_15.jpg">
    </Banner>
    <!-- shows gallery by cat -->
    <div class="container-fluid bg-dark" v-if="$route.params.cat">
      <Slider/>
    </div>
    <!-- shows when no cat param exists -->
    <div class="container-fluid bg-dark" v-else>
      <First>
        <div class="gallery-row row gx-2 gx-md-3 px-md-4">
          <div class="my-col col-6 col-md-4">
            <div class="py-1 py-md-2" v-for="item in items_1" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" />
            </div>
          </div>
          <div class="my-col col-6 col-md-4">
            <div class="py-1 py-md-2" v-for="item in items_2" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" />
            </div>
          </div>
          <div class="my-col d-none d-md-block col-md-4">
            <div class="py-1 py-md-2" v-for="item in items_3" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" />
            </div>
          </div>
        </div>
      </First>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Slider from '@/views/Gallery/Slider'
import First from '@/components/First'
import GalleryPicture from './Picture'

export default {
  name: 'Gallery',
  components: {
    Banner,
    Slider,
    First,
    GalleryPicture
  },
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    category: 1,
    items: [],
    items_1: [],
    items_2: [],
    items_3: []
  }),
  mounted() {
    document.title = 'Metal Art | Galería'
  },
  created() {
    window.addEventListener("resize", this.getDimensions),
    this.setPicturesArray(1),
    this.setColumns()
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      this.setColumns();
    },
    setPicturesArray(cat) {
      if (cat === 1) {
        this.items = [
          { id: '1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt'},
          { id: '1iHklI6nNJf7YQBYBBJzrdjUDrkkjM4G6'},
          { id: '1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1'},
          { id: '12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ'},
          { id: '1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw'},
          { id: '1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E'},
          { id: '1JY8LTMug-NyWTLqBKLwEnRY2--bYXGjn'},
          { id: '1sk3bC9qYaP9xzbk5Zm8d2Q-R03jtt0Dg'},
          { id: '1ogtcki2M_T0lURcV2iZnfRecBd0d4H8o'},
          { id: '11jQhXZG07ITMHqWMotkCYmiDfKiZKkk1'},
          { id: '1DE1q7GPrCJcQVyVvz0p_kPO9guR_vpCq'},
          { id: '1-lTUR_H-yxeN6op0LNGVvRifKVvtbEsA'},
          { id: '1l8h4Rp7hF9srUZMAcHJxMvDOJTREyefX'},
          { id: '1rgA6vo_J2UVLPSn3_EKaPEkBocfO0y7H'},
          { id: '1g2JY0hpIX9vq-v1iLvRFLnCcYswOuprW'},
          { id: '1rmxZvE4iEB5Ft2Ib9x3O-ez2UR-7Kmuv'},
          { id: '12SSedbOVDRH6uSzV9khw98aLGO-Rdfye'},
          { id: '15PhSFt5QLAcE3jykraJel0sRLg5rUm_e'},
          { id: '1yoBGbeYSPk0GHxDS-s9VK4D8ERSsEqFU'},
          { id: '1ZWN9Pg0sKiamOCZkWgmCNcHxjF5gT7gI'}
        ];
      }
      if (cat === 2) {
        this.items = [
          { id: '1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt'},
          { id: '1iHklI6nNJf7YQBYBBJzrdjUDrkkjM4G6'},
          { id: '1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1'},
          { id: '12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ'},
          { id: '1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw'},
          { id: '1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E'}
        ];
      }
      if (cat === 3) {
        this.items = [
          { id: '1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt'},
          { id: '1iHklI6nNJf7YQBYBBJzrdjUDrkkjM4G6'},
          { id: '1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1'},
          { id: '12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ'},
          { id: '1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw'},
          { id: '1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E'}
        ];
      }
    },
    setColumns(){
      if (this.width >= 768) {
        const result = this.splitToChunks(this.items, 3);
        this.items_1 = result[0];
        this.items_2 = result[1];
        this.items_3 = result[2];
      } else {
        const result = this.splitToChunks(this.items, 2);
        this.items_1 = result[0];
        this.items_2 = result[1];
      }
    },
    splitToChunks(array, parts) {
      const copyArray = [...array]
      let result = [];
      for (let i = parts; i > 0; i--) {
          result.push(copyArray.splice(0, Math.ceil(copyArray.length / i)));
      }
      return result;
    }
  }
}
</script>

<style scoped>
.main{
  margin-top: -112px;
}
.main .container-fluid{
  padding: 0;
}
.row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.galeria-side-container{
  display: none;
}
.lighten-bg{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.lighten-bg>a{
  height: 100%;
  display: block;
}
.center{
  color: #7a7a7a;
  font-size: 1.3em;
  font-weight: normal;
  transition: all .5s linear;
}
.gallery-row{
  display: flex;
  flex-wrap: wrap;
}
.gallery-row .my-col{
  display: inline-block;
  height: fit-content;
}
.my-col > div{
  position: relative;
}
.my-col > div img{
  opacity: 100;
  transition: all .5s linear;
}
.my-col > div:hover img{
  opacity: 50;
}
.my-col > div:hover .center{
  color: white;
}

@media (max-width: 576px){
  .main >.container-fluid{
    margin-top: 70px;
  }
}
</style>
