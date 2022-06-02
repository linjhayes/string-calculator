# string-calculator

A simple calculator that will add a delimited string of numbers together.
The string may contain a small control code at the beginning that defines a custom delimiter.
If no customer delimiter is found then a comma is used as the default delimiter.

The custom delimiter would be defined in the following format:

//[delimiter]\n[delimiter separated numbers]

For example:

- A string with a custom delimiter of @ would be defined as //@\n2@3@8. The expected result would be 13.
- A string with no custom delimiter would be defined as 1,2,3. The expected result would be 6.
- A string with multiple custom delimiters would be defined as //@,$\n2@3$8. The expected result would be 13.
- An empty string or null value will return a 0.
- A string with multiple custom delimiters of arbitrary length would be defined as //$,@,%%%\n1%%%2@3$5%%%4. The expected result would be 15.

## Quickstart

**1. Install**

```
yarn install
```

**2. Create a .env file in the root folder. It can be empty. If you want to override any default values you can do that here. Look in AppConfig.ts for values you can override.**

**3. Run Tests**

```
yarn run test
```

To run in individual test suite run the following

```
npx jest -i ToIntegerArray --verbose
```

**4. Code Coverage**

In the root folder this should create a folder named coverage with a json file named coverage-summary.json

```
yarn run test:coverage
```

## Considerations

If performance is important then you may be better off to choose another language such as Java. Long strings that require alot of parsing and summing may end up blocking other operations in Node.

## API Summary

|               |                                             |     |
| ------------- | ------------------------------------------- | --- |
| [`Add`](#Add) | Add a delimited string of numbers together. |

## API

### Add

Example:

```javascript
import { Add } from 'string-calculator';

const sum = Add('1,2,3');
````
