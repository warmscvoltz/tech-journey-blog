### Change image on home page in `src/app/page.tsx`

Change the src link here to something fun.
- One option is [unsplash.com](https://unsplash.com)
- Find a photo
- Get the id and replace the one in our link (i.e. `jJT1cnE4SZ8`)
- Hint: the id can be found by copying the share link. Ask for help if you can't figure it out
```jsx
<div className={'my-4'}>
   <Image className={'rounded'} src={'https://source.unsplash.com/jJT1cnE4SZ8'} alt={'Mallorca'} width={500}
          height={500}/>
</div>
```
