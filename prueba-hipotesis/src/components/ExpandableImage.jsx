import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  useDisclosure
} from '@chakra-ui/react'
import { PropTypes } from 'prop-types'

const ExpandableImage = ({ src, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Image
        src={src}
        alt={alt}
        cursor='pointer'
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <ModalContent
          height='100%'
          maxWidth='100%'
          maxHeight='100%'
          display='flex'
          flexDir='column'
          alignItems='center'
          marginTop={0}
          marginBottom={0}
          justifyContent='center'
          bg='none'
          backdropFilter='auto'
          backdropBlur='2px'
          onClick={onClose}
        >
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            <Image src={src} alt={alt} aspectRatio={5 / 4} width='800px' />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ExpandableImage

ExpandableImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
