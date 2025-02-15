#include <bits/stdc++.h>
using namespace std;
int main() {
  
  // *****************  Printing a Variable address ***************** 
// int nums = 10;
// cout<<"Address of nums: "<<&nums<<endl; // Output: Address of nums: 0x61ff08


  // ***************** Pinter Creation ***************** 
int nums = 10;
int *ptr = &nums;

// cout<<"Value of nums: "<<nums<<endl; // Output: Value of nums: 10
// cout<<"Address of nums: "<<&nums<<endl; // Output: Address of nums: 0x61ff0c
// cout<<"Value of ptr: "<<ptr<<endl; // Output: Value of ptr: 0x61ff0c
// cout<<"Value of &ptr: "<<&ptr<<endl; // Output: Value of ptr: 0x61ff08
// cout<<"Value of *ptr: "<<*ptr<<endl; // Output: Value of *ptr: 10


// ***************** Print size of integer pointer variable *****************
int a = 5;
int *b = &a;
// cout << "Size of integer pointer variable: " << sizeof(b) << " bytes" << endl; // 4 bytes


// ***************** Print size of char pointer ******************
char c = 'A';
char *d = &c;
// cout << "Size of char pointer variable: " << sizeof(d) << " bytes" << endl; // 1 byte



// ***************** Print size of long pointer ******************
long l = 10;
long *m = &l;
// cout << "Size of long pointer variable: " << sizeof(m) << " bytes" << endl;  // 4 bytes


int number = 20;
int *ptr = &number;
// cout << "Value of number: " << number << endl; // 
// cout << "Address of number: " << &number << endl; // 
// cout << "Value of ptr: " << ptr << endl; // 
// cout << "Value of *ptr: " << *ptr << endl; // 
// cout << "Value of &ptr: " << &ptr << endl; // 
// cout << "(*ptr)++: " << (*ptr)++ << endl; // 
// cout << "++(*ptr): " << ++(*ptr) << endl; // 
// cout << "*ptr = *ptr/2: " << *ptr/2 << endl; // 
// cout << "*ptr = *ptr*-2: " << *ptr*-2 << endl; // 

//  ********** Pointer Copy **********
int number1 = 30;
int *ptr1 = &number1;

int *ptr2 = ptr1;
// cout << "Value of ptr1: " << ptr1 << endl; // 
// cout << "Value of ptr2: " << ptr2 << endl; // 

// cout << "Value of *ptr1: " << *ptr1 << endl; // 
// cout << "Value of *ptr2: " << *ptr2 << endl; // 

// cout << "Value of &ptr1: " << &ptr1 << endl; // 
// cout << "Value of &ptr2: " << &ptr2 << endl; // 



// ******************* Pointer with Array *******************
int arr[5] = {1, 2, 3, 4, 5};

// arr = arr + 1;

cout << "Value of arr: " << arr << endl; // 
cout << "Value of &arr: " << &arr << endl; // 
cout << "Value of &arr[0]: " << &arr[0] << endl; //

cout << " arr[0]: " << arr[0] << endl; //  arr[0] = *(arr + 0)
cout << " *arr+1: " << *arr+1 << endl; //  arr[1] = *(arr + 1)
cout << " *arr+1: " << *arr+1 << endl; //

cout << "*arr: " << *arr << endl; //
cout << "*arr+0: " << *arr+0 << endl; //
cout << "*(arr+0): " << *(arr+0) << endl; //

cout << "Value of *arr+2: " << *arr+2 << endl; //
cout << "Value of *arr+3: " << *arr+3 << endl; //

// *(arr + i) = arr[i]
// *(i + arr) = i[arr]  

int arr[4] = {1, 2, 3, 4};

int *ptr = arr;
int *ptr2  = arr + 1;



return 0; 
};  