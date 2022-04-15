import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

/* Part1
Pages in Next.js

  In Next.js, a page is a React Component exported from a file in the pages directory.

  Pages are associated with a route based on their file name. For example, in development:

    1 - pages/index.js is associated with the / route.
    2 - pages/posts/first-post.js is associated with the /posts/first-post route.

  We already have the pages/index.js file, so let’s create pages/posts/first-post.js to see how it works.
*/

// Create a file called `first-post.js` inside the posts directory with the following content:
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Fist Post App</title>
      </Head>
      <h1>First Post ✌️</h1>
      <h2>
        <Link href="/">
          <a>Back To Home</a>
        </Link>
      </h2>
    </Layout>
  )
}

/* Part1

This is how you can create different pages in Next.js.

Simply create a JS file under the pages directory, and the path to the file becomes the URL path.

In a way, this is similar to building websites using HTML or PHP files. Instead of writing HTML you write JSX and use React Components.

Let's add a link to the newly added page so that we can navigate to it from the homepage.

*/

/* Part2

As you can see, the Link component is similar to using <a> tags, but instead of <a href="…">, you use <Link href="…"> and put an <a> tag inside.

Let’s check to see if it works. You should now have a link on each page, allowing you to go back and forth:

*/

/* Part3

Adding CSS

Now, let’s add some styles to the Layout component. To do so, we’ll use CSS Modules, which lets you import CSS files in a React component.

Create a file called components/layout.module.css with the following content:

IMPORTANT: To use CSS Modules, the CSS file name must end with '.module.css'


Assets, Metadata, and CSS
Layout Component
First, let’s create a Layout component which will be shared across all pages.

Create a top-level directory called components.
Inside components, create a file called layout.js with the following content:
export default function Layout({ children }) {
  return <div>{children}</div>
}
Then, open pages/posts/first-post.js, add an import for the Layout component, and make it the outermost component:

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
Adding CSS
Now, let’s add some styles to the Layout component. To do so, we’ll use CSS Modules, which lets you import CSS files in a React component.

Create a file called components/layout.module.css with the following content:

Important: To use CSS Modules, the CSS file name must end with .module.css.

To use this 'container' class inside 'components/layout.js', you need to:

  1 - Import the CSS file and assign a name to it, like 'styles'.
  2 - Use 'styles.container' as the 'className'.

Open 'components/layout.js' and replace its content with the following.

This is what CSS Modules does: It automatically generates unique class names. As long as you use CSS Modules, you don’t have to worry about class name collisions.

Furthermore, Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

CSS Modules are extracted from the JavaScript bundles at build time and generate .css files that are loaded automatically by Next.js.
*/