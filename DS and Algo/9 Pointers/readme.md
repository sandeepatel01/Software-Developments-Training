# Pointers

**Pointer → Stored memory address of another Variable.**

A pointer is a variable that stores the address of another type of variable.

### Pointers Uses

1. Memory Management: Dynamic memory allocation
2. Data Structures (Linked List, Trees, Graphs)
3. Passing function arguments by reference
4. To handle Arrays and Strings
5. Pointers to Pointers: Storing the address of one pointer inside another pointer

### Creation

```cpp
int nums = 10;
int *ptr = &nums;
```

### Access

```cpp
cout<<"Value of nums: "<<nums<<endl; // Output: Value of nums: 10
cout<<"Address of nums: "<<&nums<<endl; // Output: Address of nums: 0x61ff0c
cout<<"Value of ptr: "<<ptr<<endl; // Output: Value of ptr: 0x61ff0c
cout<<"Value of &ptr: "<<&ptr<<endl; // Output: Value of ptr: 0x61ff08
cout<<"Value of *ptr: "<<*ptr<<endl; // Output: Value of *ptr: 10
```

## Pointer to In an Array

```cpp
int arr[4] = {1, 2, 3, 4};

int *ptr = arr;
// int (*ptr)[5] = &arr;
// int *ptr = &arr;  // ERROR
```

```cpp
cout<<"arr: "<<arr<<endl;
cout<<"&arr: "<<&arr<<endl;
cout<<"arr[0]: "<<arr[0]<<endl;
cout<<"&arr[0]: "<<&arr[0]<<endl;

cout<<"ptr: "<<ptr<<endl;
cout<<"&ptr: "<<&ptr<<endl;
cout<<"*ptr: "<<*ptr<<endl;
```

```cpp
int arr[4] = {1, 2, 3, 4};

int *ptr = arr;
int *ptr2  = arr + 1;

cout<<"arr: "<<arr<<endl;
cout<<"&arr: "<<&arr<<endl;
cout<<"arr[0]: "<<arr[0]<<endl;
cout<<"&arr[0]: "<<&arr[0]<<endl;

cout<<"ptr: "<<ptr<<endl;
cout<<"&ptr: "<<&ptr<<endl;
cout<<"*ptr: "<<*ptr<<endl;

cout<<"ptr2: "<<ptr2<<endl;
cout<<"&ptr2: "<<&ptr2<<endl;
cout<<"*ptr2: "<<*ptr2<<endl;

cout<<"*ptr+1: "<<*ptr+1<<endl;
cout<<"*(ptr)+2: "<<*(ptr)+2<<endl;

cout<<"*(ptr2)+2: "<<*(ptr2)+2<<endl;
cout<<"*(ptr2+4): "<<*(ptr2+4)<<endl;

cout<<"Size of arr: "<<sizeof(arr)<<endl;
cout<<"Size of ptr: "<<sizeof(ptr)<<endl;
```

### Pointer In Char

```cpp
char ch[50] = "Hello";

char* cptr = ch;
// char* cptr = &ch;

cout<<"ch: "<<ch<<endl;
cout<<"&ch: "<<&ch<<endl;
cout<<"ch[0]: "<<ch[0]<<endl;
cout<<"&ch[0]: "<<&ch[0]<<endl;

cout<<"cptr: "<<cptr<<endl;

cout<<"*cptr: "<<*cptr<<endl;
cout<<"*(cptr): "<<*(cptr)<<endl;
cout<<"*(cptr+0): "<<*(cptr+0)<<endl;
cout<<"cptr[0]: "<<cptr[0]<<endl;
```

### Pointers in Function

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve(int *arr, int size){
cout<<"Size of array inside function: "<<sizeof(arr)<<endl;
}
int main() {

  int arr[] = {1, 2, 3, 4, 5};

  cout<<"Size of array outside function: "<<sizeof(arr)<<endl;

  solve(arr, 5);

return 0;
};
```

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve(int *arr, int size){
cout<<"Inside solve function - arr: "<<arr<<endl;
cout<<"Inside solve function - &arr: "<<&arr<<endl;
}
int main() {

  int arr[] = {1, 2, 3, 4, 5};

  solve(arr, 5);

  cout<<"Inside main - arr: "<<arr<<endl;
  cout<<"Inside main - &arr: "<<&arr<<endl;

return 0;
};

// Inside solve function - arr: 0x61fefc
// Inside solve function - &arr: 0x61fee0✅
// Inside main - arr: 0x61fefc
// Inside main - &arr: 0x61fefc
```

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve2(int *arr, int size){
  *arr = *arr + 1;
}

