#include <stdio.h>
#include <stdlib.h>

#define min(a,b) ((a) > (b)? (b): (a))

long long unsigned int nCr(int n, int r)
{
    // nCr = n! / ((n-r)! * r!)
    r = min(r, n-r);
    long long unsigned ans = 1;
    int tr = 1;
    for (int i = n ; i>(n-r); i--) {
        ans = ans *i;
        ans = ans / tr++;
    }
    return ans;

}

long long unsigned int nPr(int n, int r)
{
    //nPr = n!/(n-r)!
    long long unsigned ans = 1;
    for (int i = n ; i>(n-r); i--) {
        ans = ans *i;
    }
    return ans;
}


int main(int argc, char *argv[])
{
    int n=0, r =0;
    if (argc == 3) {
        n = atoi(argv[1]);
        r = atoi(argv[2]);
        printf("n=%d, r=%d, nCr = %llu, nPr = %llu\n", 
                n, r, nCr(n,r), nPr(n, r));
    }
    return 0;
}

