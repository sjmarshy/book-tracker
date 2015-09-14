// Compiled by ClojureScript 0.0-3058 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj20787 = {};
return obj20787;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.display_name[(function (){var G__20791 = x__4720__auto__;
return goog.typeOf(G__20791);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.display_name["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj20793 = {};
return obj20793;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.init_state[(function (){var G__20797 = x__4720__auto__;
return goog.typeOf(G__20797);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.init_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj20799 = {};
return obj20799;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.should_update[(function (){var G__20803 = x__4720__auto__;
return goog.typeOf(G__20803);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.should_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj20805 = {};
return obj20805;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_mount[(function (){var G__20809 = x__4720__auto__;
return goog.typeOf(G__20809);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj20811 = {};
return obj20811;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_mount[(function (){var G__20815 = x__4720__auto__;
return goog.typeOf(G__20815);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj20817 = {};
return obj20817;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_unmount[(function (){var G__20821 = x__4720__auto__;
return goog.typeOf(G__20821);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_unmount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj20823 = {};
return obj20823;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_update[(function (){var G__20827 = x__4720__auto__;
return goog.typeOf(G__20827);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj20829 = {};
return obj20829;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_update[(function (){var G__20833 = x__4720__auto__;
return goog.typeOf(G__20833);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj20835 = {};
return obj20835;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_receive_props[(function (){var G__20839 = x__4720__auto__;
return goog.typeOf(G__20839);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj20841 = {};
return obj20841;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render[(function (){var G__20845 = x__4720__auto__;
return goog.typeOf(G__20845);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj20847 = {};
return obj20847;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_props[(function (){var G__20851 = x__4720__auto__;
return goog.typeOf(G__20851);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj20853 = {};
return obj20853;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_state[(function (){var G__20857 = x__4720__auto__;
return goog.typeOf(G__20857);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj20859 = {};
return obj20859;
})();


om.core.IOmSwap = (function (){var obj20861 = {};
return obj20861;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._om_swap_BANG_[(function (){var G__20865 = x__4720__auto__;
return goog.typeOf(G__20865);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj20867 = {};
return obj20867;
})();

om.core._get_state = (function() {
var om$core$_get_state = null;
var om$core$_get_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[(function (){var G__20873 = x__4720__auto__;
return goog.typeOf(G__20873);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[(function (){var G__20875 = x__4720__auto__;
return goog.typeOf(G__20875);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_state__1.call(this,this$);
case 2:
return om$core$_get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_state__1;
om$core$_get_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_state__2;
return om$core$_get_state;
})()
;


om.core.IGetRenderState = (function (){var obj20877 = {};
return obj20877;
})();

om.core._get_render_state = (function() {
var om$core$_get_render_state = null;
var om$core$_get_render_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[(function (){var G__20883 = x__4720__auto__;
return goog.typeOf(G__20883);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_render_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[(function (){var G__20885 = x__4720__auto__;
return goog.typeOf(G__20885);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_render_state__1.call(this,this$);
case 2:
return om$core$_get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_render_state__1;
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_render_state__2;
return om$core$_get_render_state;
})()
;


om.core.ISetState = (function (){var obj20887 = {};
return obj20887;
})();

om.core._set_state_BANG_ = (function() {
var om$core$_set_state_BANG_ = null;
var om$core$_set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[(function (){var G__20893 = x__4720__auto__;
return goog.typeOf(G__20893);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var om$core$_set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[(function (){var G__20895 = x__4720__auto__;
return goog.typeOf(G__20895);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
om$core$_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return om$core$_set_state_BANG___3.call(this,this$,ks,val);
case 4:
return om$core$_set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$_set_state_BANG___3;
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$_set_state_BANG___4;
return om$core$_set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj20897 = {};
return obj20897;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_queue[(function (){var G__20901 = x__4720__auto__;
return goog.typeOf(G__20901);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_queue["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._queue_render_BANG_[(function (){var G__20905 = x__4720__auto__;
return goog.typeOf(G__20905);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._empty_queue_BANG_[(function (){var G__20909 = x__4720__auto__;
return goog.typeOf(G__20909);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj20911 = {};
return obj20911;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._value[(function (){var G__20915 = x__4720__auto__;
return goog.typeOf(G__20915);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._value["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj20917 = {};
return obj20917;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._path[(function (){var G__20921 = x__4720__auto__;
return goog.typeOf(G__20921);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._path["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._state[(function (){var G__20925 = x__4720__auto__;
return goog.typeOf(G__20925);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj20927 = {};
return obj20927;
})();

om.core._to_cursor = (function() {
var om$core$_to_cursor = null;
var om$core$_to_cursor__2 = (function (value,state){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[(function (){var G__20933 = x__4720__auto__;
return goog.typeOf(G__20933);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var om$core$_to_cursor__3 = (function (value,state,path){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[(function (){var G__20935 = x__4720__auto__;
return goog.typeOf(G__20935);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
om$core$_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return om$core$_to_cursor__2.call(this,value,state);
case 3:
return om$core$_to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$_to_cursor__2;
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$_to_cursor__3;
return om$core$_to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj20937 = {};
return obj20937;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._derive[(function (){var G__20941 = x__4720__auto__;
return goog.typeOf(G__20941);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._derive["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__20942 = derived;
var G__20943 = state;
var G__20944 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__20942,G__20943,G__20944) : om.core.to_cursor.call(null,G__20942,G__20943,G__20944));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj20946 = {};
return obj20946;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._transact_BANG_[(function (){var G__20950 = x__4720__auto__;
return goog.typeOf(G__20950);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj20952 = {};
return obj20952;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._listen_BANG_[(function (){var G__20956 = x__4720__auto__;
return goog.typeOf(G__20956);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._unlisten_BANG_[(function (){var G__20960 = x__4720__auto__;
return goog.typeOf(G__20960);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._notify_BANG_[(function (){var G__20964 = x__4720__auto__;
return goog.typeOf(G__20964);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj20966 = {};
return obj20966;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_property_BANG_[(function (){var G__20970 = x__4720__auto__;
return goog.typeOf(G__20970);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_property_BANG_[(function (){var G__20974 = x__4720__auto__;
return goog.typeOf(G__20974);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_properties_BANG_[(function (){var G__20978 = x__4720__auto__;
return goog.typeOf(G__20978);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_property[(function (){var G__20982 = x__4720__auto__;
return goog.typeOf(G__20982);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_property["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj20984 = {};
return obj20984;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._root_key[(function (){var G__20988 = x__4720__auto__;
return goog.typeOf(G__20988);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._root_key["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj20990 = {};
return obj20990;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._adapt[(function (){var G__20994 = x__4720__auto__;
return goog.typeOf(G__20994);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._adapt["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj20996 = {};
return obj20996;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._add_dep_BANG_[(function (){var G__21000 = x__4720__auto__;
return goog.typeOf(G__21000);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_dep_BANG_[(function (){var G__21004 = x__4720__auto__;
return goog.typeOf(G__21004);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__21008 = x__4720__auto__;
return goog.typeOf(G__21008);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_deps[(function (){var G__21012 = x__4720__auto__;
return goog.typeOf(G__21012);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_deps["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__21022 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21022) : cljs.core.deref.call(null,G__21022));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__21023 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__21023) : om.core.path.call(null,G__21023));
})(),korks);
var ret = (((function (){var G__21024 = state;
if(G__21024){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21024.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__21024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__21024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__21024);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$_COLON_om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_path,path,cljs.core.constant$keyword$_COLON_old_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$_COLON_new_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21025 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21025) : cljs.core.deref.call(null,G__21025));
})(),path),cljs.core.constant$keyword$_COLON_old_state,old_state,cljs.core.constant$keyword$_COLON_new_state,(function (){var G__21026 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21026) : cljs.core.deref.call(null,G__21026));
})()], null);
if(!((tag == null))){
var G__21027 = cursor;
var G__21028 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$_COLON_tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__21027,G__21028) : om.core.notify_STAR_.call(null,G__21027,G__21028));
} else {
var G__21029 = cursor;
var G__21030 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__21029,G__21030) : om.core.notify_STAR_.call(null,G__21029,G__21030));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__21032 = x;
if(G__21032){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21032.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21032.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__21032);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__21032);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__21034 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__21034) : c.call(null,G__21034));
})();
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function() {
var om$core$get_props = null;
var om$core$get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var om$core$get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__21036 = (x.props["__om_cursor"]);
var G__21036__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__21036,korks__$1):G__21036);
return G__21036__$1;
});
om$core$get_props = function(x,korks){
switch(arguments.length){
case 1:
return om$core$get_props__1.call(this,x);
case 2:
return om$core$get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_props.cljs$core$IFn$_invoke$arity$1 = om$core$get_props__1;
om$core$get_props.cljs$core$IFn$_invoke$arity$2 = om$core$get_props__2;
return om$core$get_props;
})()
;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function() {
var om$core$get_state = null;
var om$core$get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var om$core$get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
om$core$get_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_state__1.call(this,owner);
case 2:
return om$core$get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_state__1;
om$core$get_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_state__2;
return om$core$get_state;
})()
;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function() {
var om$core$get_shared = null;
var om$core$get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var om$core$get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om$core$get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
om$core$get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_shared__1.call(this,owner);
case 2:
return om$core$get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_shared.cljs$core$IFn$_invoke$arity$1 = om$core$get_shared__1;
om$core$get_shared.cljs$core$IFn$_invoke$arity$2 = om$core$get_shared__2;
return om$core$get_shared;
})()
;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__21041 = state;
(G__21041["__om_prev_state"] = (state["__om_state"]));

(G__21041["__om_state"] = pending_state);

(G__21041["__om_pending_state"] = null);

return G__21041;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var om$core$merge_props_state = null;
var om$core$merge_props_state__1 = (function (owner){
return om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var om$core$merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__4076__auto__ = props;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
om$core$merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return om$core$merge_props_state__1.call(this,owner);
case 2:
return om$core$merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$1 = om$core$merge_props_state__1;
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2 = om$core$merge_props_state__2;
return om$core$merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21046 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21046) : cljs.core.deref.call(null,G__21046));
})(),(function (){var G__21047 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__21047) : om.core.path.call(null,G__21047));
})(),cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__21053 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__21053) : om.core.path.call(null,G__21053));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21054 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21054) : cljs.core.deref.call(null,G__21054));
})(),ref_path,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__21055 = ref_val_SINGLEQUOTE_;
var G__21056 = ref_state;
var G__21057 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__21055,G__21056,G__21057) : om.core.to_cursor.call(null,G__21055,G__21056,G__21057));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$_COLON_componentDidUpdate,cljs.core.constant$keyword$_COLON_isOmComponent,cljs.core.constant$keyword$_COLON_componentWillUnmount,cljs.core.constant$keyword$_COLON_componentWillReceiveProps,cljs.core.constant$keyword$_COLON_shouldComponentUpdate,cljs.core.constant$keyword$_COLON_render,cljs.core.constant$keyword$_COLON_componentWillUpdate,cljs.core.constant$keyword$_COLON_getInitialState,cljs.core.constant$keyword$_COLON_componentDidMount,cljs.core.constant$keyword$_COLON_getDisplayName,cljs.core.constant$keyword$_COLON_componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__21059 = c;
if(G__21059){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21059.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21059.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__21059);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__21059);
}
})()){
var state_21084 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4076__auto__ = (state_21084["__om_prev_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state_21084["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21060 = c;
if(G__21060){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21060.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__21060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__21060);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21061 = cljs.core.seq(refs);
var chunk__21062 = null;
var count__21063 = (0);
var i__21064 = (0);
while(true){
if((i__21064 < count__21063)){
var ref = chunk__21062.cljs$core$IIndexed$_nth$arity$2(null,i__21064);
var G__21065_21085 = this$;
var G__21066_21086 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__21065_21085,G__21066_21086) : om.core.unobserve.call(null,G__21065_21085,G__21066_21086));

var G__21087 = seq__21061;
var G__21088 = chunk__21062;
var G__21089 = count__21063;
var G__21090 = (i__21064 + (1));
seq__21061 = G__21087;
chunk__21062 = G__21088;
count__21063 = G__21089;
i__21064 = G__21090;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__21061);
if(temp__4126__auto____$1){
var seq__21061__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21061__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__21061__$1);
var G__21091 = cljs.core.chunk_rest(seq__21061__$1);
var G__21092 = c__4863__auto__;
var G__21093 = cljs.core.count(c__4863__auto__);
var G__21094 = (0);
seq__21061 = G__21091;
chunk__21062 = G__21092;
count__21063 = G__21093;
i__21064 = G__21094;
continue;
} else {
var ref = cljs.core.first(seq__21061__$1);
var G__21067_21095 = this$;
var G__21068_21096 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__21067_21095,G__21068_21096) : om.core.unobserve.call(null,G__21067_21095,G__21068_21096));

var G__21097 = cljs.core.next(seq__21061__$1);
var G__21098 = null;
var G__21099 = (0);
var G__21100 = (0);
seq__21061 = G__21097;
chunk__21062 = G__21098;
count__21063 = G__21099;
i__21064 = G__21100;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__21069 = c;
if(G__21069){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21069.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__21069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__21069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__21069);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__21070 = c;
if(G__21070){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21070.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__21070.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__21070);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__21070);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4064__auto__){
return cljs.core.some(((function (and__4064__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__21058_SHARP_){
return om.core.ref_changed_QMARK_(p1__21058_SHARP_);
});})(and__4064__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4064__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_21071 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_21072 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_21073 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_21074 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_21075 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__21076 = c;
if(G__21076){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21076.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21076.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__21076);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__21076);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__21077 = c;
if(G__21077){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21077.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21077.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__21077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__21077);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__21078 = c;
if(G__21078){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21078.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21078.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__21078);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__21078);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21075;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21074;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21073;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21072;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_21071;
}}),(function (next_props,next_state){
var this$ = this;
var c_21101 = om.core.children(this$);
if((function (){var G__21079 = c_21101;
if(G__21079){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21079.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__21079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__21079);
}
})()){
var state_21102 = this$.state;
om.core.will_update(c_21101,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$_COLON_om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__21080 = c;
if(G__21080){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21080.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21080.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__21080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__21080);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$_COLON_om$core_SLASH_id)], 0)), "__om_id": (function (){var or__4076__auto__ = id;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21081 = c;
if(G__21081){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21081.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__21081.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__21081);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__21081);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__21082 = c;
if(G__21082){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21082.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__21082.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__21082);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__21082);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_21103 = om.core.children(this$);
if((function (){var G__21083 = c_21103;
if(G__21083){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21083.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21083.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__21083);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__21083);
}
})()){
om.core.will_mount(c_21103);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x21105 = obj;
x21105.om$core$IGetState$ = true;

x21105.om$core$IGetState$_get_state$arity$1 = ((function (x21105){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state["__om_state"]);
}
});})(x21105))
;

x21105.om$core$IGetState$_get_state$arity$2 = ((function (x21105){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21105))
;

x21105.om$core$IGetRenderState$ = true;

x21105.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21105){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x21105))
;

x21105.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21105){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21105))
;

x21105.om$core$ISetState$ = true;

x21105.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21105){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x21105))
;

x21105.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21105){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x21105))
;

return x21105;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21107 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21107) : cljs.core.deref.call(null,G__21107));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$_COLON_previous_state,cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$_COLON_render_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$_COLON_pending_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$_COLON_getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$_COLON_om$core_SLASH_id),(((function (){var G__21108 = c;
if(G__21108){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21108.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21108.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__21108);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__21108);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$),cljs.core.constant$keyword$_COLON_render_state], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_21122 = om.core.children(this$);
if((function (){var G__21109 = c_21122;
if(G__21109){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21109.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21109.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__21109);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__21109);
}
})()){
om.core.will_mount(c_21122);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$_COLON_componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__21110 = c;
if(G__21110){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21110.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__21110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__21110);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21111 = cljs.core.seq(refs);
var chunk__21112 = null;
var count__21113 = (0);
var i__21114 = (0);
while(true){
if((i__21114 < count__21113)){
var ref = chunk__21112.cljs$core$IIndexed$_nth$arity$2(null,i__21114);
var G__21115_21123 = this$;
var G__21116_21124 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__21115_21123,G__21116_21124) : om.core.unobserve.call(null,G__21115_21123,G__21116_21124));

var G__21125 = seq__21111;
var G__21126 = chunk__21112;
var G__21127 = count__21113;
var G__21128 = (i__21114 + (1));
seq__21111 = G__21125;
chunk__21112 = G__21126;
count__21113 = G__21127;
i__21114 = G__21128;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__21111);
if(temp__4126__auto____$1){
var seq__21111__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21111__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__21111__$1);
var G__21129 = cljs.core.chunk_rest(seq__21111__$1);
var G__21130 = c__4863__auto__;
var G__21131 = cljs.core.count(c__4863__auto__);
var G__21132 = (0);
seq__21111 = G__21129;
chunk__21112 = G__21130;
count__21113 = G__21131;
i__21114 = G__21132;
continue;
} else {
var ref = cljs.core.first(seq__21111__$1);
var G__21117_21133 = this$;
var G__21118_21134 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__21117_21133,G__21118_21134) : om.core.unobserve.call(null,G__21117_21133,G__21118_21134));

var G__21135 = cljs.core.next(seq__21111__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__21111 = G__21135;
chunk__21112 = G__21136;
count__21113 = G__21137;
i__21114 = G__21138;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.constant$keyword$_COLON_componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_21139 = this$.props;
var c_21140 = om.core.children(this$);
if((function (){var G__21119 = c_21140;
if(G__21119){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21119.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21119.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__21119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__21119);
}
})()){
var state_21141 = this$.state;
om.core.will_update(c_21140,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$_COLON_componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21120 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21120) : cljs.core.deref.call(null,G__21120));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$)], null);
if((function (){var G__21121 = c;
if(G__21121){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21121.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21121.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__21121);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__21121);
}
})()){
var state_21142 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_previous_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_previous_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_previous_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x21146 = cljs.core.clj__GT_js(methods$);
x21146.om$core$IGetState$ = true;

x21146.om$core$IGetState$_get_state$arity$1 = ((function (x21146){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21147 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21147) : cljs.core.deref.call(null,G__21147));
})(),spath);
var or__4076__auto__ = cljs.core.constant$keyword$_COLON_pending_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_render_state.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x21146))
;

x21146.om$core$IGetState$_get_state$arity$2 = ((function (x21146){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21146))
;

x21146.om$core$IGetRenderState$ = true;

x21146.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21146){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$_COLON_render_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21148 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21148) : cljs.core.deref.call(null,G__21148));
})(),spath);
});})(x21146))
;

x21146.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21146){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x21146))
;

x21146.om$core$ISetState$ = true;

x21146.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21146){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_state_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$_COLON_pending_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((gstate == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x21146))
;

x21146.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21146){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x21146))
;

return x21146;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__21151 = x;
if(G__21151){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21151.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21151.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__21151);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__21151);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__21152 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21152) : cljs.core.deref.call(null,G__21152));
})(),cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$_COLON_om$core_SLASH_not_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__21154){
var vec__21155 = p__21154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21155,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__21157 = null;
var G__21157__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21157__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21157 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21157__2.call(this,self__,k);
case 3:
return G__21157__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21157.cljs$core$IFn$_invoke$arity$2 = G__21157__2;
G__21157.cljs$core$IFn$_invoke$arity$3 = G__21157__3;
return G__21157;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args21153){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21153)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21156 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21156) : cljs.core.deref.call(null,G__21156));
})(),self__.path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__21160 = null;
var G__21160__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21160__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21160 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21160__2.call(this,self__,k);
case 3:
return G__21160__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21160.cljs$core$IFn$_invoke$arity$2 = G__21160__2;
G__21160.cljs$core$IFn$_invoke$arity$3 = G__21160__3;
return G__21160;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args21158){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21158)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21159 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21159) : cljs.core.deref.call(null,G__21159));
})(),self__.path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x21163 = cljs.core.clone(val);
x21163.cljs$core$IEquiv$ = true;

x21163.cljs$core$IEquiv$_equiv$arity$2 = ((function (x21163){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x21163))
;

x21163.om$core$ITransact$ = true;

x21163.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21163){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x21163))
;

x21163.om$core$ICursor$ = true;

x21163.om$core$ICursor$_path$arity$1 = ((function (x21163){
return (function (_){
var ___$1 = this;
return path;
});})(x21163))
;

x21163.om$core$ICursor$_state$arity$1 = ((function (x21163){
return (function (_){
var ___$1 = this;
return state;
});})(x21163))
;

x21163.cljs$core$IDeref$ = true;

x21163.cljs$core$IDeref$_deref$arity$1 = ((function (x21163){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__21164 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21164) : cljs.core.deref.call(null,G__21164));
})(),path,cljs.core.constant$keyword$_COLON_om$core_SLASH_invalid);
});})(x21163))
;

return x21163;
});
om.core.to_cursor = (function() {
var om$core$to_cursor = null;
var om$core$to_cursor__1 = (function (val){
return om$core$to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__2 = (function (val,state){
return om$core$to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__21173 = val;
if(G__21173){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21173.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__21173.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__21173);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__21173);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__21174 = val;
if(G__21174){
var bit__4757__auto__ = (G__21174.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4757__auto__) || (G__21174.cljs$core$ICloneable$)){
return true;
} else {
if((!G__21174.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__21174);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__21174);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
om$core$to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return om$core$to_cursor__1.call(this,val);
case 2:
return om$core$to_cursor__2.call(this,val,state);
case 3:
return om$core$to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$to_cursor.cljs$core$IFn$_invoke$arity$1 = om$core$to_cursor__1;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$to_cursor__2;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$to_cursor__3;
return om$core$to_cursor;
})()
;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__21176 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21176) : cljs.core.deref.call(null,G__21176));
})(),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__21179 = atom;
if(G__21179){
var bit__4757__auto__ = (G__21179.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4757__auto__) || (G__21179.cljs$core$IDeref$)){
return true;
} else {
if((!G__21179.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__21179);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__21179);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__21180 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21180) : cljs.core.deref.call(null,G__21180));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__21181 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21181) : cljs.core.atom.call(null,G__21181));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x21190 = cljs.core.clone(x);
x21190.om$core$ITransact$ = true;

x21190.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21190){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__21191_21194 = cursor__$1;
var G__21192_21195 = korks;
var G__21193_21196 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__21191_21194,G__21192_21195,G__21193_21196) : om.core.commit_BANG_.call(null,G__21191_21194,G__21192_21195,G__21193_21196));

return om.core._refresh_deps_BANG_(parent);
});})(x21190))
;

x21190.om$core$ICursorDerive$ = true;

x21190.om$core$ICursorDerive$_derive$arity$4 = ((function (x21190){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21190))
;

x21190.om$core$IAdapt$ = true;

x21190.om$core$IAdapt$_adapt$arity$2 = ((function (x21190){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x21190))
;

x21190.cljs$core$ICloneable$ = true;

x21190.cljs$core$ICloneable$_clone$arity$1 = ((function (x21190){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x21190))
;

return x21190;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__21212 = cursor;
if(G__21212){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21212.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__21212.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__21212);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__21212);
}
})()){
return cursor;
} else {
var path = (function (){var G__21213 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__21213) : om.core.path.call(null,G__21213));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__21214 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21214) : cljs.core.atom.call(null,G__21214));
})())),path);
var x21215 = cljs.core.clone(cursor);
x21215.om$core$ITransact$ = true;

x21215.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21215,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__21216_21227 = cursor__$2;
var G__21217_21228 = korks;
var G__21218_21229 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__21216_21227,G__21217_21228,G__21218_21229) : om.core.commit_BANG_.call(null,G__21216_21227,G__21217_21228,G__21218_21229));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x21215,path,storage))
;

