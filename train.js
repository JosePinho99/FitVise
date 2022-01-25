const muscleBuilder_1 = [];
const muscleBuilder_2 = [];
const muscleBuilder_3 = [];
const muscleBuilder_4 = [];
const muscleBuilder_5 = [];
const muscleBuilder_6 = [];
const muscleBuilder_7 = [];

const fb_1 = ["3-10 Bench Press","3-10 Tricep Extension","4-10 Push Up","3-6 Overhead Press","4-8 Cable Push"];
const fb_2 = ["3-8 Pull-up", "3-6 Dumbell Flies", "3-8 Lateral Raises", "4-10 Bicep Curls", "2-8 Wrist Curls"];
const fb_3 = ["3-5 Squats", "3-5 Deadlifts", "3-10 Leg Press", "3-6 Leg Curl", "3-10 Calf Raise"];
const fb_4 = ["3-10 Bench Press","3-10 Tricep Extension","4-10 Push Up","3-6 Overhead Press","4-8 Cable Push"];
const fb_5 = ["3-8 Pull-up", "3-6 Dumbell Flies", "3-8 Lateral Raises", "4-10 Bicep Curls", "2-8 Wrist Curls"];
const fb_6 = ["3-5 Squats", "3-5 Deadlifts", "3-10 Leg Press", "3-6 Leg Curl", "3-10 Calf Raise"];
const fb_7 = ["REST DAY"];
let lsty = document.createElement("ul");
lsty.style.marginTop= "50px";
lsty.classList.add("list-group");

const legs = [];

window.onload = () => {
    
    let container = document.getElementById("container");
    let example = document.getElementById("example");

    let workouts = ["Tricep Extension", "Bench Press", "Pull-up", "Push-up", "Rope Pulldown",
    "Sit Up", "Squat", "Leg Press", "Running", "Walking", "Wrist Curl", "Dumbbell Flies",
    "Overhead Press", " Lounges", "Rope Jumping", "Cable push", "Cable pull", "Dumbell Standing raise",
    "Cycling"];

    for (let i = 0; i < 19; i++) {
        let new_ex = example.cloneNode(true);
        new_ex.childNodes[1].childNodes[1].childNodes[1].textContent = workouts[i];
        document.getElementById("container").appendChild(new_ex);
    }
}


function add(event) {
    console.log(event);
    let bt = document.getElementById("day");
    let name = event.childNodes[0].textContent;
    console.log(bt.value);
    if (bt.value === "1") {
        muscleBuilder_1.push(name+"................");
    }
    if (bt.value === "2") {
        muscleBuilder_2.push(name+"...............");
    }
    if (bt.value === "3") {
        muscleBuilder_3.push(name+"...............");
    }
    if (bt.value === "4") {
        muscleBuilder_4.push(name+"................");
    }
    if (bt.value === "5") {
        muscleBuilder_5.push(name+"................");
    }
    if (bt.value === "5") {
        muscleBuilder_5.push(name+"................");
    }
    if (bt.value === "6") {
        muscleBuilder_6.push(name+"................");
    }
    if (bt.value === "7") {
        muscleBuilder_7.push(name+"................");
    }

    console.log(muscleBuilder_1);
}


function showPremium() {
    let select = document.getElementById("workout");
    
    let train1 = document.createElement("option");
    train1.value = "3";
    train1.textContent = "PREMIUM Full Body"
    train1.style.color = "#EEBC1D";
    select.appendChild(train1);
    
    let lst = ["PREMIUM Legs", "PREMIUM Coditioning", "PREMIUM Upper Body", "PREMIUM Arms"]
    for (let i = 0; i < 4; i++) {
    train1 = document.createElement("option");
    train1.value = i.toString();
    train1.textContent = lst[i];
    train1.style.color = "#EEBC1D";
    select.appendChild(train1);
    }

    select.value = "3";
}


