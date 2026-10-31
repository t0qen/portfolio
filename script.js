const windows = document.querySelectorAll('.window');

let current_div = null;
let offsetX = 0;
let offsetY = 0;

const initial_windows_pos = [
    { top: '4%', left: '24%' }, /* fetch */
    { top: '23%', left: '5%' }, /* projects */
    { top: '10%', left: '56%' }, /* skills */
    { top: '50%', left: '30%' }  /* about */
];


function reset_windows_pos() {
    windows.forEach((div, index) => {
        div.classList.add('animate');
        div.style.opacity = '1';
        div.style.top = initial_windows_pos[index].top;
        div.style.left = initial_windows_pos[index].left;
        div.style.zIndex = "1";
    });
}
window.addEventListener('load', () => {
    setTimeout(reset_windows_pos, 100);
});

windows.forEach(div => {

    div.addEventListener('pointerdown', (e) => {
        div.classList.remove('animate'); 
        current_div = div; 
        const rect = div.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        document.querySelectorAll('.window').forEach(d => d.style.zIndex = "1");
        div.style.zIndex = "1000";
    });
});

document.addEventListener('pointermove', (e) => {
    if (!current_div) return;
    let newX = e.clientX - offsetX + window.scrollX;
    let newY = e.clientY - offsetY + window.scrollY;
    current_div.style.left = newX + 'px';
    current_div.style.top = newY + 'px';
});

document.addEventListener('pointerup', () => {
    current_div = null;
});



// projects


const projects = document.querySelectorAll(".project-details");
const first_project = document.querySelector("#project-camover");


for (let i = 0; i < projects.length; i++) {
    if (projects[i] != first_project) {
        projects[i].classList.add("project-hided");
    }
    
}

function update_projects(project) {
    target = document.querySelector("#project-" + project);

    for (let i = 0; i < projects.length; i++) {
        if (projects[i] != target) {
            projects[i].classList.add("project-hided");
        } else {
            projects[i].classList.remove("project-hided");
        }
    }   
}


// fetching info animation
window.addEventListener('DOMContentLoaded', () => {

    const winows_content = document.querySelectorAll(".window-content");
    const fetching_infos = document.querySelectorAll(".fetching-animation");

    for (let i = 0; i < winows_content.length; i++) {
        winows_content[i].classList.add("project-hided");
    }

    setTimeout(() => {
            for (let i = 0; i < winows_content.length; i++) {
                winows_content[i].classList.remove("project-hided");
                fetching_infos[i].classList.add("project-hided");
            }
    }, 2000);  
});