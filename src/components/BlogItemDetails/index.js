import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDataItem: [], isLoading: true}

  componentDidMount() {
    this.getSpecificBlogItem()
  }

  getSpecificBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const dataItem = await response.json()
    const updatedData = {
      title: dataItem.title,
      imageUrl: dataItem.image_url,
      avatarUrl: dataItem.avatar_url,
      content: dataItem.content,
      author: dataItem.author,
    }
    this.setState({blogDataItem: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDataItem} = this.state
    const {content, title, avatarUrl, imageUrl, author} = blogDataItem
    return (
      <li className="blog-item-details">
        <h1 className="title">{title}</h1>
        <div className="author-details">
          <img className="avatar" src={avatarUrl} alt="avatar" />
          <p className="author">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="content">{content}</p>
      </li>
    )
  }

  renderSpinner = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderSpinner() : this.renderBlogItemDetails()
  }
}
export default BlogItemDetails
