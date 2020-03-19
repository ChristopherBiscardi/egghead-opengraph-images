install:
	cd functions/gen-opengraph-image && npm i && npm run build
	cd functions/process-url && npm i