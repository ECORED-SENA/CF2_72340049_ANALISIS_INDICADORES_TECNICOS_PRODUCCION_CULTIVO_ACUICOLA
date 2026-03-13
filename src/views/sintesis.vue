<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Análisis de indicadores técnicos de producción en el cultivo acuícola
        p.mb-0 
          | Síntesis: 
          
          | Fundamentos de gestión operativa y documental en sistemas acuícolas.

    
    p.mt-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.




    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  sobre gestión operativa y documental en sistemas acuícolas que organiza áreas como gestión técnica en acuicultura, materiales y equipos, indicadores técnicos, gestión de la información, registros técnicos, análisis e interpretación y factores que afectan indicadores, con subtemas como ganancia de peso, conversión alimenticia, biomasa y densidad, recolección y validación de datos, control documental, comparación con valores de referencia y factores ambientales, nutricionales, sanitarios, de manejo y económicos. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
