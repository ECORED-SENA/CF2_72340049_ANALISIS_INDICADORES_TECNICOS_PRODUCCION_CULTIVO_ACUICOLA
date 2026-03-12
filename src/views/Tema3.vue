<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Registros técnicos en la producción acuícola
    
    
    p(data-aos="fade-left") La clasificación de los materiales y equipos facilita su organización técnica y operativa dentro del sistema acuícola. A continuación, se presentan los principales componentes asociados a la infraestructura del sistema productivo.


    //- Inicio Tema3.1
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Concepto y finalidad de los registros

    p.mb-3(data-aos="fade-left") Los registros técnicos en acuicultura son documentos físicos o digitales en los que se consignan, de manera sistemática, los datos relacionados con el manejo productivo, sanitario, ambiental y administrativo del cultivo. Su finalidad principal es:

    .row
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

      .col-lg-9.order-lg-1(data-aos="fade-left")
        .bg-color-15-1.p-4
          .row.align-items-center.bg-color-2
            .col-lg-4.px-0.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/1.png", style="width:100%; height:100%; object-fit:cover;")

            .col-lg-8.p-
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Garantizar el seguimiento continuo del sistema productivo.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Facilitar la toma de decisiones basadas en datos reales.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Evidenciar el cumplimiento de las Buenas Prácticas Piscícolas.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Respaldar procesos de inspección, vigilancia y control.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Permitir la trazabilidad del producto, desde la siembra hasta la comercialización.
              

        p.mb-3(data-aos="fade-left") El registro organizado de información constituye un pilar fundamental para mejorar la eficiencia, reducir pérdidas económicas y asegurar la calidad e inocuidad del producto final.

    //- Fin Tema3.1

    //- Inicio Tema3.2
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Tipos de registros: productivos, sanitarios y ambientales

        p.mb-3(data-aos="fade-left") De acuerdo con las buenas prácticas en piscicultura, los registros se clasifican en tres categorías principales. Cada una cumple una función específica dentro del sistema de gestión de la información.



    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide1_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 A. Registros productivos
                    p Los registros productivos permiten evaluar el desempeño zootécnico del cultivo y calcular indicadores técnicos fundamentales. Incluyen:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Fecha y número de siembra.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Origen y cantidad de alevinos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Peso inicial y peso final.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Mortalidad diaria o acumulada.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Conversión alimenticia.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Biomasa total.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Consumo de alimento.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Cosechas parciales o totales.
                    p Estos registros permiten calcular indicadores como <b>crecimiento, supervivencia y rendimiento productivo</b>, fundamentales para evaluar eficiencia técnica y rentabilidad.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide1_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 B. Registros sanitarios
                    p Los registros sanitarios están orientados al control, prevención y seguimiento de enfermedades dentro del sistema productivo. Incluyen:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Historial de tratamientos aplicados.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Uso de medicamentos y dosis administradas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Períodos de retiro.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Diagnósticos clínicos o de laboratorio.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Programas de bioseguridad.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Mortalidades asociadas a patologías.                      
                    p Estos documentos son fundamentales para demostrar el uso responsable de insumos veterinarios y garantizar la <b>inocuidad del producto final</b>, especialmente en procesos de certificación o comercialización formal.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema3/slide1_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h3 C. Registros ambientales
                    p Los registros ambientales se relacionan con el monitoreo permanente de la calidad del agua y las condiciones del sistema. Incluyen:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Temperatura.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Oxígeno disuelto.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 pH.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Transparencia (Disco Secchi).
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Turbidez.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Amonio, nitritos y nitratos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Manejo de residuos.
                    p Estos datos permiten prevenir problemas productivos asociados a desequilibrios ambientales, reducir riesgos sanitarios y mejorar la sostenibilidad del cultivo.
    //- Slideshow


    p.mb-3(data-aos="fade-left") La integración de registros productivos, sanitarios y ambientales consolida un sistema de información técnica integral, orientado al control eficiente, la trazabilidad y la mejora continua en la producción acuícola.

    //- Fin Tema3.2


    //- Inicio Tema3.3
    .row.mt-5
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Formatos técnicos y estructura de diligenciamiento

        p.mb-3(data-aos="fade-left") Los formatos técnicos constituyen la herramienta operativa para registrar información de manera organizada, clara y trazable. Su correcta estructuración garantiza coherencia en los datos y facilita procesos de control interno, auditoría y certificación. Generalmente, un formato técnico debe incluir los siguientes elementos:


    //- Carrusel
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-11.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-12 col-md-6 col-lg-4")
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Nombre del predio
                  p.card-text.text-center
                  | Identifica la unidad productiva.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Estanque o sistema
                  p.card-text.text-center
                  | Permite diferenciar lotes y áreas.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Fecha
                  p.card-text.text-center
                  | Ubica cronológicamente el registro.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Variable evaluada
                  p.card-text.text-center
                  | Especifica el dato medido.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_5.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Unidad de medida
                  p.card-text.text-center
                  | Estandariza la interpretación del dato.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_6.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Responsable
                  p.card-text.text-center
                  | Garantiza trazabilidad y control.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema3/icon1_7.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center.mb-4 Observaciones
                  p.card-text.text-center
                  | Registra novedades o situaciones atípicas.
    //- Fin Carrusel

    .row.justify-content-center.align-items-center.mb-5    

      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/3.png', alt='')

      .col-lg-7(data-aos="fade-right")
        p Para su correcto diligenciamiento se recomienda:
        .bg-color-4.p-4.p-md-5.h-100.rounded-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Registrar datos en tiempo real, evitando transcripciones posteriores.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 No dejar espacios en blanco.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Corregir errores mediante nota aclaratoria, sin eliminar el dato original.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Mantener archivos organizados cronológicamente.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Digitalizar la información cuando sea posible.
        
        p.mt-3 Un formato estructurado facilita auditorías, procesos de certificación en Buenas Prácticas Piscícolas y control técnico del sistema productivo.
            
    //- Fin Tema3.3

    //- Inicio Tema3.4
    .row.mt-5
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Importancia de la trazabilidad y control documental           
    
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-7(data-aos="fade-right")
        p La trazabilidad en acuicultura permite reconstruir la historia del producto, desde la adquisición de insumos hasta la comercialización final. Este proceso integra información productiva, sanitaria y ambiental para garantizar transparencia y cumplimiento normativo. Un adecuado control documental permite:
        .bg-color-4.p-4.p-md-5.h-100.rounded-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Identificar el lote de origen.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Verificar prácticas de alimentación aplicadas.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Confirmar tratamientos sanitarios realizados.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Evaluar parámetros ambientales históricos.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Determinar causas de pérdidas productivas
        
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/3.png', alt='')

    
    p.mb-3(data-aos="fade-left") Los formatos técnicos constituyen la herramienta operativa para registrar información de manera organizada, clara y trazable. Su correcta estructuración garantiza coherencia en los datos y facilita procesos de control interno, auditoría y certificación. Generalmente, un formato técnico debe incluir los siguientes elementos:
    p.mb-3(data-aos="fade-left") La implementación organizada de registros técnicos no solo mejora la eficiencia productiva, sino que transforma la información en una herramienta estratégica para la sostenibilidad, la rentabilidad y la mejora continua del cultivo acuícola.

    //- Fin Tema3.4


</template>

<script>
export default {
  name: 'Tema3',
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
