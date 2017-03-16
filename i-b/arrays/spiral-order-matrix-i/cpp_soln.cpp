void print_top_right(const vector<vector<int>> &A, int frow, int fcol, int lrow, int lcol,
                     vector<int> &result);

void print_bottom_left(const vector<vector<int>> &A, int frow, int fcol, int lrow, int lcol,
                     vector<int> &result);


vector<int> Solution::spiralOrder(const vector<vector<int> > &A) {
	vector<int> result;

	int m=A.size();
	int n=A[0].size();
	int frow = 0;
	int lcol = n-1;
	// DO STUFF HERE AND POPULATE result
	print_top_right(A, 0, 0, m-1, n-1, result);
	return result;
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
}

void print_top_right(const vector<vector<int>> &A, int frow, int fcol, int lrow, int lcol,
                     vector<int> &result)
{
    if (frow > lrow || lcol < fcol) {
        return;
    }
    //cout << " tr [";
    for (int j=fcol; j<=lcol; ++j) {
        result.push_back(A[frow][j]);
        //cout << A[frow][j];
    }
    for (int i=frow+1; i<=lrow; ++i) {
        result.push_back(A[i][lcol]);
        //cout << A[i][lcol];
    }
    //cout << "] ";
    print_bottom_left(A, frow+1, fcol, lrow, lcol-1, result);
}

void print_bottom_left(const vector<vector<int>> &A, int frow, int fcol, int lrow, int lcol,
                     vector<int> &result)
{
    if (frow > lrow || lcol < fcol) {
        return;
    }
    //cout << " bl [";
    for (int j=lcol; j>=fcol; --j) {
        result.push_back(A[lrow][j]);
        //cout << A[lrow][j];
    }
    for (int i=lrow-1; i>=frow; --i) {
        result.push_back(A[i][fcol]);
        //cout  << A[i][fcol];
    }
    //cout << "] ";
    print_top_right(A, frow, fcol+1, lrow-1, lcol, result);
}
