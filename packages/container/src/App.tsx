import React, { lazy, Suspense } from 'react'

const StoreLazy = lazy(async () => import('./applications/store/store'))
const ShoppingCartLazy = lazy(async () => import('./applications/shopping-cart/shopping-cart'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <StoreLazy />
        <ShoppingCartLazy />
      </div>
    </Suspense>
  )
}

export default App
