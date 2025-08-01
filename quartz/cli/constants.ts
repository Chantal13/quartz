import path from "path"
import { readFileSync } from "fs"

/**
 * Constants shared across CLI helpers and handlers.
 */

/**
 * All constants relating to helpers or handlers
 */
export const ORIGIN_NAME = "origin"
export const UPSTREAM_NAME = "upstream"
export const QUARTZ_SOURCE_BRANCH = "v4"
export const cwd: string = process.cwd()
export const cacheDir: string = path.join(cwd, ".quartz-cache")
export const cacheFile: string = "./quartz/.quartz-cache/transpiled-build.mjs"
export const fp: string = "./quartz/build.ts"
export const { version }: { version: string } = JSON.parse(
  readFileSync("./package.json", "utf8")
)
export const contentCacheFolder: string = path.join(cacheDir, "content-cache")
