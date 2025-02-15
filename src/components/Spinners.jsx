import React from 'react'
import loading from '../assets/loading.gif'

export default function Spinners() {
  return (
    <div className="flex justify-center items-center">
      <img src={loading} alt="Loading Spinner" className="w-10 h-10" />
    </div>
  )
}
