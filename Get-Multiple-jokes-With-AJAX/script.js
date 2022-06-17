const main = document.querySelector(".main");
const button = document.querySelector("button");
const ol = document.querySelector(".main ol");

let jokes;

function loadjokes(){
    let xhr = new XMLHttpRequest();
    const value = document.getElementById("jno").value;

    xhr.onprogress = function(){
        document.getElementById("output").innerHTML = "LOADING.....";
    }

    xhr.open("GET", `http://api.icndb.com/jokes/random/${value}>`, true);

    xhr.onload = function(){
        if(this.status === 200){
            jokes = (JSON.parse(this.responseText)).value;
            let output = "<ol>";
            jokes.forEach((item) => {
                output += `<li class="joke">${item.joke}</li>`;
            })
            output += "</ol>";
            document.getElementById("output").innerHTML = output;

            // // This below code have problem that it add more joke with existing joke - it doesn't overwrite previous jokes - My code
            // for(let i=0; i<jokes.length; i++){
            //     let li = document.createElement("li");
            //     li.classList.add("joke");
            //     li.innerText = jokes[i].joke;
            //     ol.appendChild(li);
            // }
        }
    }
    xhr.send();
}

button.addEventListener("click", loadjokes);