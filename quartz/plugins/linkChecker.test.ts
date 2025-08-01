import test from "node:test"
import assert from "node:assert"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { readFile } from "node:fs/promises"
import { globby } from "globby"
import { slugifyFilePath, getFileExtension, FilePath } from "../util/path"

// simplified copy of the wikilink regex from ObsidianFlavoredMarkdown
const wikilinkRegex = /!?\[\[([^\[\]\|\#\\]+)?(#+[^\[\]\|\#\\]+)?(\\?\|[^\[\]\#]*)?\]\]/g

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, "..", "..")
const contentDir = path.join(repoRoot, "content")

async function collectSlugs(): Promise<Set<string>> {
  const files = await globby("**/*.md", { cwd: contentDir })
  const slugs = new Set<string>()
  for (const file of files) {
    slugs.add(slugifyFilePath(path.join("content", file) as FilePath))
  }
  return slugs
}

test("wikilinks reference existing slugs", async () => {
  const slugs = await collectSlugs()
  const files = await globby("**/*.md", { cwd: contentDir })
  for (const rel of files) {
    const fp = path.join(contentDir, rel)
    const text = await readFile(fp, "utf8")
    for (const match of text.matchAll(wikilinkRegex)) {
      const raw = match[1] ?? ""
      const target = raw.split("#")[0]
      if (target.length === 0) continue
      const isMd = getFileExtension(target) === "md"
      const mock = isMd ? target : `${target}.md`
      const canonical = slugifyFilePath(mock as FilePath)
      const exists =
        slugs.has(path.join("content", canonical)) ||
        [...slugs].some((s) => s.split("/").pop() === canonical)
      assert.ok(exists, `Broken link ${match[0]} in ${rel}`)
    }
  }
})
