.PHONY: app
app: clean copy build/app.js

tsfiles = $(shell find src -name  '*.ts')
build/app.js: $(tsfiles)
	mkdir -p build
	tsc --sourceMap --out build/app.js src/app.ts

.PHONY: clean
clean:
	rm -Rf build

.PHONY: copy
copy: src/index.html
	mkdir -p build
	cp src/index.html build/index.html
