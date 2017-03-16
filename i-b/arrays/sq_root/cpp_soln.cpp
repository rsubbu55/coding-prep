/**
 * @input A : Integer
 * 
 * @Output Integer
 */
 

int Sqrt(int A) {
    if (A == 0 || A == 1) {
        return A;
    }
    int low = 1, high = A/2;
    int mid; 
    
    while (low <= high) {
        mid = low + (high-low)/2;
        if ((A/mid) > mid) {
            low = mid+1;
        } else  {
            high = mid-1;
        } else {
            return mid;
        }
    }
    return high;
}
