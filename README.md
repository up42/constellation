# Constellation

_The [UP42](https://up42.com) Design System_

## What does Constellation do

Constellation provides:

- The global Design Tokens used in our projects.
- A basic normalization style sheet that implements the tokens and defines some global styles, like forms, text, body, lists.
- Some shared component that are used in more than one project (other projects will implement their own components separately).

## Technical information

This project is heavily based on:

- [Theo](https://github.com/salesforce-ux/theo), the Salesforce Design Token tool,
- [Vue-Styleguidist](https://vue-styleguidist.github.io), a component styleguide written in Vuejs.

While the first is used mostly as is, Vue-Styleguidist has been customised to display tokens and other documentation.

The core of Constellation files are instead found in [src/](src/), and the following apply:

- `src/assets/`: built assets (e.g. tokens ready to be used).
- `src/components/`: shared components of the component library.
- `src/styles/`: all the SCSS styles.
- `src/tokens/`: all the tokens in JSON format.
- `src/utils`: generic utils used by Styleguidist.

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

**NOTE:** This project uses the `category` to display the tokens in their respective page. The only exception being the colors, as it uses their `type` rather than the `category` to filter them in the same page.

## TODO

- [ ] visualise tokens from within Vue-Styleguidist
- [ ] style components wrapper to ensure they are visualised with the right styles (in a scoped environment, for as much as possible), also see https://github.com/vue-styleguidist/vue-styleguidist/issues/385
- [ ] include ability to include assets (either as actual files, or as links) for download purposes.
