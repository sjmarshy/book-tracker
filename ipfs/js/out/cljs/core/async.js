// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17192 = (function (f,fn_handler,meta17193){
this.f = f;
this.fn_handler = fn_handler;
this.meta17193 = meta17193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17192.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17194){
var self__ = this;
var _17194__$1 = this;
return self__.meta17193;
});

cljs.core.async.t17192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17194,meta17193__$1){
var self__ = this;
var _17194__$1 = this;
return (new cljs.core.async.t17192(self__.f,self__.fn_handler,meta17193__$1));
});

cljs.core.async.t17192.cljs$lang$type = true;

cljs.core.async.t17192.cljs$lang$ctorStr = "cljs.core.async/t17192";

cljs.core.async.t17192.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17192");
});

cljs.core.async.__GT_t17192 = (function cljs$core$async$fn_handler_$___GT_t17192(f__$1,fn_handler__$1,meta17193){
return (new cljs.core.async.t17192(f__$1,fn_handler__$1,meta17193));
});

}

return (new cljs.core.async.t17192(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17196 = buff;
if(G__17196){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17196.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17196.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17196);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17196);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17213 = (function (){var G__17210 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17210) : cljs.core.deref.call(null,G__17210));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17211_17214 = val_17213;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17211_17214) : fn1.call(null,G__17211_17214));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17213,ret){
return (function (){
var G__17212 = val_17213;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17212) : fn1.call(null,G__17212));
});})(val_17213,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__17223 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17223) : cljs.core.deref.call(null,G__17223));
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__17224 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17224) : cljs.core.deref.call(null,G__17224));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17225_17227 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17225_17227) : fn1.call(null,G__17225_17227));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17226 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17226) : fn1.call(null,G__17226));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4963__auto___17228 = n;
var x_17229 = (0);
while(true){
if((x_17229 < n__4963__auto___17228)){
(a[x_17229] = (0));

var G__17230 = (x_17229 + (1));
x_17229 = G__17230;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17231 = (i + (1));
i = G__17231;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17239 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17239) : cljs.core.atom.call(null,G__17239));
})();
if(typeof cljs.core.async.t17240 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17240 = (function (flag,alt_flag,meta17241){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17241 = meta17241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17240.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17243 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17243) : cljs.core.deref.call(null,G__17243));
});})(flag))
;

cljs.core.async.t17240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17244_17246 = self__.flag;
var G__17245_17247 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17244_17246,G__17245_17247) : cljs.core.reset_BANG_.call(null,G__17244_17246,G__17245_17247));

return true;
});})(flag))
;

cljs.core.async.t17240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17242){
var self__ = this;
var _17242__$1 = this;
return self__.meta17241;
});})(flag))
;

cljs.core.async.t17240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17242,meta17241__$1){
var self__ = this;
var _17242__$1 = this;
return (new cljs.core.async.t17240(self__.flag,self__.alt_flag,meta17241__$1));
});})(flag))
;

cljs.core.async.t17240.cljs$lang$type = true;

cljs.core.async.t17240.cljs$lang$ctorStr = "cljs.core.async/t17240";

cljs.core.async.t17240.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17240");
});})(flag))
;

cljs.core.async.__GT_t17240 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17240(flag__$1,alt_flag__$1,meta17241){
return (new cljs.core.async.t17240(flag__$1,alt_flag__$1,meta17241));
});})(flag))
;

}

return (new cljs.core.async.t17240(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17251 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17251 = (function (cb,flag,alt_handler,meta17252){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17252 = meta17252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17253){
var self__ = this;
var _17253__$1 = this;
return self__.meta17252;
});

cljs.core.async.t17251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17253,meta17252__$1){
var self__ = this;
var _17253__$1 = this;
return (new cljs.core.async.t17251(self__.cb,self__.flag,self__.alt_handler,meta17252__$1));
});

cljs.core.async.t17251.cljs$lang$type = true;

cljs.core.async.t17251.cljs$lang$ctorStr = "cljs.core.async/t17251";

cljs.core.async.t17251.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17251");
});

cljs.core.async.__GT_t17251 = (function cljs$core$async$alt_handler_$___GT_t17251(cb__$1,flag__$1,alt_handler__$1,meta17252){
return (new cljs.core.async.t17251(cb__$1,flag__$1,alt_handler__$1,meta17252));
});

}

