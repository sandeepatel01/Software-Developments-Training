# Fast Rapid Code Round

### Problems 1

_Create an array containing different types of teas._

```jsx
let teas = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];
```

### Problem 2

_Problem: Add "Chamomile Tea" to the existing list of teas._

```jsx
teas.push("Chamomile Tea");
```

### Problem 3

_Remove "Oolong Tea" from the list of teas._

```jsx
teas.splice(2, 1); // slice contains the index and the number of elements to remove
console.log(teas);
```

### Problem 4

_Problem: Find the index of "Oolong Tea" in the list of teas and remove it._

```jsx
const index = teas.indexOf("Oolong tea");
if (index !== -1) {
  teas.splice(index, 1);
}
console.log(teas);
```

### Problem 5

_Filter the list to only include teas that are caffeinated - ["Green Tea", "Black Tea", "Chamomile Tea"]._

```jsx
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffeinatedTeas);
```

### Problem 6

_Sort the list of teas in alphabetical order._

```jsx
teas.sort();
console.log(teas);
```

### Problem 7

_Use a for loop to print each type of tea in the array._

```jsx
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
```

### Problem 8

_Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")._

```jsx
let caffeinatedCount = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedCount++;
  }
}
console.log(caffeinatedCount);
```

### Problem 9

_Use a for loop to create a new array with all tea names in uppercase._

```jsx
let uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);
```

### Problem 10

_Use a for loop to find the tea name with the most characters._

```jsx
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log(longestTea);
```

### Problem 11

_Use a for loop to reverse the order of teas in the array._

```jsx
let reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
console.log(reversedArray);
```
