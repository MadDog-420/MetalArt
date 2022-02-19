<template>
  <div class="gallery main">
    <Banner title='GALERÍA'>
      <img src="@/assets/img/Enmascarar_grupo_15.jpg">
    </Banner>
    <!-- shows gallery by cat
    <div class="container-fluid bg-dark" v-if="$route.params.cat">
      <Slider/>
    </div> -->
    <!-- shows when no cat param exists -->
    <div class="container-fluid" v-if="width >= 576">
      <First class="category-nav">
        <ul class="d-flex">
          <li id="cat_1" v-on:click="selectorFirst">Cultural</li>
          <li id="cat_2" v-on:click="selectorSecond">Religioso</li>
          <li id="cat_1" v-on:click="selectorThird">Personalizado</li>
          <span></span>
        </ul>
      </First>
    </div>
    <!-- shows when no cat param exists -->
    <div class="container-fluid bg-dark" >
      <First>
        <div class="gallery-row row gx-2 gx-md-3">
          <div class="my-col col-6 col-md-4">
            <div class="py-1 py-md-2" v-for="(item, index) in items_1" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" v-bind:item=item v-bind:index="index+'_1'" />
            </div>
          </div>
          <div class="my-col col-6 col-md-4">
            <div class="py-1 py-md-2" v-for="(item, index) in items_2" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" v-bind:item=item v-bind:index="index+'_2'" />
            </div>
          </div>
          <div class="my-col d-none d-md-block col-md-4">
            <div class="py-1 py-md-2" v-for="(item, index) in items_3" :key="item.id">
              <GalleryPicture v-bind:picture_src="'https://drive.google.com/uc?id='+item.id" v-bind:item=item v-bind:index="index+'_3'" />
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
import First from '@/components/First'
import GalleryPicture from './Picture'

