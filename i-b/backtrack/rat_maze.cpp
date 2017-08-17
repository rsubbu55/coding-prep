#include <iostream>
#include <vector>
#include <string>

using namespace std;

#define MAX 8

bool is_safe(int m[MAX][MAX], int n, int x, int y)
{
    return (x >= 0 && x < n && y >=0 && y < n && m[x][y] == 1);
}


void find_path(int m[MAX][MAX], int n, int x, int y, string &sol, vector<string> &all_sol)
{
    if (x == n-1 and y == n-1) {
        all_sol.push_back(sol);
        //sol.clear();
        //cout << sol << "\n";
        return;
    }
    if (is_safe(m, n, x, y)) {
        // D, L , R, U in ascending order
        m[x][y] = 0;
        sol.append("D");
        find_path(m, n, x+1, y, sol, all_sol);
        sol.pop_back();
        sol.append("L");
        find_path(m, n, x, y-1, sol, all_sol);
        sol.pop_back();
        sol.append("R");
        find_path(m, n, x, y+1, sol, all_sol);
        sol.pop_back();
        sol.append("U");
        find_path(m, n, x-1, y, sol, all_sol);
        sol.pop_back();
        m[x][y] = 1;
    } else {
        return;
    }
}



/*The function returns a sorted array of strings which represents
the directions mouse will take to reach the destination.
You are required to complete the below method. */
vector<string> printPath(int m[MAX][MAX], int n)
{
    //Your code here
    vector<string> all_sol;
    string sol;
    find_path(m, n, 0, 0, sol, all_sol);
    return all_sol;
}

int main()
{
        int maze[8][8] = {
                {1, 1, 1, 0, 1, 1, 1, 1},
                {0, 0, 1, 1, 1, 0, 0, 1,},
                {0, 0, 0, 0, 0, 0, 0, 1,},
                {1, 1, 1, 0, 1, 1, 1, 1,},
                {1, 0, 1, 1, 1, 0, 0, 0,},
                {1, 1, 0, 0, 0, 1, 1, 1,},
                {0, 1, 1, 1, 1, 1, 0, 1,},
                {0, 0, 0, 0, 0, 1, 1, 1,},
        };
        vector<string> res = printPath(maze, 8);
        for (string &s: res) {
                cout << s << endl;
        }
}
