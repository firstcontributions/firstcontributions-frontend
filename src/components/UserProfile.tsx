import { profile } from '../../cypress/fixtures/profile.json'
import OverallBadge from './user-profile/OverallBadge'
import Badge from './user-profile/Badge'
import Link from 'next/link'

export interface UserProfileProps {}

const UserProfile = ({}: UserProfileProps) => {
  return (
    <>
      <Link href="/user/[profile.userName]" as={`/user/${profile.userName}`}>
        <div className="avatar w-40 h-40"></div>
      </Link>

      <OverallBadge
        classes="w-32 md:w-32 h-32 m:auto"
        level={profile.overallBadge.level}
      />
      <div className="flex flex-row flex-wrap justify-center w-full">
        {profile.badges.map((badge) => (
          <Badge
            classes="m-1 pb-2 pt-1 w-20"
            name={badge.name}
            key={badge.name}
            progress={badge.progressToNextBadge}
          />
        ))}
      </div>
      <style jsx>{`
        .avatar {
          background: url(${profile.avatar});
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </>
  )
}

export default UserProfile
