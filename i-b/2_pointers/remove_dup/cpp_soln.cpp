int Solution::removeDuplicates(vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int i=0, j = 1;
    if (A.size() <= 1) {
        return A.size();
    }
    while (j<A.size()) {
        if (A[j] != A[i]) {
            A[++i] = A[j];
        }
        ++j;
    }
    A.resize(i+1);
    return A.size();
}

