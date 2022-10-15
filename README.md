# Relevance AI Frontend Challenge 🥊

## Live Demos
- [App](https://relevance-ai-frontend-challenge.vercel.app/) - https://relevance-ai-frontend-challenge.vercel.app/
- [Ladle (component stories)](https://relevance-ai-frontend-challenge-ladle.vercel.app/) - https://relevance-ai-frontend-challenge-ladle.vercel.app/

## Functionality implemented

- Design as per Figma file
- Workflow history sorting (latest, oldest, workflow name and dataset_id from A-Z)
- Mock workflow re-runs
- Copy workflow ID

## Getting Started

Clone the repo then install all dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Stories have been written for each component using Ladle. To view them, run Ladle:

```bash
pnpm ladle serve
```

[http://localhost:61000](http://localhost:61000) opens in your browser automatically.

[Trunk](https://trunk.io) is used for linting and formatting - it integrates Prettier, ESLint and other static analysis tools together. Check the docs for more info on how to use. The executable `./trunk` has been included in the repo.

## Thinking and process

> **Note**
> Please note that I completed this challenge slowly over the course of an evening / morning while travelling, so was constrained by time and fatigue.

Having poked around the product, this seems like a new design for the Workflows History page! I approached this challenge from the perspective of it
being a prototype that demonstrates core functionality.

Next.js / React and TypeScript were used as I'm most comfortable with them at the moment. Tailwind CSS was used as it's what's currently used
in the product. While Nuxt / Vue are used at Relevance AI, the approach remains the same from an architectural perspective.

I decided to approach the development of this app from an **Atomic Design** perspective, meaning that I built from small components up.
This allowed me to develop each component in isolation, meaning I could verify functionality, focus on the component API where necessary
and also debug faster. To do this, I decided to use **Ladle**, a drop-in alternative to Storybook developed at Uber. The engineering justification for
this is that it's far more lightweight, built faster, came with automatic `axe` accessibility checks and required far less configuration.

The `<Navbar />` component was built first. It would have been possible to abstract the drop-down links (i.e. **Dashboards**, **Dataset**) away into a re-usable
`<Dropdown />` component, but this wasn't necessary for the sake of creating a prototype and would have created unnecessary complexity. Instead, this would be
a task more suited for creating a design system.

From here, I mocked the data / API response similar to how it appears in the current product:

```json
{
  "id": "ODYyNTU1MGM0NGM5LTRlZjctYjE1Zi1jNGQyYjk3OTBhMWQ-205ec28e-1",
  "params": {
    "workflow_name": "Vectorize",
    "dataset_id": "sample-dataset"
  },
  "status": "completed",
  "creation_time": "2022-09-08T02:32:43.591Z"
}
```

I then built the Workflow / dataset 'chip' component (`<Workflow />`), as this was the smallest part of the table. The icons are coupled to the workflow
names, and if an unrecognised name is passed a placeholder renders. From here, I hacked together the table and mapped the data in, then styled it.

Once I had the data in, it was time to add the finishing touches. I built a `<Status />` component which handles running / completed states. Although I'd like to have abstracted the buttons away into a `<Button />` component as an outlined variant, I didn't have enough time - this is something I'll talk about in improvements.

From here, I decided to implement the 'Copy workflow ID' feature. I thought a bit about what the best UX pattern would be to indicate that the ID had been copied: some options included:

- Changing the button text to 'Copied'. I didn't like this as it'd either mean the button would resize, or there would be too much white space around the button text.
- Displaying a temporary 'Copied' tooltip anchored to the top of the button. This seemed like it'd clutter the interface, so I also wasn't too keen on it.

Ultimately, I decided on a toast at the top of the screen, inspired by [Raycast](https://developers.raycast.com/api-reference/feedback/hud). This seemed like the best compromise between notifying the user while being unobtrusive.

From here, I implemented the sort functionality using a native select element versus the custom Select component used in the product. The reasoning behind this was that it was easy to mock, but also that it utilised pre-existing UI patterns built into the user's OS, meaning less maintenance required.

After that, I simplified my Tailwind CSS styling by removing unnecessary utilities then linted and formatted my code.

## Things I'd improve / do if I had more time

- **Implement a custom Select component using a primitive component library**. [Radix Primitives](https://www.radix-ui.com/docs/primitives/components/select) is the go-to for React as it it has a great API / accessibility built in to build on top of. The Vue equivalent would probably either be [Zag](https://zagjs.com/) or [Headless UI](https://headlessui.com/)
- **Implement View Parameters**. Although I didn't have time to implement this, the UX pattern would probably look like either of the three:
  - Code block that appears underneath the buttons (mocked up in the Figma file)
  - Modal (not a big fan, breaks flow)
  - Floating window (could be interesting)
- **Implement switching between different datasets**. In practice this wouldn't be too difficult, but for the purposes of the prototype it was unnecessary.
- **Implement the navbar dropdowns**. It'd be cool to do something like the [Stripe](https://stripe.com/au) website!

## Reflection

Ultimately, I was constrained by time and the fact that I'm travelling, but think that I've demonstrated my ability to recreate designs fast, implement functionality which is necessary for prototyping and building ideas, and brainstorm different directions for UX - harking back to what I said in my interview
about being passionate about both code and design. FIN!
