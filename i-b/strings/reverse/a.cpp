//#define DEBUG
#ifdef DEBUG
#define debug(fmt, args...) printf(fmt, ##args)
#else
#define debug(fmt, args...) 
#endif

void swap(string &A, int i, int j)
{
    char c;
    c=A[i];
    A[i] = A[j];
    A[j] = c;
}

void reverse(string &A, int start, int end)
{
    debug("A=%s, start=%d, end=%d\n", A.c_str(), start, end);
    for (int i=start; i< start + (end-start)/2+1; ++i) {

        swap(A[i], A[end-i+start]);
    }
}

void find_words_and_reverse(string &A)
{
    int start = 0, end = 0;
    int i = 0;
    while (i < A.size()) {
        while (A[i] == ' ' and i < A.size()) {
            ++i;
        }
        if (i == A.size()) {
            break;
        }
        start = i++;
        while (A[i] != ' ' and i < A.size()) {
            ++i;
        }
        end = i-1;
        reverse(A, start, end);
    }
}

void truncate(string &A)
{
    int i=0, j=0;
    while(i<A.size()) {
        while(A[j] == ' ' and j < A.size()) {
            ++j;
        }
        if (j == A.size()) {
            break;
        }
        // copy
        while(A[j] != ' ' and j < A.size()) {
            A[i++] = A[j++];
        }
        if (j == A.size()) {
            break;
        }
        A[i++] = A[j++];
    }
    if (i > 0 and A[i-1] == ' ') {
        --i;
    }
    if (i < A.size()) {
        A.resize(i);
    }
}

void Solution::reverseWords(string &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    debug("input =%s\n", A.c_str());
    reverse(A, 0, A.size()-1);
    debug("after reverse =%s\n", A.c_str());
    find_words_and_reverse(A);
    debug("after reverse words=%s\n", A.c_str());
    truncate(A);
    debug("after truncate=%s\n", A.c_str());
}
