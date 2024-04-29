// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { colors } from "./colors";

const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}