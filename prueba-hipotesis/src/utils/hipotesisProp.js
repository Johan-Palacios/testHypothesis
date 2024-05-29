const testHipotesis = {
  interestParam: [
    {
      type: 'mean',
      name: 'μ (Media Poblacional)',
      cases: [
        {
          name: 'Deviación Estandar Conocida',
          caseDefinition: 'x ~ N(μ, σ)',
          image: 'mean_know_dev_stand.png',
          endpoint: 'mean/know_dev_stand/',
          reqData: {
            mean_sample: {
              name: 'Media Muestral',
              type: 'number',
              placeholder: 'Ingrese la Media Muestral Ej. 497.3',
              step: 0.1
            },
            mean_population: {
              name: 'Media Poblacional',
              type: 'number',
              maininterest: 1,
              placeholder: 'Ingrese la Media Poblacional Ej. 500'
            },
            dev_stand:
            {
              name: 'Desviación Estandar',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra'
            }
          }
        },

        {
          name: 'Deviación Estándar No Conocida T-Student',
          caseDefinition: 'x ~ N(μ, σ)',
          image: 'mean_unknow_dev_stand_t.png',
          endpoint: 'mean/unknown_dev_stand_t/',
          reqData: {
            mean_sample: {
              name: 'Media Muestral',
              type: 'number',
              placeholder: 'Ingrese la Media Muestral Ej. 497.3',
              step: 0.1
            },
            mean_population: {
              name: 'Media Poblacional',
              type: 'number',
              maininterest: 1,
              placeholder: 'Ingrese la Media Poblacional Ej. 500'
            },
            sample_dev_stand:
            {
              name: 'Desviación Estandar Muestral',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra'
            }
          }
        },
        {
          name: 'Deviación Estándar Conocida Dist. Desconocida',
          caseDefinition: 'x ~ desconocida n >= 30',
          image: 'mean_know_dev_stand_dist_know.png',
          endpoint: 'mean/know_dev_stand/',
          reqData: {
            mean_sample: {
              name: 'Media Muestral',
              type: 'number',
              placeholder: 'Ingrese la Media Muestral Ej. 497.3',
              step: 0.1
            },
            mean_population: {
              name: 'Media Poblacional',
              type: 'number',
              maininterest: 1,
              placeholder: 'Ingrese la Media Poblacional Ej. 500'
            },
            dev_stand:
            {
              name: 'Desviación Estandar',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra'
            }
          }
        },
        {
          name: 'Deviación Estándar Desconocida Dist. Desconocida',
          caseDefinition: 'x ~ desconocida n >= 30',
          image: 'mean_unknow_dev_stand_dist_unknow.png',
          endpoint: 'mean/know_dev_stand/',
          reqData: {
            mean_sample: {
              name: 'Media Muestral',
              type: 'number',
              placeholder: 'Ingrese la Media Muestral Ej. 497.3',
              step: 0.1
            },
            mean_population: {
              name: 'Media Poblacional',
              type: 'number',
              maininterest: 1,
              placeholder: 'Ingrese la Media Poblacional Ej. 500'
            },
            dev_stand:
            {
              name: 'Desviación Estandar Muestral',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar Muestral'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra'
            }
          }
        },

        {
          name: 'Dos Medias Varianzas Conocidas No Iguales',
          caseDefinition: '...',
          image: 'double_mean_variance_no_equal.png',
          endpoint: 'mean/doble_mean_variance_no_equal/',
          reqData: {
            mean_1: {
              name: 'Media 1',
              maininterest: 2,
              type: 'number',
              placeholder: 'Ingrese la Media 1 Ej. 497.3',
              step: 0.1
            },
            mean_2: {
              name: 'Media 2',
              type: 'number',
              placeholder: 'Ingrese la Media 2 Ej. 497.3',
              step: 0.1
            },

            dev_stand_1:
            {
              name: 'Desviación Estandar 1',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar 1'
            },

            dev_stand_2:
            {
              name: 'Desviación Estandar 1',
              type: 'number',
              placeholder: 'Ingrese la Desvacíón Estandar 2'
            },
            n: {
              name: 'Muestra 2',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra 1'
            },
            n_2: {
              name: 'Muestra 2',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra 2'
            }
          }
        }
      ]
    },
    {
      type: 'proportion',
      name: 'p (Proporción Poblacional)',
      cases: [
        {
          name: 'Con n >= a 30',
          caseDefinition: 'x ~ Bernoulli(p)',
          image: 'proportion_bernolli_n.png',
          endpoint: 'proportion/proportion_bernoulli_n/',
          reqData: {
            proportion_population: {
              name: 'Proporcion Poblacional',
              type: 'number',
              placeholder: 'Ingrese la proporción poblacional Ej. 0.2',
              step: 0.01,
              max: 0.99,
              min: 0.01,
              maininterest: 1
            },
            proportion_sample: {
              name: 'Proporcion Muestral',
              type: 'number',
              placeholder: 'Ingrese la proporción Muestral Ej. 0.8',
              step: 0.01,
              max: 0.99,
              min: 0.01
            },
            n: {
              name: 'Muestra',
              type: 'number',
              min: 1,
              placeholder: 'Ingrese la Muestra'
            }
          }

        }
      ]
    },
    {
      type: 'standev',
      name: 'σ² ( Desviación Estándar )',
      cases: [
        {
          name: 'x ~ N(μ, σ)',
          caseDefinition: '...',
          image: 'dev_stand_chi.png',
          endpoint: 'dev_stand/dev_stand_chi/',
          reqData: {
            dev_stand_population: {
              name: 'Desviación Estándar Poblacional',
              type: 'number',
              placeholder: 'Ingrese la proporción poblacional Ej. 0.2',
              maininterest: 1
            },
            dev_stand_sample: {
              name: 'Desviación Estándar Muestral',
              type: 'number',
              placeholder: 'Ingrese la proporción Muestral Ej. 0.8'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              placeholder: 'Ingrese la Muestra'
            }
          }
        }
      ]
    }
  ]
}

export default testHipotesis
