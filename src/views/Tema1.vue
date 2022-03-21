<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 1
      h1 Contexto de la organización
    .row.mb-4.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p Cuando se habla del contexto de la organización de inmediato se relaciona con el entorno, el gobierno, la economía y el mercado donde se mueve la empresa o negocio. Para el caso de servicio y atención a clientes es necesario identificar el capital, los accionistas, proveedores, recursos, valores filosóficos, políticas del sector económico, competidores, condiciones laborales y del mercado de la empresa que quiere ofrecer productos y servicios de acuerdo con las necesidades y expectativas de clientes o usuarios.
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 40px")
          .col
            p.txt-deco1 Entre más se conozca y analice el contexto del mundo circundante, mejores serán las estrategias que se logren establecer para llegarle al público objetivo.
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img1.png', style="width: 650px")
      .col-12
        p Dentro de los elementos del contexto la cultura organizacional invita a cada trabajador no solo a involucrarse con su organización, sino a comprometerse con la colectividad, es decir, a adoptar como propios los valores, principios, políticas y protocolos de la organización.
    .row.p-5.mb-5.bg-color2
      .col-12
        figure
          img(src='@/assets/curso/tema1/img2.svg', style="width: 1200px").m-auto
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Sector y actividad económica
    .row.mb-4.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        p Tradicionalmente se han contemplado los sectores económicos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Primario, también denominado extractivo o agropecuario del cual hacen parte las actividades agrícola, pecuaria, silvícola y extractiva.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Secundario, también conocido como el industrial o manufacturero, que implica el uso de materia prima para su transformación y creación de un nuevo producto.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Terciario referente al comercio de artículos al por mayor y al detal y los servicios (educación, transporte, hotelería, medicina y servicios personales).
        p En la actualidad se contempla un cuarto sector donde se encuentran  las telecomunicaciones (comunicación satelital, telefonía celular, Internet y redes sociales), investigación y nanotecnología. #[span.txt-deco1 La población mundial ha sido testigo en estos últimos tiempos de la repercusión que ha tenido este cuarto sector, debido a que los anteriores se han visto fuertemente impactados por el uso de la tecnología y las comunicaciones, así como por los avances y resultados de los modernos procesos de investigación y nanotecnología].
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img2.png', style="width: 650px")
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Sector Primario").bg-color3
        .row.align-items-center.justify-content-center
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', style="width: 400px")
          .col-lg-6
            .p-4
              p.txt-deco1 Sector Primario
              ul.lista-ul
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Comprende explotación y obtención de recursos naturales.
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Como agricultura, ganadería, pesca, minería, explotación forestal.
      .py-3.py-md-4(titulo="Sector Secundario").bg-color4
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            .p-4
              p.txt-deco1 Sector Secundario
              ul.lista-ul
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Comprende actividades de transformación de materia prima e insumo en nuevos productos.
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Como fabricación, industria, manufactura, artesanía, producción energética, entre otros.
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img6.svg', style="width: 300px")
      .py-3.py-md-4(titulo="Sector Terciario").bg-color3
        .row.align-items-center.justify-content-center
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 360px")
          .col-lg-6
            .p-4
              p.txt-deco1 Sector Terciario
              ul.lista-ul
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Trata del comercio y los servicios.
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Como ventas, educación, transporte, hotelería, medicina, recreación, peluquería.
      .py-3.py-md-4(titulo="Sector Cuaternario").bg-color4
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            .p-4
              p.txt-deco1 Sector Cuaternario
              ul.lista-ul
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  |  Abarca los relacionado con las comunicación, la investigación y la nanotecnología.
                li 
                  i.far.fa-circle(style="color: #7F4FC7")
                  | Como servicios de comunicación telefónica, celular, redes, Internet, vacunas, creación de sistemas electrónicos.
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img8.svg', style="width: 340px")
    .row.justify-content-center
      .col-11.bg-color5
        .row.p-4.align-items-center
          .col
            p.mb-0 Para ampliar la información se recomienda la lectura del artículo #[span.txt-deco2 “Las TIC y la nanotecnología”], que se encuentra en el material complementario.
      figure
        img(src='@/assets/curso/tema1/img9.svg').img-deco1
    p.mb-5 Para ampliar la información se recomienda la lectura del artículo #[span.txt-deco2 “Las TIC y la nanotecnología”], que se encuentra en el material complementario.
    .row.mb-5.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img3.png', style="width: 650px")
      .col-lg-8
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 40px")
          .col
            p.txt-deco1 Por otro lado, la actividad económica hace parte como una subdivisión de cada uno de los sectores económicos ya identificados, representados por el conjunto de acciones propias del ciclo económico, por ejemplo, extracción, fabricación o producción, construcción, distribución, intercambio y consumo de bienes y servicios (administrativos, financieros, salud, asistencia social, enseñanza).
        p Las actividades pueden ser desarrolladas por diversos agentes económicos, desde la unidad familiar, la empresa legalmente constituida o por el mismo Estado, lo cual se relaciona directamente con el origen de los recursos utilizados para iniciar la inversión:
        ul.lista-ul
          li 
            i.far.fa-circle(style="color: #7F4FC7")
            | #[b Privados]: si los recursos provienen exclusivamente de particulares.
          li 
            i.far.fa-circle(style="color: #7F4FC7")
            | #[b Mixtos]: si se combinan recursos públicos y privados.
          li 
            i.far.fa-circle(style="color: #7F4FC7")
            | #[b Públicos]: corresponden a dineros provenientes del Estado.
    .row.mb-5.bg-color6
      .col-12.px-5
        .row.justify-content-center
          .col-lg-9.mt-5.mb-5
            .titulo-sexto.color-acento-contenido
              p.mb-0 Actividades económicas
            .tabla-b.color-acento-contenido
              table
                caption Nota. Tomado de Naciones Unidas (2009).
                tr
                  th(style="width: 20%; background-color: #7F4FC7").text-white.text-center Sección
                  th(style="width: 20%; background-color: #7F4FC7").text-white.text-center Divisiones
                  th(style="background-color: #7F4FC7").text-white.text-center Descripción
                tr
                  td A
                  td 01-03
                  td Agricultura, ganaderia, silvicultura y pesca.
                tr
                  td B
                  td 05-09
                  td Explotación de minas y canteras.
                tr
                  td C
                  td 10-33
                  td Industrias manufactureras.
                tr
                  td D
                  td 35
                  td Suministro de electridicad, gas, vapor y aire acondicionado.
                tr
                  td E
                  td 36-39
                  td Suministro de agua; evacuación de aguas residuales, gestión de desechos y descontaminantes.
                tr
                  td F
                  td 41-43
                  td Construcción.
                tr
                  td G
                  td 45-47
                  td Comercio al por mayor y al por menor; reparación de vehiculos automotores y motocicletas.
                tr
                  td H
                  td 49-53
                  td Transporte y almacenamiento.
                tr
                  td I
                  td 55-56
                  td Actividades de alojamiento y de servicio de comidas.
                tr
                  td J
                  td 58-63
                  td Información y comunicaciones.
                tr
                  td K
                  td 64-66
                  td Actividades financieras y de seguros.
                tr
                  td L
                  td 68
                  td Actividades inmobiliarias.
                tr
                  td M
                  td 69-75
                  td Actividades profesionales, científicas y técnicas.
                tr
                  td N
                  td 77-82
                  td Actividades de servicios administrativos y de apoyo.
                tr
                  td O
                  td 84
                  td Administración pública y defensa; planes de seguridad social de afiliación obligatoria.
                tr
                  td P
                  td 85
                  td Enseñanza
                tr
                  td Q
                  td 86-88
                  td Actividades de atención de la salud humana y de asistencia social.
                tr
                  td R
                  td 90-93
                  td Actividades artísticas, de entretenimiento y recreativas.
                tr
                  td S
                  td 94-96
                  td Otras actividades de servicio.
                tr
                  td T
                  td 97-98
                  td Avtividades de los hogares como empleadores; actividades no diferenciadas de los hogares como productores de bienes y servicios para uso propio.
                tr
                  td U
                  td 99
                  td Actividades de organizaciones y órganos extraterritoriales.
        .row.mb-5
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img11.svg', style="width: 70px")
          .col
            p Desde la versión original de la Clasificación Internacional Industrial Uniforme - CIIU, la mayoría de los países de todo el mundo la vienen utilizando o han elaborado clasificaciones nacionales derivadas de ella. Por consiguiente, la CIIU ha proporcionado orientación a los países para la elaboración de clasificaciones nacionales y se ha convertido en un instrumento importante para comparar a nivel internacional los datos estadísticos sobre las actividades económicas (Naciones Unidas, 2009).
        .row.mb-5.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img4.png', style="width: 650px")
          .col-lg-8
            h4.txt-deco3 Normatividad y políticas del sector
            p Cada uno de los sectores y actividades económicas deben obedecer a unas reglas y estándares definidos por el mismo mercado o entidades reguladoras, es así como en Colombia existe un gran portafolio de entidades reguladoras como la Superintendencia de Industria y Comercio, bancaria, de salud, de economía solidaria y   de servicios públicos; junto con otras como lo son: Invima, puertos y transporte, alcaldías, Aeronáutica civil, los mismos ministerios del país, junto con las autoridades públicas encargadas del control, inspección y vigilancia para las empresas públicas como Contraloría, Fiscalía, el Departamento Nacional de Planeación DNP, el Departamento Nacional de Estadísticas DANE, la Fiscalía, la Personería, la Dirección de Impuestos Nacionales DIAN, entre otros.
            .cajon.color-primario.p-4
              p.mb-0 De acuerdo con lo anterior, cuando se quiere disponer de un servicio de atención a clientes es indispensable identificar cuáles son las entidades que regulan la actividad económica, el mercado y las demás exigencias del sector económico, de calidad y de la localidad o territorio de cobertura.
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4.txt-deco3 Valores y principios
            p Toda organización sea de índole familiar, empresarial, social, al momento de su creación parte de unos sueños, principios y valores que le dan sentido y estos a su vez se convierten en los pilares fundamentales de actuación y representación del desempeño de las personas, es así como las empresas privadas deciden adoptar unos valores y principios, a lo cual, en algunas de ellas denominan código de actuación o código ético; mientras que las entidades públicas por decreto se acogen al código de integridad. 
            p Para conocer más acerca de los valores y principios se recomienda ver el video #[span.txt-deco2 Código de integridad] y el #[span.txt-deco2 valor público], el cual se encuentra en el material complementario.
          .col-lg-4
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema1/img5.png', style="width: 650px")
    separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Imagen personal y etiqueta empresarial
    .row.mb-5.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img6.png', style="width: 650px")
      .col-lg-7
        p La imagen personal es el conjunto de características físicas, atributos y actitudes que proyecta una persona y que los demás perciben. Es una carta de presentación que expresa la manera como cada persona pretende comunicarse y lo que transmite su presencia. Desde el hogar y la educación básica se promulgó por bastantes años el famoso “Manual de urbanidad y buenas maneras” del venezolano Manuel Antonio Carreño (1812-1874), ahora tenemos versiones actualizadas debido a los avances y cambios en los ambientes democráticos y de pluralidad, como la guía del Ministerio de Educación Nacional en la serie de cartillas “Formar para la ciudadanía sí es posible” donde se encuentran los Estándares básicos de competencias ciudadanas (Ministerio de Educación Nacional, 2004).
        .row
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
          .col
            p Se espera que la población apropie mediante su educación media-básica y en las mejores condiciones de atención y calidad, las competencias ciudadanas que tratan del desarrollo de habilidades cognitivas, emocionales y de comunicación, así mismo, se espera evidenciar su integralidad a través de su actuar y desempeño diario, lo que posibilita una sociedad ética y con responsabilidad ciudadana.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Imagen personal" :icono="require('@/assets/curso/tema1/img12.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4.txt-deco4 Imagen personal: vestuario, cuidados, maquillaje, vocabulario, comportamientos
            p La imagen vale más que mil palabras, la primera impresión es la que cuenta, el vestido habla, estas y muchas otras expresiones han sido escuchadas en sendos escenarios, y cada una de ellas tiene su razón de ser.  Por ello, es importante hacer un autoanálisis de la composición corporal, estatura, color y contextura de la piel y del cabello, para elegir lo que más favorezca.  Ahora, no solo el vestir apropiadamente es suficiente, la imagen también se afecta o favorece de acuerdo con el vocabulario, el tono que se utilice, las posturas, los movimientos, la mirada y los gestos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img14.svg', style="width: 300px").m-auto
      .py-4.py-md-5(titulo="Etiqueta empresarial" :icono="require('@/assets/curso/tema1/img13.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img15.svg', style="width: 390px").m-auto
          .col-lg-7
            h4.txt-deco4 Etiqueta empresarial:  logo, colores, indumentaria, uso de dotación
            p Es importante fijarse en lo que cada trabajador representa para la organización, ya que, al vincularse a una organización, debe adoptar elementos de la imagen organizacional dispuesta, por ello es común que en la inducción de los trabajadores se presente lo relacionado con el nombre, logo, colores, distintivos, dotación de los trabajadores, para que sea debidamente utilizada en cada puesto de trabajo.
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 Además de adoptar comportamientos determinados por la etiqueta social y empresarial, el trabajador de una organización debe conocer y adoptar la imagen visual o identidad corporativa, es decir, la manifestación física de la marca, especialmente con el porte decoroso de la ropa de trabajo, dotación o insignias aportadas por la empresa.
        .tarjeta.color-primario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Protocolo y Etiqueta
                  p.text-small.text-white Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente documento. Protocolo y Etiqueta. Saber estar y saber comportarse, específicamente el Capítulo 4 - Imagen persona”
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8012&pg=78" target="_blank")
                    span(style="color: #000000 !important") Descargar
                    i.fas.fa-file-download(style="color: #000000 !important")
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img17.svg', style="width: 80px")
          .col
            p.txt-deco1 Asimismo, se recomienda consultar en el reglamento del aprendiz y en la sede a donde corresponde su programa de formación cuáles son las directrices para el uso de la marca institucional SENA y del uniforme de aprendiz, si aplica en su región.
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img7.png', style="width: 390px").m-auto
  
</template>

<script>
export default {
  name: 'Tema1',
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
