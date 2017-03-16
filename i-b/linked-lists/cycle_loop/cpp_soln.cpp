/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
ListNode* Solution::detectCycle(ListNode* A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    
    // find a meeting point
    ListNode *h = A; ListNode *t = A;
    bool found_loop = false;
    while (h and h->next and t) {
        h = h->next->next;
        t = t->next;
        if (h == t) {
            found_loop = true;
            break;
        } 
    }
    if (not found_loop) {
        return NULL;
    }
    t=A;
    while (t!=h) {
        t = t->next;
        h = h->next;
    }
    return t;
}
