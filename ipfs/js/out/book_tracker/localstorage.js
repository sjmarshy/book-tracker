// Compiled by ClojureScript 0.0-3058 {}
goog.provide('book_tracker.localstorage');
goog.require('cljs.core');
book_tracker.localstorage.local_storage = window.localStorage;
book_tracker.localstorage.set_local = (function book_tracker$localstorage$set_local(key,val){
return book_tracker.localstorage.local_storage.setItem(key,val);
});
book_tracker.localstorage.get_local = (function book_tracker$localstorage$get_local(key){
return book_tracker.localstorage.local_storage.getItem(key);
});
