const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

hamburger.addEventListener("click", function()
{
    navMenu.classList.add("active");
    hamburger.classList.add("hidden");
});

closeMenu.addEventListener("click", function()
{
    navMenu.classList.remove("active");
    hamburger.classList.remove("hidden");
});

dropdownButtons.forEach(function(button)
{
    button.addEventListener("click", function()
    {
        const dropdown = button.closest(".dropdown");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        const arrow = button.querySelector("img");

        const isOpen = dropdownMenu.classList.contains("active");

        dropdownButtons.forEach(function(otherButton)
    {
        const otherDropdown = otherButton.closest(".dropdown");
        const otherMenu = otherDropdown.querySelector(".dropdown-menu");
        const otherArrow = otherButton.querySelector("img");

        otherMenu.classList.remove("active");
        otherArrow.src = "./images/icon-arrow-down.svg"

    });

        if (!isOpen)
        {
            dropdownMenu.classList.add("active");
            arrow.src = "./images/icon-arrow-up.svg";
        }
    });
});