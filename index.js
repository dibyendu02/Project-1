var string = "English literature, Article review, Article writing, Article Publishing (Scholar), Thesis/dissertation, Law, Engineering implementations etc.";
var str = string.split("");
var el = document.getElementById('text');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();



