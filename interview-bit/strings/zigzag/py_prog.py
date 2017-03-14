def zigzag(astr, n):
  ix = []
  i = 0
  s = +1
  for c in astr:
    ix.append((i,c))
    i = i+s
    if i == 0:
      s = +1
    elif i == n-1:
      s = -1
  ix = sorted(ix, key=lambda i:i[0])
  return ''.join([v[1] for v in  ix])
  
class Solution:
    # @param A : string
    # @param B : integer
    # @return a strings
    def convert(self, A, B):
        return zigzag(A, B)


