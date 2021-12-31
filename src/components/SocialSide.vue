<template>
    <div class="social-side-container">
        <div class="facemetal p-2">
            <a href="https://www.facebook.com/pages/category/Arts---Crafts-Store/Metal-Art-433001477462190/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74" width="40"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Grupo_66" data-name="Grupo 66"><circle id="Elipse_3" data-name="Elipse 3" class="cls-1" cx="37" cy="37" r="37"/><path id="Trazado_117" data-name="Trazado 117" class="cls-2" d="M46.34,39.51l1.12-7.27h-7V27.53c0-2,1-3.93,4.1-3.93h3.17V17.42a38.1,38.1,0,0,0-5.63-.49c-5.74,0-9.49,3.48-9.49,9.78v5.53H26.25v7.27h6.39V57.07h7.85V39.51Z"/></g></g></g></svg>   
            </a>
        </div>
        <div class="whatsmetal p-2">
            <a href="https://wa.link/go0slp" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Grupo_65" data-name="Grupo 65"><circle id="Elipse_3" data-name="Elipse 3" class="cls-1" cx="37" cy="37" r="37"/><g id="Grupo_64" data-name="Grupo 64"><path id="Trazado_108" data-name="Trazado 108" class="cls-2" d="M14.67,59.38l3.21-12a22.17,22.17,0,1,1,8.83,8.75Zm12.64-7.71.75.45A18,18,0,1,0,21.91,46l.46.77-1.79,6.68Z"/><path id="Trazado_109" data-name="Trazado 109" class="cls-3" d="M45.44,39.8c-.91-.54-2.09-1.15-3.16-.71-.82.33-1.35,1.62-1.88,2.28a.78.78,0,0,1-1,.22,14.36,14.36,0,0,1-7.16-6.13.87.87,0,0,1,.11-1.2,4.84,4.84,0,0,0,1.3-2.11,4.64,4.64,0,0,0-.58-2.5c-.43-.93-.91-2.26-1.85-2.78a2.53,2.53,0,0,0-2.74.41,5.55,5.55,0,0,0-1.93,4.41,6,6,0,0,0,.17,1.4A11.55,11.55,0,0,0,28,36.19a23.7,23.7,0,0,0,1.4,2.13A21.72,21.72,0,0,0,35.53,44a17.9,17.9,0,0,0,3.8,1.81,8.35,8.35,0,0,0,4.41.7,5.35,5.35,0,0,0,4-3A2.57,2.57,0,0,0,47.93,42C47.71,40.93,46.29,40.31,45.44,39.8Z"/></g></g></g></g></svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SocialSide',
}
</script>

<style scoped>
a svg{
    fill: rgba(255,255,255,1);
}
.social-side-container{
    width: 56px;
    position: sticky;
    top: calc(100% - (112px + 0.5rem));
    left: 100%;
    z-index: 999;
}
header .nav-container .cls-1, header .container .cls-2{fill:#fff;}
.cls-1{fill-rule:evenodd;}
.facemetal .cls-1{fill:#4272b8;}
.facemetal .cls-2{fill:#fff;}

.whatsmetal .cls-1{fill:#25D366;}
.whatsmetal .cls-2,.cls-3{fill:#fff;}
.whatsmetal .cls-3{fill-rule:evenodd;}

@media (max-width: 576px) {
    .social-side-container{
        display: none;
    }
}
</style>