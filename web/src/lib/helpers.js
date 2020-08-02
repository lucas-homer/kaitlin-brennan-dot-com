import { format } from "date-fns"

export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(publishedAt, slug) {
  // Sanity gives us ISO strings, and format only takes Date | number
  const parsedDate = Date.parse(publishedAt)
  return `/blog/${format(parsedDate, "yyyy/MM")}/${slug.current || slug}/`
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function getPublishedDate(publishedAt) {
  // Sanity gives us ISO strings, and format only takes Date | number
  const parsedDate = Date.parse(publishedAt)
  return format(parsedDate, "MMMM do, yyyy")
}
