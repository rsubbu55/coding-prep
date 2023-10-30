"""
Problem: Two Sum
Platform: LeetCode
Difficulty: Easy

Description:
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example:

python

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] # nums[0] + nums[1] equals 9
"""

def two_sum(nums, target):
    idx_map = {}
    for idx, num in enumerate(nums):
        if (target - num) in idx_map:
            return [idx_map[target-num], idx]
        idx_map[num] = idx
    return [-1, -1]

