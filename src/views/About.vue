<template>
  <div class="about main">
    <Banner title='LA MARCA'>
      <img src="@/assets/img/Enmascarar_grupo_14.png">
    </Banner>
    <div class="container-fluid">
      <div class="first">
        <div class="row g-5 mt-md-4">
          <div class="my-col col-md-6">
              <img src="..\assets\img\la-marca-1-f.jpg">
          </div>
          <div class="my-col col-md-6">
            <div class="p-lg-5">
              <h2 class="mb-md-5">Habilidad y creatividad</h2>
              <p class="ms-md-2 ms-md-0 mt-2 mt-md-0 text-justify">Tuvo sus inicios en la década de los 80, a raíz del arte innato que corría por las venas del fundador de esta marca, Henry Pedro Paz Huamán, un artista arequipeño, que decidió comenzar a descubrir las maravillas que podían realizarse con la lámina de cobre y aluminio combinado con la habilidad de sus manos y creatividad de su mente.<br><br><br>La formación recibida fue de manera autodidacta, revelando su destreza de una manera impresionante, forjándose así una carrera artística tanto nacional e internacional.</p>
            </div>
          </div>
          <div class="my-col col-md-6">
            <div class="p-lg-5">
              <p class="me-md-2 ms-md-0 mt-2 mt-md-0 text-justify">Es así que Metal Art logro varios premios fruto del esfuerzo y amor a esta destreza.<br>En la actualidad fue descubriendo e innovando con la experiencia de los años, nuevas técnicas y habilidades para mejorar este arte, que son plasmadas en cuadros realizados únicamente a mano, sin ningún tipo de matrices.<br><br><br>El reconocimiento de la gente es por la calidad del trabajo, marcando la diferencia en sus detalles, compromiso y pasión que le pone a cada uno de los ejemplares que realiza, logrando así una fusión del cobre, aluminio y el bronce en los últimos años, teniendo un resultado excelente para sus clientes, que ahora son también sus amigos.</p>
            </div>
          </div>
          <div class="my-col col-md-6">
              <img src="..\assets\img\la-marca-2-f.jpg">
          </div>
        </div>
      </div>
      <div class="sub-gallery-container py-5 px-4">
        <h3 class="text-center mt-4 pb-4">Detalle, pasión y compromiso.</h3>
        <div class="row sub-gallery">
          <div class="col-sm-6 py-3"><Picture picture_src="Enmascarar_grupo_11.png"/></div>
          <div class="col-sm-6 py-3"><Picture picture_src="Enmascarar_grupo_26.png"/></div>
          <div class="col-sm-6 py-3"><Picture picture_src="Enmascarar_grupo_27.png"/></div>
          <div class="col-sm-6 py-3"><Picture picture_src="Enmascarar_grupo_28.png"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Picture from '@/components/Picture.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'About',
  components: {
    Picture,
    Banner
  }
}
</script>

<style scoped>
.main .container-fluid{
  padding: 0;
  margin: 0;
}
.first{
  max-width: 80%;
  padding: 5em 0;
  margin: 0 auto;
}
.row img{
  width: 100%;
  object-fit: cover;
}
.my-col{
  display: flex;
}
.my-col img{
  margin: auto;
}
.about img{
  background-color: rgba(81,81,81,1);
}
.sub-gallery-container{
  background-color: #F5F5F5;
}
.sub-gallery{
  max-width: 80%;
  margin: 30px auto;
}

@media (max-width: 1232px) {
  .sub-gallery{
    max-width: 87%;
  }
}
@media (min-width: 992px) {
  p{
    font-size: 20px;
  }
}
@media (max-width: 768px){
  .first{
    padding: 2.5em 0;
    margin: 0 auto 3rem auto;
    max-width: 70%;
  }
  .sub-gallery{
    max-width: 70%;
  }
  p {
    text-align: justify;
  }
}
@media (max-width: 576px){
  p {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .main >.container-fluid{
    margin-top: 55px;
  }
  .sub-gallery{
    max-width: 99% !important;
  }
  .sub-gallery-container h3{
    font-size: 30px;
  }
}
</style>
