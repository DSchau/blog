---
path: "/front-end-framework-comparison.html"
date: "2017-07-13T20:46:01.519Z"
title: "Front End Framework Comparison"
tags: ["frameworks", "react", "angular", "vue", "comparison", "matrix"]
---

|Category|AngularJS|Angular|React|Vue|Polymer|
|--------|:-------:|:-----:|:---:|:-:|:-----:|
|[Build tooling/CLI][hash-build-tooling]|[🚫](#angularjs)|[⚠️](#angular)|[✅](#react)|[⚠️](#vue)|[⚠️](#polymer)|
|[Migration capable][hash-migration]|[🚫](#angularjs-1)|[🚫](#angular-1)|[✅](#react-1)|[⚠️](#vue-1)|[✅](#polymer-1)|
|[Ease of use][hash-ease-of-use]|[⚠️](#angularjs-2)|[⚠️](#angular-2)️|[✅](#react-2)|[✅](#vue-2)|[⚠️](#polymer-2)|
|[Community / Ecosystem][hash-community]|[⚠️](#angularjs-3)|[⚠](#angular-3)️|[✅](#react-3)|[✅](#vue-3)|[️⚠️](#polymer-3)|
|[Upgrade support][hash-upgrade]|[🚫](#angularjs-4)|[🚫](#angular-4)|[✅](#react-4)|[✅](#vue-4)|[️⚠️](#polymer-4)|
|[Native support][hash-native]|[⚠️](#angularjs-5)|[✅](#angular-5)|[✅](#react-5)|[⚠️](#vue-5)|[🚫](#polymer-5)|
|[TypeScript support][hash-typescript]|[⚠️](#angularjs-6)|[✅](#angular-6)|[⚠️](#react-6)|[⚠️](#vue-6)|[️⚠️](#polymer-6)|
|[JSX support][hash-jsx]|[🚫](#angularjs-7)|[🚫](#angular-7)|[✅](#react-7)|[⚠️](#vue-7)|[🚫](#polymer-7)|
|[Unit testing support][hash-unit-testing]|[⚠️](#angularjs-8)|[⚠](#angular-8)️|[✅](#react-8)|[⚠️](#vue-8)|[⚠️️](#polymer-8)|
|[E2E testing support][hash-e2e]|[✅](#angularjs-9)|[✅](#angular-9)|[⚠️](#react-9)|[⚠️](#vue-9)|[🚫](#polymer-9)|
|[Application ease-of-use][hash-application-ease-of-use]|[✅](#angularjs-10)|[✅](#angular-10)|[✅](#react-10)|[✅](#vue-10)|[️⚠️](#polymer-10)|
|[Component ease-of-use][hash-component-ease-of-use]|[🚫](#angularjs-11)|[🚫](#angular-11)|[✅](#react-11)|[⚠️](#vue-11)|[✅](#polymer-11)|
|[Supporting Team/Company][hash-supporting-team-company]|[🚫](#angularjs-12)|[✅](#angular-12)|[✅](#react-12)|[⚠️](#vue-12)|[✅](#polymer-12)|
|[Recruiting Market][hash-recruiting-market]|[✅](#angularjs-13)|[⚠️](#angular-13)|[✅](#react-13)|[⚠️](#vue-13)|[🚫](#polymer-13)|

Preliminary notes:

- AngularJS is Angular 1.x, Angular is Angular >= 2
- While it's arguable whether Vue/React/Polymer/etc. are frameworks, for the ease of discussion, each will be considered a framework, even if that descriptor is not entirely accurate


# Build tooling/CLI

Build tooling is becoming an important requirement for front-end development. In past years, much time would be spent creating a build system that allows writing maintainable code, while performing all the extra build steps required for front end development. This often includes linting, transpilation, minification, css pre/post processing, polyfills, autoprefixing, etc. Many of the newer frameworks come with these things built into a CLI for that particular framework. There are also often third party frameworks that do similar things.

## AngularJS

There isn't a community supported/suggested CLI tool for AngularJS. In general, a developer would have to roll his own (typically via using some boilerplate), or we'd have to provide a Yeoman generator/boilerplate that provides a similar experience as in other frameworks.

PeopleNet has [portal-core][portal-core] that supports many of the desired features, but does not have the community backing that is desired. Even within Trimble, there has been very little (if any) support.

## Angular

[angular-cli][angular-cli] is the official CLI tool for Angular applications. It is maintained by the Angular team at Google. Similar to yeoman, it generates a boilerplate for a project (or new modules within a project) for you. This means that as they make breaking changes, you will have to update a number of things that are part of the build system that it generated. It does help, in that there is much less overall to maintain, but it doesn't completely eliminate it. Also, this tool is fairly new (only hit 1.0 a month ago) and not quite as mature as some of the other framework options.

## React

[create-react-app][create-react-app] is the official CLI tool for react applications. It is maintained by the React team at Facebook. The major differentiating feature is that it is a zero-configuration tool that handles all of the build tasks for you. It is arguably the most mature of _any_ of the build tools, and uses some great stuff under the hood--e.g. webpack, jest for running tests, etc.

One of the primary benefits is that it is a zero-configuration tool. All of the choices are made by the tool (which could be considered a downside, if you don't agree with them). If you wish to use some parts, but not all, or to customize things, you can 'eject' and it will generate all the necessary boilerplate. Unfortunately, if you eject, you then have to maintain that code. They do however provide migration/upgrade tools to support ejected users.

## Vue

[vue-cli][vue-cli] is a great tool that generates out a working project based on a given project template (e.g. the webpack-template is quite popular). It is similar to both the Angular and React CLIs, in that it generates application boilerplate in a `src` directory. However, it does also scaffold out the build tooling config (e.g the webpack configs) in a `build` directory, so future upgrades will be left to the developer to implement in those configuration files. However, this does also mean that it is easier to extend upon this initial config in a way that must be `eject`ed from in order to achieve in [create-react-app][create-react-app].

## Polymer

Polymer has the [polymer-cli][polymer-cli], which is analogous to much of the build tooling available in other frameworks. polymer-cli contains common functionality such as serving from a local webserver, building for deployment, running unit tests, etc. Additionally, it performs similar boilerplate/templating functionality as other framework build tooling.

This cli actually works for both component projects (e.g. a single component intended to be used by multiple container applications), as well as app container projects. One significant drawback to note for the Polymer ecosystem is that it is currently very reliant on the bower ecosystem, which has since been deprecated and will only receive bug fixes going forward. Additionally, it can sometimes be tiresome to manage both NPM and bower dependencies, when effectively every other application dependency can be installed via NPM.

# Migration Capability

Designing new components (or applications) will often involve using these components or pieces of this new application in an existing ecosystem, e.g. back-porting a new React/Vue/etc. component into our AngularJS application. As such, how easy is it to go through this process? This process is important, and hopefully as simple as possible, because oftentimes a full rewrite will not be possible.

## AngularJS

AngularJS was the first version of the framework, so migration compatibility is not a huge concern. However, many of our existing applications are written in AngularJS, so it can be considered the baseline and reference for what we may need to "back-fill" new component development written in another framework (e.g. Polymer, Vue, etc.).

## Angular

The AngularJS -> Angular upgrade [guide][angular-upgrade-guide] recommends the usage of the upgrade module. This allows both Angular and AngularJS to run at the same time, in theory allowing an application to migrate modules individually.

In general, this means that both AngularJS and Angular will be running and loaded at the same time in your application. Additionally, any other frameworks you're using as well (IE angular-material, and angular-material2). Due to how Angular and AngularJS work, this means that during the transition, the client bundle will likely grow quite large.

We originally tried to use this tool when it first came out and found that due to our heavy usage of [angular-material][angular-material], we were largely incompatible. This was due to the angular-material components not being written in a way that allowed ngUpgrade to work with them. Some re-evaluation may need to be done to determine if this is still the case now, however. 

## React

There are several recommended tools that look promising.

[ngReact][ngReact] is the most popular, and has proven to be very easy to integrate. It allows you to wrap a react component so that it can be displayed inside an angular application. Components can be wrapped in a number of ways, depending on their usage. The output of this is much more clearly a wrapper/shim than what appears to be an angular component. However, the wrapper can easily integrate with ui-router which is heavily used in portals at PeopleNet.

The creator(s) of ngReact also recommends a couple of "more modern" alternatives as well, though they are not as popular currently.

[react2angular][react2angular] is very similar to ngReact in that you can wrap a react component so that it can be displayed inside an angular application. The api is similar to ngReact, but slightly different. The output makes the component look more like an angular Component in the end.

[angular2react][angular2react] is the opposite of react2angular, in that you can wrap an angular component to run within a react application.

[ngimport][ngimport] is a tool that can be used to help expose some of angularJS's internals that make the transition using any of the above tools easier.

All of these tools though should be fairly easy to integrate, thanks to how react prefers to deal with state. When state is immutable, and components are simply a view into the state, it is very easy to make components that can be reused easily in different contexts.

## Vue

[ngVue][ngVue] is a tool that was inspired by [ngReact][ngReact]. In general, it works similarly to ngReact, but perhaps not quite as cleanly. Whereas ngReact automatically binds to `propTypes` (React's way of signifying what props a component accepts), ngVue does not have a similar mechanism, so a component ends up looking like:

```javascript
<vue-component name="HelloComponent" vprops-prop="boundToController" vprops-other-prop="'stringBinding'"></vue-component>
```

These work, but in practice, end up looking a bit messy and a bit boiler-plate-y.

## Polymer

Polymer, by virtue of being an HTML "standard" will have great browser/web support--perhaps additionally with a polyfill--because it is a web standard. If distributing a web application, any Polymer components should "just work" with little to no additional changes.

# Ease of use

Of paramount concern is just how easy is the library/framework to use. We do not want to choose a framework that the developer has to fight, or do idiosyncratic things in order to get something to work. The library/framework should be easy to use (but powerful!), have well designed/obvious APIs, and in general, the developer should **enjoy** using the framework.

Additionally, check out this [developer survey][framework-comparison], which ranks the frameworks from real, developer surveys on a wide range of categories.

## AngularJS

AngularJS (and conversely Angular) are known for their learning curve and for a point when it *clicks* and begins to make sense what the framework is trying to do. Dependency injection, services vs. factories, modules, etc. are concepts largely unique to AngularJS in relation to front-end frameworks, and oftentimes there is a steep learning curve once starting with AngularJS. Once a developer gets used to the "Angular way" of doing things, it may begin to click a bit more, but the question is certainly raised as to why one has to learn to do the "Angular way" of building an application. The "Angular way" also can often impede development when you have to work with certain third party tools, due to having to manage the digest cycle for things that might not otherwise know about it.

AngularJS does not have an official CLI or build tool, which makes getting started with it much more difficult than some of the more modern frameworks.

### AngularJS component (1.5)

```javascript
export default {
  bindings: {
    name: '<'
  },
  templateUrl: './hello-world.html',
  controller: class HelloWorld {
    $onInit() {
      this.message = `Hello ${this.name}`;
    };
  }
}
```
```html
<div>
  {{$ctrl.message}}
</div>
```

## Angular

Angular attempts to fix some of the oddness/quirks of AngularJS, but also introduces a whole host of new concepts, such as Observables, Typescript, etc. It would have been hard enough to learn Angular--which does many things quite differently than AngularJS--if just learning the framework, but when these other concepts are thrown in, it can become quite a struggle. However, similarly to AngularJS, once things do begin to click into place, it can oftentimes be a pleasure to use the framework, and the included niceties (TypeScript, Observables, etc.) do oftentimes simplify development and allow for some very cool things to be built.

Angular also built the [angular-cli][angular-cli] to assist in bootstrapping Angular projects. While this is a significant improvement over AngularJS, which had no official CLI or equivalent, it still suffers from many of the common problems of this type of tool.

### Angular component

```javascript
@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      {{ message }}
    </div>
  `
})
export class AppComponent {
  message: string;

  @Input()
  set name(name: string) {
    this.message = `Hello ${name}!`;
  }
}
```

## React

React has largely taken the front-end ecosystem by storm, and it is most likely because of its relative simplicity and focus on just the view layer contrasted with the "batteries included" approach of AngularJS/Angular. React is highly component-based and modularized, which makes code easier to reason about and test, as well as to simple *use* to develop. React prefers a plain JavaScript approach to development. Instead of needing to learn a custom thing like `ng-repeat`, you just use `array.map`, and return an html element via JSX.

React also created one of the best community tools for bootstrapping a project so far, [create-react-app][create-react-app]. This significantly simplifies getting into development of react apps/components.

One slight reservation is that any application of reasonable size will likely use a "flux" pattern for state management (e.g. Redux, MobX, etc.), and there can be a learning curve in learning these patterns.

### React component

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Vue

It seems that Vue has picked up directly where AngularJS left off, and is stealing some of Angular (and perhaps even React's) market share with its focus on simplicity and ease of use. For instance, contrast an AngularJS component with a Vue component

### Vue component (2.0)

```html
<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String
  },
  methods: {
    sayHello() {
      return `Hello ${this.name}`;
    }
  }
}
</script>
```

Largely, the goals are the same, but is clear at a glance that Vue focuses on simplicity and avoids some of the weirdness of an AngularJS component (i.e. what is `<`, what is a `controller`, etc.) and focuses on writing clear, clean, and maintainable code.

## Polymer

Polymer is largely fairly easy to use, with a relatively simple API built on top of the Web Components spec. However, there are some distinct caveats that are worth mentioning:

- Polymer is (currently) reliant on the bower ecosystem, which was [recently deprecated][bower-deprecation]
- Polymer does have some weirdness in how it handles services/mixins (they are required to be browser globals, and "extend" the base instance which can lead to some odd behavior)
- A slightly odd "handlebars/mustache" templating system, where `[[value]]` means one-way binding, and `{{value}}` means watch and update this binding (e.g. two way binding)

```javascript
class HelloWorld extends Polymer.Element {
  static get is() { return 'hello-world'; }

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  get message() {
    return `Hello ${this.name}`;
  }
}

customElements.define(HelloWorld.is, HelloWorld);
```
```html
<link rel="import" href="../polymer/polymer.html>

<template id="hello-world">
  <div>
    {{message}}
  </div>
</template>
```

# Community & Ecosystem

This framework *must* have a thriving ecosystem for us to consider it for usage. A thriving framework typically indicates more active development, which means more open sourced components, utilities, and tools, which means less developer time spent wasted "re-creating the wheel." Of particular importance here is a robust "component library" (e.g. material components), and assessing the quality of that component library in the given framework.

## AngularJS

AngularJS was one of the first frameworks that the open source community was driven towards, and so there were a number of excellent community projects (e.g. ui-router, angular-material, ionic, etc.) that allowed for AngularJS to be a very well supported framework with little need to continually re-invent the wheel and implement custom solutions. However, by virtue of being a "legacy" framework (e.g. not the current version), this open source effort has diminished and is no longer the hot bed it once was for thriving community open source efforts

## Angular

Angular has a fairly solid open source community, but is currently divided between AngularJS and Angular. The maintainers have said that they will continue to support AngularJS until Angular achieves over 50% of the usage. Some projects, like angular-material, had very unfortunate transitions to Angular. The team ceased building any new components or features, and even approving PRs for them in favor of moving to angular-material2. This type of behavior has happened in other places as well, and continues to divide the community.

## React

React arguably has the most thriving open source community, with near daily enhancements, components, and utilities that make working with React a breeze. The community has seen great growth and activity, with tools and utilities such as react-router, react-redux, react-toolbox, material-ui, etc. etc.

## Vue

Vue has a very large (and seemingly growing) open source community seemingly bolstered by its reputation as an easy-to-use framework. Several component libraries exist, most notably [vue-material](https://vuematerial.github.io/#/), [vuetify](https://vuetifyjs.com/), and [element](http://element.eleme.io/#/en-US). Additionally, vue has excellent "officially supported" libraries/utilities such as vuex (a state management solution similar to Redux), as well as vue-router.

## Polymer

Polymer has not quite seen the thriving open source community effort that each of the other frameworks have seen, but there is still a very solid [material web components library](https://www.webcomponents.org/collection/Polymer/elements) officially supported by Google. However, outside of those official components, there is a fairly minimal and very reduced open source component library compared to the other frameworks.

With that said, however, it seems likely that as more browsers begin to implement the web components spec, there may be a marked up-tick in open source web components.

# Upgrade Support

Looking back on previous versions of the framework, how has the migration process looked? Does the framework do a good job of attempting to minimize breaking changes, or would upgrading code from version X to version Y constitute an entire re-write? If there are breaking changes, are they well documented, and do the frameworks do anything to make the upgrade process as easy as possible (e.g. code mods, upgrade utilities, etc.)?

## AngularJS

The AngularJS back in 1.x was not using semver, and as such, the minors they released were more akin to majors in the rest of the open source world. Even within those however, the upgrade path was usually very clear, and there were small to medium efforts in upgrading.

That is, until Angular came along. There were lots of promised tools and upgrade paths in order to ease migration from 1->2+. Unfortunately of these promises were not delivered on. AngularJS did get the new Component module in v1.5.0, which allows a smooth transition of the controller portions of a component. They promised a rewrite of the included router that would support both Angular and AngularJS, however this router was deprecated almost immediately after initial release, and was not in a usable form. There currently is no easy transition plan for the routing portions of AngularJS applications. The ngUpgrade module was originally promised to allow you to upgrade your AngularJS components to work within an Angular application, or vice versa. Unfortunately this module requires that the components being upgraded meet certain criteria, making it too specific in some cases. One of those big cases however is usage of angular-material. It was deemed fairly early on that all of the angular-material components were not compatible with ngUpgrade. Shortly after, the team that worked on angular-material mostly moved to the new angular-material2 project, and have since almost entirely stopped supporting angular-material.

Overall these events do not provide a good outlook for future major upgrades within the Angular world.

## Angular

See AngularJS.

## React

React so far has been using a fairly strong deprecation pattern for all of their major breaking changes. This involves deprecating features well in advance of them actually removing or changing them. There is also a clear path forward when using these features. Additionally, the deprecated packages are usually made available separately even after removal. When changes do require code changes, there are often scripts (codemods) provided which will automate updating various features to match latest standards.

## Vue

Vue fairly recently had a 2.x release, and the upgrade was fairly minimal and certainly would not constitute a full re-write. They also published an official [migration guide](https://vuejs.org/v2/guide/migration.html), which contains a ton of information, most notably:

> Woah - this is a super long page! Does that mean 2.0 is completely different, I’ll have to learn the basics all over again, and migrating will be practically impossible?

> I’m glad you asked! The answer is no. About 90% of the API is the same and the core concepts haven’t changed. It’s long because we like to offer very detailed explanations and include a lot of examples. Rest assured, this is not something you have to read from top to bottom!

Vue seems acutely aware that changes to a framework should be incremental and breaking changes should be minimal and done for solid reasons. For these reasons, it seems reasonable that the migration to Vue 2.x and beyond will be relatively simple and well documented.

## Polymer

Polymer just released v2.0, which does contain a number of breaking changes. However, similarly to Vue, a [migration guide](https://www.polymer-project.org/2.0/docs/upgrade) was published by the official Polymer team and provides solid documentation/tips for making the upgrade. Most of the changes were fairly minimal and many involve deprecating/removing functionality that did not align with the web components spec but was still possible with Polymer v1.

With a non-trivial Polymer component, there will be a fairly decent effort to migrate from 1.x to 2.x, _however_ the changes are fairly minor and certianly do not constitute a full re-write.

# Native Support

While not necessarily a "must have," native support beyond just simply a Cordova wrapped app is a huge plus when used for application development. Tools such as react-native, nativescript, etc. are huge assets for the framework, as this typically will allow for development of a more robust, more "native feeling" (improved performance, native components, etc.) application, which will lead to a better user experience

## AngularJS

The native support in AngularJS is primarily tied to Cordova, which is a very popular native solution that runs your AngularJS code in a webview, and then through eventing and native hooks, allows for native functionality (e.g. camera, geolocation, etc.) to be accessed from the underlying webview. This largely works pretty well, but there are definite and oftentimes obvious indicators--e.g. performance, general look and feel, scrolling behavior, etc.--that makes the application feel as if it is _not quite_ native feeling. However, the ease of development in Cordova is oftentimes a positive, and the plugin ecosystem available in Cordova is quite robust.

## Angular

Angular is described as "... a development platform for building mobile and desktop web applications," so it is clear from the get-go that Angular wants to be a development platform for not only the web target, but also to target mobile. This is largely possible via the integration with [NativeScript][native-script], which renders actual native elements (**not** webviews as in Cordova), so in theory, the performance and look and feel will feel much more native compared to Cordova.

## React

As React can be rendered (by intercepting the `render` method of a component) to multiple targets (DOM, server, etc.),  a native target--e.g. iOS, Android--can also be targeted and is made possible through [react-native][react-native]. react-native works via importing components that act as a bridge (similar to Cordova, but using actual native components rather than a webview bridge) to the actual component for that platform. This means that the end result is an application that feels like a real, native application (and performs like one!) because it effectively is one. For instance, consider how simply the "Hello World" of react-native can be written, with a button that renders as an iOS buttton and Android button on the respective platform:

```javascript
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Button onClick={() => this.handleClick()}>
          Click me 
          {
            this.state.clicks > 0 ? this.state.clicks : ''
          }
        </Button>
      </View>
    );
  }
}
```

This will render a real text-view, a real button, and will respond to interactive touch events by incrementing the click count, all using React syntax and JSX.

## Vue

Vue native support is largely similar to AngularJS, with the primary native support provided via a Cordova wrapper running Vue code in a webview. However, there is hope on the horizon with tools such as [weex][weex], which does many of the same things as native-script, react-native, etc.

## Polymer

Polymer, via virtue of being web technology, will be deficient if true, native support is a requirement. However, with the advent of the "web platform" (and concepts such as progressive web apps), Polymer still has a place at the table and can be used in a native app currently via tools such as Cordova. We are currently using Polymer in our Cordova-based application Connected Driver for various components.

# TypeScript Support

At Labs, we're big proponents of the benefits of type safety that TypeScript provides, and so any framework that has TypeScript as a "first class citizen" gets a plus in our book!

## AngularJS

AngularJS retroactively created typings and some other enhancements for many of its core APIs, but it was very much not designed for first-class TypeScript support. However, one definitely can (and we are on the Connected Driver product) write AngularJS with TypeScript, it is just inarguably not quite a first-class experience as one would get with Angular.

## Angular

Angular was an early key adopter of Typescript (although originally they wrote their own, similiar variant called AtScript), and it is very obvious upon using Angular or checking out a project that TypeScript is a first class citizen in the AngularJS community. In fact, their documentation shows the great majority of the example code snippets in TypeScript, so it would be a slight disadvantage in _not_ using TypeScript with an Angular project.

## React

React is fairly unopinionated about what it is authored in (as long as it compiles/transpiles down to JS), and so TypeScript can certainly be used with React. However, slightly concerningly, Facebook has a sort of TypeScript competitor called Flow that many internal Facebook React components are written with, _and_ there haven't (as of yet) been official TypeScript bindings included with any release of React.

## Vue

Vue does not have what I would consider first-class TypeScript support, but it can be added fairly easily as its underlying webpack config (scaffolded out with vue-cli) can be easily extended to support loading Typescript. Additionally, Vue (as well as vuex and vue-router) each support _official_ Typescript bindings.

## Polymer

Polymer is not particularly tied/concerned with how it is authored, as long as it compiles down to ES2015, so TypeScript can certainly be used with Polymer. However, Polymer's core APIs do not have official bindings, and the unofficial polymer-ts project has not yet been updated for Polymer 2 support.

# JSX Support

JSX support simply means that the "view" code you are writing does not need to be tied to knowledge of a DSL. For example, to iterate over an array of items in AngularJS, the following code suffices:

```html
<ul>
  <li ng-repeat="item in items">{{item}}</li>
</ul>
```

which works great. However, with JSX, no knowledge of the DSL is necessary, one can simply just write Javascript, e.g.

```javascript
function List({ items }) {
  return (
    <ul>
      {
        items
          .map(item => <li key={item}>{item}</li>)
      }
    </ul>
  );
}
```

We think the JSX method is easier for developer to pick up (and less to learn, it is after all *just* Javascript), which is a great thing!

## AngularJS

AngularJS has a custom DSL (e.g. `ng-repeat` for iterating over a list of items). A developer could use [angular-jsx](https://www.npmjs.com/package/angular-jsx), but it's essentially just sugar and converts the underlying JSX to a string, not *real* JSX so the benefits (e.g. ability to use real JSX) are not fully realized.

## Angular

Angular, while written in what seems like HTML, actually compiles down to a JSX like syntax (e.g. can think of it as analogous to `Angular.createElement`) which allows for tools such as AOT to work on the HTML like syntax, which is then compiled. So while the benefits of using "Javascript in HTML" are still not realized, it is interesting to note that under the hood JSX and Angular's "HTML" templates are doing similar things via the React/Angular compiler.

## React

React, of course, popularized JSX as a standard (and this standard has since been implemented by libraries such as Preact, Inferno, etc.), and so has first class JSX support and all the great things that come along with it. Conditional rendering, rendering children, and using Javascript and an HTML-like syntax to render content to the DOM are all supported by React.

## Vue

Vue, similarly to Angular, compiles its "HTML" templates into a format that can be easily serialized to the DOM. However, quite interestingly, Vue also has support for a `render` method, which [allows code to be written](https://vuejs.org/v2/guide/render-function.html) that looks very similar to JSX. Additionally, with a [babel-transform](https://github.com/vuejs/babel-plugin-transform-vue-jsx) Vue can even write straight JSX without the `h.createElement` calls.

## Polymer

Polymer is quite tied to vanilla HTML, and so as such, will likely never support JSX or anything of the sort.

# Unit Testing Support

Unit testing is arguably one of the key determinants of a codebase's overall quality. Unit tests allow developers to validate current functionality, as well as ensure that future developers working on the code base do not break any existing functionality with their changes. Additionally, writing unit tests oftentimes makes otherwise pesky bugs easier to spot, thereby leading to improved code quality. We would very much prefer if our framework of choice has first-class unit test support, without going through hoops in order to achieve it.

## AngularJS

One of AngularJS's big features at the time was how easy it was to unit test. They built an official unit testing tool called Karma. Unfortunately Karma isn't a perfect solution. In order to load a module/component, you have to basically fully configure the application to work with Phantom or other browser. This makes it more of an integration test than unit test, and will often lead to single components causing all of the unit tests to fail. Additionally, a decent amount of boilerplate is necessary to do any amount of testing.

More recently, it is possible to use node testing tools like Mocha to test the controller portions of a component. However this has the caveat that you aren't testing the view (html) part of a component, so there can still be bugs that aren't found until E2E or manual test steps.

## Angular

Angular's unit testing is very similar to AngularJS. Karma and Jasmine are still the recommended tools. They still feel like they are more integration tests than unit tests, and there is a decent amount of boilerplate and specific tricks you need to know to get the job done.

## React

Unit testing in React is much simpler than other frameworks due to some of the overall design decisions made in React itself. Since React is primarily the view layer, and since it prefers to work with immutable data, testing a React component is more about asserting how it handles data input. The recommended test tool for React is Jest. Jest requires very little boilerplate to get going, and tests feel very straight forward. The CLI also offers great functionality that supports TDD and other test heavy methodologies.

When paired with a state management tool like redux, most of the logic will be separated from the views themselves, making testing much more simple when compared with frameworks that prefer mutation.

## Vue

Vue can be very simply unit tested **and** with minimal boilerplate. As a Vue component is a simple JavaScript object, it is very simple to perform unit tests because the data structure is simple and well defined. Consider a sample unit test below:

```javascript
// Import Vue and the component being tested
import Vue from 'vue'
import MyComponent from 'path/to/MyComponent.vue'
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).toBe('hello!')
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).toBe('bye!')
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})
```

## Polymer

The Polymer team has an ofificlally supported [web-component-tester](https://github.com/Polymer/web-component-tester) utility, which allows for unit tests (as well as integration tests) to be written. However, it is a bit unfortunate that a custom tool must be used, and the underlying tooling (e.g. Mocha,  Chai, etc.) cannot be swapped out or changed easily. However, with Polymer being HTML focused, it is reasonable that a separate, standalone utility is required, and it does work quite well.

# End to End (Integration) Testing Support

End to end tests are also invaluable in diagnosing subtle bugs and regressions that an "actual user" would uncover. They effectively run a series of steps in a browser (e.g. click this button, then this button, and expect X to happen) that a real user would run, thereby introducing some invaluable validation of functionality, as well as important information for regression testing that some functionality continues to work even after additional, possibly unrelated functionality is added to the application.

## AngularJS
Protractor was designed as a tool to specifically work with Angulars digest cycle. As a wrapper around selenium, it provides the power of that framework, while being fully compatible with Angular.

## Angular
As the successor to AngularJS, Protractor continues to support Angular. It does however have a couple caveats with the upgrade. Namely it loses binding and model locators, with the recommendation of using selection by css instead.

## React
Selenium based E2E testing frameworks work with react. Things like Nightwatch.js and Webdriver.io as well as plain Selenium all work to test React. Protractor is also fine. All of these work, though none are made to work as nicely as Protractor is to Angular. Also, due to how React renders components you may be required to put identifiers on components to allow the various frameworks to select them.

## Vue
Vue's E2E testing is in a similar boat to React. All the same tools work for it; the most complete one seems to be TestCafe. Similar to React, tool selectors may require you to add IDs to elements to properly access them.

## Polymer
Selenium based E2E testing _can_ work for Polymer apps, but it may take some creativity in some cases. Polymer renders the DOM asynchronously which doesn't play well with Seleniums built in wait functions. Selenium also does not support shadow DOM. There is very little support around this, so you may be on your own if you run into issues.

# Application Ease of Use

Of paramount concern is ease-of-use when developing an application. Does the framework provide the necessary tools to help the developer be productive?

## AngularJS

AngularJS was rapidly adopted for a variety of reasons, but certainly one of the foremost was for its "batteries included" approach, which means that it attempts to include many useful tools and common utilities to make development as easy as possible. This means that the framework is making decisions for you, i.e. using `$http` for async requests, `$q` for Promise, etc.

Batteries included can arguably be good for some organizations, because it eliminates the need to make non-framework decisions. For example, in the React/Vue world, you roll your own HTTP client (e.g. fetch, axios, etc.), roll your own CSS solution (e.g. vanilla CSS, styled-components, other CSS-in-JS solutions, etc.). This can be good and bad because it means that you are directly tied to the framework's implementation (in the Angular world), and you _have_ to make the "correct" decision if rolling your own common utilities. There's a distinct trade-off to both, but it does appear that the more narrowly focused React/Vue libraries have begun to become more popular.

## Angular

Please see the [AngularJS section](#angularjs-10)

## React

React began its ascent as the developer experience was vastly different compared to AngularJS. It was narrowly focused on a singular task, rendering view(s) to the DOM in a performant matter, and adapting to data changes with minimal DOM mutations. As it is singularly focused on this "virtual" DOM and the view, it makes less decisions for you, as it can be considered more of a library than a framework. With that said, however, React is also an excellent app development framework, primarily through the usage of Flux patterns (e.g. Redux, MobX, etc.). These state management solutions are the de facto choice for structuring any non-trivial application, and used in conjunction with React make React a compelling app development framework.

However, it is important to note that as React is singularly focused, that does mean that more decisions will need to be made along the way. If an application needs to make an HTTP request, a helper library--or polyfill--will need to be selected (e.g. fetch, axios, etc.). How should one structure the CSS? CSS Modules and vanilla CSS files? styled-components? Glamorous? Each of these decisions will need to be made, which does mean that incorrect decisions could be made along the way, and can require some cognitive overhead for the devloper to ensure that correct decisions are being made.

Additionally, as React is very unopinionated and just focused with the view, that means that there isn't an additional overhead of learning (for instance) the distinctions between a service and between a factory, as in the AngularJS world. Nor about what a filter, a value, a constant, etc. etc. Plain JavaScript can be used, ES6 classes can be the base data layer for a "service," etc. etc. This leads to an arguably easier learning curve because plain JavaScript is the basis layer for non-view functionality.

## Vue

Vue, similarly to React, is simple focused on the "view." This singular focus leads to many of the same positives and negatives of React, with some important distinctions. Vue ships with support for a "*.vue" file extension, which contains the template, the JavaScript object (i.e. the component), and the CSS/style definition. With very little additional work, it is incredibly easy to get "scoped" CSS styles, ES6 JavaScript files, and simple HTML (or Pug/Jade) templates. These included utilities do make starting with Vue quite simple, and leads to a very positive ease of use for the developer.

## Polymer

Polymer is more similar to React/Vue than it is to AngularJS, for it also faciliates and lends itself towards component development. As such, it can be a slight struggle to get up and running with more advanced functionality (e.g. sharing state/data between nested components). Polymer does include some functionality for more app development like features with its use of "behaviors," which are essentially JavaScript objects used as mixins that can be extended. These can be shared between components to instrument data/functionality re-use. However, on the whole, Polymer suffers from similar concerns as React/Vue in that it is not batteries included, and so decisions on functionality (http requests, promises, etc.) must be made/instrumented by the developer.


# Component Ease of Use

We currently prefer to structure cohesive blocks of functionality as "components." We currently use Polymer, which works great for this, but in choosing a new framework a definite plus would be not only its interoperability with Polymer, but also whether or not we could perhaps shift and use the framework for not only application development, but also components that can be easily distributed/consumed by other applications.

## AngularJS

AngularJS very much cast the "component craze" into the spotlight with its concept of directives and *of course* components (simplified directives) in Angular 1.5. These components can be easily imported into an AngularJS application, but **cannot** be easily used in other application frameworks. However, if using an AngularJS codebase, these components can be _easily_ imported as modules, which can then be used an AngularJS component as any other component. A sample Angular component is below:

```javascript
export default angular.module('pnet.listView', [])
  .component('pnetListView', {
    bindings: {
      items: '<'
    },
    template: `
      <ul class="pnet-list-view">
        <li ng-repeat="item in $ctrl.items" ng-bind="::item"></li>
      </ul>
    `.trim()
  });
```

## Angular

Angular follows in the footsteps of AngularJS, but simplifies the component to effectively what made up an Angular 1.5 component. It elminates any trace of `$scope`, which is oftentimes a source of confusion and a performance bottleneck in AngularJS applications, so it does do some solid things for component development. However, similarly to AngularJS, an Angular component **cannot** easily be used in other non-angular applications, so it's effectively a non-starter for sharable components between non-Angular applications. For illustration purposes, consider an Angular component:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pnet-list-view',
  template: `
    <ul class="pnet-list-view">
      <li ngFor="let item of items" ng-bind="::item"></li>
    </ul>
  `
})
export class PnetListViewComponent {
  @Input()
  public items: string[];
}
```

## React

React's entire structure is component based, which means that an application is essentially constructed of a series of components, many of which can/could be external to the application itself and possibly imported from a separate source or distributed as an NPM module. This model works incredibly well, and once the mindset shifts to a more component-based architecture, all those benefits (easily testable, small, cohesive blocks of functionality) of components can be realized within a React application.

React components can be quite easily distributed/consumed by other applications as a React component is typically "just Javascript," and so just needs to be imported and used as any other component in your application. Note: AngularJS support is fairly robust and made possible via [ngReact][ngReact]

Additionally, incredible tools such as [react-storybook][react-storybook] make component development a breeze, and also make it easy to document/show/share your component to others.

For illustration purposes, consider a React component:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

function ListView({ items }) {
  return (
    <ul>
      {
        items
          .map(item => <li key={item}>{item}</li>)
      }
    </ul>
  )
}

ListView.propTypes = {
  items: PropTypes.array
}; // note, this is only provided as a convenience, it would work without it

export default ListView;
```

## Vue

Vue is structured as a series of components (similarly to React), which means that its components support is quite good. Distributing a Vue component can be done with the `vue-cli` command `vue build src/app/ComponentName.vue --lib --prod`, which will build, minify, split the CSS into a separate file, and remove the Vue import from the resulting Javascript. Running this command creates a re-usable (with some caveats regarding ngVue for AngularJS support) Vue component, that can be simply and easily re-used in other Vue applications.

Consider a Vue component:

```html
<template>
  <ul class="pnet-list-view">
    <li v-for="item in items">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'PnetListView',
  props: {
    items: Array
  }
}
</script>
```

## Polymer

PolymerJS is built as an enhancement on top of the web component standard, which means that with the web platform, PolymerJS has great component support. The API is fairly simple, and Polymer components (as web components) are distributed as HTML files, which can be painlessly imported into any web application, typically regardless of framework. This provides drop-in support/enhancement of a feature that can be developed side by side with the application, and updates to the component can be made without any changes required to the "container" application.

Consider a sample Polymer component

```html
<link rel="import" href="../polymer/polymer.html">

<dom-module id="pnet-list-view">
  <template>
    <ul class="pnet-list-view">
      <template is="dom-repeat" items="{{items}}" as="item">
        <li>{{item}}</li>
      </template>
    </ul>
  </template>
</dom-module>

<script>
class PnetListView extends Polymer.Element {
  static get is() {
    return 'pnet-list-view';
  }

  static get properties() {
    return {
      items: {
        type: Array
      }
    };
  }

  constructor() {
    super();
  }
}

customElements.define(PnetListView.is, PnetListView);
</script>
```

# Supporting Team / Company

It is important that we know that the framework we choose not only has community support (e.g. a thriving open source community), but also it is just as important that the framework has support by a backing organization or company. The primary reason for this is that if a large company is currently using (or developing!) the framework, then it is extremely unlikely that the framework would cease development or go into maintenance mode due to lack of support/use. 

## AngularJS

AngularJS, being one of the original most popular SPA frameworks, is supported by a large team of people. The primary contributors are a team of Google employees. They have said that support will continue until the majority of the traffic moves to Angular instead. It is very infrequently being mentioned in talks and conferences any longer. 

## Angular

Like AngularJS, Angular is backed by the same Google team. It is also the newest major revision to the original AngularJS project and as such is where the majority of the angular team's development is going. It has a near constant presence in conferences and talks. They have since switched to semver, so presumably the name and primary syntax wont be changing for a while.

## React

React is backed by a team at Facebook. They have stated that they have over 20,000 components in Facebook.com, and the WhatsApp and Instagram apps are both built entirely using React.

## VueJS

VueJS is backed by a single primary developer, Evan You. They do have a number of sponsors, however not a major full team of employees at a company currently. Interestingly, Vue (and Evan You) is currently funded by a [Patreon community](https://www.patreon.com/evanyou), which is comprised of donations from companies, individuals, etc. 

## Polymer

Polymer is backed by a team at Google. They have stated that it is a separate project from Angular because they both have entirely different goals. 

# Recruiting Market

Popularity in the recruiting market is important for the framework we pick. If the job market isn't interested, it might hurt our ability to hire. If it's newer and hotter, it might help us recruit.

### Raw Data

Based off of LinkedIn keyword searches in the Greater Minneapolis / St. Paul area of people who currently list themselves as some sort of developer/engineer.

```
Total: 61,235
---
AngularJS: 1974*
Angular: 120*
React: 483
Vue: 120
Polymer: 0
```

## AngularJS

Given the time on the market, and popularity in corporate scenarios, this is not a surprising number. 

*Unfortunately, due to the naming issues between AngularJS and Angular, it's hard to actually differentiate these numbers. Similarly, it might actually be hard to recruit for them specifically as well.*

## Angular

Due to the issues during the initial rollout of Angular, the low number isn't entirely surprising. There could also be issues related to the naming.

*Unfortunately, due to the naming issues between AngularJS and Angular, it's hard to actually differentiate these numbers. Similarly, it might actually be hard to recruit for them specifically as well.*

## React

React has more recently grown popular than Angular(JS), and as such has a pretty healthy hold on second place here so far.

## VueJS

This one is difficult to search for. Pearson Vue is a popular company nearby here, and excluding that from the search will possibly also exclude people with the skill listed as well. Even with that, the amount included is fairly low. Additionally, it didn't even show up in the "skills list" area, so that is a concern.

## Polymer

This one is the most difficult to search for of the frameworks. There is no skill listed in the skills section, and on top of that, there are tons of categories of skills that involve this that are entirely unrelated. Even trying to eliminate some of the noise, we could not find anyone who listed this on the site.

<!-- HASH LINKS -->
[hash-build-tooling]: #build-toolingcli
[hash-migration]: #migration-capability
[hash-ease-of-use]: #ease-of-use
[hash-community]: #community--ecosystem
[hash-upgrade]: #upgrade-support
[hash-native]: #native-support
[hash-typescript]: #typescript-support
[hash-jsx]: #jsx-support
[hash-unit-testing]: #unit-testing-support
[hash-e2e]: #end-to-end-integration-testing-support
[hash-application-ease-of-use]: #application-ease-of-use
[hash-component-ease-of-use]: #component-ease-of-use
[hash-supporting-team-company]: #supporting-team--company
[hash-recruiting-market]: #recruiting-market

[framework-comparison]: http://stateofjs.com/2016/frontend/
[angular-cli]: https://github.com/angular/angular-cli
[create-react-app]: https://github.com/facebookincubator/create-react-app
[vue-cli]: https://github.com/vuejs/vue-cli
[polymer-cli]: https://www.polymer-project.org/2.0/docs/tools/polymer-cli
[portal-core]: https://github.com/PeopleNet/portal-core
[angular-upgrade-guide]: https://angular.io/docs/ts/latest/guide/upgrade.html
[angular-material]: https://material.angularjs.org
[ngReact]: https://github.com/ngReact/ngReact
[react2angular]: https://github.com/coatue-oss/react2angular
[angular2react]: https://github.com/coatue-oss/angular2react
[ngimport]: https://github.com/bcherny/ngimport
[ngVue]: https://github.com/ngVue/ngVue
[ngVue-caveats]: https://github.com/ngVue/ngVue/blob/master/docs/caveats.md
[bower-deprecation]: https://github.com/bower/bower/issues/2298#issuecomment-302792690
[vue-typescript]: https://vuejs.org/v2/guide/typescript.html
[native-script]: https://www.nativescript.org/
[react-native]: https://facebook.github.io/react-native/
[weex]: https://weex.apache.org/
[react-storybook]: https://storybook.js.org/
