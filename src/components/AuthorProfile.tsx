export interface AuthorProfileProps {
  avatar: string
  reputation: string
}

const AuthorProfile = ({ avatar, reputation }: AuthorProfileProps) => {
  return (
    <div className="author-stats">
      <div className="author-profile"></div>
      <span>{reputation}</span>
      <style jsx>{`
        .author-stats {
          display: flex;
        }
        .author-profile {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: 4px solid #ffffff;
          background-image: ${`url(${avatar})`};
          background-position: center;
          background-size: contain;
        }
        @media screen and (min-width: 576px) {
          .author-profile {
            width: 5rem;
            height: 5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AuthorProfile
