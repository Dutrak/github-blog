import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} alt="" />
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
