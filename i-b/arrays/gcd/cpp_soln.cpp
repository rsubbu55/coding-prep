int Solution::gcd(int A, int B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    if (A < B) {
        int t = A;
        A= B;
        B=t;
    }
    if (B == 0) {
        return A;
    } else if (B == 1) {
        return 1;
    }
    
    int R = A % B;
    while (R != 0) {
        //cout << "A " << A << " B " << B << " R " << R << endl;
        A = B;
        B = R;
        R = A % B;
    }
    return B;
}
