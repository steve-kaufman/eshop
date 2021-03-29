import './Header.sass'

export const Header = ({ title }) => {
  return (
    <header className="page-header">
      <h1>{ title }</h1>
    </header>
  )
}