return (new cljs.core.async.t17251(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$_COLON_priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17261 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17261) : port.call(null,G__17261));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17262 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17262) : port.call(null,G__17262));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17254_SHARP_){
var G__17263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17254_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17263) : fret.call(null,G__17263));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17255_SHARP_){
var G__17264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17255_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17264) : fret.call(null,G__17264));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17265 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17265) : cljs.core.deref.call(null,G__17265));
})(),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17266 = (i + (1));
i = G__17266;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4076__auto__ = ret;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$_COLON_default)){
var temp__4126__auto__ = (function (){var and__4064__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4064__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4064__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$_COLON_default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__17267){
var map__17269 = p__17267;
var map__17269__$1 = ((cljs.core.seq_QMARK_(map__17269))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17269):map__17269);
var opts = map__17269__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__17267 = null;
if (arguments.length > 1) {
var G__17270__i = 0, G__17270__a = new Array(arguments.length -  1);
while (G__17270__i < G__17270__a.length) {G__17270__a[G__17270__i] = arguments[G__17270__i + 1]; ++G__17270__i;}
  p__17267 = new cljs.core.IndexedSeq(G__17270__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__17267);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__17271){
var ports = cljs.core.first(arglist__17271);
var p__17267 = cljs.core.rest(arglist__17271);
return cljs$core$async$alts_BANG___delegate(ports,p__17267);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__6463__auto___17369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17369){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17369){
return (function (state_17345){
var state_val_17346 = (state_17345[(1)]);
if((state_val_17346 === (7))){
var inst_17341 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17347_17370 = state_17345__$1;
(statearr_17347_17370[(2)] = inst_17341);

(statearr_17347_17370[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (1))){
var state_17345__$1 = state_17345;
var statearr_17348_17371 = state_17345__$1;
(statearr_17348_17371[(2)] = null);

(statearr_17348_17371[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (4))){
var inst_17324 = (state_17345[(7)]);
var inst_17324__$1 = (state_17345[(2)]);
var inst_17325 = (inst_17324__$1 == null);
var state_17345__$1 = (function (){var statearr_17349 = state_17345;
(statearr_17349[(7)] = inst_17324__$1);

return statearr_17349;
})();
if(cljs.core.truth_(inst_17325)){
var statearr_17350_17372 = state_17345__$1;
(statearr_17350_17372[(1)] = (5));

} else {
var statearr_17351_17373 = state_17345__$1;
(statearr_17351_17373[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (13))){
var state_17345__$1 = state_17345;
var statearr_17352_17374 = state_17345__$1;
(statearr_17352_17374[(2)] = null);

(statearr_17352_17374[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (6))){
var inst_17324 = (state_17345[(7)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(11),to,inst_17324);
} else {
if((state_val_17346 === (3))){
var inst_17343 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17345__$1,inst_17343);
} else {
if((state_val_17346 === (12))){
var state_17345__$1 = state_17345;
var statearr_17353_17375 = state_17345__$1;
(statearr_17353_17375[(2)] = null);

(statearr_17353_17375[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (2))){
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17345__$1,(4),from);
} else {
if((state_val_17346 === (11))){
var inst_17334 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17334)){
var statearr_17354_17376 = state_17345__$1;
(statearr_17354_17376[(1)] = (12));

} else {
var statearr_17355_17377 = state_17345__$1;
(statearr_17355_17377[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (9))){
var state_17345__$1 = state_17345;
var statearr_17356_17378 = state_17345__$1;
(statearr_17356_17378[(2)] = null);

(statearr_17356_17378[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (5))){
var state_17345__$1 = state_17345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17357_17379 = state_17345__$1;
(statearr_17357_17379[(1)] = (8));

} else {
var statearr_17358_17380 = state_17345__$1;
(statearr_17358_17380[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (14))){
var inst_17339 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17359_17381 = state_17345__$1;
(statearr_17359_17381[(2)] = inst_17339);

(statearr_17359_17381[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (10))){
var inst_17331 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17360_17382 = state_17345__$1;
(statearr_17360_17382[(2)] = inst_17331);

(statearr_17360_17382[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17346 === (8))){
var inst_17328 = cljs.core.async.close_BANG_(to);
var state_17345__$1 = state_17345;
var statearr_17361_17383 = state_17345__$1;
(statearr_17361_17383[(2)] = inst_17328);

(statearr_17361_17383[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___17369))
;
return ((function (switch__6383__auto__,c__6463__auto___17369){
return (function() {
var cljs$core$async$pipe_$_state_machine__6384__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6384__auto____0 = (function (){
var statearr_17365 = [null,null,null,null,null,null,null,null];
(statearr_17365[(0)] = cljs$core$async$pipe_$_state_machine__6384__auto__);

(statearr_17365[(1)] = (1));

return statearr_17365;
});
var cljs$core$async$pipe_$_state_machine__6384__auto____1 = (function (state_17345){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17345);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object)){
var ex__6387__auto__ = e17366;
var statearr_17367_17384 = state_17345;
(statearr_17367_17384[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17345);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17385 = state_17345;
state_17345 = G__17385;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6384__auto__ = function(state_17345){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6384__auto____1.call(this,state_17345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6384__auto____0;
cljs$core$async$pipe_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6384__auto____1;
return cljs$core$async$pipe_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17369))
})();
var state__6465__auto__ = (function (){var statearr_17368 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17369);

return statearr_17368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17369))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17571){
var vec__17572 = p__17571;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17572,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17572,(1),null);
var job = vec__17572;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__6463__auto___17756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results){
return (function (state_17577){
var state_val_17578 = (state_17577[(1)]);
if((state_val_17578 === (2))){
var inst_17574 = (state_17577[(2)]);
var inst_17575 = cljs.core.async.close_BANG_(res);
var state_17577__$1 = (function (){var statearr_17579 = state_17577;
(statearr_17579[(7)] = inst_17574);

return statearr_17579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17577__$1,inst_17575);
} else {
if((state_val_17578 === (1))){
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results))
;
return ((function (switch__6383__auto__,c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17583 = [null,null,null,null,null,null,null,null];
(statearr_17583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17583[(1)] = (1));

return statearr_17583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17577){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17577);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17584){if((e17584 instanceof Object)){
var ex__6387__auto__ = e17584;
var statearr_17585_17757 = state_17577;
(statearr_17585_17757[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17577);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17758 = state_17577;
state_17577 = G__17758;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results))
})();
var state__6465__auto__ = (function (){var statearr_17586 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17756);

return statearr_17586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17756,res,vec__17572,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17587){
var vec__17588 = p__17587;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17588,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17588,(1),null);
var job = vec__17588;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__17589_17759 = v;
var G__17590_17760 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__17589_17759,G__17590_17760) : xf.call(null,G__17589_17759,G__17590_17760));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4963__auto___17761 = n;
var __17762 = (0);
while(true){
if((__17762 < n__4963__auto___17761)){
var G__17591_17763 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17591_17763) {
case "async":
var c__6463__auto___17765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17762,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (__17762,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function (state_17604){
var state_val_17605 = (state_17604[(1)]);
if((state_val_17605 === (7))){
var inst_17600 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
var statearr_17606_17766 = state_17604__$1;
(statearr_17606_17766[(2)] = inst_17600);

(statearr_17606_17766[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17605 === (6))){
var state_17604__$1 = state_17604;
var statearr_17607_17767 = state_17604__$1;
(statearr_17607_17767[(2)] = null);

(statearr_17607_17767[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17605 === (5))){
var state_17604__$1 = state_17604;
var statearr_17608_17768 = state_17604__$1;
(statearr_17608_17768[(2)] = null);

(statearr_17608_17768[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17605 === (4))){
var inst_17594 = (state_17604[(2)]);
var inst_17595 = async(inst_17594);
var state_17604__$1 = state_17604;
if(cljs.core.truth_(inst_17595)){
var statearr_17609_17769 = state_17604__$1;
(statearr_17609_17769[(1)] = (5));

} else {
var statearr_17610_17770 = state_17604__$1;
(statearr_17610_17770[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17605 === (3))){
var inst_17602 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17604__$1,inst_17602);
} else {
if((state_val_17605 === (2))){
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17604__$1,(4),jobs);
} else {
if((state_val_17605 === (1))){
var state_17604__$1 = state_17604;
var statearr_17611_17771 = state_17604__$1;
(statearr_17611_17771[(2)] = null);

(statearr_17611_17771[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17762,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
;
return ((function (__17762,switch__6383__auto__,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17615 = [null,null,null,null,null,null,null];
(statearr_17615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17615[(1)] = (1));

return statearr_17615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17604){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17604);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17616){if((e17616 instanceof Object)){
var ex__6387__auto__ = e17616;
var statearr_17617_17772 = state_17604;
(statearr_17617_17772[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17604);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17773 = state_17604;
state_17604 = G__17773;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(__17762,switch__6383__auto__,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17618 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17765);

return statearr_17618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(__17762,c__6463__auto___17765,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
);


break;
case "compute":
var c__6463__auto___17774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17762,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (__17762,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function (state_17631){
var state_val_17632 = (state_17631[(1)]);
if((state_val_17632 === (7))){
var inst_17627 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17633_17775 = state_17631__$1;
(statearr_17633_17775[(2)] = inst_17627);

(statearr_17633_17775[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17632 === (6))){
var state_17631__$1 = state_17631;
var statearr_17634_17776 = state_17631__$1;
(statearr_17634_17776[(2)] = null);

(statearr_17634_17776[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17632 === (5))){
var state_17631__$1 = state_17631;
var statearr_17635_17777 = state_17631__$1;
(statearr_17635_17777[(2)] = null);

(statearr_17635_17777[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17632 === (4))){
var inst_17621 = (state_17631[(2)]);
var inst_17622 = process(inst_17621);
var state_17631__$1 = state_17631;
if(cljs.core.truth_(inst_17622)){
var statearr_17636_17778 = state_17631__$1;
(statearr_17636_17778[(1)] = (5));

} else {
var statearr_17637_17779 = state_17631__$1;
(statearr_17637_17779[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17632 === (3))){
var inst_17629 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17631__$1,inst_17629);
} else {
if((state_val_17632 === (2))){
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17631__$1,(4),jobs);
} else {
if((state_val_17632 === (1))){
var state_17631__$1 = state_17631;
var statearr_17638_17780 = state_17631__$1;
(statearr_17638_17780[(2)] = null);

(statearr_17638_17780[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17762,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
;
return ((function (__17762,switch__6383__auto__,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17642 = [null,null,null,null,null,null,null];
(statearr_17642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17642[(1)] = (1));

return statearr_17642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17631){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17631);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17643){if((e17643 instanceof Object)){
var ex__6387__auto__ = e17643;
var statearr_17644_17781 = state_17631;
(statearr_17644_17781[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17631);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17782 = state_17631;
state_17631 = G__17782;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(__17762,switch__6383__auto__,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17645 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17774);

return statearr_17645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(__17762,c__6463__auto___17774,G__17591_17763,n__4963__auto___17761,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17783 = (__17762 + (1));
__17762 = G__17783;
continue;
} else {
}
break;
}

var c__6463__auto___17784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17784,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17784,jobs,results,process,async){
return (function (state_17667){
var state_val_17668 = (state_17667[(1)]);
if((state_val_17668 === (9))){
var inst_17660 = (state_17667[(2)]);
var state_17667__$1 = (function (){var statearr_17669 = state_17667;
(statearr_17669[(7)] = inst_17660);

return statearr_17669;
})();
var statearr_17670_17785 = state_17667__$1;
(statearr_17670_17785[(2)] = null);

(statearr_17670_17785[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17668 === (8))){
var inst_17653 = (state_17667[(8)]);
var inst_17658 = (state_17667[(2)]);
var state_17667__$1 = (function (){var statearr_17671 = state_17667;
(statearr_17671[(9)] = inst_17658);

return statearr_17671;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17667__$1,(9),results,inst_17653);
} else {
if((state_val_17668 === (7))){
var inst_17663 = (state_17667[(2)]);
var state_17667__$1 = state_17667;
var statearr_17672_17786 = state_17667__$1;
(statearr_17672_17786[(2)] = inst_17663);

(statearr_17672_17786[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17668 === (6))){
var inst_17653 = (state_17667[(8)]);
var inst_17648 = (state_17667[(10)]);
var inst_17653__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17655 = [inst_17648,inst_17653__$1];
var inst_17656 = (new cljs.core.PersistentVector(null,2,(5),inst_17654,inst_17655,null));
var state_17667__$1 = (function (){var statearr_17673 = state_17667;
(statearr_17673[(8)] = inst_17653__$1);

return statearr_17673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17667__$1,(8),jobs,inst_17656);
} else {
if((state_val_17668 === (5))){
var inst_17651 = cljs.core.async.close_BANG_(jobs);
var state_17667__$1 = state_17667;
var statearr_17674_17787 = state_17667__$1;
(statearr_17674_17787[(2)] = inst_17651);

(statearr_17674_17787[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17668 === (4))){
var inst_17648 = (state_17667[(10)]);
var inst_17648__$1 = (state_17667[(2)]);
var inst_17649 = (inst_17648__$1 == null);
var state_17667__$1 = (function (){var statearr_17675 = state_17667;
(statearr_17675[(10)] = inst_17648__$1);

return statearr_17675;
})();
if(cljs.core.truth_(inst_17649)){
var statearr_17676_17788 = state_17667__$1;
(statearr_17676_17788[(1)] = (5));

} else {
var statearr_17677_17789 = state_17667__$1;
(statearr_17677_17789[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17668 === (3))){
var inst_17665 = (state_17667[(2)]);
var state_17667__$1 = state_17667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17667__$1,inst_17665);
} else {
if((state_val_17668 === (2))){
var state_17667__$1 = state_17667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17667__$1,(4),from);
} else {
if((state_val_17668 === (1))){
var state_17667__$1 = state_17667;
var statearr_17678_17790 = state_17667__$1;
(statearr_17678_17790[(2)] = null);

(statearr_17678_17790[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___17784,jobs,results,process,async))
;
return ((function (switch__6383__auto__,c__6463__auto___17784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17682[(1)] = (1));

return statearr_17682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17667){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17667);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17683){if((e17683 instanceof Object)){
var ex__6387__auto__ = e17683;
var statearr_17684_17791 = state_17667;
(statearr_17684_17791[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17667);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17792 = state_17667;
state_17667 = G__17792;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17784,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17685 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17784);

return statearr_17685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17784,jobs,results,process,async))
);


var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__,jobs,results,process,async){
return (function (state_17723){
var state_val_17724 = (state_17723[(1)]);
if((state_val_17724 === (7))){
var inst_17719 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17725_17793 = state_17723__$1;
(statearr_17725_17793[(2)] = inst_17719);

(statearr_17725_17793[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (20))){
var state_17723__$1 = state_17723;
var statearr_17726_17794 = state_17723__$1;
(statearr_17726_17794[(2)] = null);

(statearr_17726_17794[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (1))){
var state_17723__$1 = state_17723;
var statearr_17727_17795 = state_17723__$1;
(statearr_17727_17795[(2)] = null);

(statearr_17727_17795[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (4))){
var inst_17688 = (state_17723[(7)]);
var inst_17688__$1 = (state_17723[(2)]);
var inst_17689 = (inst_17688__$1 == null);
var state_17723__$1 = (function (){var statearr_17728 = state_17723;
(statearr_17728[(7)] = inst_17688__$1);

return statearr_17728;
})();
if(cljs.core.truth_(inst_17689)){
var statearr_17729_17796 = state_17723__$1;
(statearr_17729_17796[(1)] = (5));

} else {
var statearr_17730_17797 = state_17723__$1;
(statearr_17730_17797[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (15))){
var inst_17701 = (state_17723[(8)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17723__$1,(18),to,inst_17701);
} else {
if((state_val_17724 === (21))){
var inst_17714 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17731_17798 = state_17723__$1;
(statearr_17731_17798[(2)] = inst_17714);

(statearr_17731_17798[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (13))){
var inst_17716 = (state_17723[(2)]);
var state_17723__$1 = (function (){var statearr_17732 = state_17723;
(statearr_17732[(9)] = inst_17716);

return statearr_17732;
})();
var statearr_17733_17799 = state_17723__$1;
(statearr_17733_17799[(2)] = null);

(statearr_17733_17799[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (6))){
var inst_17688 = (state_17723[(7)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17723__$1,(11),inst_17688);
} else {
if((state_val_17724 === (17))){
var inst_17709 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
if(cljs.core.truth_(inst_17709)){
var statearr_17734_17800 = state_17723__$1;
(statearr_17734_17800[(1)] = (19));

} else {
var statearr_17735_17801 = state_17723__$1;
(statearr_17735_17801[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (3))){
var inst_17721 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17723__$1,inst_17721);
} else {
if((state_val_17724 === (12))){
var inst_17698 = (state_17723[(10)]);
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17723__$1,(14),inst_17698);
} else {
if((state_val_17724 === (2))){
var state_17723__$1 = state_17723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17723__$1,(4),results);
} else {
if((state_val_17724 === (19))){
var state_17723__$1 = state_17723;
var statearr_17736_17802 = state_17723__$1;
(statearr_17736_17802[(2)] = null);

(statearr_17736_17802[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (11))){
var inst_17698 = (state_17723[(2)]);
var state_17723__$1 = (function (){var statearr_17737 = state_17723;
(statearr_17737[(10)] = inst_17698);

return statearr_17737;
})();
var statearr_17738_17803 = state_17723__$1;
(statearr_17738_17803[(2)] = null);

(statearr_17738_17803[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (9))){
var state_17723__$1 = state_17723;
var statearr_17739_17804 = state_17723__$1;
(statearr_17739_17804[(2)] = null);

(statearr_17739_17804[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (5))){
var state_17723__$1 = state_17723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17740_17805 = state_17723__$1;
(statearr_17740_17805[(1)] = (8));

} else {
var statearr_17741_17806 = state_17723__$1;
(statearr_17741_17806[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (14))){
var inst_17703 = (state_17723[(11)]);
var inst_17701 = (state_17723[(8)]);
var inst_17701__$1 = (state_17723[(2)]);
var inst_17702 = (inst_17701__$1 == null);
var inst_17703__$1 = cljs.core.not(inst_17702);
var state_17723__$1 = (function (){var statearr_17742 = state_17723;
(statearr_17742[(11)] = inst_17703__$1);

(statearr_17742[(8)] = inst_17701__$1);

return statearr_17742;
})();
if(inst_17703__$1){
var statearr_17743_17807 = state_17723__$1;
(statearr_17743_17807[(1)] = (15));

} else {
var statearr_17744_17808 = state_17723__$1;
(statearr_17744_17808[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (16))){
var inst_17703 = (state_17723[(11)]);
var state_17723__$1 = state_17723;
var statearr_17745_17809 = state_17723__$1;
(statearr_17745_17809[(2)] = inst_17703);

(statearr_17745_17809[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (10))){
var inst_17695 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17746_17810 = state_17723__$1;
(statearr_17746_17810[(2)] = inst_17695);

(statearr_17746_17810[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (18))){
var inst_17706 = (state_17723[(2)]);
var state_17723__$1 = state_17723;
var statearr_17747_17811 = state_17723__$1;
(statearr_17747_17811[(2)] = inst_17706);

(statearr_17747_17811[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17724 === (8))){
var inst_17692 = cljs.core.async.close_BANG_(to);
var state_17723__$1 = state_17723;
var statearr_17748_17812 = state_17723__$1;
(statearr_17748_17812[(2)] = inst_17692);

(statearr_17748_17812[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto__,jobs,results,process,async))
;
return ((function (switch__6383__auto__,c__6463__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17723){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17723);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17753){if((e17753 instanceof Object)){
var ex__6387__auto__ = e17753;
var statearr_17754_17813 = state_17723;
(statearr_17754_17813[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17723);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17814 = state_17723;
state_17723 = G__17814;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17755 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_17755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__,jobs,results,process,async))
);

return c__6463__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$_COLON_async);
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$_COLON_compute);
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__6463__auto___17937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17937,tc,fc){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17937,tc,fc){
return (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (7))){
var inst_17907 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17913_17938 = state_17911__$1;
(statearr_17913_17938[(2)] = inst_17907);

(statearr_17913_17938[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17914_17939 = state_17911__$1;
(statearr_17914_17939[(2)] = null);

(statearr_17914_17939[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (4))){
var inst_17888 = (state_17911[(7)]);
var inst_17888__$1 = (state_17911[(2)]);
var inst_17889 = (inst_17888__$1 == null);
var state_17911__$1 = (function (){var statearr_17915 = state_17911;
(statearr_17915[(7)] = inst_17888__$1);

return statearr_17915;
})();
if(cljs.core.truth_(inst_17889)){
var statearr_17916_17940 = state_17911__$1;
(statearr_17916_17940[(1)] = (5));

} else {
var statearr_17917_17941 = state_17911__$1;
(statearr_17917_17941[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (13))){
var state_17911__$1 = state_17911;
var statearr_17918_17942 = state_17911__$1;
(statearr_17918_17942[(2)] = null);

(statearr_17918_17942[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (6))){
var inst_17888 = (state_17911[(7)]);
var inst_17894 = (function (){var G__17919 = inst_17888;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17919) : p.call(null,G__17919));
})();
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17894)){
var statearr_17920_17943 = state_17911__$1;
(statearr_17920_17943[(1)] = (9));

} else {
var statearr_17921_17944 = state_17911__$1;
(statearr_17921_17944[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (12))){
var state_17911__$1 = state_17911;
var statearr_17922_17945 = state_17911__$1;
(statearr_17922_17945[(2)] = null);

(statearr_17922_17945[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17911__$1,(4),ch);
} else {
if((state_val_17912 === (11))){
var inst_17888 = (state_17911[(7)]);
var inst_17898 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17911__$1,(8),inst_17898,inst_17888);
} else {
if((state_val_17912 === (9))){
var state_17911__$1 = state_17911;
var statearr_17923_17946 = state_17911__$1;
(statearr_17923_17946[(2)] = tc);

(statearr_17923_17946[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (5))){
var inst_17891 = cljs.core.async.close_BANG_(tc);
var inst_17892 = cljs.core.async.close_BANG_(fc);
var state_17911__$1 = (function (){var statearr_17924 = state_17911;
(statearr_17924[(8)] = inst_17891);

return statearr_17924;
})();
var statearr_17925_17947 = state_17911__$1;
(statearr_17925_17947[(2)] = inst_17892);

(statearr_17925_17947[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (14))){
var inst_17905 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17926_17948 = state_17911__$1;
(statearr_17926_17948[(2)] = inst_17905);

(statearr_17926_17948[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (10))){
var state_17911__$1 = state_17911;
var statearr_17927_17949 = state_17911__$1;
(statearr_17927_17949[(2)] = fc);

(statearr_17927_17949[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17912 === (8))){
var inst_17900 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17900)){
var statearr_17928_17950 = state_17911__$1;
(statearr_17928_17950[(1)] = (12));

} else {
var statearr_17929_17951 = state_17911__$1;
(statearr_17929_17951[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___17937,tc,fc))
;
return ((function (switch__6383__auto__,c__6463__auto___17937,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6384__auto__ = null;
var cljs$core$async$split_$_state_machine__6384__auto____0 = (function (){
var statearr_17933 = [null,null,null,null,null,null,null,null,null];
(statearr_17933[(0)] = cljs$core$async$split_$_state_machine__6384__auto__);

(statearr_17933[(1)] = (1));

return statearr_17933;
});
var cljs$core$async$split_$_state_machine__6384__auto____1 = (function (state_17911){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17911);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17934){if((e17934 instanceof Object)){
var ex__6387__auto__ = e17934;
var statearr_17935_17952 = state_17911;
(statearr_17935_17952[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17911);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17953 = state_17911;
state_17911 = G__17953;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6384__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6384__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6384__auto____0;
cljs$core$async$split_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6384__auto____1;
return cljs$core$async$split_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17937,tc,fc))
})();
var state__6465__auto__ = (function (){var statearr_17936 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17937);

return statearr_17936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17937,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__){
return (function (state_18002){
var state_val_18003 = (state_18002[(1)]);
if((state_val_18003 === (7))){
var inst_17998 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18004_18022 = state_18002__$1;
(statearr_18004_18022[(2)] = inst_17998);

(statearr_18004_18022[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18003 === (6))){
var inst_17991 = (state_18002[(7)]);
var inst_17988 = (state_18002[(8)]);
var inst_17995 = (function (){var G__18005 = inst_17988;
var G__18006 = inst_17991;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18005,G__18006) : f.call(null,G__18005,G__18006));
})();
var inst_17988__$1 = inst_17995;
var state_18002__$1 = (function (){var statearr_18007 = state_18002;
(statearr_18007[(8)] = inst_17988__$1);

return statearr_18007;
})();
var statearr_18008_18023 = state_18002__$1;
(statearr_18008_18023[(2)] = null);

(statearr_18008_18023[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18003 === (5))){
var inst_17988 = (state_18002[(8)]);
var state_18002__$1 = state_18002;
var statearr_18009_18024 = state_18002__$1;
(statearr_18009_18024[(2)] = inst_17988);

(statearr_18009_18024[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18003 === (4))){
var inst_17991 = (state_18002[(7)]);
var inst_17991__$1 = (state_18002[(2)]);
var inst_17992 = (inst_17991__$1 == null);
var state_18002__$1 = (function (){var statearr_18010 = state_18002;
(statearr_18010[(7)] = inst_17991__$1);

return statearr_18010;
})();
if(cljs.core.truth_(inst_17992)){
var statearr_18011_18025 = state_18002__$1;
(statearr_18011_18025[(1)] = (5));

} else {
var statearr_18012_18026 = state_18002__$1;
(statearr_18012_18026[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18003 === (3))){
var inst_18000 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18002__$1,inst_18000);
} else {
if((state_val_18003 === (2))){
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18002__$1,(4),ch);
} else {
if((state_val_18003 === (1))){
var inst_17988 = init;
var state_18002__$1 = (function (){var statearr_18013 = state_18002;
(statearr_18013[(8)] = inst_17988);

return statearr_18013;
})();
var statearr_18014_18027 = state_18002__$1;
(statearr_18014_18027[(2)] = null);

(statearr_18014_18027[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__6463__auto__))
;
return ((function (switch__6383__auto__,c__6463__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6384__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6384__auto____0 = (function (){
var statearr_18018 = [null,null,null,null,null,null,null,null,null];
(statearr_18018[(0)] = cljs$core$async$reduce_$_state_machine__6384__auto__);

(statearr_18018[(1)] = (1));

return statearr_18018;
});
var cljs$core$async$reduce_$_state_machine__6384__auto____1 = (function (state_18002){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18002);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18019){if((e18019 instanceof Object)){
var ex__6387__auto__ = e18019;
var statearr_18020_18028 = state_18002;
(statearr_18020_18028[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18002);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18029 = state_18002;
state_18002 = G__18029;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6384__auto__ = function(state_18002){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6384__auto____1.call(this,state_18002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6384__auto____0;
cljs$core$async$reduce_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6384__auto____1;
return cljs$core$async$reduce_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_18021 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_18021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__))
);

return c__6463__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__){
return (function (state_18106){
var state_val_18107 = (state_18106[(1)]);
if((state_val_18107 === (7))){
var inst_18088 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18108_18131 = state_18106__$1;
(statearr_18108_18131[(2)] = inst_18088);

(statearr_18108_18131[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (1))){
var inst_18082 = cljs.core.seq(coll);
var inst_18083 = inst_18082;
var state_18106__$1 = (function (){var statearr_18109 = state_18106;
(statearr_18109[(7)] = inst_18083);

return statearr_18109;
})();
var statearr_18110_18132 = state_18106__$1;
(statearr_18110_18132[(2)] = null);

(statearr_18110_18132[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (4))){
var inst_18083 = (state_18106[(7)]);
var inst_18086 = cljs.core.first(inst_18083);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18106__$1,(7),ch,inst_18086);
} else {
if((state_val_18107 === (13))){
var inst_18100 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18111_18133 = state_18106__$1;
(statearr_18111_18133[(2)] = inst_18100);

(statearr_18111_18133[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (6))){
var inst_18091 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18091)){
var statearr_18112_18134 = state_18106__$1;
(statearr_18112_18134[(1)] = (8));

} else {
var statearr_18113_18135 = state_18106__$1;
(statearr_18113_18135[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (3))){
var inst_18104 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18106__$1,inst_18104);
} else {
if((state_val_18107 === (12))){
var state_18106__$1 = state_18106;
var statearr_18114_18136 = state_18106__$1;
(statearr_18114_18136[(2)] = null);

(statearr_18114_18136[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (2))){
var inst_18083 = (state_18106[(7)]);
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18083)){
var statearr_18115_18137 = state_18106__$1;
(statearr_18115_18137[(1)] = (4));

} else {
var statearr_18116_18138 = state_18106__$1;
(statearr_18116_18138[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (11))){
var inst_18097 = cljs.core.async.close_BANG_(ch);
var state_18106__$1 = state_18106;
var statearr_18117_18139 = state_18106__$1;
(statearr_18117_18139[(2)] = inst_18097);

(statearr_18117_18139[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (9))){
var state_18106__$1 = state_18106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18118_18140 = state_18106__$1;
(statearr_18118_18140[(1)] = (11));

} else {
var statearr_18119_18141 = state_18106__$1;
(statearr_18119_18141[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (5))){
var inst_18083 = (state_18106[(7)]);
var state_18106__$1 = state_18106;
var statearr_18120_18142 = state_18106__$1;
(statearr_18120_18142[(2)] = inst_18083);

(statearr_18120_18142[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (10))){
var inst_18102 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18121_18143 = state_18106__$1;
(statearr_18121_18143[(2)] = inst_18102);

(statearr_18121_18143[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18107 === (8))){
var inst_18083 = (state_18106[(7)]);
var inst_18093 = cljs.core.next(inst_18083);
var inst_18083__$1 = inst_18093;
var state_18106__$1 = (function (){var statearr_18122 = state_18106;
(statearr_18122[(7)] = inst_18083__$1);

return statearr_18122;
})();
var statearr_18123_18144 = state_18106__$1;
(statearr_18123_18144[(2)] = null);

(statearr_18123_18144[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto__))
;
return ((function (switch__6383__auto__,c__6463__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6384__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6384__auto____0 = (function (){
var statearr_18127 = [null,null,null,null,null,null,null,null];
(statearr_18127[(0)] = cljs$core$async$onto_chan_$_state_machine__6384__auto__);

(statearr_18127[(1)] = (1));

return statearr_18127;
});
var cljs$core$async$onto_chan_$_state_machine__6384__auto____1 = (function (state_18106){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18106);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18128){if((e18128 instanceof Object)){
var ex__6387__auto__ = e18128;
var statearr_18129_18145 = state_18106;
(statearr_18129_18145[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18106);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18146 = state_18106;
state_18106 = G__18146;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6384__auto__ = function(state_18106){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6384__auto____1.call(this,state_18106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6384__auto____0;
cljs$core$async$onto_chan_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6384__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_18130 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__))
);

return c__6463__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18148 = {};
return obj18148;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4064__auto__ = _;
if(and__4064__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4720__auto__ = (((_ == null))?null:_);
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__18152 = x__4720__auto__;
return goog.typeOf(G__18152);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18154 = {};
return obj18154;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__18158 = x__4720__auto__;
return goog.typeOf(G__18158);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__18162 = x__4720__auto__;
return goog.typeOf(G__18162);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__18166 = x__4720__auto__;
return goog.typeOf(G__18166);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18396 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18396) : cljs.core.atom.call(null,G__18396));
})();
var m = (function (){
if(typeof cljs.core.async.t18397 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18397 = (function (cs,ch,mult,meta18398){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18398 = meta18398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18397.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18397.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18397.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18397.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18400_18625 = self__.cs;
var G__18401_18626 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18400_18625,G__18401_18626) : cljs.core.reset_BANG_.call(null,G__18400_18625,G__18401_18626));

return null;
});})(cs))
;

cljs.core.async.t18397.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18399){
var self__ = this;
var _18399__$1 = this;
return self__.meta18398;
});})(cs))
;

cljs.core.async.t18397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18399,meta18398__$1){
var self__ = this;
var _18399__$1 = this;
return (new cljs.core.async.t18397(self__.cs,self__.ch,self__.mult,meta18398__$1));
});})(cs))
;

cljs.core.async.t18397.cljs$lang$type = true;

cljs.core.async.t18397.cljs$lang$ctorStr = "cljs.core.async/t18397";

cljs.core.async.t18397.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18397");
});})(cs))
;

cljs.core.async.__GT_t18397 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18397(cs__$1,ch__$1,mult__$1,meta18398){
return (new cljs.core.async.t18397(cs__$1,ch__$1,mult__$1,meta18398));
});})(cs))
;

}

return (new cljs.core.async.t18397(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18402 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18402) : cljs.core.atom.call(null,G__18402));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6463__auto___18627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___18627,cs,m,dchan,dctr,done){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___18627,cs,m,dchan,dctr,done){
return (function (state_18533){
var state_val_18534 = (state_18533[(1)]);
if((state_val_18534 === (7))){
var inst_18529 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18535_18628 = state_18533__$1;
(statearr_18535_18628[(2)] = inst_18529);

(statearr_18535_18628[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (20))){
var inst_18434 = (state_18533[(7)]);
var inst_18444 = cljs.core.first(inst_18434);
var inst_18445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18444,(0),null);
var inst_18446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18444,(1),null);
var state_18533__$1 = (function (){var statearr_18536 = state_18533;
(statearr_18536[(8)] = inst_18445);

return statearr_18536;
})();
if(cljs.core.truth_(inst_18446)){
var statearr_18537_18629 = state_18533__$1;
(statearr_18537_18629[(1)] = (22));

} else {
var statearr_18538_18630 = state_18533__$1;
(statearr_18538_18630[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (27))){
var inst_18481 = (state_18533[(9)]);
var inst_18474 = (state_18533[(10)]);
var inst_18476 = (state_18533[(11)]);
var inst_18405 = (state_18533[(12)]);
var inst_18481__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18474,inst_18476);
var inst_18482 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18481__$1,inst_18405,done);
var state_18533__$1 = (function (){var statearr_18539 = state_18533;
(statearr_18539[(9)] = inst_18481__$1);

return statearr_18539;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18540_18631 = state_18533__$1;
(statearr_18540_18631[(1)] = (30));

} else {
var statearr_18541_18632 = state_18533__$1;
(statearr_18541_18632[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (1))){
var state_18533__$1 = state_18533;
var statearr_18542_18633 = state_18533__$1;
(statearr_18542_18633[(2)] = null);

(statearr_18542_18633[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (24))){
var inst_18434 = (state_18533[(7)]);
var inst_18451 = (state_18533[(2)]);
var inst_18452 = cljs.core.next(inst_18434);
var inst_18414 = inst_18452;
var inst_18415 = null;
var inst_18416 = (0);
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18543 = state_18533;
(statearr_18543[(13)] = inst_18414);

(statearr_18543[(14)] = inst_18417);

(statearr_18543[(15)] = inst_18451);

(statearr_18543[(16)] = inst_18415);

(statearr_18543[(17)] = inst_18416);

return statearr_18543;
})();
var statearr_18544_18634 = state_18533__$1;
(statearr_18544_18634[(2)] = null);

(statearr_18544_18634[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (39))){
var state_18533__$1 = state_18533;
var statearr_18548_18635 = state_18533__$1;
(statearr_18548_18635[(2)] = null);

(statearr_18548_18635[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (4))){
var inst_18405 = (state_18533[(12)]);
var inst_18405__$1 = (state_18533[(2)]);
var inst_18406 = (inst_18405__$1 == null);
var state_18533__$1 = (function (){var statearr_18549 = state_18533;
(statearr_18549[(12)] = inst_18405__$1);

return statearr_18549;
})();
if(cljs.core.truth_(inst_18406)){
var statearr_18550_18636 = state_18533__$1;
(statearr_18550_18636[(1)] = (5));

} else {
var statearr_18551_18637 = state_18533__$1;
(statearr_18551_18637[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (15))){
var inst_18414 = (state_18533[(13)]);
var inst_18417 = (state_18533[(14)]);
var inst_18415 = (state_18533[(16)]);
var inst_18416 = (state_18533[(17)]);
var inst_18430 = (state_18533[(2)]);
var inst_18431 = (inst_18417 + (1));
var tmp18545 = inst_18414;
var tmp18546 = inst_18415;
var tmp18547 = inst_18416;
var inst_18414__$1 = tmp18545;
var inst_18415__$1 = tmp18546;
var inst_18416__$1 = tmp18547;
var inst_18417__$1 = inst_18431;
var state_18533__$1 = (function (){var statearr_18552 = state_18533;
(statearr_18552[(13)] = inst_18414__$1);

(statearr_18552[(18)] = inst_18430);

(statearr_18552[(14)] = inst_18417__$1);

(statearr_18552[(16)] = inst_18415__$1);

(statearr_18552[(17)] = inst_18416__$1);

return statearr_18552;
})();
var statearr_18553_18638 = state_18533__$1;
(statearr_18553_18638[(2)] = null);

(statearr_18553_18638[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (21))){
var inst_18455 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18557_18639 = state_18533__$1;
(statearr_18557_18639[(2)] = inst_18455);

(statearr_18557_18639[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (31))){
var inst_18481 = (state_18533[(9)]);
var inst_18485 = done(null);
var inst_18486 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18481);
var state_18533__$1 = (function (){var statearr_18558 = state_18533;
(statearr_18558[(19)] = inst_18485);

return statearr_18558;
})();
var statearr_18559_18640 = state_18533__$1;
(statearr_18559_18640[(2)] = inst_18486);

(statearr_18559_18640[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (32))){
var inst_18473 = (state_18533[(20)]);
var inst_18474 = (state_18533[(10)]);
var inst_18476 = (state_18533[(11)]);
var inst_18475 = (state_18533[(21)]);
var inst_18488 = (state_18533[(2)]);
var inst_18489 = (inst_18476 + (1));
var tmp18554 = inst_18473;
var tmp18555 = inst_18474;
var tmp18556 = inst_18475;
var inst_18473__$1 = tmp18554;
var inst_18474__$1 = tmp18555;
var inst_18475__$1 = tmp18556;
var inst_18476__$1 = inst_18489;
var state_18533__$1 = (function (){var statearr_18560 = state_18533;
(statearr_18560[(20)] = inst_18473__$1);

(statearr_18560[(10)] = inst_18474__$1);

(statearr_18560[(11)] = inst_18476__$1);

(statearr_18560[(22)] = inst_18488);

(statearr_18560[(21)] = inst_18475__$1);

return statearr_18560;
})();
var statearr_18561_18641 = state_18533__$1;
(statearr_18561_18641[(2)] = null);

(statearr_18561_18641[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (40))){
var inst_18501 = (state_18533[(23)]);
var inst_18505 = done(null);
var inst_18506 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18501);
var state_18533__$1 = (function (){var statearr_18562 = state_18533;
(statearr_18562[(24)] = inst_18505);

return statearr_18562;
})();
var statearr_18563_18642 = state_18533__$1;
(statearr_18563_18642[(2)] = inst_18506);

(statearr_18563_18642[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (33))){
var inst_18492 = (state_18533[(25)]);
var inst_18494 = cljs.core.chunked_seq_QMARK_(inst_18492);
var state_18533__$1 = state_18533;
if(inst_18494){
var statearr_18564_18643 = state_18533__$1;
(statearr_18564_18643[(1)] = (36));

} else {
var statearr_18565_18644 = state_18533__$1;
(statearr_18565_18644[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (13))){
var inst_18424 = (state_18533[(26)]);
var inst_18427 = cljs.core.async.close_BANG_(inst_18424);
var state_18533__$1 = state_18533;
var statearr_18566_18645 = state_18533__$1;
(statearr_18566_18645[(2)] = inst_18427);

(statearr_18566_18645[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (22))){
var inst_18445 = (state_18533[(8)]);
var inst_18448 = cljs.core.async.close_BANG_(inst_18445);
var state_18533__$1 = state_18533;
var statearr_18567_18646 = state_18533__$1;
(statearr_18567_18646[(2)] = inst_18448);

(statearr_18567_18646[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (36))){
var inst_18492 = (state_18533[(25)]);
var inst_18496 = cljs.core.chunk_first(inst_18492);
var inst_18497 = cljs.core.chunk_rest(inst_18492);
var inst_18498 = cljs.core.count(inst_18496);
var inst_18473 = inst_18497;
var inst_18474 = inst_18496;
var inst_18475 = inst_18498;
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18568 = state_18533;
(statearr_18568[(20)] = inst_18473);

(statearr_18568[(10)] = inst_18474);

(statearr_18568[(11)] = inst_18476);

(statearr_18568[(21)] = inst_18475);

return statearr_18568;
})();
var statearr_18569_18647 = state_18533__$1;
(statearr_18569_18647[(2)] = null);

(statearr_18569_18647[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (41))){
var inst_18492 = (state_18533[(25)]);
var inst_18508 = (state_18533[(2)]);
var inst_18509 = cljs.core.next(inst_18492);
var inst_18473 = inst_18509;
var inst_18474 = null;
var inst_18475 = (0);
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18570 = state_18533;
(statearr_18570[(20)] = inst_18473);

(statearr_18570[(10)] = inst_18474);

(statearr_18570[(11)] = inst_18476);

(statearr_18570[(21)] = inst_18475);

(statearr_18570[(27)] = inst_18508);

return statearr_18570;
})();
var statearr_18571_18648 = state_18533__$1;
(statearr_18571_18648[(2)] = null);

(statearr_18571_18648[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (43))){
var state_18533__$1 = state_18533;
var statearr_18572_18649 = state_18533__$1;
(statearr_18572_18649[(2)] = null);

(statearr_18572_18649[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (29))){
var inst_18517 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18573_18650 = state_18533__$1;
(statearr_18573_18650[(2)] = inst_18517);

(statearr_18573_18650[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (44))){
var inst_18526 = (state_18533[(2)]);
var state_18533__$1 = (function (){var statearr_18574 = state_18533;
(statearr_18574[(28)] = inst_18526);

return statearr_18574;
})();
var statearr_18575_18651 = state_18533__$1;
(statearr_18575_18651[(2)] = null);

(statearr_18575_18651[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (6))){
var inst_18465 = (state_18533[(29)]);
var inst_18464 = (function (){var G__18576 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18576) : cljs.core.deref.call(null,G__18576));
})();
var inst_18465__$1 = cljs.core.keys(inst_18464);
var inst_18466 = cljs.core.count(inst_18465__$1);
var inst_18467 = (function (){var G__18577 = dctr;
var G__18578 = inst_18466;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18577,G__18578) : cljs.core.reset_BANG_.call(null,G__18577,G__18578));
})();
var inst_18472 = cljs.core.seq(inst_18465__$1);
var inst_18473 = inst_18472;
var inst_18474 = null;
var inst_18475 = (0);
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18579 = state_18533;
(statearr_18579[(20)] = inst_18473);

(statearr_18579[(10)] = inst_18474);

(statearr_18579[(29)] = inst_18465__$1);

(statearr_18579[(11)] = inst_18476);

(statearr_18579[(21)] = inst_18475);

(statearr_18579[(30)] = inst_18467);

return statearr_18579;
})();
var statearr_18580_18652 = state_18533__$1;
(statearr_18580_18652[(2)] = null);

(statearr_18580_18652[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (28))){
var inst_18492 = (state_18533[(25)]);
var inst_18473 = (state_18533[(20)]);
var inst_18492__$1 = cljs.core.seq(inst_18473);
var state_18533__$1 = (function (){var statearr_18581 = state_18533;
(statearr_18581[(25)] = inst_18492__$1);

return statearr_18581;
})();
if(inst_18492__$1){
var statearr_18582_18653 = state_18533__$1;
(statearr_18582_18653[(1)] = (33));

} else {
var statearr_18583_18654 = state_18533__$1;
(statearr_18583_18654[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (25))){
var inst_18476 = (state_18533[(11)]);
var inst_18475 = (state_18533[(21)]);
var inst_18478 = (inst_18476 < inst_18475);
var inst_18479 = inst_18478;
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18479)){
var statearr_18584_18655 = state_18533__$1;
(statearr_18584_18655[(1)] = (27));

} else {
var statearr_18585_18656 = state_18533__$1;
(statearr_18585_18656[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (34))){
var state_18533__$1 = state_18533;
var statearr_18586_18657 = state_18533__$1;
(statearr_18586_18657[(2)] = null);

(statearr_18586_18657[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (17))){
var state_18533__$1 = state_18533;
var statearr_18587_18658 = state_18533__$1;
(statearr_18587_18658[(2)] = null);

(statearr_18587_18658[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (3))){
var inst_18531 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18533__$1,inst_18531);
} else {
if((state_val_18534 === (12))){
var inst_18460 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18588_18659 = state_18533__$1;
(statearr_18588_18659[(2)] = inst_18460);

(statearr_18588_18659[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (2))){
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18533__$1,(4),ch);
} else {
if((state_val_18534 === (23))){
var state_18533__$1 = state_18533;
var statearr_18589_18660 = state_18533__$1;
(statearr_18589_18660[(2)] = null);

(statearr_18589_18660[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (35))){
var inst_18515 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18590_18661 = state_18533__$1;
(statearr_18590_18661[(2)] = inst_18515);

(statearr_18590_18661[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (19))){
var inst_18434 = (state_18533[(7)]);
var inst_18438 = cljs.core.chunk_first(inst_18434);
var inst_18439 = cljs.core.chunk_rest(inst_18434);
var inst_18440 = cljs.core.count(inst_18438);
var inst_18414 = inst_18439;
var inst_18415 = inst_18438;
var inst_18416 = inst_18440;
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18591 = state_18533;
(statearr_18591[(13)] = inst_18414);

(statearr_18591[(14)] = inst_18417);

(statearr_18591[(16)] = inst_18415);

(statearr_18591[(17)] = inst_18416);

return statearr_18591;
})();
var statearr_18592_18662 = state_18533__$1;
(statearr_18592_18662[(2)] = null);

(statearr_18592_18662[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (11))){
var inst_18434 = (state_18533[(7)]);
var inst_18414 = (state_18533[(13)]);
var inst_18434__$1 = cljs.core.seq(inst_18414);
var state_18533__$1 = (function (){var statearr_18593 = state_18533;
(statearr_18593[(7)] = inst_18434__$1);

return statearr_18593;
})();
if(inst_18434__$1){
var statearr_18594_18663 = state_18533__$1;
(statearr_18594_18663[(1)] = (16));

} else {
var statearr_18595_18664 = state_18533__$1;
(statearr_18595_18664[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (9))){
var inst_18462 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18596_18665 = state_18533__$1;
(statearr_18596_18665[(2)] = inst_18462);

(statearr_18596_18665[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (5))){
var inst_18412 = (function (){var G__18597 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18597) : cljs.core.deref.call(null,G__18597));
})();
var inst_18413 = cljs.core.seq(inst_18412);
var inst_18414 = inst_18413;
var inst_18415 = null;
var inst_18416 = (0);
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18598 = state_18533;
(statearr_18598[(13)] = inst_18414);

(statearr_18598[(14)] = inst_18417);

(statearr_18598[(16)] = inst_18415);

(statearr_18598[(17)] = inst_18416);

return statearr_18598;
})();
var statearr_18599_18666 = state_18533__$1;
(statearr_18599_18666[(2)] = null);

(statearr_18599_18666[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (14))){
var state_18533__$1 = state_18533;
var statearr_18600_18667 = state_18533__$1;
(statearr_18600_18667[(2)] = null);

(statearr_18600_18667[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (45))){
var inst_18523 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18601_18668 = state_18533__$1;
(statearr_18601_18668[(2)] = inst_18523);

(statearr_18601_18668[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (26))){
var inst_18465 = (state_18533[(29)]);
var inst_18519 = (state_18533[(2)]);
var inst_18520 = cljs.core.seq(inst_18465);
var state_18533__$1 = (function (){var statearr_18602 = state_18533;
(statearr_18602[(31)] = inst_18519);

return statearr_18602;
})();
if(inst_18520){
var statearr_18603_18669 = state_18533__$1;
(statearr_18603_18669[(1)] = (42));

} else {
var statearr_18604_18670 = state_18533__$1;
(statearr_18604_18670[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (16))){
var inst_18434 = (state_18533[(7)]);
var inst_18436 = cljs.core.chunked_seq_QMARK_(inst_18434);
var state_18533__$1 = state_18533;
if(inst_18436){
var statearr_18605_18671 = state_18533__$1;
(statearr_18605_18671[(1)] = (19));

} else {
var statearr_18606_18672 = state_18533__$1;
(statearr_18606_18672[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (38))){
var inst_18512 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18607_18673 = state_18533__$1;
(statearr_18607_18673[(2)] = inst_18512);

(statearr_18607_18673[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (30))){
var state_18533__$1 = state_18533;
var statearr_18608_18674 = state_18533__$1;
(statearr_18608_18674[(2)] = null);

(statearr_18608_18674[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (10))){
var inst_18417 = (state_18533[(14)]);
var inst_18415 = (state_18533[(16)]);
var inst_18423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18415,inst_18417);
var inst_18424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(0),null);
var inst_18425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(1),null);
var state_18533__$1 = (function (){var statearr_18609 = state_18533;
(statearr_18609[(26)] = inst_18424);

return statearr_18609;
})();
if(cljs.core.truth_(inst_18425)){
var statearr_18610_18675 = state_18533__$1;
(statearr_18610_18675[(1)] = (13));

} else {
var statearr_18611_18676 = state_18533__$1;
(statearr_18611_18676[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (18))){
var inst_18458 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18612_18677 = state_18533__$1;
(statearr_18612_18677[(2)] = inst_18458);

(statearr_18612_18677[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (42))){
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18533__$1,(45),dchan);
} else {
if((state_val_18534 === (37))){
var inst_18501 = (state_18533[(23)]);
var inst_18492 = (state_18533[(25)]);
var inst_18405 = (state_18533[(12)]);
var inst_18501__$1 = cljs.core.first(inst_18492);
var inst_18502 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18501__$1,inst_18405,done);
var state_18533__$1 = (function (){var statearr_18613 = state_18533;
(statearr_18613[(23)] = inst_18501__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18502)){
var statearr_18614_18678 = state_18533__$1;
(statearr_18614_18678[(1)] = (39));

} else {
var statearr_18615_18679 = state_18533__$1;
(statearr_18615_18679[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18534 === (8))){
var inst_18417 = (state_18533[(14)]);
var inst_18416 = (state_18533[(17)]);
var inst_18419 = (inst_18417 < inst_18416);
var inst_18420 = inst_18419;
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18420)){
var statearr_18616_18680 = state_18533__$1;
(statearr_18616_18680[(1)] = (10));

} else {
var statearr_18617_18681 = state_18533__$1;
(statearr_18617_18681[(1)] = (11));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___18627,cs,m,dchan,dctr,done))
;
return ((function (switch__6383__auto__,c__6463__auto___18627,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6384__auto__ = null;
var cljs$core$async$mult_$_state_machine__6384__auto____0 = (function (){
var statearr_18621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18621[(0)] = cljs$core$async$mult_$_state_machine__6384__auto__);

(statearr_18621[(1)] = (1));

return statearr_18621;
});
var cljs$core$async$mult_$_state_machine__6384__auto____1 = (function (state_18533){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18533);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18622){if((e18622 instanceof Object)){
var ex__6387__auto__ = e18622;
var statearr_18623_18682 = state_18533;
(statearr_18623_18682[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18533);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18683 = state_18533;
state_18533 = G__18683;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6384__auto__ = function(state_18533){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6384__auto____1.call(this,state_18533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6384__auto____0;
cljs$core$async$mult_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6384__auto____1;
return cljs$core$async$mult_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___18627,cs,m,dchan,dctr,done))
})();
var state__6465__auto__ = (function (){var statearr_18624 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___18627);

return statearr_18624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___18627,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj18688 = {};
return obj18688;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__18692 = x__4720__auto__;
return goog.typeOf(G__18692);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__18696 = x__4720__auto__;
return goog.typeOf(G__18696);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__18700 = x__4720__auto__;
return goog.typeOf(G__18700);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__18704 = x__4720__auto__;
return goog.typeOf(G__18704);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__18708 = x__4720__auto__;
return goog.typeOf(G__18708);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18709){
var map__18715 = p__18709;
var map__18715__$1 = ((cljs.core.seq_QMARK_(map__18715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18715):map__18715);
var opts = map__18715__$1;
var statearr_18716_18720 = state;
(statearr_18716_18720[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__18715,map__18715__$1,opts){
return (function (val){
var statearr_18717_18721 = state;
(statearr_18717_18721[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18715,map__18715__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18718_18722 = state;
(statearr_18718_18722[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__18719 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18719) : cljs.core.deref.call(null,G__18719));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18709 = null;
if (arguments.length > 3) {
var G__18723__i = 0, G__18723__a = new Array(arguments.length -  3);
while (G__18723__i < G__18723__a.length) {G__18723__a[G__18723__i] = arguments[G__18723__i + 3]; ++G__18723__i;}
  p__18709 = new cljs.core.IndexedSeq(G__18723__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18709);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18724){
var state = cljs.core.first(arglist__18724);
arglist__18724 = cljs.core.next(arglist__18724);
var cont_block = cljs.core.first(arglist__18724);
arglist__18724 = cljs.core.next(arglist__18724);
var ports = cljs.core.first(arglist__18724);
var p__18709 = cljs.core.rest(arglist__18724);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__18709);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18858 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18858) : cljs.core.atom.call(null,G__18858));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__18859 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18859) : cljs.core.atom.call(null,G__18859));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__18860 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__18860) : attr.call(null,G__18860));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__18861 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18861) : cljs.core.deref.call(null,G__18861));
})();
var mode = (function (){var G__18862 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18862) : cljs.core.deref.call(null,G__18862));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18863 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18864){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18864 = meta18864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18863.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18863.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18866_18991 = self__.cs;
var G__18867_18992 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18866_18991,G__18867_18992) : cljs.core.reset_BANG_.call(null,G__18866_18991,G__18867_18992));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__18868 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__18868) : self__.solo_modes.call(null,G__18868));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__18869_18993 = self__.solo_mode;
var G__18870_18994 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18869_18993,G__18870_18994) : cljs.core.reset_BANG_.call(null,G__18869_18993,G__18870_18994));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18865){
var self__ = this;
var _18865__$1 = this;
return self__.meta18864;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18865,meta18864__$1){
var self__ = this;
var _18865__$1 = this;
return (new cljs.core.async.t18863(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18864__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18863.cljs$lang$type = true;

cljs.core.async.t18863.cljs$lang$ctorStr = "cljs.core.async/t18863";

cljs.core.async.t18863.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18863");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18863 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18863(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18864){
return (new cljs.core.async.t18863(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18864));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18863(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6463__auto___18995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18942){
var state_val_18943 = (state_18942[(1)]);
if((state_val_18943 === (7))){
var inst_18884 = (state_18942[(7)]);
var inst_18889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18884);
var state_18942__$1 = state_18942;
var statearr_18944_18996 = state_18942__$1;
(statearr_18944_18996[(2)] = inst_18889);

(statearr_18944_18996[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (20))){
var inst_18899 = (state_18942[(8)]);
var state_18942__$1 = state_18942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18942__$1,(23),out,inst_18899);
} else {
if((state_val_18943 === (1))){
var inst_18874 = (state_18942[(9)]);
var inst_18874__$1 = calc_state();
var inst_18875 = cljs.core.seq_QMARK_(inst_18874__$1);
var state_18942__$1 = (function (){var statearr_18945 = state_18942;
(statearr_18945[(9)] = inst_18874__$1);

return statearr_18945;
})();
if(inst_18875){
var statearr_18946_18997 = state_18942__$1;
(statearr_18946_18997[(1)] = (2));

} else {
var statearr_18947_18998 = state_18942__$1;
(statearr_18947_18998[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (24))){
var inst_18892 = (state_18942[(10)]);
var inst_18884 = inst_18892;
var state_18942__$1 = (function (){var statearr_18948 = state_18942;
(statearr_18948[(7)] = inst_18884);

return statearr_18948;
})();
var statearr_18949_18999 = state_18942__$1;
(statearr_18949_18999[(2)] = null);

(statearr_18949_18999[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (4))){
var inst_18874 = (state_18942[(9)]);
var inst_18880 = (state_18942[(2)]);
var inst_18881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18880,cljs.core.constant$keyword$_COLON_reads);
var inst_18882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18880,cljs.core.constant$keyword$_COLON_mutes);
var inst_18883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18880,cljs.core.constant$keyword$_COLON_solos);
var inst_18884 = inst_18874;
var state_18942__$1 = (function (){var statearr_18950 = state_18942;
(statearr_18950[(11)] = inst_18883);

(statearr_18950[(12)] = inst_18882);

(statearr_18950[(7)] = inst_18884);

(statearr_18950[(13)] = inst_18881);

return statearr_18950;
})();
var statearr_18951_19000 = state_18942__$1;
(statearr_18951_19000[(2)] = null);

(statearr_18951_19000[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (15))){
var state_18942__$1 = state_18942;
var statearr_18952_19001 = state_18942__$1;
(statearr_18952_19001[(2)] = null);

(statearr_18952_19001[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (21))){
var inst_18892 = (state_18942[(10)]);
var inst_18884 = inst_18892;
var state_18942__$1 = (function (){var statearr_18953 = state_18942;
(statearr_18953[(7)] = inst_18884);

return statearr_18953;
})();
var statearr_18954_19002 = state_18942__$1;
(statearr_18954_19002[(2)] = null);

(statearr_18954_19002[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (13))){
var inst_18938 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
var statearr_18955_19003 = state_18942__$1;
(statearr_18955_19003[(2)] = inst_18938);

(statearr_18955_19003[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (22))){
var inst_18936 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
var statearr_18956_19004 = state_18942__$1;
(statearr_18956_19004[(2)] = inst_18936);

(statearr_18956_19004[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (6))){
var inst_18940 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18942__$1,inst_18940);
} else {
if((state_val_18943 === (25))){
var state_18942__$1 = state_18942;
var statearr_18957_19005 = state_18942__$1;
(statearr_18957_19005[(2)] = null);

(statearr_18957_19005[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (17))){
var inst_18915 = (state_18942[(14)]);
var state_18942__$1 = state_18942;
var statearr_18958_19006 = state_18942__$1;
(statearr_18958_19006[(2)] = inst_18915);

(statearr_18958_19006[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (3))){
var inst_18874 = (state_18942[(9)]);
var state_18942__$1 = state_18942;
var statearr_18959_19007 = state_18942__$1;
(statearr_18959_19007[(2)] = inst_18874);

(statearr_18959_19007[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (12))){
var inst_18915 = (state_18942[(14)]);
var inst_18900 = (state_18942[(15)]);
var inst_18895 = (state_18942[(16)]);
var inst_18915__$1 = (function (){var G__18960 = inst_18900;
return (inst_18895.cljs$core$IFn$_invoke$arity$1 ? inst_18895.cljs$core$IFn$_invoke$arity$1(G__18960) : inst_18895.call(null,G__18960));
})();
var state_18942__$1 = (function (){var statearr_18961 = state_18942;
(statearr_18961[(14)] = inst_18915__$1);

return statearr_18961;
})();
if(cljs.core.truth_(inst_18915__$1)){
var statearr_18962_19008 = state_18942__$1;
(statearr_18962_19008[(1)] = (17));

} else {
var statearr_18963_19009 = state_18942__$1;
(statearr_18963_19009[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (2))){
var inst_18874 = (state_18942[(9)]);
var inst_18877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18874);
var state_18942__$1 = state_18942;
var statearr_18964_19010 = state_18942__$1;
(statearr_18964_19010[(2)] = inst_18877);

(statearr_18964_19010[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (23))){
var inst_18927 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
if(cljs.core.truth_(inst_18927)){
var statearr_18965_19011 = state_18942__$1;
(statearr_18965_19011[(1)] = (24));

} else {
var statearr_18966_19012 = state_18942__$1;
(statearr_18966_19012[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (19))){
var inst_18924 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
if(cljs.core.truth_(inst_18924)){
var statearr_18967_19013 = state_18942__$1;
(statearr_18967_19013[(1)] = (20));

} else {
var statearr_18968_19014 = state_18942__$1;
(statearr_18968_19014[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (11))){
var inst_18899 = (state_18942[(8)]);
var inst_18905 = (inst_18899 == null);
var state_18942__$1 = state_18942;
if(cljs.core.truth_(inst_18905)){
var statearr_18969_19015 = state_18942__$1;
(statearr_18969_19015[(1)] = (14));

} else {
var statearr_18970_19016 = state_18942__$1;
(statearr_18970_19016[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (9))){
var inst_18892 = (state_18942[(10)]);
var inst_18892__$1 = (state_18942[(2)]);
var inst_18893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18892__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_18894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18892__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_18895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18892__$1,cljs.core.constant$keyword$_COLON_solos);
var state_18942__$1 = (function (){var statearr_18971 = state_18942;
(statearr_18971[(17)] = inst_18894);

(statearr_18971[(10)] = inst_18892__$1);

(statearr_18971[(16)] = inst_18895);

return statearr_18971;
})();
return cljs.core.async.ioc_alts_BANG_(state_18942__$1,(10),inst_18893);
} else {
if((state_val_18943 === (5))){
var inst_18884 = (state_18942[(7)]);
var inst_18887 = cljs.core.seq_QMARK_(inst_18884);
var state_18942__$1 = state_18942;
if(inst_18887){
var statearr_18972_19017 = state_18942__$1;
(statearr_18972_19017[(1)] = (7));

} else {
var statearr_18973_19018 = state_18942__$1;
(statearr_18973_19018[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (14))){
var inst_18900 = (state_18942[(15)]);
var inst_18907 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18900);
var state_18942__$1 = state_18942;
var statearr_18974_19019 = state_18942__$1;
(statearr_18974_19019[(2)] = inst_18907);

(statearr_18974_19019[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (26))){
var inst_18932 = (state_18942[(2)]);
var state_18942__$1 = state_18942;
var statearr_18975_19020 = state_18942__$1;
(statearr_18975_19020[(2)] = inst_18932);

(statearr_18975_19020[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (16))){
var inst_18910 = (state_18942[(2)]);
var inst_18911 = calc_state();
var inst_18884 = inst_18911;
var state_18942__$1 = (function (){var statearr_18976 = state_18942;
(statearr_18976[(18)] = inst_18910);

(statearr_18976[(7)] = inst_18884);

return statearr_18976;
})();
var statearr_18977_19021 = state_18942__$1;
(statearr_18977_19021[(2)] = null);

(statearr_18977_19021[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (10))){
var inst_18900 = (state_18942[(15)]);
var inst_18899 = (state_18942[(8)]);
var inst_18898 = (state_18942[(2)]);
var inst_18899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18898,(0),null);
var inst_18900__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18898,(1),null);
var inst_18901 = (inst_18899__$1 == null);
var inst_18902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18900__$1,change);
var inst_18903 = (inst_18901) || (inst_18902);
var state_18942__$1 = (function (){var statearr_18978 = state_18942;
(statearr_18978[(15)] = inst_18900__$1);

(statearr_18978[(8)] = inst_18899__$1);

return statearr_18978;
})();
if(cljs.core.truth_(inst_18903)){
var statearr_18979_19022 = state_18942__$1;
(statearr_18979_19022[(1)] = (11));

} else {
var statearr_18980_19023 = state_18942__$1;
(statearr_18980_19023[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (18))){
var inst_18900 = (state_18942[(15)]);
var inst_18894 = (state_18942[(17)]);
var inst_18895 = (state_18942[(16)]);
var inst_18919 = cljs.core.empty_QMARK_(inst_18895);
var inst_18920 = (function (){var G__18981 = inst_18900;
return (inst_18894.cljs$core$IFn$_invoke$arity$1 ? inst_18894.cljs$core$IFn$_invoke$arity$1(G__18981) : inst_18894.call(null,G__18981));
})();
var inst_18921 = cljs.core.not(inst_18920);
var inst_18922 = (inst_18919) && (inst_18921);
var state_18942__$1 = state_18942;
var statearr_18982_19024 = state_18942__$1;
(statearr_18982_19024[(2)] = inst_18922);

(statearr_18982_19024[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18943 === (8))){
var inst_18884 = (state_18942[(7)]);
var state_18942__$1 = state_18942;
var statearr_18983_19025 = state_18942__$1;
(statearr_18983_19025[(2)] = inst_18884);

(statearr_18983_19025[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6383__auto__,c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6384__auto__ = null;
var cljs$core$async$mix_$_state_machine__6384__auto____0 = (function (){
var statearr_18987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18987[(0)] = cljs$core$async$mix_$_state_machine__6384__auto__);

(statearr_18987[(1)] = (1));

return statearr_18987;
});
var cljs$core$async$mix_$_state_machine__6384__auto____1 = (function (state_18942){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18942);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18988){if((e18988 instanceof Object)){
var ex__6387__auto__ = e18988;
var statearr_18989_19026 = state_18942;
(statearr_18989_19026[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18942);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19027 = state_18942;
state_18942 = G__19027;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6384__auto__ = function(state_18942){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6384__auto____1.call(this,state_18942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6384__auto____0;
cljs$core$async$mix_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6384__auto____1;
return cljs$core$async$mix_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6465__auto__ = (function (){var statearr_18990 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___18995);

return statearr_18990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___18995,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj19029 = {};
return obj19029;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__19033 = x__4720__auto__;
return goog.typeOf(G__19033);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__19037 = x__4720__auto__;
return goog.typeOf(G__19037);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19043 = x__4720__auto__;
return goog.typeOf(G__19043);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19045 = x__4720__auto__;
return goog.typeOf(G__19045);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19184 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19184) : cljs.core.atom.call(null,G__19184));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4076__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19186 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19186) : cljs.core.deref.call(null,G__19186));
})(),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4076__auto__,mults){
return (function (p1__19046_SHARP_){
if(cljs.core.truth_((function (){var G__19187 = topic;
return (p1__19046_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19046_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19187) : p1__19046_SHARP_.call(null,G__19187));
})())){
return p1__19046_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19046_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__19188 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__19188) : buf_fn.call(null,G__19188));
})())));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19189 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19189 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19190){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19190 = meta19190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19189.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19189.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__19192 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__19192) : self__.ensure_mult.call(null,G__19192));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19193 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19193) : cljs.core.deref.call(null,G__19193));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19194 = self__.mults;
var G__19195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19194,G__19195) : cljs.core.reset_BANG_.call(null,G__19194,G__19195));
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19191){
var self__ = this;
var _19191__$1 = this;
return self__.meta19190;
});})(mults,ensure_mult))
;

cljs.core.async.t19189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19191,meta19190__$1){
var self__ = this;
var _19191__$1 = this;
return (new cljs.core.async.t19189(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19190__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19189.cljs$lang$type = true;

cljs.core.async.t19189.cljs$lang$ctorStr = "cljs.core.async/t19189";

cljs.core.async.t19189.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19189");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19189 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t19189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19190){
return (new cljs.core.async.t19189(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19190));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19189(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6463__auto___19318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19318,mults,ensure_mult,p){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19318,mults,ensure_mult,p){
return (function (state_19267){
var state_val_19268 = (state_19267[(1)]);
if((state_val_19268 === (7))){
var inst_19263 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19269_19319 = state_19267__$1;
(statearr_19269_19319[(2)] = inst_19263);

(statearr_19269_19319[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (20))){
var state_19267__$1 = state_19267;
var statearr_19270_19320 = state_19267__$1;
(statearr_19270_19320[(2)] = null);

(statearr_19270_19320[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (1))){
var state_19267__$1 = state_19267;
var statearr_19271_19321 = state_19267__$1;
(statearr_19271_19321[(2)] = null);

(statearr_19271_19321[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (24))){
var inst_19246 = (state_19267[(7)]);
var inst_19255 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19246);
var state_19267__$1 = state_19267;
var statearr_19272_19322 = state_19267__$1;
(statearr_19272_19322[(2)] = inst_19255);

(statearr_19272_19322[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (4))){
var inst_19198 = (state_19267[(8)]);
var inst_19198__$1 = (state_19267[(2)]);
var inst_19199 = (inst_19198__$1 == null);
var state_19267__$1 = (function (){var statearr_19273 = state_19267;
(statearr_19273[(8)] = inst_19198__$1);

return statearr_19273;
})();
if(cljs.core.truth_(inst_19199)){
var statearr_19274_19323 = state_19267__$1;
(statearr_19274_19323[(1)] = (5));

} else {
var statearr_19275_19324 = state_19267__$1;
(statearr_19275_19324[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (15))){
var inst_19240 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19276_19325 = state_19267__$1;
(statearr_19276_19325[(2)] = inst_19240);

(statearr_19276_19325[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (21))){
var inst_19260 = (state_19267[(2)]);
var state_19267__$1 = (function (){var statearr_19277 = state_19267;
(statearr_19277[(9)] = inst_19260);

return statearr_19277;
})();
var statearr_19278_19326 = state_19267__$1;
(statearr_19278_19326[(2)] = null);

(statearr_19278_19326[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (13))){
var inst_19222 = (state_19267[(10)]);
var inst_19224 = cljs.core.chunked_seq_QMARK_(inst_19222);
var state_19267__$1 = state_19267;
if(inst_19224){
var statearr_19279_19327 = state_19267__$1;
(statearr_19279_19327[(1)] = (16));

} else {
var statearr_19280_19328 = state_19267__$1;
(statearr_19280_19328[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (22))){
var inst_19252 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
if(cljs.core.truth_(inst_19252)){
var statearr_19281_19329 = state_19267__$1;
(statearr_19281_19329[(1)] = (23));

} else {
var statearr_19282_19330 = state_19267__$1;
(statearr_19282_19330[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (6))){
var inst_19198 = (state_19267[(8)]);
var inst_19246 = (state_19267[(7)]);
var inst_19248 = (state_19267[(11)]);
var inst_19246__$1 = (function (){var G__19283 = inst_19198;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__19283) : topic_fn.call(null,G__19283));
})();
var inst_19247 = (function (){var G__19284 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19284) : cljs.core.deref.call(null,G__19284));
})();
var inst_19248__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19247,inst_19246__$1);
var state_19267__$1 = (function (){var statearr_19285 = state_19267;
(statearr_19285[(7)] = inst_19246__$1);

(statearr_19285[(11)] = inst_19248__$1);

return statearr_19285;
})();
if(cljs.core.truth_(inst_19248__$1)){
var statearr_19286_19331 = state_19267__$1;
(statearr_19286_19331[(1)] = (19));

} else {
var statearr_19287_19332 = state_19267__$1;
(statearr_19287_19332[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (25))){
var inst_19257 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19288_19333 = state_19267__$1;
(statearr_19288_19333[(2)] = inst_19257);

(statearr_19288_19333[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (17))){
var inst_19222 = (state_19267[(10)]);
var inst_19231 = cljs.core.first(inst_19222);
var inst_19232 = cljs.core.async.muxch_STAR_(inst_19231);
var inst_19233 = cljs.core.async.close_BANG_(inst_19232);
var inst_19234 = cljs.core.next(inst_19222);
var inst_19208 = inst_19234;
var inst_19209 = null;
var inst_19210 = (0);
var inst_19211 = (0);
var state_19267__$1 = (function (){var statearr_19289 = state_19267;
(statearr_19289[(12)] = inst_19211);

(statearr_19289[(13)] = inst_19210);

(statearr_19289[(14)] = inst_19233);

(statearr_19289[(15)] = inst_19209);

(statearr_19289[(16)] = inst_19208);

return statearr_19289;
})();
var statearr_19290_19334 = state_19267__$1;
(statearr_19290_19334[(2)] = null);

(statearr_19290_19334[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (3))){
var inst_19265 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19267__$1,inst_19265);
} else {
if((state_val_19268 === (12))){
var inst_19242 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19291_19335 = state_19267__$1;
(statearr_19291_19335[(2)] = inst_19242);

(statearr_19291_19335[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (2))){
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19267__$1,(4),ch);
} else {
if((state_val_19268 === (23))){
var state_19267__$1 = state_19267;
var statearr_19292_19336 = state_19267__$1;
(statearr_19292_19336[(2)] = null);

(statearr_19292_19336[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (19))){
var inst_19198 = (state_19267[(8)]);
var inst_19248 = (state_19267[(11)]);
var inst_19250 = cljs.core.async.muxch_STAR_(inst_19248);
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19267__$1,(22),inst_19250,inst_19198);
} else {
if((state_val_19268 === (11))){
var inst_19222 = (state_19267[(10)]);
var inst_19208 = (state_19267[(16)]);
var inst_19222__$1 = cljs.core.seq(inst_19208);
var state_19267__$1 = (function (){var statearr_19293 = state_19267;
(statearr_19293[(10)] = inst_19222__$1);

return statearr_19293;
})();
if(inst_19222__$1){
var statearr_19294_19337 = state_19267__$1;
(statearr_19294_19337[(1)] = (13));

} else {
var statearr_19295_19338 = state_19267__$1;
(statearr_19295_19338[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (9))){
var inst_19244 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19296_19339 = state_19267__$1;
(statearr_19296_19339[(2)] = inst_19244);

(statearr_19296_19339[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (5))){
var inst_19205 = (function (){var G__19297 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19297) : cljs.core.deref.call(null,G__19297));
})();
var inst_19206 = cljs.core.vals(inst_19205);
var inst_19207 = cljs.core.seq(inst_19206);
var inst_19208 = inst_19207;
var inst_19209 = null;
var inst_19210 = (0);
var inst_19211 = (0);
var state_19267__$1 = (function (){var statearr_19298 = state_19267;
(statearr_19298[(12)] = inst_19211);

(statearr_19298[(13)] = inst_19210);

(statearr_19298[(15)] = inst_19209);

(statearr_19298[(16)] = inst_19208);

return statearr_19298;
})();
var statearr_19299_19340 = state_19267__$1;
(statearr_19299_19340[(2)] = null);

(statearr_19299_19340[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (14))){
var state_19267__$1 = state_19267;
var statearr_19303_19341 = state_19267__$1;
(statearr_19303_19341[(2)] = null);

(statearr_19303_19341[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (16))){
var inst_19222 = (state_19267[(10)]);
var inst_19226 = cljs.core.chunk_first(inst_19222);
var inst_19227 = cljs.core.chunk_rest(inst_19222);
var inst_19228 = cljs.core.count(inst_19226);
var inst_19208 = inst_19227;
var inst_19209 = inst_19226;
var inst_19210 = inst_19228;
var inst_19211 = (0);
var state_19267__$1 = (function (){var statearr_19304 = state_19267;
(statearr_19304[(12)] = inst_19211);

(statearr_19304[(13)] = inst_19210);

(statearr_19304[(15)] = inst_19209);

(statearr_19304[(16)] = inst_19208);

return statearr_19304;
})();
var statearr_19305_19342 = state_19267__$1;
(statearr_19305_19342[(2)] = null);

(statearr_19305_19342[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (10))){
var inst_19211 = (state_19267[(12)]);
var inst_19210 = (state_19267[(13)]);
var inst_19209 = (state_19267[(15)]);
var inst_19208 = (state_19267[(16)]);
var inst_19216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19209,inst_19211);
var inst_19217 = cljs.core.async.muxch_STAR_(inst_19216);
var inst_19218 = cljs.core.async.close_BANG_(inst_19217);
var inst_19219 = (inst_19211 + (1));
var tmp19300 = inst_19210;
var tmp19301 = inst_19209;
var tmp19302 = inst_19208;
var inst_19208__$1 = tmp19302;
var inst_19209__$1 = tmp19301;
var inst_19210__$1 = tmp19300;
var inst_19211__$1 = inst_19219;
var state_19267__$1 = (function (){var statearr_19306 = state_19267;
(statearr_19306[(12)] = inst_19211__$1);

(statearr_19306[(17)] = inst_19218);

(statearr_19306[(13)] = inst_19210__$1);

(statearr_19306[(15)] = inst_19209__$1);

(statearr_19306[(16)] = inst_19208__$1);

return statearr_19306;
})();
var statearr_19307_19343 = state_19267__$1;
(statearr_19307_19343[(2)] = null);

(statearr_19307_19343[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (18))){
var inst_19237 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19308_19344 = state_19267__$1;
(statearr_19308_19344[(2)] = inst_19237);

(statearr_19308_19344[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19268 === (8))){
var inst_19211 = (state_19267[(12)]);
var inst_19210 = (state_19267[(13)]);
var inst_19213 = (inst_19211 < inst_19210);
var inst_19214 = inst_19213;
var state_19267__$1 = state_19267;
if(cljs.core.truth_(inst_19214)){
var statearr_19309_19345 = state_19267__$1;
(statearr_19309_19345[(1)] = (10));

} else {
var statearr_19310_19346 = state_19267__$1;
(statearr_19310_19346[(1)] = (11));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___19318,mults,ensure_mult,p))
;
return ((function (switch__6383__auto__,c__6463__auto___19318,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6384__auto__ = null;
var cljs$core$async$pub_$_state_machine__6384__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = cljs$core$async$pub_$_state_machine__6384__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var cljs$core$async$pub_$_state_machine__6384__auto____1 = (function (state_19267){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19267);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19315){if((e19315 instanceof Object)){
var ex__6387__auto__ = e19315;
var statearr_19316_19347 = state_19267;
(statearr_19316_19347[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19267);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19348 = state_19267;
state_19267 = G__19348;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6384__auto__ = function(state_19267){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6384__auto____1.call(this,state_19267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6384__auto____0;
cljs$core$async$pub_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6384__auto____1;
return cljs$core$async$pub_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19318,mults,ensure_mult,p))
})();
var state__6465__auto__ = (function (){var statearr_19317 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19318);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19318,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__19429 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19429) : cljs.core.atom.call(null,G__19429));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__6463__auto___19502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19468){
var state_val_19469 = (state_19468[(1)]);
if((state_val_19469 === (7))){
var state_19468__$1 = state_19468;
var statearr_19470_19503 = state_19468__$1;
(statearr_19470_19503[(2)] = null);

(statearr_19470_19503[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (1))){
var state_19468__$1 = state_19468;
var statearr_19471_19504 = state_19468__$1;
(statearr_19471_19504[(2)] = null);

(statearr_19471_19504[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (4))){
var inst_19432 = (state_19468[(7)]);
var inst_19434 = (inst_19432 < cnt);
var state_19468__$1 = state_19468;
if(cljs.core.truth_(inst_19434)){
var statearr_19472_19505 = state_19468__$1;
(statearr_19472_19505[(1)] = (6));

} else {
var statearr_19473_19506 = state_19468__$1;
(statearr_19473_19506[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (15))){
var inst_19464 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
var statearr_19474_19507 = state_19468__$1;
(statearr_19474_19507[(2)] = inst_19464);

(statearr_19474_19507[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (13))){
var inst_19457 = cljs.core.async.close_BANG_(out);
var state_19468__$1 = state_19468;
var statearr_19475_19508 = state_19468__$1;
(statearr_19475_19508[(2)] = inst_19457);

(statearr_19475_19508[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (6))){
var state_19468__$1 = state_19468;
var statearr_19476_19509 = state_19468__$1;
(statearr_19476_19509[(2)] = null);

(statearr_19476_19509[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (3))){
var inst_19466 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19468__$1,inst_19466);
} else {
if((state_val_19469 === (12))){
var inst_19454 = (state_19468[(8)]);
var inst_19454__$1 = (state_19468[(2)]);
var inst_19455 = cljs.core.some(cljs.core.nil_QMARK_,inst_19454__$1);
var state_19468__$1 = (function (){var statearr_19477 = state_19468;
(statearr_19477[(8)] = inst_19454__$1);

return statearr_19477;
})();
if(cljs.core.truth_(inst_19455)){
var statearr_19478_19510 = state_19468__$1;
(statearr_19478_19510[(1)] = (13));

} else {
var statearr_19479_19511 = state_19468__$1;
(statearr_19479_19511[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (2))){
var inst_19431 = (function (){var G__19480 = dctr;
var G__19481 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19480,G__19481) : cljs.core.reset_BANG_.call(null,G__19480,G__19481));
})();
var inst_19432 = (0);
var state_19468__$1 = (function (){var statearr_19482 = state_19468;
(statearr_19482[(7)] = inst_19432);

(statearr_19482[(9)] = inst_19431);

return statearr_19482;
})();
var statearr_19483_19512 = state_19468__$1;
(statearr_19483_19512[(2)] = null);

(statearr_19483_19512[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (11))){
var inst_19432 = (state_19468[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19468,(10),Object,null,(9));
var inst_19441 = (function (){var G__19484 = inst_19432;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__19484) : chs__$1.call(null,G__19484));
})();
var inst_19442 = (function (){var G__19485 = inst_19432;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__19485) : done.call(null,G__19485));
})();
var inst_19443 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19441,inst_19442);
var state_19468__$1 = state_19468;
var statearr_19486_19513 = state_19468__$1;
(statearr_19486_19513[(2)] = inst_19443);


cljs.core.async.impl.ioc_helpers.process_exception(state_19468__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (9))){
var inst_19432 = (state_19468[(7)]);
var inst_19445 = (state_19468[(2)]);
var inst_19446 = (inst_19432 + (1));
var inst_19432__$1 = inst_19446;
var state_19468__$1 = (function (){var statearr_19487 = state_19468;
(statearr_19487[(7)] = inst_19432__$1);

(statearr_19487[(10)] = inst_19445);

return statearr_19487;
})();
var statearr_19488_19514 = state_19468__$1;
(statearr_19488_19514[(2)] = null);

(statearr_19488_19514[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (5))){
var inst_19452 = (state_19468[(2)]);
var state_19468__$1 = (function (){var statearr_19489 = state_19468;
(statearr_19489[(11)] = inst_19452);

return statearr_19489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19468__$1,(12),dchan);
} else {
if((state_val_19469 === (14))){
var inst_19454 = (state_19468[(8)]);
var inst_19459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19454);
var state_19468__$1 = state_19468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19468__$1,(16),out,inst_19459);
} else {
if((state_val_19469 === (16))){
var inst_19461 = (state_19468[(2)]);
var state_19468__$1 = (function (){var statearr_19490 = state_19468;
(statearr_19490[(12)] = inst_19461);

return statearr_19490;
})();
var statearr_19491_19515 = state_19468__$1;
(statearr_19491_19515[(2)] = null);

(statearr_19491_19515[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (10))){
var inst_19436 = (state_19468[(2)]);
var inst_19437 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19468__$1 = (function (){var statearr_19492 = state_19468;
(statearr_19492[(13)] = inst_19436);

return statearr_19492;
})();
var statearr_19493_19516 = state_19468__$1;
(statearr_19493_19516[(2)] = inst_19437);


cljs.core.async.impl.ioc_helpers.process_exception(state_19468__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19469 === (8))){
var inst_19450 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
var statearr_19494_19517 = state_19468__$1;
(statearr_19494_19517[(2)] = inst_19450);

(statearr_19494_19517[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6383__auto__,c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6384__auto__ = null;
var cljs$core$async$map_$_state_machine__6384__auto____0 = (function (){
var statearr_19498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19498[(0)] = cljs$core$async$map_$_state_machine__6384__auto__);

(statearr_19498[(1)] = (1));

return statearr_19498;
});
var cljs$core$async$map_$_state_machine__6384__auto____1 = (function (state_19468){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19468);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19499){if((e19499 instanceof Object)){
var ex__6387__auto__ = e19499;
var statearr_19500_19518 = state_19468;
(statearr_19500_19518[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19468);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19519 = state_19468;
state_19468 = G__19519;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6384__auto__ = function(state_19468){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6384__auto____1.call(this,state_19468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6384__auto____0;
cljs$core$async$map_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6384__auto____1;
return cljs$core$async$map_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6465__auto__ = (function (){var statearr_19501 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19502);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19502,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___19629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19629,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19629,out){
return (function (state_19605){
var state_val_19606 = (state_19605[(1)]);
if((state_val_19606 === (7))){
var inst_19584 = (state_19605[(7)]);
var inst_19585 = (state_19605[(8)]);
var inst_19584__$1 = (state_19605[(2)]);
var inst_19585__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19584__$1,(0),null);
var inst_19586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19584__$1,(1),null);
var inst_19587 = (inst_19585__$1 == null);
var state_19605__$1 = (function (){var statearr_19607 = state_19605;
(statearr_19607[(7)] = inst_19584__$1);

(statearr_19607[(8)] = inst_19585__$1);

(statearr_19607[(9)] = inst_19586);

return statearr_19607;
})();
if(cljs.core.truth_(inst_19587)){
var statearr_19608_19630 = state_19605__$1;
(statearr_19608_19630[(1)] = (8));

} else {
var statearr_19609_19631 = state_19605__$1;
(statearr_19609_19631[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (1))){
var inst_19576 = cljs.core.vec(chs);
var inst_19577 = inst_19576;
var state_19605__$1 = (function (){var statearr_19610 = state_19605;
(statearr_19610[(10)] = inst_19577);

return statearr_19610;
})();
var statearr_19611_19632 = state_19605__$1;
(statearr_19611_19632[(2)] = null);

(statearr_19611_19632[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (4))){
var inst_19577 = (state_19605[(10)]);
var state_19605__$1 = state_19605;
return cljs.core.async.ioc_alts_BANG_(state_19605__$1,(7),inst_19577);
} else {
if((state_val_19606 === (6))){
var inst_19601 = (state_19605[(2)]);
var state_19605__$1 = state_19605;
var statearr_19612_19633 = state_19605__$1;
(statearr_19612_19633[(2)] = inst_19601);

(statearr_19612_19633[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (3))){
var inst_19603 = (state_19605[(2)]);
var state_19605__$1 = state_19605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19605__$1,inst_19603);
} else {
if((state_val_19606 === (2))){
var inst_19577 = (state_19605[(10)]);
var inst_19579 = cljs.core.count(inst_19577);
var inst_19580 = (inst_19579 > (0));
var state_19605__$1 = state_19605;
if(cljs.core.truth_(inst_19580)){
var statearr_19614_19634 = state_19605__$1;
(statearr_19614_19634[(1)] = (4));

} else {
var statearr_19615_19635 = state_19605__$1;
(statearr_19615_19635[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (11))){
var inst_19577 = (state_19605[(10)]);
var inst_19594 = (state_19605[(2)]);
var tmp19613 = inst_19577;
var inst_19577__$1 = tmp19613;
var state_19605__$1 = (function (){var statearr_19616 = state_19605;
(statearr_19616[(10)] = inst_19577__$1);

(statearr_19616[(11)] = inst_19594);

return statearr_19616;
})();
var statearr_19617_19636 = state_19605__$1;
(statearr_19617_19636[(2)] = null);

(statearr_19617_19636[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (9))){
var inst_19585 = (state_19605[(8)]);
var state_19605__$1 = state_19605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19605__$1,(11),out,inst_19585);
} else {
if((state_val_19606 === (5))){
var inst_19599 = cljs.core.async.close_BANG_(out);
var state_19605__$1 = state_19605;
var statearr_19618_19637 = state_19605__$1;
(statearr_19618_19637[(2)] = inst_19599);

(statearr_19618_19637[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (10))){
var inst_19597 = (state_19605[(2)]);
var state_19605__$1 = state_19605;
var statearr_19619_19638 = state_19605__$1;
(statearr_19619_19638[(2)] = inst_19597);

(statearr_19619_19638[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19606 === (8))){
var inst_19584 = (state_19605[(7)]);
var inst_19585 = (state_19605[(8)]);
var inst_19577 = (state_19605[(10)]);
var inst_19586 = (state_19605[(9)]);
var inst_19589 = (function (){var c = inst_19586;
var v = inst_19585;
var vec__19582 = inst_19584;
var cs = inst_19577;
return ((function (c,v,vec__19582,cs,inst_19584,inst_19585,inst_19577,inst_19586,state_val_19606,c__6463__auto___19629,out){
return (function (p1__19520_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19520_SHARP_);
});
;})(c,v,vec__19582,cs,inst_19584,inst_19585,inst_19577,inst_19586,state_val_19606,c__6463__auto___19629,out))
})();
var inst_19590 = cljs.core.filterv(inst_19589,inst_19577);
var inst_19577__$1 = inst_19590;
var state_19605__$1 = (function (){var statearr_19620 = state_19605;
(statearr_19620[(10)] = inst_19577__$1);

return statearr_19620;
})();
var statearr_19621_19639 = state_19605__$1;
(statearr_19621_19639[(2)] = null);

(statearr_19621_19639[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___19629,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19629,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6384__auto__ = null;
var cljs$core$async$merge_$_state_machine__6384__auto____0 = (function (){
var statearr_19625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19625[(0)] = cljs$core$async$merge_$_state_machine__6384__auto__);

(statearr_19625[(1)] = (1));

return statearr_19625;
});
var cljs$core$async$merge_$_state_machine__6384__auto____1 = (function (state_19605){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19605);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19626){if((e19626 instanceof Object)){
var ex__6387__auto__ = e19626;
var statearr_19627_19640 = state_19605;
(statearr_19627_19640[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19605);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19641 = state_19605;
state_19605 = G__19641;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6384__auto__ = function(state_19605){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6384__auto____1.call(this,state_19605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6384__auto____0;
cljs$core$async$merge_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6384__auto____1;
return cljs$core$async$merge_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19629,out))
})();
var state__6465__auto__ = (function (){var statearr_19628 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19629);

return statearr_19628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19629,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___19737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19737,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19737,out){
return (function (state_19714){
var state_val_19715 = (state_19714[(1)]);
if((state_val_19715 === (7))){
var inst_19696 = (state_19714[(7)]);
var inst_19696__$1 = (state_19714[(2)]);
var inst_19697 = (inst_19696__$1 == null);
var inst_19698 = cljs.core.not(inst_19697);
var state_19714__$1 = (function (){var statearr_19716 = state_19714;
(statearr_19716[(7)] = inst_19696__$1);

return statearr_19716;
})();
if(inst_19698){
var statearr_19717_19738 = state_19714__$1;
(statearr_19717_19738[(1)] = (8));

} else {
var statearr_19718_19739 = state_19714__$1;
(statearr_19718_19739[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (1))){
var inst_19691 = (0);
var state_19714__$1 = (function (){var statearr_19719 = state_19714;
(statearr_19719[(8)] = inst_19691);

return statearr_19719;
})();
var statearr_19720_19740 = state_19714__$1;
(statearr_19720_19740[(2)] = null);

(statearr_19720_19740[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (4))){
var state_19714__$1 = state_19714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19714__$1,(7),ch);
} else {
if((state_val_19715 === (6))){
var inst_19709 = (state_19714[(2)]);
var state_19714__$1 = state_19714;
var statearr_19721_19741 = state_19714__$1;
(statearr_19721_19741[(2)] = inst_19709);

(statearr_19721_19741[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (3))){
var inst_19711 = (state_19714[(2)]);
var inst_19712 = cljs.core.async.close_BANG_(out);
var state_19714__$1 = (function (){var statearr_19722 = state_19714;
(statearr_19722[(9)] = inst_19711);

return statearr_19722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19714__$1,inst_19712);
} else {
if((state_val_19715 === (2))){
var inst_19691 = (state_19714[(8)]);
var inst_19693 = (inst_19691 < n);
var state_19714__$1 = state_19714;
if(cljs.core.truth_(inst_19693)){
var statearr_19723_19742 = state_19714__$1;
(statearr_19723_19742[(1)] = (4));

} else {
var statearr_19724_19743 = state_19714__$1;
(statearr_19724_19743[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (11))){
var inst_19691 = (state_19714[(8)]);
var inst_19701 = (state_19714[(2)]);
var inst_19702 = (inst_19691 + (1));
var inst_19691__$1 = inst_19702;
var state_19714__$1 = (function (){var statearr_19725 = state_19714;
(statearr_19725[(10)] = inst_19701);

(statearr_19725[(8)] = inst_19691__$1);

return statearr_19725;
})();
var statearr_19726_19744 = state_19714__$1;
(statearr_19726_19744[(2)] = null);

(statearr_19726_19744[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (9))){
var state_19714__$1 = state_19714;
var statearr_19727_19745 = state_19714__$1;
(statearr_19727_19745[(2)] = null);

(statearr_19727_19745[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (5))){
var state_19714__$1 = state_19714;
var statearr_19728_19746 = state_19714__$1;
(statearr_19728_19746[(2)] = null);

(statearr_19728_19746[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (10))){
var inst_19706 = (state_19714[(2)]);
var state_19714__$1 = state_19714;
var statearr_19729_19747 = state_19714__$1;
(statearr_19729_19747[(2)] = inst_19706);

(statearr_19729_19747[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19715 === (8))){
var inst_19696 = (state_19714[(7)]);
var state_19714__$1 = state_19714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19714__$1,(11),out,inst_19696);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___19737,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19737,out){
return (function() {
var cljs$core$async$take_$_state_machine__6384__auto__ = null;
var cljs$core$async$take_$_state_machine__6384__auto____0 = (function (){
var statearr_19733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19733[(0)] = cljs$core$async$take_$_state_machine__6384__auto__);

(statearr_19733[(1)] = (1));

return statearr_19733;
});
var cljs$core$async$take_$_state_machine__6384__auto____1 = (function (state_19714){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19714);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19734){if((e19734 instanceof Object)){
var ex__6387__auto__ = e19734;
var statearr_19735_19748 = state_19714;
(statearr_19735_19748[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19714);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19749 = state_19714;
state_19714 = G__19749;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6384__auto__ = function(state_19714){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6384__auto____1.call(this,state_19714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6384__auto____0;
cljs$core$async$take_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6384__auto____1;
return cljs$core$async$take_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19737,out))
})();
var state__6465__auto__ = (function (){var statearr_19736 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19737);

return statearr_19736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19737,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t19762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19762 = (function (ch,f,map_LT_,meta19763){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19763 = meta19763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t19765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19765 = (function (fn1,_,meta19763,map_LT_,f,ch,meta19766){
this.fn1 = fn1;
this._ = _;
this.meta19763 = meta19763;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19766 = meta19766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t19765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19750_SHARP_){
var G__19768 = (((p1__19750_SHARP_ == null))?null:(function (){var G__19769 = p1__19750_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19769) : self__.f.call(null,G__19769));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19768) : f1.call(null,G__19768));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19767){
var self__ = this;
var _19767__$1 = this;
return self__.meta19766;
});})(___$1))
;

cljs.core.async.t19765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19767,meta19766__$1){
var self__ = this;
var _19767__$1 = this;
return (new cljs.core.async.t19765(self__.fn1,self__._,self__.meta19763,self__.map_LT_,self__.f,self__.ch,meta19766__$1));
});})(___$1))
;

cljs.core.async.t19765.cljs$lang$type = true;

cljs.core.async.t19765.cljs$lang$ctorStr = "cljs.core.async/t19765";

cljs.core.async.t19765.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19765");
});})(___$1))
;

cljs.core.async.__GT_t19765 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19765(fn1__$1,___$2,meta19763__$1,map_LT___$1,f__$1,ch__$1,meta19766){
return (new cljs.core.async.t19765(fn1__$1,___$2,meta19763__$1,map_LT___$1,f__$1,ch__$1,meta19766));
});})(___$1))
;

}

return (new cljs.core.async.t19765(fn1,___$1,self__.meta19763,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !(((function (){var G__19770 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19770) : cljs.core.deref.call(null,G__19770));
})() == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19771 = (function (){var G__19772 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19772) : cljs.core.deref.call(null,G__19772));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19771) : self__.f.call(null,G__19771));
})());
} else {
return ret;
}
});

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19764){
var self__ = this;
var _19764__$1 = this;
return self__.meta19763;
});

cljs.core.async.t19762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19764,meta19763__$1){
var self__ = this;
var _19764__$1 = this;
return (new cljs.core.async.t19762(self__.ch,self__.f,self__.map_LT_,meta19763__$1));
});

cljs.core.async.t19762.cljs$lang$type = true;

cljs.core.async.t19762.cljs$lang$ctorStr = "cljs.core.async/t19762";

cljs.core.async.t19762.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19762");
});

cljs.core.async.__GT_t19762 = (function cljs$core$async$map_LT__$___GT_t19762(ch__$1,f__$1,map_LT___$1,meta19763){
return (new cljs.core.async.t19762(ch__$1,f__$1,map_LT___$1,meta19763));
});

}

return (new cljs.core.async.t19762(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19777 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19777 = (function (ch,f,map_GT_,meta19778){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19778 = meta19778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__19780 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19780) : self__.f.call(null,G__19780));
})(),fn1);
});

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19779){
var self__ = this;
var _19779__$1 = this;
return self__.meta19778;
});

cljs.core.async.t19777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19779,meta19778__$1){
var self__ = this;
var _19779__$1 = this;
return (new cljs.core.async.t19777(self__.ch,self__.f,self__.map_GT_,meta19778__$1));
});

cljs.core.async.t19777.cljs$lang$type = true;

cljs.core.async.t19777.cljs$lang$ctorStr = "cljs.core.async/t19777";

cljs.core.async.t19777.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19777");
});

cljs.core.async.__GT_t19777 = (function cljs$core$async$map_GT__$___GT_t19777(ch__$1,f__$1,map_GT___$1,meta19778){
return (new cljs.core.async.t19777(ch__$1,f__$1,map_GT___$1,meta19778));
});

}

return (new cljs.core.async.t19777(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19785 = (function (ch,p,filter_GT_,meta19786){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19786 = meta19786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__19788 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__19788) : self__.p.call(null,G__19788));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19787){
var self__ = this;
var _19787__$1 = this;
return self__.meta19786;
});

cljs.core.async.t19785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19787,meta19786__$1){
var self__ = this;
var _19787__$1 = this;
return (new cljs.core.async.t19785(self__.ch,self__.p,self__.filter_GT_,meta19786__$1));
});

cljs.core.async.t19785.cljs$lang$type = true;

cljs.core.async.t19785.cljs$lang$ctorStr = "cljs.core.async/t19785";

cljs.core.async.t19785.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19785");
});

cljs.core.async.__GT_t19785 = (function cljs$core$async$filter_GT__$___GT_t19785(ch__$1,p__$1,filter_GT___$1,meta19786){
return (new cljs.core.async.t19785(ch__$1,p__$1,filter_GT___$1,meta19786));
});

}

return (new cljs.core.async.t19785(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___19876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19876,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19876,out){
return (function (state_19854){
var state_val_19855 = (state_19854[(1)]);
if((state_val_19855 === (7))){
var inst_19850 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
var statearr_19856_19877 = state_19854__$1;
(statearr_19856_19877[(2)] = inst_19850);

(statearr_19856_19877[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (1))){
var state_19854__$1 = state_19854;
var statearr_19857_19878 = state_19854__$1;
(statearr_19857_19878[(2)] = null);

(statearr_19857_19878[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (4))){
var inst_19836 = (state_19854[(7)]);
var inst_19836__$1 = (state_19854[(2)]);
var inst_19837 = (inst_19836__$1 == null);
var state_19854__$1 = (function (){var statearr_19858 = state_19854;
(statearr_19858[(7)] = inst_19836__$1);

return statearr_19858;
})();
if(cljs.core.truth_(inst_19837)){
var statearr_19859_19879 = state_19854__$1;
(statearr_19859_19879[(1)] = (5));

} else {
var statearr_19860_19880 = state_19854__$1;
(statearr_19860_19880[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (6))){
var inst_19836 = (state_19854[(7)]);
var inst_19841 = (function (){var G__19861 = inst_19836;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19861) : p.call(null,G__19861));
})();
var state_19854__$1 = state_19854;
if(cljs.core.truth_(inst_19841)){
var statearr_19862_19881 = state_19854__$1;
(statearr_19862_19881[(1)] = (8));

} else {
var statearr_19863_19882 = state_19854__$1;
(statearr_19863_19882[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (3))){
var inst_19852 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19854__$1,inst_19852);
} else {
if((state_val_19855 === (2))){
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19854__$1,(4),ch);
} else {
if((state_val_19855 === (11))){
var inst_19844 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
var statearr_19864_19883 = state_19854__$1;
(statearr_19864_19883[(2)] = inst_19844);

(statearr_19864_19883[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (9))){
var state_19854__$1 = state_19854;
var statearr_19865_19884 = state_19854__$1;
(statearr_19865_19884[(2)] = null);

(statearr_19865_19884[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (5))){
var inst_19839 = cljs.core.async.close_BANG_(out);
var state_19854__$1 = state_19854;
var statearr_19866_19885 = state_19854__$1;
(statearr_19866_19885[(2)] = inst_19839);

(statearr_19866_19885[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (10))){
var inst_19847 = (state_19854[(2)]);
var state_19854__$1 = (function (){var statearr_19867 = state_19854;
(statearr_19867[(8)] = inst_19847);

return statearr_19867;
})();
var statearr_19868_19886 = state_19854__$1;
(statearr_19868_19886[(2)] = null);

(statearr_19868_19886[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19855 === (8))){
var inst_19836 = (state_19854[(7)]);
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19854__$1,(11),out,inst_19836);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___19876,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19876,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6384__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6384__auto____0 = (function (){
var statearr_19872 = [null,null,null,null,null,null,null,null,null];
(statearr_19872[(0)] = cljs$core$async$filter_LT__$_state_machine__6384__auto__);

(statearr_19872[(1)] = (1));

return statearr_19872;
});
var cljs$core$async$filter_LT__$_state_machine__6384__auto____1 = (function (state_19854){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19854);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19873){if((e19873 instanceof Object)){
var ex__6387__auto__ = e19873;
var statearr_19874_19887 = state_19854;
(statearr_19874_19887[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19854);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19888 = state_19854;
state_19854 = G__19888;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6384__auto__ = function(state_19854){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6384__auto____1.call(this,state_19854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6384__auto____0;
cljs$core$async$filter_LT__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6384__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19876,out))
})();
var state__6465__auto__ = (function (){var statearr_19875 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19876);

return statearr_19875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19876,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__){
return (function (state_20058){
var state_val_20059 = (state_20058[(1)]);
if((state_val_20059 === (7))){
var inst_20054 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20060_20102 = state_20058__$1;
(statearr_20060_20102[(2)] = inst_20054);

(statearr_20060_20102[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (20))){
var inst_20024 = (state_20058[(7)]);
var inst_20035 = (state_20058[(2)]);
var inst_20036 = cljs.core.next(inst_20024);
var inst_20010 = inst_20036;
var inst_20011 = null;
var inst_20012 = (0);
var inst_20013 = (0);
var state_20058__$1 = (function (){var statearr_20061 = state_20058;
(statearr_20061[(8)] = inst_20011);

(statearr_20061[(9)] = inst_20013);

(statearr_20061[(10)] = inst_20010);

(statearr_20061[(11)] = inst_20012);

(statearr_20061[(12)] = inst_20035);

return statearr_20061;
})();
var statearr_20062_20103 = state_20058__$1;
(statearr_20062_20103[(2)] = null);

(statearr_20062_20103[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (1))){
var state_20058__$1 = state_20058;
var statearr_20063_20104 = state_20058__$1;
(statearr_20063_20104[(2)] = null);

(statearr_20063_20104[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (4))){
var inst_19999 = (state_20058[(13)]);
var inst_19999__$1 = (state_20058[(2)]);
var inst_20000 = (inst_19999__$1 == null);
var state_20058__$1 = (function (){var statearr_20064 = state_20058;
(statearr_20064[(13)] = inst_19999__$1);

return statearr_20064;
})();
if(cljs.core.truth_(inst_20000)){
var statearr_20065_20105 = state_20058__$1;
(statearr_20065_20105[(1)] = (5));

} else {
var statearr_20066_20106 = state_20058__$1;
(statearr_20066_20106[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (15))){
var state_20058__$1 = state_20058;
var statearr_20070_20107 = state_20058__$1;
(statearr_20070_20107[(2)] = null);

(statearr_20070_20107[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (21))){
var state_20058__$1 = state_20058;
var statearr_20071_20108 = state_20058__$1;
(statearr_20071_20108[(2)] = null);

(statearr_20071_20108[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (13))){
var inst_20011 = (state_20058[(8)]);
var inst_20013 = (state_20058[(9)]);
var inst_20010 = (state_20058[(10)]);
var inst_20012 = (state_20058[(11)]);
var inst_20020 = (state_20058[(2)]);
var inst_20021 = (inst_20013 + (1));
var tmp20067 = inst_20011;
var tmp20068 = inst_20010;
var tmp20069 = inst_20012;
var inst_20010__$1 = tmp20068;
var inst_20011__$1 = tmp20067;
var inst_20012__$1 = tmp20069;
var inst_20013__$1 = inst_20021;
var state_20058__$1 = (function (){var statearr_20072 = state_20058;
(statearr_20072[(8)] = inst_20011__$1);

(statearr_20072[(9)] = inst_20013__$1);

(statearr_20072[(10)] = inst_20010__$1);

(statearr_20072[(11)] = inst_20012__$1);

(statearr_20072[(14)] = inst_20020);

return statearr_20072;
})();
var statearr_20073_20109 = state_20058__$1;
(statearr_20073_20109[(2)] = null);

(statearr_20073_20109[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (22))){
var state_20058__$1 = state_20058;
var statearr_20074_20110 = state_20058__$1;
(statearr_20074_20110[(2)] = null);

(statearr_20074_20110[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (6))){
var inst_19999 = (state_20058[(13)]);
var inst_20008 = (function (){var G__20075 = inst_19999;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20075) : f.call(null,G__20075));
})();
var inst_20009 = cljs.core.seq(inst_20008);
var inst_20010 = inst_20009;
var inst_20011 = null;
var inst_20012 = (0);
var inst_20013 = (0);
var state_20058__$1 = (function (){var statearr_20076 = state_20058;
(statearr_20076[(8)] = inst_20011);

(statearr_20076[(9)] = inst_20013);

(statearr_20076[(10)] = inst_20010);

(statearr_20076[(11)] = inst_20012);

return statearr_20076;
})();
var statearr_20077_20111 = state_20058__$1;
(statearr_20077_20111[(2)] = null);

(statearr_20077_20111[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (17))){
var inst_20024 = (state_20058[(7)]);
var inst_20028 = cljs.core.chunk_first(inst_20024);
var inst_20029 = cljs.core.chunk_rest(inst_20024);
var inst_20030 = cljs.core.count(inst_20028);
var inst_20010 = inst_20029;
var inst_20011 = inst_20028;
var inst_20012 = inst_20030;
var inst_20013 = (0);
var state_20058__$1 = (function (){var statearr_20078 = state_20058;
(statearr_20078[(8)] = inst_20011);

(statearr_20078[(9)] = inst_20013);

(statearr_20078[(10)] = inst_20010);

(statearr_20078[(11)] = inst_20012);

return statearr_20078;
})();
var statearr_20079_20112 = state_20058__$1;
(statearr_20079_20112[(2)] = null);

(statearr_20079_20112[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (3))){
var inst_20056 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20058__$1,inst_20056);
} else {
if((state_val_20059 === (12))){
var inst_20044 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20080_20113 = state_20058__$1;
(statearr_20080_20113[(2)] = inst_20044);

(statearr_20080_20113[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (2))){
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20058__$1,(4),in$);
} else {
if((state_val_20059 === (23))){
var inst_20052 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20081_20114 = state_20058__$1;
(statearr_20081_20114[(2)] = inst_20052);

(statearr_20081_20114[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (19))){
var inst_20039 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20082_20115 = state_20058__$1;
(statearr_20082_20115[(2)] = inst_20039);

(statearr_20082_20115[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (11))){
var inst_20010 = (state_20058[(10)]);
var inst_20024 = (state_20058[(7)]);
var inst_20024__$1 = cljs.core.seq(inst_20010);
var state_20058__$1 = (function (){var statearr_20083 = state_20058;
(statearr_20083[(7)] = inst_20024__$1);

return statearr_20083;
})();
if(inst_20024__$1){
var statearr_20084_20116 = state_20058__$1;
(statearr_20084_20116[(1)] = (14));

} else {
var statearr_20085_20117 = state_20058__$1;
(statearr_20085_20117[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (9))){
var inst_20046 = (state_20058[(2)]);
var inst_20047 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20058__$1 = (function (){var statearr_20086 = state_20058;
(statearr_20086[(15)] = inst_20046);

return statearr_20086;
})();
if(cljs.core.truth_(inst_20047)){
var statearr_20087_20118 = state_20058__$1;
(statearr_20087_20118[(1)] = (21));

} else {
var statearr_20088_20119 = state_20058__$1;
(statearr_20088_20119[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (5))){
var inst_20002 = cljs.core.async.close_BANG_(out);
var state_20058__$1 = state_20058;
var statearr_20089_20120 = state_20058__$1;
(statearr_20089_20120[(2)] = inst_20002);

(statearr_20089_20120[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (14))){
var inst_20024 = (state_20058[(7)]);
var inst_20026 = cljs.core.chunked_seq_QMARK_(inst_20024);
var state_20058__$1 = state_20058;
if(inst_20026){
var statearr_20090_20121 = state_20058__$1;
(statearr_20090_20121[(1)] = (17));

} else {
var statearr_20091_20122 = state_20058__$1;
(statearr_20091_20122[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (16))){
var inst_20042 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20092_20123 = state_20058__$1;
(statearr_20092_20123[(2)] = inst_20042);

(statearr_20092_20123[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20059 === (10))){
var inst_20011 = (state_20058[(8)]);
var inst_20013 = (state_20058[(9)]);
var inst_20018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20011,inst_20013);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20058__$1,(13),out,inst_20018);
} else {
if((state_val_20059 === (18))){
var inst_20024 = (state_20058[(7)]);
var inst_20033 = cljs.core.first(inst_20024);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20058__$1,(20),out,inst_20033);
} else {
if((state_val_20059 === (8))){
var inst_20013 = (state_20058[(9)]);
var inst_20012 = (state_20058[(11)]);
var inst_20015 = (inst_20013 < inst_20012);
var inst_20016 = inst_20015;
var state_20058__$1 = state_20058;
if(cljs.core.truth_(inst_20016)){
var statearr_20093_20124 = state_20058__$1;
(statearr_20093_20124[(1)] = (10));

} else {
var statearr_20094_20125 = state_20058__$1;
(statearr_20094_20125[(1)] = (11));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto__))
;
return ((function (switch__6383__auto__,c__6463__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_20098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20098[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__);

(statearr_20098[(1)] = (1));

return statearr_20098;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1 = (function (state_20058){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20058);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20099){if((e20099 instanceof Object)){
var ex__6387__auto__ = e20099;
var statearr_20100_20126 = state_20058;
(statearr_20100_20126[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20058);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20127 = state_20058;
state_20058 = G__20127;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__ = function(state_20058){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1.call(this,state_20058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_20101 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_20101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto__))
);

return c__6463__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___20232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20232,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20232,out){
return (function (state_20207){
var state_val_20208 = (state_20207[(1)]);
if((state_val_20208 === (7))){
var inst_20202 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20209_20233 = state_20207__$1;
(statearr_20209_20233[(2)] = inst_20202);

(statearr_20209_20233[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (1))){
var inst_20184 = null;
var state_20207__$1 = (function (){var statearr_20210 = state_20207;
(statearr_20210[(7)] = inst_20184);

return statearr_20210;
})();
var statearr_20211_20234 = state_20207__$1;
(statearr_20211_20234[(2)] = null);

(statearr_20211_20234[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (4))){
var inst_20187 = (state_20207[(8)]);
var inst_20187__$1 = (state_20207[(2)]);
var inst_20188 = (inst_20187__$1 == null);
var inst_20189 = cljs.core.not(inst_20188);
var state_20207__$1 = (function (){var statearr_20212 = state_20207;
(statearr_20212[(8)] = inst_20187__$1);

return statearr_20212;
})();
if(inst_20189){
var statearr_20213_20235 = state_20207__$1;
(statearr_20213_20235[(1)] = (5));

} else {
var statearr_20214_20236 = state_20207__$1;
(statearr_20214_20236[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (6))){
var state_20207__$1 = state_20207;
var statearr_20215_20237 = state_20207__$1;
(statearr_20215_20237[(2)] = null);

(statearr_20215_20237[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (3))){
var inst_20204 = (state_20207[(2)]);
var inst_20205 = cljs.core.async.close_BANG_(out);
var state_20207__$1 = (function (){var statearr_20216 = state_20207;
(statearr_20216[(9)] = inst_20204);

return statearr_20216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20207__$1,inst_20205);
} else {
if((state_val_20208 === (2))){
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20207__$1,(4),ch);
} else {
if((state_val_20208 === (11))){
var inst_20187 = (state_20207[(8)]);
var inst_20196 = (state_20207[(2)]);
var inst_20184 = inst_20187;
var state_20207__$1 = (function (){var statearr_20217 = state_20207;
(statearr_20217[(10)] = inst_20196);

(statearr_20217[(7)] = inst_20184);

return statearr_20217;
})();
var statearr_20218_20238 = state_20207__$1;
(statearr_20218_20238[(2)] = null);

(statearr_20218_20238[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (9))){
var inst_20187 = (state_20207[(8)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20207__$1,(11),out,inst_20187);
} else {
if((state_val_20208 === (5))){
var inst_20187 = (state_20207[(8)]);
var inst_20184 = (state_20207[(7)]);
var inst_20191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20187,inst_20184);
var state_20207__$1 = state_20207;
if(inst_20191){
var statearr_20220_20239 = state_20207__$1;
(statearr_20220_20239[(1)] = (8));

} else {
var statearr_20221_20240 = state_20207__$1;
(statearr_20221_20240[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (10))){
var inst_20199 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20222_20241 = state_20207__$1;
(statearr_20222_20241[(2)] = inst_20199);

(statearr_20222_20241[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20208 === (8))){
var inst_20184 = (state_20207[(7)]);
var tmp20219 = inst_20184;
var inst_20184__$1 = tmp20219;
var state_20207__$1 = (function (){var statearr_20223 = state_20207;
(statearr_20223[(7)] = inst_20184__$1);

return statearr_20223;
})();
var statearr_20224_20242 = state_20207__$1;
(statearr_20224_20242[(2)] = null);

(statearr_20224_20242[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___20232,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20232,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6384__auto__ = null;
var cljs$core$async$unique_$_state_machine__6384__auto____0 = (function (){
var statearr_20228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20228[(0)] = cljs$core$async$unique_$_state_machine__6384__auto__);

(statearr_20228[(1)] = (1));

return statearr_20228;
});
var cljs$core$async$unique_$_state_machine__6384__auto____1 = (function (state_20207){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20207);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20229){if((e20229 instanceof Object)){
var ex__6387__auto__ = e20229;
var statearr_20230_20243 = state_20207;
(statearr_20230_20243[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20207);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20244 = state_20207;
state_20207 = G__20244;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6384__auto__ = function(state_20207){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6384__auto____1.call(this,state_20207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6384__auto____0;
cljs$core$async$unique_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6384__auto____1;
return cljs$core$async$unique_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20232,out))
})();
var state__6465__auto__ = (function (){var statearr_20231 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20232);

return statearr_20231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20232,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___20382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20382,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20382,out){
return (function (state_20352){
var state_val_20353 = (state_20352[(1)]);
if((state_val_20353 === (7))){
var inst_20348 = (state_20352[(2)]);
var state_20352__$1 = state_20352;
var statearr_20354_20383 = state_20352__$1;
(statearr_20354_20383[(2)] = inst_20348);

(statearr_20354_20383[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (1))){
var inst_20315 = (new Array(n));
var inst_20316 = inst_20315;
var inst_20317 = (0);
var state_20352__$1 = (function (){var statearr_20355 = state_20352;
(statearr_20355[(7)] = inst_20317);

(statearr_20355[(8)] = inst_20316);

return statearr_20355;
})();
var statearr_20356_20384 = state_20352__$1;
(statearr_20356_20384[(2)] = null);

(statearr_20356_20384[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (4))){
var inst_20320 = (state_20352[(9)]);
var inst_20320__$1 = (state_20352[(2)]);
var inst_20321 = (inst_20320__$1 == null);
var inst_20322 = cljs.core.not(inst_20321);
var state_20352__$1 = (function (){var statearr_20357 = state_20352;
(statearr_20357[(9)] = inst_20320__$1);

return statearr_20357;
})();
if(inst_20322){
var statearr_20358_20385 = state_20352__$1;
(statearr_20358_20385[(1)] = (5));

} else {
var statearr_20359_20386 = state_20352__$1;
(statearr_20359_20386[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (15))){
var inst_20342 = (state_20352[(2)]);
var state_20352__$1 = state_20352;
var statearr_20360_20387 = state_20352__$1;
(statearr_20360_20387[(2)] = inst_20342);

(statearr_20360_20387[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (13))){
var state_20352__$1 = state_20352;
var statearr_20361_20388 = state_20352__$1;
(statearr_20361_20388[(2)] = null);

(statearr_20361_20388[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (6))){
var inst_20317 = (state_20352[(7)]);
var inst_20338 = (inst_20317 > (0));
var state_20352__$1 = state_20352;
if(cljs.core.truth_(inst_20338)){
var statearr_20362_20389 = state_20352__$1;
(statearr_20362_20389[(1)] = (12));

} else {
var statearr_20363_20390 = state_20352__$1;
(statearr_20363_20390[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (3))){
var inst_20350 = (state_20352[(2)]);
var state_20352__$1 = state_20352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20352__$1,inst_20350);
} else {
if((state_val_20353 === (12))){
var inst_20316 = (state_20352[(8)]);
var inst_20340 = cljs.core.vec(inst_20316);
var state_20352__$1 = state_20352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20352__$1,(15),out,inst_20340);
} else {
if((state_val_20353 === (2))){
var state_20352__$1 = state_20352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20352__$1,(4),ch);
} else {
if((state_val_20353 === (11))){
var inst_20332 = (state_20352[(2)]);
var inst_20333 = (new Array(n));
var inst_20316 = inst_20333;
var inst_20317 = (0);
var state_20352__$1 = (function (){var statearr_20364 = state_20352;
(statearr_20364[(7)] = inst_20317);

(statearr_20364[(10)] = inst_20332);

(statearr_20364[(8)] = inst_20316);

return statearr_20364;
})();
var statearr_20365_20391 = state_20352__$1;
(statearr_20365_20391[(2)] = null);

(statearr_20365_20391[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (9))){
var inst_20316 = (state_20352[(8)]);
var inst_20330 = cljs.core.vec(inst_20316);
var state_20352__$1 = state_20352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20352__$1,(11),out,inst_20330);
} else {
if((state_val_20353 === (5))){
var inst_20317 = (state_20352[(7)]);
var inst_20320 = (state_20352[(9)]);
var inst_20325 = (state_20352[(11)]);
var inst_20316 = (state_20352[(8)]);
var inst_20324 = (inst_20316[inst_20317] = inst_20320);
var inst_20325__$1 = (inst_20317 + (1));
var inst_20326 = (inst_20325__$1 < n);
var state_20352__$1 = (function (){var statearr_20366 = state_20352;
(statearr_20366[(12)] = inst_20324);

(statearr_20366[(11)] = inst_20325__$1);

return statearr_20366;
})();
if(cljs.core.truth_(inst_20326)){
var statearr_20367_20392 = state_20352__$1;
(statearr_20367_20392[(1)] = (8));

} else {
var statearr_20368_20393 = state_20352__$1;
(statearr_20368_20393[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (14))){
var inst_20345 = (state_20352[(2)]);
var inst_20346 = cljs.core.async.close_BANG_(out);
var state_20352__$1 = (function (){var statearr_20370 = state_20352;
(statearr_20370[(13)] = inst_20345);

return statearr_20370;
})();
var statearr_20371_20394 = state_20352__$1;
(statearr_20371_20394[(2)] = inst_20346);

(statearr_20371_20394[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (10))){
var inst_20336 = (state_20352[(2)]);
var state_20352__$1 = state_20352;
var statearr_20372_20395 = state_20352__$1;
(statearr_20372_20395[(2)] = inst_20336);

(statearr_20372_20395[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20353 === (8))){
var inst_20325 = (state_20352[(11)]);
var inst_20316 = (state_20352[(8)]);
var tmp20369 = inst_20316;
var inst_20316__$1 = tmp20369;
var inst_20317 = inst_20325;
var state_20352__$1 = (function (){var statearr_20373 = state_20352;
(statearr_20373[(7)] = inst_20317);

(statearr_20373[(8)] = inst_20316__$1);

return statearr_20373;
})();
var statearr_20374_20396 = state_20352__$1;
(statearr_20374_20396[(2)] = null);

(statearr_20374_20396[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___20382,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20382,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6384__auto__ = null;
var cljs$core$async$partition_$_state_machine__6384__auto____0 = (function (){
var statearr_20378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20378[(0)] = cljs$core$async$partition_$_state_machine__6384__auto__);

(statearr_20378[(1)] = (1));

return statearr_20378;
});
var cljs$core$async$partition_$_state_machine__6384__auto____1 = (function (state_20352){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20352);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20379){if((e20379 instanceof Object)){
var ex__6387__auto__ = e20379;
var statearr_20380_20397 = state_20352;
(statearr_20380_20397[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20352);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20398 = state_20352;
state_20352 = G__20398;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6384__auto__ = function(state_20352){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6384__auto____1.call(this,state_20352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6384__auto____0;
cljs$core$async$partition_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6384__auto____1;
return cljs$core$async$partition_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20382,out))
})();
var state__6465__auto__ = (function (){var statearr_20381 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20382);

return statearr_20381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20382,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__6463__auto___20546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20546,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20546,out){
return (function (state_20515){
var state_val_20516 = (state_20515[(1)]);
if((state_val_20516 === (7))){
var inst_20511 = (state_20515[(2)]);
var state_20515__$1 = state_20515;
var statearr_20517_20547 = state_20515__$1;
(statearr_20517_20547[(2)] = inst_20511);

(statearr_20517_20547[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (1))){
var inst_20474 = [];
var inst_20475 = inst_20474;
var inst_20476 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_20515__$1 = (function (){var statearr_20518 = state_20515;
(statearr_20518[(7)] = inst_20476);

(statearr_20518[(8)] = inst_20475);

return statearr_20518;
})();
var statearr_20519_20548 = state_20515__$1;
(statearr_20519_20548[(2)] = null);

(statearr_20519_20548[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (4))){
var inst_20479 = (state_20515[(9)]);
var inst_20479__$1 = (state_20515[(2)]);
var inst_20480 = (inst_20479__$1 == null);
var inst_20481 = cljs.core.not(inst_20480);
var state_20515__$1 = (function (){var statearr_20520 = state_20515;
(statearr_20520[(9)] = inst_20479__$1);

return statearr_20520;
})();
if(inst_20481){
var statearr_20521_20549 = state_20515__$1;
(statearr_20521_20549[(1)] = (5));

} else {
var statearr_20522_20550 = state_20515__$1;
(statearr_20522_20550[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (15))){
var inst_20505 = (state_20515[(2)]);
var state_20515__$1 = state_20515;
var statearr_20523_20551 = state_20515__$1;
(statearr_20523_20551[(2)] = inst_20505);

(statearr_20523_20551[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (13))){
var state_20515__$1 = state_20515;
var statearr_20524_20552 = state_20515__$1;
(statearr_20524_20552[(2)] = null);

(statearr_20524_20552[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (6))){
var inst_20475 = (state_20515[(8)]);
var inst_20500 = inst_20475.length;
var inst_20501 = (inst_20500 > (0));
var state_20515__$1 = state_20515;
if(cljs.core.truth_(inst_20501)){
var statearr_20525_20553 = state_20515__$1;
(statearr_20525_20553[(1)] = (12));

} else {
var statearr_20526_20554 = state_20515__$1;
(statearr_20526_20554[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (3))){
var inst_20513 = (state_20515[(2)]);
var state_20515__$1 = state_20515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20515__$1,inst_20513);
} else {
if((state_val_20516 === (12))){
var inst_20475 = (state_20515[(8)]);
var inst_20503 = cljs.core.vec(inst_20475);
var state_20515__$1 = state_20515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20515__$1,(15),out,inst_20503);
} else {
if((state_val_20516 === (2))){
var state_20515__$1 = state_20515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20515__$1,(4),ch);
} else {
if((state_val_20516 === (11))){
var inst_20479 = (state_20515[(9)]);
var inst_20483 = (state_20515[(10)]);
var inst_20493 = (state_20515[(2)]);
var inst_20494 = [];
var inst_20495 = inst_20494.push(inst_20479);
var inst_20475 = inst_20494;
var inst_20476 = inst_20483;
var state_20515__$1 = (function (){var statearr_20527 = state_20515;
(statearr_20527[(7)] = inst_20476);

(statearr_20527[(11)] = inst_20495);

(statearr_20527[(8)] = inst_20475);

(statearr_20527[(12)] = inst_20493);

return statearr_20527;
})();
var statearr_20528_20555 = state_20515__$1;
(statearr_20528_20555[(2)] = null);

(statearr_20528_20555[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (9))){
var inst_20475 = (state_20515[(8)]);
var inst_20491 = cljs.core.vec(inst_20475);
var state_20515__$1 = state_20515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20515__$1,(11),out,inst_20491);
} else {
if((state_val_20516 === (5))){
var inst_20479 = (state_20515[(9)]);
var inst_20483 = (state_20515[(10)]);
var inst_20476 = (state_20515[(7)]);
var inst_20483__$1 = (function (){var G__20529 = inst_20479;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20529) : f.call(null,G__20529));
})();
var inst_20484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20483__$1,inst_20476);
var inst_20485 = cljs.core.keyword_identical_QMARK_(inst_20476,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_20486 = (inst_20484) || (inst_20485);
var state_20515__$1 = (function (){var statearr_20530 = state_20515;
(statearr_20530[(10)] = inst_20483__$1);

return statearr_20530;
})();
if(cljs.core.truth_(inst_20486)){
var statearr_20531_20556 = state_20515__$1;
(statearr_20531_20556[(1)] = (8));

} else {
var statearr_20532_20557 = state_20515__$1;
(statearr_20532_20557[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (14))){
var inst_20508 = (state_20515[(2)]);
var inst_20509 = cljs.core.async.close_BANG_(out);
var state_20515__$1 = (function (){var statearr_20534 = state_20515;
(statearr_20534[(13)] = inst_20508);

return statearr_20534;
})();
var statearr_20535_20558 = state_20515__$1;
(statearr_20535_20558[(2)] = inst_20509);

(statearr_20535_20558[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (10))){
var inst_20498 = (state_20515[(2)]);
var state_20515__$1 = state_20515;
var statearr_20536_20559 = state_20515__$1;
(statearr_20536_20559[(2)] = inst_20498);

(statearr_20536_20559[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20516 === (8))){
var inst_20479 = (state_20515[(9)]);
var inst_20483 = (state_20515[(10)]);
var inst_20475 = (state_20515[(8)]);
var inst_20488 = inst_20475.push(inst_20479);
var tmp20533 = inst_20475;
var inst_20475__$1 = tmp20533;
var inst_20476 = inst_20483;
var state_20515__$1 = (function (){var statearr_20537 = state_20515;
(statearr_20537[(7)] = inst_20476);

(statearr_20537[(14)] = inst_20488);

(statearr_20537[(8)] = inst_20475__$1);

return statearr_20537;
})();
var statearr_20538_20560 = state_20515__$1;
(statearr_20538_20560[(2)] = null);

(statearr_20538_20560[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6463__auto___20546,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20546,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6384__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6384__auto____0 = (function (){
var statearr_20542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20542[(0)] = cljs$core$async$partition_by_$_state_machine__6384__auto__);

(statearr_20542[(1)] = (1));

return statearr_20542;
});
var cljs$core$async$partition_by_$_state_machine__6384__auto____1 = (function (state_20515){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20515);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20543){if((e20543 instanceof Object)){
var ex__6387__auto__ = e20543;
var statearr_20544_20561 = state_20515;
(statearr_20544_20561[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20515);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20562 = state_20515;
state_20515 = G__20562;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6384__auto__ = function(state_20515){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6384__auto____1.call(this,state_20515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6384__auto____0;
cljs$core$async$partition_by_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6384__auto____1;
return cljs$core$async$partition_by_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20546,out))
})();
var state__6465__auto__ = (function (){var statearr_20545 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20546);

return statearr_20545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20546,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
