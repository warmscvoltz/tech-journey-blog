import {getPostData} from "@/lib/posts";

export async function generateMetadata() {
  return {
    title: "This the deck",
    description: "This is a little bit about myself.",
  }
}

export default async function Pokemon() {
  return (
      <article className={'prose'}>
        <h1>About Me</h1>
      </article>
  )
}
