import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPosts() {
  const fileName = fs.readdirSync(postsDirectory)
  const allPosts = fileName.map(fileName => {

    // Remove '.md' from file
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Post metadata section
    const matterResult = matter(fileContents)

    // Combine data + id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPosts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

/* Note: In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils. */
