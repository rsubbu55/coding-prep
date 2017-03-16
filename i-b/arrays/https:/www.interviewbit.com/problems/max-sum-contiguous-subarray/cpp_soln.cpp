#include<stdio.h>

//O(1) space solution
int maxSubArrayO1(const vector<int> &A)
{
    int max_sum = A[0];
    int cur_sum = 0;
    for (int i=0; i<A.size(); ++i) {
        cur_sum += A[i];
        if (cur_sum > max_sum) {
            max_sum = cur_sum;
        }
        if (cur_sum < 0) {
            cur_sum = 0;
        }
    }
    return max_sum;
}

//O(n) space solution with addutional array
int maxSubArrayOn(const vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    if (not A.size()) {
        return -1;
    } else if (A.size() == 1) {
        return A[0];
    }
    vector<int> B(A);
    //printf("b.size=%u\n", B.size());
    for (int i = B.size()-2; i>=0 ; --i) {
        //printf("b[i]=%d, b[i+1]=%d\n", B[i], B[i+1]);
        if ((B[i] + B[i+1]) > B[i]) {
            B[i] = B[i] + B[i+1];
        }
    }
    int max=B[0];
    for (int i=1; i<B.size(); ++i) {
        if (B[i]>max) {
            max = B[i];
        }
    }
    return max;
}


int Solution::maxSubArray(const vector<int> &A) {
    return maxSubArrayO1(A);
    // return maxSubArrayOn(A);
}
