install :
	npm install

run:
	npx babel-node src/bin/brain-games.js

publish:
	--dry -run

lint:
	npx eslint

build:
	npm run build && npm link