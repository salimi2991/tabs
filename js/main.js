const tabs = document.querySelectorAll('ul li');
const divs = document.querySelectorAll('.content > div');

tabs.forEach((tab) => {
    //Add click for each li
    tab.addEventListener("click", function (e) {
        tabs.forEach((tab) => {
            //On click remove class Active from all Li
            tab.classList.remove("active");
        });
        //Add Class Active On the li 
        e.currentTarget.classList.add("active");
        divs.forEach((div) => {
            //Display None for all content Divs on click
            div.style.display = 'none';
            //Select the div the contain the class of data-content and make it display flex
            document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'flex';
        });
    });
})