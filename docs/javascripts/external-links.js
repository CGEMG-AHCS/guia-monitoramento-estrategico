document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(function(link) {

        link.setAttribute("target", "_blank");

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

});
