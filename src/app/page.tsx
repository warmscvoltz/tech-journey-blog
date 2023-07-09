import Link from 'next/link'
import Date from '@/components/Date'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div className={'prose'}>
        <section>
          <p>
            Hello, I&apos;m <b>Luke</b>. I&apos;m a software engineer in love
            with front end development. This is the starter template for Tech Journey!
          </p>
          <p>
            <i>
              Check out this starter repo{' '}
              <Link href={'https://github.com/ludu12/tech-journey-blog'}>
                here
              </Link>
            </i>
          </p>
        </section>

        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date} />
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
