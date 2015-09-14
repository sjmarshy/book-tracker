// Compiled by ClojureScript 0.0-3058 {}
goog.provide('book_tracker.appstate');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('book_tracker.localstorage');
goog.require('om.core');
if(typeof book_tracker.appstate.app_state !== 'undefined'){
} else {
book_tracker.appstate.app_state = (function (){var G__10877 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_books,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$_COLON_delete_books,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10877) : cljs.core.atom.call(null,G__10877));
})();
}
book_tracker.appstate.save_key = "sjmarshy::booktracker";
book_tracker.appstate.save_state = (function book_tracker$appstate$save_state(app){
console.log("Saving");

return book_tracker.localstorage.set_local(book_tracker.appstate.save_key,JSON.stringify(cljs.core.clj__GT_js(cljs.core.constant$keyword$_COLON_books.cljs$core$IFn$_invoke$arity$1(app))));
});
book_tracker.appstate.add_book = (function book_tracker$appstate$add_book(app,title){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$_COLON_books,(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_books.cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_title,title], null));
}));
});
book_tracker.appstate.load_state = (function book_tracker$appstate$load_state(app){
console.log("loading state...");

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$_COLON_books,(function (){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(book_tracker.localstorage.get_local(book_tracker.appstate.save_key)),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_keywordize_keys,true], 0));
}));

return console.log("state loaded...");
});
book_tracker.appstate.app_loop = (function book_tracker$appstate$app_loop(app){
var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__){
return (function (state_10911){
var state_val_10912 = (state_10911[(1)]);
if((state_val_10912 === (4))){
var inst_10904 = (state_10911[(2)]);
var inst_10905 = (function (){var book = inst_10904;
return ((function (book,inst_10904,state_val_10912,c__6463__auto__){
return (function (xs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (book,inst_10904,state_val_10912,c__6463__auto__){
return (function (p1__10878_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(book,p1__10878_SHARP_);
});})(book,inst_10904,state_val_10912,c__6463__auto__))
,xs));
});
;})(book,inst_10904,state_val_10912,c__6463__auto__))
})();
var inst_10906 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$_COLON_books,inst_10905);
var state_10911__$1 = (function (){var statearr_10913 = state_10911;
(statearr_10913[(7)] = inst_10906);

return statearr_10913;
})();
var statearr_10914_10923 = state_10911__$1;
(statearr_10914_10923[(2)] = null);

(statearr_10914_10923[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10912 === (3))){
var inst_10909 = (state_10911[(2)]);
var state_10911__$1 = state_10911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10911__$1,inst_10909);
} else {
if((state_val_10912 === (2))){
var inst_10902 = cljs.core.constant$keyword$_COLON_delete_books.cljs$core$IFn$_invoke$arity$1(app);
var state_10911__$1 = state_10911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10911__$1,(4),inst_10902);
} else {
if((state_val_10912 === (1))){
var state_10911__$1 = state_10911;
var statearr_10915_10924 = state_10911__$1;
(statearr_10915_10924[(2)] = null);

(statearr_10915_10924[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
});})(c__6463__auto__))
;
return ((function (switch__6383__auto__,c__6463__auto__){
return (function() {
var book_tracker$appstate$app_loop_$_state_machine__6384__auto__ = null;
var book_tracker$appstate$app_loop_$_state_machine__6384__auto____0 = (function (){
var statearr_10919 = [null,null,null,null,null,null,null,null];
(statearr_10919[(0)] = book_tracker$appstate$app_loop_$_state_machine__6384__auto__);

(statearr_10919[(1)] = (1));

return statearr_10919;
});
var book_tracker$appstate$app_loop_$_state_machine__6384__auto____1 = (function (state_10911){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_10911);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e10920){if((e10920 instanceof Object)){
var ex__6387__auto__ = e10920;
var statearr_10921_10925 = state_10911;
(statearr_10921_10925[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10911);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e10920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__10926 = state_10911;
state_10911 = G__10926;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
book_tracker$appstate$app_loop_$_state_machine__6384__auto__ = function(state_10911){
switch(arguments.length){
case 0:
return book_tracker$appstate$app_loop_$_state_machine__6384__auto____0.call(this);
case 1:
return book_tracker$appstate$app_loop_$_state_machine__6384__auto____1.call(this,state_10911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
book_tracker$appstate$app_loop_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = book_tracker$appstate$app_loop_$_state_machine__6384__auto____0;
book_tracker$appstate$app_loop_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = book_tracker$appstate$app_loop_$_state_machine__6384__auto____1;
return book_tracker$appstate$app_loop_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_10922 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_10922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_10922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__))
);

return c__6463__auto__;
});
