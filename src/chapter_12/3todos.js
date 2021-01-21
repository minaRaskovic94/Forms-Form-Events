const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource); // 2 argumenta, prvi je tip zahteva (moze biti post etc, ali u ovom slucaju je GET jer zelimo da dobijemo neki podatak); 2 argument je endpoint
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// CALLBACK HELL - nesting callback fja - NO NO !
// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data");
//     // reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// ); ovo se moze uraditi sa then, ali takodje moze da izazove konfuziju kada sta treba da se prikaze

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });               za prikaz data se koristi then metoda, a za prikaz err se koristi catch metoda, i ovaj promise cemo vratiti u getTodos na vrhu
