function binary_search_ts(list, item) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
var my_list = [1, 3, 5, 7, 9];
console.log(binary_search_ts(my_list, 3)); // 1
console.log(binary_search_ts(my_list, -1)); // null
