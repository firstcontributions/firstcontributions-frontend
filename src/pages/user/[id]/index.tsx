import { useRouter } from 'next/router'
import OverallBadge from '../../../components/user-profile/OverallBadge'
import Badge from '../../../components/user-profile/Badge'
import { profile } from '../../../../cypress/fixtures/profile.json'

const UserProfilePage = () => {
  const router = useRouter()
  const { id } = router.query
  const theme = { backgroundColor: '#E3E3E3' }

  return (
    <div className="user-profile">
      <aside>
        <div className="avatar" />
      </aside>
      <main>
        <div className="row">
          <OverallBadge
            classes="w-32 md:w-32 h-32"
            level={profile.overallBadge.level}
          />
        </div>
        <div className="flex row">
          {profile.badges.map((badge) => (
            <Badge
              classes="m-1 pb-2 pt-1 w-20"
              name={badge.name}
              key={badge.name}
              progress={badge.progressToNextBadge}
            />
          ))}
        </div>
        <div className="row"></div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          width: 70vw;
          margin: 1rem;
        }
        .avatar {
          background: url(${profile.avatar});
          background-repeat: no-repeat;
          background-size: contain;
          width: 128px;
          height: 128px;
        }
        .user-profile {
          display: flex;
        }
        .row {
          margin: 1rem;
          padding: 1rem;
          background-color: ${theme.backgroundColor};
        }
      `}</style>
    </div>
  )
}

export default UserProfilePage
