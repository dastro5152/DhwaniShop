
// new section js

const inslide = () => {
    const slidebtn = document.querySelectorAll(".slide-cont .lb");
    const cardwrap = document.querySelector(".slide-cont .card-wrap");
    const slidscrl = document.querySelector(".slide-cont .slider-scroll");
    const scrltm =  slidscrl.querySelector(".sc-thumb");
    const max = cardwrap.scrollWidth - cardwrap.clientWidth;

    slidebtn.forEach(button =>{
        button.addEventListener("click", () =>{
            const direc = button.id === "left-btn" ? -1 : 1;
            const scam = cardwrap.clientWidth * direc;
            cardwrap.scrollBy({left: scam, behavior: "smooth"});
        });
    });
    const handle = () => {
        slidebtn[0].style.display = cardwrap.scrollLeft <= 0 ? "none" : "block";
        slidebtn[1].style.display = cardwrap.scrollLeft >=  max ? "none" : "block";

    }

    const updatetm = () => {
        const scrpo = cardwrap.scrollLeft;
        const thumbpo = (scrpo / max) * (slidscrl.clientWidth - scrltm.offsetWidth);
        scrltm.style.left = `${thumbpo}px`

    }

    cardwrap.addEventListener("scroll", () => {
        handle();
        updatetm();
    });
}

window.addEventListener("load", inslide);


// festive carousal

const owlfest = $('.fest-carousel');
owlfest.owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 4000,
    singleItem: true,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});


const owlrecent = $('.recent-carousel');
owlrecent.owlCarousel({
    items: 5,
    loop: true,
    autoplay: false,
 
    singleItem: true,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});




const owlfree = $('.owlfree');
owlfree.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 3000,
    singleItem: true,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});






// onclick functionsssss ***********************

// function filter() {
//    const filterp = document.querySelector('.dbb');
//    filterp.classList.toggle('dblock');
// };
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop1');
    const priceFilter = document.querySelector('.dbb');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop2');
    const priceFilter = document.querySelector('.dbbc');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop3');
    const priceFilter = document.querySelector('.dbbw');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop4');
    const priceFilter = document.querySelector('.dbbwr');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop5');
    const priceFilter = document.querySelector('.dbbtr');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop6');
    const priceFilter = document.querySelector('.dbbcr');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop7');
    const priceFilter = document.querySelector('.dbbdi');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterOp = document.getElementById('filterop8');
    const priceFilter = document.querySelector('.dbbsh');

    filterOp.addEventListener('click', function(event) {
        console.log("Filter clicked");
        event.stopPropagation();
        priceFilter.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        console.log("Document clicked");
        if (!filterOp.contains(event.target) && priceFilter.classList.contains('show')) {
            priceFilter.classList.remove('show');
        }
    });
});



const minprice = document.getElementById("in-min");
const maxprice = document.getElementById("in-max");

const rangepro = document.querySelector(".p-progress");

function validaterange() {
let minval = parseInt(inelem[0].value);
let maxval = parseInt(inelem[1].value);

if (minval > maxval) {
    let tempval = maxval;
    maxval = minval;
    minval = tempval;
}

minprice.innerHTML = "₹ " + minval;
maxprice.innerHTML = "₹ " + maxval;


}

const inelem = document.querySelectorAll("input")


inelem.forEach((element) => {
    element.addEventListener("input" , validaterange);

});




// playing video js 
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("videoModal");
    var btn = document.querySelector("a[href='#video169504']");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        var video = document.getElementById("video169504");
        video.pause();
        video.currentTime = 0;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            var video = document.getElementById("video169504");
            video.pause();
            video.currentTime = 0;
        }
    }
});


// onclick functionss ****************************************************************************

// function silb(){
//     document.getElementById('bracelet-s-container').classList.remove('d-none');
// }
// function panb(){
//     document.getElementById('bracelet-s-container').classList.add('d-none');

// }

// bracelet click open ************
function clbrace() {
    document.getElementById('bracelet-box').style.display="block";   
}
function clpend() {
    document.getElementById('pend-box').style.display="block";   
}
function clring(){
    document.getElementById('ring-box').style.display="block";   

}

// share facebook dropdown 
function share (){
    document.querySelector(".shareSites").style.display = "block";
};






