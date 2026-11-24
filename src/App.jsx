// App: the root component. It is the only place that reads the blog data.
// Connected to: Header, About, ArticleList (its children).
import { blog } from './blog'
import Header from './components/Header'
import About from './components/About'
import ArticleList from './components/ArticleList'

function App() {
  return (
    <div className="container">
      {/* Each child only receives the props it needs */}
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  )
}

export default App