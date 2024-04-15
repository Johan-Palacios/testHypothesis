import { Input, FormLabel } from '@chakra-ui/react'

export const InputMeanSample = (props) => {
  return (
    <>
      <FormLabel>Media Muestral</FormLabel>
      <Input type='number' placeholder='Ingrese la Media Muestral Ej. 497.3' {...props} />
    </>
  )
}

export const InputMeanPopulation = (props) => {
  return (
    <>
      <FormLabel>Media Muestral</FormLabel>
      <Input type='number' placeholder='Ingrese la Media Poblacional Ej. 500' {...props} />
    </>
  )
}

export const InputStandardDesviation = (props) => {
  return (
    <>
      <FormLabel>Desviación Standard</FormLabel>
      <Input type='number' placeholder='Ingrese la Desvacíón Standard' {...props} />
    </>
  )
}

export const InputSample = (props) => {
  return (
    <>
      <FormLabel>Muestra</FormLabel>
      <Input type='number' placeholder='Ingrese la Muestra' {...props} />
    </>
  )
}

export const InputSignificanceLevel = (props) => {
  return (
    <>
      <FormLabel>Nivel De Significancia</FormLabel>
      <Input step={0.01} min={0} max={1} type='number' placeholder='Ingrese el Nivel de Significacia' {...props} />
    </>
  )
}
