const windows = document.querySelectorAll('.window');

let current_div = null;
let offset_x = 0;
let offset_y = 0;

const initial_windows_pos = [
    { top: '5%', left: '25%' }, /* fetch */
    { top: '28%', left: '2%' }, /* projects */
    { top: '10%', left: '56%' }, /* skills */
    { top: '69%', left: '30%' }  /* about */
];


function reset_windows_pos() {
    // windows.forEach((div, index) => {
    //     div.style.top = initial_windows_pos[index].top;
    //     div.style.left = initial_windows_pos[index].left;
    //     div.style.zIndex = "1";
    // });

}


window.addEventListener('load', reset_windows_pos);


windows.forEach(div => {

    div.addEventListener('pointerdown', (e) => {
        current_div = div; 
        const rect = div.getBoundingClientRect();
        offset_x = e.clientX - rect.left;
        offset_y = e.clientY - rect.top;

        document.querySelectorAll('.window').forEach(d => d.style.zIndex = "1");
        div.style.zIndex = "1000";
    });
});

document.addEventListener('pointermove', (e) => {
    if (!current_div) return;
    const r = document.querySelector('#centered-desk').getBoundingClientRect();
    current_div.style.left = (e.clientX - offset_x - r.left) + 'px';
    current_div.style.top  = (e.clientY - offset_y - r.top) + 'px';
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

    setTimeout(reset_windows_pos, 100);

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
            //random things
            document.querySelector("#first-project-btn").style.color = rgb(255, 231, 126);
    }, 2000);  
});