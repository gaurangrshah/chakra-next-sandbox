import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../chakra"
import { DefaultLayout } from '../chakra/Layouts/default'


function MyApp({ Component, pageProps }) {
  console.log({ theme });
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
