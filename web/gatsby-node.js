/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format, parseISO } = require("date-fns")
const _ = require("lodash")

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      categoriesGroup: allSanityPost {
        group(field: categories___title) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const parsedDate = parseISO(publishedAt)
    const dateSegment = format(parsedDate, "yyyy-MM-dd")
    const path = `/blog/${dateSegment}/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id },
    })
  })

  const categories = result.data.categoriesGroup.group || []

  categories.forEach(category => {
    const path = `/categories/${_.kebabCase(category.fieldValue)}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/categories.js"),
      context: {
        categoryName: category.fieldValue,
        totalCount: category.totalCount,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
}