function showPlan() {
    let bt = document.getElementById("bt-plan");

    if (bt.textContent === "Ver Plano") {
        let container = document.getElementById("container");
        container.remove();

        lsty.hidden = false;
    

        let btt = document.getElementById("day");

        

        bt.textContent = "Exercicios"

        
        while (lsty.lastElementChild) {
            lsty.removeChild(lsty.lastElementChild);
        }

        let bla = document.getElementById("workout");
        if (bla.value === "1") {
            let lst = [];
            if (btt.value === "1") {
                lst = muscleBuilder_1;
            } else if(btt.value === "2") {
                lst = muscleBuilder_2;
            } else if(btt.value === "3") {
                lst = muscleBuilder_3;
            } else if(btt.value === "4") {
                lst = muscleBuilder_4;
            } else if(btt.value === "5") {
                lst = muscleBuilder_5;
            } else if(btt.value === "6") {
                lst = muscleBuilder_6;
            } else if(btt.value === "7") {
                lst = muscleBuilder_7;
            }

            for (let i = 0; i < lst.length; i++) {
                let ele = document.createElement("li");
                ele.classList.add("list-group-item");
                ele.innerHTML= `<pre>${lst[i].slice(0,15) }                                                                                                                                    Remove</pre>`;
                ele.addEventListener("click", () => lsty.removeChild(ele));
                lsty.appendChild(ele);
            }
        
        } else {
            let lst = [];
            if (btt.value === "1") {
                lst = fb_1;
            } else if(btt.value === "2") {
                lst = fb_2;
            } else if(btt.value === "3") {
                lst = fb_3;
            } else if(btt.value === "4") {
                lst = fb_4;
            } else if(btt.value === "5") {
                lst = fb_5;
            } else if(btt.value === "6") {
                lst = fb_6;
            } else if(btt.value === "7") {
                lst = fb_7;
            }

            for (let i = 0; i < lst.length; i++) {
                let ele = document.createElement("li");
                ele.classList.add("list-group-item");
                ele.innerHTML= `<pre>${lst[i].slice(0,20) } </pre>`;
                lsty.appendChild(ele);
            }
        }
        document.body.appendChild(lsty);
    }

    else {
       
        let main = document.createElement("div");
        main.classList.add("container");

        let div = document.createElement("div");
        div.classList.add("row");
        div.id="container";

        let col = document.createElement("div");
        col.classList.add("col-md-3");
        col.classList.add("col-sm-4");
        col.id = "example";

        let card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";

        let bod = document.createElement("div");
        bod.classList.add("card-body");

        let hh = document.createElement("h5");
        hh.classList.add("card-title");
        hh.textContent = "Bicep Curl";

        bod.appendChild(hh);

        let linkk = document.createElement("a");
        linkk.href = "#";
        linkk.classList.add("btn");
        linkk.classList.add("btn-primary");
        linkk.classList.add("nopp");
        linkk.addEventListener("click", () => add(bod));
        linkk.textContent = "Adicionar";

        bod.appendChild(linkk);
        card.appendChild(bod);
        col.appendChild(card);
        div.appendChild(col);
        main.appendChild(div);

        document.body.appendChild(main);
        
        let workouts = ["Tricep Extension", "Bench Press", "Pull-upp", "Push-up", "Rope Pulldonw",
        "Sit Up", "Squat", "Leg Press", "Running", "Walking", "Wrist Curl", "Dumbbell Flies",
        "Overhead Press", " Lounges", "Rope Jumping", "Cable push", "Cable pull", "Dumbell Standing raise",
        "Cycling"];

        let example = document.getElementById("example");
        for (let i = 0; i < 19; i++) {
            let new_ex = example.cloneNode(true);
            new_ex.childNodes[0].childNodes[0].childNodes[1].addEventListener("click", () => add(new_ex.childNodes[0].childNodes[0]));
            new_ex.childNodes[0].childNodes[0].childNodes[0].textContent = workouts[i];
            document.getElementById("container").appendChild(new_ex);
        }


        lsty.hidden = true;
        bt.textContent = "Ver Plano"
    }


}


function myFunction() {
    let btt = document.getElementById("day");
    while (lsty.lastElementChild) {
        lsty.removeChild(lsty.lastElementChild);
    }
    
    let bla = document.getElementById("workout");
    if (bla.value === "1") {
        let lst = [];
        if (btt.value === "1") {
            lst = muscleBuilder_1;
        } else if(btt.value === "2") {
            lst = muscleBuilder_2;
        } else if(btt.value === "3") {
            lst = muscleBuilder_3;
        } else if(btt.value === "4") {
            lst = muscleBuilder_4;
        } else if(btt.value === "5") {
            lst = muscleBuilder_5;
        } else if(btt.value === "6") {
            lst = muscleBuilder_6;
        } else if(btt.value === "7") {
            lst = muscleBuilder_7;
        }

        for (let i = 0; i < lst.length; i++) {
            let ele = document.createElement("li");
            ele.classList.add("list-group-item");
            ele.innerHTML= `<pre>${lst[i].slice(0,15) }                                                                                                                                    Remove</pre>`;
            ele.addEventListener("click", () => lsty.removeChild(ele));
            lsty.appendChild(ele);
        }
    
    } else {
        let lst = [];
        if (btt.value === "1") {
            lst = fb_1;
        } else if(btt.value === "2") {
            lst = fb_2;
        } else if(btt.value === "3") {
            lst = fb_3;
        } else if(btt.value === "4") {
            lst = fb_4;
        } else if(btt.value === "5") {
            lst = fb_5;
        } else if(btt.value === "6") {
            lst = fb_6;
        } else if(btt.value === "7") {
            lst = fb_7;
        }

        for (let i = 0; i < lst.length; i++) {
            let ele = document.createElement("li");
            ele.classList.add("list-group-item");
            ele.innerHTML= `<pre>${lst[i].slice(0,20) } </pre>`;
            lsty.appendChild(ele);
        }
    }
    document.body.appendChild(lsty);
}