x21215.om$core$IOmRef$ = true;

x21215.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x21215,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__21219 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__21219) : om.core.id.call(null,G__21219));
})(),c);
});})(x21215,path,storage))
;

x21215.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x21215,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__21220 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__21220) : om.core.id.call(null,G__21220));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x21215,path,storage))
;

x21215.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x21215,path,storage){
return (function (_){
var ___$1 = this;
var seq__21221 = cljs.core.seq(cljs.core.vals((function (){var G__21225 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21225) : cljs.core.deref.call(null,G__21225));
})()));
var chunk__21222 = null;
var count__21223 = (0);
var i__21224 = (0);
while(true){
if((i__21224 < count__21223)){
var c = chunk__21222.cljs$core$IIndexed$_nth$arity$2(null,i__21224);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__21230 = seq__21221;
var G__21231 = chunk__21222;
var G__21232 = count__21223;
var G__21233 = (i__21224 + (1));
seq__21221 = G__21230;
chunk__21222 = G__21231;
count__21223 = G__21232;
i__21224 = G__21233;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__21221);
if(temp__4126__auto__){
var seq__21221__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21221__$1)){
var c__4863__auto__ = cljs.core.chunk_first(seq__21221__$1);
var G__21234 = cljs.core.chunk_rest(seq__21221__$1);
var G__21235 = c__4863__auto__;
var G__21236 = cljs.core.count(c__4863__auto__);
var G__21237 = (0);
seq__21221 = G__21234;
chunk__21222 = G__21235;
count__21223 = G__21236;
i__21224 = G__21237;
continue;
} else {
var c = cljs.core.first(seq__21221__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__21238 = cljs.core.next(seq__21221__$1);
var G__21239 = null;
var G__21240 = (0);
var G__21241 = (0);
seq__21221 = G__21238;
chunk__21222 = G__21239;
count__21223 = G__21240;
i__21224 = G__21241;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21215,path,storage))
;

x21215.om$core$IOmRef$_get_deps$arity$1 = ((function (x21215,path,storage){
return (function (_){
var ___$1 = this;
var G__21226 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21226) : cljs.core.deref.call(null,G__21226));
});})(x21215,path,storage))
;

