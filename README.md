# component-modal

jQuery-less implementation of twbs modals.

## Usage

    var modal  = require('modal');
    var domify = require('domify');

    // create an element we will put into the modal
    var element = domify('<form></form>');
    element.innerHTML = '<p class="alert alert-danger">Really?</p>';
    element.innerHTML = '<button class="btn btn-danger">Confirm</button>';

    // now lets open our modal
    modal(element).open();

## Install

Preferable with [component](https://github.com/component/component)

    $ component install bodokaiser/component-modal

else with [npm](https://github.com/npmjs/npm)

    $ npm install bodokaiser-modal

## Documentation

### modal(element[, options])

Wraps an element into an instance of `modal.Modal`. Shortcut for:

    document.body.append(new modal.Modal(options).insert(element));

Will return an instance of `modal.Modal` in the end where `options` can have
following properties:

- `closable`, if set to `false` the modal will have no close button.
- `insert`, if set to `false` the modal will not be inserted into the `body`.
- `title`, sets the modals title to the assigned string.

#### modal.element

The `HTMLElement` of the modal for direct access or manuel insertion into the
`document.body`.

#### modal.open()

Updates the modal classes to fade into the screen.

#### modal.close()

Updated the modal classes to fade out of the screen.

#### modal.title(title)

Sets the `.modal-title` of the modal to `title`.

#### modal.insert(element)

Inserts the provided `element` into the modal. The element must not have any
modal related markdown this is all handled by the modal itself. However
you should note that some elements are not rendered probably when they do not
have a specified height.

#### modal.remove()

Removes the modal from the document. You can reuse a modal instance by using
`modal.insert(element)` however you can also just remove it and recreate when
required.

#### Event: "opened"

Emitted after a `modal.open()`.

#### Event: "closed"

Emitted after a `modal.close()`.

#### Event: "close"

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
