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
            <img class="profile-picture" src="..\assets\img\profile_picture.png">
            <div class="d-flex flex-column">
              <h3 class="mt-md-auto mt-auto mb-0" style="font-weight: normal;">Henry Pedro Paz Huamán</h3>
              <h4 class="mt-md-auto subtitle mb-auto" style="font-weight: normal;">INSTRUCTOR</h4>
            </div>
            <div class="d-flex flex-column my-auto ms-auto inscription-button-container">
              <button type="button" class="btn btn-outline-dark inscription-button" @click="goInscription()">Inscríbete gratis</button>
            </div>
          </div>
          <div class="my-col col-12 ps-md-3 video-container">
            <div class="w-100 d-flex justify-content-center" style="overflow: hidden">
              <div @click="playVideo($event.target)" class="play-button" v-bind:class = "(videoIsPlaying)?'no-play':''">
                <video class="video" name="media-video" width="360">
                  <source
                    src="..\assets\video\learn_video.mp4"
                    type="video/mp4">
                </video>
                <div class="blur">
                  <video name="media-video" style="width: 100%; margin-top: -50%" muted>
                    <source
                      src="..\assets\video\learn_video.mp4"
                      type="video/mp4">
                  </video>
                </div>
                <img src="..\assets\img\play.png" class="invert">
              </div>
              <!--<iframe src="https://drive.google.com/file/d/1T2UDAEXMSVD0xcbrF0AS-hdAQa4z_IOH/preview" width="640" height="360" allow="autoplay"></iframe>-->
            </div>
          </div>
          <div class="my-col col-12 ps-md-3">
            <div class="row">
              <div class="col col-12 col-md-6 col-sm-12 col-xl-8 pe-md-5 d-flex flex-column course-description-container">
                <h3 class="mb-md-3">A cerca de este curso</h3>
                <p class="ms-md-0 mt-2 mb-md-auto">Este curso provee una vista general de los conceptos, principios y practicas fundamentales del repujado en metal. Con ejercicios interactivos se ayuda a los estudiantes a explorar sus propias actitudes, hábitos mentales, comportamientos y sentimientos a través del metal. El curso de taller de repujado ofrece un camino hacia el mundo artesanal de la orfebrería abordándola con autenticidad y variedad. Los principales componentes de este curso incluyen ejercicios prácticos, uso profesional de herramientas artesanales, guias de referencias, asesoría personal y discusiones interactivas.</p>
              </div>
              <div class="col col-12 mt-4 mt-md-0 col-md-6 col-sm-12 col-xl-4 d-flex flex-column features-conatiner">
                <div class="features ms-3">
                  <ul>
                    <li>
                      <div class="row w-100">
                        <div class="d-flex icon-container col-3 col-md-4 col-xl-3">
                          <CalendarIcon />
                        </div>
                        <div class="col">
                          <h4>Fechas flexibles</h4>
                          <p>Crea tus propios horarios previa coordinación con el instructor.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row w-100">
                        <div class="d-flex icon-container col-3 col-md-4 col-xl-3">
                          <VirtualIcon />
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
            <div class="w-100 row">
              <div class="col col-12 mb-3">
                <h3 class="mb-md-4">Instructor</h3>
              </div>
              <div class="me-3 instructor-picture-container">
                <img class="profile-picture" style="width: 100%; height: unset" src="..\assets\img\profile_picture.png">
              </div>
              <div class="col d-flex flex-column my-auto">
                <h3 class="name">Henry Pedro Paz Huamán</h3>
                <p>Artista en repujado sobre metal</p>
              </div>
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
import CalendarIcon from '@/components/icons/CalendarIcon.vue'
import VirtualIcon from '@/components/icons/VirtualIcon.vue'

export default {
  name: 'About',
  components: {
    Banner,
    First,
    CalendarIcon,
    VirtualIcon
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
    document.title = 'Metal Art | Aprende'
  },
  methods: {
    playVideo(){
      if (!this.videoIsPlaying) {
        this.videoIsPlaying = true;
        document.getElementsByName('media-video').forEach((elm) => {
          elm.play();
        });
        console.log(document.getElementsByName('media-video')[0]);
      } else {
        this.videoIsPlaying = false;
        document.getElementsByName('media-video').forEach((elm) => {
          elm.pause();
        });
      }
    },
    goInscription(){
      window.open('https://api.whatsapp.com/send?phone=51959856919&text=Hola👋,%20me%20gustar%C3%ADa%20inscribirme%20en%20el%20curso%20de%20repujado', '_blank');
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
  width: 85px;
  height: 85px;
  margin: 0 2.5rem 0 0;
  object-fit: cover;
}
.inscription-button{
  font-size: 2.3em;
  border-width: 3px;
  border-color: black !important;
  padding: .5rem 2rem;
}
.video-container{
  position: relative;
  overflow: hidden;
}
.play-button{
  width: 100%;
  position: relative;
  max-height: 640px;
  cursor: pointer;
}
.play-button img{
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  z-index: 99;
}
.play-button .video{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
.blur{
  width: 100%;
  filter: blur(16px);
  overflow: hidden;
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
.features{
  padding: 1rem;
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
.instructor-picture-container{
  width: 227px;
  height: 227px;
}
.responsive-img{
  width: 100%;
}
.invert { 
  filter: invert(100%);
}
.icon-container svg{
  margin: 0 auto;
}
.btn-dark{
  background-color: black !important;
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
  .features{
    margin-left: 0 !important;
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
  .features-conatiner{
    width: 100%;
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
  .instructor-card .subtitle{
    font-size: .8rem;
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
  .instructor-picture-container{
    width: 95px;
    height: 95px;
    display: flex;
    padding-right: 0;
  }
  .instructor-picture-container img{
    margin: auto 0;
  }
  .instructor-info .name, .instructor-info p{
    margin: 0 !important;
  }
  .instructor-info .name{
    font-size: 1.1rem;
  }
}
</style>