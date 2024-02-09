function hide(x){
    let paper = x.closest(".paper");

    paper.style.display = "none";
    let close = true;
    let note = document.querySelectorAll(".paper.img")

    note.forEach((paper) =>{
        if (paper.style.display !== "none"){
            close = false;
        }
    });

    if (close){
        document.querySelector(".paper.dani").style.display = "block"
    }

    console.log("click")
}

function conceal(x){
    let paper2 = x.closest(".paper.dani");

    paper2.style.display = "none"
}