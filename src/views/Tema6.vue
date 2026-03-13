<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Acciones de mejora en el sistema acuícola

    p(data-aos="fade-left") Las acciones de mejora en acuicultura constituyen un proceso sistemático orientado a optimizar el desempeño productivo, sanitario, ambiental y económico del cultivo. No se limitan a corregir fallas puntuales, sino que buscan fortalecer la eficiencia del sistema mediante decisiones técnicas fundamentadas en registros e indicadores. La mejora continua es un principio esencial para garantizar competitividad, sostenibilidad y cumplimiento normativo en la producción piscícola. A continuación, se presenta la secuencia general para la formulación de acciones de mejora a partir del análisis de indicadores técnicos.

    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Formulación de acciones de mejora, de acuerdo con el análisis de los indicadores técnicos.  
    
    .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema6/1.png', alt='Diagrama sobre análisis de indicadores técnicos de producción en el cultivo acuícola y formulación de acciones de mejora, con secciones de factores que afectan el comportamiento de los indicadores como consumo, factores externos, análisis de causas y medidas preventivas, y apartado de acciones de mejora como corrección, prevención y seguimiento.')


    p(data-aos="fade-left") El diagrama presenta un flujo estructurado para el análisis de indicadores técnicos de producción en el cultivo acuícola y la formulación de acciones de mejora. En la parte central se ubica el análisis de indicadores, a partir del cual se derivan decisiones orientadas a la mejora del sistema productivo.

    p(data-aos="fade-left") La estructura se organiza en dos componentes principales: el análisis técnico y la definición de acciones de mejora, estas últimas clasificadas en correctivas, preventivas y de seguimiento. Asimismo, integra los factores que influyen en el comportamiento de los indicadores, tales como el consumo, los factores externos, el análisis de causas, los limitantes técnicos y las medidas preventivas y correctivas, dispuestos en una organización jerárquica que facilita la toma de decisiones técnicas fundamentadas.


    //- Inicio Tema6.1
    .row.mt-5
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Principios de mejora continua

    p(data-aos="fade-left") La mejora continua en acuicultura se basa en un proceso cíclico compuesto por:


    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema6/2.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Ciclo de mejora continua")
              p.mb-4 Proceso cíclico compuesto por cuatro etapas: 
              ul.lista-ul.mb-0
                li.d-flex.mb-2        
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Planificar</b>: establecer metas productivas y estándares técnicos.
                li.d-flex.mb-2
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Ejecutar</b>: aplicar protocolos de manejo definidos.
                li.d-flex.mb-2
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Verificar</b>: analizar indicadores y resultados obtenidos.
                li.d-flex.mb-2
                  i.fas.fa-check-circle.me-3(style="color:#AD9721")
                  p.mb-0 <b>Actuar</b>: implementar ajustes o correcciones necesarias.
              p.mt-4 Este enfoque permite optimizar la conversión alimenticia, reducir mortalidades, mejorar tasas de crecimiento, disminuir impactos ambientales y fortalecer la rentabilidad del sistema.
                
                  
          .row(titulo="Fundamentos técnicos")
              p.mb-4 En sistemas piscícolas tecnificados se sustenta en el registro permanente de datos, la evaluación periódica de indicadores, la capacitación del personal y la aplicación rigurosa de buenas prácticas piscícolas.

          .row(titulo="Enfoque estratégico")
              p.mb-4 La mejora debe ser preventiva, planificada y basada en análisis técnico, evitando respuestas únicamente reactivas frente a los problemas productivos.
    //- Fin Accordion

    //- Fin Tema6.1


    //- Inicio Tema6.2
    .row.mt-5
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Importancia de las acciones correctivas y preventivas

    p(data-aos="fade-left") Las acciones correctivas y preventivas son herramientas de gestión que permiten intervenir oportunamente ante desviaciones detectadas en los indicadores técnicos. Acontinuación, se presenta la diferencia conceptual y operativa entre ambas:


    //- Inicio Tabla
    .row.justify-content-center
      .col-md-10.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span  Clasificación de acciones correctivas y preventivas en la gestión acuícola
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 20%") Tipo de acción
                th.text-center(style="width: 20%") Momento de aplicación 
                th.text-center(style="width: 20%") Objetivo principal
                th.text-center(style="width: 40%") Ejemplos en acuicultura
            tbody
              tr
                td Correctiva
                td Después de identificar una desviación
                td Eliminar la causa del problema y restablecer el equilibrio productivo
                td Baja supervivencia → revisión sanitaria y tratamiento; Conversión alimenticia elevada → ajuste de ración; Oxígeno bajo → instalación de aireadores o mayor recambio.
              tr
                td Preventiva
                td Antes de que ocurra una falla
                td Reducir riesgos mediante anticipación técnica
                td Monitoreo diario de oxígeno en épocas cálidas; Muestreos biométricos programados; Mantenimiento preventivo de equipos; Capacitación en bioseguridad.
    //- Fin Tabla 


    p.mt-5(data-aos="fade-left") Las acciones correctivas permiten contener impactos inmediatos. Las acciones preventivas, en cambio, fortalecen la estabilidad del sistema y minimizan pérdidas económicas futuras.
    p(data-aos="fade-left") La implementación organizada de acciones de mejora, sustentadas en el análisis permanente de indicadores, consolida un modelo de gestión técnica orientado a la sostenibilidad y competitividad de la producción acuícola.
    //- Fin Tema6.2

    //- Inicio Tema6.3
    
    .row.mt-5
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Formulación de acciones de mejora basadas en el análisis técnico

    p(data-aos="fade-left") La formulación de acciones de mejora debe sustentarse en un análisis técnico estructurado que permita intervenir de manera precisa sobre los factores que afectan el desempeño productivo. No se trata de aplicar soluciones generales, sino de definir medidas específicas con base en datos verificables. Las acciones deben apoyarse en:


    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4        
        ul.lista-ul.mb-0
          li.d-flex.mb-2        
            i.fas.fa-check-circle.me-3(style="color:#AD9721")
            p.mb-0 Registros técnicos confiables.
          li.d-flex.mb-2
            i.fas.fa-check-circle.me-3(style="color:#AD9721")
            p.mb-0 Comparación con valores de referencia.
          li.d-flex.mb-2
            i.fas.fa-check-circle.me-3(style="color:#AD9721")
            p.mb-0 Identificación de causas raíz.
          li.d-flex.mb-2
            i.fas.fa-check-circle.me-3(style="color:#AD9721")
            p.mb-0 Evaluación del impacto productivo y económico.

    p.mb-3.mt-5p(data-aos="fade-left") Los materiales y equipos constituyen herramientas fundamentales para garantizar control, eficiencia y sostenibilidad durante todas las fases del cultivo: reversión, precría, levante y engorde. Su adecuada selección depende del sistema de producción (extensivo, semi-intensivo o intensivo), la densidad de siembra, los objetivos productivos y el nivel de tecnificación disponible. Estos recursos permiten:


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Pasos para formular una acción de mejora
    //- Título con imagen

    p.mb-3.mt-5(data-aos="fade-left") A continuación, se presenta la secuencia recomendada para estructurar una acción técnica:


    //- Inicio contenedor vertical
    container.tarjeta.p-4.p-md-5
          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-1(titulo="Identificación del indicador alterado")
              .row 
                .col-6
                  h4 Identificación del indicador alterado
                  p Determinar qué variable presenta desviación frente al valor esperado.
                .col-6
                  figure
                  img(src='@/assets/curso/tema6/pestana1_1.png', alt='')

            .tarjeta.p-5.bg-color-1(titulo="Análisis de causas")
              .row 
                .col-6
                  h4 Análisis de causas
                  p Evaluar factores ambientales, nutricionales, sanitarios o de manejo.
                .col-6
                  figure
                  img(src='@/assets/curso/tema6/pestana1_2.png', alt='')

              
            .tarjeta.p-5.bg-color-1(titulo="Definición de la acción")
              .row 
                .col-6
                  h4 Definición de la acción
                  p Establecer una intervención técnica concreta y medible.
                .col-6
                  figure
                  img(src='@/assets/curso/tema6/pestana1_3.png', alt='')

            .tarjeta.p-5.bg-color-1(titulo="Asignación de responsables y tiempos")
              .row 
                .col-6
                  h4 Asignación de responsables y tiempos
                  p Definir quién ejecuta la acción y en qué plazo.
                .col-6
                  figure
                  img(src='@/assets/curso/tema6/pestana1_4.png', alt='')

              
            .tarjeta.p-5.bg-color-1(titulo="Indicadores de verificación")
              .row 
                .col-6
                  h4 Indicadores de verificación
                  p Determinar cómo se medirá la efectividad de la acción.
                .col-6
                  figure
                  img(src='@/assets/curso/tema6/pestana1_5.png', alt='')

              

    //- Inicio contenedor vertical

    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Ejemplo práctico
    //- Título con imagen


    p(data-aos="fade-left") A continuación, se presenta un ejemplo práctico que integra la identificación del problema, el análisis técnico y la formulación de acciones de mejora basadas en indicadore productivos:

    .row.justify-content-center.align-items-center
      .col-lg-8.d-flex.flex-column.justify-content-center.align-items-center.p-5.br-20
        p.text-center.bg-color-9.p-3.mb-0.shadow-sm.rounded
          b Problema detectado: 
          | conversión alimenticia (CA) de 2.4 (valor elevado).



    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema6/icon1.svg', alt='' style="width: 100px;").mx-auto.d-block
          h3.text-center Análisis técnico:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Sobrealimentación.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Mala calidad del alimento.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Estrés asociado a baja calidad del agua.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/icon2.svg', alt='' style="width: 100px;").mx-auto.d-block
          h3.text-center Periódico
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ajustar la ración según biomasa real calculada.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Verificar condiciones de almacenamiento del concentrado.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Incrementar el monitoreo de oxígeno disuelto y pH.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/icon3.svg', alt='' style="width: 100px;").mx-auto.d-block
          h3.text-center Registrado
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Viabilidad técnica.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Costos de implementación.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Impacto ambiental.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Sostenibilidad del sistema.
    //- Fin Tarjetas
    //- Inicio Tema6.3

    //- Inicio Tema6.4
    
    .row.mt-5
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Seguimiento y evaluación de resultados

  
    p(data-aos="fade-left") Ninguna acción de mejora es completa sin un proceso de seguimiento que permita comprobar su efectividad. El control posterior asegura que la intervención genere resultados sostenibles y medibles.


    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Seguimiento y herramientas")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema6/pestana2_1.png', alt='')

              .col-md-6.mb-4.mb-md-0
                h4 Seguimiento y herramientas
                p El seguimiento implica la medición periódica del indicador intervenido, la comparación con el valor previo a la intervención, la evaluación del impacto económico y el registro documental del proceso aplicado. Para ello se utilizan formatos de control productivo, registros sanitarios, gráficos comparativos, indicadores acumulados y reportes técnicos mensuales que permiten analizar tendencias y respaldar decisiones.

          .py-3.py-md-4(titulo="Evaluación de resultados")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/pestana2_2.png', alt='')
              .col-md-6
                h4 Evaluación de resultados
                p La evaluación debe determinar si el indicador mejoró respecto al valor inicial, si el sistema productivo se estabilizó, si la acción implementada fue rentable y si se requieren ajustes adicionales. Cuando la mejora no es significativa, es necesario revisar la causa raíz y replantear la estrategia de intervención con base en análisis técnico.
                  
          .py-3.py-md-4(titulo="Integración con la gestión productiva")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema6/pestana2_3.png', alt='')
              .col-md-6
                h4 Integración con la gestión productiva
                p En la cadena piscícola colombiana, la mejora continua fortalece la competitividad del productor, el cumplimiento de estándares de calidad, la sostenibilidad ambiental y el acceso a mercados formales. La productividad no depende únicamente del volumen producido, sino del control técnico, la planificación estructurada y el análisis permanente de indicadores.    
    //- Cierres Pestanas horizontales
    //- Fin Tema6.3

    //- Inicio Tema6.3
    
    .row.mt-5
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.5 Registros técnicos de la unidad productiva

    p(data-aos="fade-left") La formulación de acciones de mejora debe sustentarse en un análisis técnico estructurado que permita intervenir de manera precisa sobre los factores que afectan el desempeño productivo. No se trata de aplicar soluciones generales, sino de definir medidas específicas con base en datos verificables. Las acciones deben apoyarse en:

    .row
      .col-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/1. Registro_Historial_Unidad_Productiva.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro historial de la unidad productiva.

        a.anexo.mb-4(:href="obtenerLink('/downloads/2. Registro_Calidad_Agua.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de calidad del agua.

        a.anexo.mb-4(:href="obtenerLink('/downloads/3. Registro_Calidad_Agua_Acciones.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de calidad del agua – observaciones y acciones correctivas.

        a.anexo.mb-4(:href="obtenerLink('/downloads/4. Registro_Trazabilidad.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de trazabilidad de la unidad productiva.

      .col-6
        figure
          img(src='@/assets/curso/tema6/4.png', alt='')
    
      .col-6.mt-5
        figure
          img(src='@/assets/curso/tema6/5.png', alt='')      

      .col-6.mt-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/5. Registro_Siembra.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de siembra de la unidad productiva.

        a.anexo.mb-4(:href="obtenerLink('/downloads/6. Registro_Limpieza_Desinfeccion_Agua.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de limpieza y desinfección de depósitos de agua.

        a.anexo.mb-4(:href="obtenerLink('/downloads/7. Registro_Limpieza_Sanitizacion_Instalaciones.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de limpieza y sanitización de instalaciones.

        a.anexo.mb-4(:href="obtenerLink('/downloads/8. Registro_Aplicaciones.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Registro de aplicaciones en la unidad productiva.
        
        a.anexo.mb-4(:href="obtenerLink('/downloads/9. Listado_Fertilizantes.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p Anexo. Listado de fertilizantes utilizados en la producción.



</template>

<script>
export default {
  name: 'Tema6',
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
