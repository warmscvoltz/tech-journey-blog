### Change image on home page in `src/app/page.tsx`

Change the src link here to something fun.
- Go to [unsplash.com](https://unsplash.com)
- Find a photo
- Download image
- Save image to `/public/images/{name-of-file}`
- Change the imageUrl
```jsx
// Change this url to change the image!
const imageUrl = '/images/snorlax.jpg';
// to
const imageUrl = '/images/{name-of-file}';
```