// ********** selecting bracelet pendant rings  items and box appearing selcted this 

function selectOption(item, imageUrl) {
    // Hide the options list
    document.getElementById('options-14266664-list').style.display = 'none';
    
    // Update the selected item
    document.getElementById('selected-image').src = imageUrl;
    document.getElementById('selected-text').innerText = item;
    
    // Show the selected item div
    document.getElementById('selected-item').classList.remove('d-none');
    document.getElementById('options-14266664-list').classList.add('d-none');

};

// ********** selecting bracelet items and box appearing selcted this 

function selectbrace(itemId, itemName, itemImage) {
    document.getElementById('silver-brcl').classList.add('d-none');
    document.getElementById('selected-image-s').src = itemImage;
    document.getElementById('selected-text-s').innerText = itemName;
    document.getElementById('selected-item-sb').classList.remove('d-none');
    document.getElementById('custom-br').classList.remove('d-none');

}
function selectbracep(itemId, itemName, itemImage) {
    document.getElementById('panch-brcl').classList.add('d-none');
    document.getElementById('selected-image-p').src = itemImage;
    document.getElementById('selected-text-p').innerText = itemName;
    document.getElementById('selected-item-pb').classList.remove('d-none');
}
function selectbraceg(itemId, itemName, itemImage) {
    document.getElementById('gold-brcl').classList.add('d-none');
    document.getElementById('selected-image-g').src = itemImage;
    document.getElementById('selected-text-g').innerText = itemName;
    document.getElementById('selected-item-gb').classList.remove('d-none');
}
function selectbracewg(itemId, itemName, itemImage) {
    document.getElementById('whitegold-brcl').classList.add('d-none');
    document.getElementById('selected-image-wg').src = itemImage;
    document.getElementById('selected-text-wg').innerText = itemName;
    document.getElementById('selected-item-wgb').classList.remove('d-none');
}
function selectbrace18yg(itemId, itemName, itemImage) {
    document.getElementById('18YGold-brcl').classList.add('d-none');
    document.getElementById('selected-image-18yg').src = itemImage;
    document.getElementById('selected-text-18yg').innerText = itemName;
    document.getElementById('selected-item-18yg').classList.remove('d-none');
}
function white14g(itemId, itemName, itemImage) {
    document.getElementById('white14g-brcl').classList.add('d-none');
    document.getElementById('selected-image-white14g').src = itemImage;
    document.getElementById('selected-text-white14g').innerText = itemName;
    document.getElementById('selected-item-white14g').classList.remove('d-none');
}
function K14ygold(itemId, itemName, itemImage) {
    document.getElementById('K14ygold-brcl').classList.add('d-none');
    document.getElementById('selected-image-K14ygold').src = itemImage;
    document.getElementById('selected-text-K14ygold').innerText = itemName;
    document.getElementById('selected-item-K14ygold').classList.remove('d-none');
}

// pendat list 
function pens(itemId, itemName, itemImage) {
    document.getElementById('silver-pend').classList.add('d-none');
    document.getElementById('selected-image-spen').src = itemImage;
    document.getElementById('selected-text-spen').innerText = itemName;
    document.getElementById('selected-item-spen').classList.remove('d-none');
}
function penp(itemId, itemName, itemImage) {
    document.getElementById('panch-pend').classList.add('d-none');
    document.getElementById('selected-image-panch').src = itemImage;
    document.getElementById('selected-text-panch').innerText = itemName;
    document.getElementById('selected-item-panch').classList.remove('d-none');
}
function pen22ky(itemId, itemName, itemImage) {
    document.getElementById('p22ky-pend').classList.add('d-none');
    document.getElementById('selected-image-22ky').src = itemImage;
    document.getElementById('selected-text-22ky').innerText = itemName;
    document.getElementById('selected-item-22ky').classList.remove('d-none');
}
function pen18kw(itemId, itemName, itemImage) {
    document.getElementById('silver-pend').classList.add('d-none');
    document.getElementById('selected-image-spen').src = itemImage;
    document.getElementById('selected-text-spen').innerText = itemName;
    document.getElementById('selected-item-spen').classList.remove('d-none');
}
function pen18ky(itemId, itemName, itemImage) {
    document.getElementById('silver-pend').classList.add('d-none');
    document.getElementById('selected-image-spen').src = itemImage;
    document.getElementById('selected-text-spen').innerText = itemName;
    document.getElementById('selected-item-spen').classList.remove('d-none');
}
function pen14kw(itemId, itemName, itemImage) {
    document.getElementById('silver-pend').classList.add('d-none');
    document.getElementById('selected-image-spen').src = itemImage;
    document.getElementById('selected-text-spen').innerText = itemName;
    document.getElementById('selected-item-spen').classList.remove('d-none');
}
function pen14ky(itemId, itemName, itemImage) {
    document.getElementById('silver-pend').classList.add('d-none');
    document.getElementById('selected-image-spen').src = itemImage;
    document.getElementById('selected-text-spen').innerText = itemName;
    document.getElementById('selected-item-spen').classList.remove('d-none');
}
function rings(itemId, itemName, itemImage) {
    document.getElementById('silver-rings').classList.add('d-none');
    document.getElementById('selected-image-rings').src = itemImage;
    document.getElementById('selected-text-rings').innerText = itemName;
    document.getElementById('selected-item-rings').classList.remove('d-none');
}





