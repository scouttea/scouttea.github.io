import "./f1/t1";

console.log("copy-webpack-plugin OK");

let {x, y} = {x:"O", y:"K"};

console.log("@babel/plugin-transform-destructuring", {x, y});

let z = <div><p>OK</p></div>;

console.log("@babel/plugin-transform-react-jsx", z);

let t = {x:{x:"O",y:"K"}}

console.log("@babel/plugin-proposal-optional-chaining",t.x?.x,t.x?.y,t.z?.x)

console.log("...Plugin Tests done");
