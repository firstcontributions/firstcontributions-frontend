export interface CircularProgressProps {
  progress: number
}

export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

export const getArcAttributes = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)
  var arcSweep = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
  ].join(' ')
}

const CircularProgress = ({ progress }: CircularProgressProps) => {
  const endAngle = progress * 3.6

  return (
    <>
      <svg viewBox="0 0 100 100">
        <path
          id="arc1"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="10"
          d={getArcAttributes(50, 50, 30, 0, endAngle)}
        />
      </svg>
    </>
  )
}

export default CircularProgress
