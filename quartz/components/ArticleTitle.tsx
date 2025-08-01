/**
 * Renders the title of a note as an `<h1>` element.
 */
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

/**
 * Renders the page title heading.
 * @param props.fileData - Note metadata with frontmatter title
 * @param props.displayClass - Additional CSS classes
 * @returns Heading element or null
 * Styles: ArticleTitle.css
 */
const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
