// ArticleList: shows every article on the blog.
// Connected to: App (parent) and Article (child).
// Props: posts (array of post objects)
import Article from './Article'

function ArticleList(props) {
  return (
    <main>
      {/* .map() creates one Article per post.
          key must be unique so React can track each item. */}
      {props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  )
}

export default ArticleList