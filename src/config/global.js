export default {
  global: {
    componenteFormativo: 'Protocolos de atención a clientes',
    descripcionCurso:
      'El presente componente formativo comprende las partes que un momento dado se ven tocadas o involucradas con la actividad económica, concluye con la indicación sobre cómo se debe presentar el portafolio de productos y servicios y cómo ilustrar el protocolo de servicio, según el tipo de organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contexto de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sector y actividad económica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Imagen personal y etiqueta empresarial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos y servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Clientes y usuarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Protocolos y procedimientos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Albrecht, K. (2003). <em>La revolución del servicio</em>.',
      link: '',
    },
    {
      referencia:
        'Blanco, C. (2013). <em>Comunicación y atención al cliente</em>. Macmillan Iberia, S.A.',
      link: '',
    },
    {
      referencia:
        'Carlzon, J. (1991). <em>El momento de la verdad</em>. Diaz de Santos.',
    },
    {
      referencia:
        'Fischer, R. (2011). <em>El desafío del servicio</em>. HSU Hospitality & Service University.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2004). <em>Guía N° 6. Estándares básicos de competencias ciudadanas</em>. MEN.',
    },
    {
      referencia:
        'Naciones Unidas. (2009). <em>Clasificación Industrial Internacional Uniforme de todas las Actividades Económicas CIIU</em>.',
      link:
        'https://unstats.un.org/unsd/publication/seriesm/seriesm_4rev4s.pdf',
    },
    {
      referencia:
        'Serna, H. (2006). <em>Servicio al cliente una nueva visión: clientes para siempre</em>. Panamericana.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aspectos demográficos',
      significado:
        'Se refiere a los datos relacionados con la localización, estrato económico, edad y género.',
    },
    {
      termino: 'Aspectos psicográficos',
      significado:
        'Relacionado con las necesidades, gustos, expectativas, modas, tendencias, preferencias y motivaciones de una comunidad o persona.',
    },
    {
      termino: 'Cortesía',
      significado:
        'Conductas y comportamientos de amabilidad, respeto y servicio.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Es la utilización de reglas de comportamiento, aseo y buenos modales.',
    },
    {
      termino: 'Eslogan',
      significado:
        'Frase elegida por una empresa o marca, que dice mucho en pocas palabras de lo que es o quiere representar para la comunidad.',
    },
    {
      termino: 'Logo',
      significado:
        'Esquema o figura elegida para representar una marca ya sea de producto o empresa.',
    },
    {
      termino: 'Producción',
      significado:
        'Acción de producir, fabricar o manufacturar, transformando materia prima para lograr un nuevo producto.',
    },
    {
      termino: 'Servucción',
      significado:
        'Acción de servir, se cataloga así a las empresas dedicadas a la prestación de servicios. ',
    },
  ],
  complementario: [
    {
      texto:
        'Orduz, R. (2010). <em>Las TIC y la nanotecnología</em>. Colombia digital (Blog).',
      tipo: 'Blog',
      link:
        'https://blogs.vanguardia.com/corporacion-colombia-digital/innovacion/342-las-tic-y-la-nanotecnologia',
    },
    {
      texto:
        'Función Pública. (2021). <em>Código de integridad y el valor público</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KORRlvyWRbI',
    },
    {
      texto: 'Ediciones de la U. (2018). <em>Protocolo y etiqueta</em>.',
      tipo: 'Capítulo del libro electrónico',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8012',
    },
    {
      texto:
        'Bienestar aprendiz. (2012). <em>Presentación Acuerdo 0007 de 2012</em> [Presentación]. SlideShare.',
      tipo: 'Presentación',
      link:
        'https://es.slideshare.net/bienestaraprendiz/reglamento-aprendiz-presentacion-acuerdo-0007-de-2012',
    },
    {
      texto:
        'Bien pensado.com. (2019). <em>Cómo enamorar cuando el servicio no depende de usted</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1KgRwKLB7FU',
    },
    {
      texto:
        'Carlzon, J. (2007). <em>El momento de la verdad</em>. Ediciones Díaz de Santos.',
      tipo: 'Libro electrónico',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/55491?page=1',
    },
    {
      texto:
        'Trimpractik. (2020). <em>Cómo establecer una cultura basada en el cliente</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8Tg9Wmsy1C4',
    },
    {
      texto:
        'FNA. (2013). <em>Instructivo de protocolo de atención al cliente</em>.',
      tipo: 'Página web',
      link:
        'https://www.fna.gov.co/atencion-ciudadana/sistema-de-atencion-al-consumidor/Protocolos%20de%20atencin/Instructivo%20de%20Protocolo%20de%20Atenci%C3%B3n%20al%20Cliente.pdf',
    },
    {
      texto:
        'SENA. (2020). <em>10 reglas básicas de la netiqueta</em>. Centro para el Desarrollo Tecnológico de la Construcción y la Industria Regional Quindío.',
      tipo: 'Blog',
      link:
        'http://construccionquindio.blogspot.com/2010/11/10-reglas-basicas-de-la-netiqueta.html',
    },
    {
      texto:
        'Departamento Nacional de Planeación. (2019). <em>OBS Jurídico – Criterios normativos para PQRSD 2019</em>.',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/OBS%20JUR%C3%8DDICO%20-%20CRITERIOS%20NORMATIVOS%20PARA%20PQRSD%202019.pdf',
    },
    {
      texto:
        'Blanco, C. (2013). <em>Concepto y tipología de los clientes</em>. Macmillan Iberia S.A.',
      tipo: 'Capítulo del libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42955?page=192',
    },
    {
      texto:
        'Comercio y aduanas. (s.f.). <em>¿Qué es una cadena de suministros?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-ZZM1M9GmKI',
    },
    {
      texto:
        'Logistips. (2020). <em>Logística y cadena de suministros</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YUiArhNN1R0',
    },
    {
      texto:
        'Profe Juan. (2020). <em>Simbología ANSI para elaboración de flujogramas</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zdE1ZLn1rhk&t=330s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Mireya Fernández Rodríguez',
        cargo: 'Instructora',
        centro:
          'SENA, Regional Distrito Capital Centro de Gestión Administrativa',
      },
      {
        nombre: 'Vilma Perilla',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
