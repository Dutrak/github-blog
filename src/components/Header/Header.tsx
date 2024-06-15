import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <NavLink to={'/'}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
