#!/usr/bin/env node
import workerpool from "workerpool"
import { config as loadEnv } from "dotenv"
loadEnv({ path: ".env.local" })
const cacheFile = "./.quartz-cache/transpiled-worker.mjs"
const { parseMarkdown, processHtml } = await import(cacheFile)
workerpool.worker({
  parseMarkdown,
  processHtml,
})
