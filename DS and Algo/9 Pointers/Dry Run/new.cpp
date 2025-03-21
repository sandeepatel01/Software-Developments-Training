#include <bits/stdc++.h>
using namespace std;

void solve(int *arr, int size){
cout<<"Inside solve function - arr: "<<arr<<endl;
cout<<"Inside solve function - &arr: "<<&arr<<endl;
}

void solve2(int *arr, int size){
  *arr = *arr + 1;
}
int main() {

  int arr[] = {1, 2, 3, 4, 5};

  solve(arr, 5);

  cout<<"Inside main - arr: "<<arr<<endl;
  cout<<"Inside main - &arr: "<<&arr<<endl;

  solve2(arr, 5);

  for(int i = 0; i < 5; i++){
    cout<<arr[i]<<" ";
  }

return 0;
}; 



 