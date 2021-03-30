import './Header.sass'

export const Header = ({ title }) => {
  return (
    <header className="page-header container">
      <h1 className="page-title">{ title }</h1>
    </header>
  )
}