
import React, { useRef } from 'react'
// import { mount } from 'auth/AuthApp';

const ShoppingCart: React.FC = () => {
  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null)

  // useEffect(() => {
  //   mount(ref.current);
  // }, []);

  return <div ref={ref} />
}

export default ShoppingCart
