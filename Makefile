install:
	mkdir dist
	cp _redirects dist/
	cd functions/gen-opengraph-image && npm ci && npm run build
	cd functions/process-url && npm i

