<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: #FFFFFF")
      h1 Introducción
    .row.mb-4.align-items-center.bg-color1
      .col-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img1.png', style="width: 200px").m-auto
      .col
        p Para poder adquirir conocimientos y habilidades en la atención de los clientes, sea de una organización dedicada a la producción o comercialización, es necesario identificar el contexto de esa organización tanto de sus aspectos externos, como de los recursos y procesos internos; en ese #[span.txt-deco1 orden de ideas lo que hallará en este espacio quiere capturar su plena atención frente a los aspectos que se deben conocer de manera cada vez más concreta, según el tipo de organización que se quiera analizar o donde se pretenda prestar un servicio]. A continuación, se presenta un video que recoge la generalidad del presente componente:
        figure.d-flex.justify-content-end
          img(src='@/assets/curso/intro/img1.svg', style="width: 100px")
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
