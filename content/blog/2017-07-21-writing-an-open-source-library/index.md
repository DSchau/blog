---
date: "2017-07-21T20:44:35.199Z"
title: Writing an Open Source JavaScript Library
tags:
  - open source
  - javascript
  - ci
  - travis
  - jest
  - unit testing
featured: preview.png
draft: true
---

It can be incredibly difficult to keep up with the seemingly nebulous and always changing JavaScript ecosystem. This struggle, and oftentimes misunderstanding of the value/purpose of tools, has led to what many self-diagnose as "JavaScript fatigue." _However_, I **strongly** disagree with this assertion. Incredible tooling, incredible utilities, and incredible libraries coalesce to form what I believe to be the strongest foundation JavaScript has had in years. In this post, I plan to outline the origin story and creation of an open source (NodeJS) utility, and in doing so, touch on a plethora of these incredible tools, utilities, and libraries that collectively make up the foundation of what some have called the **JavaScript Renaissance.**

> JavaScript fatigue is what happens when people use tools they don't need to solve problems they don't have.
>
> -- <cite>Lucas F. Costa</cite>

## The 💡 Moment

While working on a Gatsby PR (see [this blog post][getting-started-with-gatsby] for more about Gatsby), I gained some exposure to the [Remark library][remark] library, which has the ability to transform a Markdown document into an abstract syntax tree--hereafter referred to as an AST. The general approach is given a Markdown file, we can parse it into an AST of nodes (e.g. code nodes, image nodes, text nodes, etc.), modify these nodes, and then write back to the original Markdown file. Pretty cool! I tend to think looking at code is helpful, so let's consider the following snippet:

```javascript
const Remark = require("remark");

const ast = remark().parse(`
# hello world

- I'm a list
- Me too

1. Numbered
1. Numbered Two
`);
```

I then realized that [prettier][prettier], a code formatter based on the width of a line, can prettify JavaScript code as a string. Prettier's approach is actually fairly similar to Remark's approach. It parses your JavaScript code as an AST and then re-prints this AST with line-width and other stylistic concerns in mind.

With Remark, we can get _each_ and _every_ code block as a string. With Prettier, take code blocks (as string), and enforce a consistent, formatted style. Sounds like there's some overlap and we can use these tools together? Possibly make this utility sharable, and usable via either a **C**omand **L**ine **I**nterface (hereafter CLI) _and/or_ possibly usable dynamic (e.g. in another Node module). Sounds like a JavaScript library, right?

## 🔧 Project Setup

This can often be a point of contention, or cause of stress, for many developers. The plethora of choices, tools, and utilities that can be used can sometimes lead to an overwhelming feeling that one is making the wrong choice, or perhaps not the _most_ correct choice. Do I use Webpack? Do I use Babel? Which preset do I use? Which testing framework? And so it goes&hellip; Each of these choices is important, but I'd like to stress the importance of ignoring some of this selection anxiety, and just get down to developing. Choose what **you** feel most comfortable with, not what is the "new hotness" or the tool that has a lot of hype behind it--in other words, **don't** be consumed by [hype driven development][hdd]. Choose what makes you feel most empowered to develop something usable, well-tested, and that keeps you productive. Note that I'm not saying you shouldn't learn some new tool, or investigate some new utility, but I am merely saying you don't _have_ to do so and if you are feeling selection anxiety, then use what you are most comfortable using!

An additional note here: I'd urge you to consider **not** using any type of boilerplate until you're comfortable with what the boilerplate provides. I've found that many developers tend to just pull down boilerplates not really understanding what's going on behind the scenes. In fact, I think it is this lack of understanding and confusion with boilerplates that leads to much of the foundation for what many cal JavaScript fatigue. This inevitably leads to confusion, particularly when something (oftentimes!) goes wrong and something must be fixed. This confusion causes a vehement dislike of the stack, and oftentimes a slamming of JavaScript in the process. The problem isn't JavaScript, it's the plethora of choices we have available to us. There's no guarantee that every utility provided in a boilerplate is useful for your use case, and oftentimes they provide too much! That said&hellip; if you like them, by all means continue to utilize them!

With all of this in mind&hellip; here's my preferred stack and you should use the same.

![Troll face](images/troll-face.jpeg)

Entirely kidding! However, I do think there is implicit value in discussing how _someone_ (e.g. me) builds something. This is particularly true if it may encourage discussion or improve your existing stack in some meaningful way. There's no guarantee that you, the reader, may find my particular stack encouraging at _this_ time, but learning about it now could pay dividends in the future. With that said, let's get down to it!

### TypeScript

I'm a big fan of TypeScript, as are other companies like [slack][typescript-slack], [reddit][typescript-reddit], and of course, [Microsoft][typescript-microsoft], among many others! The static typing analysis makes me feel confident that my code is as bug-free as possible, and I truly enjoy writing TypeScript code now that the ecosystem has seen some maturation, particularly with the scoped package `@types`, which contains many type declarations files for most of the packages I tend to use. Additionally, I think the `tsc` compiler is first-class, and I've found it particularly great for Node development. Let me explain why as I walk through some basic project setup for TypeScript.

#### `tsconfig.json`

The first step when starting with any TypeScript project is to create a TypeScript configuration file, similarly to `webpack.config.js`, `.babelrc`, etc. TypeScript uses a `json` file in the project root called `tsconfig.json`.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es2017",
    "rootDir": "src",
    "outDir": "dist"
  },
  "exclude": ["__mocks__", "src/__tests__", "src/interfaces", "node_modules"]
}
```

[getting-started-with-gatsby]: /blog/getting-started-with-gatsby
[remark]: https://github.com/gnab/remark
[prettier]: https://github.com/prettier/prettier
[hdd]: https://blog.daftcode.pl/hype-driven-development-3469fc2e9b22
[typescript-reddit]: https://redditblog.com/2017/06/30/why-we-chose-typescript/
[typescript-slack]: https://slack.engineering/typescript-at-slack-a81307fa288d
[typescript-microsoft]: https://medium.com/@delveeng/why-we-love-typescript-bec2df88d6c2
