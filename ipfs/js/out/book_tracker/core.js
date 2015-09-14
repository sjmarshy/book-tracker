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
if(typeof book_tracker.core.t11020 !== 'undefined'){
} else {

/**
* @constructor
*/
book_tracker.core.t11020 = (function (owner,app,main,meta11021){
this.owner = owner;
this.app = app;
this.main = main;
this.meta11021 = meta11021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
book_tracker.core.t11020.prototype.om$core$IRender$ = true;

book_tracker.core.t11020.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11023 = null;
var G__11024 = om.core.build.cljs$core$IFn$_invoke$arity$2(book_tracker.book.components.add_book_form,self__.app);
var G__11025 = book_tracker.book.components.books(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_books,cljs.core.constant$keyword$_COLON_books.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$_COLON_del,cljs.core.constant$keyword$_COLON_delete_books.cljs$core$IFn$_invoke$arity$1(self__.app)], null));
return React.DOM.div(G__11023,G__11024,G__11025);
});

book_tracker.core.t11020.prototype.om$core$IWillMount$ = true;

book_tracker.core.t11020.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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
return (function (state_11036){
var state_val_11037 = (state_11036[(1)]);
if((state_val_11037 === (4))){
var inst_11029 = (state_11036[(2)]);
var inst_11030 = om.core.get_props.cljs$core$IFn$_invoke$arity$1(self__.owner);
var inst_11031 = book_tracker.appstate.save_state(inst_11030);
var state_11036__$1 = (function (){var statearr_11038 = state_11036;
(statearr_11038[(7)] = inst_11031);

(statearr_11038[(8)] = inst_11029);

return statearr_11038;
})();
var statearr_11039_11048 = state_11036__$1;
(statearr_11039_11048[(2)] = null);

(statearr_11039_11048[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11037 === (3))){
var inst_11034 = (state_11036[(2)]);
var state_11036__$1 = state_11036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11036__$1,inst_11034);
} else {
if((state_val_11037 === (2))){
var inst_11027 = cljs.core.async.timeout((5000));
var state_11036__$1 = state_11036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11036__$1,(4),inst_11027);
} else {
if((state_val_11037 === (1))){
var state_11036__$1 = state_11036;
var statearr_11040_11049 = state_11036__$1;
(statearr_11040_11049[(2)] = null);

(statearr_11040_11049[(1)] = (2));


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
var statearr_11044 = [null,null,null,null,null,null,null,null,null];
(statearr_11044[(0)] = book_tracker$core$main_$_state_machine__6384__auto__);

(statearr_11044[(1)] = (1));

return statearr_11044;
});
var book_tracker$core$main_$_state_machine__6384__auto____1 = (function (state_11036){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_11036);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e11045){if((e11045 instanceof Object)){
var ex__6387__auto__ = e11045;
var statearr_11046_11050 = state_11036;
(statearr_11046_11050[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11036);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11051 = state_11036;
state_11036 = G__11051;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
book_tracker$core$main_$_state_machine__6384__auto__ = function(state_11036){
switch(arguments.length){
case 0:
return book_tracker$core$main_$_state_machine__6384__auto____0.call(this);
case 1:
return book_tracker$core$main_$_state_machine__6384__auto____1.call(this,state_11036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
book_tracker$core$main_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = book_tracker$core$main_$_state_machine__6384__auto____0;
book_tracker$core$main_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = book_tracker$core$main_$_state_machine__6384__auto____1;
return book_tracker$core$main_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__,___$1))
})();
var state__6465__auto__ = (function (){var statearr_11047 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_11047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_11047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__,___$1))
);

return c__6463__auto__;
})(),(500));

return book_tracker.appstate.app_loop(self__.app);
});

book_tracker.core.t11020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11022){
var self__ = this;
var _11022__$1 = this;
return self__.meta11021;
});

book_tracker.core.t11020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11022,meta11021__$1){
var self__ = this;
var _11022__$1 = this;
return (new book_tracker.core.t11020(self__.owner,self__.app,self__.main,meta11021__$1));
});

book_tracker.core.t11020.cljs$lang$type = true;

book_tracker.core.t11020.cljs$lang$ctorStr = "book-tracker.core/t11020";

book_tracker.core.t11020.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"book-tracker.core/t11020");
});

book_tracker.core.__GT_t11020 = (function book_tracker$core$main_$___GT_t11020(owner__$1,app__$1,main__$1,meta11021){
return (new book_tracker.core.t11020(owner__$1,app__$1,main__$1,meta11021));
});

}

return (new book_tracker.core.t11020(owner,app,book_tracker$core$main,cljs.core.PersistentArrayMap.EMPTY));
}),book_tracker.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_target,document.getElementById("app")], null));
});
