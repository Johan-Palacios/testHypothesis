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
          statisticsTest: '',
          endpoint: 'know_dev_estand',
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
              placeholder: 'Ingrese la Desvacíón Standard'
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
          caseDefinition: 'x ~ Bernoulli(p)'
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
