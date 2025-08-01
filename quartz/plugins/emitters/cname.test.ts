import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { CNAME } from "./cname"
import { joinSegments } from "../../util/path"
import { Argv, BuildCtx } from "../../util/ctx"
import { QuartzConfig } from "../../cfg"

describe("CNAME emitter", () => {
  const makeCtx = async (baseUrl?: string) => {
    const output = await fs.mkdtemp(path.join(os.tmpdir(), "quartz-"))
    const argv: Argv = {
      directory: "",
      verbose: false,
      output,
      serve: false,
      watch: false,
      port: 0,
      wsPort: 0,
    }
    const cfg: QuartzConfig = {
      configuration: { baseUrl } as any,
      plugins: { transformers: [], filters: [], emitters: [] },
    } as any
    return { ctx: { argv, cfg } as BuildCtx, output }
  }

  test("writes CNAME file when baseUrl is provided", async () => {
    const { ctx, output } = await makeCtx("example.com")
    const plugin = CNAME()
    const files = await plugin.emit(ctx as any, [] as any, {} as any)
    const expected = joinSegments(output, "CNAME")
    assert.deepStrictEqual(files, [expected])
    const content = await fs.readFile(expected, "utf8")
    assert.strictEqual(content, "example.com")
    await fs.rm(output, { recursive: true, force: true })
  })

  test("does not emit a file without baseUrl", async () => {
    const { ctx, output } = await makeCtx(undefined)
    const plugin = CNAME()
    const files = await plugin.emit(ctx as any, [] as any, {} as any)
    assert.deepStrictEqual(files, [])
    const cnamePath = joinSegments(output, "CNAME")
    const exists = await fs.access(cnamePath).then(() => true).catch(() => false)
    assert.strictEqual(exists, false)
    await fs.rm(output, { recursive: true, force: true })
  })
})
