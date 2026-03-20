<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Materiales y equipos requeridos        
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el seguimiento técnico del cultivo acuícola, la medición sistemática, precisa y planificada de los parámetros físicos, químicos, biológicos y productivos resulta indispensable para interpretar adecuadamente los indicadores técnicos de producción.    
    p.mb-3.mt-5 Los materiales y equipos constituyen herramientas fundamentales para garantizar control, eficiencia y sostenibilidad durante todas las fases del cultivo: reversión, precría, levante y engorde. Su adecuada selección depende del sistema de producción (extensivo, semi-intensivo o intensivo), la densidad de siembra, los objetivos productivos y el nivel de tecnificación disponible. Estos recursos permiten:        
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-7(data-aos="fade-right")
        .bg-color-6.p-4.p-md-5.h-100.rounded-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Determinar con precisión las condiciones físico-químicas del agua.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Evaluar crecimiento, peso y biomasa.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Estimar supervivencia y densidad real.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Detectar causas de bajo rendimiento productivo.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Implementar acciones preventivas o correctivas.
            li.d-flex 
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Mantener condiciones óptimas en cada fase del cultivo.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/2.png', alt='')
    Separador  
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Clasificación de materiales y equipos    
    p(data-aos="fade-left") La clasificación de los materiales y equipos facilita su organización técnica y operativa dentro del sistema acuícola. A continuación, se presentan los principales componentes asociados a la infraestructura del sistema productivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Materiales para infraestructura del sistema
    //- Título con imagen
    p(data-aos="fade-left") Los materiales de infraestructura constituyen la base física del cultivo acuícola, ya que aseguran estabilidad hidráulica, control del recurso hídrico y condiciones adecuadas de bioseguridad. Entre los elementos básicos se encuentran:
    //- Inicio Carrusel
    .bg-full-width
      .px-4.px-md-5.pb-md-3
    .carousel-bg
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-12.mb-3.mb-lg-0.order-lg-2
          SlyderF(columnas="col-md-4 col-xl-4")
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_1.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Estacas de demarcación
              p.card-text.text-center
                | Delimitan el área del estanque y orientan la construcción.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_2.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Herramientas de excavación
              p.card-text.text-center
                | Permiten la adecuación del terreno y conformación del vaso del estanque.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_3.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Terraplenes compactados
              p.card-text.text-center
                | Garantizan estabilidad estructural y evitan filtraciones.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_4.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Tuberías de PVC
              p.card-text.text-center
                | Regulan entrada y salida controlada del agua.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_5.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Válvulas y codos
              p.card-text.text-center
                | Facilitan el control hidráulico y el recambio hídrico.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_6.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Sistemas de desagüe
              p.card-text.text-center
                | Permiten el vaciado técnico del estanque.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_7.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Filtros y mallas
              p.card-text.text-center
                | Retienen sólidos y evitan ingreso de organismos no deseados.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_8.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Mallas anti pájaros
              p.card-text.text-center
                | Protegen el cultivo frente a depredadores.
    //- Fin Carrusel
    p(data-aos="fade-left") Estos componentes permiten controlar el nivel del agua, facilitar el recambio hídrico, prevenir el escape de organismos cultivados y reducir el impacto de predadores, lo que incide directamente en la supervivencia y el rendimiento productivo. La correcta instalación y mantenimiento de estos materiales garantiza estabilidad estructural, control hidráulico eficiente y condiciones adecuadas de bioseguridad, elementos clave para alcanzar indicadores productivos óptimos.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Equipos para medición de parámetros físicos del agua
    //- Título con imagen
    p(data-aos="fade-left") Los parámetros físicos del agua influyen directamente en la fisiología de los peces, el metabolismo, el consumo de alimento y la dinámica productiva del sistema. Por ello, su medición periódica permite ajustar el manejo técnico y prevenir alteraciones que afecten el rendimiento. Entre los principales equipos empleados para este fin se encuentran los siguientes:
    //- Inicio Carrusel
    .bg-full-width
      .px-4.px-md-5.pb-md-3
    .carousel-bg
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-12.mb-3.mb-lg-0.order-lg-2
          SlyderF(columnas="col-md-4 col-xl-4")
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_1.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Termómetro electrónico
              p.card-text.text-center
                | Evalúa la temperatura del agua con precisión hasta décimas de grado.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_2.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Disco Secchi
              p.card-text.text-center
                | Mide la transparencia del agua como indicador indirecto de fitoplancton.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_3.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Turbidímetro
              p.card-text.text-center
                | Determina la turbidez y concentración de sólidos suspendidos.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_4.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Salinómetro digital
              p.card-text.text-center
                | Mide la salinidad, especialmente en sistemas <i>brackish</i> o marinos.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_5.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 <i>Beakers</i> (vasos de precipitado)
              p.card-text.text-center
                | Permiten la toma y manipulación de muestras para análisis.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel2_6.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Tubos de ensayo
              p.card-text.text-center
                | Facilitan la contención de pequeñas muestras de agua.
    //- Fin Carrusel
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/3.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")        
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          p Estos equipos permiten:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Determinar la temperatura para ajustar alimentación y densidad.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Evaluar transparencia y turbidez, indicadores de productividad biológica.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Monitorear salinidad según la especie cultivada y el tipo de sistema.
    p(data-aos="fade-left") La información obtenida mediante estos instrumentos permite realizar ajustes oportunos en alimentación, recambio de agua y manejo general del cultivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Equipos para medición de parámetros químicos
    //- Título con imagen    
    p(data-aos="fade-left") La calidad química del agua condiciona el crecimiento, la supervivencia y la eficiencia alimenticia. Alteraciones en oxígeno disuelto, pH o compuestos nitrogenados pueden generar estrés fisiológico, disminuir el consumo de alimento e incrementar la mortalidad. Los principales equipos utilizados para el control químico del agua se sintetizan a continuación:
    //- Inicio Carrusel
    .bg-full-width
      .px-4.px-md-5.pb-md-3
    .carousel-bg
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-12.mb-3.mb-lg-0.order-lg-2
          SlyderF(columnas="col-md-4 col-xl-4")
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel3_1.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Oxímetro digital
              p.card-text.text-center
                | Mide el oxígeno disuelto en tiempo real.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel3_2.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 pH-metro digital
              p.card-text.text-center
                | Registra el pH y, en algunos modelos, la temperatura.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel3_3.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Kits colorimétricos
              p.card-text.text-center
                | Determinan amonio, nitritos, nitratos, alcalinidad, dureza y CO₂.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel3_4.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Espectrofotómetro
              p.card-text.text-center
                | Analiza con alta precisión compuestos químicos específicos.            
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel3_5.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Multiparámetro digital
              p.card-text.text-center
                | Integra varias mediciones en un solo equipo portátil.
    //- Fin Carrusel
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/4.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")        
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          p Estos equipos permiten:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Identificar desequilibrios químicos en etapas tempranas.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Evaluar toxicidad por compuestos nitrogenados.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Tomar decisiones técnicas relacionadas con recambio hídrico, aireación o tratamiento del agua.
    p(data-aos="fade-left") El monitoreo químico sistemático constituye un componente esencial del manejo técnico, ya que permite sostener condiciones óptimas y prevenir pérdidas productivas asociadas a deterioro de la calidad del agua.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Equipos para evaluación biológica
    //- Título con imagen    
    p(data-aos="fade-left") La evaluación biológica del agua permite analizar microorganismos, fitoplancton y otros componentes microbiológicos que influyen directamente en la sanidad del cultivo y en la salud de los peces. Este control resulta fundamental para prevenir brotes patológicos y desequilibrios ecológicos dentro del sistema productivo. Los principales equipos utilizados en este tipo de análisis se presentan a continuación:
    //- Inicio Carrusel
    .bg-full-width
      .px-4.px-md-5.pb-md-3
    .carousel-bg
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-12.mb-3.mb-lg-0.order-lg-2
          SlyderF(columnas="col-md-4 col-xl-4")
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel4_1.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Microscopio y estereoscopio 
              p.card-text.text-center
                | Permiten el análisis de microorganismos, parásitos y estructuras biológicas.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel4_2.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Cámara de <i>Neubauer</i>
              p.card-text.text-center
                | Facilita el conteo celular, especialmente en muestras de fitoplancton.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel4_3.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Cono de <i>Imhoff</i>
              p.card-text.text-center
                | Cuantifica sólidos sedimentables presentes en el agua.
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel4_4.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Cajas de Petri
              p.card-text.text-center
                | Se emplean para el cultivo y aislamiento de microorganismos.            
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel4_5.png' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Asas bacteriológicas
              p.card-text.text-center
                | Permiten la inoculación y transferencia controlada de muestras.
    //- Fin Carrusel
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/5.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")        
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          p Estos equipos permiten:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Diagnosticar la flora microbiana presente en el sistema.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Evaluar organismos potencialmente patógenos.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Detectar riesgos fitoplanctónicos o acumulación de materia orgánica.
    p(data-aos="fade-left") El monitoreo biológico complementa el análisis físico y químico, fortaleciendo los programas de bioseguridad y manejo preventivo.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Equipos para seguimiento productivo
    //- Título con imagen
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Trasmallos y atarrayas
                    p Redes utilizadas para muestreo representativo de poblaciones.                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Baldes plásticos y coladores
                    p Facilitan la manipulación y selección temporal de individuos.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Peso reloj (balanza mecánica portátil)
                    p Permite pesajes rápidos en campo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Balanza digital
                    p Determina con mayor precisión el peso individual o por lotes.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Ictiómetro o regla milimetrada
                    p Mide la longitud total o estándar de los peces.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_6.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Contadores manuales
                    p Facilitan el conteo de individuos durante muestreos.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder1_7.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 <i>Software</i> o formatos de registro
                    p Organizan datos productivos para análisis técnico.
    //- Slideshow
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 Estos equipos permiten:
        
        ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Realizar capturas de muestreo representativas.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Medir peso y talla para calcular biomasa y ganancia diaria.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Determinar la supervivencia real del cultivo.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ajustar raciones alimentarias según crecimiento observado.    
    p.mb-5.mt-5 El registro sistemático y organizado de la información productiva permite evaluar desempeño técnico, optimizar costos de alimentación y mejorar la planificación de cosecha, contribuyendo así a la sostenibilidad económica del sistema acuícola.
    //- Fin Tema1.1
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Características técnicas y aplicaciones    
    p(data-aos="fade-left") La selección y uso adecuado de equipos en acuicultura no depende únicamente de su disponibilidad, sino de sus características técnicas y su capacidad para responder a las exigencias del sistema productivo. Un equipo técnicamente apropiado garantiza datos confiables, facilita la toma de decisiones y contribuye a la sostenibilidad del cultivo. Los equipos deben ofrecer las siguientes características:
    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon1_1.svg', alt='')
          h3.text-center Precisión
          p.text-center Mediciones confiables, con márgenes mínimos de error.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon1_2.svg', alt='')
          h3.text-center Facilidad de uso
          p.text-center Operatividad en campo y laboratorio por personal técnico.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon1_3.svg', alt='')
          h3.text-center Durabilidad y resistencia
          p.text-center  Capacidad para soportar humedad, exposición solar y manipulación frecuente.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon1_4.svg', alt='')
          h3.text-center Calibración sencilla
          p.text-center Ajustes rápidos que aseguren exactitud continua.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/icon1_5.svg', alt='')
          h3.text-center Registro de datos
          p.text-center Algunos equipos digitales permiten almacenar mediciones para análisis históricos y comparación de tendencias.
    //- Fin Tarjetas
    p(data-aos="fade-left") Estas características inciden directamente en la confiabilidad de los indicadores técnicos y en la eficiencia del manejo productivo.
    //- FinTema1.2
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3  Relación entre equipos e indicadores técnicos       
    p(data-aos="fade-left") El seguimiento productivo se fundamenta en la articulación entre instrumentos de medición e indicadores técnicos. Cada equipo cumple una función específica dentro del sistema de control. A continuación, se presenta la relación entre los principales indicadores técnicos, el equipo utilizado y su aplicación productiva:
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Integración de indicadores técnicos, equipos de medición y aplicaciones productivas
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Indicador técnico
                th.text-center(style="width: 30%") Equipo utilizado
                th.text-center(style="width: 40%") Aplicación productiva
            tbody
              tr
                td Temperatura
                td Termómetro electrónico
                td Influye en metabolismo, consumo de alimento y crecimiento
              tr
                td Oxígeno disuelto
                td Oxímetro digital
                td Previene estrés fisiológico y mortalidad
              tr
                td pH
                td pH-metro digital
                td Mantiene equilibrio químico del agua
              tr
                td Transparencia
                td Disco Secchi
                td Estima productividad primaria
              tr
                td Turbidez
                td Turbidímetro
                td Controla sólidos suspendidos
              tr
                td Biomasa
                td Balanza digital
                td Permite ajustar raciones alimentarias
              tr
                td Crecimiento
                td Ictiómetro + pesajes periódicos
                td Calcula ganancia diaria de peso
              tr
                td Supervivencia
                td Conteo inicial y final
                td Evalúa eficiencia productiva
    //- Fin Tabla                
    p.mt-5(data-aos="fade-left") La articulación sistemática entre medición e interpretación técnica permite detectar desviaciones oportunamente y aplicar correctivos antes de que se generen pérdidas económicas.
    //- FinTema1.3
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4  Criterios técnicos de selección
    p(data-aos="fade-left") La elección de los equipos debe responder a condiciones productivas específicas y al nivel de tecnificación del sistema. No todos los cultivos requieren el mismo grado de instrumentación, pero todos deben garantizar control mínimo de variables críticas. La selección depende de:
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/7.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")        
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          p Estos equipos permiten:
          ul.lista-ul.mb-0
            li.d-flex.align-items-start.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              span <b>Tipo de explotación:</b> familiar o comercial.
            li.d-flex.align-items-start.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              span <b>Sistema de cultivo:</b> extensivo, semi-intensivo o intensivo.
            li.d-flex.flex-column.mb-2.align-items-start
              div.d-flex.align-items-start
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                span <b>Densidad de siembra</b>, según fase productiva:
              ul.lista-ul.mb-0.ms-4
                li.d-flex.align-items-start.mb-2
                  i.fas.me-3(style="color:#AD9721; font-size:0.8rem;")
                  span - Precría: 50–150 peces/m².
                li.d-flex.align-items-start.mb-2
                  i.fas.me-3(style="color:#AD9721; font-size:0.8rem;")
                  span - Levante: 20–50 peces/m².
                li.d-flex.align-items-start.mb-2
                  i.fas.me-3(style="color:#AD9721; font-size:0.8rem;")
                  span - Engorde: 1–30 peces/m².
            li.d-flex.align-items-start.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              span Disponibilidad permanente de agua.
            li.d-flex.align-items-start.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              span Necesidad de recambio hídrico: Entre 5 % y 50 %, según fase y carga orgánica.
            li.d-flex.align-items-start.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              span Presupuesto y nivel tecnológico disponible.
    p(data-aos="fade-left") En sistemas de engorde intensivo, cuando la densidad supera <b>12 peces/m²</b>, es obligatorio implementar aireación mecánica o un alto porcentaje de recambio de agua para evitar disminuciones críticas de oxígeno disuelto. La adecuada selección de equipos, alineada con la densidad y el sistema de cultivo, permite mantener estabilidad productiva, optimizar costos y fortalecer la rentabilidad del proyecto acuícola.
    //- FinTema1.4
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5  Criterios técnicos de selección
    p(data-aos="fade-left") El monitoreo permanente de los indicadores técnicos permite evaluar el desempeño productivo del cultivo y ajustar oportunamente las decisiones de manejo. Cada indicador se relaciona con equipos o registros específicos que garantizan datos confiables para el análisis. A continuación, se presenta la relación entre indicador técnico, equipo utilizado y su aplicación dentro del sistema productivo:
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Relación entre indicadores productivos, herramientas de medición y aplicación técnica
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Indicador técnico
                th.text-center(style="width: 30%") Equipo utilizado
                th.text-center(style="width: 40%") Aplicación productiva
            tbody
              tr
                td Ganancia diaria de peso
                td Balanza
                td Seguimiento periódico del crecimiento individual y por lote
              tr
                td Conversión alimenticia
                td Registro de alimento suministrado + biomasa calculada
                td Determina eficiencia productiva y optimiza costos de alimentación
              tr
                td Supervivencia
                td Conteo inicial y muestreo final
                td Control de mortalidad y evaluación del desempeño sanitario
              tr
                td Densidad real
                td Muestreo de biomasa
                td Ajuste poblacional y redistribución si es necesario
              tr
                td Oxígeno disuelto
                td Oxímetro
                td Prevención de estrés fisiológico y mortalidad
              tr
                td pH
                td pH-metro
                td Control del equilibrio químico del agua
              tr
                td Transparencia
                td Disco Secchi
                td Estimación de productividad natural del sistema
    //- Fin Tabla
    p.mt-5(data-aos="fade-left") La integración sistemática de estos indicadores permite:
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
         ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Evaluar eficiencia técnica y económica.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ajustar raciones alimentarias según crecimiento real.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Prevenir pérdidas por estrés ambiental.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Optimizar densidades y manejo poblacional.    
    p.mb-3.mt-5(data-aos="fade-left") El análisis conjunto de estos datos fortalece la toma de decisiones basada en evidencia técnica y contribuye a la sostenibilidad del cultivo acuícola.
    //- FinTema1.5 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
