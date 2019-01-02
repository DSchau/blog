---
date: "2017-10-28T02:59:05.957Z"
title: "CSS In JS: Benefits, Drawbacks, and Tooling"
tags:
  - css
  - css in js
  - react
  - component styling
  - styled-components
  - glamorous
---

![0](./images/screenshots/01-0.png)

I'm a frontend developer specializing in all things JavaScript. Throughout my career, I've done a fair bit of everything: Angular, React, jQuery, you name it. Of course, I've also done a fair bit of everything in CSS land, whether it's vanilla CSS, LESS, SASS, CSS Modules, and (of course) the gamut of CSS in JS solutions. I'm from little ol' Omaha, Nebraska, which I think most people looks a bit like this.

![about me](./images/screenshots/02-about-me.png)

![nebraska actual](./images/screenshots/03-nebraska-actual.png)

I work at a great company called Object Partners. We specialize in JVM and frontend development of all sorts. Between Omaha, Minneapolis, and Chicago, we have about 100 excellent consultants.

![object partners](./images/screenshots/04-object-partners.png)

Every presentation has this prerequisite sponsors slide, but they truly deserve so much credit. Without their support, we wouldn't have all gotten together for this great conference, so it is _sincerely_ appreciated. Thank you so much!

❤️

![sponsors](./images/screenshots/05-sponsors.png)

I feel like some of you _may_ have a pretty negative perception of CSS in JS, or at least not an overtly positive perception. This can be for a variety of reasons, but I think paramount for some is that it goes against the "separation of concerns" that have been ingrained in our minds and regularly re-enforced. It can feel weird, it can feel unclean, and it can even feel like a solution looking for a problem.

![from here](./images/screenshots/06-from-here.png)

My goal is to take you from this initial _possibly_ negative stance to cautious skepticism. I hope you leave here with an understanding of why CSS in JS exists, and how it can solve some very real developmental problems. Perhaps it might not be the perfect fit for your application at this point, but you can understand why someone else would adopt some of these technologies.

A stretch goal is that many of you will leave here fully convinced that CSS in JS is the solution to some of your CSS problems, and you'll adopt these techniques for your next application.

## Agenda

- Discussion of the problems of CSS
- Defining what CSS in JS is, and how it can solve some of these problems
- Discussing some various CSS in JS libraries, and real world examples of the usage of these
- Finishing up with some discussion of drawbacks of CSS in JS and some quick demos

![to here](./images/screenshots/07-to-here.png)

Let's start with a brief discussion of some of the problems of CSS. An important caveat here, these problems tend to be focused on real-world examples that every-day developers have run into, or have run into without even realizing it and resorting to hack-y work arounds. This is not to say that problems "at scale" are not important, but if we can narrow the scope to problems that every-day developers, and myself, have faced, we can more clearly define the problems in more approachable terms and concepts. In illustrating these real-world problems, the foundational basis for the creation of these CSS in JS techniques will be made evident.

![the problems](./images/screenshots/08-the-problems.png)

For these first examples, let's say that we're a team of front-end developers working on a component library to be used throughout a company's internal application suite. We get business requirements from users and they're filtered through our UX department, who weeds these out and gives us the truly important requirements.

Our first task from the UX team to design a button component that has a hover state and raises slightly on hover. We design and build this with vanilla CSS and HTML. This button looks great, meets every current need we have, and the code is quite succinct, to boot. This is a _great_ component!

![first button](./images/screenshots/09-first-button.png)

Our UX team makes another request of our team. We now need a secondary style, and the previous button will be considered the primary style. So&hellip; we add this secondary class, we complete the objective, and we're still feeling fairly good about our button component.

![second button](./images/screenshots/10-second-button.png)

We get another request that the button is far too large for certain applications, and the request has been made that we add a button with reduced padding, font-size, etc so more can be displayed on screen. We add this `tiny` class, and we complete the business requirements. This is fine&hellip;

![third button](./images/screenshots/11-third-button.png)

We get a final request that the button neds to a have a hover state for accessibility and more intuitive feedback on desktop screens. We add this class, and our button is "completed," for now. This is _not_ fine 😫

