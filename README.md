# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

  <p align="center">
    <a href="https://github.com/sponsors/jackyzha0">
      <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
    </a>
  </p>

## Quick Start

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

- **Obsidian compatibility** with wikilinks, transclusions, and backlinks
- Built-in **full-text search** and **graph view** to explore your notes
- **Hot reload** on config changes and incremental rebuilds for content
- Simple JSX layouts and page components
- **SPA routing** for lightning‑fast navigation
- Fully extensible through plugins

See the [full feature list](docs/features/) for more details.

## Local Environment

Create a `.env.local` file at the project root and add your API token:

```bash
TOKEN=YOURTOKEN
```

Quartz will load this file automatically when the CLI starts.
