import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section className={'prose'}>
          <p>
            Hello, I&apos;m <strong className={'font-black'}>Luke</strong>. I&apos;m a software engineer in love
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
        <Image className={'rounded'} src={'https://source.unsplash.com/jJT1cnE4SZ8'} alt={'Mallorca'} width={600}
               height={600}/>
        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
