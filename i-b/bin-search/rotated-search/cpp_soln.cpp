#include <stdio.h>

//#define DEBUG
#ifdef DEBUG
#define debug(fmt, args...) printf(fmt, ##args)
#else
#define debug(fmt, args...)
#endif

int sch_infl(const vector<int> &A, int l, int r)
{
    int mid = l + (r-l)/2;
    //debug("%s: l=%d, r=%d, mid=%d\n", __func__, l, r, mid);
    if (l >= r) {
        return l;
    }
    if (A[mid] <= A[l]) {
        return sch_infl(A, l, mid-1);
    } else {
        return sch_infl(A, mid, r);
    }
}

int sch_normal(const vector<int> &A, int l, int r, int B)
{
    int mid;
    debug("sch_normal l=%d, r=%d\n", l, r);
    while (l <= r) {
        mid = l + (r-l)/2;
        if (A[mid]>B) {
            r = mid - 1;
        } else if (A[mid]<B) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

int Solution::search(const vector<int> &A, int B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int l = 0, r = A.size()-1;
    int infl = 0, sch_left = -1, sch_right = -1;
    
    infl = sch_infl(A, l, r);
    debug("infl=%d\n", infl);
    
    sch_left = sch_normal(A, 0, infl, B);
    sch_right = sch_normal(A, infl+1, r, B);
    debug("sch_left=%d, sch_right=%d\n", sch_left, sch_right);
    
    if (sch_left == -1) {
        return sch_right; 
    } else {
        return sch_left;
    }
}

