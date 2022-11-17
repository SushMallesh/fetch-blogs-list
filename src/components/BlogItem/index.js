import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, topic, imageUrl, avatarUrl, author, id} = eachBlog
  return (
    <Link className="blog-link" to={`/blogs/${id}`}>
      <li className="blog-list-item">
        <img className="image" src={imageUrl} alt={title} />
        <div className="blog-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
