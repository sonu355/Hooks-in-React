import React,{useEffect, useState, useRef} from 'react'

export default function Useref() {
    const[name, setName] = useState('')
    const renderCount = useRef(1)
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>my name is {name}</div>
      <div>render is {renderCount.current} times</div>
    </>
  )
}
