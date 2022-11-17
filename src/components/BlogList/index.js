import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogList = () => {
    const {blogData} = this.state
    return (
      <ul className="blog-list-container">
        {blogData.map(eachBlog => (
          <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }

  renderSpinner = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderSpinner() : this.renderBlogList()
  }
}

export default BlogList
