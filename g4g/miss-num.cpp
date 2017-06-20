/* You are required to complete this function
which return the required missing number
if present else return -1*/
#include <iostream>
#include <vector>
using namespace std;

//#include<bits/stdc++.h>
const int MAX_DIGITS = 5;

int missingNumber(const string& str);

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        string str;
        cin>>str;
        cout << missingNumber(str)<<endl;
    }
        return 0;
}

int find_missing_number(const string& str, int dig_size)
{
    std::vector<int> ret;
    ret.clear();

    int k=0;
    char astr[7];
    memset(astr, 0, sizeof(astr));
    int last_num = 0;
    bool first=true;
    for (int j=0; j<str.size();) {
        astr[k++] = str[j++];   
        if (k == dig_size) {
            int a = atoi(astr);
            if (first != true) {
                if (a != last_num+1 or a != last_num +2) {
                    astr[k++] = str[j++];
                    a=atoi(astr);
                    if (a != last_num+1 or a != last_num +2) {
                        return -1;
                    } else {
                        //printf("a=%d, last_num=%d", a, last_num);
                        dig_size++;
                    }
                }
            } else {
                first = false;
                last_num = a;
            }
            ret.push_back(a);
            k = 0;
            memset(astr, 0, sizeof(astr));
        }
    }
    int missing=-1;
    if (ret.size() < 2) {
        return -1;
    }
    // find missing or check validity]
    for (int i=1; i<ret.size(); i++) {
        if (ret[i] == ret[i-1]+2) {
            missing = ret[i-1]+1;
        } else if (ret[i] != ret[i-1]+1){
            missing = -1;
            break;
        }
    }
    return missing;
}

int missingNumber(const string& str)
{
    // Code here
    // str len should be even
    // based on len we can figure what is the max digit number it can be
    // check consecutive three numbers to find the digit size
    
    int len = str.size();
    int miss = -1;
    int digit_size_len[7] = {0,0,0,0,0,0,0};
    for (int i=1; i<=6; i++) {
        if (len % i == 0) {
            digit_size_len[i] = len/i;
            miss = find_missing_number(str, i);
            if (miss != -1) {
                return miss;
            }
        } else {
            digit_size_len[i] = 0;
        }
    }
    return miss;
}