x21215.om$core$ICursorDerive$ = true;

x21215.om$core$ICursorDerive$_derive$arity$4 = ((function (x21215,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21215,path,storage))
;

return x21215;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4076__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__21242 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21242) : cljs.core.atom.call(null,G__21242));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4076__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function() {
var om$core$render_all = null;
var om$core$render_all__0 = (function (){
return om$core$render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var om$core$render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__21249_21254 = cljs.core.seq((function (){var G__21253 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21253) : cljs.core.deref.call(null,G__21253));
})());
var chunk__21250_21255 = null;
var count__21251_21256 = (0);
var i__21252_21257 = (0);
while(true){
if((i__21252_21257 < count__21251_21256)){
var f_21258 = chunk__21250_21255.cljs$core$IIndexed$_nth$arity$2(null,i__21252_21257);
(f_21258.cljs$core$IFn$_invoke$arity$0 ? f_21258.cljs$core$IFn$_invoke$arity$0() : f_21258.call(null));

var G__21259 = seq__21249_21254;
var G__21260 = chunk__21250_21255;
var G__21261 = count__21251_21256;
var G__21262 = (i__21252_21257 + (1));
seq__21249_21254 = G__21259;
chunk__21250_21255 = G__21260;
count__21251_21256 = G__21261;
i__21252_21257 = G__21262;
continue;
} else {
var temp__4126__auto___21263 = cljs.core.seq(seq__21249_21254);
if(temp__4126__auto___21263){
var seq__21249_21264__$1 = temp__4126__auto___21263;
if(cljs.core.chunked_seq_QMARK_(seq__21249_21264__$1)){
var c__4863__auto___21265 = cljs.core.chunk_first(seq__21249_21264__$1);
var G__21266 = cljs.core.chunk_rest(seq__21249_21264__$1);
var G__21267 = c__4863__auto___21265;
var G__21268 = cljs.core.count(c__4863__auto___21265);
var G__21269 = (0);
seq__21249_21254 = G__21266;
chunk__21250_21255 = G__21267;
count__21251_21256 = G__21268;
i__21252_21257 = G__21269;
continue;
} else {
var f_21270 = cljs.core.first(seq__21249_21264__$1);
(f_21270.cljs$core$IFn$_invoke$arity$0 ? f_21270.cljs$core$IFn$_invoke$arity$0() : f_21270.call(null));

var G__21271 = cljs.core.next(seq__21249_21264__$1);
var G__21272 = null;
var G__21273 = (0);
var G__21274 = (0);
seq__21249_21254 = G__21271;
chunk__21250_21255 = G__21272;
count__21251_21256 = G__21273;
i__21252_21257 = G__21274;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
om$core$render_all = function(state){
switch(arguments.length){
case 0:
return om$core$render_all__0.call(this);
case 1:
return om$core$render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$render_all.cljs$core$IFn$_invoke$arity$0 = om$core$render_all__0;
om$core$render_all.cljs$core$IFn$_invoke$arity$1 = om$core$render_all__1;
return om$core$render_all;
})()
;
om.core.roots = (function (){var G__21275 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21275) : cljs.core.atom.call(null,G__21275));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4076__auto__ = (function (){var G__21282 = x;
if(G__21282){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21282.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21282.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__21282);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__21282);
}
})();
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (function (){var G__21284 = x;
if(G__21284){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$1 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
} else {
return G__21284.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21284.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__21284);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__21284);
}
})();
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
var G__21285 = x;
if(G__21285){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$2 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$2)){
return or__4076__auto____$2;
} else {
return G__21285.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21285.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__21285);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__21285);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$_COLON_descriptor,null,cljs.core.constant$keyword$_COLON_fn,null,cljs.core.constant$keyword$_COLON_instrument,null,cljs.core.constant$keyword$_COLON_react_key,null,cljs.core.constant$keyword$_COLON_key,null,cljs.core.constant$keyword$_COLON_init_state,null,cljs.core.constant$keyword$_COLON_state,null,cljs.core.constant$keyword$_COLON_key_fn,null,cljs.core.constant$keyword$_COLON_opts,null,cljs.core.constant$keyword$_COLON_om$core_SLASH_index,null,cljs.core.constant$keyword$_COLON_shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var om$core$get_descriptor = null;
var om$core$get_descriptor__1 = (function (f){
return om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var om$core$get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__21290 = (function (){var G__21291 = (function (){var or__4076__auto__ = descriptor;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__21291);
})();
return React.createFactory(G__21290);
})());
} else {
}

