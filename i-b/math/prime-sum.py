from math import sqrt

class Solution:
    # @param A : integer
    # @return a list of integers
    def sieve(self, A):
        if A < 2:
            return []
        check_primes = [1]* A
        check_primes.append(1)
        
        primes = []
        primes.append(2)
        primes.append(3)
        primes.append(5)
        primes.append(7)
        primes.append(11)
            
        sqa = int(sqrt(A))
        for i in xrange(3, sqa+1, 2):
            if check_primes[i] ==1:
                for j in xrange(i*i, A+1, i): # start at square of current prime as an optimization
                    check_primes[j] = 0
                primes.append(i)
        next = sqa if sqa % 2 == 1 else sqa+1
        for i in xrange(next, A+1, 2):
          if check_primes[i] == 1:
            primes.append(i)
        return primes
        
    def primesum(self, A):
        primes = self.sieve(A)
        set_primes = set(primes)
        for i in primes:
            if A-i in set_primes:
                return (i, A-i)
        return []