// ********* function for BPRG back from box 

function back() {
    // Show the options list
    document.getElementById('options-14266664-list').style.display = 'block';

    // Hide the selected item div
    document.getElementById('selected-item').classList.add('d-none');
    document.getElementById('options-14266664-list').classList.remove('d-none');
    document.getElementById('ring-box').style.display="none";  
    document.getElementById('pend-box').style.display="none";  
    document.getElementById('bracelet-box').style.display="none";   

};

// ********* function for Bracelet select item  back from box 
function backsb() {
    document.getElementById('silver-brcl').classList.remove('d-none');
    document.getElementById('selected-item-sb').classList.add('d-none');
    document.getElementById('custom-br').classList.add('d-none');

    // document.getElementById('bracelet-s-container').classList.remove('d-none');
};
function backpb() {
    document.getElementById('panch-brcl').classList.remove('d-none');
    document.getElementById('selected-item-pb').classList.add('d-none');
    // document.getElementById('bracelet-s-container').classList.remove('d-none');
    // document.getElementById('silver-brcl').classList.add('d-none');
};
function backgb() {
    document.getElementById('gold-brcl').classList.remove('d-none');
    document.getElementById('selected-item-gb').classList.add('d-none');
    // document.getElementById('bracelet-s-container').classList.remove('d-none');
    // document.getElementById('silver-brcl').classList.add('d-none');
    // document.getElementById('panch-brcl').classList.add('d-none');
};
function backwgb() {
    document.getElementById('whitegold-brcl').classList.remove('d-none');
    document.getElementById('selected-item-wgb').classList.add('d-none');
};
function back18yg() {
    document.getElementById('18YGold-brcl').classList.remove('d-none');
    document.getElementById('selected-item-18yg').classList.add('d-none');
};
function backwhite14g() {
    document.getElementById('white14g-brcl').classList.remove('d-none');
    document.getElementById('selected-item-white14g').classList.add('d-none');
};
function backK14ygold() {
    document.getElementById('K14ygold-brcl').classList.remove('d-none');
    document.getElementById('selected-item-K14ygold').classList.add('d-none');
};
function backpens() {
    document.getElementById('silver-pend').classList.remove('d-none');
    document.getElementById('selected-item-spen').classList.add('d-none');
};
function backpenp() {
    document.getElementById('panch-pend').classList.remove('d-none');
    document.getElementById('selected-item-panch').classList.add('d-none');
};
function backpen22ky() {
    document.getElementById('p22ky-pend').classList.remove('d-none');
    document.getElementById('selected-item-22ky').classList.add('d-none');
};
function backpen18kw() {
    document.getElementById('p18kw-pend').classList.remove('d-none');
    document.getElementById('selected-item-18kw').classList.add('d-none');
};
function backpen18ky() {
    document.getElementById('p18ky-pend').classList.remove('d-none');
    document.getElementById('selected-item-18ky').classList.add('d-none');
};
function backpen14kw() {
    document.getElementById('p14kw-pend').classList.remove('d-none');
    document.getElementById('selected-item-14kw').classList.add('d-none');
};
function backpen14ky() {
    document.getElementById('p14ky-pend').classList.remove('d-none');
    document.getElementById('selected-item-14ky').classList.add('d-none');
};
function backrings() {
    document.getElementById('silver-rings').classList.remove('d-none');
    document.getElementById('selected-item-rings').classList.add('d-none');
};