return (f["om$descriptor"]);
});
om$core$get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return om$core$get_descriptor__1.call(this,f);
case 2:
return om$core$get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$1 = om$core$get_descriptor__1;
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2 = om$core$get_descriptor__2;
return om$core$get_descriptor;
})()
;
om.core.getf = (function() {
var om$core$getf = null;
var om$core$getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var om$core$getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
om$core$getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return om$core$getf__2.call(this,f,cursor);
case 3:
return om$core$getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$getf.cljs$core$IFn$_invoke$arity$2 = om$core$getf__2;
om$core$getf.cljs$core$IFn$_invoke$arity$3 = om$core$getf__3;
return om$core$getf;
})()
;
om.core.build_STAR_ = (function() {
var om$core$build_STAR_ = null;
var om$core$build_STAR___2 = (function (f,cursor){
return om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var om$core$build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__21309 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__21310 = cursor;
var G__21311 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21310,G__21311) : f.call(null,G__21310,G__21311));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__21309) : ctor.call(null,G__21309));
} else {
var map__21312 = m;
var map__21312__$1 = ((cljs.core.seq_QMARK_(map__21312))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21312):map__21312);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,cljs.core.constant$keyword$_COLON_opts);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,cljs.core.constant$keyword$_COLON_init_state);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,cljs.core.constant$keyword$_COLON_state);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,cljs.core.constant$keyword$_COLON_key_fn);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,cljs.core.constant$keyword$_COLON_key);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$_COLON_fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$_COLON_om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__21313 = cursor;
var G__21314 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__21313,G__21314) : dataf.call(null,G__21313,G__21314));
} else {
var G__21315 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__21315) : dataf.call(null,G__21315));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__21316 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__21316) : key_fn.call(null,G__21316));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$_COLON_react_key)
));
var shared = (function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$_COLON_descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__21317 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__21312,map__21312__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__21318 = cursor_SINGLEQUOTE_;
var G__21319 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21318,G__21319) : f.call(null,G__21318,G__21319));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__21312,map__21312__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__21312,map__21312__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__21320 = cursor_SINGLEQUOTE_;
var G__21321 = this$;
var G__21322 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21320,G__21321,G__21322) : f.call(null,G__21320,G__21321,G__21322));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__21312,map__21312__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4076__auto__ = rkey;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$_COLON_om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__21317) : ctor.call(null,G__21317));

}
});
om$core$build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return om$core$build_STAR___2.call(this,f,cursor);
case 3:
return om$core$build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$2 = om$core$build_STAR___2;
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3 = om$core$build_STAR___3;
return om$core$build_STAR_;
})()
;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function() {
var om$core$build = null;
var om$core$build__2 = (function (f,x){
return om$core$build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var om$core$build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__21329 = f;
var G__21330 = x;
var G__21331 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__21329,G__21330,G__21331) : om.core._STAR_instrument_STAR_.call(null,G__21329,G__21330,G__21331));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$_COLON_om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
om$core$build = function(f,x,m){
switch(arguments.length){
case 2:
return om$core$build__2.call(this,f,x);
case 3:
return om$core$build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build.cljs$core$IFn$_invoke$arity$2 = om$core$build__2;
om$core$build.cljs$core$IFn$_invoke$arity$3 = om$core$build__3;
return om$core$build;
})()
;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function() {
var om$core$build_all = null;
var om$core$build_all__2 = (function (f,xs){
return om$core$build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var om$core$build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$_COLON_om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
om$core$build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return om$core$build_all__2.call(this,f,xs);
case 3:
return om$core$build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_all.cljs$core$IFn$_invoke$arity$2 = om$core$build_all__2;
om$core$build_all.cljs$core$IFn$_invoke$arity$3 = om$core$build_all__3;
return om$core$build_all;
})()
;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__21354 = state;
if(G__21354){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21354.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__21354.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__21354);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__21354);
}
})()){
} else {
var properties_21373 = (function (){var G__21355 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21355) : cljs.core.atom.call(null,G__21355));
})();
var listeners_21374 = (function (){var G__21356 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21356) : cljs.core.atom.call(null,G__21356));
})();
var render_queue_21375 = (function (){var G__21357 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21357) : cljs.core.atom.call(null,G__21357));
})();
var x21358_21376 = state;
x21358_21376.om$core$IRenderQueue$ = true;

