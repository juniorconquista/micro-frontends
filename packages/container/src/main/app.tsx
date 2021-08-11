import React, { Suspense, useCallback, useState } from 'react'
import { useHistory, BrowserRouter } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '@/presentation/components'

const App: React.FC = () => {
  const accessToken = !!sessionStorage.getItem('SessionKey')
  const history = useHistory()
  const [isSignedIn, setIsSignedIn] = useState(accessToken)

  const onSignIn = useCallback(() => {
    setIsSignedIn(true)
    history.push('/')
  }, [isSignedIn])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        {isSignedIn ? <PrivateRoutes /> : <PublicRoutes onSignIn={onSignIn} />}
      </BrowserRouter>
    </Suspense>
  )
}

export default App
