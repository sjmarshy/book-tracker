build:
	lit -code ./lit-files/*.lit --out-dir=./lit-files
	mv ./lit-files/*.cljs ./src/cljs/book_tracker

docs:
	lit -html ./lit-files/*.lit
	mv ./lit-files/*.html ./docs
