/**
 * Quartz emitter plugin that disables Jekyll on GitHub Pages by writing
 * an empty `.nojekyll` file to the output directory.
 */
import fs from "fs"
import { QuartzEmitterPlugin } from "../types"
import { FilePath, joinSegments } from "../../util/path"

export const NoJekyll: QuartzEmitterPlugin = () => ({
  name: "NoJekyll",
  async emit({ argv }) {
    const outputFile = joinSegments(argv.output, ".nojekyll")
    await fs.promises.writeFile(outputFile, "")
    return [outputFile] as FilePath[]
  },
  async *partialEmit() {},
})
