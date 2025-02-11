#include <bits/stdc++.h>
using namespace std;

void findMin(int arr[], int size, int index, int &mini){
  if(index >= size){
    return;
  }

  mini = min(mini, arr[index]);

  findMin(arr, size, index+1, mini);
}
int main() {
  int arr[] = {-5, 0, -2};
  int size = 3;
  int index = 0;
  int mini = INT_MAX;

  findMin(arr, size, index, mini);
  cout<<mini<<endl;

return 0;
};