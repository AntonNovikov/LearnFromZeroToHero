// https://www.youtube.com/watch?v=99Qz8xRbl4k

// Promise.reject("");

// throw new Error("Error");

// var isTrue = true;
// isTrue[0][0];

// let a = 1
// let a = 4;

// try {
//     // var isTrue = true;
//     // isTrue[0][0];
//     throw new Error("my cu")
// } catch (error) {
//   console.log("error", error.toString());
// } finally{
//     console.log("work always")
// }


const main = async() => {
    await new Promise((res,rej) => {
        rej("errrrrrr");
    }).then(null,(error)=>{console.log(error.toString())})
}
main()