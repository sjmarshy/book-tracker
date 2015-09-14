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
if(typeof cljs.core.async.t17200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17200 = (function (f,fn_handler,meta17201){
this.f = f;
this.fn_handler = fn_handler;
this.meta17201 = meta17201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17202){
var self__ = this;
var _17202__$1 = this;
return self__.meta17201;
});

cljs.core.async.t17200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17202,meta17201__$1){
var self__ = this;
var _17202__$1 = this;
return (new cljs.core.async.t17200(self__.f,self__.fn_handler,meta17201__$1));
});

cljs.core.async.t17200.cljs$lang$type = true;

cljs.core.async.t17200.cljs$lang$ctorStr = "cljs.core.async/t17200";

cljs.core.async.t17200.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17200");
});

cljs.core.async.__GT_t17200 = (function cljs$core$async$fn_handler_$___GT_t17200(f__$1,fn_handler__$1,meta17201){
return (new cljs.core.async.t17200(f__$1,fn_handler__$1,meta17201));
});

}

return (new cljs.core.async.t17200(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17204 = buff;
if(G__17204){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17204.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17204);
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
var val_17221 = (function (){var G__17218 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17218) : cljs.core.deref.call(null,G__17218));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17219_17222 = val_17221;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17219_17222) : fn1.call(null,G__17219_17222));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17221,ret){
return (function (){
var G__17220 = val_17221;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17220) : fn1.call(null,G__17220));
});})(val_17221,ret))
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
var G__17231 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17231) : cljs.core.deref.call(null,G__17231));
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
var ret = (function (){var G__17232 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17232) : cljs.core.deref.call(null,G__17232));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17233_17235 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17233_17235) : fn1.call(null,G__17233_17235));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17234 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17234) : fn1.call(null,G__17234));
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
var n__4963__auto___17236 = n;
var x_17237 = (0);
while(true){
if((x_17237 < n__4963__auto___17236)){
(a[x_17237] = (0));

var G__17238 = (x_17237 + (1));
x_17237 = G__17238;
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

var G__17239 = (i + (1));
i = G__17239;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17247 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17247) : cljs.core.atom.call(null,G__17247));
})();
if(typeof cljs.core.async.t17248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17248 = (function (flag,alt_flag,meta17249){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17249 = meta17249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17251 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17251) : cljs.core.deref.call(null,G__17251));
});})(flag))
;

cljs.core.async.t17248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17252_17254 = self__.flag;
var G__17253_17255 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17252_17254,G__17253_17255) : cljs.core.reset_BANG_.call(null,G__17252_17254,G__17253_17255));

return true;
});})(flag))
;

cljs.core.async.t17248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17250){
var self__ = this;
var _17250__$1 = this;
return self__.meta17249;
});})(flag))
;

cljs.core.async.t17248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17250,meta17249__$1){
var self__ = this;
var _17250__$1 = this;
return (new cljs.core.async.t17248(self__.flag,self__.alt_flag,meta17249__$1));
});})(flag))
;

cljs.core.async.t17248.cljs$lang$type = true;

cljs.core.async.t17248.cljs$lang$ctorStr = "cljs.core.async/t17248";

cljs.core.async.t17248.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17248");
});})(flag))
;

cljs.core.async.__GT_t17248 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17248(flag__$1,alt_flag__$1,meta17249){
return (new cljs.core.async.t17248(flag__$1,alt_flag__$1,meta17249));
});})(flag))
;

}

return (new cljs.core.async.t17248(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17259 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17259 = (function (cb,flag,alt_handler,meta17260){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17260 = meta17260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17261){
var self__ = this;
var _17261__$1 = this;
return self__.meta17260;
});

cljs.core.async.t17259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17261,meta17260__$1){
var self__ = this;
var _17261__$1 = this;
return (new cljs.core.async.t17259(self__.cb,self__.flag,self__.alt_handler,meta17260__$1));
});

cljs.core.async.t17259.cljs$lang$type = true;

cljs.core.async.t17259.cljs$lang$ctorStr = "cljs.core.async/t17259";

cljs.core.async.t17259.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17259");
});

cljs.core.async.__GT_t17259 = (function cljs$core$async$alt_handler_$___GT_t17259(cb__$1,flag__$1,alt_handler__$1,meta17260){
return (new cljs.core.async.t17259(cb__$1,flag__$1,alt_handler__$1,meta17260));
});

}

