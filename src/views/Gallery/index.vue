<template>
  <div class="gallery main">
    <Banner title='GALERÍA'>
      <img src="@/assets/img/Enmascarar_grupo_15.jpg">
    </Banner>
    <!-- shows gallery by cat -->
    <div class="container-fluid" v-if="$route.params.cat">
      <Slider/>
    </div>
    <!-- shows when no cat param exists -->
    <div class="container-fluid" v-else>
      <First>
        <div class="gallery-row row gx-2 gx-md-3 px-md-4">
          <div class="my-col col-6 col-md-4 py-1 py-md-2" v-for="item in items" :key="item.id">
            <div>
              <img :src="'https://drive.google.com/uc?id='+item.id">
              <div class="lighten-bg">
                <router-link to="/gallery/retratos">
                  <h4 class="center">RETRATOS</h4>
                </router-link>
              </div>
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

export default {
  name: 'Gallery',
  components: {
    Banner,
    Slider,
    First
  },
  data() {
    return {
      items: [
        { id: '1Qj0YNDeeIIeI4spiaE4bimLlaa0L9n_R' }, 
        { id: '11jQhXZG07ITMHqWMotkCYmiDfKiZKkk1' },
        { id: '1sk3bC9qYaP9xzbk5Zm8d2Q-R03jtt0Dg' },
        { id: '1iHklI6nNJf7YQBYBBJzrdjUDrkkjM4G6' },
        { id: '1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt' },
        { id: '1O72Fz6u9ergaJb-hSCZE9fdi5KzSoaIt' }
      ]
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
.gallery img{
  background-color: rgba(81,81,81,1);
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
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 1000px;
}
.gallery-row .my-col{
  display: inline-block;
  flex-direction: column;
}
.my-col > div{
  position: relative;
  border: 2px solid #7a7a7a;
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
