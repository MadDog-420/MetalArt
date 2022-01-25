<template>
  <div class="about main">
    <Banner title='APRENDE'>
      <img src="@/assets/img/Enmascarar_grupo_21.jpg">
    </Banner>
    <div class="container-fluid">
      <First>
        <div class="row g-5 mt-md-4">
          <div class="my-col col-12 ps-md-3">
            <div class="col-12 d-flex flex-column">
              <h2 class="mb-md-5 mt-md-auto title">Taller de repujado</h2>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 instructor-card">
            <img class="profile-picture" src="..\assets\img\la-marca-1-f.jpg">
            <div class="d-flex flex-column">
              <h3 class="mt-md-auto">Henry Pedro Paz Huamán</h3>
              <h4 class="mt-md-auto subtitle">INSTRUCTOR</h4>
            </div>
            <div class="d-flex flex-column my-auto ms-auto">
              <button type="button" class="btn btn-outline-dark">Inscríbete gratis</button>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 video-container">
            <img src="..\assets\img\la-marca-2-f.jpg">
          </div>
          <div class="my-col col-12 ps-md-3">
            <div class="col-md-7 d-flex flex-column">
              <h3 class="mb-md-3">A cerca de este curso</h3>
              <p class="ms-md-0 mt-2 mb-md-auto text-justify">Este curso provee una vista general de los conceptos, principios y practicas fundamentales del repujado en metal. Con ejercicios interactivos se ayuda a los estudiantes a explorar sus propias actitudes, hábitos mentales, comportamientos y sentimientos a través del metal. El curso de taller de repujado ofrece un camino hacia el mundo artesanal de la orfebrería abordándola con autenticidad y variedad. Los principales componentes de este curso incluyen ejercicios prácticos, uso profesional de herramientas artesanales, guias de referencias, asesoría personal y discusiones interactivas.</p>
            </div>
            <div class="d-flex flex-column ms-auto">
              <div class="features">
                <ul>
                  <li>
                    <span class="circle-list"></span>
                    <div>
                      <h4>Fechas flexibles</h4>
                      <p>Crea tus propios horarios previa coordinación con el instructor.</p>
                    </div>
                  </li>
                  <li>
                    <span class="circle-list"></span>
                    <div>
                      <h4>Certificado para compartir</h4>
                      <p>Obten un certificado al finalizar.</p>
                    </div>
                  </li>
                  <li>
                    <span class="circle-list"></span>
                    <div>
                      <h4>100% en línea</h4>
                      <p>Comienza de inmediato y aprende a tu propio ritmo.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 instructor-info">
            <div class="d-flex flex-column">
              <h3 class="mb-md-4">Instructor</h3>
              <img class="profile-picture" src="..\assets\img\la-marca-1-f.jpg">
            </div>
            <div class="d-flex flex-column my-auto">
              <h3>Henry Pedro Paz Huamán</h3>
              <p>Artesano en repujado sobre metal</p>
            </div>
          </div>
        </div>
      </First>
      <div class="sub-gallery-container py-5 px-4">
        <div class="row sub-gallery">
          <div class="col-6"><h3 class="text-center mt-4 pb-4">Aprende una nueva habilidad</h3></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import First from '@/components/First.vue'

export default {
  name: 'About',
  components: {
    Banner,
    First
  },
  mounted() {
    document.title = 'Metal Art | La Marca'
  },
}
</script>

<style scoped>
.main .container-fluid{
  padding: 0;
  margin: 0;
}
.first{
  max-width: 70%;
  padding: 3em 0;
  margin: 0 auto;
}
.first .title{
  font-size: 56px;
}
.my-col{
  display: flex;
}
.sub-gallery-container{
  background-color: #F5F5F5;
}
.sub-gallery{
  max-width: 80%;
  margin: 30px auto;
}
.instructor-card .subtitle{
  color: #A1A1A1;
}
.profile-picture{
  width: 100px;
  height: 100px;
  margin: 0 2.5rem 0 0;
  border-radius: 50%;
  object-fit: cover;
}
.instructor-card .btn-outline-dark{
  font-size: 2.5em;
  border-width: 3px;
  padding: .5rem 2rem;
}
.video-container{
  max-height: 694px;
  overflow: hidden;
}
.features{
  padding: 2rem;
  background-color: #F5F5F5;
}
.features ul{
  padding: 0;
  margin: 0;
}
.features li{
  display: flex;
}
.features li > div{
  max-width: 225px;
  display: inline-block;
}
.features .circle-list{
  display: inline-block;
  width: 62px;
  height: 62px;
  margin-right: 20px;
  border: 1px solid #000;
  border-radius: 50%;
}
.instructor-info .profile-picture{
  width: 227px;
  height: 227px;
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
    padding: 1em 0;
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
    margin-top: 80px;
  }
  .sub-gallery{
    max-width: 99% !important;
  }
  .sub-gallery-container h3{
    font-size: 30px;
  }
  .sub-gallery > div{
    padding-right: 0;
    padding-left: 0;
  }
}
</style>