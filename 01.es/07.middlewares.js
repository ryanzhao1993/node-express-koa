const a = () => {
    console.log(1);
    b();    // next()
    console.log(5);
    return Promise.resolve();
};

const b = () => {
    console.log(2);
    c();    // next()
    console.log(4);
};

const c = () => {
    return 3;
};

a().then((data) => {
    console.log(data);
});