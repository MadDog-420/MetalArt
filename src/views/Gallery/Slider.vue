<template>
  <div class="slider">
    <div class="row px-4">

      <div class="col-12 col-sm-10 col-md-8 pic-view-cont">
        <div class="pic-view">

          <div class="arrow-cont-left">
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.55 105.4"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Layer_1" data-name="Layer 1"><polygon class="cls-1" points="52.7 105.4 54.12 103.99 4.14 54.02 208.55 54.02 208.55 52.02 3.52 52.02 54.12 1.41 52.7 0 0 52.7 52.7 105.4"/></g></g></svg>
            </div>
          </div>

          <img :src="`${publicPath}/img/gallery/ID73539242_540876803341323_241.png`">

          <div class="arrow-cont-right">
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.55 105.4"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Layer_1" data-name="Layer 1"><polygon class="cls-1" points="155.85 0 154.44 1.41 204.41 51.39 0 51.39 0 53.39 205.03 53.39 154.44 103.99 155.85 105.4 208.55 52.7 155.85 0"/></g></g></svg>
            </div>
          </div>

        </div>
        <div class="thumbnail-cont my-3">
            <img :src="`${publicPath}/img/gallery/Enmascarar_grupo_10.png`">
        </div>
        <div class="pic-info">
          <h4 class="text-secondary">La santa cena</h4>
          <ul class="my-3">
            <li class="text-secondary small"><b>COBRE:</b> Max. 80 cm. de alto</li>
            <li class="text-secondary small"><b>ALUMINIO</b> Max. 60 cm. de alto</li>
            <li class="text-secondary small"><b>BRONCE</b> Max. 30 cm. de alto</li>
          </ul>
          <p class="fst-italic text-secondary small">*El tamaño varía de acuerdo a las necesidades del cliente. Para tener más información comunicarse al +51 959856919 o enviar un mensaje de WhatsApp.</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Slider',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
.pic-view-cont{
  margin: 0 auto;
}
.pic-view{
  position: relative;
}
.arrow-cont-left,.arrow-cont-right{
  display: flex;
  position: absolute;
  bottom: 0;
  transform: translate(0, 50%);
}
.arrow-cont-left{
  left: -100px;
}
.arrow-cont-right{
  right: -100px;
}
.arrow{
  width: 60px;
  position: relative;
  margin: 0 10px;
}
.arrow .cls-1{
  fill:#aaa;
}
.pic-view>img{
  width: 100%;
}
.thumbnail-cont>img{
  width: 70px;
}
.pic-info ul{
  padding: 0;
}
.pic-info ul li{
  margin: .5rem 0;
}
.pic-info .small{
  font-size: 1em;
}
@media (max-width: 768px){
  .pic-info .small{
    font-size: .875em;
  }
}
@media (max-width: 426px){
  .slider .row{
    padding: 0;
  }
  .arrow{
    width: 40px;
  }
  .arrow-cont-left{
    left: -60px;
  }
  .arrow-cont-right{
    right: -60px;
  }
}

</style>
