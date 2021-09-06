# Details

The following ENV variables need to be set

- CLOUDINARY_BASE_OG_IMAGE - The sub-path for the 1x1 transparent image you upload to Cloudinary (e.g. `v12345/og-images/img-1.png`)
- CLOUDINARY_CLOUD - The name from your cloud account in Cloudinary
- CLOUDINARY_KEY - The key from your Cloudinary dashboard home page
- CLOUDINARY_SECRET - The secret from your Cloudinary dashboard home page
- GEN_OPENGRAPH_IMAGE_BASE_URL - The full URL for the `gen-opengraph-image` call (e.g. `https://random-words-12345.netlify.app/.netlify/functions/gen-opengraph-image`). This needs to be a publicly accessible instance so Cloudinary can get to it.
-
