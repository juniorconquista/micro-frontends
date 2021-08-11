import React from 'react'
import { useAtom } from 'jotai'
import { countProductsAtom } from './atoms/store'

const App: React.FC = () => {
  const [count, setCount] = useAtom(countProductsAtom)

  return <div
    style={{
      border: '1px solid rgb(202 202 202)',
      width: '500px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <p style={{ textAlign: 'center' }}>Store</p>
    <p style={{ textAlign: 'center' }}> total de produtos: {count}</p>
    <div style={{ textAlign: 'center' }}>
      <button
        type="button"
        style={{
          width: '40%',
          padding: '8px 12px'
        }}
        onClick={() => setCount(count + 1)}
      >
        Adicionar produto
      </button>
    </div>
  </div>
}

export default App
