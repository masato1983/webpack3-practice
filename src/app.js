import './sub';
import './app.scss';
// import jQuery from "jquery";

const init = async () => {
  console.log('this is a main js file.');
  await asyncFn();
  jQuery();
};

async function asyncFn(){
  console.log("I'm async function");
  console.log([1,2,3].includes(0));
}

init();