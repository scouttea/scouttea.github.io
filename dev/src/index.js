console.log("start");

import './meta';

if (process.env.NODE_ENV !== 'production') {
    console.log("Running Plugin Tests...")
    import("./plugin-test/main")
}
