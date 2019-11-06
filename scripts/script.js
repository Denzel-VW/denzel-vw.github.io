Date.prototype.getFormatDate = function () {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return this.getDate() + ' ' + monthNames[this.getMonth()] + ', ' + this.getFullYear();
}

const updateDate = function() {
    let elements = document.getElementsByClassName("date");
    if (elements.length > 0) { // check of element result niet leeg is
        const element = elements[0];
        console.log(element)
        element.innerHTML = new Date().getFormatDate();
    }
}

const onLikeMouseClicked = function() {
    changeAchtergrond('green')
}

const onDislikeMouseClicked = function() {
    changeAchtergrond('red')
}

function changeAchtergrond(color) {
    document.body.style.background = color;
 }
 