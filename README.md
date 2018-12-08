# Stylus.js
An open-source JavaScript substitute to CSS to supercharge your element styles.

---

## Installation
Add the `stylus.js` file in the `head` tag of your HTML
```html
<head>
    ...
    <script src="stylus.js"></script>
    ...
</head>
```

---

## Usage

#### Adding styles to your element
To style an element, create a new instantiation of the `Stylus()` class that takes in a parameter of an elements name. The parameter can be an elements `class` or `id`.

You can use the `addStyle()` method on your element that takes in a dictionary containing its style properties.

```javascript
const element = new Stylus('#element');
element.addStyle({
    width: '100%',
    height: '80px',
    backgroundColour: 'blue'
});
```

<br>

#### Getting the property of another element
The `style()` method returns the value of property stated. This is useful when you want to update the styles of an element based on the changes made to another without rewriting the code or when styling an element based on the properties of another.

```javascript
const firstElement = new Stylus('#first-element');
const secondElement = new Stylus('#second-element');

// Returns the value of the 'width' property of the first element
var firstElementWidth = firstElement.style('width');

// Applying the width of the first element to the second
secondElement.addStyle({
    width: firstElementWidth,
    height: '100px'
})
```

<br>

#### Inheriting the properties of another element
The `inherit()` method retrieves the properties of an element and applies it to the one in question.

There are two types of options to the `inherit()` method:

|                         Option                         |                    What it does                   |
|:------------------------------------------------------:|:-------------------------------------------------:|
|                     'all' (default)                    | Inherits all properties  of the specified element |
| property  (This could be the  'width', 'height', etc.) |       Inherits only the  specified property       |

```javascript
const firstElement = new Stylus('#first-element');
const secondElement = new Stylus('#second-element');
const thirdElement = new Stylus('.third-element');

firstElement.addStyle({
    width: '100%',
    height: '80px',
    backgroundColor: 'red'
});

// Second element inherits all properties from first element
secondElement.inherit(firstElement);

// Styles can be still be customised after inheritance
secondElement.addStyle({
    height: '120px';
});

thirdElement.addStyle({
    backgroundColor: 'green'
});

// Specific properties can also be inherited from other objects
secondElement.inherit(thirdElement, 'backgroundColor');
```

---

## Contributing to Stylus.js
If interested in contributing, create a new Issue stating your contribution. All suggestions are welcome!

---

## License
MIT