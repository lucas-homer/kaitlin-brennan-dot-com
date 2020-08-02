/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import BlogPostListCard from "./blog-post-list-card"

function BlogPostList(props) {
  return (
    <Fragment>
      {props.nodes &&
        props.nodes.map(node => (
          <div
            key={node.id}
            sx={{
              marginBottom: [6, 8],
            }}
          >
            <BlogPostListCard {...node} />
          </div>
        ))}
    </Fragment>
  )
}

BlogPostList.defaultProps = {
  title: "",
  nodes: [],
}

export default BlogPostList
