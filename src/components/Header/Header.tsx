import { HeaderContainer } from './styles'
import bgHeader from '../../assets/bgHeader.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={bgHeader} alt="" />
    </HeaderContainer>
  )
}
