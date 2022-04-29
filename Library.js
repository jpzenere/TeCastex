function item(imagen,name,descr,prec) {
    let card = `<div class="item_container">
                    <div class="item">
                        <img class="item_image" src="${imagen}">
                        <h3 class="item_name">${name}</h3>
                        <div class="arrow" id="arrow_${name}"><button type="button" 
                            onclick="{document.getElementById('${name}').style.display='grid'; document.getElementById('arrow_${name}').style.display='none'}"
                            <i class="fa-solid fa-chevron-down"></i></button></i>
                        </div>
                    </div>
                    <div class="itemhidden" id="${name}" style="display:none">
                        <p class="item_description">${descr}</p>
                        <p class="precio">${prec}</p>
                        <div><a class="item_button" href="Carrito.html">Comprar</a></div>
                        <div class="arrow_up" id="arrow_${name}"><button type="button" 
                            onclick="{document.getElementById('${name}').style.display='none'; document.getElementById('arrow_${name}').style.display='grid'}"
                            <i class="fa-solid fa-chevron-up"></i></button></i>
                        </div>
                    </div>
                </div>`
    document.write(card)
}