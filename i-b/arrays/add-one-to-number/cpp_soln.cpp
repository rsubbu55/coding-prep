vector<int> Solution::plusOne(vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int s=0;
    int n=A.size();
    int an = n;
    for (s=0; s<n-1; s++) {
        if (A[s] != 0) {
            break;
        }
    }
    an = n - s;
    vector<int> B(an);
    int c = 1, v =0;
    for (int i=n-1; i>=s; --i) {
        v = A[i] + c;
        B[i-s] = v % 10;
        c = v/10;
    }
    if (c) {
        B.insert(B.begin(), c);
    }
    return B;
}