x21358_21376.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$){
var this$__$1 = this;
var G__21359 = render_queue_21375;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21359) : cljs.core.deref.call(null,G__21359));
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__21360 = render_queue_21375;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21360) : cljs.core.deref.call(null,G__21360));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_21375,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_21375,cljs.core.empty);
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$INotify$ = true;

x21358_21376.om$core$INotify$_listen_BANG_$arity$3 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_21374,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_21374,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$INotify$_notify_BANG_$arity$3 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__21361_21377 = cljs.core.seq((function (){var G__21365 = listeners_21374;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21365) : cljs.core.deref.call(null,G__21365));
})());
var chunk__21362_21378 = null;
var count__21363_21379 = (0);
var i__21364_21380 = (0);
while(true){
if((i__21364_21380 < count__21363_21379)){
var vec__21366_21381 = chunk__21362_21378.cljs$core$IIndexed$_nth$arity$2(null,i__21364_21380);
var __21382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366_21381,(0),null);
var f_21383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21366_21381,(1),null);
var G__21367_21384 = tx_data;
var G__21368_21385 = root_cursor;
(f_21383.cljs$core$IFn$_invoke$arity$2 ? f_21383.cljs$core$IFn$_invoke$arity$2(G__21367_21384,G__21368_21385) : f_21383.call(null,G__21367_21384,G__21368_21385));

