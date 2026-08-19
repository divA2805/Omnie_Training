'use client'

import './globals.css'

import { useRef } from 'react'
import { Provider } from 'react-redux'

import {
  makeStore,
  AppStore,
} from '@/lib/store'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <html lang="en">
      <body>
        <Provider store={storeRef.current}>
          {children}
        </Provider>
      </body>
    </html>
  )
}