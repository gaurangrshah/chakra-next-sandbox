import Head from 'next/head'
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react"

const cardStyles = {
  margin: 4, // preset for '1rem'
  padding: 6, // preset for '1.5rem'
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid',
  borderColor: 'brand.50',
  borderRadius: '10px',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  maxWidth: '300px',
  minH: '10rem',
  '_hover': {
    color: 'brand.200',
    borderColor: 'brand.200'
  },
  '_focus': {
    color: 'brand.200',
    borderColor: 'brand.200'
  },
  '_active': {
    color: 'brand.200',
    borderColor: 'brand.200'
  },
  h2: {
    marginBottom: 4, // preset for '1rem'
    fontSize: '2xl' // preset for '1.5rem'
  },
  p: {
    m: 0,
    fontSize: 'xl',
    lineHeight: 'base',
  }
}

const cards = {
  chakraLinks: [
    {
      title: 'Documentation',
      href: 'https://chakra-ui.com/docs/getting-started',
      description: 'Find in-depth information about Chakra-UI features.'
    },
    {
      title: 'Guides',
      href: 'https://chakra-ui.com/guides/integrations/with-cra"',
      description: 'Quick guides to accomplish most basic features.'
    },
    {
      title: 'Default Theme',
      href: 'https://chakra-ui.com/docs/theming/theme',
      description: 'Base Chakra theme presets.'
    },
    {
      title: 'Style Props',
      href: 'https://chakra-ui.com/docs/features/style-props',
      description: 'Chakra utility presets reference.'
    }
  ],
  nextLinks: [
    {
      title: 'Documentation',
      href: 'https://nextjs.org/docs',
      description: 'Find in-depth information about Next.js features and API.'
    },
    {
      title: 'Learn',
      href: 'https://nextjs.org/learn',
      description: 'Learn about Next.js in an interactive course with quizzes!'
    },
    {
      title: 'Examples',
      href: 'https://github.com/vercel/next.js/tree/master/examples',
      description: 'Discover and deploy boilerplate example Next.js projects.'
    },
    {
      title: 'Deploy',
      href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      description: 'Instantly deploy your Next.js site to a public URL with Vercel.'
    },
  ]
}

export default function Home() {
  const { chakraLinks, nextLinks } = cards;
  return (
    <Container px={0} maxW="container.md">
      <Head>
        <title>Chakra-UI Sandbox</title>
        <meta name="description" content="A Chakra-UI sandbox built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading as="h1" textStyle="title" my={12} color="gray.600">
          Chakra / Next Sandbox
        </Heading>

        <Box w="full" mb={6} p={4} border="1px" borderColor="gray.300" rounded="md">
          <Heading fontSize="xl" color="gray.600">Chakra-UI</Heading>
            <Flex w="full" flexDir={['column', 'row']} align="center" justifyContent="center" wrap="wrap">
              {chakraLinks.map((link) => (
                <Link key={`chakra-${link.title}`} href={link.href} isExternal {...cardStyles}>
                  <Heading as="h2" {...cardStyles.h2}>{link.title}&rarr;</Heading>
                  <Text {...cardStyles.p}>{link.description}</Text>
                </Link>
              ))}
            </Flex>
        </Box>
        <Box p={4} border="1px" borderColor="gray.300" rounded="md">
          <Heading fontSize="xl" color="gray.600">Next.js</Heading>
          <Flex w="full" flexDir={['column', 'row']} align="center" justifyContent="center" wrap="wrap">
            {nextLinks.map((link) => (
              <Link key={`chakra-${link.title}`} href={link.href} isExternal {...cardStyles}>
                <Heading as="h2" {...cardStyles.h2}>{link.title}&rarr;</Heading>
                <Text {...cardStyles.p}>{link.description}</Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Box>
    </Container>
  )
}
