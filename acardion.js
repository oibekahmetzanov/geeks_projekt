document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const svg_accordion = item.querySelector(".svg_accordion")

        item.addEventListener("click", () => {
            if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
                content.style.maxHeight = content.scrollHeight + "px";
                svg_accordion.style.transform = "rotate(-45deg)";

                // Развернуть элемент плавно
            } else {
                content.style.maxHeight = "0"; // Свернуть элемент плавно
                svg_accordion.style.transform = "rotate(0deg)";
            }
        });
    });
});