# S2 Gallery Application

This is a gallery application built as a part of learning jounrey, following Theo Browne's modern react tutorial on his YouTube channel. The purpose of this project is to enhance my react skills by building the gallery application.

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic UI with mock data (uploadThings)
- [x] Check the build process and tidy it up
- [x] Set up a database (vercel postgres)
- [x] Attach a database to the UI
- [x] Add authentication (clerk)
- [x] Add image upload
- [x] Associate images with users
- [ ] "taint" server only
- [x] Using next/Image component
- [x] Adding parallel routes
  - [x] Added a modal to display the image when it is triggered via a soft navigation with Link tag.
  - [x] Created a standalone page for the image when the page is refreshed.

## Concepts

Parallel routes

Parallel routes are a feature of Next.js that allows simultaneous rendering of multiple pages within the same layout. This is useful when you have dynamic sections in your page.

1. This parallel routing is to render a modal/page when a user clicks on an image within the application.
2. When the page is refreshed, it is rendered as a standalone page.
3. Advantages of parallel routes:
   - Independent routes so that we can manage its state, error and other features separately and at a granular level.
   - Sub navigation within the same layout. But we need to include default.tsx in the other slots to prevent the 404 error.

## Credits

This project is heavily inspired by Theo Browne's React tutorial on his YouTube channel. Many thanks to Theo for his educational content and guidance.
