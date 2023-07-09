import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";


/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({weight: '300', subsets: ['latin']})
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
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col h-full`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
