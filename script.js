const btns = document.querySelectorAll(".btns");
const instructions = document.getElementById("instructions");

winPatterns = [
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8]
];

let numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
function shuffleArray(newArr) {
    let curridx = numberArray.length - 1;
    while (curridx != 0) {

        let randomidx = Math.floor(Math.random() * curridx);
        [newArr[curridx], newArr[randomidx]] = [newArr[randomidx], newArr[curridx]];
        curridx--;
    }
    return newArr;
}
valueArr = shuffleArray(numberArray);
let idx = 0;
btns.forEach((btn) => {
    btn.setAttribute("number", `${valueArr[idx]}`);
    idx++;
})
var noOfCardsSeleceted = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerHTML = `${btn.getAttribute("number")}`;
        btn.disabled = true;
        if (noOfCardsSeleceted == 0) {
            noOfCardsSeleceted = 1;
            btn.setAttribute("id", "1");
            document.getElementById("1").style = "background-color: #e8e28857; border: 1px solid black";
        }
        else {
            noOfCardsSeleceted = 0;
            btn.setAttribute("id", "2");
            document.getElementById("2").style = "background-color: #e8e28857; border: 1px solid black";
            checkState();
        }
    })
})

function checkState() {
    btn1 = document.getElementById("1").innerHTML;
    btn2 = document.getElementById("2").innerHTML;
    if (btn1 && btn2) {
        if (btn1 === btn2) {
            document.getElementById("1").style = "background-color: #e8e28857; border: 1px solid black"
            document.getElementById("2").style = "background-color: #e8e28857; border: 1px solid black"
            document.getElementById("1").setAttribute("id", "");
            document.getElementById("2").setAttribute("id", "");
        }
        else {
            setTimeout(() => {
                document.getElementById("1").innerHTML = "?";
                document.getElementById("2").innerHTML = "?";
                document.getElementById("1").disabled = false;
                document.getElementById("2").disabled = false;
                document.getElementById("1").style = "";
                document.getElementById("2").style = "";


                document.getElementById("1").setAttribute("id", "");
                document.getElementById("2").setAttribute("id", "");

            }, 1000);
        }
    }
};