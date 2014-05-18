var modal  = require('modal');
var assert = require('assert');
var domify = require('domify');

describe('modal(element)', function() {

  before(function() {
    this.element = document.createElement('form');
    this.element.innerHTML += '<p>Warning Bla</p>';
    this.element.innerHTML += '<input />';
    this.element.innerHTML += '<button>Submit</button>';
  });

  it('should return instance of "Modal"', function() {
    assert(modal(this.element) instanceof modal.Modal);
  });

});

describe('modal(element, options)', function() {

});

describe('modal.Modal', function() {

});
