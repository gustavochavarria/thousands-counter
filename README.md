# thousands-counter
Counter of people for followers, likes, post and others stats on Social Networks (Like Instagram, Facebook, etc)


## Use

You can convert numbers into Abreviated expression:

1000 > 1k
2800 > 2.8k
99800 > 99.8k
1000000 > 1M

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

