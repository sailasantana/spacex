# Podsights Test

Use this GraphQL API https://api.spacex.land/graphql/ to display some interesting data of SpaceX. The result should be a single page with at least two tables (Past Launches, Current Missions...)

The goal of this task is to test your frontend skills, from design to writing clean and reusable code.

### Requirements:

- You will need to create a Table component by yourself.
- The Table component should have a configurable search input, so the user can filter the current table data.
- Use async/await to fetch data.
- Use hooks
- Use inline-css to style React components.

Apart from this you can do anything you want.

### Example of an api fetch:

```
fetch('https://api.spacex.land/graphql/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        launchesPast(limit: 10) {
          id
        }
      }`,
  }),
})
```
