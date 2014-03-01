(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Modal = require('../src/uu-modal');

document.addEventListener('DOMContentLoaded', function() {
  var modal = new Modal({el: document.getElementById('test-modal')});
  var link = document.getElementById('open-modal');
  link.addEventListener('click', function() {
    modal.show();
  });
});

},{"../src/uu-modal":2}],2:[function(require,module,exports){
var addClass = function(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
};

var removeClass = function(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

function UUModal(options) {
  this.el = options.el;
  this.visible = false;
  this.closeBtn = this.el.querySelector('.uu-close');
  this.closeBtn.addEventListener('click', this.hide.bind(this));
  this.handlers = {
    keyup: this.keyUp.bind(this),
    click: this.documentClick.bind(this),
    touchstart: this.documentClick.bind(this),
    transitionend: this.transitionEnd.bind(this)
  }
}

UUModal.prototype.show = function() {
  removeClass(this.el, 'not-active');
  addClass(this.el, 'is-active');
  this.addOrRemoveEventHandlers('add');
};

UUModal.prototype.hide = function() {
  removeClass(this.el, 'is-active');
  addClass(this.el, 'not-active');
  this.addOrRemoveEventHandlers('remove');
  this.visible = false;
};

UUModal.prototype.addOrRemoveEventHandlers = function(action) {
  var fn = action === 'add' ? document.addEventListener : document.removeEventListener;
  for(var evtType in this.handlers) {
    var handlerFn = this.handlers[evtType];
    fn(evtType, handlerFn, false);
  }
};

UUModal.prototype.keyUp = function(event) {
  // hide if esc
  if (event.keyCode === 27) {
    this.hide();
  }
};

UUModal.prototype.documentClick = function(event) {
  if (!this.visible) return;
  //hide if clicked outside
  if (event.target !== this.el) {
    this.hide();
  }
};

UUModal.prototype.transitionEnd = function(event) {
  this.visible = !this.visible;
}

module.exports = UUModal;
},{}]},{},[1])