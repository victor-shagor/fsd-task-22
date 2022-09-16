# Task overview

The purpose of this task is to demonstrate a knowledge of component architecture, styling, local state management, routing and working with API requests. 

You will build two pages and one API route:
1. Homepage: a grid of buildings, each of which is clickable
1. Building detail page: summary data and enquiry form
1. API route to mock the processing of the enquiry form

## Assets

### Reference design

Included in this repository is a bare-bones design of two pages:
1. Homepage: `_design/page-index.jpg`
1. Building detail page: `_design/page-building.jpg`

_Note: this design was produced by a developer for the purpose of this test_

### Data

`buildings.json` contains an array of building objects

### Media

`public/media/*.jpg` images for each building

---

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


---

# Homepage sub-tasks

1. Provide the data from `buildings.json` to the _Home_ component using [server-side rendering](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).
1. Display the buildings in a layout which generally resembles the reference design.
1. Link the call-to-action to the relevant building's detail page using [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes).

# Building detail sub-tasks

1. Display the building in a layout which generally resembles the reference design.
1. The "Register your interest" enquiry form should POST _unvalidated_ email address input value to a new [API route](https://nextjs.org/docs/api-routes/introduction).
1. The API route should handle all validation and send a success/error JSON response. There is no need to send an email — simply validate the address. 
1. The building page should track the API response status with some form of state management.