int main() {

 int arr[] = {1, 2, 3, 4, 5};

  solve2(arr, 5);
  for(int i = 0; i < 5; i++){
    cout<<arr[i]<<" ";
  }

return 0;
};

// 2 2 3 4 5
```

### Pointer to Pointer

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
int num = 5;

int *ptr = &num;
int **dptr = &ptr;
// int **dptr = &num; // Error

cout << "Value of num: " << num << endl;
cout << "Address of num: " << &num << endl;

cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

cout << "Value of dptr: " << dptr << endl;
cout << "Address of dptr: " << &dptr << endl;
cout << "Value of *dptr: " << *dptr << endl;
cout << "Value of **dptr: " << **dptr << endl;

return 0;
};
```

```cpp
Value of num: 5
Address of num: 0x61ff0c
Value of ptr: 0x61ff0c
Address of ptr: 0x61ff08
Value of *ptr: 5
Value of dptr: 0x61ff08
Address of dptr: 0x61ff04
Value of *dptr: 0x61ff0c
Value of **dptr: 5
```

```cpp
// Pass by value

#include <bits/stdc++.h>
using namespace std;

void solve(int* ptr) {
  ptr = ptr + 1;
}
int main() {
int num = 5;

int *ptr = &num;

cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

solve(ptr);
cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

return 0;
};

// Value of ptr: 0x61ff08
// Address of ptr: 0x61ff04
// Value of *ptr: 5
// Value of ptr: 0x61ff08
// Address of ptr: 0x61ff04
// Value of *ptr: 5
```

```cpp
// Pass by reference

#include <bits/stdc++.h>
using namespace std;

void solve(int* &ptr) {
  ptr = ptr + 1;
}
int main() {
int num = 5;

int *ptr = &num;

cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

solve(ptr);
cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

return 0;
};

// Value of ptr: 0x61ff08
// Address of ptr: 0x61ff04
// Value of *ptr: 5
// Value of ptr: 0x61ff0c
// Address of ptr: 0x61ff04
// Value of *ptr: 6422276
```

## Memory Management

## JavaScript

Dynamic Memory Allocation

- JavaScript is a dynamically typed language, where memory allocation and deallocation happen automatically.
- Whenever a variable, object, array, or function is created, space is allocated in the heap memory.

**Garbage Collection (GC)**

The core concept of memory management in JavaScript is **Garbage Collection (GC)**. It automatically frees up unused memory.

### **Stack Memory**

- Primitive types (such as `number, string, boolean, null, undefined, symbol, and bigint`) are stored in stack memory
- Execution is fast because stack memory has a fixed size.
- It follows the LIFO (Last In, First Out) principle.
- When a function executes, its local variables are stored in the stack, and once the function execution is complete, they are removed from the stack

```jsx
let a = 10; // Primitive type (Stack)
let b = a; // `b` ko `a` ka copy milta hai
b = 20; // `b` change hota hai, but `a` same rehta hai

console.log(a); // 10
console.log(b); // 20
```

```
--------------------------------------------------
|                  Stack Memory                  |
--------------------------------------------------
| b -> 20                                        |
| a -> 10                                        |
--------------------------------------------------
```

### **Heap Memory**

- Objects and reference(Non-Primitive) types (such as `arrays, functions, objects, heap, graph, tree` ) are stored in heap memory.
- Heap memory has a dynamic size, which makes it slower compared to stack memory.
- When an object is created, memory is allocated in the heap, and its reference is stored in stack memory.
- **Garbage Collector (GC)** **unused objects ko clean** karta hai jo kisi bhi reference se accessible nahi hote in JS.

```jsx
let obj1 = { name: "Rahul" }; // Heap me allocate hota hai
let obj2 = obj1; // Stack me reference copy hota hai (Heap ka address)
obj2.name = "Amit"; // Heap me change hone se dono references pe effect

console.log(obj1.name); // "Amit"
console.log(obj2.name); // "Amit"
```

```
--------------------------------------------------
|                  Stack Memory                  |
--------------------------------------------------
| obj1 -> (Heap Ref: 0x1)                        |
| obj2 -> (Heap Ref: 0x1)                        |
--------------------------------------------------

--------------------------------------------------
|                  Heap Memory                   |
--------------------------------------------------
| (0x1) -> { name: "Amit" }                      |
--------------------------------------------------
```

## C++

Manual Memory Management

In C++, the developer has to manually allocate and free memory.

### **Stack Memory** (Static Allocation)

- **Primitive data types** (int, float, char, bool, etc.) are stored in the stack
- Memory is **automatically allocated and freed.**
- Fast execution
- It is managed with **LIFO (Last In, First Out)** order during function execution
- **Local variables** are also stored in stack memory

