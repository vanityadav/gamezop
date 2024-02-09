# [Gamezop Live](https://vanit-gamezop.vercel.app)

Next.js App with:

- Typescript
- TailwindCSS
- Bun (package manager)

## Running the project locally

Run the development server:

Note: Update the API_URL in the .env file

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Notes

- Every page is using SSR and all the webpages are fully dynamic. (No SSG on any page)

- For Filtering and Sorting, I am calling all the data them applying js to get the data.(So, don't test this with large amount of data ;-)

#### The initial R&D is linked in [Excalidraw file](https://excalidraw.com/#room=b73d3270f0590d61fd00,PaMkSAGZpTRpp_pNq3GPDA)

## Pending Work

- Loaders/Skelton for all pages
- Searching implementation on the FE
- PWA Service Workers
