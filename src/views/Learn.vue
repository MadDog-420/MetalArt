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
              <h2 class="mb-md-5 mt-3 mt-md-auto title">Taller de repujado</h2>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 instructor-card">
            <img class="profile-picture" src="..\assets\img\la-marca-1-f.jpg">
            <div class="d-flex flex-column">
              <h3 class="mt-md-auto">Henry Pedro Paz Huamán</h3>
              <h4 class="mt-md-auto subtitle">INSTRUCTOR</h4>
            </div>
            <div class="d-flex flex-column my-auto ms-auto inscription-button-container">
              <button type="button" class="btn btn-outline-dark inscription-button" @click="goInscription()">Inscríbete gratis</button>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 video-container">
            <div class="w-100 d-flex justify-content-center">
              <div @click="playVideo($event.target)" class="play-button" v-bind:class = "(videoIsPlaying)?'no-play':''">
                <video name="media-video" width="360">
                  <source
                    src="..\assets\video\learn_video.mp4"
                    type="video/mp4">
                </video>
                <img src="..\assets\img\play.png">
              </div>
              <!--<iframe src="https://drive.google.com/file/d/1T2UDAEXMSVD0xcbrF0AS-hdAQa4z_IOH/preview" width="640" height="360" allow="autoplay"></iframe>-->
            </div>
          </div>
          <div class="my-col col-12 ps-md-3">
            <div class="row">
              <div class="col pe-md-3 d-flex flex-column course-description-container">
                <h3 class="mb-md-3">A cerca de este curso</h3>
                <p class="ms-md-0 mt-2 mb-md-auto text-justify">Este curso provee una vista general de los conceptos, principios y practicas fundamentales del repujado en metal. Con ejercicios interactivos se ayuda a los estudiantes a explorar sus propias actitudes, hábitos mentales, comportamientos y sentimientos a través del metal. El curso de taller de repujado ofrece un camino hacia el mundo artesanal de la orfebrería abordándola con autenticidad y variedad. Los principales componentes de este curso incluyen ejercicios prácticos, uso profesional de herramientas artesanales, guias de referencias, asesoría personal y discusiones interactivas.</p>
              </div>
              <div class="col d-flex flex-column ms-auto features-conatiner">
                <div class="features">
                  <ul>
                    <li>
                      <div class="row w-100">
                        <div class="col-3 col-md-4 col-xl-3">
                          <span class="circle-list"></span>
                        </div>
                        <div class="col">
                          <h4>Fechas flexibles</h4>
                          <p>Crea tus propios horarios previa coordinación con el instructor.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row w-100">
                        <div class="col-3 col-md-4 col-xl-3">
                          <span class="circle-list"></span>
                        </div>
                        <div class="col">
                          <h4>Certificado para compartir</h4>
                          <p>Obten un certificado al finalizar.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row w-100">
                        <div class="col-3 col-md-4 col-xl-3">
                          <span class="circle-list"></span>
                        </div>
                        <div class="col">
                          <h4>100% en línea</h4>
                          <p>Comienza de inmediato y aprende a tu propio ritmo.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 instructor-info">
            <div class="d-flex flex-column">
              <h3 class="mb-md-4">Instructor</h3>
              <img class="profile-picture" src="..\assets\img\la-marca-1-f.jpg">
            </div>
            <div class="d-flex flex-column my-auto pt-4 pt-md-0">
              <h3>Henry Pedro Paz Huamán</h3>
              <p>Artesano en repujado sobre metal</p>
            </div>
          </div>
        </div>
      </First>
      <div class="sub-gallery-container pb-5 px-4">
        <div class="row sub-gallery">
          <div class="col col-12 col-md-6">
            <img class="inscription-img responsive-img" src="..\assets\img\herramienta_repujado.png">
          </div>
          <div class="col col-12 col-md-6 d-flex">
            <div class="m-auto caption" style="height: fit-content;">
              <h3 class="text-center mt-4 pb-4" style="width: fit-content">Aprende una nueva habilidad</h3>
              <button type="button" class="btn btn-dark inscription-button" @click="goInscription()">Inscríbete gratis</button>
            </div>
          </div>
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
  data: ()=> ({
    videoIsPlaying: false
  }),
  watch: {
    videoIsPlaying () {
      console.log('video change');
    }
  },
  mounted() {
    document.title = 'Metal Art | La Marca'
  },
  methods: {
    playVideo(){
      if (!this.videoIsPlaying) {
        this.videoIsPlaying = true;
        document.getElementsByName('media-video')[0].play();
      } else {
        this.videoIsPlaying = false;
        document.getElementsByName('media-video')[0].pause();
      }
    },
    goInscription(){
      window.open('https://api.whatsapp.com/send?phone=959856919&text=Hola👋,%20me%20gustar%C3%ADa%20inscribirme%20en%20el%20curso%20de%20repujado', '_blank');
    }
  }
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
  margin: auto;
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
  object-position: top;
}
.inscription-button{
  font-size: 2.5em;
  border-width: 3px;
  padding: .5rem 2rem;
}
.video-container{
  position: relative;
  overflow: hidden;
}
.play-button{
  position: relative;
  min-height: 640px;
  cursor: pointer;
}
.play-button img{
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.8;
  transform: translate(-50%, -50%);
}
.play-button.no-play img{
  opacity: 0;
}
.play-button img:hover{
  opacity: 0.99;
}
.play-button.no-play img:hover{
  opacity: 0;
}
.features-conatiner{
  width: 330px;
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
.features .circle-list{
  display: inline-block;
  width: 56px;
  height: 56px;
  margin-right: 20px;
  border: 1px solid #000;
  border-radius: 50%;
}
.instructor-info .profile-picture{
  width: 227px;
  height: 227px;
}
.responsive-img{
  width: 100%;
}

@media (max-width: 1232px) {
  .sub-gallery{
    max-width: 87%;
  }
}
@media (max-width: 1200px) {
  .instructor-card{
    flex-wrap: wrap;
  }
  .inscription-button-container{
    width: 100%;
    margin-top: 2rem !important;
  }
  .inscription-button-container button{
    width: 100%;
  }
}
@media (min-width: 992px) {
  p{
    font-size: 20px;
  }
}
@media (max-width: 853px) {
  .course-description-container{
    flex: unset;
  }
  .features-conatiner{
    width: 100%;
    margin-top: 2rem;
  }
}
@media (max-width: 768px){
  p {
    text-align: justify;
  }
  .first{
    padding: 1em 0;
    margin: 0 auto 3rem auto;
    max-width: 70%;
  }
  .first .title{
    font-size: 36px;
  }
  .sub-gallery{
    max-width: 70%;
  }
  .profile-picture{
    margin-right: 1.5rem;
  }
  .caption{
    display: flex;
    flex-direction: column;
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
  .features{
    width: 120%;
    margin-left: -10%;
    padding: 1.5rem;
  }
  .instructor-card{
    margin-top: 2rem;
  }
  .instructor-card h3{
    font-size: unset;
  }
  .instructor-card h4{
    font-size: unset;
  }
  .profile-picture{
    width: 50px;
    height: 50px;
  }
  .inscription-button{
    font-size: 30px;
    margin: 0 auto;
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
  .instructor-info .profile-picture{
    width: 113.5px;
    height: 113.5px;
  }
}
</style>