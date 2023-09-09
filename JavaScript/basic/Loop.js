// ToDo

// for

for (let i = 9; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; ) {
  console.log(1);
  i++;
}
for (let i = 0; ; ) {
  if (i < 5) {
    console.log(1);
  } else {
    break;
  }
  i++;
}
let i = 0;
for (;;) {
  if (i < 5) {
    console.log(i);
  } else {
    i = 0;
    break;
  }
  i++;
}

// for in

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

// for of

for (const iterator of object) {
}

// while

// do while

// break

// continue
