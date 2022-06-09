# Plain Arrays

Plain Arrays is a JavaScript Function for plain arrays or arrays in arrays.

## Installation

This proyect was build with [Vite](https://vitejs.dev/).

Use the package manager [pnpm](https://pnpm.io/es/) to install.

```bash
pnpm install or pnpm i
```

## Build

```bash
pnpm build
```

## Usage

```javascript
recursion([6, [1, [2, 3], 4], 5]);
returns: [6, 1, 2, 3, 4, 5];

recursion([1, [2, [3, [4, 5]]]]);
returns: [1, 2, 3, 4, 5];

recursion([[[1, 2], 3], 4, 5]);
returns: [1, 2, 3, 4, 5];
```

## How does it work?

- It takes an array as an argument, and if the array contains an array, it will call itself and pass
- the array as an argument

- @param arr - the array that we want to flatten

```javascript
export function operation_data(arr) {
```

- Creating an empty array.

```javascript
let plainArr = [];
```

- It takes an array as an argument, and if the array contains an array, it will call itself and pass
- the array as an argument
- @param arrayData - the array that we want to flatten

```javascript
  const recursion = (arrayData) => {
```

- Checking if the item is an array, if it is, it will call the function recursion with the argument item. If it is not an array, it will push the item to the array plainArr.

```javascript
    arrayData.forEach((item) => {
      if (Array.isArray(item)) {
        recursion(item);
      } else {
        plainArr.push(item);
      }
    });
  };
```

- Calling the function recursion with the argument arr.

```javascript
  recursion(arr);
  console.log(plainArr);
}
```

## Testing

```bash
pnpm test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
