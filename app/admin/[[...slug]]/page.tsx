'use client'

import dynamic from 'next/dynamic'

// Dynamically import TinaAdmin to prevent SSR issues
const TinaAdmin = dynamic(() => 
  import('tinacms').then((mod) => mod.TinaAdmin), 
  { ssr: false }
)

export default function AdminPage() {
  return (
    <div className="h-screen">
      <TinaAdmin />
    </div>
  )
}