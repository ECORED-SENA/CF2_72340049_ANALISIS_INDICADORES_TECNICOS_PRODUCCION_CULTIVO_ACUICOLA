<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3(data-aos="fade-left") La gestión técnica en la producción acuícola requiere un seguimiento sistemático de variables productivas, sanitarias y ambientales que influyen directamente en el desempeño del cultivo. El uso adecuado de materiales, equipos de medición y herramientas de registro permite obtener datos confiables que sustentan el análisis de indicadores clave como crecimiento, conversión alimenticia, biomasa y supervivencia.

    .row
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

      .col-lg-9.order-lg-1(data-aos="fade-left")
        .bg-color-15-1.p-4
          .row.align-items-center.bg-color-2
            .col-lg-4.px-0.mb-3.mb-lg-0
              img(src="@/assets/curso/intro/1.png", style="width:100%; height:100%; object-fit:cover;")

            .col-lg-8.p-4
              p.mb-0 En el contexto productivo colombiano, donde la acuicultura cumple un papel estratégico en la seguridad alimentaria y el desarrollo regional, resulta indispensable fortalecer la gestión de la información y el control documental. La correcta interpretación de los indicadores técnicos facilita la toma de decisiones oportunas, reduce riesgos y mejora la planificación del sistema de cultivo.

        p.mb-3(data-aos="fade-left") Este contenido integra los fundamentos para el monitoreo técnico, la organización de registros, el análisis de resultados y la formulación de acciones de mejora. A partir de un enfoque de mejora continua, se promueve un manejo responsable, sostenible y competitivo del sistema acuícola, orientado a optimizar el rendimiento productivo y garantizar estándares de calidad.
    
</template>

<script>
export default {
  name: 'Introduccion',
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
