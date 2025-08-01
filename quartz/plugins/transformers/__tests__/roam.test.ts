import test from "node:test"
import assert from "node:assert"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { toHtml } from "hast-util-to-html"
import { RoamFlavoredMarkdown } from "../roam"
import { GitHubFlavoredMarkdown } from "../gfm"

async function render(md: string): Promise<string> {
  const roam = RoamFlavoredMarkdown()
  const gfm = GitHubFlavoredMarkdown()
  const processor = unified()
    .use(remarkParse)
    .use(gfm.markdownPlugins())
    .use(roam.markdownPlugins())
    .use(remarkRehype, { allowDangerousHtml: true })
  const ast = processor.parse(md)
  const tree = await processor.run(ast)
  return toHtml(tree as any, { allowDangerousHtml: true }).trim()
}

test("converts TODO and DONE shortcodes", async () => {
  const todo = await render("{{[[TODO]]}}")
  assert.strictEqual(todo, "<p><input type=\"checkbox\" disabled></p>")
  const done = await render("{{[[DONE]]}}")
  assert.strictEqual(done, "<p><input type=\"checkbox\" checked disabled></p>")
})

test("handles YouTube embeds", async () => {
  const md = "{{[[video]]:https://www.youtube.com/watch?v=dQw4w9WgXcQ}}"
  const html = await render(md)
  assert.match(
    html,
    /<iframe[^>]+class=\"external-embed youtube\"[^>]+src=\"https:\/\/www\.youtube\.com\/embed\/dQw4w9WgXcQ\"[^>]*><\/iframe>/s,
  )
})

test("replaces blockquote syntax", async () => {
  const html = await render("[[>]] A quote")
  assert.strictEqual(html, "<p><blockquote>A quote</blockquote></p>")
})
