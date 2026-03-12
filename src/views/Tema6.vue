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
