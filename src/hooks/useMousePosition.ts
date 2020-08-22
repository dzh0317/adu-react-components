import { useState, useEffect } from 'react';

function useMousePosition(){

  const [position, setPosition] = useState({x: 0, y: 0});
  
  useEffect(() => {
    const mousemoveHandler= (event: MouseEvent) => {
      setPosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener('mousemove', mousemoveHandler)
    return () => {
      window.removeEventListener('mousemove',mousemoveHandler)
    }
  })
  
  return position;
}

export default useMousePosition;