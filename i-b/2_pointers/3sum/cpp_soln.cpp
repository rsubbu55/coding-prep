#include <algorithm>
int Solution::threeSumClosest(vector<int> &A, int B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int i;
    std::sort(A.begin(), A.end());
    int l, r;
    int min_sum = A[0]+A[1]+A[2];
    int min2_sum;
    for (i=0; i< A.size()-2; ++i) {
        l = i+1;
        r = A.size()-1;
        while (l < r) {
            min2_sum = A[i]+A[l]+A[r];
            if (abs(min2_sum - B) < abs(min_sum - B)) {
                min_sum = min2_sum;
            }
            if (min_sum == B) {
                return min_sum;
            }
            if (min2_sum < B) {
                l++;
            } else {
                r--;
            }
        }
    }
    return min_sum;
    
}
