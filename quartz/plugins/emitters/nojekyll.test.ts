import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { NoJekyll } from "./nojekyll"
import { joinSegments } from "../../util/path"
import { Argv, BuildCtx } from "../../util/ctx"
import { QuartzConfig } from "../../cfg"

describe("NoJekyll emitter", () => {
  const makeCtx = async () => {
    const output = path.join(await fs.mkdtemp(path.join(os.tmpdir(), "quartz-")), "out")
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
      configuration: {} as any,
      plugins: { transformers: [], filters: [], emitters: [] },
    } as any
    return { ctx: { argv, cfg } as BuildCtx, output }
  }

  test("creates .nojekyll file even when output directory is missing", async () => {
    const { ctx, output } = await makeCtx()
    const plugin = NoJekyll()
    const files = await plugin.emit(ctx as any, [] as any, {} as any)
    const expected = joinSegments(output, ".nojekyll")
    assert.deepStrictEqual(files, [expected])
    const content = await fs.readFile(expected, "utf8")
    assert.strictEqual(content, "")
    await fs.rm(path.dirname(output), { recursive: true, force: true })
  })
})
