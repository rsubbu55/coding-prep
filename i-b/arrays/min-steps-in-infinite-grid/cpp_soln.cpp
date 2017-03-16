// Input : X and Y co-ordinates of the points in order. 
// Each point is represented by (X[i], Y[i])
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
int Solution::coverPoints(vector<int> &X, vector<int> &Y) {
    
       int s1=X.size(), s2=Y.size(),ans=0;

    for(int i=1;i<s1;i++)

    {

        ans = ans + (abs(X[i]-X[i-1])<abs(Y[i]-Y[i-1])?abs(Y[i]-Y[i-1]):abs(X[i]-X[i-1]));

    }

    return ans;
#if 0
    int c=0;
    int x, y;
    if (X.size() and Y.size()) {
        x=X[0];
        y=Y[0];
        unsigned int i;
        for (i=1; (i<X.size() && i<Y.size()) ; ++i) {

            while( not(x==X[i] and y==Y[i]) ) {
                if (X[i]>x) {
                    x++;
                } else if (X[i]<x) { 
                    x--;
                }
                if (Y[i]>y) {
                    y++;
                } else if (Y[i]<y) {
                    y--;
                }
                c++;
                //printf("at %d,%d c=%d\n", x, y, c);
            }

        }

        for (; i<X.size(); ++i) {
            if(X[i] != x) {
                c = c + abs(X[i]-x);
                x=X[i];
            }
        }

        for (; i<Y.size(); ++i) {
            if (Y[i] != y) {
                c = c + abs(Y[i]-y);
                y = Y[i];
            }
        }

        
    }
    return c;
#endif
}

