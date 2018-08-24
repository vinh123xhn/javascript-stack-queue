function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.peek = peek;
    this.pop = pop;
    this.length = length;
    this.clear = clear;

    function push(element) {
        this.dataStore[this.top++] = element;

    }
    
    function pop() {
        return this.dataStore[--this.top];
    }

    function peek() {
        return this.dataStore[this.top-1];
    }

    function length() {
        return this.top;
    }

    function clear() {
        this.top = 0;
    }
}
    var s = new Stack();
    s.push("David");
    s.push("Bob");
    s.push('Ronaldo');
    
    function checkLength(){
    console.log("Lenght: " + s.length());
    console.log(s.peek());

    var popped = s.pop();
    console.log("the popped element is: "+ popped);
    console.log(s.peek());
    }
    
    function checkClear() {
        s.push("Cynthia");

        console.log(s.peek());

        s.clear();

        console.log("length: " + s.length());
        console.log(s.peek());

        s.push("Clayton");

        console.log(s.peek());
    }