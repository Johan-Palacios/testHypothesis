const testHipotesis = {
  interestParam: [
        {
          type: "mean",
          name:"μ (Media Poblacional)",
          cases: [ 
            {
              name: "Deviación Estandar Conocida",
              caseDefinition: "x ~ N(μ, σ)",
              statisticsTest: "",
              endpoint: "know_dev_estand"
            }
          ]
        },
      {
          type: "proportion",
          name:"p (Proporción Poblacional)",
          cases: [
          ]
      },
      {
        type: "standev",
        name:"σ² (Desviación Estándar )",
        cases: [
        ]
      }
    ]
}

export default testHipotesis
