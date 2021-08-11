
import React, { useRef, useEffect } from 'react'
import { mount } from 'shoppingCart/ShoppingCartApp'

const ShoppingCart: React.FC = () => {
  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

export default ShoppingCart
