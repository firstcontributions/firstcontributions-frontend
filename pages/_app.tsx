import React from 'react'
import { RelayEnvironmentProvider } from 'relay-hooks'

import { createEnvironment } from '../lib/createEnvironment'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
        <RelayEnvironmentProvider
      environment={createEnvironment(pageProps.relayData)}
    >
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  )
}