var G__21386 = seq__21361_21377;
var G__21387 = chunk__21362_21378;
var G__21388 = count__21363_21379;
var G__21389 = (i__21364_21380 + (1));
seq__21361_21377 = G__21386;
chunk__21362_21378 = G__21387;
count__21363_21379 = G__21388;
i__21364_21380 = G__21389;
continue;
} else {
var temp__4126__auto___21390 = cljs.core.seq(seq__21361_21377);
if(temp__4126__auto___21390){
var seq__21361_21391__$1 = temp__4126__auto___21390;
if(cljs.core.chunked_seq_QMARK_(seq__21361_21391__$1)){
var c__4863__auto___21392 = cljs.core.chunk_first(seq__21361_21391__$1);
var G__21393 = cljs.core.chunk_rest(seq__21361_21391__$1);
var G__21394 = c__4863__auto___21392;
var G__21395 = cljs.core.count(c__4863__auto___21392);
var G__21396 = (0);
seq__21361_21377 = G__21393;
chunk__21362_21378 = G__21394;
count__21363_21379 = G__21395;
i__21364_21380 = G__21396;
continue;
} else {
var vec__21369_21397 = cljs.core.first(seq__21361_21391__$1);
var __21398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21369_21397,(0),null);
var f_21399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21369_21397,(1),null);
var G__21370_21400 = tx_data;
var G__21371_21401 = root_cursor;
(f_21399.cljs$core$IFn$_invoke$arity$2 ? f_21399.cljs$core$IFn$_invoke$arity$2(G__21370_21400,G__21371_21401) : f_21399.call(null,G__21370_21400,G__21371_21401));

var G__21402 = cljs.core.next(seq__21361_21391__$1);
var G__21403 = null;
var G__21404 = (0);
var G__21405 = (0);
seq__21361_21377 = G__21402;
chunk__21362_21378 = G__21403;
count__21363_21379 = G__21404;
i__21364_21380 = G__21405;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRootProperties$ = true;

x21358_21376.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_21373,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_21373,cljs.core.dissoc,id,k);
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_21373,cljs.core.dissoc,id);
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

x21358_21376.om$core$IRootProperties$_get_property$arity$3 = ((function (x21358_21376,properties_21373,listeners_21374,render_queue_21375){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21372 = properties_21373;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21372) : cljs.core.deref.call(null,G__21372));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x21358_21376,properties_21373,listeners_21374,render_queue_21375))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x21411 = cljs.core.clone(cursor);
x21411.om$core$IRootKey$ = true;

x21411.om$core$IRootKey$_root_key$arity$1 = ((function (x21411){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x21411))
;

x21411.om$core$IAdapt$ = true;

x21411.om$core$IAdapt$_adapt$arity$2 = ((function (x21411){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x21411))
;

x21411.cljs$core$ICloneable$ = true;

x21411.cljs$core$ICloneable$_clone$arity$1 = ((function (x21411){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x21411))
;

return x21411;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__21412){
var map__21501 = p__21412;
var map__21501__$1 = ((cljs.core.seq_QMARK_(map__21501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21501):map__21501);
var options = map__21501__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_raf);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_adapt);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_descriptor);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_instrument);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_path);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_tx_listen);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,cljs.core.constant$keyword$_COLON_target);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__21589 = (function (){var G__21502 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21502) : cljs.core.deref.call(null,G__21502));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__21589,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__21589,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__21503 = value;
if(G__21503){
var bit__4757__auto__ = (G__21503.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4757__auto__) || (G__21503.cljs$core$IAtom$)){
return true;
} else {
if((!G__21503.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__21503);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__21503);
}
})())?value:(function (){var G__21504 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21504) : cljs.core.atom.call(null,G__21504));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4076__auto__ = adapt;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$_COLON_target,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_tx_listen,cljs.core.constant$keyword$_COLON_path,cljs.core.constant$keyword$_COLON_adapt,cljs.core.constant$keyword$_COLON_raf], 0));
var ret = (function (){var G__21505 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21505) : cljs.core.atom.call(null,G__21505));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (function (){var G__21545 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21545) : cljs.core.deref.call(null,G__21545));
})();
var cursor = (function (){var G__21546 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__21546) : adapt__$1.call(null,G__21546));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root))){
} else {
var c_21590 = om.dom.render((function (){var _STAR_descriptor_STAR_21547 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_21548 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_21549 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_21550 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21550;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21549;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21548;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21547;
}})(),target);
if(((function (){var G__21551 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21551) : cljs.core.deref.call(null,G__21551));
})() == null)){
var G__21552_21591 = ret;
var G__21553_21592 = c_21590;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21552_21591,G__21553_21592) : cljs.core.reset_BANG_.call(null,G__21552_21591,G__21553_21592));
} else {
}
}

