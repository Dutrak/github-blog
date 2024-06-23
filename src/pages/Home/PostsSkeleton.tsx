import Skeleton from 'react-loading-skeleton'
import { PostCardSkeletonContent } from './styles'

interface PostsSkeletonProps {
  length: number
}

export function PostsSkeleton({ length }: PostsSkeletonProps) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <PostCardSkeletonContent key={index}>
          <Skeleton height={30} width={10} />
          <Skeleton height={200} width={10} />
        </PostCardSkeletonContent>
      ))}
    </>
  )
}
