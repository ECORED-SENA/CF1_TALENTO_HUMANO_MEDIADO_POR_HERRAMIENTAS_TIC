<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 4
      h1 Portafolio de servicios
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px").m-auto
      .col-lg-7
        p Es el documento, plegable, revista, tarjeta o página web en la que la empresa presenta los productos o servicios que tiene a disposición de clientes, proveedores, otras empresas y comunidad en general. Debe presentarse en un lenguaje claro, visible, con manejo de color y texto visible, agradable y en concordancia con la imagen organización establecida a su interior. Los formatos de presentación pueden ser físicos o digitales, hoy es más común encontrarlos en los sitios web de las empresas, y en lo mínimo debe contar con la siguiente información:
        ul.lista-ul.ms-3
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | Nombre, logo, eslogan, dirección.
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | Canales de comunicación (puntos de contacto, teléfonos, redes, página web, prensa, boletines, espacio para PQRS, chat).
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | #[b.txt-deco1 Misión]: razón de ser de la empresa. 
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | #[b.txt-deco1 Visión]: proyección de crecimiento, cobertura, posicionamiento.
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | Oferta de productos o servicios: características específicas, precios, formas de adquisición o acceso.
          li 
            i.fas.fa-angle-right(style="color: #7F4FC7")
            | Certificaciones de calidad u otras representativas.
    p.mb-5 Por ejemplo, visualice la manera cómo el SENA presenta sus servicios, ver figura.
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Figura 5] Portafolio de servicio SENA
    figure
      img(src='@/assets/curso/tema4/img1.svg', style="width: 800px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
