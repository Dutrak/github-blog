/* eslint-disable camelcase */
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileCard,
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileTitle,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { User } from '../../@types/github'
import { api } from '../../lib/axios'

export function Profile() {
  const username = 'Dutrak'
  const [userData, setUserData] = useState<User>({} as User)

  async function fetchuser(username: string) {
    const response = await api.get(`/users/${username}`)
    const { login, avatar_url, html_url, bio, followers } = await response.data

    setUserData({
      login,
      avatar_url,
      bio,
      followers,
      html_url,
    })
  }

  useEffect(() => {
    fetchuser(username)
  }, [])

  return (
    <ProfileContainer>
      <ProfileCard>
        <img src={userData.avatar_url} alt="dutrak" />
        <ProfileContent>
          <ProfileTitle>
            <h1>Dutrak</h1>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
            </a>
          </ProfileTitle>
          <p>{userData.bio}</p>
          <ProfileFooter>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userData.login}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>RocketSeat</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              {userData.followers === 1 ? (
                <span>{userData.followers} seguidor</span>
              ) : (
                <span>{userData.followers} seguidores</span>
              )}
            </div>
          </ProfileFooter>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
