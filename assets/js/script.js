
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".row2").addClass("active");
        } else {
           $(".row2").removeClass("active");
        }
    });
});

document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".move").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}