// cart poppp **************
function cartpop(){
    document.getElementById('myPopupbuy').style.display = "block";
}

function cartclo(){
    document.getElementById('myPopupbuy').style.display = "none";

}

function addrevpop(){
    document.getElementById('myrevpop').style.display = "block";

}
function revclo(){
    document.getElementById('myrevpop').style.display = "none";

}





//Bracelett all metal design options  ****************************************************************************

document.addEventListener('DOMContentLoaded', (event) => {
    const braceletSelect = document.getElementById('brace-select');
    const braceletContainers = {
        silverb: document.getElementById('bracelet-s-container'),
        panchdhattub: document.getElementById('bracelet-panch-container'),
        '22k-yellow-goldb': document.getElementById('bracelet-gold-container'),
        '18k-white-goldb': document.getElementById('bracelet-whitegold-container'),
        '18k-yellow-goldb': document.getElementById('bracelet-ygold-container'),
        '14k-white-goldb': document.getElementById('bracelet-white14g-container'),
        '14k-yellow-goldb': document.getElementById('bracelet-K14ygold-container')
    };

    braceletSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // Hide all containers
        Object.values(braceletContainers).forEach(container => {
            container.classList.add('d-none');
        });

        // Show the selected container
        if (braceletContainers[selectedValue]) {
            braceletContainers[selectedValue].classList.remove('d-none');
        }
    });
});

//Pendantt all metal design options  ****************************************************************************

document.addEventListener('DOMContentLoaded', (event) => {
    const pendSelect = document.getElementById('pend-select');
    const pendContainers = {
        silverp: document.getElementById('pend-s-container'),
        panchdhattup: document.getElementById('pend-panch-container'),
        '22k-yellow-goldp': document.getElementById('pend-gold-container'),
        '18k-white-goldp': document.getElementById('pend-whitegold-container'),
        '18k-yellow-goldp': document.getElementById('pend-ygold-container'),
        '14k-white-goldp': document.getElementById('pend-white14g-container'),
        '14k-yellow-goldp': document.getElementById('pend-14Kygold-container')
    };

    pendSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // Hide all containers
        Object.values(pendContainers).forEach(container => {
            container.classList.add('d-none');
        });

        // Show the selected container
        if (pendContainers[selectedValue]) {
            pendContainers[selectedValue].classList.remove('d-none');
        }
    });
});

//Ring all metal design options  ****************************************************************************

document.addEventListener('DOMContentLoaded', (event) => {
    const ringSelect = document.getElementById('ring-select');
    const ringContainers = {
        silverr: document.getElementById('ring-s-container'),
        panchdhattur: document.getElementById('ring-panch-container'),
        '22k-yellow-goldr': document.getElementById('ring-gold-container'),
        '18k-white-goldr': document.getElementById('ring-whitegold-container'),
        '18k-yellow-goldr': document.getElementById('ring-ygold-container'),
        '14k-white-goldr': document.getElementById('ring-white14g-container'),
        '14k-yellow-goldr': document.getElementById('ring-14Kygold-container')
    };

    ringSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // Hide all containers
        Object.values(ringContainers).forEach(container => {
            container.classList.add('d-none');
        });

        // Show the selected container
        if (ringContainers[selectedValue]) {
            ringContainers[selectedValue].classList.remove('d-none');
        }
    });
});


// ************ customize items with pooja energize **********
function customItem(select) {
    var customizeItems = document.querySelector('.customize-items');
    if (select.value === 'vedic-pooja' || select.value === 'prana-pooja') {
        customizeItems.classList.remove('d-none');
    } else {
        customizeItems.classList.add('d-none');
    }
}

// checkou page quantity increase / decrease ****************
let quantity = 0;

function changeQuantity(amount) {
    quantity += amount;
    if (quantity < 0) {
        quantity = 0;
    }
    document.getElementById("quantity").textContent = quantity;
}

let quant = 0;

function changeQuant(amount) {
    quant += amount;
    if (quant < 0) {
        quant = 0;
    }
    document.getElementById("quant").textContent = quant;
}








