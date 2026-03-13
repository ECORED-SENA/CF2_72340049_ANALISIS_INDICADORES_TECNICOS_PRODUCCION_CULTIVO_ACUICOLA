<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar sobre los materiales y equipos utilizados en el seguimiento técnico, la gestión de la información productiva, la interpretación de indicadores y la formulación de acciones de mejora en sistemas acuícolas, fortaleciendo su capacidad de análisis y toma de decisiones fundamentadas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del seguimiento técnico en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar variables productivas, sanitarias y ambientales del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar únicamente el volumen de comercialización final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir exclusivamente los costos administrativos del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar solamente el aumento del número de peces sembrados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué equipo se utiliza para medir el oxígeno disuelto en el agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disco Secchi para medir transparencia del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oxímetro digital para medir oxígeno disuelto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Balanza digital para calcular biomasa total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'pH-metro digital para evaluar acidez del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal del Disco Secchi en acuicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la temperatura del agua en estanques.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular el peso promedio de los peces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar la concentración de oxígeno disuelto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar la transparencia como indicador de productividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué indicador técnico permite evaluar la eficiencia en el uso del alimento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ganancia diaria de peso promedio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tasa de crecimiento específico porcentual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conversión alimenticia del sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Biomasa total del lote cultivado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica técnica deseable en los equipos de medición acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requerir reemplazo constante de componentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer precisión, confiabilidad y fácil calibración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presentar alto consumo energético continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tener diseño complejo sin calibración frecuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué registro permite evidenciar tratamientos y uso de medicamentos en el cultivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro productivo de biomasa acumulada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro ambiental de calidad del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro sanitario de tratamientos aplicados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Formato de cosecha parcial del lote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué indicador se calcula multiplicando número de peces por peso promedio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa específica de crecimiento diario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Biomasa total del sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porcentaje de supervivencia acumulada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión alimenticia acumulada final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es un factor ambiental que afecta directamente la conversión alimenticia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio de venta del pescado comercializado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponibilidad de formatos administrativos digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel de oxígeno disuelto en agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Capacidad de mercadeo regional acuícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué acción corresponde a una medida preventiva en acuicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar tratamiento después de alta mortalidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir densidad tras detectar enfermedad activa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar aireación por crisis de oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitorear diariamente oxígeno en épocas cálidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad principal de la gestión de la información productiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transformar datos en información para decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenar datos sin interpretación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Archivar documentos sin análisis posterior técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplir únicamente requisitos administrativos básicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué equipo se emplea para medir la longitud de los peces en muestreos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balanza digital de precisión portátil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ictiómetro o regla milimetrada graduada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Oxímetro digital multiparamétrico portátil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Termómetro electrónico de campo acuícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es un rango recomendado de oxígeno disuelto en sistemas intensivos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre uno y dos miligramos litro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exactamente tres miligramos por litro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor a cinco miligramos litro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Menor a cuatro miligramos por litro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de registro incluye datos como siembra, biomasa y consumo de alimento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro sanitario de tratamientos veterinarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro ambiental de parámetros fisicoquímicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formato de mantenimiento de instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro productivo del sistema acuícola.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué indicador evalúa el porcentaje de peces vivos al final del ciclo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervivencia porcentual del cultivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ganancia promedio de peso diario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tasa de crecimiento específico acumulado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión alimenticia por lote evaluado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es un factor nutricional que puede alterar el crecimiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variaciones climáticas externas regionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Baja calidad del alimento suministrado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incremento del costo energético mensual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios en transparencia del estanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué herramienta digital facilita el cálculo automático de indicadores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuaderno físico de apuntes diarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carpeta manual con documentos archivados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hoja de cálculo digital tipo Excel.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Archivo impreso almacenado cronológicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué se debe hacer antes de interpretar datos productivos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar inmediatamente una acción correctiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar densidad sin análisis previo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ajustar alimentación sin verificación técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Validar coherencia y calibración del equipo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es el objetivo principal de una acción correctiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar causa de desviación detectada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Anticiparse a una posible falla futura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prevenir riesgos mediante monitoreo continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacitar personal antes de producir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué parámetro químico mantiene el equilibrio ácido-base del agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oxígeno disuelto en concentraciones altas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'pH dentro de rango técnico adecuado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transparencia medida con disco Secchi.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temperatura promedio del sistema productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite la trazabilidad en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar densidad sin control técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar registros productivos históricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir monitoreo ambiental del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconstruir historia del producto cultivado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
