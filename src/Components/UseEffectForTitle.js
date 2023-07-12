import React, { useEffect, useState } from 'react'

export default function UseEffectForTitle() {

let [incrs, setIncrs] = useState(0);

const add = () => {
    setIncrs((incrz) => incrz + 1)
}

useEffect(
    () => document.title = incrs, [incrs]
)

useEffect(
    () => alert('Component is mounted'), []
)

  return (
    <div>
        <button onClick={add}>Add</button>
        <h1>{incrs}</h1>
    </div>
  )
}
