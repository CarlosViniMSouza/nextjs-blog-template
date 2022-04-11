/*
Pages in Next.js

  In Next.js, a page is a React Component exported from a file in the pages directory.

  Pages are associated with a route based on their file name. For example, in development:

    1 - pages/index.js is associated with the / route.
    2 - pages/posts/first-post.js is associated with the /posts/first-post route.

  We already have the pages/index.js file, so let’s create pages/posts/first-post.js to see how it works.
*/

// Create a file called `first-post.js` inside the posts directory with the following content:
export default function FirstPost() {
  return <h1>First Post ✌️</h1>
}

/*
This is how you can create different pages in Next.js.

Simply create a JS file under the pages directory, and the path to the file becomes the URL path.

In a way, this is similar to building websites using HTML or PHP files. Instead of writing HTML you write JSX and use React Components.

Let's add a link to the newly added page so that we can navigate to it from the homepage.
*/