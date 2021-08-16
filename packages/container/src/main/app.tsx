import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { PrivateRoutes, PublicRoutes } from '@/presentation/components'
import { authAtom } from '@/atoms'
import { useStorageObservable } from '@/hooks'

const App: React.FC = () => {
  const [auth] = useAtom(authAtom)
  console.log('auth', auth)
  useStorageObservable()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </Suspense>
  )
}

export default App
