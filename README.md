# About

Canva Trustpilot Reviews Page
By Lee Jackson

# Requirements

Uses the Canva Business Unit ID

Handles two error cases:

- Business Unit ID not found
  To view this change the Business Unit ID within the constants file.
- Trustpilot Connection issues
  To do this block the URL of the requests from within the Network tab in Chrome Dev Tools.

The two main components, Stats and Reviews have error boundries around them, so that if an error is returned the user is shown an error message, rather than an empty section or broken page.

The 'Stats' component displays the Display Name, Stars out of 5 and number of 5 star reviews.

The 'Reviews' component displays the last 10 reviews with 4 or more stars. It displays the stars out of 5, the author and the content of the review.

# Design Pattern

The 'Custom Hook' design pattern was used, this moves the majority of the logic out of the presentational components.

The majority of the logic and the requests are made in the hook files.

# Styling

Sass module system, .scss files

# Packages used

- Axios: Allows us to make calls and fetch data
- Moment: Converts the createdAt time stamp to "X ago"
- React Icons: For the Star and Error icon
- React Spinners: Loading spinner

# Getting Started

Install node_modules: npm i
Run locally: npm run dev