return (new cljs.core.async.t17259(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17269 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17269) : port.call(null,G__17269));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17270 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17270) : port.call(null,G__17270));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17262_SHARP_){
var G__17271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17262_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17271) : fret.call(null,G__17271));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17263_SHARP_){
var G__17272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17263_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17272) : fret.call(null,G__17272));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17273 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17273) : cljs.core.deref.call(null,G__17273));
})(),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17274 = (i + (1));
i = G__17274;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__17275){
var map__17277 = p__17275;
var map__17277__$1 = ((cljs.core.seq_QMARK_(map__17277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17277):map__17277);
var opts = map__17277__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__17275 = null;
if (arguments.length > 1) {
var G__17278__i = 0, G__17278__a = new Array(arguments.length -  1);
while (G__17278__i < G__17278__a.length) {G__17278__a[G__17278__i] = arguments[G__17278__i + 1]; ++G__17278__i;}
  p__17275 = new cljs.core.IndexedSeq(G__17278__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__17275);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__17279){
var ports = cljs.core.first(arglist__17279);
var p__17275 = cljs.core.rest(arglist__17279);
return cljs$core$async$alts_BANG___delegate(ports,p__17275);
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
var c__6463__auto___17377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17377){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17377){
return (function (state_17353){
var state_val_17354 = (state_17353[(1)]);
if((state_val_17354 === (7))){
var inst_17349 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17355_17378 = state_17353__$1;
(statearr_17355_17378[(2)] = inst_17349);

(statearr_17355_17378[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (1))){
var state_17353__$1 = state_17353;
var statearr_17356_17379 = state_17353__$1;
(statearr_17356_17379[(2)] = null);

(statearr_17356_17379[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (4))){
var inst_17332 = (state_17353[(7)]);
var inst_17332__$1 = (state_17353[(2)]);
var inst_17333 = (inst_17332__$1 == null);
var state_17353__$1 = (function (){var statearr_17357 = state_17353;
(statearr_17357[(7)] = inst_17332__$1);

return statearr_17357;
})();
if(cljs.core.truth_(inst_17333)){
var statearr_17358_17380 = state_17353__$1;
(statearr_17358_17380[(1)] = (5));

} else {
var statearr_17359_17381 = state_17353__$1;
(statearr_17359_17381[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (13))){
var state_17353__$1 = state_17353;
var statearr_17360_17382 = state_17353__$1;
(statearr_17360_17382[(2)] = null);

(statearr_17360_17382[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (6))){
var inst_17332 = (state_17353[(7)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17353__$1,(11),to,inst_17332);
} else {
if((state_val_17354 === (3))){
var inst_17351 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17353__$1,inst_17351);
} else {
if((state_val_17354 === (12))){
var state_17353__$1 = state_17353;
var statearr_17361_17383 = state_17353__$1;
(statearr_17361_17383[(2)] = null);

(statearr_17361_17383[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (2))){
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17353__$1,(4),from);
} else {
if((state_val_17354 === (11))){
var inst_17342 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17342)){
var statearr_17362_17384 = state_17353__$1;
(statearr_17362_17384[(1)] = (12));

} else {
var statearr_17363_17385 = state_17353__$1;
(statearr_17363_17385[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (9))){
var state_17353__$1 = state_17353;
var statearr_17364_17386 = state_17353__$1;
(statearr_17364_17386[(2)] = null);

(statearr_17364_17386[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (5))){
var state_17353__$1 = state_17353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17365_17387 = state_17353__$1;
(statearr_17365_17387[(1)] = (8));

} else {
var statearr_17366_17388 = state_17353__$1;
(statearr_17366_17388[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (14))){
var inst_17347 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17367_17389 = state_17353__$1;
(statearr_17367_17389[(2)] = inst_17347);

(statearr_17367_17389[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (10))){
var inst_17339 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17368_17390 = state_17353__$1;
(statearr_17368_17390[(2)] = inst_17339);

(statearr_17368_17390[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17354 === (8))){
var inst_17336 = cljs.core.async.close_BANG_(to);
var state_17353__$1 = state_17353;
var statearr_17369_17391 = state_17353__$1;
(statearr_17369_17391[(2)] = inst_17336);

(statearr_17369_17391[(1)] = (10));


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
});})(c__6463__auto___17377))
;
return ((function (switch__6383__auto__,c__6463__auto___17377){
return (function() {
var cljs$core$async$pipe_$_state_machine__6384__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6384__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = cljs$core$async$pipe_$_state_machine__6384__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var cljs$core$async$pipe_$_state_machine__6384__auto____1 = (function (state_17353){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17353);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__6387__auto__ = e17374;
var statearr_17375_17392 = state_17353;
(statearr_17375_17392[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17353);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17393 = state_17353;
state_17353 = G__17393;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6384__auto__ = function(state_17353){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6384__auto____1.call(this,state_17353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6384__auto____0;
cljs$core$async$pipe_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6384__auto____1;
return cljs$core$async$pipe_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17377))
})();
var state__6465__auto__ = (function (){var statearr_17376 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17377);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17377))
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
return (function (p__17579){
var vec__17580 = p__17579;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17580,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17580,(1),null);
var job = vec__17580;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__6463__auto___17764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results){
return (function (state_17585){
var state_val_17586 = (state_17585[(1)]);
if((state_val_17586 === (2))){
var inst_17582 = (state_17585[(2)]);
var inst_17583 = cljs.core.async.close_BANG_(res);
var state_17585__$1 = (function (){var statearr_17587 = state_17585;
(statearr_17587[(7)] = inst_17582);

return statearr_17587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17585__$1,inst_17583);
} else {
if((state_val_17586 === (1))){
var state_17585__$1 = state_17585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17585__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results))
;
return ((function (switch__6383__auto__,c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17591 = [null,null,null,null,null,null,null,null];
(statearr_17591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17591[(1)] = (1));

return statearr_17591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17585){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17585);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17592){if((e17592 instanceof Object)){
var ex__6387__auto__ = e17592;
var statearr_17593_17765 = state_17585;
(statearr_17593_17765[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17585);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17766 = state_17585;
state_17585 = G__17766;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results))
})();
var state__6465__auto__ = (function (){var statearr_17594 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17764);

return statearr_17594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17764,res,vec__17580,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17595){
var vec__17596 = p__17595;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17596,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17596,(1),null);
var job = vec__17596;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__17597_17767 = v;
var G__17598_17768 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__17597_17767,G__17598_17768) : xf.call(null,G__17597_17767,G__17598_17768));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4963__auto___17769 = n;
var __17770 = (0);
while(true){
if((__17770 < n__4963__auto___17769)){
var G__17599_17771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17599_17771) {
case "async":
var c__6463__auto___17773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17770,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (__17770,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function (state_17612){
var state_val_17613 = (state_17612[(1)]);
if((state_val_17613 === (7))){
var inst_17608 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17614_17774 = state_17612__$1;
(statearr_17614_17774[(2)] = inst_17608);

(statearr_17614_17774[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17613 === (6))){
var state_17612__$1 = state_17612;
var statearr_17615_17775 = state_17612__$1;
(statearr_17615_17775[(2)] = null);

(statearr_17615_17775[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17613 === (5))){
var state_17612__$1 = state_17612;
var statearr_17616_17776 = state_17612__$1;
(statearr_17616_17776[(2)] = null);

(statearr_17616_17776[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17613 === (4))){
var inst_17602 = (state_17612[(2)]);
var inst_17603 = async(inst_17602);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17603)){
var statearr_17617_17777 = state_17612__$1;
(statearr_17617_17777[(1)] = (5));

} else {
var statearr_17618_17778 = state_17612__$1;
(statearr_17618_17778[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17613 === (3))){
var inst_17610 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17612__$1,inst_17610);
} else {
if((state_val_17613 === (2))){
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17612__$1,(4),jobs);
} else {
if((state_val_17613 === (1))){
var state_17612__$1 = state_17612;
var statearr_17619_17779 = state_17612__$1;
(statearr_17619_17779[(2)] = null);

(statearr_17619_17779[(1)] = (2));


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
});})(__17770,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
;
return ((function (__17770,switch__6383__auto__,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17623 = [null,null,null,null,null,null,null];
(statearr_17623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17623[(1)] = (1));

return statearr_17623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17612){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17612);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17624){if((e17624 instanceof Object)){
var ex__6387__auto__ = e17624;
var statearr_17625_17780 = state_17612;
(statearr_17625_17780[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17612);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17781 = state_17612;
state_17612 = G__17781;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(__17770,switch__6383__auto__,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17626 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17773);

return statearr_17626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(__17770,c__6463__auto___17773,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
);


break;
case "compute":
var c__6463__auto___17782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17770,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (__17770,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function (state_17639){
var state_val_17640 = (state_17639[(1)]);
if((state_val_17640 === (7))){
var inst_17635 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17641_17783 = state_17639__$1;
(statearr_17641_17783[(2)] = inst_17635);

(statearr_17641_17783[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17640 === (6))){
var state_17639__$1 = state_17639;
var statearr_17642_17784 = state_17639__$1;
(statearr_17642_17784[(2)] = null);

(statearr_17642_17784[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17640 === (5))){
var state_17639__$1 = state_17639;
var statearr_17643_17785 = state_17639__$1;
(statearr_17643_17785[(2)] = null);

(statearr_17643_17785[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17640 === (4))){
var inst_17629 = (state_17639[(2)]);
var inst_17630 = process(inst_17629);
var state_17639__$1 = state_17639;
if(cljs.core.truth_(inst_17630)){
var statearr_17644_17786 = state_17639__$1;
(statearr_17644_17786[(1)] = (5));

} else {
var statearr_17645_17787 = state_17639__$1;
(statearr_17645_17787[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17640 === (3))){
var inst_17637 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17639__$1,inst_17637);
} else {
if((state_val_17640 === (2))){
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17639__$1,(4),jobs);
} else {
if((state_val_17640 === (1))){
var state_17639__$1 = state_17639;
var statearr_17646_17788 = state_17639__$1;
(statearr_17646_17788[(2)] = null);

(statearr_17646_17788[(1)] = (2));


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
});})(__17770,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
;
return ((function (__17770,switch__6383__auto__,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17650 = [null,null,null,null,null,null,null];
(statearr_17650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17650[(1)] = (1));

return statearr_17650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17639){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17639);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17651){if((e17651 instanceof Object)){
var ex__6387__auto__ = e17651;
var statearr_17652_17789 = state_17639;
(statearr_17652_17789[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17639);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17790 = state_17639;
state_17639 = G__17790;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(__17770,switch__6383__auto__,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17653 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17782);

return statearr_17653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(__17770,c__6463__auto___17782,G__17599_17771,n__4963__auto___17769,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17791 = (__17770 + (1));
__17770 = G__17791;
continue;
} else {
}
break;
}

var c__6463__auto___17792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17792,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17792,jobs,results,process,async){
return (function (state_17675){
var state_val_17676 = (state_17675[(1)]);
if((state_val_17676 === (9))){
var inst_17668 = (state_17675[(2)]);
var state_17675__$1 = (function (){var statearr_17677 = state_17675;
(statearr_17677[(7)] = inst_17668);

return statearr_17677;
})();
var statearr_17678_17793 = state_17675__$1;
(statearr_17678_17793[(2)] = null);

(statearr_17678_17793[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17676 === (8))){
var inst_17661 = (state_17675[(8)]);
var inst_17666 = (state_17675[(2)]);
var state_17675__$1 = (function (){var statearr_17679 = state_17675;
(statearr_17679[(9)] = inst_17666);

return statearr_17679;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17675__$1,(9),results,inst_17661);
} else {
if((state_val_17676 === (7))){
var inst_17671 = (state_17675[(2)]);
var state_17675__$1 = state_17675;
var statearr_17680_17794 = state_17675__$1;
(statearr_17680_17794[(2)] = inst_17671);

(statearr_17680_17794[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17676 === (6))){
var inst_17661 = (state_17675[(8)]);
var inst_17656 = (state_17675[(10)]);
var inst_17661__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17663 = [inst_17656,inst_17661__$1];
var inst_17664 = (new cljs.core.PersistentVector(null,2,(5),inst_17662,inst_17663,null));
var state_17675__$1 = (function (){var statearr_17681 = state_17675;
(statearr_17681[(8)] = inst_17661__$1);

return statearr_17681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17675__$1,(8),jobs,inst_17664);
} else {
if((state_val_17676 === (5))){
var inst_17659 = cljs.core.async.close_BANG_(jobs);
var state_17675__$1 = state_17675;
var statearr_17682_17795 = state_17675__$1;
(statearr_17682_17795[(2)] = inst_17659);

(statearr_17682_17795[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17676 === (4))){
var inst_17656 = (state_17675[(10)]);
var inst_17656__$1 = (state_17675[(2)]);
var inst_17657 = (inst_17656__$1 == null);
var state_17675__$1 = (function (){var statearr_17683 = state_17675;
(statearr_17683[(10)] = inst_17656__$1);

return statearr_17683;
})();
if(cljs.core.truth_(inst_17657)){
var statearr_17684_17796 = state_17675__$1;
(statearr_17684_17796[(1)] = (5));

} else {
var statearr_17685_17797 = state_17675__$1;
(statearr_17685_17797[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17676 === (3))){
var inst_17673 = (state_17675[(2)]);
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17675__$1,inst_17673);
} else {
if((state_val_17676 === (2))){
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17675__$1,(4),from);
} else {
if((state_val_17676 === (1))){
var state_17675__$1 = state_17675;
var statearr_17686_17798 = state_17675__$1;
(statearr_17686_17798[(2)] = null);

(statearr_17686_17798[(1)] = (2));


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
});})(c__6463__auto___17792,jobs,results,process,async))
;
return ((function (switch__6383__auto__,c__6463__auto___17792,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0 = (function (){
var statearr_17690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17690[(1)] = (1));

return statearr_17690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17675){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17675);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17691){if((e17691 instanceof Object)){
var ex__6387__auto__ = e17691;
var statearr_17692_17799 = state_17675;
(statearr_17692_17799[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17675);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17800 = state_17675;
state_17675 = G__17800;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17792,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17693 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17792);

return statearr_17693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17792,jobs,results,process,async))
);


var c__6463__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto__,jobs,results,process,async){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto__,jobs,results,process,async){
return (function (state_17731){
var state_val_17732 = (state_17731[(1)]);
if((state_val_17732 === (7))){
var inst_17727 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17733_17801 = state_17731__$1;
(statearr_17733_17801[(2)] = inst_17727);

(statearr_17733_17801[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (20))){
var state_17731__$1 = state_17731;
var statearr_17734_17802 = state_17731__$1;
(statearr_17734_17802[(2)] = null);

(statearr_17734_17802[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (1))){
var state_17731__$1 = state_17731;
var statearr_17735_17803 = state_17731__$1;
(statearr_17735_17803[(2)] = null);

(statearr_17735_17803[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (4))){
var inst_17696 = (state_17731[(7)]);
var inst_17696__$1 = (state_17731[(2)]);
var inst_17697 = (inst_17696__$1 == null);
var state_17731__$1 = (function (){var statearr_17736 = state_17731;
(statearr_17736[(7)] = inst_17696__$1);

return statearr_17736;
})();
if(cljs.core.truth_(inst_17697)){
var statearr_17737_17804 = state_17731__$1;
(statearr_17737_17804[(1)] = (5));

} else {
var statearr_17738_17805 = state_17731__$1;
(statearr_17738_17805[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (15))){
var inst_17709 = (state_17731[(8)]);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17731__$1,(18),to,inst_17709);
} else {
if((state_val_17732 === (21))){
var inst_17722 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17739_17806 = state_17731__$1;
(statearr_17739_17806[(2)] = inst_17722);

(statearr_17739_17806[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (13))){
var inst_17724 = (state_17731[(2)]);
var state_17731__$1 = (function (){var statearr_17740 = state_17731;
(statearr_17740[(9)] = inst_17724);

return statearr_17740;
})();
var statearr_17741_17807 = state_17731__$1;
(statearr_17741_17807[(2)] = null);

(statearr_17741_17807[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (6))){
var inst_17696 = (state_17731[(7)]);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17731__$1,(11),inst_17696);
} else {
if((state_val_17732 === (17))){
var inst_17717 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
if(cljs.core.truth_(inst_17717)){
var statearr_17742_17808 = state_17731__$1;
(statearr_17742_17808[(1)] = (19));

} else {
var statearr_17743_17809 = state_17731__$1;
(statearr_17743_17809[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (3))){
var inst_17729 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17731__$1,inst_17729);
} else {
if((state_val_17732 === (12))){
var inst_17706 = (state_17731[(10)]);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17731__$1,(14),inst_17706);
} else {
if((state_val_17732 === (2))){
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17731__$1,(4),results);
} else {
if((state_val_17732 === (19))){
var state_17731__$1 = state_17731;
var statearr_17744_17810 = state_17731__$1;
(statearr_17744_17810[(2)] = null);

(statearr_17744_17810[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (11))){
var inst_17706 = (state_17731[(2)]);
var state_17731__$1 = (function (){var statearr_17745 = state_17731;
(statearr_17745[(10)] = inst_17706);

return statearr_17745;
})();
var statearr_17746_17811 = state_17731__$1;
(statearr_17746_17811[(2)] = null);

(statearr_17746_17811[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (9))){
var state_17731__$1 = state_17731;
var statearr_17747_17812 = state_17731__$1;
(statearr_17747_17812[(2)] = null);

(statearr_17747_17812[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (5))){
var state_17731__$1 = state_17731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17748_17813 = state_17731__$1;
(statearr_17748_17813[(1)] = (8));

} else {
var statearr_17749_17814 = state_17731__$1;
(statearr_17749_17814[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (14))){
var inst_17711 = (state_17731[(11)]);
var inst_17709 = (state_17731[(8)]);
var inst_17709__$1 = (state_17731[(2)]);
var inst_17710 = (inst_17709__$1 == null);
var inst_17711__$1 = cljs.core.not(inst_17710);
var state_17731__$1 = (function (){var statearr_17750 = state_17731;
(statearr_17750[(11)] = inst_17711__$1);

(statearr_17750[(8)] = inst_17709__$1);

return statearr_17750;
})();
if(inst_17711__$1){
var statearr_17751_17815 = state_17731__$1;
(statearr_17751_17815[(1)] = (15));

} else {
var statearr_17752_17816 = state_17731__$1;
(statearr_17752_17816[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (16))){
var inst_17711 = (state_17731[(11)]);
var state_17731__$1 = state_17731;
var statearr_17753_17817 = state_17731__$1;
(statearr_17753_17817[(2)] = inst_17711);

(statearr_17753_17817[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (10))){
var inst_17703 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17754_17818 = state_17731__$1;
(statearr_17754_17818[(2)] = inst_17703);

(statearr_17754_17818[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (18))){
var inst_17714 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17755_17819 = state_17731__$1;
(statearr_17755_17819[(2)] = inst_17714);

(statearr_17755_17819[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17732 === (8))){
var inst_17700 = cljs.core.async.close_BANG_(to);
var state_17731__$1 = state_17731;
var statearr_17756_17820 = state_17731__$1;
(statearr_17756_17820[(2)] = inst_17700);

(statearr_17756_17820[(1)] = (10));


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
var statearr_17760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__);

(statearr_17760[(1)] = (1));

return statearr_17760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1 = (function (state_17731){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17731);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17761){if((e17761 instanceof Object)){
var ex__6387__auto__ = e17761;
var statearr_17762_17821 = state_17731;
(statearr_17762_17821[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17731);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17822 = state_17731;
state_17731 = G__17822;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__ = function(state_17731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1.call(this,state_17731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__,jobs,results,process,async))
})();
var state__6465__auto__ = (function (){var statearr_17763 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_17763;
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
var c__6463__auto___17945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___17945,tc,fc){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___17945,tc,fc){
return (function (state_17919){
var state_val_17920 = (state_17919[(1)]);
if((state_val_17920 === (7))){
var inst_17915 = (state_17919[(2)]);
var state_17919__$1 = state_17919;
var statearr_17921_17946 = state_17919__$1;
(statearr_17921_17946[(2)] = inst_17915);

(statearr_17921_17946[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (1))){
var state_17919__$1 = state_17919;
var statearr_17922_17947 = state_17919__$1;
(statearr_17922_17947[(2)] = null);

(statearr_17922_17947[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (4))){
var inst_17896 = (state_17919[(7)]);
var inst_17896__$1 = (state_17919[(2)]);
var inst_17897 = (inst_17896__$1 == null);
var state_17919__$1 = (function (){var statearr_17923 = state_17919;
(statearr_17923[(7)] = inst_17896__$1);

return statearr_17923;
})();
if(cljs.core.truth_(inst_17897)){
var statearr_17924_17948 = state_17919__$1;
(statearr_17924_17948[(1)] = (5));

} else {
var statearr_17925_17949 = state_17919__$1;
(statearr_17925_17949[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (13))){
var state_17919__$1 = state_17919;
var statearr_17926_17950 = state_17919__$1;
(statearr_17926_17950[(2)] = null);

(statearr_17926_17950[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (6))){
var inst_17896 = (state_17919[(7)]);
var inst_17902 = (function (){var G__17927 = inst_17896;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17927) : p.call(null,G__17927));
})();
var state_17919__$1 = state_17919;
if(cljs.core.truth_(inst_17902)){
var statearr_17928_17951 = state_17919__$1;
(statearr_17928_17951[(1)] = (9));

} else {
var statearr_17929_17952 = state_17919__$1;
(statearr_17929_17952[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (3))){
var inst_17917 = (state_17919[(2)]);
var state_17919__$1 = state_17919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17919__$1,inst_17917);
} else {
if((state_val_17920 === (12))){
var state_17919__$1 = state_17919;
var statearr_17930_17953 = state_17919__$1;
(statearr_17930_17953[(2)] = null);

(statearr_17930_17953[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (2))){
var state_17919__$1 = state_17919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17919__$1,(4),ch);
} else {
if((state_val_17920 === (11))){
var inst_17896 = (state_17919[(7)]);
var inst_17906 = (state_17919[(2)]);
var state_17919__$1 = state_17919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17919__$1,(8),inst_17906,inst_17896);
} else {
if((state_val_17920 === (9))){
var state_17919__$1 = state_17919;
var statearr_17931_17954 = state_17919__$1;
(statearr_17931_17954[(2)] = tc);

(statearr_17931_17954[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (5))){
var inst_17899 = cljs.core.async.close_BANG_(tc);
var inst_17900 = cljs.core.async.close_BANG_(fc);
var state_17919__$1 = (function (){var statearr_17932 = state_17919;
(statearr_17932[(8)] = inst_17899);

return statearr_17932;
})();
var statearr_17933_17955 = state_17919__$1;
(statearr_17933_17955[(2)] = inst_17900);

(statearr_17933_17955[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (14))){
var inst_17913 = (state_17919[(2)]);
var state_17919__$1 = state_17919;
var statearr_17934_17956 = state_17919__$1;
(statearr_17934_17956[(2)] = inst_17913);

(statearr_17934_17956[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (10))){
var state_17919__$1 = state_17919;
var statearr_17935_17957 = state_17919__$1;
(statearr_17935_17957[(2)] = fc);

(statearr_17935_17957[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17920 === (8))){
var inst_17908 = (state_17919[(2)]);
var state_17919__$1 = state_17919;
if(cljs.core.truth_(inst_17908)){
var statearr_17936_17958 = state_17919__$1;
(statearr_17936_17958[(1)] = (12));

} else {
var statearr_17937_17959 = state_17919__$1;
(statearr_17937_17959[(1)] = (13));

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
});})(c__6463__auto___17945,tc,fc))
;
return ((function (switch__6383__auto__,c__6463__auto___17945,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6384__auto__ = null;
var cljs$core$async$split_$_state_machine__6384__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = cljs$core$async$split_$_state_machine__6384__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var cljs$core$async$split_$_state_machine__6384__auto____1 = (function (state_17919){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_17919);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e17942){if((e17942 instanceof Object)){
var ex__6387__auto__ = e17942;
var statearr_17943_17960 = state_17919;
(statearr_17943_17960[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17919);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17961 = state_17919;
state_17919 = G__17961;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6384__auto__ = function(state_17919){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6384__auto____1.call(this,state_17919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6384__auto____0;
cljs$core$async$split_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6384__auto____1;
return cljs$core$async$split_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___17945,tc,fc))
})();
var state__6465__auto__ = (function (){var statearr_17944 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_17944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___17945);

return statearr_17944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___17945,tc,fc))
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
return (function (state_18010){
var state_val_18011 = (state_18010[(1)]);
if((state_val_18011 === (7))){
var inst_18006 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18012_18030 = state_18010__$1;
(statearr_18012_18030[(2)] = inst_18006);

(statearr_18012_18030[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18011 === (6))){
var inst_17996 = (state_18010[(7)]);
var inst_17999 = (state_18010[(8)]);
var inst_18003 = (function (){var G__18013 = inst_17996;
var G__18014 = inst_17999;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18013,G__18014) : f.call(null,G__18013,G__18014));
})();
var inst_17996__$1 = inst_18003;
var state_18010__$1 = (function (){var statearr_18015 = state_18010;
(statearr_18015[(7)] = inst_17996__$1);

return statearr_18015;
})();
var statearr_18016_18031 = state_18010__$1;
(statearr_18016_18031[(2)] = null);

(statearr_18016_18031[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18011 === (5))){
var inst_17996 = (state_18010[(7)]);
var state_18010__$1 = state_18010;
var statearr_18017_18032 = state_18010__$1;
(statearr_18017_18032[(2)] = inst_17996);

(statearr_18017_18032[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18011 === (4))){
var inst_17999 = (state_18010[(8)]);
var inst_17999__$1 = (state_18010[(2)]);
var inst_18000 = (inst_17999__$1 == null);
var state_18010__$1 = (function (){var statearr_18018 = state_18010;
(statearr_18018[(8)] = inst_17999__$1);

return statearr_18018;
})();
if(cljs.core.truth_(inst_18000)){
var statearr_18019_18033 = state_18010__$1;
(statearr_18019_18033[(1)] = (5));

} else {
var statearr_18020_18034 = state_18010__$1;
(statearr_18020_18034[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18011 === (3))){
var inst_18008 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18010__$1,inst_18008);
} else {
if((state_val_18011 === (2))){
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18010__$1,(4),ch);
} else {
if((state_val_18011 === (1))){
var inst_17996 = init;
var state_18010__$1 = (function (){var statearr_18021 = state_18010;
(statearr_18021[(7)] = inst_17996);

return statearr_18021;
})();
var statearr_18022_18035 = state_18010__$1;
(statearr_18022_18035[(2)] = null);

(statearr_18022_18035[(1)] = (2));


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
var statearr_18026 = [null,null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$reduce_$_state_machine__6384__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$reduce_$_state_machine__6384__auto____1 = (function (state_18010){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18010);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18027){if((e18027 instanceof Object)){
var ex__6387__auto__ = e18027;
var statearr_18028_18036 = state_18010;
(statearr_18028_18036[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18010);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18037 = state_18010;
state_18010 = G__18037;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6384__auto__ = function(state_18010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6384__auto____1.call(this,state_18010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6384__auto____0;
cljs$core$async$reduce_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6384__auto____1;
return cljs$core$async$reduce_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_18029 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_18029;
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
return (function (state_18114){
var state_val_18115 = (state_18114[(1)]);
if((state_val_18115 === (7))){
var inst_18096 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18116_18139 = state_18114__$1;
(statearr_18116_18139[(2)] = inst_18096);

(statearr_18116_18139[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (1))){
var inst_18090 = cljs.core.seq(coll);
var inst_18091 = inst_18090;
var state_18114__$1 = (function (){var statearr_18117 = state_18114;
(statearr_18117[(7)] = inst_18091);

return statearr_18117;
})();
var statearr_18118_18140 = state_18114__$1;
(statearr_18118_18140[(2)] = null);

(statearr_18118_18140[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (4))){
var inst_18091 = (state_18114[(7)]);
var inst_18094 = cljs.core.first(inst_18091);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18114__$1,(7),ch,inst_18094);
} else {
if((state_val_18115 === (13))){
var inst_18108 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18119_18141 = state_18114__$1;
(statearr_18119_18141[(2)] = inst_18108);

(statearr_18119_18141[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (6))){
var inst_18099 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
if(cljs.core.truth_(inst_18099)){
var statearr_18120_18142 = state_18114__$1;
(statearr_18120_18142[(1)] = (8));

} else {
var statearr_18121_18143 = state_18114__$1;
(statearr_18121_18143[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (3))){
var inst_18112 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18114__$1,inst_18112);
} else {
if((state_val_18115 === (12))){
var state_18114__$1 = state_18114;
var statearr_18122_18144 = state_18114__$1;
(statearr_18122_18144[(2)] = null);

(statearr_18122_18144[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (2))){
var inst_18091 = (state_18114[(7)]);
var state_18114__$1 = state_18114;
if(cljs.core.truth_(inst_18091)){
var statearr_18123_18145 = state_18114__$1;
(statearr_18123_18145[(1)] = (4));

} else {
var statearr_18124_18146 = state_18114__$1;
(statearr_18124_18146[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (11))){
var inst_18105 = cljs.core.async.close_BANG_(ch);
var state_18114__$1 = state_18114;
var statearr_18125_18147 = state_18114__$1;
(statearr_18125_18147[(2)] = inst_18105);

(statearr_18125_18147[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (9))){
var state_18114__$1 = state_18114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18126_18148 = state_18114__$1;
(statearr_18126_18148[(1)] = (11));

} else {
var statearr_18127_18149 = state_18114__$1;
(statearr_18127_18149[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (5))){
var inst_18091 = (state_18114[(7)]);
var state_18114__$1 = state_18114;
var statearr_18128_18150 = state_18114__$1;
(statearr_18128_18150[(2)] = inst_18091);

(statearr_18128_18150[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (10))){
var inst_18110 = (state_18114[(2)]);
var state_18114__$1 = state_18114;
var statearr_18129_18151 = state_18114__$1;
(statearr_18129_18151[(2)] = inst_18110);

(statearr_18129_18151[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18115 === (8))){
var inst_18091 = (state_18114[(7)]);
var inst_18101 = cljs.core.next(inst_18091);
var inst_18091__$1 = inst_18101;
var state_18114__$1 = (function (){var statearr_18130 = state_18114;
(statearr_18130[(7)] = inst_18091__$1);

return statearr_18130;
})();
var statearr_18131_18152 = state_18114__$1;
(statearr_18131_18152[(2)] = null);

(statearr_18131_18152[(1)] = (2));


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
var statearr_18135 = [null,null,null,null,null,null,null,null];
(statearr_18135[(0)] = cljs$core$async$onto_chan_$_state_machine__6384__auto__);

(statearr_18135[(1)] = (1));

return statearr_18135;
});
var cljs$core$async$onto_chan_$_state_machine__6384__auto____1 = (function (state_18114){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18114);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18136){if((e18136 instanceof Object)){
var ex__6387__auto__ = e18136;
var statearr_18137_18153 = state_18114;
(statearr_18137_18153[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18114);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18154 = state_18114;
state_18114 = G__18154;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6384__auto__ = function(state_18114){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6384__auto____1.call(this,state_18114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6384__auto____0;
cljs$core$async$onto_chan_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6384__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_18138 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_18138;
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

cljs.core.async.Mux = (function (){var obj18156 = {};
return obj18156;
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
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__18160 = x__4720__auto__;
return goog.typeOf(G__18160);
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


cljs.core.async.Mult = (function (){var obj18162 = {};
return obj18162;
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
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__18166 = x__4720__auto__;
return goog.typeOf(G__18166);
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
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__18170 = x__4720__auto__;
return goog.typeOf(G__18170);
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
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__18174 = x__4720__auto__;
return goog.typeOf(G__18174);
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
var cs = (function (){var G__18404 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18404) : cljs.core.atom.call(null,G__18404));
})();
var m = (function (){
if(typeof cljs.core.async.t18405 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18405 = (function (cs,ch,mult,meta18406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18406 = meta18406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18405.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18408_18633 = self__.cs;
var G__18409_18634 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18408_18633,G__18409_18634) : cljs.core.reset_BANG_.call(null,G__18408_18633,G__18409_18634));

return null;
});})(cs))
;

cljs.core.async.t18405.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18407){
var self__ = this;
var _18407__$1 = this;
return self__.meta18406;
});})(cs))
;

cljs.core.async.t18405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18407,meta18406__$1){
var self__ = this;
var _18407__$1 = this;
return (new cljs.core.async.t18405(self__.cs,self__.ch,self__.mult,meta18406__$1));
});})(cs))
;

cljs.core.async.t18405.cljs$lang$type = true;

cljs.core.async.t18405.cljs$lang$ctorStr = "cljs.core.async/t18405";

cljs.core.async.t18405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18405");
});})(cs))
;

cljs.core.async.__GT_t18405 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18405(cs__$1,ch__$1,mult__$1,meta18406){
return (new cljs.core.async.t18405(cs__$1,ch__$1,mult__$1,meta18406));
});})(cs))
;

}

return (new cljs.core.async.t18405(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18410 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18410) : cljs.core.atom.call(null,G__18410));
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
var c__6463__auto___18635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___18635,cs,m,dchan,dctr,done){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___18635,cs,m,dchan,dctr,done){
return (function (state_18541){
var state_val_18542 = (state_18541[(1)]);
if((state_val_18542 === (7))){
var inst_18537 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18543_18636 = state_18541__$1;
(statearr_18543_18636[(2)] = inst_18537);

(statearr_18543_18636[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (20))){
var inst_18442 = (state_18541[(7)]);
var inst_18452 = cljs.core.first(inst_18442);
var inst_18453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18452,(0),null);
var inst_18454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18452,(1),null);
var state_18541__$1 = (function (){var statearr_18544 = state_18541;
(statearr_18544[(8)] = inst_18453);

return statearr_18544;
})();
if(cljs.core.truth_(inst_18454)){
var statearr_18545_18637 = state_18541__$1;
(statearr_18545_18637[(1)] = (22));

} else {
var statearr_18546_18638 = state_18541__$1;
(statearr_18546_18638[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (27))){
var inst_18484 = (state_18541[(9)]);
var inst_18482 = (state_18541[(10)]);
var inst_18489 = (state_18541[(11)]);
var inst_18413 = (state_18541[(12)]);
var inst_18489__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18482,inst_18484);
var inst_18490 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18489__$1,inst_18413,done);
var state_18541__$1 = (function (){var statearr_18547 = state_18541;
(statearr_18547[(11)] = inst_18489__$1);

return statearr_18547;
})();
if(cljs.core.truth_(inst_18490)){
var statearr_18548_18639 = state_18541__$1;
(statearr_18548_18639[(1)] = (30));

} else {
var statearr_18549_18640 = state_18541__$1;
(statearr_18549_18640[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (1))){
var state_18541__$1 = state_18541;
var statearr_18550_18641 = state_18541__$1;
(statearr_18550_18641[(2)] = null);

(statearr_18550_18641[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (24))){
var inst_18442 = (state_18541[(7)]);
var inst_18459 = (state_18541[(2)]);
var inst_18460 = cljs.core.next(inst_18442);
var inst_18422 = inst_18460;
var inst_18423 = null;
var inst_18424 = (0);
var inst_18425 = (0);
var state_18541__$1 = (function (){var statearr_18551 = state_18541;
(statearr_18551[(13)] = inst_18425);

(statearr_18551[(14)] = inst_18424);

(statearr_18551[(15)] = inst_18459);

(statearr_18551[(16)] = inst_18422);

(statearr_18551[(17)] = inst_18423);

return statearr_18551;
})();
var statearr_18552_18642 = state_18541__$1;
(statearr_18552_18642[(2)] = null);

(statearr_18552_18642[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (39))){
var state_18541__$1 = state_18541;
var statearr_18556_18643 = state_18541__$1;
(statearr_18556_18643[(2)] = null);

(statearr_18556_18643[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (4))){
var inst_18413 = (state_18541[(12)]);
var inst_18413__$1 = (state_18541[(2)]);
var inst_18414 = (inst_18413__$1 == null);
var state_18541__$1 = (function (){var statearr_18557 = state_18541;
(statearr_18557[(12)] = inst_18413__$1);

return statearr_18557;
})();
if(cljs.core.truth_(inst_18414)){
var statearr_18558_18644 = state_18541__$1;
(statearr_18558_18644[(1)] = (5));

} else {
var statearr_18559_18645 = state_18541__$1;
(statearr_18559_18645[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (15))){
var inst_18425 = (state_18541[(13)]);
var inst_18424 = (state_18541[(14)]);
var inst_18422 = (state_18541[(16)]);
var inst_18423 = (state_18541[(17)]);
var inst_18438 = (state_18541[(2)]);
var inst_18439 = (inst_18425 + (1));
var tmp18553 = inst_18424;
var tmp18554 = inst_18422;
var tmp18555 = inst_18423;
var inst_18422__$1 = tmp18554;
var inst_18423__$1 = tmp18555;
var inst_18424__$1 = tmp18553;
var inst_18425__$1 = inst_18439;
var state_18541__$1 = (function (){var statearr_18560 = state_18541;
(statearr_18560[(18)] = inst_18438);

(statearr_18560[(13)] = inst_18425__$1);

(statearr_18560[(14)] = inst_18424__$1);

(statearr_18560[(16)] = inst_18422__$1);

(statearr_18560[(17)] = inst_18423__$1);

return statearr_18560;
})();
var statearr_18561_18646 = state_18541__$1;
(statearr_18561_18646[(2)] = null);

(statearr_18561_18646[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (21))){
var inst_18463 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18565_18647 = state_18541__$1;
(statearr_18565_18647[(2)] = inst_18463);

(statearr_18565_18647[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (31))){
var inst_18489 = (state_18541[(11)]);
var inst_18493 = done(null);
var inst_18494 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18489);
var state_18541__$1 = (function (){var statearr_18566 = state_18541;
(statearr_18566[(19)] = inst_18493);

return statearr_18566;
})();
var statearr_18567_18648 = state_18541__$1;
(statearr_18567_18648[(2)] = inst_18494);

(statearr_18567_18648[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (32))){
var inst_18484 = (state_18541[(9)]);
var inst_18481 = (state_18541[(20)]);
var inst_18483 = (state_18541[(21)]);
var inst_18482 = (state_18541[(10)]);
var inst_18496 = (state_18541[(2)]);
var inst_18497 = (inst_18484 + (1));
var tmp18562 = inst_18481;
var tmp18563 = inst_18483;
var tmp18564 = inst_18482;
var inst_18481__$1 = tmp18562;
var inst_18482__$1 = tmp18564;
var inst_18483__$1 = tmp18563;
var inst_18484__$1 = inst_18497;
var state_18541__$1 = (function (){var statearr_18568 = state_18541;
(statearr_18568[(9)] = inst_18484__$1);

(statearr_18568[(20)] = inst_18481__$1);

(statearr_18568[(21)] = inst_18483__$1);

(statearr_18568[(10)] = inst_18482__$1);

(statearr_18568[(22)] = inst_18496);

return statearr_18568;
})();
var statearr_18569_18649 = state_18541__$1;
(statearr_18569_18649[(2)] = null);

(statearr_18569_18649[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (40))){
var inst_18509 = (state_18541[(23)]);
var inst_18513 = done(null);
var inst_18514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18509);
var state_18541__$1 = (function (){var statearr_18570 = state_18541;
(statearr_18570[(24)] = inst_18513);

return statearr_18570;
})();
var statearr_18571_18650 = state_18541__$1;
(statearr_18571_18650[(2)] = inst_18514);

(statearr_18571_18650[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (33))){
var inst_18500 = (state_18541[(25)]);
var inst_18502 = cljs.core.chunked_seq_QMARK_(inst_18500);
var state_18541__$1 = state_18541;
if(inst_18502){
var statearr_18572_18651 = state_18541__$1;
(statearr_18572_18651[(1)] = (36));

} else {
var statearr_18573_18652 = state_18541__$1;
(statearr_18573_18652[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (13))){
var inst_18432 = (state_18541[(26)]);
var inst_18435 = cljs.core.async.close_BANG_(inst_18432);
var state_18541__$1 = state_18541;
var statearr_18574_18653 = state_18541__$1;
(statearr_18574_18653[(2)] = inst_18435);

(statearr_18574_18653[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (22))){
var inst_18453 = (state_18541[(8)]);
var inst_18456 = cljs.core.async.close_BANG_(inst_18453);
var state_18541__$1 = state_18541;
var statearr_18575_18654 = state_18541__$1;
(statearr_18575_18654[(2)] = inst_18456);

(statearr_18575_18654[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (36))){
var inst_18500 = (state_18541[(25)]);
var inst_18504 = cljs.core.chunk_first(inst_18500);
var inst_18505 = cljs.core.chunk_rest(inst_18500);
var inst_18506 = cljs.core.count(inst_18504);
var inst_18481 = inst_18505;
var inst_18482 = inst_18504;
var inst_18483 = inst_18506;
var inst_18484 = (0);
var state_18541__$1 = (function (){var statearr_18576 = state_18541;
(statearr_18576[(9)] = inst_18484);

(statearr_18576[(20)] = inst_18481);

(statearr_18576[(21)] = inst_18483);

(statearr_18576[(10)] = inst_18482);

return statearr_18576;
})();
var statearr_18577_18655 = state_18541__$1;
(statearr_18577_18655[(2)] = null);

(statearr_18577_18655[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (41))){
var inst_18500 = (state_18541[(25)]);
var inst_18516 = (state_18541[(2)]);
var inst_18517 = cljs.core.next(inst_18500);
var inst_18481 = inst_18517;
var inst_18482 = null;
var inst_18483 = (0);
var inst_18484 = (0);
var state_18541__$1 = (function (){var statearr_18578 = state_18541;
(statearr_18578[(9)] = inst_18484);

(statearr_18578[(20)] = inst_18481);

(statearr_18578[(21)] = inst_18483);

(statearr_18578[(27)] = inst_18516);

(statearr_18578[(10)] = inst_18482);

return statearr_18578;
})();
var statearr_18579_18656 = state_18541__$1;
(statearr_18579_18656[(2)] = null);

(statearr_18579_18656[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (43))){
var state_18541__$1 = state_18541;
var statearr_18580_18657 = state_18541__$1;
(statearr_18580_18657[(2)] = null);

(statearr_18580_18657[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (29))){
var inst_18525 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18581_18658 = state_18541__$1;
(statearr_18581_18658[(2)] = inst_18525);

(statearr_18581_18658[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (44))){
var inst_18534 = (state_18541[(2)]);
var state_18541__$1 = (function (){var statearr_18582 = state_18541;
(statearr_18582[(28)] = inst_18534);

return statearr_18582;
})();
var statearr_18583_18659 = state_18541__$1;
(statearr_18583_18659[(2)] = null);

(statearr_18583_18659[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (6))){
var inst_18473 = (state_18541[(29)]);
var inst_18472 = (function (){var G__18584 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18584) : cljs.core.deref.call(null,G__18584));
})();
var inst_18473__$1 = cljs.core.keys(inst_18472);
var inst_18474 = cljs.core.count(inst_18473__$1);
var inst_18475 = (function (){var G__18585 = dctr;
var G__18586 = inst_18474;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18585,G__18586) : cljs.core.reset_BANG_.call(null,G__18585,G__18586));
})();
var inst_18480 = cljs.core.seq(inst_18473__$1);
var inst_18481 = inst_18480;
var inst_18482 = null;
var inst_18483 = (0);
var inst_18484 = (0);
var state_18541__$1 = (function (){var statearr_18587 = state_18541;
(statearr_18587[(9)] = inst_18484);

(statearr_18587[(20)] = inst_18481);

(statearr_18587[(29)] = inst_18473__$1);

(statearr_18587[(21)] = inst_18483);

(statearr_18587[(10)] = inst_18482);

(statearr_18587[(30)] = inst_18475);

return statearr_18587;
})();
var statearr_18588_18660 = state_18541__$1;
(statearr_18588_18660[(2)] = null);

(statearr_18588_18660[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (28))){
var inst_18481 = (state_18541[(20)]);
var inst_18500 = (state_18541[(25)]);
var inst_18500__$1 = cljs.core.seq(inst_18481);
var state_18541__$1 = (function (){var statearr_18589 = state_18541;
(statearr_18589[(25)] = inst_18500__$1);

return statearr_18589;
})();
if(inst_18500__$1){
var statearr_18590_18661 = state_18541__$1;
(statearr_18590_18661[(1)] = (33));

} else {
var statearr_18591_18662 = state_18541__$1;
(statearr_18591_18662[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (25))){
var inst_18484 = (state_18541[(9)]);
var inst_18483 = (state_18541[(21)]);
var inst_18486 = (inst_18484 < inst_18483);
var inst_18487 = inst_18486;
var state_18541__$1 = state_18541;
if(cljs.core.truth_(inst_18487)){
var statearr_18592_18663 = state_18541__$1;
(statearr_18592_18663[(1)] = (27));

} else {
var statearr_18593_18664 = state_18541__$1;
(statearr_18593_18664[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (34))){
var state_18541__$1 = state_18541;
var statearr_18594_18665 = state_18541__$1;
(statearr_18594_18665[(2)] = null);

(statearr_18594_18665[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (17))){
var state_18541__$1 = state_18541;
var statearr_18595_18666 = state_18541__$1;
(statearr_18595_18666[(2)] = null);

(statearr_18595_18666[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (3))){
var inst_18539 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18541__$1,inst_18539);
} else {
if((state_val_18542 === (12))){
var inst_18468 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18596_18667 = state_18541__$1;
(statearr_18596_18667[(2)] = inst_18468);

(statearr_18596_18667[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (2))){
var state_18541__$1 = state_18541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18541__$1,(4),ch);
} else {
if((state_val_18542 === (23))){
var state_18541__$1 = state_18541;
var statearr_18597_18668 = state_18541__$1;
(statearr_18597_18668[(2)] = null);

(statearr_18597_18668[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (35))){
var inst_18523 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18598_18669 = state_18541__$1;
(statearr_18598_18669[(2)] = inst_18523);

(statearr_18598_18669[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (19))){
var inst_18442 = (state_18541[(7)]);
var inst_18446 = cljs.core.chunk_first(inst_18442);
var inst_18447 = cljs.core.chunk_rest(inst_18442);
var inst_18448 = cljs.core.count(inst_18446);
var inst_18422 = inst_18447;
var inst_18423 = inst_18446;
var inst_18424 = inst_18448;
var inst_18425 = (0);
var state_18541__$1 = (function (){var statearr_18599 = state_18541;
(statearr_18599[(13)] = inst_18425);

(statearr_18599[(14)] = inst_18424);

(statearr_18599[(16)] = inst_18422);

(statearr_18599[(17)] = inst_18423);

return statearr_18599;
})();
var statearr_18600_18670 = state_18541__$1;
(statearr_18600_18670[(2)] = null);

(statearr_18600_18670[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (11))){
var inst_18442 = (state_18541[(7)]);
var inst_18422 = (state_18541[(16)]);
var inst_18442__$1 = cljs.core.seq(inst_18422);
var state_18541__$1 = (function (){var statearr_18601 = state_18541;
(statearr_18601[(7)] = inst_18442__$1);

return statearr_18601;
})();
if(inst_18442__$1){
var statearr_18602_18671 = state_18541__$1;
(statearr_18602_18671[(1)] = (16));

} else {
var statearr_18603_18672 = state_18541__$1;
(statearr_18603_18672[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (9))){
var inst_18470 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18604_18673 = state_18541__$1;
(statearr_18604_18673[(2)] = inst_18470);

(statearr_18604_18673[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (5))){
var inst_18420 = (function (){var G__18605 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18605) : cljs.core.deref.call(null,G__18605));
})();
var inst_18421 = cljs.core.seq(inst_18420);
var inst_18422 = inst_18421;
var inst_18423 = null;
var inst_18424 = (0);
var inst_18425 = (0);
var state_18541__$1 = (function (){var statearr_18606 = state_18541;
(statearr_18606[(13)] = inst_18425);

(statearr_18606[(14)] = inst_18424);

(statearr_18606[(16)] = inst_18422);

(statearr_18606[(17)] = inst_18423);

return statearr_18606;
})();
var statearr_18607_18674 = state_18541__$1;
(statearr_18607_18674[(2)] = null);

(statearr_18607_18674[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (14))){
var state_18541__$1 = state_18541;
var statearr_18608_18675 = state_18541__$1;
(statearr_18608_18675[(2)] = null);

(statearr_18608_18675[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (45))){
var inst_18531 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18609_18676 = state_18541__$1;
(statearr_18609_18676[(2)] = inst_18531);

(statearr_18609_18676[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (26))){
var inst_18473 = (state_18541[(29)]);
var inst_18527 = (state_18541[(2)]);
var inst_18528 = cljs.core.seq(inst_18473);
var state_18541__$1 = (function (){var statearr_18610 = state_18541;
(statearr_18610[(31)] = inst_18527);

return statearr_18610;
})();
if(inst_18528){
var statearr_18611_18677 = state_18541__$1;
(statearr_18611_18677[(1)] = (42));

} else {
var statearr_18612_18678 = state_18541__$1;
(statearr_18612_18678[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (16))){
var inst_18442 = (state_18541[(7)]);
var inst_18444 = cljs.core.chunked_seq_QMARK_(inst_18442);
var state_18541__$1 = state_18541;
if(inst_18444){
var statearr_18613_18679 = state_18541__$1;
(statearr_18613_18679[(1)] = (19));

} else {
var statearr_18614_18680 = state_18541__$1;
(statearr_18614_18680[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (38))){
var inst_18520 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18615_18681 = state_18541__$1;
(statearr_18615_18681[(2)] = inst_18520);

(statearr_18615_18681[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (30))){
var state_18541__$1 = state_18541;
var statearr_18616_18682 = state_18541__$1;
(statearr_18616_18682[(2)] = null);

(statearr_18616_18682[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (10))){
var inst_18425 = (state_18541[(13)]);
var inst_18423 = (state_18541[(17)]);
var inst_18431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18423,inst_18425);
var inst_18432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18431,(0),null);
var inst_18433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18431,(1),null);
var state_18541__$1 = (function (){var statearr_18617 = state_18541;
(statearr_18617[(26)] = inst_18432);

return statearr_18617;
})();
if(cljs.core.truth_(inst_18433)){
var statearr_18618_18683 = state_18541__$1;
(statearr_18618_18683[(1)] = (13));

} else {
var statearr_18619_18684 = state_18541__$1;
(statearr_18619_18684[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (18))){
var inst_18466 = (state_18541[(2)]);
var state_18541__$1 = state_18541;
var statearr_18620_18685 = state_18541__$1;
(statearr_18620_18685[(2)] = inst_18466);

(statearr_18620_18685[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (42))){
var state_18541__$1 = state_18541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18541__$1,(45),dchan);
} else {
if((state_val_18542 === (37))){
var inst_18509 = (state_18541[(23)]);
var inst_18500 = (state_18541[(25)]);
var inst_18413 = (state_18541[(12)]);
var inst_18509__$1 = cljs.core.first(inst_18500);
var inst_18510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18509__$1,inst_18413,done);
var state_18541__$1 = (function (){var statearr_18621 = state_18541;
(statearr_18621[(23)] = inst_18509__$1);

return statearr_18621;
})();
if(cljs.core.truth_(inst_18510)){
var statearr_18622_18686 = state_18541__$1;
(statearr_18622_18686[(1)] = (39));

} else {
var statearr_18623_18687 = state_18541__$1;
(statearr_18623_18687[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18542 === (8))){
var inst_18425 = (state_18541[(13)]);
var inst_18424 = (state_18541[(14)]);
var inst_18427 = (inst_18425 < inst_18424);
var inst_18428 = inst_18427;
var state_18541__$1 = state_18541;
if(cljs.core.truth_(inst_18428)){
var statearr_18624_18688 = state_18541__$1;
(statearr_18624_18688[(1)] = (10));

} else {
var statearr_18625_18689 = state_18541__$1;
(statearr_18625_18689[(1)] = (11));

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
});})(c__6463__auto___18635,cs,m,dchan,dctr,done))
;
return ((function (switch__6383__auto__,c__6463__auto___18635,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6384__auto__ = null;
var cljs$core$async$mult_$_state_machine__6384__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = cljs$core$async$mult_$_state_machine__6384__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var cljs$core$async$mult_$_state_machine__6384__auto____1 = (function (state_18541){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18541);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object)){
var ex__6387__auto__ = e18630;
var statearr_18631_18690 = state_18541;
(statearr_18631_18690[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18541);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18691 = state_18541;
state_18541 = G__18691;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6384__auto__ = function(state_18541){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6384__auto____1.call(this,state_18541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6384__auto____0;
cljs$core$async$mult_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6384__auto____1;
return cljs$core$async$mult_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___18635,cs,m,dchan,dctr,done))
})();
var state__6465__auto__ = (function (){var statearr_18632 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___18635);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___18635,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18696 = {};
return obj18696;
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
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__18700 = x__4720__auto__;
return goog.typeOf(G__18700);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__18704 = x__4720__auto__;
return goog.typeOf(G__18704);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__18708 = x__4720__auto__;
return goog.typeOf(G__18708);
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
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__18712 = x__4720__auto__;
return goog.typeOf(G__18712);
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
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__18716 = x__4720__auto__;
return goog.typeOf(G__18716);
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18717){
var map__18723 = p__18717;
var map__18723__$1 = ((cljs.core.seq_QMARK_(map__18723))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18723):map__18723);
var opts = map__18723__$1;
var statearr_18724_18728 = state;
(statearr_18724_18728[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__18723,map__18723__$1,opts){
return (function (val){
var statearr_18725_18729 = state;
(statearr_18725_18729[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18723,map__18723__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18726_18730 = state;
(statearr_18726_18730[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__18727 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18727) : cljs.core.deref.call(null,G__18727));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18717 = null;
if (arguments.length > 3) {
var G__18731__i = 0, G__18731__a = new Array(arguments.length -  3);
while (G__18731__i < G__18731__a.length) {G__18731__a[G__18731__i] = arguments[G__18731__i + 3]; ++G__18731__i;}
  p__18717 = new cljs.core.IndexedSeq(G__18731__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18717);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18732){
var state = cljs.core.first(arglist__18732);
arglist__18732 = cljs.core.next(arglist__18732);
var cont_block = cljs.core.first(arglist__18732);
arglist__18732 = cljs.core.next(arglist__18732);
var ports = cljs.core.first(arglist__18732);
var p__18717 = cljs.core.rest(arglist__18732);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__18717);
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
var cs = (function (){var G__18866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18866) : cljs.core.atom.call(null,G__18866));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__18867 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18867) : cljs.core.atom.call(null,G__18867));
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
if(cljs.core.truth_((function (){var G__18868 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__18868) : attr.call(null,G__18868));
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
var chs = (function (){var G__18869 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18869) : cljs.core.deref.call(null,G__18869));
})();
var mode = (function (){var G__18870 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18870) : cljs.core.deref.call(null,G__18870));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18871 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18871 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18872){
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
this.meta18872 = meta18872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18871.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18871.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18874_18999 = self__.cs;
var G__18875_19000 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18874_18999,G__18875_19000) : cljs.core.reset_BANG_.call(null,G__18874_18999,G__18875_19000));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__18876 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__18876) : self__.solo_modes.call(null,G__18876));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__18877_19001 = self__.solo_mode;
var G__18878_19002 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18877_19001,G__18878_19002) : cljs.core.reset_BANG_.call(null,G__18877_19001,G__18878_19002));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18873){
var self__ = this;
var _18873__$1 = this;
return self__.meta18872;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18873,meta18872__$1){
var self__ = this;
var _18873__$1 = this;
return (new cljs.core.async.t18871(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18872__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18871.cljs$lang$type = true;

cljs.core.async.t18871.cljs$lang$ctorStr = "cljs.core.async/t18871";

cljs.core.async.t18871.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18871");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18871 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18872){
return (new cljs.core.async.t18871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18872));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18871(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6463__auto___19003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18950){
var state_val_18951 = (state_18950[(1)]);
if((state_val_18951 === (7))){
var inst_18892 = (state_18950[(7)]);
var inst_18897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18892);
var state_18950__$1 = state_18950;
var statearr_18952_19004 = state_18950__$1;
(statearr_18952_19004[(2)] = inst_18897);

(statearr_18952_19004[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (20))){
var inst_18907 = (state_18950[(8)]);
var state_18950__$1 = state_18950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18950__$1,(23),out,inst_18907);
} else {
if((state_val_18951 === (1))){
var inst_18882 = (state_18950[(9)]);
var inst_18882__$1 = calc_state();
var inst_18883 = cljs.core.seq_QMARK_(inst_18882__$1);
var state_18950__$1 = (function (){var statearr_18953 = state_18950;
(statearr_18953[(9)] = inst_18882__$1);

return statearr_18953;
})();
if(inst_18883){
var statearr_18954_19005 = state_18950__$1;
(statearr_18954_19005[(1)] = (2));

} else {
var statearr_18955_19006 = state_18950__$1;
(statearr_18955_19006[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (24))){
var inst_18900 = (state_18950[(10)]);
var inst_18892 = inst_18900;
var state_18950__$1 = (function (){var statearr_18956 = state_18950;
(statearr_18956[(7)] = inst_18892);

return statearr_18956;
})();
var statearr_18957_19007 = state_18950__$1;
(statearr_18957_19007[(2)] = null);

(statearr_18957_19007[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (4))){
var inst_18882 = (state_18950[(9)]);
var inst_18888 = (state_18950[(2)]);
var inst_18889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18888,cljs.core.constant$keyword$_COLON_reads);
var inst_18890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18888,cljs.core.constant$keyword$_COLON_mutes);
var inst_18891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18888,cljs.core.constant$keyword$_COLON_solos);
var inst_18892 = inst_18882;
var state_18950__$1 = (function (){var statearr_18958 = state_18950;
(statearr_18958[(11)] = inst_18890);

(statearr_18958[(7)] = inst_18892);

(statearr_18958[(12)] = inst_18889);

(statearr_18958[(13)] = inst_18891);

return statearr_18958;
})();
var statearr_18959_19008 = state_18950__$1;
(statearr_18959_19008[(2)] = null);

(statearr_18959_19008[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (15))){
var state_18950__$1 = state_18950;
var statearr_18960_19009 = state_18950__$1;
(statearr_18960_19009[(2)] = null);

(statearr_18960_19009[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (21))){
var inst_18900 = (state_18950[(10)]);
var inst_18892 = inst_18900;
var state_18950__$1 = (function (){var statearr_18961 = state_18950;
(statearr_18961[(7)] = inst_18892);

return statearr_18961;
})();
var statearr_18962_19010 = state_18950__$1;
(statearr_18962_19010[(2)] = null);

(statearr_18962_19010[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (13))){
var inst_18946 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18963_19011 = state_18950__$1;
(statearr_18963_19011[(2)] = inst_18946);

(statearr_18963_19011[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (22))){
var inst_18944 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18964_19012 = state_18950__$1;
(statearr_18964_19012[(2)] = inst_18944);

(statearr_18964_19012[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (6))){
var inst_18948 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18950__$1,inst_18948);
} else {
if((state_val_18951 === (25))){
var state_18950__$1 = state_18950;
var statearr_18965_19013 = state_18950__$1;
(statearr_18965_19013[(2)] = null);

(statearr_18965_19013[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (17))){
var inst_18923 = (state_18950[(14)]);
var state_18950__$1 = state_18950;
var statearr_18966_19014 = state_18950__$1;
(statearr_18966_19014[(2)] = inst_18923);

(statearr_18966_19014[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (3))){
var inst_18882 = (state_18950[(9)]);
var state_18950__$1 = state_18950;
var statearr_18967_19015 = state_18950__$1;
(statearr_18967_19015[(2)] = inst_18882);

(statearr_18967_19015[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (12))){
var inst_18903 = (state_18950[(15)]);
var inst_18923 = (state_18950[(14)]);
var inst_18908 = (state_18950[(16)]);
var inst_18923__$1 = (function (){var G__18968 = inst_18908;
return (inst_18903.cljs$core$IFn$_invoke$arity$1 ? inst_18903.cljs$core$IFn$_invoke$arity$1(G__18968) : inst_18903.call(null,G__18968));
})();
var state_18950__$1 = (function (){var statearr_18969 = state_18950;
(statearr_18969[(14)] = inst_18923__$1);

return statearr_18969;
})();
if(cljs.core.truth_(inst_18923__$1)){
var statearr_18970_19016 = state_18950__$1;
(statearr_18970_19016[(1)] = (17));

} else {
var statearr_18971_19017 = state_18950__$1;
(statearr_18971_19017[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (2))){
var inst_18882 = (state_18950[(9)]);
var inst_18885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18882);
var state_18950__$1 = state_18950;
var statearr_18972_19018 = state_18950__$1;
(statearr_18972_19018[(2)] = inst_18885);

(statearr_18972_19018[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (23))){
var inst_18935 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
if(cljs.core.truth_(inst_18935)){
var statearr_18973_19019 = state_18950__$1;
(statearr_18973_19019[(1)] = (24));

} else {
var statearr_18974_19020 = state_18950__$1;
(statearr_18974_19020[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (19))){
var inst_18932 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
if(cljs.core.truth_(inst_18932)){
var statearr_18975_19021 = state_18950__$1;
(statearr_18975_19021[(1)] = (20));

} else {
var statearr_18976_19022 = state_18950__$1;
(statearr_18976_19022[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (11))){
var inst_18907 = (state_18950[(8)]);
var inst_18913 = (inst_18907 == null);
var state_18950__$1 = state_18950;
if(cljs.core.truth_(inst_18913)){
var statearr_18977_19023 = state_18950__$1;
(statearr_18977_19023[(1)] = (14));

} else {
var statearr_18978_19024 = state_18950__$1;
(statearr_18978_19024[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (9))){
var inst_18900 = (state_18950[(10)]);
var inst_18900__$1 = (state_18950[(2)]);
var inst_18901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18900__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_18902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18900__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_18903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18900__$1,cljs.core.constant$keyword$_COLON_solos);
var state_18950__$1 = (function (){var statearr_18979 = state_18950;
(statearr_18979[(10)] = inst_18900__$1);

(statearr_18979[(17)] = inst_18902);

(statearr_18979[(15)] = inst_18903);

return statearr_18979;
})();
return cljs.core.async.ioc_alts_BANG_(state_18950__$1,(10),inst_18901);
} else {
if((state_val_18951 === (5))){
var inst_18892 = (state_18950[(7)]);
var inst_18895 = cljs.core.seq_QMARK_(inst_18892);
var state_18950__$1 = state_18950;
if(inst_18895){
var statearr_18980_19025 = state_18950__$1;
(statearr_18980_19025[(1)] = (7));

} else {
var statearr_18981_19026 = state_18950__$1;
(statearr_18981_19026[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (14))){
var inst_18908 = (state_18950[(16)]);
var inst_18915 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18908);
var state_18950__$1 = state_18950;
var statearr_18982_19027 = state_18950__$1;
(statearr_18982_19027[(2)] = inst_18915);

(statearr_18982_19027[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (26))){
var inst_18940 = (state_18950[(2)]);
var state_18950__$1 = state_18950;
var statearr_18983_19028 = state_18950__$1;
(statearr_18983_19028[(2)] = inst_18940);

(statearr_18983_19028[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (16))){
var inst_18918 = (state_18950[(2)]);
var inst_18919 = calc_state();
var inst_18892 = inst_18919;
var state_18950__$1 = (function (){var statearr_18984 = state_18950;
(statearr_18984[(18)] = inst_18918);

(statearr_18984[(7)] = inst_18892);

return statearr_18984;
})();
var statearr_18985_19029 = state_18950__$1;
(statearr_18985_19029[(2)] = null);

(statearr_18985_19029[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (10))){
var inst_18907 = (state_18950[(8)]);
var inst_18908 = (state_18950[(16)]);
var inst_18906 = (state_18950[(2)]);
var inst_18907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18906,(0),null);
var inst_18908__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18906,(1),null);
var inst_18909 = (inst_18907__$1 == null);
var inst_18910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18908__$1,change);
var inst_18911 = (inst_18909) || (inst_18910);
var state_18950__$1 = (function (){var statearr_18986 = state_18950;
(statearr_18986[(8)] = inst_18907__$1);

(statearr_18986[(16)] = inst_18908__$1);

return statearr_18986;
})();
if(cljs.core.truth_(inst_18911)){
var statearr_18987_19030 = state_18950__$1;
(statearr_18987_19030[(1)] = (11));

} else {
var statearr_18988_19031 = state_18950__$1;
(statearr_18988_19031[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (18))){
var inst_18902 = (state_18950[(17)]);
var inst_18903 = (state_18950[(15)]);
var inst_18908 = (state_18950[(16)]);
var inst_18927 = cljs.core.empty_QMARK_(inst_18903);
var inst_18928 = (function (){var G__18989 = inst_18908;
return (inst_18902.cljs$core$IFn$_invoke$arity$1 ? inst_18902.cljs$core$IFn$_invoke$arity$1(G__18989) : inst_18902.call(null,G__18989));
})();
var inst_18929 = cljs.core.not(inst_18928);
var inst_18930 = (inst_18927) && (inst_18929);
var state_18950__$1 = state_18950;
var statearr_18990_19032 = state_18950__$1;
(statearr_18990_19032[(2)] = inst_18930);

(statearr_18990_19032[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18951 === (8))){
var inst_18892 = (state_18950[(7)]);
var state_18950__$1 = state_18950;
var statearr_18991_19033 = state_18950__$1;
(statearr_18991_19033[(2)] = inst_18892);

(statearr_18991_19033[(1)] = (9));


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
});})(c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6383__auto__,c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6384__auto__ = null;
var cljs$core$async$mix_$_state_machine__6384__auto____0 = (function (){
var statearr_18995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18995[(0)] = cljs$core$async$mix_$_state_machine__6384__auto__);

(statearr_18995[(1)] = (1));

return statearr_18995;
});
var cljs$core$async$mix_$_state_machine__6384__auto____1 = (function (state_18950){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_18950);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e18996){if((e18996 instanceof Object)){
var ex__6387__auto__ = e18996;
var statearr_18997_19034 = state_18950;
(statearr_18997_19034[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18950);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19035 = state_18950;
state_18950 = G__19035;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6384__auto__ = function(state_18950){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6384__auto____1.call(this,state_18950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6384__auto____0;
cljs$core$async$mix_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6384__auto____1;
return cljs$core$async$mix_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6465__auto__ = (function (){var statearr_18998 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_18998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19003);

return statearr_18998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19037 = {};
return obj19037;
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
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__19041 = x__4720__auto__;
return goog.typeOf(G__19041);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__19045 = x__4720__auto__;
return goog.typeOf(G__19045);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19051 = x__4720__auto__;
return goog.typeOf(G__19051);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19053 = x__4720__auto__;
return goog.typeOf(G__19053);
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
var mults = (function (){var G__19192 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19192) : cljs.core.atom.call(null,G__19192));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4076__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19194 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19194) : cljs.core.deref.call(null,G__19194));
})(),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4076__auto__,mults){
return (function (p1__19054_SHARP_){
if(cljs.core.truth_((function (){var G__19195 = topic;
return (p1__19054_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19054_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19195) : p1__19054_SHARP_.call(null,G__19195));
})())){
return p1__19054_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19054_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__19196 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__19196) : buf_fn.call(null,G__19196));
})())));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19197 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19198){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19198 = meta19198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19197.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19197.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__19200 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__19200) : self__.ensure_mult.call(null,G__19200));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19201 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19201) : cljs.core.deref.call(null,G__19201));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19202 = self__.mults;
var G__19203 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19202,G__19203) : cljs.core.reset_BANG_.call(null,G__19202,G__19203));
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19199){
var self__ = this;
var _19199__$1 = this;
return self__.meta19198;
});})(mults,ensure_mult))
;

cljs.core.async.t19197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19199,meta19198__$1){
var self__ = this;
var _19199__$1 = this;
return (new cljs.core.async.t19197(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19198__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19197.cljs$lang$type = true;

cljs.core.async.t19197.cljs$lang$ctorStr = "cljs.core.async/t19197";

cljs.core.async.t19197.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19197");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19197 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t19197(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19198){
return (new cljs.core.async.t19197(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19198));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19197(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6463__auto___19326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19326,mults,ensure_mult,p){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19326,mults,ensure_mult,p){
return (function (state_19275){
var state_val_19276 = (state_19275[(1)]);
if((state_val_19276 === (7))){
var inst_19271 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19277_19327 = state_19275__$1;
(statearr_19277_19327[(2)] = inst_19271);

(statearr_19277_19327[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (20))){
var state_19275__$1 = state_19275;
var statearr_19278_19328 = state_19275__$1;
(statearr_19278_19328[(2)] = null);

(statearr_19278_19328[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (1))){
var state_19275__$1 = state_19275;
var statearr_19279_19329 = state_19275__$1;
(statearr_19279_19329[(2)] = null);

(statearr_19279_19329[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (24))){
var inst_19254 = (state_19275[(7)]);
var inst_19263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19254);
var state_19275__$1 = state_19275;
var statearr_19280_19330 = state_19275__$1;
(statearr_19280_19330[(2)] = inst_19263);

(statearr_19280_19330[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (4))){
var inst_19206 = (state_19275[(8)]);
var inst_19206__$1 = (state_19275[(2)]);
var inst_19207 = (inst_19206__$1 == null);
var state_19275__$1 = (function (){var statearr_19281 = state_19275;
(statearr_19281[(8)] = inst_19206__$1);

return statearr_19281;
})();
if(cljs.core.truth_(inst_19207)){
var statearr_19282_19331 = state_19275__$1;
(statearr_19282_19331[(1)] = (5));

} else {
var statearr_19283_19332 = state_19275__$1;
(statearr_19283_19332[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (15))){
var inst_19248 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19284_19333 = state_19275__$1;
(statearr_19284_19333[(2)] = inst_19248);

(statearr_19284_19333[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (21))){
var inst_19268 = (state_19275[(2)]);
var state_19275__$1 = (function (){var statearr_19285 = state_19275;
(statearr_19285[(9)] = inst_19268);

return statearr_19285;
})();
var statearr_19286_19334 = state_19275__$1;
(statearr_19286_19334[(2)] = null);

(statearr_19286_19334[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (13))){
var inst_19230 = (state_19275[(10)]);
var inst_19232 = cljs.core.chunked_seq_QMARK_(inst_19230);
var state_19275__$1 = state_19275;
if(inst_19232){
var statearr_19287_19335 = state_19275__$1;
(statearr_19287_19335[(1)] = (16));

} else {
var statearr_19288_19336 = state_19275__$1;
(statearr_19288_19336[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (22))){
var inst_19260 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
if(cljs.core.truth_(inst_19260)){
var statearr_19289_19337 = state_19275__$1;
(statearr_19289_19337[(1)] = (23));

} else {
var statearr_19290_19338 = state_19275__$1;
(statearr_19290_19338[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (6))){
var inst_19256 = (state_19275[(11)]);
var inst_19254 = (state_19275[(7)]);
var inst_19206 = (state_19275[(8)]);
var inst_19254__$1 = (function (){var G__19291 = inst_19206;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__19291) : topic_fn.call(null,G__19291));
})();
var inst_19255 = (function (){var G__19292 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19292) : cljs.core.deref.call(null,G__19292));
})();
var inst_19256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19255,inst_19254__$1);
var state_19275__$1 = (function (){var statearr_19293 = state_19275;
(statearr_19293[(11)] = inst_19256__$1);

(statearr_19293[(7)] = inst_19254__$1);

return statearr_19293;
})();
if(cljs.core.truth_(inst_19256__$1)){
var statearr_19294_19339 = state_19275__$1;
(statearr_19294_19339[(1)] = (19));

} else {
var statearr_19295_19340 = state_19275__$1;
(statearr_19295_19340[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (25))){
var inst_19265 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19296_19341 = state_19275__$1;
(statearr_19296_19341[(2)] = inst_19265);

(statearr_19296_19341[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (17))){
var inst_19230 = (state_19275[(10)]);
var inst_19239 = cljs.core.first(inst_19230);
var inst_19240 = cljs.core.async.muxch_STAR_(inst_19239);
var inst_19241 = cljs.core.async.close_BANG_(inst_19240);
var inst_19242 = cljs.core.next(inst_19230);
var inst_19216 = inst_19242;
var inst_19217 = null;
var inst_19218 = (0);
var inst_19219 = (0);
var state_19275__$1 = (function (){var statearr_19297 = state_19275;
(statearr_19297[(12)] = inst_19219);

(statearr_19297[(13)] = inst_19216);

(statearr_19297[(14)] = inst_19218);

(statearr_19297[(15)] = inst_19241);

(statearr_19297[(16)] = inst_19217);

return statearr_19297;
})();
var statearr_19298_19342 = state_19275__$1;
(statearr_19298_19342[(2)] = null);

(statearr_19298_19342[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (3))){
var inst_19273 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19275__$1,inst_19273);
} else {
if((state_val_19276 === (12))){
var inst_19250 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19299_19343 = state_19275__$1;
(statearr_19299_19343[(2)] = inst_19250);

(statearr_19299_19343[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (2))){
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19275__$1,(4),ch);
} else {
if((state_val_19276 === (23))){
var state_19275__$1 = state_19275;
var statearr_19300_19344 = state_19275__$1;
(statearr_19300_19344[(2)] = null);

(statearr_19300_19344[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (19))){
var inst_19256 = (state_19275[(11)]);
var inst_19206 = (state_19275[(8)]);
var inst_19258 = cljs.core.async.muxch_STAR_(inst_19256);
var state_19275__$1 = state_19275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19275__$1,(22),inst_19258,inst_19206);
} else {
if((state_val_19276 === (11))){
var inst_19230 = (state_19275[(10)]);
var inst_19216 = (state_19275[(13)]);
var inst_19230__$1 = cljs.core.seq(inst_19216);
var state_19275__$1 = (function (){var statearr_19301 = state_19275;
(statearr_19301[(10)] = inst_19230__$1);

return statearr_19301;
})();
if(inst_19230__$1){
var statearr_19302_19345 = state_19275__$1;
(statearr_19302_19345[(1)] = (13));

} else {
var statearr_19303_19346 = state_19275__$1;
(statearr_19303_19346[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (9))){
var inst_19252 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19304_19347 = state_19275__$1;
(statearr_19304_19347[(2)] = inst_19252);

(statearr_19304_19347[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (5))){
var inst_19213 = (function (){var G__19305 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19305) : cljs.core.deref.call(null,G__19305));
})();
var inst_19214 = cljs.core.vals(inst_19213);
var inst_19215 = cljs.core.seq(inst_19214);
var inst_19216 = inst_19215;
var inst_19217 = null;
var inst_19218 = (0);
var inst_19219 = (0);
var state_19275__$1 = (function (){var statearr_19306 = state_19275;
(statearr_19306[(12)] = inst_19219);

(statearr_19306[(13)] = inst_19216);

(statearr_19306[(14)] = inst_19218);

(statearr_19306[(16)] = inst_19217);

return statearr_19306;
})();
var statearr_19307_19348 = state_19275__$1;
(statearr_19307_19348[(2)] = null);

(statearr_19307_19348[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (14))){
var state_19275__$1 = state_19275;
var statearr_19311_19349 = state_19275__$1;
(statearr_19311_19349[(2)] = null);

(statearr_19311_19349[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (16))){
var inst_19230 = (state_19275[(10)]);
var inst_19234 = cljs.core.chunk_first(inst_19230);
var inst_19235 = cljs.core.chunk_rest(inst_19230);
var inst_19236 = cljs.core.count(inst_19234);
var inst_19216 = inst_19235;
var inst_19217 = inst_19234;
var inst_19218 = inst_19236;
var inst_19219 = (0);
var state_19275__$1 = (function (){var statearr_19312 = state_19275;
(statearr_19312[(12)] = inst_19219);

(statearr_19312[(13)] = inst_19216);

(statearr_19312[(14)] = inst_19218);

(statearr_19312[(16)] = inst_19217);

return statearr_19312;
})();
var statearr_19313_19350 = state_19275__$1;
(statearr_19313_19350[(2)] = null);

(statearr_19313_19350[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (10))){
var inst_19219 = (state_19275[(12)]);
var inst_19216 = (state_19275[(13)]);
var inst_19218 = (state_19275[(14)]);
var inst_19217 = (state_19275[(16)]);
var inst_19224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19217,inst_19219);
var inst_19225 = cljs.core.async.muxch_STAR_(inst_19224);
var inst_19226 = cljs.core.async.close_BANG_(inst_19225);
var inst_19227 = (inst_19219 + (1));
var tmp19308 = inst_19216;
var tmp19309 = inst_19218;
var tmp19310 = inst_19217;
var inst_19216__$1 = tmp19308;
var inst_19217__$1 = tmp19310;
var inst_19218__$1 = tmp19309;
var inst_19219__$1 = inst_19227;
var state_19275__$1 = (function (){var statearr_19314 = state_19275;
(statearr_19314[(12)] = inst_19219__$1);

(statearr_19314[(17)] = inst_19226);

(statearr_19314[(13)] = inst_19216__$1);

(statearr_19314[(14)] = inst_19218__$1);

(statearr_19314[(16)] = inst_19217__$1);

return statearr_19314;
})();
var statearr_19315_19351 = state_19275__$1;
(statearr_19315_19351[(2)] = null);

(statearr_19315_19351[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (18))){
var inst_19245 = (state_19275[(2)]);
var state_19275__$1 = state_19275;
var statearr_19316_19352 = state_19275__$1;
(statearr_19316_19352[(2)] = inst_19245);

(statearr_19316_19352[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19276 === (8))){
var inst_19219 = (state_19275[(12)]);
var inst_19218 = (state_19275[(14)]);
var inst_19221 = (inst_19219 < inst_19218);
var inst_19222 = inst_19221;
var state_19275__$1 = state_19275;
if(cljs.core.truth_(inst_19222)){
var statearr_19317_19353 = state_19275__$1;
(statearr_19317_19353[(1)] = (10));

} else {
var statearr_19318_19354 = state_19275__$1;
(statearr_19318_19354[(1)] = (11));

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
});})(c__6463__auto___19326,mults,ensure_mult,p))
;
return ((function (switch__6383__auto__,c__6463__auto___19326,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6384__auto__ = null;
var cljs$core$async$pub_$_state_machine__6384__auto____0 = (function (){
var statearr_19322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19322[(0)] = cljs$core$async$pub_$_state_machine__6384__auto__);

(statearr_19322[(1)] = (1));

return statearr_19322;
});
var cljs$core$async$pub_$_state_machine__6384__auto____1 = (function (state_19275){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19275);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19323){if((e19323 instanceof Object)){
var ex__6387__auto__ = e19323;
var statearr_19324_19355 = state_19275;
(statearr_19324_19355[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19275);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19356 = state_19275;
state_19275 = G__19356;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6384__auto__ = function(state_19275){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6384__auto____1.call(this,state_19275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6384__auto____0;
cljs$core$async$pub_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6384__auto____1;
return cljs$core$async$pub_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19326,mults,ensure_mult,p))
})();
var state__6465__auto__ = (function (){var statearr_19325 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19326);

return statearr_19325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19326,mults,ensure_mult,p))
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
var dctr = (function (){var G__19437 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19437) : cljs.core.atom.call(null,G__19437));
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
var c__6463__auto___19510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19476){
var state_val_19477 = (state_19476[(1)]);
if((state_val_19477 === (7))){
var state_19476__$1 = state_19476;
var statearr_19478_19511 = state_19476__$1;
(statearr_19478_19511[(2)] = null);

(statearr_19478_19511[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (1))){
var state_19476__$1 = state_19476;
var statearr_19479_19512 = state_19476__$1;
(statearr_19479_19512[(2)] = null);

(statearr_19479_19512[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (4))){
var inst_19440 = (state_19476[(7)]);
var inst_19442 = (inst_19440 < cnt);
var state_19476__$1 = state_19476;
if(cljs.core.truth_(inst_19442)){
var statearr_19480_19513 = state_19476__$1;
(statearr_19480_19513[(1)] = (6));

} else {
var statearr_19481_19514 = state_19476__$1;
(statearr_19481_19514[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (15))){
var inst_19472 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19482_19515 = state_19476__$1;
(statearr_19482_19515[(2)] = inst_19472);

(statearr_19482_19515[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (13))){
var inst_19465 = cljs.core.async.close_BANG_(out);
var state_19476__$1 = state_19476;
var statearr_19483_19516 = state_19476__$1;
(statearr_19483_19516[(2)] = inst_19465);

(statearr_19483_19516[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (6))){
var state_19476__$1 = state_19476;
var statearr_19484_19517 = state_19476__$1;
(statearr_19484_19517[(2)] = null);

(statearr_19484_19517[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (3))){
var inst_19474 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19476__$1,inst_19474);
} else {
if((state_val_19477 === (12))){
var inst_19462 = (state_19476[(8)]);
var inst_19462__$1 = (state_19476[(2)]);
var inst_19463 = cljs.core.some(cljs.core.nil_QMARK_,inst_19462__$1);
var state_19476__$1 = (function (){var statearr_19485 = state_19476;
(statearr_19485[(8)] = inst_19462__$1);

return statearr_19485;
})();
if(cljs.core.truth_(inst_19463)){
var statearr_19486_19518 = state_19476__$1;
(statearr_19486_19518[(1)] = (13));

} else {
var statearr_19487_19519 = state_19476__$1;
(statearr_19487_19519[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (2))){
var inst_19439 = (function (){var G__19488 = dctr;
var G__19489 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19488,G__19489) : cljs.core.reset_BANG_.call(null,G__19488,G__19489));
})();
var inst_19440 = (0);
var state_19476__$1 = (function (){var statearr_19490 = state_19476;
(statearr_19490[(7)] = inst_19440);

(statearr_19490[(9)] = inst_19439);

return statearr_19490;
})();
var statearr_19491_19520 = state_19476__$1;
(statearr_19491_19520[(2)] = null);

(statearr_19491_19520[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (11))){
var inst_19440 = (state_19476[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19476,(10),Object,null,(9));
var inst_19449 = (function (){var G__19492 = inst_19440;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__19492) : chs__$1.call(null,G__19492));
})();
var inst_19450 = (function (){var G__19493 = inst_19440;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__19493) : done.call(null,G__19493));
})();
var inst_19451 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19449,inst_19450);
var state_19476__$1 = state_19476;
var statearr_19494_19521 = state_19476__$1;
(statearr_19494_19521[(2)] = inst_19451);


cljs.core.async.impl.ioc_helpers.process_exception(state_19476__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (9))){
var inst_19440 = (state_19476[(7)]);
var inst_19453 = (state_19476[(2)]);
var inst_19454 = (inst_19440 + (1));
var inst_19440__$1 = inst_19454;
var state_19476__$1 = (function (){var statearr_19495 = state_19476;
(statearr_19495[(7)] = inst_19440__$1);

(statearr_19495[(10)] = inst_19453);

return statearr_19495;
})();
var statearr_19496_19522 = state_19476__$1;
(statearr_19496_19522[(2)] = null);

(statearr_19496_19522[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (5))){
var inst_19460 = (state_19476[(2)]);
var state_19476__$1 = (function (){var statearr_19497 = state_19476;
(statearr_19497[(11)] = inst_19460);

return statearr_19497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19476__$1,(12),dchan);
} else {
if((state_val_19477 === (14))){
var inst_19462 = (state_19476[(8)]);
var inst_19467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19462);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19476__$1,(16),out,inst_19467);
} else {
if((state_val_19477 === (16))){
var inst_19469 = (state_19476[(2)]);
var state_19476__$1 = (function (){var statearr_19498 = state_19476;
(statearr_19498[(12)] = inst_19469);

return statearr_19498;
})();
var statearr_19499_19523 = state_19476__$1;
(statearr_19499_19523[(2)] = null);

(statearr_19499_19523[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (10))){
var inst_19444 = (state_19476[(2)]);
var inst_19445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19476__$1 = (function (){var statearr_19500 = state_19476;
(statearr_19500[(13)] = inst_19444);

return statearr_19500;
})();
var statearr_19501_19524 = state_19476__$1;
(statearr_19501_19524[(2)] = inst_19445);


cljs.core.async.impl.ioc_helpers.process_exception(state_19476__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19477 === (8))){
var inst_19458 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19502_19525 = state_19476__$1;
(statearr_19502_19525[(2)] = inst_19458);

(statearr_19502_19525[(1)] = (5));


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
});})(c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6383__auto__,c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6384__auto__ = null;
var cljs$core$async$map_$_state_machine__6384__auto____0 = (function (){
var statearr_19506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19506[(0)] = cljs$core$async$map_$_state_machine__6384__auto__);

(statearr_19506[(1)] = (1));

return statearr_19506;
});
var cljs$core$async$map_$_state_machine__6384__auto____1 = (function (state_19476){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19476);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19507){if((e19507 instanceof Object)){
var ex__6387__auto__ = e19507;
var statearr_19508_19526 = state_19476;
(statearr_19508_19526[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19476);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19527 = state_19476;
state_19476 = G__19527;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6384__auto__ = function(state_19476){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6384__auto____1.call(this,state_19476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6384__auto____0;
cljs$core$async$map_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6384__auto____1;
return cljs$core$async$map_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6465__auto__ = (function (){var statearr_19509 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19510);

return statearr_19509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19510,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6463__auto___19637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19637,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19637,out){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var inst_19592 = (state_19613[(7)]);
var inst_19593 = (state_19613[(8)]);
var inst_19592__$1 = (state_19613[(2)]);
var inst_19593__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19592__$1,(0),null);
var inst_19594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19592__$1,(1),null);
var inst_19595 = (inst_19593__$1 == null);
var state_19613__$1 = (function (){var statearr_19615 = state_19613;
(statearr_19615[(7)] = inst_19592__$1);

(statearr_19615[(9)] = inst_19594);

(statearr_19615[(8)] = inst_19593__$1);

return statearr_19615;
})();
if(cljs.core.truth_(inst_19595)){
var statearr_19616_19638 = state_19613__$1;
(statearr_19616_19638[(1)] = (8));

} else {
var statearr_19617_19639 = state_19613__$1;
(statearr_19617_19639[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (1))){
var inst_19584 = cljs.core.vec(chs);
var inst_19585 = inst_19584;
var state_19613__$1 = (function (){var statearr_19618 = state_19613;
(statearr_19618[(10)] = inst_19585);

return statearr_19618;
})();
var statearr_19619_19640 = state_19613__$1;
(statearr_19619_19640[(2)] = null);

(statearr_19619_19640[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (4))){
var inst_19585 = (state_19613[(10)]);
var state_19613__$1 = state_19613;
return cljs.core.async.ioc_alts_BANG_(state_19613__$1,(7),inst_19585);
} else {
if((state_val_19614 === (6))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19620_19641 = state_19613__$1;
(statearr_19620_19641[(2)] = inst_19609);

(statearr_19620_19641[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (2))){
var inst_19585 = (state_19613[(10)]);
var inst_19587 = cljs.core.count(inst_19585);
var inst_19588 = (inst_19587 > (0));
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19588)){
var statearr_19622_19642 = state_19613__$1;
(statearr_19622_19642[(1)] = (4));

} else {
var statearr_19623_19643 = state_19613__$1;
(statearr_19623_19643[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (11))){
var inst_19585 = (state_19613[(10)]);
var inst_19602 = (state_19613[(2)]);
var tmp19621 = inst_19585;
var inst_19585__$1 = tmp19621;
var state_19613__$1 = (function (){var statearr_19624 = state_19613;
(statearr_19624[(10)] = inst_19585__$1);

(statearr_19624[(11)] = inst_19602);

return statearr_19624;
})();
var statearr_19625_19644 = state_19613__$1;
(statearr_19625_19644[(2)] = null);

(statearr_19625_19644[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (9))){
var inst_19593 = (state_19613[(8)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19613__$1,(11),out,inst_19593);
} else {
if((state_val_19614 === (5))){
var inst_19607 = cljs.core.async.close_BANG_(out);
var state_19613__$1 = state_19613;
var statearr_19626_19645 = state_19613__$1;
(statearr_19626_19645[(2)] = inst_19607);

(statearr_19626_19645[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (10))){
var inst_19605 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19627_19646 = state_19613__$1;
(statearr_19627_19646[(2)] = inst_19605);

(statearr_19627_19646[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19614 === (8))){
var inst_19585 = (state_19613[(10)]);
var inst_19592 = (state_19613[(7)]);
var inst_19594 = (state_19613[(9)]);
var inst_19593 = (state_19613[(8)]);
var inst_19597 = (function (){var c = inst_19594;
var v = inst_19593;
var vec__19590 = inst_19592;
var cs = inst_19585;
return ((function (c,v,vec__19590,cs,inst_19585,inst_19592,inst_19594,inst_19593,state_val_19614,c__6463__auto___19637,out){
return (function (p1__19528_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19528_SHARP_);
});
;})(c,v,vec__19590,cs,inst_19585,inst_19592,inst_19594,inst_19593,state_val_19614,c__6463__auto___19637,out))
})();
var inst_19598 = cljs.core.filterv(inst_19597,inst_19585);
var inst_19585__$1 = inst_19598;
var state_19613__$1 = (function (){var statearr_19628 = state_19613;
(statearr_19628[(10)] = inst_19585__$1);

return statearr_19628;
})();
var statearr_19629_19647 = state_19613__$1;
(statearr_19629_19647[(2)] = null);

(statearr_19629_19647[(1)] = (2));


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
});})(c__6463__auto___19637,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19637,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6384__auto__ = null;
var cljs$core$async$merge_$_state_machine__6384__auto____0 = (function (){
var statearr_19633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19633[(0)] = cljs$core$async$merge_$_state_machine__6384__auto__);

(statearr_19633[(1)] = (1));

return statearr_19633;
});
var cljs$core$async$merge_$_state_machine__6384__auto____1 = (function (state_19613){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19613);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19634){if((e19634 instanceof Object)){
var ex__6387__auto__ = e19634;
var statearr_19635_19648 = state_19613;
(statearr_19635_19648[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19613);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19649 = state_19613;
state_19613 = G__19649;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6384__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6384__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6384__auto____0;
cljs$core$async$merge_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6384__auto____1;
return cljs$core$async$merge_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19637,out))
})();
var state__6465__auto__ = (function (){var statearr_19636 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19637);

return statearr_19636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19637,out))
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
var c__6463__auto___19745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19745,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19745,out){
return (function (state_19722){
var state_val_19723 = (state_19722[(1)]);
if((state_val_19723 === (7))){
var inst_19704 = (state_19722[(7)]);
var inst_19704__$1 = (state_19722[(2)]);
var inst_19705 = (inst_19704__$1 == null);
var inst_19706 = cljs.core.not(inst_19705);
var state_19722__$1 = (function (){var statearr_19724 = state_19722;
(statearr_19724[(7)] = inst_19704__$1);

return statearr_19724;
})();
if(inst_19706){
var statearr_19725_19746 = state_19722__$1;
(statearr_19725_19746[(1)] = (8));

} else {
var statearr_19726_19747 = state_19722__$1;
(statearr_19726_19747[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (1))){
var inst_19699 = (0);
var state_19722__$1 = (function (){var statearr_19727 = state_19722;
(statearr_19727[(8)] = inst_19699);

return statearr_19727;
})();
var statearr_19728_19748 = state_19722__$1;
(statearr_19728_19748[(2)] = null);

(statearr_19728_19748[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (4))){
var state_19722__$1 = state_19722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19722__$1,(7),ch);
} else {
if((state_val_19723 === (6))){
var inst_19717 = (state_19722[(2)]);
var state_19722__$1 = state_19722;
var statearr_19729_19749 = state_19722__$1;
(statearr_19729_19749[(2)] = inst_19717);

(statearr_19729_19749[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (3))){
var inst_19719 = (state_19722[(2)]);
var inst_19720 = cljs.core.async.close_BANG_(out);
var state_19722__$1 = (function (){var statearr_19730 = state_19722;
(statearr_19730[(9)] = inst_19719);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19722__$1,inst_19720);
} else {
if((state_val_19723 === (2))){
var inst_19699 = (state_19722[(8)]);
var inst_19701 = (inst_19699 < n);
var state_19722__$1 = state_19722;
if(cljs.core.truth_(inst_19701)){
var statearr_19731_19750 = state_19722__$1;
(statearr_19731_19750[(1)] = (4));

} else {
var statearr_19732_19751 = state_19722__$1;
(statearr_19732_19751[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (11))){
var inst_19699 = (state_19722[(8)]);
var inst_19709 = (state_19722[(2)]);
var inst_19710 = (inst_19699 + (1));
var inst_19699__$1 = inst_19710;
var state_19722__$1 = (function (){var statearr_19733 = state_19722;
(statearr_19733[(10)] = inst_19709);

(statearr_19733[(8)] = inst_19699__$1);

return statearr_19733;
})();
var statearr_19734_19752 = state_19722__$1;
(statearr_19734_19752[(2)] = null);

(statearr_19734_19752[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (9))){
var state_19722__$1 = state_19722;
var statearr_19735_19753 = state_19722__$1;
(statearr_19735_19753[(2)] = null);

(statearr_19735_19753[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (5))){
var state_19722__$1 = state_19722;
var statearr_19736_19754 = state_19722__$1;
(statearr_19736_19754[(2)] = null);

(statearr_19736_19754[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (10))){
var inst_19714 = (state_19722[(2)]);
var state_19722__$1 = state_19722;
var statearr_19737_19755 = state_19722__$1;
(statearr_19737_19755[(2)] = inst_19714);

(statearr_19737_19755[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19723 === (8))){
var inst_19704 = (state_19722[(7)]);
var state_19722__$1 = state_19722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19722__$1,(11),out,inst_19704);
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
});})(c__6463__auto___19745,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19745,out){
return (function() {
var cljs$core$async$take_$_state_machine__6384__auto__ = null;
var cljs$core$async$take_$_state_machine__6384__auto____0 = (function (){
var statearr_19741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19741[(0)] = cljs$core$async$take_$_state_machine__6384__auto__);

(statearr_19741[(1)] = (1));

return statearr_19741;
});
var cljs$core$async$take_$_state_machine__6384__auto____1 = (function (state_19722){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19722);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19742){if((e19742 instanceof Object)){
var ex__6387__auto__ = e19742;
var statearr_19743_19756 = state_19722;
(statearr_19743_19756[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19722);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19757 = state_19722;
state_19722 = G__19757;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6384__auto__ = function(state_19722){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6384__auto____1.call(this,state_19722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6384__auto____0;
cljs$core$async$take_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6384__auto____1;
return cljs$core$async$take_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19745,out))
})();
var state__6465__auto__ = (function (){var statearr_19744 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19745);

return statearr_19744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19745,out))
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
if(typeof cljs.core.async.t19770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19770 = (function (ch,f,map_LT_,meta19771){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19771 = meta19771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t19773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19773 = (function (fn1,_,meta19771,map_LT_,f,ch,meta19774){
this.fn1 = fn1;
this._ = _;
this.meta19771 = meta19771;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19774 = meta19774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19773.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t19773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19758_SHARP_){
var G__19776 = (((p1__19758_SHARP_ == null))?null:(function (){var G__19777 = p1__19758_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19777) : self__.f.call(null,G__19777));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19776) : f1.call(null,G__19776));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19775){
var self__ = this;
var _19775__$1 = this;
return self__.meta19774;
});})(___$1))
;

cljs.core.async.t19773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19775,meta19774__$1){
var self__ = this;
var _19775__$1 = this;
return (new cljs.core.async.t19773(self__.fn1,self__._,self__.meta19771,self__.map_LT_,self__.f,self__.ch,meta19774__$1));
});})(___$1))
;

cljs.core.async.t19773.cljs$lang$type = true;

cljs.core.async.t19773.cljs$lang$ctorStr = "cljs.core.async/t19773";

cljs.core.async.t19773.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19773");
});})(___$1))
;

cljs.core.async.__GT_t19773 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19773(fn1__$1,___$2,meta19771__$1,map_LT___$1,f__$1,ch__$1,meta19774){
return (new cljs.core.async.t19773(fn1__$1,___$2,meta19771__$1,map_LT___$1,f__$1,ch__$1,meta19774));
});})(___$1))
;

}

return (new cljs.core.async.t19773(fn1,___$1,self__.meta19771,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !(((function (){var G__19778 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19778) : cljs.core.deref.call(null,G__19778));
})() == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19779 = (function (){var G__19780 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19780) : cljs.core.deref.call(null,G__19780));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19779) : self__.f.call(null,G__19779));
})());
} else {
return ret;
}
});

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19770.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19772){
var self__ = this;
var _19772__$1 = this;
return self__.meta19771;
});

cljs.core.async.t19770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19772,meta19771__$1){
var self__ = this;
var _19772__$1 = this;
return (new cljs.core.async.t19770(self__.ch,self__.f,self__.map_LT_,meta19771__$1));
});

cljs.core.async.t19770.cljs$lang$type = true;

cljs.core.async.t19770.cljs$lang$ctorStr = "cljs.core.async/t19770";

cljs.core.async.t19770.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19770");
});

cljs.core.async.__GT_t19770 = (function cljs$core$async$map_LT__$___GT_t19770(ch__$1,f__$1,map_LT___$1,meta19771){
return (new cljs.core.async.t19770(ch__$1,f__$1,map_LT___$1,meta19771));
});

}

return (new cljs.core.async.t19770(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19785 = (function (ch,f,map_GT_,meta19786){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19786 = meta19786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__19788 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19788) : self__.f.call(null,G__19788));
})(),fn1);
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

cljs.core.async.t19785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19787){
var self__ = this;
var _19787__$1 = this;
return self__.meta19786;
});

cljs.core.async.t19785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19787,meta19786__$1){
var self__ = this;
var _19787__$1 = this;
return (new cljs.core.async.t19785(self__.ch,self__.f,self__.map_GT_,meta19786__$1));
});

cljs.core.async.t19785.cljs$lang$type = true;

cljs.core.async.t19785.cljs$lang$ctorStr = "cljs.core.async/t19785";

cljs.core.async.t19785.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19785");
});

cljs.core.async.__GT_t19785 = (function cljs$core$async$map_GT__$___GT_t19785(ch__$1,f__$1,map_GT___$1,meta19786){
return (new cljs.core.async.t19785(ch__$1,f__$1,map_GT___$1,meta19786));
});

}

return (new cljs.core.async.t19785(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19793 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19793 = (function (ch,p,filter_GT_,meta19794){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19794 = meta19794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__19796 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__19796) : self__.p.call(null,G__19796));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19795){
var self__ = this;
var _19795__$1 = this;
return self__.meta19794;
});

cljs.core.async.t19793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19795,meta19794__$1){
var self__ = this;
var _19795__$1 = this;
return (new cljs.core.async.t19793(self__.ch,self__.p,self__.filter_GT_,meta19794__$1));
});

cljs.core.async.t19793.cljs$lang$type = true;

cljs.core.async.t19793.cljs$lang$ctorStr = "cljs.core.async/t19793";

cljs.core.async.t19793.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19793");
});

cljs.core.async.__GT_t19793 = (function cljs$core$async$filter_GT__$___GT_t19793(ch__$1,p__$1,filter_GT___$1,meta19794){
return (new cljs.core.async.t19793(ch__$1,p__$1,filter_GT___$1,meta19794));
});

}

return (new cljs.core.async.t19793(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6463__auto___19884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___19884,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___19884,out){
return (function (state_19862){
var state_val_19863 = (state_19862[(1)]);
if((state_val_19863 === (7))){
var inst_19858 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
var statearr_19864_19885 = state_19862__$1;
(statearr_19864_19885[(2)] = inst_19858);

(statearr_19864_19885[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (1))){
var state_19862__$1 = state_19862;
var statearr_19865_19886 = state_19862__$1;
(statearr_19865_19886[(2)] = null);

(statearr_19865_19886[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (4))){
var inst_19844 = (state_19862[(7)]);
var inst_19844__$1 = (state_19862[(2)]);
var inst_19845 = (inst_19844__$1 == null);
var state_19862__$1 = (function (){var statearr_19866 = state_19862;
(statearr_19866[(7)] = inst_19844__$1);

return statearr_19866;
})();
if(cljs.core.truth_(inst_19845)){
var statearr_19867_19887 = state_19862__$1;
(statearr_19867_19887[(1)] = (5));

} else {
var statearr_19868_19888 = state_19862__$1;
(statearr_19868_19888[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (6))){
var inst_19844 = (state_19862[(7)]);
var inst_19849 = (function (){var G__19869 = inst_19844;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19869) : p.call(null,G__19869));
})();
var state_19862__$1 = state_19862;
if(cljs.core.truth_(inst_19849)){
var statearr_19870_19889 = state_19862__$1;
(statearr_19870_19889[(1)] = (8));

} else {
var statearr_19871_19890 = state_19862__$1;
(statearr_19871_19890[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (3))){
var inst_19860 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19862__$1,inst_19860);
} else {
if((state_val_19863 === (2))){
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19862__$1,(4),ch);
} else {
if((state_val_19863 === (11))){
var inst_19852 = (state_19862[(2)]);
var state_19862__$1 = state_19862;
var statearr_19872_19891 = state_19862__$1;
(statearr_19872_19891[(2)] = inst_19852);

(statearr_19872_19891[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (9))){
var state_19862__$1 = state_19862;
var statearr_19873_19892 = state_19862__$1;
(statearr_19873_19892[(2)] = null);

(statearr_19873_19892[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (5))){
var inst_19847 = cljs.core.async.close_BANG_(out);
var state_19862__$1 = state_19862;
var statearr_19874_19893 = state_19862__$1;
(statearr_19874_19893[(2)] = inst_19847);

(statearr_19874_19893[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (10))){
var inst_19855 = (state_19862[(2)]);
var state_19862__$1 = (function (){var statearr_19875 = state_19862;
(statearr_19875[(8)] = inst_19855);

return statearr_19875;
})();
var statearr_19876_19894 = state_19862__$1;
(statearr_19876_19894[(2)] = null);

(statearr_19876_19894[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19863 === (8))){
var inst_19844 = (state_19862[(7)]);
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19862__$1,(11),out,inst_19844);
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
});})(c__6463__auto___19884,out))
;
return ((function (switch__6383__auto__,c__6463__auto___19884,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6384__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6384__auto____0 = (function (){
var statearr_19880 = [null,null,null,null,null,null,null,null,null];
(statearr_19880[(0)] = cljs$core$async$filter_LT__$_state_machine__6384__auto__);

(statearr_19880[(1)] = (1));

return statearr_19880;
});
var cljs$core$async$filter_LT__$_state_machine__6384__auto____1 = (function (state_19862){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_19862);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e19881){if((e19881 instanceof Object)){
var ex__6387__auto__ = e19881;
var statearr_19882_19895 = state_19862;
(statearr_19882_19895[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19862);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19896 = state_19862;
state_19862 = G__19896;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6384__auto__ = function(state_19862){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6384__auto____1.call(this,state_19862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6384__auto____0;
cljs$core$async$filter_LT__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6384__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___19884,out))
})();
var state__6465__auto__ = (function (){var statearr_19883 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_19883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___19884);

return statearr_19883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___19884,out))
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
return (function (state_20066){
var state_val_20067 = (state_20066[(1)]);
if((state_val_20067 === (7))){
var inst_20062 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
var statearr_20068_20110 = state_20066__$1;
(statearr_20068_20110[(2)] = inst_20062);

(statearr_20068_20110[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (20))){
var inst_20032 = (state_20066[(7)]);
var inst_20043 = (state_20066[(2)]);
var inst_20044 = cljs.core.next(inst_20032);
var inst_20018 = inst_20044;
var inst_20019 = null;
var inst_20020 = (0);
var inst_20021 = (0);
var state_20066__$1 = (function (){var statearr_20069 = state_20066;
(statearr_20069[(8)] = inst_20018);

(statearr_20069[(9)] = inst_20021);

(statearr_20069[(10)] = inst_20019);

(statearr_20069[(11)] = inst_20020);

(statearr_20069[(12)] = inst_20043);

return statearr_20069;
})();
var statearr_20070_20111 = state_20066__$1;
(statearr_20070_20111[(2)] = null);

(statearr_20070_20111[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (1))){
var state_20066__$1 = state_20066;
var statearr_20071_20112 = state_20066__$1;
(statearr_20071_20112[(2)] = null);

(statearr_20071_20112[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (4))){
var inst_20007 = (state_20066[(13)]);
var inst_20007__$1 = (state_20066[(2)]);
var inst_20008 = (inst_20007__$1 == null);
var state_20066__$1 = (function (){var statearr_20072 = state_20066;
(statearr_20072[(13)] = inst_20007__$1);

return statearr_20072;
})();
if(cljs.core.truth_(inst_20008)){
var statearr_20073_20113 = state_20066__$1;
(statearr_20073_20113[(1)] = (5));

} else {
var statearr_20074_20114 = state_20066__$1;
(statearr_20074_20114[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (15))){
var state_20066__$1 = state_20066;
var statearr_20078_20115 = state_20066__$1;
(statearr_20078_20115[(2)] = null);

(statearr_20078_20115[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (21))){
var state_20066__$1 = state_20066;
var statearr_20079_20116 = state_20066__$1;
(statearr_20079_20116[(2)] = null);

(statearr_20079_20116[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (13))){
var inst_20018 = (state_20066[(8)]);
var inst_20021 = (state_20066[(9)]);
var inst_20019 = (state_20066[(10)]);
var inst_20020 = (state_20066[(11)]);
var inst_20028 = (state_20066[(2)]);
var inst_20029 = (inst_20021 + (1));
var tmp20075 = inst_20018;
var tmp20076 = inst_20019;
var tmp20077 = inst_20020;
var inst_20018__$1 = tmp20075;
var inst_20019__$1 = tmp20076;
var inst_20020__$1 = tmp20077;
var inst_20021__$1 = inst_20029;
var state_20066__$1 = (function (){var statearr_20080 = state_20066;
(statearr_20080[(8)] = inst_20018__$1);

(statearr_20080[(14)] = inst_20028);

(statearr_20080[(9)] = inst_20021__$1);

(statearr_20080[(10)] = inst_20019__$1);

(statearr_20080[(11)] = inst_20020__$1);

return statearr_20080;
})();
var statearr_20081_20117 = state_20066__$1;
(statearr_20081_20117[(2)] = null);

(statearr_20081_20117[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (22))){
var state_20066__$1 = state_20066;
var statearr_20082_20118 = state_20066__$1;
(statearr_20082_20118[(2)] = null);

(statearr_20082_20118[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (6))){
var inst_20007 = (state_20066[(13)]);
var inst_20016 = (function (){var G__20083 = inst_20007;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20083) : f.call(null,G__20083));
})();
var inst_20017 = cljs.core.seq(inst_20016);
var inst_20018 = inst_20017;
var inst_20019 = null;
var inst_20020 = (0);
var inst_20021 = (0);
var state_20066__$1 = (function (){var statearr_20084 = state_20066;
(statearr_20084[(8)] = inst_20018);

(statearr_20084[(9)] = inst_20021);

(statearr_20084[(10)] = inst_20019);

(statearr_20084[(11)] = inst_20020);

return statearr_20084;
})();
var statearr_20085_20119 = state_20066__$1;
(statearr_20085_20119[(2)] = null);

(statearr_20085_20119[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (17))){
var inst_20032 = (state_20066[(7)]);
var inst_20036 = cljs.core.chunk_first(inst_20032);
var inst_20037 = cljs.core.chunk_rest(inst_20032);
var inst_20038 = cljs.core.count(inst_20036);
var inst_20018 = inst_20037;
var inst_20019 = inst_20036;
var inst_20020 = inst_20038;
var inst_20021 = (0);
var state_20066__$1 = (function (){var statearr_20086 = state_20066;
(statearr_20086[(8)] = inst_20018);

(statearr_20086[(9)] = inst_20021);

(statearr_20086[(10)] = inst_20019);

(statearr_20086[(11)] = inst_20020);

return statearr_20086;
})();
var statearr_20087_20120 = state_20066__$1;
(statearr_20087_20120[(2)] = null);

(statearr_20087_20120[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (3))){
var inst_20064 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20066__$1,inst_20064);
} else {
if((state_val_20067 === (12))){
var inst_20052 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
var statearr_20088_20121 = state_20066__$1;
(statearr_20088_20121[(2)] = inst_20052);

(statearr_20088_20121[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (2))){
var state_20066__$1 = state_20066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20066__$1,(4),in$);
} else {
if((state_val_20067 === (23))){
var inst_20060 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
var statearr_20089_20122 = state_20066__$1;
(statearr_20089_20122[(2)] = inst_20060);

(statearr_20089_20122[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (19))){
var inst_20047 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
var statearr_20090_20123 = state_20066__$1;
(statearr_20090_20123[(2)] = inst_20047);

(statearr_20090_20123[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (11))){
var inst_20018 = (state_20066[(8)]);
var inst_20032 = (state_20066[(7)]);
var inst_20032__$1 = cljs.core.seq(inst_20018);
var state_20066__$1 = (function (){var statearr_20091 = state_20066;
(statearr_20091[(7)] = inst_20032__$1);

return statearr_20091;
})();
if(inst_20032__$1){
var statearr_20092_20124 = state_20066__$1;
(statearr_20092_20124[(1)] = (14));

} else {
var statearr_20093_20125 = state_20066__$1;
(statearr_20093_20125[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (9))){
var inst_20054 = (state_20066[(2)]);
var inst_20055 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20066__$1 = (function (){var statearr_20094 = state_20066;
(statearr_20094[(15)] = inst_20054);

return statearr_20094;
})();
if(cljs.core.truth_(inst_20055)){
var statearr_20095_20126 = state_20066__$1;
(statearr_20095_20126[(1)] = (21));

} else {
var statearr_20096_20127 = state_20066__$1;
(statearr_20096_20127[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (5))){
var inst_20010 = cljs.core.async.close_BANG_(out);
var state_20066__$1 = state_20066;
var statearr_20097_20128 = state_20066__$1;
(statearr_20097_20128[(2)] = inst_20010);

(statearr_20097_20128[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (14))){
var inst_20032 = (state_20066[(7)]);
var inst_20034 = cljs.core.chunked_seq_QMARK_(inst_20032);
var state_20066__$1 = state_20066;
if(inst_20034){
var statearr_20098_20129 = state_20066__$1;
(statearr_20098_20129[(1)] = (17));

} else {
var statearr_20099_20130 = state_20066__$1;
(statearr_20099_20130[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (16))){
var inst_20050 = (state_20066[(2)]);
var state_20066__$1 = state_20066;
var statearr_20100_20131 = state_20066__$1;
(statearr_20100_20131[(2)] = inst_20050);

(statearr_20100_20131[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20067 === (10))){
var inst_20021 = (state_20066[(9)]);
var inst_20019 = (state_20066[(10)]);
var inst_20026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20019,inst_20021);
var state_20066__$1 = state_20066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20066__$1,(13),out,inst_20026);
} else {
if((state_val_20067 === (18))){
var inst_20032 = (state_20066[(7)]);
var inst_20041 = cljs.core.first(inst_20032);
var state_20066__$1 = state_20066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20066__$1,(20),out,inst_20041);
} else {
if((state_val_20067 === (8))){
var inst_20021 = (state_20066[(9)]);
var inst_20020 = (state_20066[(11)]);
var inst_20023 = (inst_20021 < inst_20020);
var inst_20024 = inst_20023;
var state_20066__$1 = state_20066;
if(cljs.core.truth_(inst_20024)){
var statearr_20101_20132 = state_20066__$1;
(statearr_20101_20132[(1)] = (10));

} else {
var statearr_20102_20133 = state_20066__$1;
(statearr_20102_20133[(1)] = (11));

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
var statearr_20106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20106[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__);

(statearr_20106[(1)] = (1));

return statearr_20106;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1 = (function (state_20066){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20066);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20107){if((e20107 instanceof Object)){
var ex__6387__auto__ = e20107;
var statearr_20108_20134 = state_20066;
(statearr_20108_20134[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20066);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20135 = state_20066;
state_20066 = G__20135;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__ = function(state_20066){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1.call(this,state_20066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6384__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto__))
})();
var state__6465__auto__ = (function (){var statearr_20109 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto__);

return statearr_20109;
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
var c__6463__auto___20240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20240,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20240,out){
return (function (state_20215){
var state_val_20216 = (state_20215[(1)]);
if((state_val_20216 === (7))){
var inst_20210 = (state_20215[(2)]);
var state_20215__$1 = state_20215;
var statearr_20217_20241 = state_20215__$1;
(statearr_20217_20241[(2)] = inst_20210);

(statearr_20217_20241[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (1))){
var inst_20192 = null;
var state_20215__$1 = (function (){var statearr_20218 = state_20215;
(statearr_20218[(7)] = inst_20192);

return statearr_20218;
})();
var statearr_20219_20242 = state_20215__$1;
(statearr_20219_20242[(2)] = null);

(statearr_20219_20242[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (4))){
var inst_20195 = (state_20215[(8)]);
var inst_20195__$1 = (state_20215[(2)]);
var inst_20196 = (inst_20195__$1 == null);
var inst_20197 = cljs.core.not(inst_20196);
var state_20215__$1 = (function (){var statearr_20220 = state_20215;
(statearr_20220[(8)] = inst_20195__$1);

return statearr_20220;
})();
if(inst_20197){
var statearr_20221_20243 = state_20215__$1;
(statearr_20221_20243[(1)] = (5));

} else {
var statearr_20222_20244 = state_20215__$1;
(statearr_20222_20244[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (6))){
var state_20215__$1 = state_20215;
var statearr_20223_20245 = state_20215__$1;
(statearr_20223_20245[(2)] = null);

(statearr_20223_20245[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (3))){
var inst_20212 = (state_20215[(2)]);
var inst_20213 = cljs.core.async.close_BANG_(out);
var state_20215__$1 = (function (){var statearr_20224 = state_20215;
(statearr_20224[(9)] = inst_20212);

return statearr_20224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20215__$1,inst_20213);
} else {
if((state_val_20216 === (2))){
var state_20215__$1 = state_20215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20215__$1,(4),ch);
} else {
if((state_val_20216 === (11))){
var inst_20195 = (state_20215[(8)]);
var inst_20204 = (state_20215[(2)]);
var inst_20192 = inst_20195;
var state_20215__$1 = (function (){var statearr_20225 = state_20215;
(statearr_20225[(7)] = inst_20192);

(statearr_20225[(10)] = inst_20204);

return statearr_20225;
})();
var statearr_20226_20246 = state_20215__$1;
(statearr_20226_20246[(2)] = null);

(statearr_20226_20246[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (9))){
var inst_20195 = (state_20215[(8)]);
var state_20215__$1 = state_20215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20215__$1,(11),out,inst_20195);
} else {
if((state_val_20216 === (5))){
var inst_20195 = (state_20215[(8)]);
var inst_20192 = (state_20215[(7)]);
var inst_20199 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20195,inst_20192);
var state_20215__$1 = state_20215;
if(inst_20199){
var statearr_20228_20247 = state_20215__$1;
(statearr_20228_20247[(1)] = (8));

} else {
var statearr_20229_20248 = state_20215__$1;
(statearr_20229_20248[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (10))){
var inst_20207 = (state_20215[(2)]);
var state_20215__$1 = state_20215;
var statearr_20230_20249 = state_20215__$1;
(statearr_20230_20249[(2)] = inst_20207);

(statearr_20230_20249[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20216 === (8))){
var inst_20192 = (state_20215[(7)]);
var tmp20227 = inst_20192;
var inst_20192__$1 = tmp20227;
var state_20215__$1 = (function (){var statearr_20231 = state_20215;
(statearr_20231[(7)] = inst_20192__$1);

return statearr_20231;
})();
var statearr_20232_20250 = state_20215__$1;
(statearr_20232_20250[(2)] = null);

(statearr_20232_20250[(1)] = (2));


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
});})(c__6463__auto___20240,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20240,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6384__auto__ = null;
var cljs$core$async$unique_$_state_machine__6384__auto____0 = (function (){
var statearr_20236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20236[(0)] = cljs$core$async$unique_$_state_machine__6384__auto__);

(statearr_20236[(1)] = (1));

return statearr_20236;
});
var cljs$core$async$unique_$_state_machine__6384__auto____1 = (function (state_20215){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20215);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20237){if((e20237 instanceof Object)){
var ex__6387__auto__ = e20237;
var statearr_20238_20251 = state_20215;
(statearr_20238_20251[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20215);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20252 = state_20215;
state_20215 = G__20252;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6384__auto__ = function(state_20215){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6384__auto____1.call(this,state_20215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6384__auto____0;
cljs$core$async$unique_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6384__auto____1;
return cljs$core$async$unique_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20240,out))
})();
var state__6465__auto__ = (function (){var statearr_20239 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20240);

return statearr_20239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20240,out))
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
var c__6463__auto___20390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20390,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20390,out){
return (function (state_20360){
var state_val_20361 = (state_20360[(1)]);
if((state_val_20361 === (7))){
var inst_20356 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
var statearr_20362_20391 = state_20360__$1;
(statearr_20362_20391[(2)] = inst_20356);

(statearr_20362_20391[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (1))){
var inst_20323 = (new Array(n));
var inst_20324 = inst_20323;
var inst_20325 = (0);
var state_20360__$1 = (function (){var statearr_20363 = state_20360;
(statearr_20363[(7)] = inst_20324);

(statearr_20363[(8)] = inst_20325);

return statearr_20363;
})();
var statearr_20364_20392 = state_20360__$1;
(statearr_20364_20392[(2)] = null);

(statearr_20364_20392[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (4))){
var inst_20328 = (state_20360[(9)]);
var inst_20328__$1 = (state_20360[(2)]);
var inst_20329 = (inst_20328__$1 == null);
var inst_20330 = cljs.core.not(inst_20329);
var state_20360__$1 = (function (){var statearr_20365 = state_20360;
(statearr_20365[(9)] = inst_20328__$1);

return statearr_20365;
})();
if(inst_20330){
var statearr_20366_20393 = state_20360__$1;
(statearr_20366_20393[(1)] = (5));

} else {
var statearr_20367_20394 = state_20360__$1;
(statearr_20367_20394[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (15))){
var inst_20350 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
var statearr_20368_20395 = state_20360__$1;
(statearr_20368_20395[(2)] = inst_20350);

(statearr_20368_20395[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (13))){
var state_20360__$1 = state_20360;
var statearr_20369_20396 = state_20360__$1;
(statearr_20369_20396[(2)] = null);

(statearr_20369_20396[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (6))){
var inst_20325 = (state_20360[(8)]);
var inst_20346 = (inst_20325 > (0));
var state_20360__$1 = state_20360;
if(cljs.core.truth_(inst_20346)){
var statearr_20370_20397 = state_20360__$1;
(statearr_20370_20397[(1)] = (12));

} else {
var statearr_20371_20398 = state_20360__$1;
(statearr_20371_20398[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (3))){
var inst_20358 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20360__$1,inst_20358);
} else {
if((state_val_20361 === (12))){
var inst_20324 = (state_20360[(7)]);
var inst_20348 = cljs.core.vec(inst_20324);
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20360__$1,(15),out,inst_20348);
} else {
if((state_val_20361 === (2))){
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20360__$1,(4),ch);
} else {
if((state_val_20361 === (11))){
var inst_20340 = (state_20360[(2)]);
var inst_20341 = (new Array(n));
var inst_20324 = inst_20341;
var inst_20325 = (0);
var state_20360__$1 = (function (){var statearr_20372 = state_20360;
(statearr_20372[(7)] = inst_20324);

(statearr_20372[(8)] = inst_20325);

(statearr_20372[(10)] = inst_20340);

return statearr_20372;
})();
var statearr_20373_20399 = state_20360__$1;
(statearr_20373_20399[(2)] = null);

(statearr_20373_20399[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (9))){
var inst_20324 = (state_20360[(7)]);
var inst_20338 = cljs.core.vec(inst_20324);
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20360__$1,(11),out,inst_20338);
} else {
if((state_val_20361 === (5))){
var inst_20328 = (state_20360[(9)]);
var inst_20324 = (state_20360[(7)]);
var inst_20325 = (state_20360[(8)]);
var inst_20333 = (state_20360[(11)]);
var inst_20332 = (inst_20324[inst_20325] = inst_20328);
var inst_20333__$1 = (inst_20325 + (1));
var inst_20334 = (inst_20333__$1 < n);
var state_20360__$1 = (function (){var statearr_20374 = state_20360;
(statearr_20374[(12)] = inst_20332);

(statearr_20374[(11)] = inst_20333__$1);

return statearr_20374;
})();
if(cljs.core.truth_(inst_20334)){
var statearr_20375_20400 = state_20360__$1;
(statearr_20375_20400[(1)] = (8));

} else {
var statearr_20376_20401 = state_20360__$1;
(statearr_20376_20401[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (14))){
var inst_20353 = (state_20360[(2)]);
var inst_20354 = cljs.core.async.close_BANG_(out);
var state_20360__$1 = (function (){var statearr_20378 = state_20360;
(statearr_20378[(13)] = inst_20353);

return statearr_20378;
})();
var statearr_20379_20402 = state_20360__$1;
(statearr_20379_20402[(2)] = inst_20354);

(statearr_20379_20402[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (10))){
var inst_20344 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
var statearr_20380_20403 = state_20360__$1;
(statearr_20380_20403[(2)] = inst_20344);

(statearr_20380_20403[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20361 === (8))){
var inst_20324 = (state_20360[(7)]);
var inst_20333 = (state_20360[(11)]);
var tmp20377 = inst_20324;
var inst_20324__$1 = tmp20377;
var inst_20325 = inst_20333;
var state_20360__$1 = (function (){var statearr_20381 = state_20360;
(statearr_20381[(7)] = inst_20324__$1);

(statearr_20381[(8)] = inst_20325);

return statearr_20381;
})();
var statearr_20382_20404 = state_20360__$1;
(statearr_20382_20404[(2)] = null);

(statearr_20382_20404[(1)] = (2));


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
});})(c__6463__auto___20390,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20390,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6384__auto__ = null;
var cljs$core$async$partition_$_state_machine__6384__auto____0 = (function (){
var statearr_20386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20386[(0)] = cljs$core$async$partition_$_state_machine__6384__auto__);

(statearr_20386[(1)] = (1));

return statearr_20386;
});
var cljs$core$async$partition_$_state_machine__6384__auto____1 = (function (state_20360){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20360);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20387){if((e20387 instanceof Object)){
var ex__6387__auto__ = e20387;
var statearr_20388_20405 = state_20360;
(statearr_20388_20405[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20360);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20406 = state_20360;
state_20360 = G__20406;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6384__auto__ = function(state_20360){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6384__auto____1.call(this,state_20360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6384__auto____0;
cljs$core$async$partition_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6384__auto____1;
return cljs$core$async$partition_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20390,out))
})();
var state__6465__auto__ = (function (){var statearr_20389 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20390);

return statearr_20389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20390,out))
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
var c__6463__auto___20554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6463__auto___20554,out){
return (function (){
var f__6464__auto__ = (function (){var switch__6383__auto__ = ((function (c__6463__auto___20554,out){
return (function (state_20523){
var state_val_20524 = (state_20523[(1)]);
if((state_val_20524 === (7))){
var inst_20519 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20525_20555 = state_20523__$1;
(statearr_20525_20555[(2)] = inst_20519);

(statearr_20525_20555[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (1))){
var inst_20482 = [];
var inst_20483 = inst_20482;
var inst_20484 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_20523__$1 = (function (){var statearr_20526 = state_20523;
(statearr_20526[(7)] = inst_20483);

(statearr_20526[(8)] = inst_20484);

return statearr_20526;
})();
var statearr_20527_20556 = state_20523__$1;
(statearr_20527_20556[(2)] = null);

(statearr_20527_20556[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (4))){
var inst_20487 = (state_20523[(9)]);
var inst_20487__$1 = (state_20523[(2)]);
var inst_20488 = (inst_20487__$1 == null);
var inst_20489 = cljs.core.not(inst_20488);
var state_20523__$1 = (function (){var statearr_20528 = state_20523;
(statearr_20528[(9)] = inst_20487__$1);

return statearr_20528;
})();
if(inst_20489){
var statearr_20529_20557 = state_20523__$1;
(statearr_20529_20557[(1)] = (5));

} else {
var statearr_20530_20558 = state_20523__$1;
(statearr_20530_20558[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (15))){
var inst_20513 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20531_20559 = state_20523__$1;
(statearr_20531_20559[(2)] = inst_20513);

(statearr_20531_20559[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (13))){
var state_20523__$1 = state_20523;
var statearr_20532_20560 = state_20523__$1;
(statearr_20532_20560[(2)] = null);

(statearr_20532_20560[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (6))){
var inst_20483 = (state_20523[(7)]);
var inst_20508 = inst_20483.length;
var inst_20509 = (inst_20508 > (0));
var state_20523__$1 = state_20523;
if(cljs.core.truth_(inst_20509)){
var statearr_20533_20561 = state_20523__$1;
(statearr_20533_20561[(1)] = (12));

} else {
var statearr_20534_20562 = state_20523__$1;
(statearr_20534_20562[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (3))){
var inst_20521 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20523__$1,inst_20521);
} else {
if((state_val_20524 === (12))){
var inst_20483 = (state_20523[(7)]);
var inst_20511 = cljs.core.vec(inst_20483);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20523__$1,(15),out,inst_20511);
} else {
if((state_val_20524 === (2))){
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20523__$1,(4),ch);
} else {
if((state_val_20524 === (11))){
var inst_20491 = (state_20523[(10)]);
var inst_20487 = (state_20523[(9)]);
var inst_20501 = (state_20523[(2)]);
var inst_20502 = [];
var inst_20503 = inst_20502.push(inst_20487);
var inst_20483 = inst_20502;
var inst_20484 = inst_20491;
var state_20523__$1 = (function (){var statearr_20535 = state_20523;
(statearr_20535[(7)] = inst_20483);

(statearr_20535[(11)] = inst_20501);

(statearr_20535[(8)] = inst_20484);

(statearr_20535[(12)] = inst_20503);

return statearr_20535;
})();
var statearr_20536_20563 = state_20523__$1;
(statearr_20536_20563[(2)] = null);

(statearr_20536_20563[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (9))){
var inst_20483 = (state_20523[(7)]);
var inst_20499 = cljs.core.vec(inst_20483);
var state_20523__$1 = state_20523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20523__$1,(11),out,inst_20499);
} else {
if((state_val_20524 === (5))){
var inst_20491 = (state_20523[(10)]);
var inst_20487 = (state_20523[(9)]);
var inst_20484 = (state_20523[(8)]);
var inst_20491__$1 = (function (){var G__20537 = inst_20487;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20537) : f.call(null,G__20537));
})();
var inst_20492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20491__$1,inst_20484);
var inst_20493 = cljs.core.keyword_identical_QMARK_(inst_20484,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_20494 = (inst_20492) || (inst_20493);
var state_20523__$1 = (function (){var statearr_20538 = state_20523;
(statearr_20538[(10)] = inst_20491__$1);

return statearr_20538;
})();
if(cljs.core.truth_(inst_20494)){
var statearr_20539_20564 = state_20523__$1;
(statearr_20539_20564[(1)] = (8));

} else {
var statearr_20540_20565 = state_20523__$1;
(statearr_20540_20565[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (14))){
var inst_20516 = (state_20523[(2)]);
var inst_20517 = cljs.core.async.close_BANG_(out);
var state_20523__$1 = (function (){var statearr_20542 = state_20523;
(statearr_20542[(13)] = inst_20516);

return statearr_20542;
})();
var statearr_20543_20566 = state_20523__$1;
(statearr_20543_20566[(2)] = inst_20517);

(statearr_20543_20566[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (10))){
var inst_20506 = (state_20523[(2)]);
var state_20523__$1 = state_20523;
var statearr_20544_20567 = state_20523__$1;
(statearr_20544_20567[(2)] = inst_20506);

(statearr_20544_20567[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20524 === (8))){
var inst_20483 = (state_20523[(7)]);
var inst_20491 = (state_20523[(10)]);
var inst_20487 = (state_20523[(9)]);
var inst_20496 = inst_20483.push(inst_20487);
var tmp20541 = inst_20483;
var inst_20483__$1 = tmp20541;
var inst_20484 = inst_20491;
var state_20523__$1 = (function (){var statearr_20545 = state_20523;
(statearr_20545[(7)] = inst_20483__$1);

(statearr_20545[(14)] = inst_20496);

(statearr_20545[(8)] = inst_20484);

return statearr_20545;
})();
var statearr_20546_20568 = state_20523__$1;
(statearr_20546_20568[(2)] = null);

(statearr_20546_20568[(1)] = (2));


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
});})(c__6463__auto___20554,out))
;
return ((function (switch__6383__auto__,c__6463__auto___20554,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6384__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6384__auto____0 = (function (){
var statearr_20550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20550[(0)] = cljs$core$async$partition_by_$_state_machine__6384__auto__);

(statearr_20550[(1)] = (1));

return statearr_20550;
});
var cljs$core$async$partition_by_$_state_machine__6384__auto____1 = (function (state_20523){
while(true){
var ret_value__6385__auto__ = (function (){try{while(true){
var result__6386__auto__ = switch__6383__auto__(state_20523);
if(cljs.core.keyword_identical_QMARK_(result__6386__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__6386__auto__;
}
break;
}
}catch (e20551){if((e20551 instanceof Object)){
var ex__6387__auto__ = e20551;
var statearr_20552_20569 = state_20523;
(statearr_20552_20569[(5)] = ex__6387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20523);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6385__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20570 = state_20523;
state_20523 = G__20570;
continue;
} else {
return ret_value__6385__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6384__auto__ = function(state_20523){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6384__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6384__auto____1.call(this,state_20523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6384__auto____0;
cljs$core$async$partition_by_$_state_machine__6384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6384__auto____1;
return cljs$core$async$partition_by_$_state_machine__6384__auto__;
})()
;})(switch__6383__auto__,c__6463__auto___20554,out))
})();
var state__6465__auto__ = (function (){var statearr_20553 = (function (){return (f__6464__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6464__auto__.cljs$core$IFn$_invoke$arity$0() : f__6464__auto__.call(null));
})();
(statearr_20553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6463__auto___20554);

return statearr_20553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6465__auto__);
});})(c__6463__auto___20554,out))
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
