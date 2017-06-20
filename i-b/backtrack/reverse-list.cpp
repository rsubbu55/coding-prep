/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
ListNode* Solution::reverseList(ListNode* A) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    ListNode * ret;
    if (A->next == NULL) {
        ret = A;
    } else {
        ret = reverseList(A->next);
        ListNode *q = A->next;
        q->next = A;
        A->next = NULL;
    }
    
    return ret;
}
