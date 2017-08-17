#include <iostream>
#include <vector>
#include <string>

using namespace std;

bool is_safe(int A, vector<string> tmp_sol, int r, int c)
{
        //any other col in this row clashes
        for (int i=0; i<A; ++i) {
                if (tmp_sol[i][c] == 'Q') {
                        return false;
                }
        }
        int x,y;

        // any forward diagonal
        x= r; y = c;
        x = x-1;
        y = y+1;
        while (x <A && x>=0 && y >=0 && y < A) {
                if (tmp_sol[x][y] == 'Q') {
                        return false;
                }
                x = x-1;
                y = y+1;
        }
        x= r; y = c;
        x = x+1;
        y = y-1;
        while (x <A && x>=0 && y >=0 && y < A) {
                if (tmp_sol[x][y] == 'Q') {
                        return false;
                }
                x = x+1;
                y = y-1;
        }
        // amy reverse diagonal
        x= r; y = c;
        x = x-1;
        y = y-1;
        while (x <A && x>=0 && y >=0 && y < A) {
                if (tmp_sol[x][y] == 'Q') {
                        return false;
                }
                x = x-1;
                y = y-1;
        }
        x= r; y = c;
        x = x+1;
        y = y+1;
        while (x <A && x>=0 && y >=0 && y < A) {
                if (tmp_sol[x][y] == 'Q') {
                        return false;
                }
                x = x+1;
                y = y+1;
        }
        return true;

}

void print_sol(vector<string> &tmp)
{
        static int c=0;
        for (string &x: tmp) {
                cout << x << endl;
        }
        cout << "                      \n";

}

void solveNQ_util(int A, int row, vector<vector<string>> &all_sol, vector<string> tmp_sol)
{
        int i;
        if (row == A) {
                //cout << "1\n";
                //print_sol(tmp_sol);
                all_sol.push_back(tmp_sol);
                return;
        }
        for (i=0; i<A; ++i) {
                if (is_safe(A, tmp_sol, row, i)) {
                        tmp_sol[row][i] = 'Q';
                        solveNQ_util(A, row+1, all_sol, tmp_sol);
                        tmp_sol[row][i] = '.';
                }
        }
}

vector<vector<string> > solveNQueens(int A) {
        // Do not write main() function.
        // Do not read input, instead use the arguments to the function.
        // Do not print the output, instead return values as specified
        // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
        int i;
        vector<vector<string>> all_sol;
        vector<string> tmp_sol;
        string row;
        for (i=0; i<A; ++i) {
                row.append(".");
        }
        for (i=0; i<A; ++i) {
                tmp_sol.push_back(row);
        }
        solveNQ_util(A, 0, all_sol, tmp_sol);

        return all_sol;
}

int main(int argc, char *argv[])
{
        int N = 4;
        if (argc == 2) {
                N = atoi(argv[1]);
        }
        vector<vector<string>> res = solveNQueens(N);

        cout << "solveNQueens N= ," << N << " num solutions=" << res.size() << endl;
#ifdef DEBUG
        for (int i=0; i<res.size(); ++i) {
                cout << "sol: " << i << endl;
                vector<string> &tmp = res[i];
                print_sol(tmp);
        }
#endif
        return 0;
}
