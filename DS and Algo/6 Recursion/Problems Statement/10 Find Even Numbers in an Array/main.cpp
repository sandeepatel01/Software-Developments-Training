#include <bits/stdc++.h>
using namespace std;

void findEven(int arr[], int size, int index, vector<int> &ans) {
  if(index >= size) {
    return;
  }

  if(arr[index] % 2 == 0){
    ans.push_back(arr[index]);
  }

  findEven(arr, size, index+1, ans);
}
int main() {

int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int size = 10;
int index = 0;

vector<int> ans;
return 0;
};