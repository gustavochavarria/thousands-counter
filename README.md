# thousands-counter
Counter of people for followers, likes, post and others stats on Social Networks (Like Instagram, Facebook, etc)


## Install

Using yarn:

``` yarn add thousands-counter ```

Using npm:

``` npm i thousands-counter ```

## Use

You can convert numbers into Abreviated expression:

1000 > 1k <br/>
2800 > 2.8k <br/>
99800 > 99.8k <br/>
1000000 > 1M <br/>

```
//to Abreviation
toAbr(number, decimals)
```

## Example 

```
import { toAbr } from 'thousands-counter';

const counter = toAbr(1580, 2);
console.log('Counter: ', counter);
// Counter: 1.58k
```

