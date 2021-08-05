import React, { useRef, useEffect } from 'react'
import { mount } from 'store/StoreApp'

const Store: React.FC = () => {
  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

export default Store
