# component-modal

jQuery-less implementation of twbs modals.

## Usage

    var modal  = require('modal');
    var domify = require('domify');

    // create an element we will put into the modal
    var element = domify('<form></form>');
    element.innerHTML = '<p class="alert alert-danger">Really?</p>';
    element.innerHTML = '<button class="btn btn-danger">Confirm</button>';

    // lets insert our element
    modal.insert(element);
    // now render it to the user
    modal.open();


## Install

Preferable with [component](https://github.com/component/component)

    $ component install bodokaiser/component-modal

## Documentation

The `modal` module will manage a singleton instance of `Modal` for you.
This is done in favor of creating instances yourself as you will get
problems cleaning them up from time to time as they else will remain in
the document body.

### modal.element

The `HTMLElement` of the modal for direct access or manuel insertion into the
`document.body`.

### modal.open()

Updates the modal classes to fade into the screen.

### modal.close()

Updated the modal classes to fade out of the screen.

### modal.title(title)

Sets the `.modal-title` of the modal to `title`.

### modal.insert(element)

Inserts the provided `element` into the modal. The element must not have any
modal related markdown this is all handled by the modal itself. However
you should note that some elements are not rendered probably when they do not
have a specified height.

### modal.remove()

Removes the modal from the document. You can reuse a modal instance by using
`modal.insert(element)` however you can also just remove it and recreate when
required.

### Event: "opened"

Emitted after a `modal.open()`.

### Event: "closed"

Emitted after a `modal.close()`.

### Event: "close"

Emitted after a click on the close button.

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
