


let click = document.querySelector("footer > div");
    
    for (let i = 0; i < click.length; i++){
        click.addEventListener("click", function(){
            click.innerText = i.innerText;
        })
    }
    
    







