import {profile} from '../cypress/fixtures/profile.json'
import OverallBadge from './user-profile/OverallBadge'
import Badge from './user-profile/Badge'

export interface UserProfileProps {
    
}
 
const UserProfile: React.SFC<UserProfileProps> = () => {
    return ( 

    <>
        <div className="avatar bg-no-repeat bg-contain w-20 h-20"></div>

          <OverallBadge level={profile.overallBadge.level} />
        <div className="flex flex-wrap">
          {profile.badges.map((badge) => (
            <Badge className="m-1" name={badge.name} key={badge.name} />
          ))}
        </div>
      <style jsx>{`
        .avatar {
          background-image: url(${profile.avatar});
        }
      `}</style>
    </>
     );
}
 
export default UserProfile;;