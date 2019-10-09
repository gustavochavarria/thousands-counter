# thousands-counter
Thousand counters it's a package that allows you to convert the number of followers, likes, post and other statistics on social networks (such as Instagram, Facebook, etc.), in abbreviated expressions 👥👍❤️

### For example
You can convert numbers into abreviated expression like this:


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

const default = tc(1580);
const counter = tc(1580, 2);

console.log('Default: ', default);
// Default: 1.5k

console.log('Counter: ', counter);
// Counter: 1.58k
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
