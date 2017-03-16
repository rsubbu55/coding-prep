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
 * @input m : Integer
 * @input n : Integer
 * 
 * @Output head pointer of list.
 */
listnode* reverseBetween(listnode* A, int m, int n) {

    
    listnode *prev=NULL, *current=A, *next=NULL;
    
    listnode *revlast = NULL, *prevlist = NULL;
    
    int i = 1;
    while (current && i < m) {
        ++i;
        prevlist = current;
        current = current->next;
    }
    
    prev = NULL;
    
    revlast = current;
    while (current && i <= n) {
        ++i;
        next = current->next;
        current->next = prev;
        
        prev = current;
        current = next;
    }
    
    if (prevlist) {
        prevlist->next = prev;
    } 
    if (revlast) {
        revlast->next = current;
    }
    
    if (m == 1) {
        return prev;
    } else {
        return A;
    }
}
