#include <algorithm>

vector<int> Solution::wave(vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    std::sort(A.begin(), A.end());
    for (int i=0; i<A.size() && (i+1) < A.size(); i=i+2) {
        int t = A[i];
        A[i] = A[i+1];
        A[i+1] = t;
    }
    return A;
}
