# Constellation

_The [UP42](https://up42.com) Design System_

## What does Constellation do

Constellation provides:

- The global Design Tokens used in our projects.
- A basic normalization style sheet that implements the tokens and defines some global styles, like forms, text, body, lists.
- Some shared component that are used in more than one project (other projects will implement their own components separately).

## Technical information

This project is heavily based on [Vue Design System](https://github.com/viljamis/vue-design-system), which uses at its core the following two tools:

- [Theo](https://github.com/salesforce-ux/theo), the Salesforce Design Token tool,
- [Vue-Styleguidist](https://vue-styleguidist.github.io), a component styleguide written in Vuejs.

While the first is used mostly as is, Vue-Styleguidist has been customised to display tokens and other documentation.

The core of the files are found in [docs/](docs/).

The core of Constellation files are instead found in [src/](src/).

### Starting up the project

For development purposes you just need to:

    $ npm install
    $ npm run start

This will start the customised version of Vue-Styleguidist on port `8080`.

### Production build

There are (currently) two main scripts to prepare the whole project for production deployemnt: `build:docs` and `build:system`.

### How are Tokens displayed and organised

Theo uses its own categorisation system:

Tokens can be organised by `category` and have a special transformation for their values depending on the value of `type` (e.g. `color` or `number`);

Theo supports some specific categories that allow its integration in other systems.

**NOTE:** This project (namely Vue Design System), uses the `category` to display the tokens in their respective page. The only exception being the colors, as it uses their `type` rather than the `category` to filter them in the same page.
