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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileCard>
        <img src="https://github.com/dutrak.png" alt="dutrak" />
        <ProfileContent>
          <ProfileTitle>
            <h1>Dutrak</h1>
            <a
              href="https://github.com/dutrak"
              target="_blank"
              rel="noreferrer"
            >
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
            </a>
          </ProfileTitle>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileFooter>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>Dutrak</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>RocketSeat</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 Seguidores</span>
            </div>
          </ProfileFooter>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  )
}
