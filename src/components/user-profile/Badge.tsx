import CircularProgress from '../CircularProgress'

export interface BadgeProps {
  name: string
  classes?: string
  progress: number
}

const Badge = ({ name, progress, classes }: BadgeProps) => {
  return (
    <>
      <div className={`badge flex flex-col items-center ${classes}`}>
        <div className="w-6 xl:w-1/3">
          <CircularProgress progress={progress} />
        </div>
        <div className="badge-content h-10 w-full p-2"></div>
      </div>
      <style jsx>
        {`
          .badge {
            background: url('/assets/badge.svg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
          .badge-content {
            background: url(${`/assets/${name}.svg`});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  )
}

export default Badge
