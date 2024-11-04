const getColorBtn = document.getElementById("get-color-scheme-btn")
const scheme = document.getElementById("scheme-select")
const colorInput = document.getElementById("color-input")
const colorSection = document.getElementById("colors-section")


getColorBtn.addEventListener("click", function(){
    const url = `
    https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${scheme.value}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const colorsArray = data.colors.map(color => color.hex.value)
            htmlColors(colorsArray)   
    })

})

function htmlColors(colorsArray){
    let html = ''
    for (let i = 0; i < colorsArray.length; i++){
        html += `                
            <div class="color-line" id="${colorsArray[i]}">
                <div id="id${i}" style="background-color:${colorsArray[i]}"></div>
                <p>${colorsArray[i]}</p>
             </div>
            `      
    }
    colorSection.innerHTML = html
}

document.addEventListener("click", function(e){
    if(e.target.parentElement.id){
         navigator.clipboard.writeText(e.target.parentElement.id)
         alert("Copied: " + e.target.parentElement.id);
    }
})