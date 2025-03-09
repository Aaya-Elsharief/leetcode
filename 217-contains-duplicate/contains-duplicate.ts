function containsDuplicate(nums: number[]): boolean {
     let numSet = new Set<number>();

    for (let i =0; i < nums.length; i++){
        if (numSet.has(nums[i])){
            return true; 
        }
            numSet.add(nums[i])
    }
    return false;
};
    
