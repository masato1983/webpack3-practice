setTimeout(() => {
  import("js/sub");
  import("@scss/app");
}, 2000);

// import jQuery from "jquery";

const init = async () => {
  console.log('this is a main js file.');
  await asyncFn();
  jQuery();
  utils.log('hello from app.js');
};

async function asyncFn(){
  console.log("I'm async function");
  console.log([1,2,3].includes(0));
}

init();