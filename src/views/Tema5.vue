<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Factores que afectan el comportamiento de los indicadores
      
    p(data-aos="fade-left") Los indicadores técnicos no son estáticos. Su comportamiento depende de múltiples factores interrelacionados que pueden modificar el desempeño productivo, sanitario y económico del sistema acuícola. Comprender estos factores permite interpretar adecuadamente los resultados y aplicar acciones correctivas oportunas.

    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema5/slide1_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Factores ambientales
                    p Las condiciones ambientales influyen directamente en el equilibrio fisiológico de los peces y en la estabilidad del sistema productivo. La calidad del agua es el elemento más determinante e incluye parámetros como oxígeno disuelto, pH, temperatura, amonio, nitritos y turbidez. Alteraciones en estos valores pueden afectar la conversión alimenticia, el crecimiento y la supervivencia. Disminuciones de oxígeno o incrementos de amonio generan estrés fisiológico, menor consumo de alimento y mayor riesgo de mortalidad. La <u>variabilidad</u> climática, como cambios bruscos de temperatura o lluvias intensas, puede modificar la transparencia, alcalinidad y estratificación térmica, generando fluctuaciones en los indicadores productivos.
                                       
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema5/slide1_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Factores nutricionales
                    p La alimentación es un determinante central del crecimiento y la productividad. Incluye la calidad del alimento, contenido proteico, frescura del concentrado y técnica de suministro. Un alimento mal almacenado o con bajo valor nutricional puede incrementar la conversión alimenticia, reducir el crecimiento y afectar la rentabilidad del cultivo.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema5/slide1_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Factores sanitarios
                    p Las condiciones sanitarias impactan la estabilidad del sistema productivo. Comprenden enfermedades bacterianas, parasitismo y estrés por manejo. Estos factores inciden en la mortalidad, disminución del consumo de alimento y retraso en el crecimiento. Una detección tardía puede generar pérdidas significativas y alterar varios indicadores de manera simultánea.
    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema5/slide1_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Factores de manejo
                    p Las prácticas de manejo determinan el desempeño del sistema acuícola. Incluyen densidad de siembra inadecuada, errores en muestreo, falta de registros técnicos y monitoreo insuficiente. Un manejo inadecuado puede afectar simultáneamente la conversión alimenticia, la supervivencia, el crecimiento y la biomasa total.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema5/slide1_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Factores económicos
                    p No modifican biológicamente los indicadores productivos, pero influyen en su análisis y en la toma de decisiones estratégicas. Incluyen precio del alimento, costos energéticos y precio de venta del pescado. Una conversión alimenticia técnicamente aceptable puede resultar económicamente desfavorable si los costos de producción aumentan significativamente.
   
    //- Slideshow



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
