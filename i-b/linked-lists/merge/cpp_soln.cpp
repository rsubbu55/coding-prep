/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 * 
 * typedef struct ListNode listnode;
 * 
 * listnode* listnode_new(int val) {
 *     listnode* node = (listnode *) malloc(sizeof(listnode));
 *     node->val = val;
 *     node->next = NULL;
 *     return node;
 * }
 */
/**
 * @input A : Head pointer of linked list 
 * @input B : Head pointer of linked list 
 * 
 * @Output head pointer of list.
 */
listnode* mergeTwoLists(listnode* A, listnode* B) {
    listnode *tmp, *head;
    if (A ==NULL) {
        return B;
    } else if (B == NULL) {
        return A;
    }
    if (A->val <= B->val) {
        head = A;
        A=A->next;
    } else {
        head = B;
        B=B->next;
    }
    tmp = head;
    while (A && B) {
        if (A->val <= B->val) {
            tmp->next = A;
            tmp = A;
            A=A->next;
        } else {
            tmp->next = B;
            tmp = B;
            B=B->next;
        }
    }
    if (A) {
        tmp->next = A;
    } else if (B) {
        tmp->next = B;
    }
    return head;
}
