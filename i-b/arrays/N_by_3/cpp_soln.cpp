#include <algorithm>

#define DEBUG_ON 
#ifdef DEBUG_ON
#define debug(fmt, ...) printf(fmt, ##__VA_ARGS__)
#else
#define debug(fmt, ...) 
#endif

int Solution1_O_nlogn(const vector<int> &A)
{
    /* based on sorting */
    vector <int> B(A);
    std::sort(B.begin(), B.end());
    int c = 1;
    int cur_num = B[0];
    for (int i=1; i<B.size(); ++i) {
        //cout << "i= " << i << "B[i] = " << B[i] << endl
        if (B[i-1] == B[i]) {
            ++c;
            if (c > B.size()/3 ) {
                cur_num = B[i];
                break;
            }
        } else {
            c = 1;
            cur_num = B[i];
        }
    }
    if (c < B.size()/3) {
        return -1;
    }
    
    return cur_num;
}

struct element {
    int val;
    int count;
    element() {
        val = -1;
        count = 0;
    }
    element(int v, int c) : val(v), count(c) {}
    
    bool operator ==(const element &b) const
    {
        return (this->val == b.val);
    }
    
    bool operator !=(const element &b) const
    {
        return not (*this == b);
    }
};

bool remove_if_zero(element &x)
{
    return (x.count == 0);
}

int Solution2_O_n(const vector<int> &A)
{
    int k = 3;
    vector<element> repeat;
    
    if (not A.size()) {
        return -1;
    }
    
    int total_count = A.size();
    
    element e1(A[0], 1);
    repeat.push_back(e1);

    
    for (int i=1; i<A.size(); ++i) {
        element tmp(A[i], 1);
        auto it = find(repeat.begin(), repeat.end(), tmp);
        if (it != repeat.end()) {
            debug("found tmp(%d) in repeat(%d) count(%d)\n",
                    tmp.val, it->val, it->count);
            it->count++;
        } else {
            debug("not found tmp(%d) in repeat w/ size(%d)\n",
                    tmp.val, (int)repeat.size());
            if (repeat.size() < k-1) {
                repeat.push_back(tmp);
            } else {
                debug("trying to remove el from repeat\n");
                for (auto it = repeat.begin(); it != repeat.end(); ) {
                    --it->count;
                    debug("e.val :%d, e.count: %d\n", it->val, it->count);
                    if (not it->count) {
                        repeat.erase(it);
                    } else {
                        it++;
                    }
                }
                /*repeat.erase(std::remove_if(repeat.begin(), repeat.end(), remove_if_zero),
                             repeat.end());*/
                debug("after remove total_count=%d\n", total_count - k);
                for (element e : repeat) {
                    debug("e.val :%d, e.count: %d\n", e.val, e.count);
                }
                total_count -= (k);
                
            }
        }
    }
    
    for (element e : repeat) {
        if ((e.count * k) > total_count) {
            return e.val;
        }
    }
    return -1;
}

int Solution::repeatedNumber(const vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    
    //return Solution1_O_nlogn(A);
    return Solution2_O_n(A);


    
}

