export interface OverallBadgeProps {
  level: number
  classes?: string
}

const OverallBadge = ({ level, classes }: OverallBadgeProps) => {
  return (
    <>
      <div className={`badge flex justify-center items-center ${classes}`}>
        <div className="badge-content"></div>
      </div>

      <style jsx>{`
        .badge {
          background: url('/assets/overall-badge.svg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .badge-content {
          background: url(${`/assets/level-${level}.svg`});
          background-repeat: no-repeat;
          background-size: contain;
          width: 50%;
          height: 50%;
        }
      `}</style>
    </>
  )
}

export default OverallBadge
