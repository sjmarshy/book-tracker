// Compiled by ClojureScript 0.0-3058 {}
goog.provide('book_tracker.book.components');
goog.require('cljs.core');
goog.require('book_tracker.appstate');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
book_tracker.book.components.text_color = "#e4f1fe";
book_tracker.book.components.font_size = "18px";
book_tracker.book.components.book_styles = {"color": book_tracker.book.components.text_color, "width": "100vw", "borderBottom": "1px solid #2c3e50", "justifyContent": "space-between", "padding": "0 0 0 15px", "display": "flex", "listStyle": "none", "backgroundColor": "#22313f", "height": "100px", "alignItems": "center", "clear": "both"};
book_tracker.book.components.book_button_styles = {"height": "100px", "backgroundColor": "#19B5FE", "border": "none", "fontSize": book_tracker.book.components.font_size, "padding": "5px", "cursor": "pointer", "width": "100px", "color": book_tracker.book.components.text_color, "marginLeft": "10px"};
book_tracker.book.components.book_title_styles = {"fontFamily": "sans-serif", "fontSize": book_tracker.book.components.font_size, "display": "inline-block"};
book_tracker.book.components.book = (function book_tracker$book$components$book(p__10929,owner){
var map__10941 = p__10929;
var map__10941__$1 = ((cljs.core.seq_QMARK_(map__10941))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10941):map__10941);
var book__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10941__$1,cljs.core.constant$keyword$_COLON_book);
var del = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10941__$1,cljs.core.constant$keyword$_COLON_del);
if(typeof book_tracker.book.components.t10942 !== 'undefined'){
} else {

/**
* @constructor
*/
book_tracker.book.components.t10942 = (function (del,map__10941,owner,p__10929,book,meta10943){
this.del = del;
this.map__10941 = map__10941;
this.owner = owner;
this.p__10929 = p__10929;
this.book = book;
this.meta10943 = meta10943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
book_tracker.book.components.t10942.prototype.om$core$IRender$ = true;

book_tracker.book.components.t10942.prototype.om$core$IRender$render$arity$1 = ((function (map__10941,map__10941__$1,book__$1,del){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__10945 = {"style": book_tracker.book.components.book_styles};
var G__10946 = (function (){var G__10948 = {"style": book_tracker.book.components.book_title_styles};
var G__10949 = cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(self__.book);
return React.DOM.span(G__10948,G__10949);
})();
var G__10947 = (function (){var G__10950 = {"onClick": ((function (G__10945,G__10946,___$1,map__10941,map__10941__$1,book__$1,del){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.del,self__.book);
});})(G__10945,G__10946,___$1,map__10941,map__10941__$1,book__$1,del))
, "style": book_tracker.book.components.book_button_styles};
var G__10951 = "x";
return React.DOM.button(G__10950,G__10951);
})();
return React.DOM.li(G__10945,G__10946,G__10947);
});})(map__10941,map__10941__$1,book__$1,del))
;

book_tracker.book.components.t10942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10941,map__10941__$1,book__$1,del){
return (function (_10944){
var self__ = this;
var _10944__$1 = this;
return self__.meta10943;
});})(map__10941,map__10941__$1,book__$1,del))
;

book_tracker.book.components.t10942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10941,map__10941__$1,book__$1,del){
return (function (_10944,meta10943__$1){
var self__ = this;
var _10944__$1 = this;
return (new book_tracker.book.components.t10942(self__.del,self__.map__10941,self__.owner,self__.p__10929,self__.book,meta10943__$1));
});})(map__10941,map__10941__$1,book__$1,del))
;

book_tracker.book.components.t10942.cljs$lang$type = true;

book_tracker.book.components.t10942.cljs$lang$ctorStr = "book-tracker.book.components/t10942";

book_tracker.book.components.t10942.cljs$lang$ctorPrWriter = ((function (map__10941,map__10941__$1,book__$1,del){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"book-tracker.book.components/t10942");
});})(map__10941,map__10941__$1,book__$1,del))
;

book_tracker.book.components.__GT_t10942 = ((function (map__10941,map__10941__$1,book__$1,del){
return (function book_tracker$book$components$book_$___GT_t10942(del__$1,map__10941__$2,owner__$1,p__10929__$1,book__$2,meta10943){
return (new book_tracker.book.components.t10942(del__$1,map__10941__$2,owner__$1,p__10929__$1,book__$2,meta10943));
});})(map__10941,map__10941__$1,book__$1,del))
;

}

