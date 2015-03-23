!function($){"use strict";function e(t,n){if(!(this instanceof e)){var i=new e($.extend({$source:t,$currentTarget:t.first()},n));return i.open(),i}$.featherlight.apply(this,arguments),this.chainCallbacks(o)}var t=function(e){window.console&&window.console.warn&&window.console.warn("FeatherlightGallery: "+e)};if("undefined"==typeof $)return t("Too much lightness, Featherlight needs jQuery.");if(!$.featherlight)return t("Load the featherlight plugin before the gallery plugin");var n="ontouchstart"in document.documentElement,i=$.event&&$.event.special.swipeleft&&$,a=window.Hammer&&function(e){var t=new window.Hammer.Manager(e[0]);return t.add(new window.Hammer.Swipe),t},r=n&&(i||a);n&&!r&&t("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");var o={afterClose:function(e,t){var n=this;return n.$instance.off("next."+n.namespace+" previous."+n.namespace),n._swiper&&(n._swiper.off("swipeleft",n._swipeleft).off("swiperight",n._swiperight),n._swiper=null),e(t)},beforeOpen:function(e,t){var n=this;return n.$instance.on("next."+n.namespace+" previous."+n.namespace,function(e){var t="next"===e.type?1:-1;n.navigateTo(n.currentNavigation()+t)}),r?n._swiper=r(n.$instance).on("swipeleft",n._swipeleft=function(){n.$instance.trigger("next")}).on("swiperight",n._swiperight=function(){n.$instance.trigger("previous")}):n.$instance.find("."+n.namespace+"-content").append(n.createNavigation("previous")).append(n.createNavigation("next")),e(t)},onKeyUp:function(e,t){var n={37:"previous",39:"next"}[t.keyCode];return n?(this.$instance.trigger(n),!1):e(t)}};$.featherlight.extend(e,{autoBind:"[data-featherlight-gallery]"}),$.extend(e.prototype,{previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:100,galleryFadeOut:300,images:function(){return this.filter?this.$source.find(this.filter):this.$source},currentNavigation:function(){return this.images().index(this.$currentTarget)},navigateTo:function(e){var t=this,n=t.images(),i=n.length,a=t.$instance.find("."+t.namespace+"-inner");return e=(e%i+i)%i,t.$currentTarget=n.eq(e),t.beforeContent(),$.when(t.getContent(),a.fadeTo(t.galleryFadeOut,.2)).always(function(e){t.setContent(e),t.afterContent(),e.fadeTo(t.galleryFadeIn,1)})},createNavigation:function(e){var t=this;return $('<span title="'+e+'" class="'+this.namespace+"-"+e+'"><span>'+this[e+"Icon"]+"</span></span>").click(function(){$(this).trigger(e+"."+t.namespace)})}}),$.featherlightGallery=e,$.fn.featherlightGallery=function(t){return e.attach(this,t)},$(document).ready(function(){e._onReady()})}(jQuery);