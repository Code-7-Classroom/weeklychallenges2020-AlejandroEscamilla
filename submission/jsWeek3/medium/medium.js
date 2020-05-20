var pizza = prompt("How many people will be having pizza?")
if (pizza == 0) {
    document.write("Well, then nobody is gonna have any slices, and wasting food isn't cool.");
}  else if (pizza >= 1 && pizza <= 8) {
        document.write("Each person can have "+ 8/pizza +" slices! ");
}  else (document.write('Order more pizzas!'))