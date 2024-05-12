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
              placeholder: 'Ingrese la Desvacíón Estandard'
            },
            n: {
              name: 'Muestra',
              type: 'number',
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
              placeholder: 'Ingrese la Desvacíón Estandard'
            },
            n: {
              name: 'Muestra',
              type: 'number',
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
              placeholder: 'Ingrese la Desvacíón Estandard'
            },
            n: {
              name: 'Muestra',
              type: 'number',
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
              placeholder: 'Ingrese la Desvacíón Estandard Muestral'
            },
            n: {
              name: 'Muestra',
              type: 'number',
              placeholder: 'Ingrese la Muestra'
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
          image: 'mean_unknow_dev_stand_dist_unknow.png',
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
              placeholder: 'Ingrese la Muestra'
            }

          }

        }
      ]
    },
    {
      type: 'standev',
      name: 'σ² (Desviación Estándar )',
      cases: [
        {
          name: 'x ~ N(μ, σ)',
          caseDefinition: 'x ~ N(μ, σ)'
        }
      ]
    }
  ]
}

export default testHipotesis
