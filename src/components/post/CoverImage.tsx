import { ReactChild, ReactChildren } from 'react'

export interface CoverImageProps {
  coverImage: string
  children: ReactChild | ReactChildren
}

const CoverImage = ({ coverImage, children }: CoverImageProps) => {
  return coverImage ? (
    <div className="cover-image">
      {children}
      <style jsx>{`
        .cover-image {
          width: 100%;
          padding: 10rem 0.2rem 0.2rem 0.2rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          background-image: ${`url(${coverImage})`};
          background-position: center;
          background-size: cover;
        }
        @media screen and (min-width: 576px) {
          .cover-image {
            padding: 20rem 0.4rem 0.4rem 0.4rem;
          }
        }
      `}</style>
    </div>
  ) : (
    <></>
  )
}

export default CoverImage
