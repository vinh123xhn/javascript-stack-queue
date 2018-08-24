var Queue = function () {
    this.dataStore = [];

    this.enqueue = function (element) {
        return this.dataStore.push(element)
    };

    this.dequeue = function () {
        return this.dataStore.shift();
    };

    this.font = function () {
        return this.dataStore[1];
    };

    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };

    this.toString = function () {
        var retStr = "";
        for (i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };

    this.empty = function () {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    };

    this.count = function () {
        return this.dataStore.length;
    };
};

var Dancer = function (name, sex) {
    this.name = name;
    this.sex = sex;

    this.getDancers = function (males, females) {
        var names = ["F Allison McMillan", "M Frank Opitz", "M Mason McMillan", "M Clayton Ruff", "F Cheryl Ferenback", "M Raymond Williams", "F Jennifer Ingram", "M Bryan Frazer", "M David Durr", "M Danny Martin", "F Aurora Adney"];
        for (i = 0; i < names.length; i++) {
            names[i] = names[i].trim();
        }
        for (var i = 0; i < names.length; ++i) {
            names[i] = names[i].trim();
        }
        for (var i = 0; i < names.length; ++i) {
            var dancer = names[i].split(" ");
            var sex = dancer[0];
            var name = dancer[1];
            if (sex == "F") {
                females.enqueue(new Dancer(name, sex));
            } else {
                males.enqueue(new Dancer(name, sex));
            }
        }
        this.dance = function (males, females) {
            document.write("The dance partners are: \n");
            while (!females.empty() && !males.empty()) {
                person = females.dequeue();
                document.write("Female dancer is: " + person.name + "<br>");
                person = males.dequeue();
                document.write(" and the male dancer is: " + person.name + "<br>")
            }
        }
    }
};

var maleDancers = new Queue();
var femaleDancers = new Queue();
var s = new Dancer();
s.getDancers(maleDancers, femaleDancers);
s.dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    document.write(femaleDancers.font().name + " is waiting to dance." + "<br>");
}
if (!maleDancers.empty()) {
    document.write(maleDancers.font().name + " is waiting to dance." + "<br>");
}

var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    document.write("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    document.write("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}