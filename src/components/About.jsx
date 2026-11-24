// About: shows the blog logo and a short description.
// Connected to: App (parent). It has no children.
// Props: image (path to the logo), about (description text)
function About(props) {
  return (
    <aside>
      {/* alt text keeps the image accessible for screen readers */}
      <img src={props.image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  )
}

export default About