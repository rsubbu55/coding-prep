/**
 * @input haystack : Read only ( DON'T MODIFY ) String termination by '\0'
 * @input needle : Read only ( DON'T MODIFY ) String termination by '\0'
 * 
 * @Output Integer
 */
 
int xstrlen(const char *str)
{
    int len = 0;
    const char *x = str;
    if (!x) {
        return len;
    }
    while (*x != '\0') {
        x++;
        len++;
    }
    return len;
}

int xstrncmp(const char *a, const char *b, int len)
{
    const char *aa=a;
    const char *bb=b;
    int r = 0;
    if (!a) {
        return -1;
    } else if (!b) {
        return 1;
    }
    if (len <= 0 ) {
        return -1;
    }
    while (*a != '\0' && *b !='\0' && *a == *b) {
        if (--len == 0) {
            break;
        }
        a++;
        b++;
    }
    r = (*a - *b);
    //printf("xstrncmp a=%s, b=%s, r=%d\n", aa, bb, r);
    return r;
}

int xstrstr(const char *hay, const char *ndl)
{
    //printf("1 xstrlen hay=%s, ndl=%s\n", hay, ndl);
    int haylen = xstrlen(hay);
    int ndllen = xstrlen(ndl);
    int i = 0;
    //printf("2 xstrlen hay=%s, ndl=%s\n", hay, ndl);
    if (!haylen && !ndllen) {
        return 0;
    }
    for (i=0; i<haylen; ++i) {
        if (xstrncmp(hay +i,  ndl, ndllen) == 0) {
            return i;
        }
    }
    return -1;
}

int strStr(const char* haystack, const char* needle) 
{
    return xstrstr(haystack, needle);
}

