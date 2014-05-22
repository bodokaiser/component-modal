var domify  = require('component-domify');
var emitter = require('component-emitter');
try {
  var replace = require('component-replace');
} catch(e) {
  var replace = require('bodokaiser-replace');
}

var modal = require('./modal.html');

function Modal() {
  this.element = domify(modal);

  bindToButtonClickEvent(this.element, this);
}

emitter(Modal.prototype);

Modal.prototype.open = function() {
  var classList = this.element.classList;

  classList.add('modal-open');
  classList.add('show');

  setTimeout(function() {
    if (classList.contains('modal-open')) {
      classList.add('in');
    }
  });

  return this.emit('opened');
};

Modal.prototype.close = function() {
  var classList = this.element.classList;

  classList.remove('in');
  classList.remove('modal-open');

  setTimeout(function() {
    if (!classList.contains('modal-open')) {
      classList.remove('show');
    }
  }, 500);

  return this.emit('closed');
};

Modal.prototype.title = function(title) {
  this.element.querySelector('.modal-title').innerText = title;

  return this;
};

Modal.prototype.remove = function() {
  this.element.remove();

  return this.emit('removed');
};

Modal.prototype.insert = function(element) {
  replace('.modal-body', this.element, element);

  return this;
};

module.exports = Modal;

function bindToButtonClickEvent(element, view) {
  element.querySelector('.close').addEventListener('click', function(e) {
    view.emit('close', view);

    view.close();
  });
}
