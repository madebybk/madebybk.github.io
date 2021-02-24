//Navbar burger
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

//Contact -> click email address
const email = document.querySelector('#gmail');
const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = "bhun.kim98@gmail.com";
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);

    var tooltip = document.querySelector("#mytooltip");
    tooltip.innerHTML = "Copied email";
};
const outFunc = () => {
    var tooltip = document.querySelector("#mytooltip");
    tooltip.innerHTML = "Copy to clipboard";
};
email.addEventListener('click', copyToClipboard);
email.addEventListener('mouseout', outFunc);
