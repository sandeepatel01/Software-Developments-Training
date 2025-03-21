#include <bits/stdc++.h>
using namespace std;

void solve(int* &ptr) {
  ptr = ptr + 1;
}
int main() {
int num = 5;

int *ptr = &num;
int **dptr = &ptr;

// int **dptr = &num; // Error

// cout << "Value of num: " << num << endl;
// cout << "Address of num: " << &num << endl;

cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

solve(ptr);
cout << "Value of ptr: " << ptr << endl;
cout << "Address of ptr: " << &ptr << endl;
cout<< "Value of *ptr: " << *ptr << endl;

// cout << "Value of dptr: " << dptr << endl;
// cout << "Address of dptr: " << &dptr << endl;
// cout << "Value of *dptr: " << *dptr << endl;
// cout << "Value of **dptr: " << **dptr << endl;

return 0;
};

