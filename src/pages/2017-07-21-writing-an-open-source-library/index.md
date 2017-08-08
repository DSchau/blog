---
path: /writing-an-open-source-library
date: "2017-07-21T20:44:35.199Z"
title: Writing an Open Source Library
tags:
  - open source
  - javascript
  - ci
  - travis
  - jest
  - unit testing
image: preview.png
draft: true
---

It can be incredibly difficult to keep up with the seemingly nebulous and always changing JavaScript ecosystem. This struggle, and oftentimes misunderstanding of the value/purpose of tools, has led to what many self-diagnose as "JavaScript fatigue." _However_, I **strongly** disagree with this assertion. Incredible tooling, incredible utilities, and incredible libraries coalesce to form what I believe to be the strongest foundation JavaScript has had in years. In this post, I plan to outline the origin story and creation of an open source (NodeJS) utility, and in doing so, touch on a plethora of these incredible tools, utilities, and libraries that collectively make up the foundation of what some have called the **JavaScript Renaissance.**

> JavaScript fatigue is what happens when people use tools they don't need to solve problems they don't have.
>
> -- <cite>Lucas F. Costa</cite>

## The 💡 Moment

While working on a Gatsby PR (see [this blog post][getting-started-with-gatsby] for more about Gatsby), I gained some exposure to the [Remark library][remark] library, which has the ability to transform a Markdown document into an abstract syntax tree--hereafter referred to as an AST. The general approach is given a Markdown file, we can parse it into an AST of nodes (e.g. code nodes, image nodes, text nodes, etc.), modify these nodes, and then write back to the original Markdown file. Pretty cool! I tend to think looking at code is helpful, so let's consider the following snippet:

```javascript
const Remark = require('remark');

const ast = remark().parse(`
# hello world

- I'm a list
- Me too

1. Numbered
1. Numbered Two
`);
```

The shape of this

[getting-started-with-gatsby]: /blog/getting-started-with-gatsby
[remark]: 