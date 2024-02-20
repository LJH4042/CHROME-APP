import React, {useEffect, useState} from 'react'

function Clock() {
  const [clock, setClock] = useState(new Date())
  const renewTime = () => setClock(clock => new Date())

  const clockHour = String(clock.getHours()).padStart(2, 0)
  const clockMinutes = String(clock.getMinutes()).padStart(2, 0)
  const clockSeconds = String(clock.getSeconds()).padStart(2, 0)

  useEffect(() => {
    const time = setInterval(renewTime, 1000)
    return () => clearInterval(time)
  })

  return (
    <div>
      <h2>{`${clockHour}:${clockMinutes}:${clockSeconds}`}</h2>
    </div>
  )
}

export default Clock
