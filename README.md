# thousands-counter
Thousand counters it's a package that allows you to convert the number of followers, likes, post and other statistics on social networks (such as Instagram, Facebook, etc.), in abbreviated expressions 👥👍❤️

### For example
You can convert numbers into abreviated expression like this:

1000 ➡️ 1k <br/>
2800 ➡️ 2.8k <br/>
99800 ➡️ 99.8k <br/>
1000000 ➡️ 1M <br/>

## Installation
The package is available as an [npm package](https://www.npmjs.com/package/thousands-counter).
To install the package run:

```bash
npm install thousands-counter
# or with yarn
yarn add thousands-counter
```

## Usage 
```
//to Abbreviation
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
