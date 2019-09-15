# Giphy Client

A simple web app to display GIF images from the Giphy API. Offers infinite scroll, searching by keyword and a grid/list layout switcher.

## Setup

Clone the repo, `nvm use` (or use the latest Node.js LTS version), `npm install` and `npm start`.

## Tradeoffs

- React Hooks was chosen as a faster way to scaffold components, local state and lifecycle methods. The downside of Hooks though is that they make components harder to test and complex state interactions hard to reason with.
- Unit test coverage includes only snapshot tests of the simpler components. Getting enzyme working with jest took too long and was abandoned. React-test-renderer makes interactive components harder to test.
- Lazy-loading of images (only when within the viewport) was not implemented due to time constraints.


