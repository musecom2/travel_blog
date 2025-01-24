$(document).ready(function() {
    $(".main>li").hover(function() {
        if($(this).find("i").hasClass("ri-arrow-down-s-line")) {
            $(this).find("i").removeClass("ri-arrow-down-s-line").addClass("ri-arrow-up-s-line");
        } else {
            $(this).find("i").removeClass("ri-arrow-up-s-line").addClass("ri-arrow-down-s-line");
        }
        $(this).find(".sub").fadeToggle(600);
    });

    $(".myVideo").mouseenter(function() {
        // $(this).attr("autoplay", true);
        // $(this).attr("muted", true);

        this.play();
        // $(this).load();
    });
});