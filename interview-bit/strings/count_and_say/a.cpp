#include <stdio.h>
#include <string>

using namespace std;
//#define DEBUG

#ifdef DEBUG
#define debug(fmt, args...) printf(fmt, ##args)
#else
#define debug(fmt, args...)
#endif

string countsay(int n)
{
    string ret, tmp;
    if (n==1) {
        return "1";
    } else if (n < 1) {
        return "0";
    }
    tmp = countsay(n-1);
    debug("n-1=%d, tmp=%s\n", n-1, tmp.c_str());
    int i=0, j=1;
    for (i=0; i<tmp.size(); i=j) {
        int c=1;
        for (j=i+1; j<tmp.size(); ++j) {
            if (tmp[j] == tmp[i]) {
                ++c;
            } else {
                break;
            }
        }
        debug("c=%d, i=%d, tmp[i]=%c\n", c, i, tmp[i]);
        ret += std::to_string(c) + tmp[i];
    }
    debug("n=%d, ret=%s\n", n, ret.c_str());
    return ret;
}

string Solution::countAndSay(int A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    return countsay(A);
}

