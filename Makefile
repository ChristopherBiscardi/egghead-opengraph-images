install:
	cd functions/gen-opengraph-image && npm i && npm update --depth 5 @babel/compat-data && npm run build
	cd functions/process-url && npm i
