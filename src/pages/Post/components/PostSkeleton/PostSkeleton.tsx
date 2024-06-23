import Skeleton from 'react-loading-skeleton'
import { PostSkeletonContainer, TitleSkeletonLinks } from './styles'

export function PostSkeleton() {
  return (
    <PostSkeletonContainer>
      <TitleSkeletonLinks>
        <div>
          <Skeleton width={100} height={30} />
        </div>
        <div>
          <Skeleton width={100} height={30} />
        </div>
      </TitleSkeletonLinks>
    </PostSkeletonContainer>
  )
}
