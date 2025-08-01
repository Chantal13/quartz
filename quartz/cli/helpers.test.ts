import test from "node:test"
import assert from "node:assert"
import { escapePath } from "./helpers"

test("unquotes double quoted paths", () => {
  assert.strictEqual(escapePath('"a/b"'), "a/b")
})

test("unquotes single quoted paths", () => {
  assert.strictEqual(escapePath("'a/b'"), "a/b")
})

test("unescapes spaces", () => {
  assert.strictEqual(escapePath("a\\\ b"), "a b")
})
