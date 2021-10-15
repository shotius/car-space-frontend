import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, DrawerFooter } from "@chakra-ui/react"

export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button  colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}