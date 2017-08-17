// out of place solution
#include <iostream>
#include <vector>
using namespace std;

class Solution {
    
public:
    int next_val(vector<vector<int>>& board, int i, int j)
    {
        int R = board.size();
        int C = board[0].size();
        int count = 0;
        int r, c;
        for (r=i-1; r<=i+1; ++r) {
            if (r < 0 or r>=R) {
                continue;
            }
            for (c=j-1;c<=j+1; ++c) {
                if (c<0 or c>=C) {
                    continue;
                }
                if (r == i && c == j) {
                    continue;
                }                
                count += board[r][c];
            }
        }
        switch (count) {
            case 0:
            case 1:
                return 0;
                break;
            case 2:
                return board[i][j];
            case 3:
                return 1;
            default:
                return 0;
        }
    }
    
    void gameOfLife(vector<vector<int>>& board) {
        vector<vector<int>> old_board(board);
        for (int i=0; i<old_board.size(); ++i) {
            for (int j=0; j<old_board[i].size(); ++j) {
                board[i][j] = next_val(old_board, i, j);
            }
        }
    }

    void print_board(vector<vector<int>>& b) {
            for (int i=0; i<b.size(); ++i) {
                    for (int j = 0; j< b[i].size(); ++j) {
                            cout << b[i][j] << ", ";
                    }
                    cout << endl;
            }
    }
};


int main()
{
        Solution sol;
        vector<vector<int>> b = {{0,0,0}, {1,1,1}, {0,0,0}};
        sol.print_board(b);
        sol.gameOfLife(b);
        sol.print_board(b);
}
