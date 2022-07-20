"""
Let's say you have 3 developers: A, B and C. They report the following working schedule:
Developer A: day 3 - 5
Developer B: day 1 and 5
Developer C: day 0 - 1 and 5 - 6
 
Visually, this would look like:
   0  1  2  3  4  5  6 ..................... 365
A           1  1  1
B     1           1
C  1  1           1  1
 
Write a function that calculates the number of days on which at least one developer is working.
                      ------------------------------------------------------------------------        
 
The input for the example above would look like this:
[ [ [ 3, 5 ] ], [ [ 1, 1 ], [ 5, 5 ] ], [ [ 0, 1 ], [ 5, 6 ] ] ]
 
"""
 
START, END = 0, 1
 
def mergeIntervals(in_list) -> int:
    """
    Approach:
    Merge the intervals - Union
    Sort the input based on start and end
    [0, 1] [3, 6]
 
    2 + 4 = 6 days
    Returns:
        Integer
    """
   
    working_days = [schedule for employee in in_list for schedule in employee]    
 
    if len(working_days) == 0:
        return 0
 
    # [[start, end], [start, end]....]
    working_days.sort()
    #print("working_days = %s" % working_days)
    if len(working_days) == 1:
        return working_days[0][END] - (working_days[0][START] - 1)
 
    i = 0
    j = 1
 
    while j < len(working_days):
        if working_days[j][START] <= working_days[i][END]:
            working_days[i][END] = max(working_days[i][END], working_days[j][END])
        else:
            #working_days[i] = working_days[j]
            i += 1
            working_days[i][START] = working_days[j][START]
            working_days[i][END] = working_days[j][END]
        j += 1
   
    merged_len = i
    total_days = 0
    #print("merged intervals %s" % working_days[:merged_len+1])
 
    for interval in working_days[:merged_len+1]:
        total_days += interval[END] - (interval[START] - 1)
   
    return total_days
 
in_list = [[]]
print(mergeIntervals(in_list))
 
in_list = [ [ [1,1] ] ]
print(mergeIntervals(in_list))
 
in_list = [ [ [1,5], [4, 6] ] ]
print(mergeIntervals(in_list))
 
in_list = [ [ [ 3, 5 ] ], [ [ 1, 1 ], [ 5, 5 ] ], [ [ 0, 1 ], [ 5, 6 ] ] ]
print(mergeIntervals(in_list))
 
in_list = [ [ [ 3, 5 ] ], [ [ 1, 1 ], [ 5, 5 ] ], [ [ 0, 1 ], [ 5, 6 ] ], [ [ 0, 1 ], [ 5, 8 ] ] ]
