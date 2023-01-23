// https://www.youtube.com/shorts/4PZeIwXx1hc
const USER_MAP = {
  1: { name: "Kyle" },
  2: { name: "Saly" },
};

console.log(USER_MAP[1]);

const userMap = new Map([
  [1, { name: "Kyle" }],
  [2, { name: "Saly" }],
]);

// userMap.set()
userMap.set({ userId: 1 }, { name: "john" });

console.log(userMap);
