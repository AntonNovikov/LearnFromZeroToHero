// This solution is shared from APAS. The highest rated coding interview algorithm learning APP on Android! Download it from here: https://goo.gl/YXD3m2
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
}
// This solution is shared from APAS. The highest rated coding interview algorithm learning APP on Android! Download it from here: https://goo.gl/YXD3m2
System.out.println(twoSum ([2, 7, 11, 15], 9))