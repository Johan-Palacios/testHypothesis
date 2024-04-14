import {
  FormControl,
  Button,
  Container
} from '@chakra-ui/react'
import InterestParamForm from './InterestParamForm.jsx'
import { useEffect,useContext } from 'react'
import CasesForm from './CasesForm.jsx'
import HipotesisAppContext from '../../context/hipotesisAppContext.jsx'

function MainForm() {
  const {hipotesisDefinition} = useContext(HipotesisAppContext)
    useEffect(() => {
    console.log('Cambios en hipotesisDefinition: ', hipotesisDefinition.interestCase);
  }, [hipotesisDefinition]);

    useEffect(() => {
    console.log('Cambios en hipotesisDefinition: ', hipotesisDefinition.interestParam);
  }, [hipotesisDefinition]);

  return (

    <Container display="flex" flexDirection={"row"} flexWrap={"wrap"} w={"100%"} alignSelf={"center"}>
      <form style={{ width: '100%' }} onSubmit={(ev) => {
        ev.preventDefault()
      }}>
        <FormControl>
          <InterestParamForm/>
          {hipotesisDefinition.interestParam !== ""? <CasesForm/>: <></>}
        </FormControl>
        <Button type='submit' mt={5} colorScheme='blue'>Calcular</Button>
      </form>
    </Container>
  )
}


export default MainForm
