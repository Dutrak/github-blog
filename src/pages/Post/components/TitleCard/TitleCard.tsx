import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  TitleCardContainer,
  TitleLinks,
  TitleCardContent,
  TitleCardFooter,
} from './styles'
import { Issue } from '../../../../@types/github'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface TitleCardProps {
  issue: Issue
}

export function TitleCard({ issue }: TitleCardProps) {
  return (
    <TitleCardContainer>
      <TitleLinks>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} size="1x" />
          Voltar
        </NavLink>
        <a href={issue?.html_url} target="_blank" rel="noreferrer">
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
        </a>
      </TitleLinks>

      <TitleCardContent>
        <h1>{issue?.title}</h1>
        <TitleCardFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue?.user.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            {issue?.comments === 1 ? (
              <span>{issue?.comments} comentário</span>
            ) : (
              <span>{issue?.comments} comentários</span>
            )}
          </div>
        </TitleCardFooter>
      </TitleCardContent>
    </TitleCardContainer>
  )
}
