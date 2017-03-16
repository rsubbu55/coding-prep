#include <iostream>
#include <stdio.h>
vector<vector<int> > Solution::generate(int A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    vector<vector<int>> B;
    if (A == 0) {
        return B;
    } else if (A) {
        B.push_back({1});
    }
    for (int i=1; i<A; ++i) {
        vector<int> row(i+1);
        row [0] = 1;
        row [i] = 1;
        for (int j=1; j<i; ++j) {
            row[j] = B[i-1][j-1] + B[i-1][j];
            //printf("%d ", row[j]);
        }
        B.push_back(row);
        //printf("\n");
    }
    return B;
}

