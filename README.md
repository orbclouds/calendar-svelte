# Orb's Minimal Svelte Template

Last README update: Saturday, March 20, 2021.

A Svelte app template for bootstrapping deployments on Orb's HyperEdge.

**`yarn start`** spins up a development server on `PORT 3000`.

**`yarn build`** builds the application for production into the `/build` directory.

**`yarn serve`** serves a built application locally.

All source code is contained in the `/src` directory.

Deploy the app on Orb's HyperEdge at https://console.orbclouds.com.

---
## See This Repo In Action!

This repo serves as the starting point for all of the apps featured on [Orb's YouTube channel](https://yt.orbclouds.com?from=gh&id=NEED_TO_HAVE_AN_ID_HERE).

A number of live apps have been created using this repository, so you know it'll work 😉.

- LINK A FEW APPS HERE

---
## Overview of Technologies Used

This repository includes a few cool technologies to help you fly through development:

1. [Snowpack](https://www.snowpack.dev), a lightning-fast frontend build tool, designed for the modern web.
2. [Svelte](https://svelte.dev/), radical new approach to building user interfaces which writes code that surgically updates the DOM when the state of your app changes.
3. [Typescript](https://www.typescriptlang.org/), an open-source language which builds on JavaScript by adding static type definitions.
4. [PostCSS](https://postcss.org/), a tool for transforming CSS with JavaScript. Specifically, we make use of [Autoprefixer](https://autoprefixer.github.io/), a PostCSS plugin which parses your CSS and adds vendor prefixes.
5. [Google Analytics](https://analytics.google.com/), a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand. **NOTE:** Google Analytics is only enabled in production by default. For obvious reasons, we did not commit our own Google Analytics Property IDs. We normally inject them as `ENVIRONMENT_VARIABLE`s and you can do the same using `dotenv`, which is already configured by default and works out-of-the-box in this repo. For example, create a `.env` file in the root directory of this repo like this:

```
SNOWPACK_PUBLIC_GOOGLE_ANALYTICS_ID=XXXXXXXXXX
```

The code in this repository was auto-formatted by [Prettier](https://prettier.io/), an opinionated code formatter. [ESLint](https://eslint.org/) was also very helpful!

---

## The Goals of This Repo

This repo was created as a resource for the team at Orb to rapidly develop front-ends of all kinds. We thought it would be a useful resource for everyone to use as well.

*The goal is to share a cool repository that we have found useful internally.*

If you believe that there is a tool which could add something to this repository, please let us know! We're always happy to hear from you and learn about new technologies.

---

## Get In Touch

Have a thought? Think we missed something? [Let us know!](https://www.orbclouds.com/get-in-touch) There are also many other ways to get in touch with us:

[🌐 Our Website](https://www.orbclouds.com)

[▶️ Our YouTube](https://yt.orbclouds.com?from=gh&id=NEED_AN_ID_FOR_THIS)

[📸 Our Instagram](https://ig.orbclouds.com?from=gh&id=NEED_AN_ID_FOR_THIS)

[🐦 Our Twitter](https://twitter.orbclouds.com?from=gh&id=NEED_AN_ID_FOR_THIS)

[🇫 Our Facebook](https://fb.orbclouds.com?from=gh&id=NEED_AN_ID_FOR_THIS)

[🎶 Our TikTok](https://tiktok.orbclouds.com?from=gh&id=NEED_AN_ID_FOR_THIS)