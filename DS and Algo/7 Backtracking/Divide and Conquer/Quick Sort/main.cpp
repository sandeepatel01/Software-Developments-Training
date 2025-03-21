#include <bits/stdc++.h>
using namespace std;

void quickSort(int arr[], int start, int end) {
  if (start >= end) {
    return;
  }

  int pivot = end;
  int i = start - 1;
  int j = start;

  while (j < pivot) {
    if (arr[j] < arr[pivot]) {
      i++;
      swap(arr[i], arr[j]);
    }
    j++;
  }

  i++;
  swap(arr[i], arr[pivot]);

  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
}  

int main() {
  int arr[] = {2, 1, 6, 9, 4, 5};
  int size = 6;
  int start = 0;
  int end = size - 1;

  cout << "Before sorting: ";
  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;

  quickSort(arr, start, end);

  cout << "After sorting: ";
  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
  
return 0;
};