---
title: NoJekyll
tags:
  - plugin/emitter
---

This plugin creates an empty `.nojekyll` file in the output directory. GitHub Pages uses this file to disable Jekyll processing so that all generated files are served as-is.

> [!note]
> For information on how to add, remove or configure plugins, see the [[configuration#Plugins|Configuration]] page.

This plugin has no configuration options.

## API

- Category: Emitter
- Function name: `Plugin.NoJekyll()`.
- Source: [`quartz/plugins/emitters/nojekyll.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/emitters/nojekyll.ts).
