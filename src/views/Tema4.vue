<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Indicadores técnicos de la producción


    p(data-aos="fade-left") Los indicadores técnicos son herramientas cuantitativas que permiten medir el desempeño productivo, sanitario y ambiental de un sistema acuícola. Constituyen la base para evaluar eficiencia, rentabilidad y sostenibilidad del cultivo.
    
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema4/1.png', alt='Checklist', style="width: 100%; height: 100%; object-fit: cover; object-position: left center;")
        
        //- Cambiado de 5 a 7 para completar los 12 espacios (5 + 7 = 12)
        .col-12.col-lg-7.bg-color-2.p-4.p-lg-5.pe-lg-0
          p En la piscicultura colombiana, el monitoreo permanente de estos indicadores se considera una buena práctica productiva, ya que permite identificar desviaciones, prevenir pérdidas y fortalecer la competitividad del sistema.

    //- Inicio Tema4.1 
    .row.mt-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Interpretación de indicadores productivos

    p(data-aos="fade-left") La interpretación de indicadores no consiste únicamente en obtener un valor numérico. Implica analizar su comportamiento en el tiempo y compararlo con estándares técnicos o metas productivas.
    
    

    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Principales indicadores productivos
    //- Título con imagen

    p(data-aos="fade-left") A continuación, se presentan los indicadores más relevantes en la producción acuícola, junto con su fórmula y aplicación técnica:


    //- Inicio Tabla
    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span  Principales indicadores productivos: fórmula y aplicación técnica en acuicultura
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Indicador
                th.text-center(style="width: 30%") Fórmula 
                th.text-center(style="width: 40%") Aplicación técnica
            tbody
              tr
                td Ganancia de peso (GP)
                td GP = Peso final – Peso inicial
                td Evalúa desempeño nutricional y ambiental.
              tr
                td Tasa de Crecimiento Específico (TCE)
                td TCE = [(ln peso final – ln peso inicial) / días] × 100                
                td Determina crecimiento porcentual diario.
              tr
                td Conversión alimenticia (CA o FCA)
                td CA = Alimento suministrado (kg) / Biomasa producida (kg)                
                td Mide eficiencia en uso del alimento.
              tr
                td Supervivencia (%)
                td (Número final / Número inicial) × 100                
                td Evalúa impacto sanitario y manejo.
              tr
                td Biomasa
                td Número de peces × Peso promedio                
                td Permite ajustar alimentación y planificar cosecha.
              tr
                td Densidad de siembra
                td Peces/m² o peces/m³
                td Incide en oxígeno, competencia y estrés.

    //- Fin Tabla     


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Consideraciones técnicas relevantes
    //- Título con imagen


    p(data-aos="fade-left") Además de conocer las fórmulas de cálculo, es indispensable comprender los rangos técnicos aceptables y su impacto sobre el desempeño productivo. La interpretación adecuada de estos valores permite anticipar problemas, optimizar recursos y mantener estabilidad en el sistema acuícola.


    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide1_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Conversión alimenticia (CA)
                    p En tilapia, la CA aceptable oscila entre 1.2 y 1.8 según el sistema productivo. Valores bajos indican mejor aprovechamiento del alimento, mientras que valores altos pueden relacionarse con desperdicio, baja calidad de agua o problemas sanitarios.
                   
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide1_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Biomasa y planificación productiva
                    p La biomasa permite ajustar raciones alimenticias según el peso real del lote, programar cosechas parciales o totales y calcular densidades reales del sistema.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slide1_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 Densidad de siembra y desempeño del sistema
                    p La densidad influye en la disponibilidad de oxígeno disuelto, la competencia por alimento y el nivel de estrés poblacional, factores que impactan el crecimiento y la productividad.

    p(data-aos="fade-left") De esta manera, los indicadores no deben interpretarse de forma aislada, sino como parte de un sistema interrelacionado donde cada variable incide sobre las demás.
    //- Fin Tema4.1

    //- Inicio Tema4.2
    .row.mt-5
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Análisis de resultados frente a valores de referencia

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El análisis técnico implica comparar los resultados obtenidos con:
        ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Parámetros establecidos en manuales técnicos.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Históricos productivos de la granja.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Estándares comerciales del mercado.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Recomendaciones de buenas prácticas piscícolas.

    p.mb-3.mt-5 A continuación, se presenta un ejemplo de análisis comparativo:


    //- Inicio Tabla
    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span  Análisis comparativo de indicadores técnicos frente a valores de referencia
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 20%") Indicador
                th.text-center(style="width: 20%") Resultado obtenido 
                th.text-center(style="width: 20%") Valor técnico esperado
                th.text-center(style="width: 40%") Interpretación
            tbody
              tr
                td CA
                td 2.3
                td 1.4 – 1.8
                td Ineficiencia alimenticia.
              tr
                td Supervivencia
                td 70 %
                td > 85 %
                td Posible problema sanitario.
              tr
                td Oxígeno disuelto
                td 3 mg/L
                td > 5 mg/L
                td Riesgo de estrés.
    //- Fin Tabla                

    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Parámetros críticos de referencia
    //- Título con imagen

    p(data-aos="fade-left") Algunos parámetros ambientales presentan rangos técnicos que deben respetarse para mantener estabilidad productiva:

    //- Inicio Tabla
    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span  Parámetros críticos de referencia y su implicación productiva en acuicultura
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Parámetro
                th.text-center(style="width: 30%") Rango o condición recomendada
                th.text-center(style="width: 40%") Implicación productiva
                
            tbody
              tr
                td Temperatura
                td Según especie cultivada
                td Influye en metabolismo y consumo.
              tr
                td Oxígeno disuelto
                td > 5 mg/L en sistemas intensivos
                td Previene estrés y mortalidad.
              tr
                td pH
                td 6.5 – 8.5
                td Mantiene equilibrio químico.
              tr
                td Transparencia (Disco Secchi)
                td 30 – 50 cm en estanques fertilizados
                td Indica productividad natural adecuada.
    //- Fin Tabla       
    
    p.mt-5(data-aos="fade-left") El análisis de indicadores debe ser:


    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema4/icon1_1.svg', alt='')
          h3.text-center Comparativo
          p.text-center Frente a estándares o históricos.


      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/icon1_2.svg', alt='')
          h3.text-center Periódico
          p.text-center Para identificar tendencias.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/icon1_3.svg', alt='')
          h3.text-center Registrado
          p.text-center Dentro del sistema documental.


      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/icon1_4.svg', alt='')
          h3.text-center Interpretado técnicamente
          p.text-center Considerando relación causa–efecto.
 
    //- Fin Tarjetas


    p.mt-2(data-aos="fade-left") No basta con medir variables aisladas. Es indispensable comprender el comportamiento integral del sistema productivo para tomar decisiones acertadas y sostenibles.
    //-Fin Tema4.2


    //- Inicio Tema4.3
    .row.mt-5
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Relación entre indicadores y toma de decisiones

    p(data-aos="fade-left") A continuación, se presenta un video que explica la importancia de los indicadores técnicos en la gestión acuícola y su papel estratégico en la toma de decisiones para optimizar la productividad, la sanidad y la rentabilidad del sistema productivo.
    
    
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    //- Fin Tema4.3

</template>

<script>
export default {
  name: 'Tema4',
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
