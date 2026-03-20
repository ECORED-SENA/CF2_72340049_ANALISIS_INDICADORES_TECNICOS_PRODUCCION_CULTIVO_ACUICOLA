export default {
  global: {
    Name:
      'Fundamentos de gestión operativa y documental en sistemas acuícolas.',
    Description:
      'El componente formativo aborda  la gestión técnica en producción acuícola, incluyendo equipos de medición, control de calidad del agua, registros productivos, sanitarios y ambientales, así como análisis de indicadores como crecimiento, conversión alimenticia y supervivencia. También desarrolla factores que afectan el desempeño y propone acciones correctivas y preventivas basadas en mejora continua y seguimiento técnico sistemático.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materiales y equipos requeridos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de materiales y equipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características técnicas y aplicaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre equipos e indicadores técnicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Criterios técnicos de selección',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Aplicaciones en el monitoreo de indicadores técnicos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Concepto e importancia de la gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas para la recolección de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Validación y análisis de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recursos digitales para la organización de información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registros técnicos en la producción acuícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y finalidad de los registros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de registros: productivos, sanitarios y ambientales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Formatos técnicos y estructura de diligenciamiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Importancia de la trazabilidad y control documental',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores técnicos de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Interpretación de indicadores productivos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Análisis de resultados frente a valores de referencia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Relación entre indicadores y toma de decisiones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Factores que afectan el comportamiento de los indicadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Acciones de mejora en el sistema acuícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principios de mejora continua',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Importancia de las acciones correctivas y preventivas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Formulación de acciones de mejora basadas en el análisis técnico',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Seguimiento y evaluación de resultados',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Registros técnicos de la unidad productiva',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alevinos',
      significado:
        'Peces pequeños con los que se inician los cultivos acuícolas.',
    },
    {
      termino: 'Buenas prácticas acuícolas',
      significado:
        'Condiciones y prácticas operativas básicas que garantizan un manejo adecuado en el cultivo acuícola.',
    },
    {
      termino: 'Ciclo productivo',
      significado:
        'Tiempo total de duración de un cultivo, desde la siembra hasta la cosecha.',
    },
    {
      termino: 'Cultivos intensivos',
      significado:
        'Sistemas piscícolas donde se siembran entre 15 y 30 peces por metro cúbico, con aireación y recambios constantes de agua.',
    },
    {
      termino: 'Cultivos súper-intensivos',
      significado:
        'Sistemas piscícolas altamente tecnificados donde se siembran más de 30 peces por metro cúbico.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Observación o concepto emitido sobre un aspecto evaluado, clasificado según criterios preestablecidos.',
    },
    {
      termino: 'Inocular',
      significado:
        'Introducir un microorganismo o sustancia en un medio específico donde pueda crecer y reproducirse.',
    },
    {
      termino: 'Kit de parámetros',
      significado:
        'Conjunto de equipos o reactivos químicos que permiten medir diferentes parámetros de calidad del agua.',
    },
    {
      termino: 'Medidas correctivas',
      significado:
        'Acciones implementadas para eliminar la causa de una situación detectada y no deseada.',
    },
    {
      termino: 'Medidas preventivas',
      significado:
        'Acciones adoptadas para evitar la ocurrencia de una situación potencialmente no deseada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autoridad Nacional de Acuicultura y Pesca (AUNAP). (2023). Lineamientos para el desarrollo sostenible de la acuicultura en Colombia. AUNAP. ',
      link: '',
    },
    {
      referencia:
        'Boyd, C. E., & Tucker, C. S. (2012). Pond aquaculture water quality management. Springer.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2022). Normativa sanitaria para la producción y comercialización de organismos acuáticos en Colombia. ICA.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2022). El estado mundial de la pesca y la acuicultura 2022. FAO.',
      link: '',
    },
    {
      referencia:
        'Pillay, T. V. R., & Kutty, M. N. (2005). Aquaculture: Principles and practices (2nd ed.). Blackwell Publishing.',
      link: '',
    },
    {
      referencia:
        'Tacon, A. G. J., & Metian, M. (2015). Feed matters: Satisfying the feed demand of aquaculture. Reviews in Fisheries Science & Aquaculture, 23(1), 1–10.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez P.',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Machado Milanés',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario y de Biotecnología el Porvenir.',
        },
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática (actualización)',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderón Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Álvarez Astudillo',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
