// Header: shows the name of the blog.
// Connected to: App (parent). It has no children.
// Props: name (string)
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

export default Header