void swap(int &a, int &b)
{
    int t = a;
    a= b;
    b = t;
}

void print_vec(vector<int> &A)
{
    cout << "[ ";
    for (int &i : A) {
        cout << i << ", ";
    }
    cout << "]\n";
}

void permute_util(vector<vector<int>> &sol, vector<int> &A, int start, int end)
{
    if (start == end) {
        print_vec(A);
        sol.push_back(A);
    }
    for (int i=start; i<=end; ++i) {
        swap(A[start], A[i]);
        permute_util(sol, A, start+1, end);
        swap(A[i], A[start]); // backtrack
    }
}

vector<vector<int> > permute(vector<int> &A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    vector<vector<int>> sol;
    permute_util(sol, A, 0, A.size()-1);
    return sol;
}


int main()
{
        vector<int> x = {1,2,3};
        vector<vector<int>> sol = permute(x);
}
