import logo from '../assets/investment-calculator-logo.png'
import '../index.css'
function Header() {
  return (
    <>
    <header id='header'>
    <h1>React Investment Calculator .</h1>
    <img src={logo} />
    </header>
    </>
  )
}

export default Header