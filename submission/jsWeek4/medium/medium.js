function shuffle(nums) {
    nums.sort(() => Math.random() -.5);
}

var nums = [4,5,6,7,0,1,2];
shuffle(nums);
document.write(nums);

var where = nums.indexOf(0);
document.write(" - 0 has an index of "+ where +". ");