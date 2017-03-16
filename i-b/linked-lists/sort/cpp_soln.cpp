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
 * 
 * @Output head pointer of list.
 */
#include <stdint.h>

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

uint32_t lenL(listnode* A) {
    uint32_t s = 0;
    while (A) {
        s++;
        A=A->next;
    }
}

listnode* split_mid(listnode *A) {
    listnode *f = A;
    listnode *s = A;
    while (f && f->next && f->next->next) {
        s = s->next;
        f = f->next->next;
    }
    f = s->next;
    s->next = NULL;
    return f;
}



listnode* sortList(listnode* A) {
    // split list into 2 and merge them
    if (A==NULL) {
        return NULL;
    }
    //uint32_t len = lenL(A);
    //listnode *B = split_mid(A, len);
    listnode *B = split_mid(A);
    if (B == NULL) {
        return A;
    }
    A=sortList(A);
    B=sortList(B);
    return mergeTwoLists(A,B);
}

