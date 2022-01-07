function CaseStudies() {
  //  Declaration
  let arr = new Array();
  //   let array = [];

  //   console.log(arr, array);

  // let products = ["Mobile", "Laptop", "Watch", "Keyboard"];

  // let products = ["Mobile", "Laptop", "Watch", "Keyboard"];

  // console.log(products[0]);  //it’s Print in console first item.
  // console.log(products[1]);  //it’s Print in console second item.
  // console.log(products[2]);  //it’s Print in console third item.

  // let products = ["Mobile", "Laptop", "Watch", "Keyboard"];
  // products[2]="TV" // new ["Mobile", "Laptop", "tv", "Keyboard", "air-condition"];

  // let products = ["Mobile", "Laptop", "Watch", "Keyboard"];
  // console.log(products);

  // let array = [ 'Mobile', { name: 'smith' }, true, function() { alert('hello'); } ];
  // console.log(array[3]); // it's print hello

  let products = ["Watch", "Keyboard"];
  products.push("Laptop", "Mobile");
  products.unshift("air-condition", "Refrigerator");
  console.log(products); // it's print ["air-condition","Refrigerator", "Laptop", "Watch","Laptop","Mobile"];

  



  let globalLet = "This is a global variable";

  function test() {
    let localLet = "This is a local variable";

    console.log(globalLet); // This is a global variable
    console.log(localLet); // This is a local variable
  }
  run();





}

CaseStudies();
