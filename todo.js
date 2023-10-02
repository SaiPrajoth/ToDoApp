const getDataButton = document.getElementById("getDataButton");
const dataContainer = document.getElementById("dataContainer");
const sendDataButton = document.getElementById("sendDataButton");
const getPostDataButton = document.getElementById("getPostDataButton");
const delDataButton = document.getElementById("delDataButton");
const updateDataButton = document.getElementById("updateDataButton");

getDataButton.addEventListener("click", function () {
  fetch("http://localhost:3000/todos", {
    method: "GET",
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      dataContainer.textContent = JSON.stringify(data);
    })
    .catch(function (err) {
      console.error("there was a problem with the fetch operation", err);
    });
});

getPostDataButton.addEventListener("click", function (event) {
  event.preventDefault();
  dataContainer.textContent = "";
  var v = document.getElementById("fid01").value;
  // console.log(v);
  var url = `http://localhost:3000/todos/${v}`;
  console.log("this is url", url);
  if (v==="") {
   alert("please enter the id");
  }else{
    fetch(url, {
        method: "GET",
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          return response.json();
        })
        .then(function (data) {
          // if (typeof data == "object") {
          //     dataContainer.textContent = JSON.stringify(data, null, 2);
          //     console.log("this is the response from the server", response);
          //     console.log("this is the type of response", typeof response);
  
          // } else if (typeof data == "string") {
          // //   return data;
          //   dataContainer.textContent = data;
          //   console.log("this is the response (string) from the server", response);
          //   console.log("this is the type of response", typeof response);
          // }
          // // console.log("this is the response from the server", response);
          // // console.log("this is the type of response", typeof response);
  
          // // if (typeof data == "object") {
          // //   dataContainer.textContent = JSON.stringify(data, null, 2);
          // // } else if (typeof data == "string") {
          // //   dataContainer.textContent = data;
          // // }
          dataContainer.textContent = JSON.stringify(data, null, 2);
          console.log("This is the data to be send to frontend", data);
        })
        .catch(function (err) {
          console.error("there was a problem with the fetch operation", err);
          dataContainer.textContent = "No Post found";
        });
  }
});

sendDataButton.addEventListener("click", function (event) {
    event.preventDefault();
  //   const a = document.querySelector("#ftitle").value;
  //   const b = document.querySelector("#fdesc").value;

  //   fetch("http://localhost:3000/todos/", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: a,
  //       description: b,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       dataContainer.textContent = JSON.stringify(data, null, 2);
  //     })
  //     .catch(function (err) {
  //       console.error("there was a problem with the fetch operation", err);
  //     });
  const a = document.querySelector("#ftitle").value;
  const b = document.querySelector("#fdesc").value;
  if ((a === "") && (b ==="")) {
    alert("please enter the title and description");
    // document.querySelector("#fdesc").value == "enter the description";
  } else {
    // event.preventDefault();
    dataContainer.textContent = "";
    var v = document.getElementById("fid01").value;
    // console.log(v);
    var url = `http://localhost:3000/todos`;
    console.log("this is url", url);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: a,
        description: b,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then(function (data) {
        // if (typeof data == "object") {
        //     dataContainer.textContent = JSON.stringify(data, null, 2);
        //     console.log("this is the response from the server", response);
        //     console.log("this is the type of response", typeof response);

        // } else if (typeof data == "string") {
        // //   return data;
        //   dataContainer.textContent = data;
        //   console.log("this is the response (string) from the server", response);
        //   console.log("this is the type of response", typeof response);
        // }
        // // console.log("this is the response from the server", response);
        // // console.log("this is the type of response", typeof response);

        // // if (typeof data == "object") {
        // //   dataContainer.textContent = JSON.stringify(data, null, 2);
        // // } else if (typeof data == "string") {
        // //   dataContainer.textContent = data;
        // // }
        dataContainer.textContent = JSON.stringify(data, null, 2);
        console.log("This is the data to be send to frontend", data);
      })
      .catch(function (err) {
        console.error("there was a problem with the fetch operation", err);
        //   dataContainer.textContent = "No Post found";
      });
  }
});

delDataButton.addEventListener("click", function () {
    const a = document.querySelector("#fid").value;

    if(a===""){
        alert("please enter the id");
    }else{
        fetch(`http://localhost:3000/todos/${a}`, {
      method: "DELETE",
      body: JSON.stringify({
        id : a
      }),
      headers:{
          "Content-Type":"application/json"
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        dataContainer.textContent = JSON.stringify(data, null, 2);
      })
      .catch(function (err) {
        console.error("there was a problem with the fetch operation", err);
        dataContainer.textContent = "No post found";
      });
    }
  });

//   updateDataButton.addEventListener("click", function () {
//     const a = d;

//     fetch("http://localhost:3000/todos", {
//       method: "PUT",
//       body: JSON.stringify({
//         title: document.querySelector("#ftitle03").value,
//         description: document.querySelector("#fdesc03").value,
//       }),
//       headers:{
//           "Content-Type":"application/json"
//       }
//     })
//       .then(function (response) {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then(function (data) {
//         dataContainer.textContent = JSON.stringify(data, null, 2);
//       })
//       .catch(function (err) {
//         console.error("there was a problem with the fetch operation", err);
//       });
//   });
// getDataButton.addEventListener('click', function() {
//     fetch('http://localhost:3000/data') // Replace with your backend route
//       .then(function(response) {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(function(data) {
//         // Display data received from the backend
//         dataContainer.textContent = JSON.stringify(data, null, 2);
//       })
//       .catch(function(error) {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   });
