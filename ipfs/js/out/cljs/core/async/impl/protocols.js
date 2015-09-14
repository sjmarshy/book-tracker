// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj20668 = {};
return obj20668;
})();

cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__4064__auto__ = port;
if(and__4064__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4720__auto__ = (((port == null))?null:port);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__20672 = x__4720__auto__;
return goog.typeOf(G__20672);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj20674 = {};
return obj20674;
})();

cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__4064__auto__ = port;
if(and__4064__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4720__auto__ = (((port == null))?null:port);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__20678 = x__4720__auto__;
return goog.typeOf(G__20678);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj20680 = {};
return obj20680;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__4064__auto__ = chan;
if(and__4064__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4720__auto__ = (((chan == null))?null:chan);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__20684 = x__4720__auto__;
return goog.typeOf(G__20684);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__4064__auto__ = chan;
if(and__4064__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4720__auto__ = (((chan == null))?null:chan);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__20688 = x__4720__auto__;
return goog.typeOf(G__20688);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj20690 = {};
return obj20690;
})();

cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__4064__auto__ = h;
if(and__4064__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4720__auto__ = (((h == null))?null:h);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__20694 = x__4720__auto__;
return goog.typeOf(G__20694);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__4064__auto__ = h;
if(and__4064__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__4064__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4720__auto__ = (((h == null))?null:h);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__20698 = x__4720__auto__;
return goog.typeOf(G__20698);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj20700 = {};
return obj20700;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__4064__auto__ = b;
if(and__4064__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4720__auto__ = (((b == null))?null:b);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__20704 = x__4720__auto__;
return goog.typeOf(G__20704);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__4064__auto__ = b;
if(and__4064__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4720__auto__ = (((b == null))?null:b);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__20708 = x__4720__auto__;
return goog.typeOf(G__20708);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__4064__auto__ = b;
if(and__4064__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4720__auto__ = (((b == null))?null:b);
return (function (){var or__4076__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__20712 = x__4720__auto__;
return goog.typeOf(G__20712);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var cljs$core$async$impl$protocols$add_BANG_ = null;
var cljs$core$async$impl$protocols$add_BANG___1 = (function (b){
return b;
});
var cljs$core$async$impl$protocols$add_BANG___2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});
cljs$core$async$impl$protocols$add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return cljs$core$async$impl$protocols$add_BANG___1.call(this,b);
case 2:
return cljs$core$async$impl$protocols$add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$protocols$add_BANG___1;
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$impl$protocols$add_BANG___2;
return cljs$core$async$impl$protocols$add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj20714 = {};
return obj20714;
})();