![fourth button](./images/screenshots/12-fourth-button.png)

![the globals](./images/screenshots/13-the-globals.png)

Let's consider the usage of this button component by a developer who comes on the project long down the road, far after the team that designed the component has left for greener pastures. This developer is relatively inexperienced, and is just trying to add in style that makes a link look like a button. This seemingly simple task is more complicated than it appears at first glance. These globals make the job _far_ more diffiult than expected, and the developer resorts to messy hacks and the use of `!important` in an effort to ship and meet a deadline.

![global problems](./images/screenshots/14-global-problems.png)

But wait&hellip; we've invented techniques to solve these problems!

![but wait](./images/screenshots/15-but-wait.png)

CSS naming methodologies like BEM exist to solve this exact problem re: name collision and CSS globals. Also consider other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS, Object-oriented CSS, etc.

![bem](./images/screenshots/16-bem.png)

I am very much not a fan of these methodologies. They introduce cognitive overhead and introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming is already notoriously hard; this technique certainly does solve the class name collision problem, but I contend it imposes extraneous concerns on behalf of the developer that can be solved in other, cleaner ways (as we'll see soon).

![run](./images/screenshots/17-run.png)

![safety through-automation](./images/screenshots/18-safety-through-automation.png)

Consider this quote by Kent C. Dodds. Why would we not use tooling to automate trivial naming concerns? Development is oftentimes all about automating hard problems, and is naming not one of the most (unecessarily) difficult ones we face?

![hard stuff](./images/screenshots/19-hard-stuff.png)

But others still will note that this problem of globals has been solved with tooling in other areas. CSS Modules and Shadow DOM (a staged spec introduced in web components to isolate styling to a particular subset of the DOM) _both_ are intended to solve this problem.

CSS Modules is an implementation of CSS in JS, so if you leave here with nothing else, consider integrating CSS Modules support into your application. It'll generate a unique hash based on a user supplied class name. Shadow modules are similarly going to be great, but I'm not quite sure they're ready for primetime yet (nor are web components _quite_ there in my opinion).

![alternatives](./images/screenshots/20-alternatives.png)

Shadow DOM, and web components as a whole, are certainly something that I think will continue to grow in popularity in the coming months and years. That said, the web component implementations are still slightly in flux, and for full browser support, you'll certainly have to ship a polyfill.

![shadow dom-support](./images/screenshots/21-shadow-dom-support.png)

The bigger your application gets (and the more CSS you write), the more globals you will create which is quite simply making your application harder to maintain and use. In order to work around these scaling issues, naming strategies or tools--LESS, SASS, etc.--are often utilized.

CSS in JS solves this problems cleanly, clearly, and simply.

Also I'd like to note here that, in general, I tend to think "does not scale," is a perjorative used by people who are just not fans of that particular technology. That is not the case here though, as most advocates of CSS in JS _love_ CSS. You'll also see soon that when you're writing CSS in JS, you're using all the functionality that we know and love in CSS.

![it does-not-scale](./images/screenshots/22-it-does-not-scale.png)

Your class names and styles (i.e. `.css` files) are separately located to what is being styled, typically JSX with `className` or in non-React projects, as separate HTML files. Additionally, as previously mentioned, as CSS is global by default, your styles could be styling unrelated functionality in your application. Jointly, these two concerns make it incredibly difficult to re-factor unused CSS.

Removing styles can be a spooky endeavour 👻, and many regression tests, QA, or manual testing is often required to validate with certainty that only certain functionality was impacted. Each of these techniques requires manual testing and validation, and is not something that every developer has available to them.

CSS in JS gives you confidence that by removing this particular component, you're removing style code applicable to this component _only_.

![dead code-elimination](./images/screenshots/23-dead-code-elimination.png)

Theming, stylistic concerns (e.g. padding, line-height, etc.), and other possibly shared constants are a natural and intuitive fit to be colocated within your JavaScript. Want to re-use that branding color in your header for a button? Sure makes sense to share that with your CSS and JS. Media query breakpoints? Another intuitive and obvious fit.

![sharing constants](./images/screenshots/24-sharing-constants.png)

Oftentimes, I know I've needed to share things like colors, breakpoints, etc. between my CSS and JavaScript. I've oftentimes resorted to using a brittle build process, which inevitably can fall out of sync or require tweaks at some later point.

Why not use one source of truth for all application constants, and why not make that source of truth a JavaScript file with CSS in JS? Sure makes sense to me!

![sharing constants-example](./images/screenshots/25-sharing-constants-example.png)

Much credit where credit is due, many of these problems were identified in a formative CSS in JS presentation by [Christopher Chedeau](https://twitter.com/vjeux) (a developer at Facebook), who delivered a great presentation highlighting many of these issues way back in 2014!

![facebook problems](./images/screenshots/26-facebook-problems.png)

Early in my career, I was in a meeting where I criticized a proposed solution that I thought to be poor, and left it at that. Another person in the meeting said "If you can't bring anything to the table, then don't say anything at all." While the character of the message was delivered imperfectly, the content of the message still resonates with me. It's easy to criticize something. It's far, far harder to criticize something, and propose something better, or that could be better.

At this point, the discussion will shift into what CSS in JS is, and how it can fix some of these aforementioned problems. In other words, let's bring something to the table!

![benefits intro](./images/screenshots/27-benefits-intro.png)

It's not CSS in JS _or_ CSS. It's CSS in JS _with_ CSS.

The CSS you've formerly written can continue to be written with this paradigm shift. The best parts of CSS are maintained, and, for the most part, the ills of CSS are remedied with these new approaches.

![not broken](./images/screenshots/28-not-broken.png)

Maybe by recontextualizing the problem and bringing the power of JavaScript to CSS we can solve some true problems with CSS.

Maybe there's actually some validity to this practice.

Maybe it can really improve the quality and maintainability of your application.

Maybe we will see!

![but maybe-it-is](./images/screenshots/29-but-maybe-it-is.png)

_But_, _But_, _But_, you exclaim! This goes against everything we've been taught about seperation of concerns. HTML in my JS was already enough of a shift, but this is just too much!

It goes against this hyper-modularization we've seen in the JavaScript ecosystem.

It just _feels_ wrong.

![lesh tweet](./images/screenshots/30-lesh-tweet.png)

However... seperation of concerns is not the same as seperation of technologies. It is incredibly likely that the rendering of a component will require intermingling between HTML, CSS, and JavaScript, and if we can make this intermingling as clean as possible, that's a win for code clarity and maintainability, not a loss.

![seperation of-concerns](./images/screenshots/31-seperation-of-concerns.png)

Consider this great slide by [Cristiano Rastelli](https://twitter.com/areaweb).

The component driven model blurs the line between HTML, CSS, and JavaScript beacuse there will inevitably be shared concerns between a single component which is composed of these "disparate" parts.

Consider also Vue's single file components, which are a perfect encapsulation of this model.

![seperation of-concerns-image](./images/screenshots/32-seperation-of-concerns-image.png)

Let's start with a definition by contradiction, or in other words, what CSS in JS is _not_.

CSS in JS is not, or at least not exclusively, inline styles. While inline styles are certainly an example of what CSS in JS can look like, they're not necessarily the best implementation for a variety of reasons. First and foremost, only a subset of CSS is supported, so things like pseudo styles (`:hover`, `:focus`, etc.), media queries, and a number of other useful and _required_ CSS functionality is not supported with this implementation model. Additionally, inline styles can be difficult to override, which makes components that use them historically harder to extend.

You can certainly go this route, and several libraries exist to allow for this implementation while adding some of these needed features back, of particular note is [Radium](https://github.com/FormidableLabs/radium).

![is not](./images/screenshots/33-is-not.png)

This is an example of an inline style, and one of the first methods advocated for CSS in JS.

This is _not_ what I'd consider the best way to write CSS in JS, although it does have its place (particularly if props change very regularly, or in other instances when performance may suffer with rapid changes).

As noted, you lose out entirely on some of the best parts of CSS, so this doesn't seem, to me, to be the best implementation of CSS in JS, or the one to reach for most readily.

![inline styles](./images/screenshots/34-inline-styles.png)

It's high time to begin talking about what CSS in JS actually _is_. We'll go over some high level goals of CSS in JS, as well as some common patterns and coding techniques for what it can do for a modern application.

Additionally, detail will be provided for how it actually solves the aforementioned "problems with CSS".

![is](./images/screenshots/35-is.png)

CSS abstracts style to the document level.

CSS in JS abstracts style to the component level.

In a similar way that React, Vue, Angular, et al. are abstractions on JavaScript, CSS in JS abstracts upon the base model of CSS and fixes some of its inherent issues!

![abstractions](./images/screenshots/36-abstractions.png)

With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM, we can get true encapsulation at the component level, but this requires a polyfill in many browsers and isn't quite at a point where it's the perfect solution for any application.

With CSS in JS, we can get true encapsulation at the component level, today. Under the hood, a unique hash will be generated for the class name, and a real stylesheet will be created with this class. This allows us to target a unique element (a component!) today, without polyfills and in an automated way so we never again need to waste cognitive cycles constructing meaningful, isolated class names.

![scoped styles](./images/screenshots/37-scoped-styles.png)

Leveraging the full power of JavaScript lets us extend CSS in new, interesting ways. We can create a "mixin" just like we can in SASS, LESS, etc. We can use helpers to lighten a color, darken a color, share style code, etc. We can, of course, easily share constants and modify them, as needed. We can do all of us in a language each of us are familiar with (JavaScript!), and without learning/remembering syntax for doing so in SASS, LESS, etc.

![powerful](./images/screenshots/38-powerful.png)

A real stylesheet gives you the best parts of CSS (media queries, pseudo styles, flexbox, etc.).

It lessens the bad parts of CSS (globals!) by scoping to a class name

If you already know CSS, great! CSS in JS presumes that you do; the properties, rules, etc. of CSS that you already know and love continue to function just as they do in vanilla CSS.

![real styles](./images/screenshots/39-real-styles.png)

As an example, here is how styled-components (a library we will soon talk about) constructs a real style sheet. A template string is passed to the library containing the CSS styles. From these styles, a unique hash for a class name is created, and applied to a style tag in the head tags of your application. This constructed class name is automatically applied to your component!

It's an automated process to a previously manual problem, and you get the benefit of writing _real_ CSS!

![real styles-example](./images/screenshots/40-real-styles-example.png)

CSS in JS brings CSS into the component era.

We've removed globals from our JavaScript, why should we not do the same with our CSS?

We've established the component model for our JavaScript, why not bring CSS into the fold and enhance upon this model?

![component styling](./images/screenshots/41-component-styling.png)

Using JavaScript to write styles feels incredibly natural and intuitive, especially when considering the previous arguments we've made concerning sharing of constants, using JavaScript functions as mixins, etc.

_Additionally_, we are creating distributable, single import components that are entirely encapsulated. No configuring of loaders, no loading of additional stylesheets. One import, highly shareable, highly consumable, and highly simple!

![java script-styling](./images/screenshots/42-java-script-styling.png)

CSS in JS gives us truly unlimited semantic elements.

HTML5 gave us `header`, `footer`, `section`, `aside`, and others.

CSS in JS gives us truly unlimited semantic elements that are semantically clear at a glance: `Logo`, `Branding`, `Toolbar`, `Copyright`, the possibilities are endless.

![semantic elements](./images/screenshots/43-semantic-elements.png)

At a glance, each element's intent &amp; purpose is incredibly clear. On the left, _some_ of the element's meaning is clear. It's clear that semantic elements have meaningful value, and the fact that CSS in JS gives effectively unlimited semantic elements is an underappreciated win!

![semantic comparison](./images/screenshots/44-semantic-comparison.png)

The left is the mental model we must keep in our minds when writing CSS centered around HTML. We must be aware that a class we apply in HTML is styled with a class name. We must be aware that these class names can cascade and stack, sometimes interfering in unforseen ways. These cacading rules then become stylesheets in our DOM that can themselves conflict.

The right is the mental model when writing CSS in JS. Write HTML (JSX) that is encapsulated with component-scoped styles. No stacking. Never worry again about CSS rule specificity (and no `!important` hacks), and truly think in components!

![style cognitive-load](./images/screenshots/45-style-cognitive-load.png)

The case for CSS in JS has hopefully been made apparent. These techniques solve real problems of CSS. But, how do they solve them? What libraries exist to implement these CSS in JS techniques, and what does writing code in each of them look like?

![libraries intro](./images/screenshots/46-libraries-intro.png)

First, a caveat: most of these libraries are tied to React. However, not _all_ of them are tied to React, and I'll specifically point out libraries that do not require React.

In general, libraries that simply export a className hash (which can be used as a `className` in the consuming component) are typically framework agnostic. Some of the most interesting libraries expose several libraries, some of which can be used in any framework, and others that specifically target React.

![caveat](./images/screenshots/47-caveat.png)

styled-components is what I would call the "gateway drug" to CSS in JS libraries. You author using template strings, so you can write CSS not as an object, but as a string and dasherized just like it's authored in CSS.

This means that styled-components is probably the easiest to get up and running, and I would recommend it to get your feet wet with CSS in JS techniques. In addition, it's a great choice for beginning to move off of a formerly vanilla CSS code base, because you can generally re-use most of your existing CSS, with some small modifications here and there.

![styled components](./images/screenshots/48-styled-components.png)

The css helper constructs a "mixin" that can be re-used and applied when needed. This can be particularly helpful to encapsulate rules, and then use them conditionally, when required.

Additionally, you can see here another of styled-components' great features. Prop injection! This means that props can be passed to these styled components, and then parsed and style rules can be conditionally applied/removed. Very cool!

![styled components-example](./images/screenshots/49-styled-components-example.png)

Glamorous built on some of the ideas of not only styled-components, but also glamor, the library that powers much of Glamorous' underlying functionality.

The central difference with Glamorous is that is expects objects (similar to the kind passed to inline styles), but that can also be merged with subsequent objects _and_ that can also accept things like media queries, pseudo styles, etc.

It might seem more natural to begin using styled-components, but as of late, I've found myself increasingly drawn to and really liking the functionality available in Glamorous, particularly with the style objects. Merging, conditional applying of rules, etc. feel very natural with Glamorous.

_Note: glamor, the underlying library, is framework agnostic!_

![glamorous](./images/screenshots/50-glamorous.png)

We can begin to get a solid feel for Glamorous' API. The function takes 0 to n objects (or functions that return an object). Any function is injected with the current props passed to the component, as well as a global theme prop if tying into Glamorous' exposed theming capability.

The code here is using the object rest spread syntax, which makes the code slightly more terse.

![glamorous example](./images/screenshots/51-glamorous-example.png)

Emotion is another excellent library that feels very similar to styled-components because it also allows for template literals to inject styles. The key difference, and a particularly interesting idea, is that it ships with a babel plugin which attempts to pre-compile the styles that aren't dynamic, thereby reducing the payload of the resulting bundle.

In general, I think the ideas of minimizing (or removing entirely!) a runtime are particularly interesting, and will remain an area to keep an eye on as the community matures and develops further processes and tooling.

![emotion](./images/screenshots/52-emotion.png)

As you can see, the code feels _very_ similar to styled-components. If you're looking for a similar API but with some other benefits (and trade-offs), consider emotion as it's a very solid alternative.

![emotion example](./images/screenshots/53-emotion-example.png)

Polished is a _framework agnostic_ collection of utility methods for CSS in JS functionality. Some have described it as the "lodash of CSS in JS," and that's a very fair comparison.

Many helpers/mixins are provided for usage in any CSS in JS library, and functionality such as `lighten`, `darken`, `rgba`, etc. can be utilized in your application to do some really useful things.

![polished](./images/screenshots/54-polished.png)

Polished is particularly useful in adjusting color (hue shifting, adjusting transpraency, darkening colors, lightening colors, etc.), but contains a number of other additional utilities.

![polished example](./images/screenshots/55-polished-example.png)

These are just the color methods, but polished contains a bunch more including:

- em/rem helpers
- radial gradient generators
- normalize.css injection (CSS reset)
- shorthands for common things such as text-overflow ellipsis, font-face, etc.

![polished methods](./images/screenshots/56-polished-methods.png)

If I had more time, I'd love to cover _every_ major library that can be used. Unfortunately, in the interest of time, I'm only able to cover a few. That said, there are _so_ many libraries in the frontend ecosystem that can be utilized.

Also note that every single one of these libraries is framework agnostic!

- [JSS](https://github.com/cssinjs/jss)
- [linaria](https://github.com/callstack/linaria)
- [styletron](https://github.com/rtsao/styletron)
- [fela](https://github.com/rofrischmann/fela)
- [aphrodite](https://github.com/Khan/aphrodite)

![other libraries](./images/screenshots/57-other-libraries.png)

It _can_ be helpful to consider library downlaod count, but that is in no way, shape, or form indicative of a library's quality or usefulness for your application.

That said, it can be valuable just to get a baseline of relative support, community activity, etc. which can be a metric to consider when targeting a CSS in JS library to use in your application.

- styled-components and glamorous are two of the most popular and "hot" choices
- glamorous requires glamor, so a lot of the glamor downloads are likely from glamorous (but note: glamor can be used outside of glamorous)
- aphrodite and radium were huge players (and may still be a good choice in certain scenarios), but I tend to like the others a bit more
- radium is inline style based, but adds pseudo styles and other expected CSS functionality while still using inline styles; however, it's not quite as utilized or "in vogue" as it may have once been

![library download-count](./images/screenshots/58-library-download-count.png)

Similar story here, styled-components and glamorous are on the rise, while the others are relatively constant.

![github stars-count](./images/screenshots/59-github-stars-count.png)

The cost of using these libraries is non-null, even when using babel plugins or other techniques to reduce the file size as much as possible.

However, the cost is relatively small, so weighing developer utility and other benefits of CSS in JS vs. a relatively small size seems to be a fairly inoccuous concern.

![payload size-chart](./images/screenshots/60-payload-size-chart.png)

Seeing some of the companies that are utilizing these technologies lends some validity to the practice and makes it more obvious that there's some real value being generated by the usage of these libraries.

![companies](./images/screenshots/61-companies.png)

I think it's important to actually show some real-world usage and common patterns for writing "real world" code in each of these libraries.

Common things like theming, utilizing props, inheriting/composing styles, etc.

_Note: I'm not endorsing any particular library, so I'll jump around a bit to give you a better idea of what each library feels like._

![usage](./images/screenshots/62-usage.png)

Props injection is a natural, React-y method of altering a given component's style under certain conditions. For instance, if we were to re-visit our earlier CSS only button, we can create the same with props, but with complete encapsulation to that single button component.

![using props](./images/screenshots/63-using-props.png)

A common question is that one of CSS' great features is inheritance and easy extension of base classes. Inheritance is typically accomplished in these libraries by injecting a previously styled component (😉) and adding additional styles, as needed. All previously defined styles will be merged with, or possibly replaced by, the new styles.

![inheritance](./images/screenshots/64-inheritance.png)

One final reminder that in each of these libraries, real CSS and real stylesheets are added to the DOM. The value of CSS remains but with the clear and numerous benefits that CSS in JS provides.

![real css](./images/screenshots/65-real-css.png)

But what about animations? Those inherently require a global animation name!

Most libraries include some type of helper utility to return a unique identifier/hash for those animations so that globals remain stripped from the code base.

![animation](./images/screenshots/66-animation.png)

If you're designing a component library and want to make it CSS in JS friendly, consider exposing the className prop for consumption.

- Most libraries inject a className--or provide a className--which would then be applied on top of the existing styles
- Additionally, if you are "wrapping" your styled elements, this is a great way to make those wrappers extensible, as well

![using class-name](./images/screenshots/67-using-class-name.png)

Libraries that require a certain class structure (e.g. Bootstrap), can also work with CSS in JS libraries!

This example exposes a wrapped bootstrap Alert, which can then be used as a regular React component with a prop specifying the type of alert (e.g. `success`, `info`, etc.)

![external libraries](./images/screenshots/68-external-libraries.png)

_Some_ of the time, it may be necessary to inject globals, in particular when targeting `html`, `body`, etc.

For these times, most libraries include a mechanism to inject a global into a DOM style tag.

![injecting globals](./images/screenshots/69-injecting-globals.png)

Nesting _is_ supported in most of these libraries, but it can be seen as a kind of anti-pattern in certain circumstances, _especially_ if you're targeting a child selector.

However, that said, [styled-components documentation](https://www.styled-components.com/docs/faqs) mentions that:

> ... Used sparingly it's a great way to lighten your code by reducing the need to create explicit classes for every element.

So use with caution, but it can be a decent technique to lighten some of your component's styles!

![nesting](./images/screenshots/70-nesting.png)

Theming is a particularly common use case that can be semi-difficult to architect cleanly. Most of these major libraries expose a `ThemeProvider` component which can be used to provide a theme (via context) to each styled component.

It is, for instance, incredibly easy to make a light/dark theme for an application, or any number of color variants.

![theming intro](./images/screenshots/71-theming-intro.png)

Check out the [code slide](https://css-in-js.dustinschau.com/#/theme-provider) to see the full, navigable example

To actually add theming to an application, the process is _quite_ simple:

- Import the `ThemeProvider` component that most libs export
- Wrap your base component (e.g. App.js) in a `ThemeProvider`
- Provide a `theme` prop to the `ThemeProvider`
- All contained components will be injected via props/context with the current `theme`

![theme provider](./images/screenshots/72-theme-provider.png)

However, there aren't any silver bullets it seems in frontend web technology. While CSS in JS may seem like a great fit for most applications, there are certainly some drawbacks that are worth considering.

![drawbacks intro](./images/screenshots/73-drawbacks-intro.png)

When JavaScript is disabled (still can be a concern!), how do we progressively enhance? If JavaScript is our styling and rendering solution, we're serving effectively an unstyled mess of content, which goes directly contrary to the ideas of progressive enhancement.

0.2% of users may not seem like much, but if you're Facebook scale or driving a lot of traffic it's a concern

- 1,000,000 monthly users means 2,000 users may not be getting a usable site

How can we fix this?

You can mitigate with server side rendering (something like next would be terrific) or statically rendering to HTML (with something like Gatsby)

![java script-disabled](./images/screenshots/74-java-script-disabled.png)

Rich Harris, creator of such tools as Rollup, Buble, Svelte, etc. raises an interesting point. Not only are the styles not scrapeable, but the styles can be hard to query, as well. Things like e2e tests or integration tests should not be pointed to a unique hash, and so it's certainly a best practice to either use one of the existing babel plugins for most libraries that adds a humanized class name, or manually add your own!

![not scrapeable](./images/screenshots/75-not-scrapeable.png)

Editor tooling is still in its infancy, but as CSS in JS continues to grow in popularity, I think we'll see marked improvement on this front.

![editor tooling](./images/screenshots/76-editor-tooling.png)

It seems like every week there are new developments to get this working as seamlessly as possible. I believe this to be a space that will continue to see rapid improvements.

![editor tooling-plugin](./images/screenshots/77-editor-tooling-plugin.png)

As with anything, if you're directly injecting user input (even into CSS!) you open yourself up to issues

_Check out this [great article](https://reactarmory.com/answers/how-can-i-use-css-in-js-securely) from React Armory_

![sanitization concerns](./images/screenshots/78-sanitization-concerns.png)

Performance can be a concern, but I'd urge you here to not prematurely optimize. The difference between each of the libraries is arguably minimal, and the difference between CSS is relatively minimal as well.

However, if you're pushing Facebook-scale™, or after measuring your application's performance, then it may be worth re-visiting whether these libraries are for you, or whether there are performance optimizations you can make to improve perf.

![performance concerns](./images/screenshots/79-performance-concerns.png)

This benchmark measures the mount time of various CSS in JS libraries vs. inline styles (i.e. without a library).

Any benchmark should be taken with a grain of salt. It is _incredibly_ difficult to measure real-world performance, so most resort to doing large-scale operations (e.g. rendering a listview with thousands of rows, re-rendering a large table, etc.), which are generally not at all indicative of the type of application most are building.

They can be helpful to get a general idea for performance, these are not necessarily what you'll see in real world applications.

![performance chart-example](./images/screenshots/80-performance-chart-example.png)

So what should we make of all of this?

1. CSS in JS solves very real problems of CSS
1. It does so in a clean, component focused, and developer friendly way
1. It abstracts the CSS model to the component level, rather than the document level
1. It leverages the full power of JavaScript and the JavaScript ecosystem to _enhance_ CSS
1. ...
1. Profit

![wrap up-intro](./images/screenshots/81-wrap-up-intro.png)

If I were to give a call to action, or best advice for getting started, I would give this:

1. Start with `styled-components` as a starter (or final!) CSS in JS library

- It tends to be the most approachable as it uses actual CSS syntax, rather than style objects

1. If you're a fan, consider experimenting with other libraries in the ecosystem; who knows, you may like them even more than styled-components!

![instructions](./images/screenshots/82-instructions.png)

Overall, I'm _very_ enthused with the direction that CSS in JS is taking and the things it's doing for the ecosystem. I think it provides very tangible benefits to any application, particularly in the approach it takes to solve some of the problems of CSS _now,_ and does so in a way that feels like a real improvement over authoring in CSS.

If I were to start a new project right this moment, I'd author it using one of the CSS in JS libraries we've talked about, and I'd feel very enthused with that direction.

![happy](./images/screenshots/83-happy.png)

The React community can certainly inspire what many have called "selection anxiety." The proliferation of libraries, techniques, etc. can make it incredibly hard--especially as a beginner--to know what choice to make, and whether the choice is _most_ correct.

To help alleviate this, I recently created what I'm calling the "CSS in JS Playground," which is a live-editable comparison of some of the most common CSS in JS libraries.

My hope is that this tool will help each of you get a feel for each of the libraries, and hopefully empower you to make a more informed decision for what is best for _your_ particular app and use cases.

## Features

- Live editing and near instant preview of the code changes (using a web worker and the buble transpiler!)
- Service worker integration for better offline support
- A _rudimentary_ file system! Add a file, and import it in the main index file!
- Persistence! Update any file (or add additional files) and you can share that URL with your friends
- Theming by way of a light/dark theme

![css in-js-playground](./images/screenshots/84-css-in-js-playground.png)

One of the best ways I've found to keep up with the latest technology updates, as well as just edify your currenet knowledge of common front-end (read: CSS in JS!) knowledge is to follow active community leaders on Twitter.

Each of the people listed here are worth a follow, as they have some really interesting, great things to say and share about CSS in JS.

![people to-follow](./images/screenshots/85-people-to-follow.png)

This talk, and so many other things in the front-end community, would not be possible without the work of so many others. To them, I am so very grateful. Hopefully I, too, have contributed to the conversation!

> If I have seen further, it is by standing on the shoulders of giants

![attributions](./images/screenshots/86-attributions.png)

![links](./images/screenshots/87-links.png)

One final thank you to the organizers and sponsors of this conference, and for giving me an opportunity to present at my first ever conference.

I'd like to also thank each of the attendees. Without you, each of us would be speaking to an empty room, and where's the fun in that!?

... and finally, I'd like to thank everyone who attended my NebraskaJS meetup, in particular [Matthew Steele](https://twitter.com/mattdsteele?lang=en), for invaluable advice and support with an earlier iteration of this talk. In addition, [Phil Plückthun](https://twitter.com/_philpl) for some great advice, as well.

![fin the-end-thats-all-folks](./images/screenshots/88-fin-the-end-thats-all-folks.png)