return (new book_tracker.book.components.t10942(del,map__10941__$1,owner,p__10929,book__$1,cljs.core.PersistentArrayMap.EMPTY));
});
book_tracker.book.components.books_styles = {"padding": "0px", "width": "100vw", "flexWrap": "wrap", "display": "flex", "margin": (0)};
book_tracker.book.components.books = (function book_tracker$book$components$books(p__10952){
var map__10954 = p__10952;
var map__10954__$1 = ((cljs.core.seq_QMARK_(map__10954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10954):map__10954);
var del = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10954__$1,cljs.core.constant$keyword$_COLON_del);
var books__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10954__$1,cljs.core.constant$keyword$_COLON_books);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"style": book_tracker.book.components.books_styles},om.core.build_all.cljs$core$IFn$_invoke$arity$2(book_tracker.book.components.book,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10954,map__10954__$1,del,books__$1){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_del,del,cljs.core.constant$keyword$_COLON_book,x], null);
});})(map__10954,map__10954__$1,del,books__$1))
,books__$1)));
});
book_tracker.book.components.handle_book_form = (function book_tracker$book$components$handle_book_form(e,owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$_COLON_title,e.target.value);
});
book_tracker.book.components.clear_book_form = (function book_tracker$book$components$clear_book_form(owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$_COLON_title,"");
});
book_tracker.book.components.toggle_display_book_form = (function book_tracker$book$components$toggle_display_book_form(owner,state){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$_COLON_display,cljs.core.not(cljs.core.constant$keyword$_COLON_display.cljs$core$IFn$_invoke$arity$1(state)));
});
book_tracker.book.components.add_book_button_styles = {"color": book_tracker.book.components.text_color, "width": "100vw", "cursor": "pointer", "fontFamily": "sans-serif", "justifyContent": "center", "display": "flex", "fontSize": book_tracker.book.components.font_size, "backgroundColor": "#2ecc71", "height": "50px", "alignItems": "center"};
book_tracker.book.components.add_book_form = (function book_tracker$book$components$add_book_form(data,owner){
if(typeof book_tracker.book.components.t10973 !== 'undefined'){
} else {

/**
* @constructor
*/
book_tracker.book.components.t10973 = (function (owner,data,add_book_form,meta10974){
this.owner = owner;
this.data = data;
this.add_book_form = add_book_form;
this.meta10974 = meta10974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
book_tracker.book.components.t10973.prototype.om$core$IRenderState$ = true;

book_tracker.book.components.t10973.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var display = cljs.core.constant$keyword$_COLON_display.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(display)){
var G__10976 = {"style": {"padding": "5px"}};
var G__10977 = (function (){var G__10981 = {"onClick": ((function (G__10976,display,___$1){
return (function (){
return book_tracker.book.components.toggle_display_book_form(self__.owner,state);
});})(G__10976,display,___$1))
};
var G__10982 = "x";
return React.DOM.button(G__10981,G__10982);
})();
var G__10978 = (function (){var G__10983 = null;
var G__10984 = "Add Books";
return React.DOM.h4(G__10983,G__10984);
})();
var G__10979 = (function (){var G__10985 = {"onChange": ((function (G__10976,G__10977,G__10978,display,___$1){
return (function (p1__10955_SHARP_){
return book_tracker.book.components.handle_book_form(p1__10955_SHARP_,self__.owner);
});})(G__10976,G__10977,G__10978,display,___$1))
, "value": cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(state), "style": {"marginRight": "5px"}, "type": "input"};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__10985) : om.dom.input.call(null,G__10985));
})();
var G__10980 = (function (){var G__10986 = {"onClick": ((function (G__10976,G__10977,G__10978,G__10979,display,___$1){
return (function (){
book_tracker.appstate.add_book(self__.data,cljs.core.constant$keyword$_COLON_title.cljs$core$IFn$_invoke$arity$1(state));

return book_tracker.book.components.clear_book_form(self__.owner);
});})(G__10976,G__10977,G__10978,G__10979,display,___$1))
};
var G__10987 = "add book";
return React.DOM.button(G__10986,G__10987);
})();
return React.DOM.div(G__10976,G__10977,G__10978,G__10979,G__10980);
} else {
var G__10988 = {"onClick": ((function (display,___$1){
return (function (){
return book_tracker.book.components.toggle_display_book_form(self__.owner,state);
});})(display,___$1))
, "style": book_tracker.book.components.add_book_button_styles};
var G__10989 = "Add Book";
return React.DOM.div(G__10988,G__10989);
}
});

book_tracker.book.components.t10973.prototype.om$core$IInitState$ = true;

book_tracker.book.components.t10973.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_title,"",cljs.core.constant$keyword$_COLON_display,false], null);
});

book_tracker.book.components.t10973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10975){
var self__ = this;
var _10975__$1 = this;
return self__.meta10974;
});

book_tracker.book.components.t10973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10975,meta10974__$1){
var self__ = this;
var _10975__$1 = this;
return (new book_tracker.book.components.t10973(self__.owner,self__.data,self__.add_book_form,meta10974__$1));
});

book_tracker.book.components.t10973.cljs$lang$type = true;

book_tracker.book.components.t10973.cljs$lang$ctorStr = "book-tracker.book.components/t10973";

book_tracker.book.components.t10973.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"book-tracker.book.components/t10973");
});

book_tracker.book.components.__GT_t10973 = (function book_tracker$book$components$add_book_form_$___GT_t10973(owner__$1,data__$1,add_book_form__$1,meta10974){
return (new book_tracker.book.components.t10973(owner__$1,data__$1,add_book_form__$1,meta10974));
});

}

return (new book_tracker.book.components.t10973(owner,data,book_tracker$book$components$add_book_form,cljs.core.PersistentArrayMap.EMPTY));
});
