

// Algorithm
let jumpPossibility = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
};

// Implementation
const arr = [2, 3, 1, 1, 4];
// const arr = [0, 1];
// const arr = [3,2,1,0,4];
const results = jumpPossibility(arr);

// Log the results
if (results) {
  console.log(`we can reach the last index for the given array [${arr}]`);
} else {
  console.log(`we cannot reach the last index for the given array [${arr}]`);
}

// BIG O Notation
// Time complexity - O(n) - where 'n' is the length of the array
// Space complexity - O(1)
