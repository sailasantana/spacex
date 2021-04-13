/* # Podsights Test - Saila

Use this GraphQL API https://api.spacex.land/graphql/ to display some interesting data from SpaceX. The result should be a single page with at least two tables (Past Launches, Current Missions, Upcoming Launches...)

The goal of this task is to test your frontend skills, from design to writing clean and reusable code.

### Start dev server:

- npm install
- npm run start

### Requirements:

- You will need to create a Table component by yourself.
- The Table component should take in a `columns` prop to declare the table columns and a `rows` prop to fill in the table body. An example would be:

```js
<Table
  columns={[
    {
      title: 'Row Title',
      assessor: 'title',
    },
    {
      title: 'Row Date',
      assessor: 'date',
    },
    ..,
  ]}
  rows={[
    {
      id: '1',
      title: 'Row 1',
      date: "2021-04-08"
      ...
    },
    ...
  ]}
/>
```

- Use async/await to fetch data.
- Use hooks
- Make it pretty and minimalistic.

Apart from this you can do anything you want.

### Example of an api fetch:

```js
const resp = await fetch('https://api.spacex.land/graphql/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        launchesPast(limit: 10) {
          id
          launch_date_utc
          rocket {
            rocket_name
          }
          ...
        }
      }`,
  }),
});
const { data } = await resp.json(); */

