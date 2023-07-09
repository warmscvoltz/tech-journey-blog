import './globals.css'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from './utils.module.scss'
import Link from 'next/link'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const inter = Inter({subsets: ['latin']})
const title = 'Luke\'s Site';
const description = 'This the Tech Journey template site';
const links = [
  {title: 'Pokemon', href: '/pokemon'}
];
const SocialLinks = {
  twitter: 'https://twitter.com/LukeDunscombe',
  github: 'https://github.com/ludu12',
  instagram: 'https://www.linkedin.com/in/luke-dunscombe-b9712a8b',
  email: 'mailto:luke@ludu.io'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-theme={'light'} className={'h-full'}>
      <body className={`${inter.className} flex flex-col h-full`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 mx-auto py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
