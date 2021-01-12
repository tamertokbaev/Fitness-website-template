document.getElementById("submit_btn").addEventListener("click", function(event){
    event.preventDefault();
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let hiddenBlock = document.getElementById("hide");
    hiddenBlock.style.display = "block";
    let res = document.getElementById("result");
    res.innerHTML = 10 * weight + 6.25 * height - 5 * age + 5;
})