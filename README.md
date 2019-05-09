# Reveal.js bundled by Parcel

## What's the point?

Reveal.js is great on it's own. You download their repo as a starting point and you're good to go. However, as any advanced Reveal.js user will tell you, there are a few caveats that accompany this ease of use.

Challenges with vanilla Reveal.js:

1. No dependency management (NPM)
2. Everything is built in HTML
3. No ES6 or babel
4. Complex gulp configuration for bundling

There are some great attempts to modernize Reveal.js with babel and webpack. But, the spirit of Reveal.js is simplicity, and most of these solutions involve complicated webpack configurations, confusing restructuring of Reveal.js, or need significant modification to work with other technologies like React or TypeScript.

## Reveal.js-parcel advantages

- Dependencies managed by NPM/Yarn
- Babel by default with ES6+
- No bundler configuration, it just works
- Easily add React or Typescript without any boilerplate
- Not opinionated. Use Reveal.js your way, this is just a better starting point.

## Reveal.js-parcel disadvantages

- Must install Node/NPM
- Can't present slides from a file:// link, must use the included server

## Getting started

Installation steps are similar to the [Reveal.js Full Install steps](https://github.com/hakimel/reveal.js#full-setup).

Step 1. Install [Node.js](https://nodejs.org) (4.0.0 or later)

> I recommend to use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to install Node.js.

Step 2. Clone this repository to your computer

    $ git clone https://github.com/btorresgil/reveal.js-parcel.git MySlideDeck

Step 3. Navigate to the new folder containing your slides

    $ cd MySlideDeck

Step 4. Install dependencies

    $ npm install

Step 5. Serve the presentation and monitor source files for changes

    $ npm start

Step 6. Open http://localhost:1234 to view your presentation

> You can change the port by using `npm start -- --port=1235`

## Folder structure

- **index.html** Just like the index.html from Reveal.js, but simpler because the Javascript moved out.
- **src/** Your javascript goes here. Also TypeScript, React, Vue, if you so choose.
- **src/reveal-config.js** All the initial setup and configuration for Reveal.js. Feel free to customize.

## Plugins

The same default plugins are active here as in the original Reveal.js repository.

To enable or disable plugins, modify `src/reveal-config.js`.

Use the dynamic import syntax to add new plugins. For example, to enable the Math plugin, you would add this to `src/reveal-config.js` right above the `Reveal.initialize()` line:

    import('reveal.js/plugin/math/math').then()

## A note about the highlight plugin

The `highlight.js` plugin that comes with Reveal.js currently has a broken version of `highlight.js` and `highlightjs-line-numbers.js` included inside the plugin itself. This is bad for two reasons:

1. It's broken
2. The dependencies are not managed by NPM

So I was forced to strip out the dependencies and include the plugin separately. You'll find it at `/src/plugins/highlight.js`. The `highlight.js` dependencies are already included via NPM and the plugin is active by default.

To disable the `highlight.js` plugin:

1. Remove the dependencies

    $ npm uninstall --save highlight.js highlight-line-numbers.js

2. Disable the plugin by removing the appropriate section from `src/reveal-config.js`

3. Optionally delete the file `src/plugins/highlight.js`