```cpp
#include <iostream>
using namespace std;

void stackExample() {
    int a = 10; // Stack memory allocation
    int b = a;  // `b` ko `a` ka copy milta hai
    b = 20;     // `b` change hota hai, par `a` same rehta hai

    cout << "a: " << a << endl; // 10
    cout << "b: " << b << endl; // 20
}

int main() {
    stackExample();
    return 0;
}
```

```
--------------------------------------------------
|                Stack Memory                    |
--------------------------------------------------
| b -> 20                                        |
| a -> 10                                        |
--------------------------------------------------
```

✅ **Stack memory fast hoti hai** kyunki iska **fixed size** hota hai aur automatically free ho jati hai.

### Heap Memory (Dynamic Allocation)

- Memory **must be manually allocated and freed** by the developer.
- The `new` operator is used to allocate memory.
- The `delete` operator is used to free memory.
- **Objects, Arrays, Pointers, Linked Lists, Graphs, and Trees** are stored in heap memory.

```cpp
#include <iostream>
using namespace std;

void heapExample() {
    int* ptr = new int(10); // Heap memory allocation
    cout << "Value: " << *ptr << endl; // 10

    delete ptr; // Heap memory free karna zaroori hai
}

int main() {
    heapExample();
    return 0;
}
```

```
--------------------------------------------------
|                Stack Memory                    |
--------------------------------------------------
| ptr -> (Heap Ref: 0x1)                         |
--------------------------------------------------

--------------------------------------------------
|                Heap Memory                     |
--------------------------------------------------
| (0x1) -> 10                                    |
--------------------------------------------------
```

✅ `ptr` **stack memory me store hota hai** par iska actual data **heap memory me store hota hai**.

✅ `delete ptr;` likhna zaroori hai, nahi to **memory leak ho sakta hai**.

## **JavaScript vs C++ Memory Management**

| Feature                 | JavaScript                                      | C++                                                 |
| ----------------------- | ----------------------------------------------- | --------------------------------------------------- |
| **Memory Allocation**   | Automatic (Dynamic)                             | Manual (`new` and `delete`)                         |
| **Garbage Collection**  | Yes (GC handles it)                             | No (Developer has to handle it)                     |
| **Risk of Memory Leak** | Less, but possible (closures, global variables) | High if `delete` not used properly                  |
| **Stack Storage**       | Primitive types                                 | Local variables, function calls                     |
| **Heap Storage**        | Objects, Arrays, Functions                      | Objects, Arrays, Pointers, Linked Lists             |
| **Performance**         | Slower (GC overhead)                            | Faster (manual control)                             |
| **Best For**            | Web apps, scripting, UI development             | System programming, Game dev, High-performance apps |
| **Smart Pointers?**     | ❌ No need                                      | ✅ Yes (C++11+)                                     |

| **JavaScript**                                            | **C++**                                             |
| --------------------------------------------------------- | --------------------------------------------------- |
| **Automatic memory management** (Garbage Collector)       | **Manual memory management** (`new` and `delete`)   |
| **Memory leaks possible** (Closures, global scope issues) | **Memory leaks possible** (if `delete` is missed)   |
| **Good for ease of use** (less developer effort)          | **Good for performance** (more control over memory) |

## Passing Function Arguments by Reference

### JavaScript

In JavaScript, function arguments can be passed in both ways.

1. Pass by value [Copy Create] → Primitive types (`number, string, boolean, etc.`)
2. Pass by reference →Objects and Arrays

Pass by Value (Primitives)

```jsx
function modifyValue(x) {
  x = 20; // x ka local copy modify ho raha hai
  console.log("Inside function:", x); // 20
}

let a = 10;
modifyValue(a);
console.log("Outside function:", a); // 10 (No change)
```

✅ **Yaha `a` ka copy function me pass hota hai, original value change nahi hoti.**

Pass by Reference (Objects & Arrays)

```jsx
function modifyObject(obj) {
  obj.name = "Amit"; // Heap memory me actual object modify ho raha hai
}

let person = { name: "Rahul" };
modifyObject(person);
console.log(person.name); // "Amit" (Original object change ho gaya)
```

### C++

Default → Pass by Value

Pass by Value (Copy)

```cpp
#include <iostream>
using namespace std;

void modifyValue(int x) {
    x = 20; // x ka local copy modify ho raha hai
    cout << "Inside function: " << x << endl; // 20
}

int main() {
    int a = 10;
    modifyValue(a);
    cout << "Outside function: " << a << endl; // 10 (No change)
    return 0;
}
```

