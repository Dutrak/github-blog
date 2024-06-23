import Skeleton from 'react-loading-skeleton'
import { ProfileCardSkeleton, ProfileContainer } from './styles'

export function ProfileSkeleton() {
  return (
    <ProfileContainer>
      <ProfileCardSkeleton>
        <Skeleton circle={true} height={100} width={100} />
        <div>
          <Skeleton width={100} height={30} />
          <Skeleton width={200} height={20} />
          <Skeleton width={200} height={20} />
          <Skeleton width={200} height={20} />
        </div>
      </ProfileCardSkeleton>
    </ProfileContainer>
  )
}
