build:
	lit -code ./*.lit --out-dir=./
	mv ./*.cljs ../src/cljs/book_tracker

docs:
	lit -html ./*.lit --out-dir=../docs

watch:
	watchman watch ./
	watchman -- trigger ./ remake '*.lit' -- make build
