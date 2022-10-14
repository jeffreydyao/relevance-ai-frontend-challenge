# Relevance AI Frontend Challenge 🥊

Hi! Here's my code for the frontend challenge. Here, I'll walk you through my thinking and process. But first ...

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

To view components in isolation (Ladle), run Ladle:

```bash
pnpm ladle serve
```

[http://localhost:61000](http://localhost:61000) opens in your browser automatically.

## Thinking and process

> **Note**
> Please note that I completed this challenge slowly over the course of an evening while somewhat tired.

Having poked around the product, this seems like a new design for the Workflows History page. I approached this challenge from the perspective of it
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

As a final touch, I implemented the View parameters modal.

- Status

- Button

- Sort functionality

- Copy to clipboard

- View parameters modal

## Things I'd improve

`TODO`
