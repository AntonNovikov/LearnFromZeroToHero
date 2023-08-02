const object = {
  key: "values",
  methods: ["dsd", "dsf"],
};
object.key;
object.methods;
object["methods"];

delete object.methods; // not for use Safari troubles
// https://www.builder.io/blog/structured-clone

const calendarEvent = {
  title: "Builder.io Conf",
  date: new Date(123),
  attendees: ["Steve"],
};

let b = structuredClone(calendarEvent);

// in
console.log("key" in object);

// call

// apply

// bind