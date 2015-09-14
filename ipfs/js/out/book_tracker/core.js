// Compiled by ClojureScript 0.0-3058 {}
goog.provide('book_tracker.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('book_tracker.appstate');
goog.require('book_tracker.book.components');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_();
book_tracker.core.main = (function book_tracker$core$main(){
return om.core.root((function (app,owner){
if(typeof book_tracker.core.t11028 !== 'undefined'){
} else {

/**
* @constructor
*/
book_tracker.core.t11028 = (function (owner,app,main,meta11029){
this.owner = owner;
this.app = app;
this.main = main;
this.meta11029 = meta11029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
book_tracker.core.t11028.prototype.om$core$IRender$ = true;

book_tracker.core.t11028.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11031 = null;
var G__11032 = om.core.build.cljs$core$IFn$_invoke$arity$2(book_tracker.book.components.add_book_form,self__.app);
var G__11033 = book_tracker.book.components.books(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_books,cljs.core.constant$keyword$_COLON_books.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$_COLON_del,cljs.core.constant$keyword$_COLON_delete_books.cljs$core$IFn$_invoke$arity$1(self__.app)], null));
return React.DOM.div(G__11031,G__11032,G__11033);
});

book_tracker.core.t11028.prototype.om$core$IWillMount$ = true;

book_tracker.core.t11028.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
window.setTimeout(((function (___$1){
return (function (){
return book_tracker.appstate.load_state(om.core.get_props.cljs$core$IFn$_invoke$arity$1(self__.owner));
});})(___$1))
,(function (){var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__,___$1){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__,___$1){
return (function (state_11044){
var state_val_11045 = (state_11044[(1)]);
if((state_val_11045 === (4))){
var inst_11037 = (state_11044[(2)]);
var inst_11038 = om.core.get_props.cljs$core$IFn$_invoke$arity$1(self__.owner);
var inst_11039 = book_tracker.appstate.save_state(inst_11038);
var state_11044__$1 = (function (){var statearr_11046 = state_11044;
(statearr_11046[(7)] = inst_11039);

(statearr_11046[(8)] = inst_11037);

return statearr_11046;
})();
var statearr_11047_11056 = state_11044__$1;
(statearr_11047_11056[(2)] = null);

(statearr_11047_11056[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11045 === (3))){
var inst_11042 = (state_11044[(2)]);
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11044__$1,inst_11042);
} else {
if((state_val_11045 === (2))){
var inst_11035 = cljs.core.async.timeout((5000));
var state_11044__$1 = state_11044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11044__$1,(4),inst_11035);
} else {
if((state_val_11045 === (1))){
var state_11044__$1 = state_11044;
var statearr_11048_11057 = state_11044__$1;
(statearr_11048_11057[(2)] = null);

(statearr_11048_11057[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
});})(c__6463__auto__,___$1))
;
return ((function (switch__6383__auto__,c__6463__auto__,___$1){
return (function() {
var book_tracker$core$main_$_state_machine__6384__auto__ = null;
var book_tracker$core$main_$_state_machine__6384__auto____0 = (function (){
var statearr_11052 = [null,null,null,null,null,null,null,null,null];
(statearr_11052[(0)] = book_tracker$core$main_$_state_machine__6384__auto__);

(statearr_11052[(1)] = (1));

return statearr_11052;
});
var book_tracker$core$main_$_state_machine__6384__auto____1 = (function (state_11044){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_11044);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e11053){if((e11053 instanceof Object)){
var ex__6387__auto__ = e11053;
var statearr_11054_11058 = state_11044;
(statearr_11054_11058[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11044);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11059 = state_11044;
state_11044 = G__11059;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
book_tracker$core$main_$_state_machine__6384__auto__ = function(state_11044){
switch(arguments.length){
case 0:
return book_tracker$core$main_$_state_machine__6384__auto____0.call(this);
case 1:
return book_tracker$core$main_$_state_machine__6384__auto____1.call(this,state_11044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
book_tracker$core$main_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = book_tracker$core$main_$_state_machine__6384__auto____0;
book_tracker$core$main_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = book_tracker$core$main_$_state_machine__6384__auto____1;
return book_tracker$core$main_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__,___$1))
})();
var state__6465__auto__ = (function (){var statearr_11055 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_11055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_11055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__,___$1))
);

return c__6463__auto__;
})(),(500));

return book_tracker.appstate.app_loop(self__.app);
});

book_tracker.core.t11028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11030){
var self__ = this;
var _11030__$1 = this;
return self__.meta11029;
});

book_tracker.core.t11028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11030,meta11029__$1){
var self__ = this;
var _11030__$1 = this;
return (new book_tracker.core.t11028(self__.owner,self__.app,self__.main,meta11029__$1));
});

book_tracker.core.t11028.cljs$lang$type = true;

book_tracker.core.t11028.cljs$lang$ctorStr = "book-tracker.core/t11028";

book_tracker.core.t11028.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"book-tracker.core/t11028");
});

book_tracker.core.__GT_t11028 = (function book_tracker$core$main_$___GT_t11028(owner__$1,app__$1,main__$1,meta11029){
return (new book_tracker.core.t11028(owner__$1,app__$1,main__$1,meta11029));
});

}

return (new book_tracker.core.t11028(owner,app,book_tracker$core$main,cljs.core.PersistentArrayMap.EMPTY));
}),book_tracker.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_target,document.getElementById("app")], null));
});
