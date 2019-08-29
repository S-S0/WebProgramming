document.querySelector("slide-obj").lastElementChild.cloneNode(true);


document.querySelector("slide-obj").addEventListener("transitionend", function() {
    document.querySelector("slide-obj").style.transitionDuration = "0s";
    document.querySelector("slide-obj").firstElementChild.remove();
    var copyNode = document.querySelector("slide-obj").firstElementChild.cloneNode(true);
    document.querySelector("slide-obj").insertAdjacentElement("afterend", copyNode);
    removeClassName(document.querySelector("slide-obj"), "next-move"); // 만들어 놓은 function
});