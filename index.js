document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is connected');

    var arrowIcon = document.getElementById("drop-down-arrow-id");
    if (arrowIcon) {
        arrowIcon.onclick = function() {

            console.log('Arrow icon clicked');
            var dropDownMenu = document.querySelector('.drop-down-menu');
            if (dropDownMenu.style.display === 'grid') {
                dropDownMenu.style.display = 'none';
                arrowIcon.classList.remove('bi-chevron-up');
                arrowIcon.classList.add('bi-chevron-down');
                document.getElementById("pick-up-id").style.backgroundColor = "#004f9a";    

            } else {
                dropDownMenu.style.display = 'grid';
                arrowIcon.classList.remove('bi-chevron-down');
                arrowIcon.classList.add('bi-chevron-up');
                document.getElementById("pick-up-id").style.backgroundColor = "#002d58";    

            }
        };
    } else {
        console.error("Element with ID 'drop-down-arrow-id' not found.");
    }
});