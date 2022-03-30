<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 5
      h1 Protocolos y procedimientos
    .bloque-texto-a.color-secundario.p-4.p-md-3.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema5/img1.png', style="width: 450px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Protocolo y procedimiento son dos términos utilizados permanentemente en las organizaciones, mientras #[span.txt-deco1 el protocolo se refiere a las reglas, lineamientos o pautas establecidas para determinado proceso; el procedimiento es la secuencia de pasos o actividades que se deben surtir para concluir el proceso].
    .row.mb-4.bg-color12
      .col-12.px-5
        p.mb-5 Como los dos términos se relacionan con procesos es importante detallar los elementos que intervienen en un proceso.
        .row.mb-5.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 6] Elementos de un proceso
            figure
              img(src='@/assets/curso/tema5/img2.svg', style="width: 1200px").m-auto
        .row.mb-5.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema5/img3.svg', style="width: 80px").m-auto
          .col
            p.mb-0 En servicio y atención a clientes es indispensable contar con protocolos y procedimientos que describan claramente los pasos que se deben realizar para los diferentes procesos que tenga la organización, como ejemplo vea la siguiente figura.
        .row.mb-5.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 7] Ejemplo de un protocolo
            figure
              img(src='@/assets/curso/tema5/img4.svg', style="width: 800px").m-auto
              figcaption.mt-4 Nota. SENA (2020).
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Es recomendable utilizar diagramas o esquemas para presentar el protocolo o procedimiento a los interesados, con lo cual se logran las siguientes ventajas:
            ul.lista-ul.ms-3.mb-4
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se lee más fácil y capta mayor atención.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se estandarizan los pasos.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Sirve de ilustración para capacitar al personal o guiar a los clientes.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se evitan demoras.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se aclaran malentendidos.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se aminora el tiempo de explicación.
              li 
                i.fas.fa-angle-right(style="color: #7F4FC7")
                | Se ahorran recursos (económicos, de personal y de tiempo).
            .row.align-items-start.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
              .col
                p Para la ilustración del protocolo o proceso en áreas administrativas es ideal utilizar los diagramas de flujo o flujogramas, con el uso de los respectivos símbolos ANSI (American National Estándar Institute); sin embargo, si no se está familiarizado con esta simbología, los negocios o pequeñas empresas pueden utilizar cualquier herramienta de esquemas de secuencia (una de las más sencillas es SmartArt de Word).
            .row.justify-content-center
              .col-11.bg-color5
                .row.p-4.align-items-center
                  .col
                    p.mb-0 Para ampliar información el video #[span.txt-deco2 Simbología ANSI para la elaboración de flujogramas], que se encuentra en el material complementario e ilustra cómo utilizar la simbología ANSI.
              figure
                img(src='@/assets/curso/tema1/img9.svg').img-deco2
          .col-lg-5
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema5/img2.png', style="width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
