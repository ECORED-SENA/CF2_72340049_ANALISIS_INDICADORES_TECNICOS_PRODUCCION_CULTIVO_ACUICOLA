<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Concepto e importancia de la gestión de la información

    p.mb-3.mt-5 El análisis conjunto de estos datos fortalece la toma de decisiones basada en evidencia técnica y contribuye a la sostenibilidad del cultivo acuícola.
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-2       
      .row.justify-content-center.align-items-stretch         
        .col-lg-8.mb-3.mb-lg-0          
          .p-4.p-md-5.h-100.bg-custom-dark-teal.rounded-4
            .row.align-items-center.h-100              
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema2/podcast.svg" style="max-width: 280px;").img-fluid              
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#FFC94A") Pódcast                 
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Gestión de la información productiva en acuicultura
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-4
          figure.h-100.mb-0            
            img.h-100.w-100.rounded-4(src='@/assets/curso/tema2/1.png', alt='Acuicultor trabajando', style="object-fit: cover;")

    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Técnicas para la recolección de datos


    p(data-aos="fade-left") La recolección de datos debe ser <b>sistemática, periódica y estandarizada</b>, utilizando equipos calibrados y formatos previamente definidos. La consistencia en la toma de datos garantiza comparabilidad y confiabilidad en los análisis posteriores.
    //- Inicio Tema2.1


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Recolección de datos ambientales
    //- Título con imagen


    p(data-aos="fade-left") Los datos ambientales se obtienen mediante equipos de medición de calidad de agua, los cuales permiten controlar variables críticas del sistema. A continuación, se relacionan los principales parámetros y el equipo utilizado:


    //- Inicio Tabla
    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Relación entre parámetros de calidad del agua y equipos de medición correspondientes
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 50%") Parámetro
                th.text-center(style="width: 50%") Equipo utilizado                
            tbody
              tr
                td Temperatura.
                td Termómetro electrónico.                
              tr
                td Oxígeno disuelto.
                td Oxímetro digital.                
              tr
                td pH.
                td pH-metro digital.                
              tr
                td Transparencia.
                td Disco Secchi.                
              tr
                td Turbidez.
                td Turbidímetro.                
              tr
                td Amonio, nitritos y nitratos..
                td Kits colorimétricos o espectrofotómetro.
    //- fin Tabla                
              
    p.mt-5(data-aos="fade-left") Estos datos deben registrarse en horarios definidos. En sistemas intensivos, se recomienda medición <b>en la mañana y en la tarde</b>, debido a las variaciones diurnas del oxígeno y el pH.


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Recolección de datos productivos
    //- Título con imagen

    p.mt-5(data-aos="fade-left") Los datos productivos se obtienen mediante muestreos periódicos que permiten estimar crecimiento, biomasa y eficiencia alimenticia. La relación entre variable productiva y equipo utilizado se presenta a continuación:

    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1_1.svg', alt='')

          h3.text-center Biomasa
          p.text-center Balanza digital o peso reloj.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1_2.svg', alt='')

          h3.text-center Longitud
          p.text-center Ictiómetro.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1_3.svg', alt='')

          h3.text-center Supervivencia
          p.text-center  Conteo inicial y final.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1_4.svg', alt='')

          h3.text-center Densidad real
          p.text-center Muestreo poblacional.


      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1_5.svg', alt='')

          h3.text-center Consumo de alimento
          p.text-center Registro diario de raciones.

    //- Fin Tarjetas


    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Herramientas complementarias utilizadas en campo:
        ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Trasmallos y atarrayas.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Baldes y coladores.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Recipientes de muestreo.
         
    p.mb-3.mt-5 La frecuencia recomendada para muestreos productivos es <b>cada 8 a 15 días</b>, dependiendo de la fase (precría, levante o engorde) y del nivel de intensificación.


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Recolección de datos productivos
    //- Título con imagen

    p.mb-3.mt-5 La recolección de datos biológicos se orienta a la evaluación sanitaria y microbiológica del sistema. Permite anticipar riesgos y fortalecer la bioseguridad del cultivo. Los principales equipos utilizados se presentan a continuación:

    //- Carrusel
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-9.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-md-6 col-xl-6")
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/icon2_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Microscopio
                  p.card-text.text-center
                  | Identificación de microorganismos y parásitos.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/icon2_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Estereoscopio
                  p.card-text.text-center
                  | Evaluación de estructuras externas y organismos de mayor tamaño.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/icon2_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Cámara de Neubauer
                  p.card-text.text-center
                  | Conteo celular en muestras de fitoplancton.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/icon2_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Cono de Imhoff
                  p.card-text.text-center
                  | Cuantificación de sólidos sedimentables.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema2/icon2_5.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Cajas de Petri y asas bacteriológicas
                  p.card-text.text-center
                  | Cultivo e identificación de microorganismos.
            .col-lg-3.order-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema2/3.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto

    //- Fin Carrusel

    p(data-aos="fade-left") Estos instrumentos permiten identificar microorganismos, sólidos en suspensión y posibles agentes patógenos que puedan afectar la salud de los peces.La integración de datos ambientales, productivos y biológicos consolida un sistema de monitoreo técnico integral, orientado a la prevención de riesgos y a la optimización del desempeño productivo.

    //- Fin Tema2.1



    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Validación y análisis de datos
    

    p(data-aos="fade-left") La validación de datos es un proceso técnico que garantiza confiabilidad antes de realizar cualquier interpretación o cálculo de indicadores. Consiste en verificar que la información registrada cumpla criterios básicos de coherencia y precisión. Los datos deben:


    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.bordes.rounded.h-100.bg-color-3
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta.svg', alt='')
          p.text-center <b>Ser coherentes con las condiciones productivas.</b>

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.bordes.rounded.h-100.bg-color-3
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta.svg', alt='')
          p.text-center <b>Estar completos, sin campos vacíos.</b>

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.bordes.rounded.h-100.bg-color-3
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta.svg', alt='')
          p.text-center  <b>No presentar errores de digitación.</b>

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.bordes.rounded.h-100.bg-color-3
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta.svg', alt='')
          p.text-center <b>Corresponder a la fecha y al estanque correcto.</b>
    //- Fin Tarjetas




    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Procedimiento de validación
    //- Título con imagen


    p(data-aos="fade-left") Para asegurar la calidad del registro, se recomienda aplicar el siguiente procedimiento:


    .row.mt-5.align-items-center.justify-content-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .p-1.rounded.h-100.bg-color-1
          div.bg-color-3-2.p-3.h-100              
              ol.lista-ol--cuadro.ms-4
                li.d-flex.mb-3 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Revisar la calibración del equipo antes y después de la medición.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Comparar los datos con rangos normales según especie y fase productiva.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Identificar valores atípicos que se alejen significativamente del comportamiento esperado.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Confirmar mediante una segunda medición, si existen dudas técnicas.


      .col-lg-3.mb-4.mb-lg-0.text-center(data-aos="zoom-in")
        figure
          img.d-inline(src="@/assets/curso/tema2/4.png", alt="" style="max-width:320px")

      .col-lg-4(data-aos="fade-left")
        .d-flex.flex-column.justify-content-center
          img.mb-3(src="@/assets/curso/tema2/fish_icon.svg", alt="" style="max-width:60px")
          p Una vez validados, los datos permiten calcular indicadores técnicos clave:
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Ganancia diaria de peso (GDP).
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Conversión alimenticia (CA).
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Supervivencia (%).
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Biomasa total.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Densidad real.

    p(data-aos="fade-left") Por ejemplo, si la biomasa aumenta mientras el oxígeno disuelto disminuye, puede generarse riesgo de estrés fisiológico. En ese caso, será necesario incrementar la aireación o el recambio de agua para restablecer el equilibrio.

    p(data-aos="fade-left") El análisis técnico debe enfocarse en:


    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-4
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta_1.svg', alt='')
          h4.card-title.text-center.mb-4 Tendencias
          p.text-center Identificar si el indicador aumenta o disminuye.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta_1.svg', alt='')
          h4.card-title.text-center.mb-4 Relación causa–efecto
          p.text-center Comprender qué variable influye sobre otra.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon_tarjeta_1.svg', alt='')
          h4.card-title.text-center.mb-4 Comparación con metas productivas
          p.text-center Verificar cumplimiento de objetivos establecidos.
    //- Fin Tarjetas

    p(data-aos="fade-left") Un análisis riguroso transforma datos aislados en información estratégica para la toma de decisiones.

    //- Fin Tema2.2



    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Recursos digitales para la organización de información

    
    p(data-aos="fade-left") La digitalización de registros mejora la precisión, facilita el análisis histórico y optimiza el control productivo. La integración de herramientas digitales reduce errores manuales y agiliza la generación de reportes técnicos.

    //- Inicio contenedor vertical
    container.tarjeta.p-4.p-md-5
          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-1(titulo="Herramientas recomendadas")
              .row 
                .col-6
                  h4 Herramientas recomendadas                  
                    ul.lista-ul.mt-4
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Hojas de cálculo (Excel o similares).

                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 <i>Software</i> de gestión acuícola.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Aplicaciones móviles de registro en campo.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Bases de datos digitales.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Sistemas en la nube.
                .col-6
                  figure
                  img(src='@/assets/curso/tema2/pestana1_1.png', alt='')            
              
            .tarjeta.p-5.bg-color-1(titulo="Ventajas de la digitalización")
              .row 
                .col-6
                  h4 Ventajas de la digitalización
                    ul.lista-ul.mt-4
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Automatizan cálculos de indicadores.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Generan gráficos comparativos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Facilitan reportes técnicos periódicos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Permiten análisis por ciclo productivo.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Reducen la pérdida de información.
                .col-6
                  figure
                  img(src='@/assets/curso/tema2/pestana1_2.png', alt='')
    //- Fin contenedor vertical


    p(data-aos="fade-left") La incorporación de estas herramientas fortalece la trazabilidad del cultivo y permite evaluar el desempeño a corto, mediano y largo plazo.


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Integración equipo – dato – indicador
    //- Título con imagen

    p(data-aos="fade-left") La relación entre variable medida, equipo utilizado e indicador asociado permite comprender cómo cada medición impacta el desempeño productivo. A continuación, se presenta la articulación técnica correspondiente:


    //- Inicio Tabla
    .row.justify-content-center
      .col-md-8.mt-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span  Integración entre variables medidas, equipos de control e indicadores 
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 30%") Variable
                th.text-center(style="width: 30%") Equipo 
                th.text-center(style="width: 40%") Indicador asociado
            tbody
              tr
                td Temperatura.
                td Termómetro.            
                td Crecimiento.
              tr
                td Oxígeno.
                td Oxímetro.                
                td Supervivencia.
              tr
                td pH.
                td pH-metro digital.                
                td Toxicidad.
              tr
                td Transparencia.
                td Disco Secchi.                
                td Productividad.
              tr
                td Biomasa.
                td Balanza.                
                td Conversión alimenticia.
              tr
                td Longitud.
                td Ictiómetro.
                td Ganancia de peso.
    //- Inicio Tabla     


    p.mt-3(data-aos="fade-left") La integración sistemática entre medición, registro y análisis constituye la base del control técnico en acuicultura, ya que permite anticipar riesgos, optimizar recursos y mejorar la rentabilidad del sistema productivo.


    //- Fin Tema2.3

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
