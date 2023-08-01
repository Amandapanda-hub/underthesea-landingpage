import React from 'react'
import './WaveStyles.css'
import { ReactComponent as WaveSVG } from '../../assets/SVG/waveFix.svg';

export default function Wave() {
  return (
    <div className="wave absolute w-full">
      <WaveSVG />
    </div>
  )
}
