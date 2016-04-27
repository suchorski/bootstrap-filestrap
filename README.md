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

### To enable
```js
$('#id').prop('disabled', false).filestrap('enabled');
```

### To disable
```js
$('#id').prop('disabled', true).filestrap('disabled');
```

### To change classes of the input file name instead of the input file
```js
$('#id').filestrap('addClass | toggleClass | removeClass', 'class');
```

### To clear it's content
```js
$('#id').filestrap('clear');
```

### To change the placeholder
```js
$('#id').filestrap('placeholder', 'new placeholder');
```