Pass by Reference (Using `&`)

```cpp
#include <iostream>
using namespace std;

void modifyReference(int &x) {
    x = 20; // Original variable modify ho raha hai
}

int main() {
    int a = 10;
    modifyReference(a);
    cout << "Outside function: " << a << endl; // 20 (Value changed!)
    return 0;
}
```

Pass by Reference Using Pointers (`*`)

```cpp
#include <iostream>
using namespace std;

void modifyPointer(int* x) {
    *x = 30; // Pointer dereference karke value change ho rahi hai
}

int main() {
    int a = 10;
    modifyPointer(&a);
    cout << "Outside function: " << a << endl; // 30
    return 0;
}
```

| Feature                           | JavaScript                               | C++                                    |
| --------------------------------- | ---------------------------------------- | -------------------------------------- |
| **Pass by Value**                 | Primitive types (`number, string, etc.`) | Default behavior                       |
| **Pass by Reference**             | Objects, Arrays                          | Using `&` (Reference) or `*` (Pointer) |
| **Can Modify Original Variable?** | Yes (for Objects)                        | Yes (if passed by reference)           |
| **Explicit Reference Passing?**   | ❌ No need (Implicit for Objects)        | ✅ `&` (Reference) and `*` (Pointer)   |

## Handling Arrays and Strings

### JavaScript

In JavaScript, **arrays and strings are dynamically allocated**, and built-in methods make them easy to handle.

**Arrays In JavaScript**

- Arrays are **dynamic in size**.
- Methods like `push()`, `pop()`, `map()`, `filter()` help in manipulation.

```jsx
let arr = [1, 2, 3, 4];

// Add element at the end
arr.push(5); // [1, 2, 3, 4, 5]

// Remove last element
arr.pop(); // [1, 2, 3, 4]

// Map function (doubles each element)
let newArr = arr.map((num) => num * 2); // [2, 4, 6, 8]

console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [2, 4, 6, 8]
```

Strings In JavaScript

- Strings are **immutable** (cannot be modified in place).
- Built-in methods like `slice()`, `substring()`, `replace()`, `split()` are commonly used.

```jsx
let str = "Hello, World!";

// Extract substring
console.log(str.slice(0, 5)); // "Hello"

// Convert to uppercase
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// Replace substring
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// Split string into an array
console.log(str.split(", ")); // ["Hello", "World!"]
```

### C++

In C++, **arrays and strings involve manual memory management**.

Arrays In C++

- Arrays in C++ have a **fixed size**.
- **Vectors** are used for **dynamic arrays**.

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[4] = {1, 2, 3, 4}; // Fixed-size array

    // Modify an element
    arr[1] = 10; // [1, 10, 3, 4]

    // Print elements
    for (int i = 0; i < 4; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}

// Output: 1 10 3 4

//  ✅ C++ arrays are static in size and cannot be resized.
```

```cpp
// ✅ C++ vectors are dynamic and can resize automatically.

#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4};

    // Add element
    vec.push_back(5); // [1, 2, 3, 4, 5]

    // Remove last element
    vec.pop_back(); // [1, 2, 3, 4]

    // Modify an element
    vec[1] = 10; // [1, 10, 3, 4]

    // Print elements
    for (int num : vec) {
        cout << num << " ";
    }
    return 0;
}

// Output: 1 10 3 4
```

Strings In C++

- Strings in C++ are **mutable**.
- **C-style strings (`char array`) and `std::string` are both supported.**

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";

    // Extract substring
    cout << str.substr(0, 5) << endl; // "Hello"

    // Convert to uppercase (using loop)
    for (char &c : str) {
        c = toupper(c);
    }
    cout << str << endl; // "HELLO, WORLD!"

    // Replace substring
    str.replace(7, 5, "C++");
    cout << str << endl; // "HELLO, C++!"

    // Split string manually
    size_t pos = str.find(", ");
    string firstPart = str.substr(0, pos);
    string secondPart = str.substr(pos + 2);
    cout << firstPart << " | " << secondPart << endl; // "HELLO | C++!"

    return 0;
}
```

| Feature               | JavaScript                        | C++                            |
| --------------------- | --------------------------------- | ------------------------------ |
| **Array Type**        | Dynamic (Resizable)               | Static (Fixed-size)            |
| **Dynamic Arrays**    | Yes (Built-in)                    | Yes (`std::vector`)            |
| **String Mutability** | Immutable                         | Mutable                        |
| **Built-in Methods**  | Many (`map(), filter(), slice()`) | Limited (Need manual logic)    |
| **Memory Management** | Automatic (Garbage Collection)    | Manual (Need to handle memory) |
