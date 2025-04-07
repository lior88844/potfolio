import { FC } from 'react'

const CurvedText: FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 250"
      style={{ zIndex: 1000, overflow: 'visible' }}
    >
      <defs>
        <path
          id="curve"
          d="M 50,180 A 400,400 0 0,1 450,180"
          fill="transparent"
        />
      </defs>
      <text
        fontSize="42"
        fill="white"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          Let's Be Friends
        </textPath>
      </text>
    </svg>
  )
}

export default CurvedText
