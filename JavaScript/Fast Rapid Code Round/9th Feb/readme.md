# Fast Rapid Code Round

### Problems 1

Create an object representing a type of tea with properties for name, type, and caffeine content.

```jsx
const tea = {
  name: "Green Tea",
  type: "Green",
  caffeine: "Low",
};
```

### Problem 2

Access and print the name and type properties of the tea object.

```jsx
console.log(tea.name);
console.log(tea.type);
```

### Problem 3

Add a new property origin to the tea object.

```jsx
tea.origin = "India";
```

### Problem 4

Change the caffeine levet of the tea object to "Medium".

```jsx
tea.caffeine = "Medium";
```

### Problem 5

Remove the origin property from the tea object.

```jsx
delete tea.origin;
```

### Problem 6

Check if the tea object has a property origin.

```jsx
if ("origin" in tea) {
  console.log("The tea has an origin.");
}
```

### Problem 7

Use a for. .. in loop to print all properties of the tea object.

```jsx
for (let key in tea) {
  console.log(`${key}: ${tea[key]}`);
}
```

### Problem 8

Create a nested object representing different types of teas and their properties.

```jsx
const newTea = {
  tea: {
    name: "Green Tea",
    type: "Green",
    caffeine: "Low",
  },
  tea2: {
    name: "Black Tea",
    type: "Black",
    caffeine: "Medium",
  },
};
```

### Problem 9

Copy the nested tea object properties in to a new object.

```jsx
const newTea2 = JSON.parse(JSON.stringify(newTea)); // Deep copy

newTea2.tea = {
  name: "Chamomile Tea",
  type: "Chamomile",
  caffeine: "Low",
};

console.log(newTea);
console.log(newTea2);
```

### Problem 10

Create a new object representing a fruits name and color

```jsx
const fruits = {
  name: "Apple",
  color: "Red",
};
```

### Problem 11

Copy the fruits object in to a new object and change the name to "Banana"

```jsx
const newFruits = {
  // Shallow copy
  ...fruits,
  name: "Banana",
};

const newFruits = {
  ...fruits,
  name: "Banana",
  color: "Yellow",
};

console.log(fruits);
console.log(newFruits);
```
