vector<int> Solution::intersect(const vector<int> &A, const vector<int> &B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    vector<int> C;
    int i=0, j=0;
    while (i < A.size() and j < B.size()) {
        if (A[i] == B[j]) {
            C.push_back(A[i]);
            ++i;
            ++j;
        } else if (A[i]<B[j]) {
            ++i;
        } else {
            ++j;
        }
    }
    return C;
}
