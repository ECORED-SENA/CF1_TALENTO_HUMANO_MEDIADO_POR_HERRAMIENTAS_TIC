<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 3
      h1 Clientes y usuarios
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-start.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
          .col
            p La mayor parte de las empresas que comercializan o distribuyen bienes o servicios, denominan cliente a la persona o empresa que compra una y otra vez, mientras que las empresas de servicio exclusivos como las entidades de salud (clínicas, EPS, IPS), los denominan usuarios.
        h4.txt-deco3 Clasificación y tipología
        p Los clientes se pueden clasificar por características de tiempo como actuales o potenciales, también se pueden clasificar según su lugar de ubicación con respecto a la empresa (internos o externos) y adicionalmente se deben tener presente los consumidores, que son beneficiados indirectos por la compra efectuada por otra persona o empresa (por ejemplo, las mascotas).
      .col-lg-5
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
    .row.mb-5.bg-color9
      .col-12.p-5
        h4.text-center.mb-5 Clases de clientes
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width: 1000px").m-auto
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img2.png', style="width: 450px").m-auto
      .col-lg-8
        h4.txt-deco3 Tipología de clientes
        p.mb-5 En los medios comerciales, industriales y de servicio se puede hallar una gran diversidad de tipología de clientes según diversos criterios:  el papel que juega, la personalidad, la relación con la empresa, la rentabilidad que representa.
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width: 800px").m-auto
    .row.bg-color11
      .col-12.p-5
        .row.mb-5
          .col-lg-7.mb-4.mb-lg-0
            h4.txt-deco3 Cadena de suministro (SCM)
            p Por sus iniciales en inglés, #[i Supply Chain Management] es la gestión de la cadena de suministro, #[span.txt-deco1 el recorrido que le lleva a un productor o generador de servicio disponer de los recursos humanos], de información, técnicos y tecnológicos para producir o entregar el nuevo producto o servicio a sus clientes.
            p Es así como se encuentra que las organizaciones son un eslabón en esa cadena de suministro, ya que por si solas no podrán ser rentables, sino que antes, mientras y después de ellas existen muchos otros actores:
          .col-lg-5
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema3/img3.png', style="width: 450px").m-auto
        h4.text-center.txt-deco4.mb-5 Eslabones de la cadena de suministro
        figure
          img(src='@/assets/curso/tema3/img3.svg', style="width: 800px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
