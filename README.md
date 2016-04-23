# bootstrap-filestrap
Bootstrap FileStrap is a simple plugin to help you stylize file entries of your form.

Maintained by [Thiago Suchorski](https://github.com/suchorski) [@suchorski](https://facebook.com/suchorski)


### Installation

It can be installed via `npm`

    npm install -g filestrap

or via `bower`

    bower install filestrap


### Found a bug?

[Please open a new issue](https://github.com/suchorski/bootstrap-filestrap/issues)

####**Please tell about the issue**
* Browser
* Plugins
* Others...

### Copyright and license

MIT Licence.


## How to use

### Default options:

    browserText: ''
    hasTrash: true
    trashText: ''

### To stylize a specific id

```js
$('#id').filestrap(options);
```

### To clear it`s contents
```js
$('#id').filestrap('clear');
```

### To change the placeholder
```js
$('#id').filestrap('placeholder', 'new placeholder');
```
