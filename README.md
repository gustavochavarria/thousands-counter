# thousands-counter
<b>Thousands Counter</b> is a package that allows you to convert numbers above the thousands into its abbreviated form.

This package can be useful for social media projects to convert number of followers, likes and posts, as well as other statistical information for site such as Instagram, Facebook, Pinterest etc.👥👍❤️


### For example
The numbers will abbreviate in the following way:


<table>
  <tr>
    <td>1,000</td>
    <td>➡️</td>
    <td>1K</td>
  </tr>
  <tr>
    <td>2,800</td>
    <td>➡️</td>
    <td>2.8K</td>
  </tr>
  <tr>
    <td>99,800 </td>
    <td>➡️</td>
    <td>99.8K</td>
  </tr>
  <tr>
    <td>1,000,000</td>
    <td>➡️</td>
    <td>1M</td>
  </tr>
</table>


## Installation
The package is available as an [npm package](https://www.npmjs.com/package/thousands-counter).
To install the package run:

```bash
npm install thousands-counter
# or with yarn
yarn add thousands-counter
```

## Usage v1.1.0
```
tc(number, decimalsAllowed)
```

```js
import tc from 'thousands-counter';

console.log('Default: ', tc(1580));
// Default: 1.5K

console.log('Default: ', tc(1580, 0));
// Default: 1K

console.log('Counter: ', tc(1580, 2));
// Counter: 1.58K
```

## Usage v1.0.0
```
toAbr(number, decimals)
```

```js
import { toAbr } from 'thousands-counter';

const counter = toAbr(1580, 2);

console.log('Counter: ', counter);
// Counter: 1.58k
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
