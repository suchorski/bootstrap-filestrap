# bootstrap-filestrap
Bootstrap FileStrap is a simple plugin to help you stylize file entries of your form.

------------------------------------------------------------------------------------

###**Please send to (issues) problems with the plugin, also send mode details as:**
* Browser
* Version
* Examples using [jsfiddle.net](https://jsfiddle.net/)
* Other plugins involved
 
**Detail the most of your problem to speed up the fix.**

------------------------------------------------------------------------------------

Maintained by [Thiago Suchorski](https://github.com/suchorski) [@suchorski](https://facebook.com/suchorski)

## Found a bug?

[Please open a new issue](https://github.com/suchorski/bootstrap-filestrap/issues)

### Copyright and license

MIT Licence.

------------------------------------------------------------------------------------

# How to use

## Default options:

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