var queue_21593 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_21593)){
} else {
var seq__21554_21594 = cljs.core.seq(queue_21593);
var chunk__21555_21595 = null;
var count__21556_21596 = (0);
var i__21557_21597 = (0);
while(true){
if((i__21557_21597 < count__21556_21596)){
var c_21598 = chunk__21555_21595.cljs$core$IIndexed$_nth$arity$2(null,i__21557_21597);
if(cljs.core.truth_(c_21598.isMounted())){
var temp__4126__auto___21599 = (c_21598.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___21599)){
var next_props_21600 = temp__4126__auto___21599;
(c_21598.props["__om_cursor"] = next_props_21600);

(c_21598.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__21559 = om.core.children(c_21598);
if(G__21559){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21559.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__21559.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21559);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21559);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_21598.shouldComponentUpdate(c_21598.props,c_21598.state);
}
})())){
c_21598.forceUpdate();
} else {
}
} else {
}

var G__21601 = seq__21554_21594;
var G__21602 = chunk__21555_21595;
var G__21603 = count__21556_21596;
var G__21604 = (i__21557_21597 + (1));
seq__21554_21594 = G__21601;
chunk__21555_21595 = G__21602;
count__21556_21596 = G__21603;
i__21557_21597 = G__21604;
continue;
} else {
var temp__4126__auto___21605 = cljs.core.seq(seq__21554_21594);
if(temp__4126__auto___21605){
var seq__21554_21606__$1 = temp__4126__auto___21605;
if(cljs.core.chunked_seq_QMARK_(seq__21554_21606__$1)){
var c__4863__auto___21607 = cljs.core.chunk_first(seq__21554_21606__$1);
var G__21608 = cljs.core.chunk_rest(seq__21554_21606__$1);
var G__21609 = c__4863__auto___21607;
var G__21610 = cljs.core.count(c__4863__auto___21607);
var G__21611 = (0);
seq__21554_21594 = G__21608;
chunk__21555_21595 = G__21609;
count__21556_21596 = G__21610;
i__21557_21597 = G__21611;
continue;
} else {
var c_21612 = cljs.core.first(seq__21554_21606__$1);
if(cljs.core.truth_(c_21612.isMounted())){
var temp__4126__auto___21613__$1 = (c_21612.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___21613__$1)){
var next_props_21614 = temp__4126__auto___21613__$1;
(c_21612.props["__om_cursor"] = next_props_21614);

(c_21612.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__21561 = om.core.children(c_21612);
if(G__21561){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21561.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__21561.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21561);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__21561);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_21612.shouldComponentUpdate(c_21612.props,c_21612.state);
}
})())){
c_21612.forceUpdate();
} else {
}
} else {
}

var G__21615 = cljs.core.next(seq__21554_21606__$1);
var G__21616 = null;
var G__21617 = (0);
var G__21618 = (0);
seq__21554_21594 = G__21615;
chunk__21555_21595 = G__21616;
count__21556_21596 = G__21617;
i__21557_21597 = G__21618;
continue;
}
} else {
}
}
break;
}
}

var _refs_21619 = (function (){var G__21562 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21562) : cljs.core.deref.call(null,G__21562));
})();
if(cljs.core.empty_QMARK_(_refs_21619)){
} else {
var seq__21563_21620 = cljs.core.seq(_refs_21619);
var chunk__21564_21621 = null;
var count__21565_21622 = (0);
var i__21566_21623 = (0);
while(true){
if((i__21566_21623 < count__21565_21622)){
var vec__21567_21624 = chunk__21564_21621.cljs$core$IIndexed$_nth$arity$2(null,i__21566_21623);
var path_21625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567_21624,(0),null);
var cs_21626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567_21624,(1),null);
var cs_21627__$1 = (function (){var G__21568 = cs_21626;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21568) : cljs.core.deref.call(null,G__21568));
})();
var seq__21569_21628 = cljs.core.seq(cs_21627__$1);
var chunk__21570_21629 = null;
var count__21571_21630 = (0);
var i__21572_21631 = (0);
while(true){
if((i__21572_21631 < count__21571_21630)){
var vec__21573_21632 = chunk__21570_21629.cljs$core$IIndexed$_nth$arity$2(null,i__21572_21631);
var id_21633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21632,(0),null);
var c_21634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21632,(1),null);
if(cljs.core.truth_(c_21634.shouldComponentUpdate(c_21634.props,c_21634.state))){
c_21634.forceUpdate();
} else {
}

var G__21635 = seq__21569_21628;
var G__21636 = chunk__21570_21629;
var G__21637 = count__21571_21630;
var G__21638 = (i__21572_21631 + (1));
seq__21569_21628 = G__21635;
chunk__21570_21629 = G__21636;
count__21571_21630 = G__21637;
i__21572_21631 = G__21638;
continue;
} else {
var temp__4126__auto___21639 = cljs.core.seq(seq__21569_21628);
if(temp__4126__auto___21639){
var seq__21569_21640__$1 = temp__4126__auto___21639;
if(cljs.core.chunked_seq_QMARK_(seq__21569_21640__$1)){
var c__4863__auto___21641 = cljs.core.chunk_first(seq__21569_21640__$1);
var G__21642 = cljs.core.chunk_rest(seq__21569_21640__$1);
var G__21643 = c__4863__auto___21641;
var G__21644 = cljs.core.count(c__4863__auto___21641);
var G__21645 = (0);
seq__21569_21628 = G__21642;
chunk__21570_21629 = G__21643;
count__21571_21630 = G__21644;
i__21572_21631 = G__21645;
continue;
} else {
var vec__21574_21646 = cljs.core.first(seq__21569_21640__$1);
var id_21647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574_21646,(0),null);
var c_21648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574_21646,(1),null);
if(cljs.core.truth_(c_21648.shouldComponentUpdate(c_21648.props,c_21648.state))){
c_21648.forceUpdate();
} else {
}

var G__21649 = cljs.core.next(seq__21569_21640__$1);
var G__21650 = null;
var G__21651 = (0);
var G__21652 = (0);
seq__21569_21628 = G__21649;
chunk__21570_21629 = G__21650;
count__21571_21630 = G__21651;
i__21572_21631 = G__21652;
continue;
}
} else {
}
}
break;
}

