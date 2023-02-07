


// https://www.builder.io/blog/structured-clone

const calendarEvent = {
    title: "Builder.io Conf",
    date: new Date(123),
    attendees: ["Steve"]
  }

let b = structuredClone(calendarEvent)