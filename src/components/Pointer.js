import React, { useState } from 'react'

export default function Pointer() {
  const [pointer, setPointer] = useState(true);

  setTimeout(() => {
    setPointer(!pointer);
  }, 500);

  return (
    <>
      ...
      {
        (pointer) && <span>|</span>
      }
    
    </>
  )
}