var G__21653 = seq__21563_21620;
var G__21654 = chunk__21564_21621;
var G__21655 = count__21565_21622;
var G__21656 = (i__21566_21623 + (1));
seq__21563_21620 = G__21653;
chunk__21564_21621 = G__21654;
count__21565_21622 = G__21655;
i__21566_21623 = G__21656;
continue;
} else {
var temp__4126__auto___21657 = cljs.core.seq(seq__21563_21620);
if(temp__4126__auto___21657){
var seq__21563_21658__$1 = temp__4126__auto___21657;
if(cljs.core.chunked_seq_QMARK_(seq__21563_21658__$1)){
var c__4863__auto___21659 = cljs.core.chunk_first(seq__21563_21658__$1);
var G__21660 = cljs.core.chunk_rest(seq__21563_21658__$1);
var G__21661 = c__4863__auto___21659;
var G__21662 = cljs.core.count(c__4863__auto___21659);
var G__21663 = (0);
seq__21563_21620 = G__21660;
chunk__21564_21621 = G__21661;
count__21565_21622 = G__21662;
i__21566_21623 = G__21663;
continue;
} else {
var vec__21575_21664 = cljs.core.first(seq__21563_21658__$1);
var path_21665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21575_21664,(0),null);
var cs_21666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21575_21664,(1),null);
var cs_21667__$1 = (function (){var G__21576 = cs_21666;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21576) : cljs.core.deref.call(null,G__21576));
})();
var seq__21577_21668 = cljs.core.seq(cs_21667__$1);
var chunk__21578_21669 = null;
var count__21579_21670 = (0);
var i__21580_21671 = (0);
while(true){
if((i__21580_21671 < count__21579_21670)){
var vec__21581_21672 = chunk__21578_21669.cljs$core$IIndexed$_nth$arity$2(null,i__21580_21671);
var id_21673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21581_21672,(0),null);
var c_21674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21581_21672,(1),null);
if(cljs.core.truth_(c_21674.shouldComponentUpdate(c_21674.props,c_21674.state))){
c_21674.forceUpdate();
} else {
}

var G__21675 = seq__21577_21668;
var G__21676 = chunk__21578_21669;
var G__21677 = count__21579_21670;
var G__21678 = (i__21580_21671 + (1));
seq__21577_21668 = G__21675;
chunk__21578_21669 = G__21676;
count__21579_21670 = G__21677;
i__21580_21671 = G__21678;
continue;
} else {
var temp__4126__auto___21679__$1 = cljs.core.seq(seq__21577_21668);
if(temp__4126__auto___21679__$1){
var seq__21577_21680__$1 = temp__4126__auto___21679__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21577_21680__$1)){
var c__4863__auto___21681 = cljs.core.chunk_first(seq__21577_21680__$1);
var G__21682 = cljs.core.chunk_rest(seq__21577_21680__$1);
var G__21683 = c__4863__auto___21681;
var G__21684 = cljs.core.count(c__4863__auto___21681);
var G__21685 = (0);
seq__21577_21668 = G__21682;
chunk__21578_21669 = G__21683;
count__21579_21670 = G__21684;
i__21580_21671 = G__21685;
continue;
} else {
var vec__21582_21686 = cljs.core.first(seq__21577_21680__$1);
var id_21687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582_21686,(0),null);
var c_21688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582_21686,(1),null);
if(cljs.core.truth_(c_21688.shouldComponentUpdate(c_21688.props,c_21688.state))){
c_21688.forceUpdate();
} else {
}

var G__21689 = cljs.core.next(seq__21577_21680__$1);
var G__21690 = null;
var G__21691 = (0);
var G__21692 = (0);
seq__21577_21668 = G__21689;
chunk__21578_21669 = G__21690;
count__21579_21670 = G__21691;
i__21580_21671 = G__21692;
continue;
}
} else {
}
}
break;
}

var G__21693 = cljs.core.next(seq__21563_21658__$1);
var G__21694 = null;
var G__21695 = (0);
var G__21696 = (0);
seq__21563_21620 = G__21693;
chunk__21564_21621 = G__21694;
count__21565_21622 = G__21695;
i__21566_21623 = G__21696;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root,true);

var G__21583 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21583) : cljs.core.deref.call(null,G__21583));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$_COLON_ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_skip_render_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$_COLON_ignore,false);

if(cljs.core.contains_QMARK_((function (){var G__21584 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21584) : cljs.core.deref.call(null,G__21584));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__21585 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__21586 = (16);
return setTimeout(G__21585,G__21586);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__21587 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__21587);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__21588 = target;
return React.unmountComponentAtNode(G__21588);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21501,map__21501__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_((function (){var G__21699 = target;
return goog.dom.isElement(G__21699);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21700 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21700) : cljs.core.deref.call(null,G__21700));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__21702 = x;
if(G__21702){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21702.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__21702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__21702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__21702);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function() {
var om$core$transact_BANG_ = null;
var om$core$transact_BANG___2 = (function (cursor,f){
return om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var om$core$transact_BANG___3 = (function (cursor,korks,f){
return om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var om$core$transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
om$core$transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return om$core$transact_BANG___2.call(this,cursor,korks);
case 3:
return om$core$transact_BANG___3.call(this,cursor,korks,f);
case 4:
return om$core$transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$transact_BANG___2;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$transact_BANG___3;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$transact_BANG___4;
return om$core$transact_BANG_;
})()
;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function() {
var om$core$update_BANG_ = null;
var om$core$update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var om$core$update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var om$core$update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
om$core$update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return om$core$update_BANG___2.call(this,cursor,korks);
case 3:
return om$core$update_BANG___3.call(this,cursor,korks,v);
case 4:
return om$core$update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_BANG___2;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_BANG___3;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$update_BANG___4;
return om$core$update_BANG_;
})()
;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__21713 = cursor;
if(G__21713){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21713.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__21713.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__21713);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__21713);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__21714 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__21714) : om.core.path.call(null,G__21714));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$_COLON_ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function() {
var om$core$get_node = null;
var om$core$get_node__1 = (function (owner){
return owner.getDOMNode();
});
var om$core$get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
om$core$get_node = function(owner,name){
switch(arguments.length){
case 1:
return om$core$get_node__1.call(this,owner);
case 2:
return om$core$get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_node.cljs$core$IFn$_invoke$arity$1 = om$core$get_node__1;
om$core$get_node.cljs$core$IFn$_invoke$arity$2 = om$core$get_node__2;
return om$core$get_node;
})()
;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function() {
var om$core$set_state_BANG_ = null;
var om$core$set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var om$core$set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
om$core$set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_BANG___2;
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_BANG___3;
return om$core$set_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function() {
var om$core$set_state_nr_BANG_ = null;
var om$core$set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var om$core$set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
om$core$set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_nr_BANG___2;
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_nr_BANG___3;
return om$core$set_state_nr_BANG_;
})()
;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function() {
var om$core$update_state_BANG_ = null;
var om$core$update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21717 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21717) : f.call(null,G__21717));
})());
});
var om$core$update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21718 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21718) : f.call(null,G__21718));
})());
});
om$core$update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_BANG___2;
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_BANG___3;
return om$core$update_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function() {
var om$core$update_state_nr_BANG_ = null;
var om$core$update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21721 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21721) : f.call(null,G__21721));
})());
});
var om$core$update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21722 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21722) : f.call(null,G__21722));
})());
});
om$core$update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_nr_BANG___2;
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_nr_BANG___3;
return om$core$update_state_nr_BANG_;
})()
;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function() {
var om$core$get_render_state = null;
var om$core$get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var om$core$get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
om$core$get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_render_state__1.call(this,owner);
case 2:
return om$core$get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_render_state__1;
om$core$get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_render_state__2;
return om$core$get_render_state;
})()
;
