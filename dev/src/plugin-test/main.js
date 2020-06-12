import "./f1/t1";

console.log("copy-webpack-plugin OK");

let {x, y} = {x:"O", y:"K"};

console.log("@babel/plugin-transform-destructuring", {x, y});

let z = <div><p>OK</p></div>;

console.log("@babel/plugin-transform-react-jsx", z);


console.log("...Plugin Tests done");
