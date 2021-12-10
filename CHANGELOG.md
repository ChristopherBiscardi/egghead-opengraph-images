- Netlify changed their handling of functions, specifically around \_\_dirname.

  ## Files affected:

  - ./functions/gen-opengraph-image/gen-opengraph-image.js

- Add README.md and .gitignore (credit goes to alanwsmith)

  ## Files affected:

  - ./README.md (added)
  - ./.gitignore (added)
  - ./img-1.png (added)

- Upgrade packages under gen-opengraph-image. Modernize rollup config.
  ## Files affected:
  - ./Makefile
  - ./functions/gen-opengraph-image/.babelrc (deleted)
  - ./functions/gen-opengraph-image/gen-opengraph-image.js
  - ./functions/gen-opengraph-image/src/image.js
  - ./functions/gen-opengraph-image/package.json
  - ./functions/gen-opengraph-image/package-lock.json (added)
  - ./functions/gen-opengraph-image/rollup.config.js
  - ./functions/gen-opengraph-image/yarn.lock (deleted)
