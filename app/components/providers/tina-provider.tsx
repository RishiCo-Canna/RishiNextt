'use client'

import { TinaCMS, TinaProvider } from 'tinacms'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

const cms = new TinaCMS({
  enabled: true,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  token: process.env.TINA_TOKEN,
})

export default function TinaCMSProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <TinaProvider cms={cms}>
      <TinaEditProvider>
        {children}
      </TinaEditProvider>
    </TinaProvider>
  )
}
