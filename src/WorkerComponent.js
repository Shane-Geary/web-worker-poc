import React, { useState, useEffect } from 'react'

function WorkerComponent() {
  const [worker, setWorker] = useState(null)

  useEffect(() => {
    const newWorker = new Worker('worker.js')
    setWorker(newWorker)

    return () => {
      newWorker.terminate()
    }
  }, [])

  return (
    <div>
      <h1>Worker Example</h1>
      <p>Check console for output.</p>
      
    </div>
  )
}

export default WorkerComponent;