export default {
  name: 'Gallery',
  components: {
    Banner,
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
    items_3: [],
    cult: [
      { id: '1qBh7viEosa1xODuAgnCKFsGuI9zyxGm8', title: 'Belleza azteca', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1Sens-kQWpAeAvPlqdbLUdHlcKv288qQ1', title: 'Marinera norteña (Perú)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '12gZAx8N43Utx80sO6e8KOn87fiDmYnuQ', title: 'Niña de Chivay', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1rmMSicVuk-bRJEE6p29XJCjBBOM4qYiw', title: 'Chalan', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1XRu4F51c5zP6aSGLTGLBUSoTkpGPv16E', title: 'Indio de Calca (Cusco Perú)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1JY8LTMug-NyWTLqBKLwEnRY2--bYXGjn', title: 'Balza totora (Puno Perú)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1sk3bC9qYaP9xzbk5Zm8d2Q-R03jtt0Dg', title: 'Desmochando', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1ogtcki2M_T0lURcV2iZnfRecBd0d4H8o', title: 'Titicaca', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '11jQhXZG07ITMHqWMotkCYmiDfKiZKkk1', title: 'Fuerza', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1DE1q7GPrCJcQVyVvz0p_kPO9guR_vpCq', title: 'Labrando', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1-lTUR_H-yxeN6op0LNGVvRifKVvtbEsA', title: 'Chullpas de Sillustani', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1l8h4Rp7hF9srUZMAcHJxMvDOJTREyefX', title: 'Pelea de toros (Arequipa Perú)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1rgA6vo_J2UVLPSn3_EKaPEkBocfO0y7H', title: 'Lobos', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1g2JY0hpIX9vq-v1iLvRFLnCcYswOuprW', title: 'Guerrero azteca', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1rmxZvE4iEB5Ft2Ib9x3O-ez2UR-7Kmuv', title: 'Moreno puneño', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '12SSedbOVDRH6uSzV9khw98aLGO-Rdfye', title: 'Fortaleza', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '15PhSFt5QLAcE3jykraJel0sRLg5rUm_e', title: 'Dualidad', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1yoBGbeYSPk0GHxDS-s9VK4D8ERSsEqFU', title: 'Caballo peruano de paso', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1ZWN9Pg0sKiamOCZkWgmCNcHxjF5gT7gI', title: 'Maravilla andina', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1WAgboxUakGgQMRX1U2YU3YodayDx-lwo', title: 'Cultura', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},

      { id: '1W9Z473NQrQFZSKSKJGybON5ZXD3KxU-P', title: 'Belleza morena', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1h22xfyV9pk8E0IUcgeLFeRA6u5WcPARk', title: 'Elegancia', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1Ei5wV8o5wMaoxMNOVfnXNZ9d3_JEJofd', title: 'Mujer y cultura', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1srh1WfUUvbxPOTe5rvxtsLpDumJCrdga', title: 'Jungla', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '10fwQJ5p1QwZh0IiUtQoLMKI-9VR-TaFH', title: 'Taurino', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '18TKgGqhL43Kdi0hjQdb1jMXIxEfrbbQU', title: 'Catedral de Arequipa Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1-UW2YVV8Aau99EJramdGuM3fy8frUP-C', title: 'Hípica', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1wRoKw6awzzGr2CRS361yYvd3bCgB-yPY', title: 'Imponencia', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1Ep7GLdTqMFEt2AEtE-va3GJ-4t-yl8gt', title: 'Tarea de campo', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']}
    ],
    reli: [
      { id: '1m0364e7MjMzyEcobA5UMDM4MI0T0xLBU', title: 'Jesús', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1sFpA595MC_zhKV-Z2JkNtcmE4n1Jmm1G', title: 'Pasión de Cristo', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1MhHfU3bv6WThIGQMmQqe1J1e0fx_xBOy', title: 'Señor de Luren (Perú)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1qOcOtwV26IYGQgMW_r1ogqKtYUthWTcd', title: 'Sagrado corazón (Perfil)', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '19rI7hXhS7a0fzuMM952MEiZe2Mp6xzYd', title: 'Señor de los Milagros', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1VYxcyhV8z9vYWIDlDOYlBUydWIAPTOMH', title: 'Última cena', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1mE6RPwTIgKRnt9lzbU1n9uAbzmZOgtB5', title: 'María', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1ELytVP3pGK8GWCVPAq5BAtVoUiYupVmR', title: 'Jesús pastor', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1j3_DHWx1wMMNsHMW6e6zNrBWLFSdHsf7', title: 'San Martín de Porres', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1uu182VbMgxVt58PiBRxADBUlLkhAmSNF', title: 'San Pablo', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1XE5bdHGAJWNQW3DouZk1eahC1_gWz3o7', title: 'Señor de Huanca', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1RGYEWNSiSvA6LHU_WbJCA7BMs3PRzhJk', title: 'Señor de la Sentencia', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1ydeur5MT_kv6nzUw-Eo-zwQ1LmiiizGg', title: 'Señor de la Misericordia', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1-qNutpYBRBBd77rhgxTdnFCFza1RDMAk', title: 'Virgen de Chapi', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},

      { id: '1p7Xhm0fnFUAkYIOfy9T_8VlpjddpcvEZ', title: 'Divino Niño Jesús', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']}
    ],
    cust: [
      { id: '129M79uu9E-O8jPA8HAib5BPPplJ2R6nA', title: 'Escalera de Jacob', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1PRkguvyKOmclEsQ4BeE0cWsh7UecP300', title: 'Logo Ministerio Público Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1K3aAF239H75C4g4ZZ91Ikv1mH7mZUO0O', title: 'Logo Colegio de Ingenieros Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1RjAMLSs27rB_TuY6rI89dMIVrJaosiXs', title: 'Escudo Policia Nacional del Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1JedGg3tp6stJ_KqxMV2UdYaY9PJigx7Z', title: 'Composición', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1ux3u2-Y_sJXCKZbPKnKytAEwZGxyuMR_', title: 'Escudo Melgar', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1dwI66zOQxk78Mm6C5F2PLEnkzxWbMkKd', title: 'Pergamino', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1Z0zWvheow3iSrEaRVIURW9zI5woGGb-W', title: 'Escudo de la Guardia Civil del Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1rxhVt1OTXP-NraS7qE063sYCRiBhwNXr', title: 'Escudo de la Guardia Republicana del Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1wpZq4zqpwSKno4SBn6ix-GIZtat5nE2k', title: 'Helicóptero Fuerza Aerea del Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1CqAh0E24RygOBgr_76tUmCuWNspketqE', title: 'Logo hotel Balsa Inn', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1bwT6jiqnU5LDBLdXQnXv1vPN8lsk5_Ty', title: 'Logo hotel El Buho', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1FWbfH3Bmrddknoj_yCHdTxN3Ux5Y6uE6', title: 'Logotipo facultad de ingeniería', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1z1uemMt5aBmeNBWByMmrsIlmhY72-SM6', title: 'Pala eléctrica mina', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1hUfmdtGTRACLuVkbp9iKAnezMVKYWHzD', title: 'Pala y camión minero', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1cZXAQWdAt75sEhTmTSpLzsHsqUUb5FX4', title: 'Camión minero personalizado', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1t_0dN_LM1NKoXYEYOmQotJgWTgIPSunl', title: 'Estrella del abogado', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1iGdLjTetIhNOEsbdho5N9eDdfhB9jo0-', title: 'Logotipo de hotel', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1HXp5Q-rpcX_3DqVvGLvxrfrTn_L4qYl8', title: 'Escudo de colegio de abogados de Arequipa', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},

      { id: '1vxso2ud4CMNPjtSVGocP2aK9kty2Ib-R', title: 'Placa recordatoria', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '10C2hThgsNOOMJPq0MoKJqCoof8F46j_C', title: 'Salvataje PNP', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '12zH-ST92-_nTJBgy3rnfadun5HChMLjW', title: 'Escudo Universidad Católica de Santa María', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1GA2tNQlOqZbhK1EdpIPqEWL8OQLtgGA6', title: 'Ministerio público Perú', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1u-SQBX6Ah5V2FB404Y6tPWA4RlFXczcs', title: 'Logotipo institucional', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1cZvbiJIaP4HvtTe6Wm24BPeCRP4vR7DP', title: 'Camión minero', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
      { id: '1JwbZrWjK6Ez7h66O0CHexa8tlK_3wogl', title: 'Logotipo fiscalía personalizado', sizes: ['COBRE: Máximo 80 cm de alto.', 'ALUMINIO: Máximo 60 cm de alto.', 'BRONCE: Máximo 30 cm de alto.']},
    ]
  }),
  watch: {
    '$route' () {
      this.setPicturesArray(this.$route.params.cat || 'cult'),
      this.setColumns()
    }
  },
  mounted() {
    document.title = 'Metal Art | Galería'
  },
  created() {
    window.addEventListener("resize", this.getDimensions),
    this.setPicturesArray(this.$route.params.cat || 'cult'),
    this.setColumns()
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      this.setColumns();
    },
    setPicturesArray(cat) {
      if (cat === 'cult') {
        this.items = this.cult;
      }
      if (cat === 'reli') {
        this.items = this.reli;
      }
      if (cat === 'cust') {
        this.items = this.cust;
      }
    },
    selectorFirst: function(event) {
      const elem = event.currentTarget;
      document.querySelector('.category-nav span').setAttribute('style', 'left: 0; width: '+elem.offsetWidth+'px');
      this.items = this.cult;
      this.setColumns();
    },
    selectorSecond: function(event) {
      const elem = event.currentTarget;
      const left_size = document.querySelector('#cat_1').offsetWidth;
      document.querySelector('.category-nav span').setAttribute('style', 'left: '+left_size+'px; width: '+elem.offsetWidth+'px');
      this.items = this.reli;
      this.setColumns();
    },
    selectorThird: function(event) {
      const elem = event.currentTarget;
      const left_size = document.querySelector('#cat_1').offsetWidth + document.querySelector('#cat_2').offsetWidth;
      document.querySelector('.category-nav span').setAttribute('style', 'left: '+left_size+'px; width: '+elem.offsetWidth+'px');
      this.items = this.cust;
      this.setColumns();
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
  },
  computed(){
    //this.setPicturesArray(this.$route.params.cat || 'cult'),
    //this.setColumns()
    console.log(this.$route.params)
  }
}
</script>

<style scoped>
.main{
  margin-top: -112px;
}
.main .container-fluid{
  padding: 0;
  margin-top: 70px;
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
  transition: all .1s linear;
}

.category-nav{
  padding: 0 !important;
}
.category-nav ul{
  position: relative;
  margin: 0;
  padding: 0;
}
.category-nav ul li{
  padding: 2rem;
  cursor: pointer;
}
.category-nav span{
  width: 119px;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  transition: all 0.5s linear;
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

@media (max-width: 991.9px){
  .main{
    margin-top: -80px;
  }
}
@media (min-width: 576px){
  .main >.container-fluid{
    margin-top: 0px;
  }
}
</style>
