function ggg(func1, func2) {
    return func1() + func2();
}
document.write(ggg(function() { return 3 },

    function() { return 4 }))