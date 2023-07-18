### Change meta data in `src/app/layout.tsx`

Find this block of code and change things.

```typescript
/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({subsets: ['latin']})
const title = 'Luke\'s Site';
const description = 'This the Tech Journey template site';
const links = [
  {title: 'Pokemon', href: '/pokemon'},
  {title: 'Rick and Morty', href: '/rick-and-morty'}
];
const SocialLinks = {
  twitter: 'https://twitter.com/LukeDunscombe',
  github: 'https://github.com/ludu12',
  instagram: 'https://www.linkedin.com/in/luke-dunscombe-b9712a8b',
  email: 'mailto:luke@ludu.io'
}
```

In the `/public` folder you can change the avatar image and favicon.
