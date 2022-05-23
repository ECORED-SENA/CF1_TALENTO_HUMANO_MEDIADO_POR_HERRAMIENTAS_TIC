<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 2
      h1 Productos y servicios
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p.mb-2 La determinación de productos y servicios está relacionada con la característica de tangibilidad o intangibilidad, es decir, mientras los productos son bienes u objetos físicos que se pueden apreciar con los sentidos de visión, tacto, olfato, etc., los servicios resultan intangibles, se trata de actividades que tienen valor para la persona que los recibe.
          span (Fischer, 2011).
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img1.svg', style="width: 650px")
    .row.mb-5.bg-color7
      .col-12.px-5
        .row.my-5
          .col-lg-6.p-4.linea1
            .row
              .col-12
                figure.mb-5
                  img(src='@/assets/curso/tema2/img2.svg', style="width: 200px")
              .col-12.bg-color14
                p.text-white Los bienes o artículos representados físicamente tienen singulares características dadas por la forma, tamaño, color, peso, calidad, contextura, olor, etc., aspectos que son evidentes a los ojos del comprador.  El oferente de productos debe conocer y comunicar claramente estas y otras características, como la materia prima utilizada, insumos, materiales, calidad, procedencia, fecha de fabricación y fecha de expiración; así como también las utilidades, instrucciones para su uso y conservación.  Adicionalmente, debe anunciar al comprador las condiciones de garantía y mantenimiento, dependiendo del tipo de producto.
            figure.d-flex.justify-content-end
              img(src='@/assets/curso/tema2/img4.svg', style="width: 100px")
          .col-lg-6.p-4
            .row
              .col-12
                figure.mb-5
                  img(src='@/assets/curso/tema2/img3.svg', style="width: 200px")
              .col-12.bg-color14
                p.text-white Los servicios concebidos como actividades que implican un gasto de energía difieren del producto por su condición de “no material” o intangibilidad, otra característica es la perecibilidad relacionada con que no pueden almacenarse (si no se usan en el momento, perecen). También se caracterizan por su heterogeneidad, cada servicio es una experiencia única e irrepetible, y finalmente por su simultaneidad porque se consumen al mismo tiempo que se producen (Fischer, 2011).
            figure.d-flex.justify-content-end
              img(src='@/assets/curso/tema2/img4.svg', style="width: 100px")
    .row.mb-4.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .row.align-items-start
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
          .col
            p El servicio tal como considera Fischer en su obra El desafío del servicio, debe convertirse en una experiencia IEM (inteligente, entretenido y memorable) tanto para quien la entrega como para quien la recibe, es el involucramiento con el cliente en un evento totalmente positivo y agradable, como el montaje de una obra de teatro. Las empresas dedicadas a la prestación de servicios también se les denomina de servucción, así como a las que producen bienes, se le denomina de producción. 
        p Es importante observar el video #[span.txt-deco2 “Cómo enamorar cuando el servicio no depende de usted”], que se encuentra en el material complementario, el cual lleva a concientizar al empresario o negociador a controlar todo cuanto sucede con sus socios, aliados, proveedores, contratistas, empleados, es decir, con todas las personas involucradas en su empresa, porque como sucede en todos los negocios se depende en muchas instancias de otros, entonces será preciso seguir esas recomendaciones.
      .col-lg-4
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img1.png', style="width: 650px")
    p.mb-5 Independientemente del tipo de servicio y de acuerdo con los estudios de E. Sasser y R. Fischer (2011), los atributos indispensables del servicio son:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img5.svg')
              figcaption.mt-4 Nota: Adaptado por (Fischer,2011)
          .tarjeta.color-acento-botones.p-3(x="12.6%" y="77.3%" numero="1")
            p.mb-0 Del cliente y de su propiedad.
          .tarjeta.color-acento-botones.p-3(x="2%" y="51.5%" numero="2")
            p.mb-0 Que cumpla con lo requerido por el cliente.
          .tarjeta.color-acento-botones.p-3(x="6.2%" y="27.2%" numero="3")
            p.mb-0 Relación del personal con el cliente.
          .tarjeta.color-acento-botones.p-3(x="28%" y="3.6%" numero="4")
            p.mb-0 Diversidad y servicios afines o complementarios.
          .tarjeta.color-acento-botones.p-3(x="81%" y="11.4%" numero="5")
            p.mb-0 Disposición del ambiente donde se ofrece el servicio.
          .tarjeta.color-acento-botones.p-3(x="98.1%" y="38.4%" numero="6")
            p.mb-0 Accesible en tiempo y espacio.
          .tarjeta.color-acento-botones.p-3(x="93.7%" y="67.7%" numero="7")
            p.mb-0 Adecuado a la oferta y el cliente.
          .tarjeta.color-acento-botones.p-3(x="63.5%" y="88%" numero="8")
            p.mb-0 Justo y competitivo.
    .row.mb-5.bg-color8
      .col-12.px-5
        p.mb-5 El servicio como experiencia es y seguirá siendo un aspecto muy interesante para el mundo de las organizaciones y la economía de los países, muestra de ello son las siguientes teorías:  momentos de verdad, ciclo del servicio, triángulo del servicio y cultura de servicio.
        .row.align-items-center.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img7.svg', style="width: 450px")
          .col-lg-8
            h4.txt-deco3 Momentos de verdad
            p El autor español Jan Carlzon en su libro denominado “El momento de la verdad” expone ampliamente las estrategias que implementó en la aerolínea Scandinavian Airlines SAS que gerenciaba, fomentando una transformación cultural con la cual libró de la quiebra en tan solo un año, la clave de su estrategia fue el enfoque en el servicio al cliente, creó conciencia plena de las sensaciones que pueden llevarse los clientes desde el momento mismo en que observa la marca, entra al establecimiento, recibe una llamada o saludo,  recibe información o asesoría del servicio, en conclusión en todos los momentos en que el cliente está en contacto con la organización, incluso en momentos posteriores a la venta o servicio. Dentro de las frases célebres de Carlzon está:
            p.txt-deco1 “El único activo son las personas que están satisfechas con nuestro servicio y que desean volver a volar con nosotros.  Los aviones que tenemos no valen nada si los pasajeros no quieren volar con nosotros”.
        .row.align-items-center.mb-5
          .col-lg-8.mb-4.mb-lg-0
            .row.align-items-start
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
              .col
                p Además de estar enfocado en el cliente (lo que observa, dice, calla, pregunta, siente, quiere, etc.), adoptó otras transformaciones centradas en las relaciones con el personal interno, buscando hacer menos jerarquizada la organización, mucho más participativa, donde se escuchará con todos los sentidos a los directos encargados de tratar con el cliente. Para conocer más de las estrategias utilizadas por Jan Carlzon en la transformación cultural de Scandinavian Airlines SAS, ingrese y lea apartes del texto #[b El momento de la verdad], que se encuentra en el sistema de bibliotecas del SENA.
            .tarjeta.color-primario.p-3.mb-4
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema1/img16.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1.text-white El momento de la verdad
                      p.text-small.text-white Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente documento.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/55491" target="_blank")
                        span(style="color: #000000 !important") Descargar
                        i.fas.fa-file-download(style="color: #000000 !important")
            p Hoy, los momentos de verdad pueden ser millones al día, aplicables a todo tipo de organizaciones sociales y empresariales, están representados por todas las interacciones que tienen los clientes con la organización, y la responsabilidad de los prestadores de servicio es hacer de cada momento una experiencia memorable.
          .col-lg-4
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema2/img2.png', style="width: 450px")
        h4.txt-deco3 Ciclo de servicios
        p.mb-5 Es la secuencia de pasos o momentos de verdad que experimenta un cliente al interactuar con la organización, regularmente se trata de exponer cada una de las acciones dispuestas para el cliente. Es importante que la organización observe detenidamente esta secuencia y ubique los momentos críticos para adoptar correctivos, de tal manera que en la siguiente experiencia se obtengan mejores resultados.
        .row.justify-content-center.mb-5
          .col-lg-7
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img8.svg')
              .tarjeta.color-acento-botones.p-3(x="2.8%" y="73.4%" numero="1")
                p.mb-0 Ajustar, tomar medidas correctivas o de mejora.
              .tarjeta.color-acento-botones.p-3(x="5.6%" y="30%" numero="2")
                p.mb-0 Divulgar, publicitar, atraer, promocionar.
              .tarjeta.color-acento-botones.p-3(x="97.2%" y="18%" numero="3")
                p.mb-0 Vender, prestar servicio, distribuir, facturar, cobrar.
              .tarjeta.color-acento-botones.p-3(x="85%" y="82%" numero="4")
                p.mb-0 Detectar los puntos críticos, evaluar venta o servicio, atender quejas, reclamos, solicitudes.
        .row.align-items-center.mb-0.mb-lg-4
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img9.svg', style="width: 450px")
          .col-lg-8
            h4.txt-deco3 Triángulo de servicio
            p El modelo creado en la década de los 80 por el empresario #[span.txt-deco1 Alemán Karl Albrecht, quien en dos de sus obras “Gerencia del servicio” (2003)  y “La revolución del servicio” (2004)], representa en esta estructura los elementos que indispensablemente deben girar en torno al cliente, por eso, la necesidad básica de preguntar por sus expectativas, deseos, necesidades, escuchar sus solicitudes, quejas, sugerencias, reclamos; como también indagar por sus condiciones demográficas (localidad, edad, género, economía) y psicográficas (condición social, necesidades, expectativas, gustos, motivaciones, restricciones).
            .row
              .col-12.bg-color13
                .p-4
                  .row
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema2/img10.svg', style="width: 35px")
                    .col
                      p.mb-0 La estrategia se refiere a las pautas, políticas, lineamientos, filosofía organizacional, normas y promesa de valor que mantiene la organización con el fin de atraer, retener y fidelizar a los clientes; estrategia que debe ser perfectamente comunicada a todos los demás elementos: a los clientes internos o personal, al sistema de información y comunicación u otros medios tecnológicos y por supuesto al cliente externo.
        p El personal o punto de contacto se refiere tanto a personal que directamente atiende al cliente o al personal oculto para los clientes, porque finalmente todos los trabajadores trabajan en función de cumplir con los requerimientos de los clientes; en las actuales circunstancias (en pandemia o postpandemia), #[span.txt-deco1 donde las ventas son en línea o a partir de tiendas virtuales, este elemento de personal puede verse reemplazado por el punto de contacto].
    .row.mb-4.bg-color9
      .col-12.p-5
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img11.svg', style="width: 650px").m-auto
    .row.mb-4.bg-color10
      .col-12.px-5
        .row.align-items-center.mt-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 El sistema se refiere a la tecnologías o técnicas dispuestas para la información, comunicación, traslado, transporte, distribución del producto o servicio, incluso a la misma disposición, ambientación, ergonomía, espacios, máquinas, parqueaderos, ascensores, dispositivos de turno y despacho, todos en función de escuchar y atender los requerimientos del cliente, alineados con la estrategia organizacional y claramente conocidos y manejados por el personal o punto de contacto.
            h4.txt-deco3 Cultura de servicio
            p El fomento de una cultura de servicio parte del ejemplo, por tanto, los directivos son los primeros responsables de comunicar la estrategia de servicio, de disponer los recursos humanos, técnicos y tecnológicos para la atención de los clientes y sobre todo, de demostrar con sus comportamientos y actitudes que están #[span.txt-deco1 al servicio de su organización, si los trabajadores (clientes internos) están satisfechos y motivados, ellos se encargarán de atender muy bien a los clientes externos].
            p.mb-4 Se invita a ver el video #[span.txt-deco1 “Cómo establecer una cultura de servicio centrada en el cliente”], el cual se encuentra en el material complementario y donde podrá comprender la coherencia que debe existir entre lo que se dice, piensa y hace con destino al cliente, de quien depende el negocio, por lo que el personal interno debe estar suficientemente motivado y comprometido con la misión del negocio y el empresario dispuesto a cambiar el sentido de la pirámide organizacional, dejar de pensar en sí misma y enfocarse en el cliente interno, que ellos se encargarán de satisfacer al cliente externo.
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="zoom-in-down")
              img(src='@/assets/curso/tema2/img3.png', style="width: 400px").m-auto
        h4.txt-deco3 Canales de atención
        p.mb-5 Son los espacios o medios dispuestos por la organización para establecer interacción con los clientes o usuarios, los cuales pueden darse por diversos mecanismos que se relacionan a continuación:
        .row.justify-content-center
          .col-lg-10
            SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
              .tarjeta.color-acento-botones.h-100
                img(src='@/assets/curso/tema2/img4.png', style="width: 800px")
                .row(style="height: 245px")
                  .px-5.pt-3
                    ul.lista-ul
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Puntos de atención
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Puntos de consulta
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Asesores de servicio
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Asesores comerciales
              .tarjeta.color-acento-botones.h-100
                img(src='@/assets/curso/tema2/img5.png', style="width: 800px")
                .row
                  .px-5.pt-3
                    ul.lista-ul
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Chat
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | WhatsApp
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Portal web
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Redes sociales
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Correo electrónico
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Dispositivos móviles
              .tarjeta.color-acento-botones.h-100
                img(src='@/assets/curso/tema2/img6.png', style="width: 800px")
                .row(style="height: 245px")
                  .px-5.pt-3
                    ul.lista-ul
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Prensa
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Boletín
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Publicaciones
              .tarjeta.color-acento-botones.h-100
                img(src='@/assets/curso/tema2/img7.png', style="width: 800px")
                .row(style="height: 245px")
                  .px-5.pt-3
                    ul.lista-ul
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Radio
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Televisión
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Streaming
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Video
              .tarjeta.color-acento-botones.h-100
                img(src='@/assets/curso/tema2/img8.png', style="width: 800px")
                .row(style="height: 245px")
                  .px-5.pt-3
                    ul.lista-ul
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Atención telefónica
                      li 
                        i.far.fa-circle(style="color: #7F4FC7")
                        | Contac center
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img9.png', style="width: 450px").m-auto
          .col-lg-6
            p.mb-5 Amplié la información sobre cada uno de ellos.
            h4.txt-deco3 Presenciales
            p.mb-5 Para la atención presencial o cara a cara es imprescindible utilizar las habilidades de comunicación visual, gestual, vocabulario formal, buena vocalización, postura corporal, escucha con los cinco sentidos, porte de carné o distintivo de la imagen corporativa y por su puesto, las normas de cortesía y buenas maneras. #[span.txt-deco1 Los medios físicos dispuestos deben permanecer organizados, limpios, con la respectiva señalización y contar con las medidas de bioseguridad y sanidad correspondientes].
            h4.txt-deco3 Telefónicos
            p La atención telefónica es uno de los canales más sensibles debido a las posibles interferencias, malentendidos, estados de ánimo de los clientes o usuarios que reclaman o presentan quejas, por lo tanto, será necesario el entrenamiento en la manipulación de los aparatos, diademas y demás recursos, así como la verificación del buen funcionamiento de todos ellos y un conocimiento pleno de los productos, servicios, procedimientos, conducto regular y manejo de las emociones para evitar alteraciones de ánimo tanto personal como del cliente o usuario.
    p.mb-5 La organización debe entrenar al personal en el protocolo establecido para la atención de llamadas telefónicas, dentro de las cuales se recomienda tener presente el decálogo de oro (Serna, 2006).
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3] Decálogo de oro para atención telefónica
        figure
          img(src='@/assets/curso/tema2/img13.svg', style="width: 1200px").m-auto
          figcaption.mt-4 Nota: Adaptado de Serna, (2006).
    .row.mb-5.align-items-center
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
      .col
        h4.txt-deco3 Virtuales o electrónicos
        p.mb-0 Utilice la netiqueta que no es más que seguir normas de cortesía y comportamiento del mundo físico, de acuerdo con las normas y políticas del ciberespacio, sea considerado con el conocimiento y manipulación de los medios de parte de los demás, siga entre otras las siguientes recomendaciones que están en el esquema.
    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4] Recomendaciones de uso del ciberespacio
        figure
          img(src='@/assets/curso/tema2/img14.svg', style="width: 1200px").m-auto
          figcaption.mt-4 Nota: SENA (2020).
    p.mb-5 Para complementar la información acerca de las normas de cortesía y protocolos de los espacios virtuales, realice la lectura del documento #[b 10 reglas básicas de la netiqueta], el cual se encuentra en el material complementario.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        h4.txt-deco3 Otros medios
        p.mb-5 Dentro de los otros canales se hallan los medios impresos como periódicos, boletines, audiovisuales, radio, televisión, streaming (contenido de medios, ya sea en vivo o grabado, que se pueden disfrutar en computadoras y aparatos móviles a través de Internet y en tiempo real).
        h4.txt-deco3 Normativa de tiempos de respuesta a PQRS
        p Uno de los asuntos de prioritaria atención en todas las organizaciones son los denominados PQRS, cuyas iniciales se refieren a pedidos, quejas, reclamos y solicitudes. En las entidades públicas existe un sistema de PQRS que ha dado muestras de funcionamiento y estrategia de resolución de dificultades con los clientes o usuarios, por lo que se extiende la invitación a su adopción e implementación en las empresas privadas, dada la masiva normativa existente a favor de las personas que resultan ser clientes, a saber:
      .col-lg-5
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img10.png', style="width: 450px").m-auto
    .row.mb-5.bg-color9
      .col-12.p-5
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris
              .p-4
                p Constitución Política de Colombia de 1991, Artículos 23 y 74:  todas las personas tienen derecho a presentar solicitudes respetuosas ante las autoridades, con el fin de obtener pronta resolución.
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris(style="height: 235px")
              .p-4
                br
                br
                p Decreto 1166 del 2016, acerca de la presentación de solicitudes verbales.
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris(style="height: 235px")
              .p-4
                br
                br
                p Ley 1755 del 2015, que regula el derecho de petición.
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris(style="height: 235px")
              .p-4
                br
                br
                p Ley 1437 del 2011, Código de procedimiento administrativo.
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris(style="height: 235px")
              .p-4
                br
                br
                p Decreto 019 del 2012 de supresión de procedimientos y trámites innecesarios.
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
            .tarjeta.tarjeta--gris(style="height: 235px")
              .p-4
                br
                br
                p Ley 1474 del 2011 de prevención y control de la gestión pública.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img18.svg', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-4.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 60px")
          .col
            p.mb-0 Ante las actuales circunstancias se están utilizando nuevos mecanismos como el #[i Chatbot], mediante los cuales se atienden en línea preguntas frecuentes de los clientes o usuarios, también se utilizan las redes sociales como Facebook e Instagram, WhatsApp y aplicaciones tecnológicas propias de cada organización.
        .cajon.color-secundario.p-4
          p.mb-0 Consulte los criterios normativos para la presentación y atención de PQRS en la dirección del DNP (Departamento Nacional de Planeación), que igualmente son sugeridas para empresas privadas, dados los beneficios de retorno para quien los usa.

</template>

<script>
export default {
  name: 'Tema2',
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
