// Qno 46:Enhanced Laptop Object: Construct an object for a laptop including properties make, model,
//  year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "hp",
    model: "ProBook 6470b",
    Year: "2020",
    describe: function () {
        console.log(" I have a ".concat(laptop.make, " laptop , of model ").concat(laptop.model, ", ").concat(laptop.Year));
    },
};
laptop.describe();
