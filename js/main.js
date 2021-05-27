/**
 * Cherry-picking titles to bind click event to.
 */
const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');

const skills = document.querySelector('#skills');
const skillsContent = document.querySelector('#skills-content');

const interests = document.querySelector('#interests');
const interestsContent = document.querySelector('#interests-content');

about.addEventListener('click', () => {
    const aboutBox = openBox('Über mich', aboutContent);
});

skills.addEventListener('click', () => {
    const skillsBox = openBox('Tätigkeiten und Kompetenzen', skillsContent);
});

interests.addEventListener('click', () => {
    const interestsBox = openBox('IT-Themen die mich interessieren', interestsContent);
});

/**
 * Opens the selected window.
 * 
 * @param {string} boxTitle - The window title
 * @param {string} boxMount - The content in the window
 */
function openBox(boxTitle, boxMount) {
    new WinBox({
        title: boxTitle,
        background: '#00aa00',
        width: '600',
        height: '600',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: boxMount
    });
}

/**
 * On-click event for terminal input field
 * Triggers search function
 * 
 * @param {string} el - Input field value
 */
function enter(el) {
    if (event.key === 'Enter') {
        findCmd(el.value);
    }
}

/**
 * Finds according command with entered value
 * 
 * @param {string} cmd - Command to be searched
 */
function findCmd(cmd) {
    switch (cmd) {
        case '/about':
            openBox('Über mich', aboutContent);
            break;
        case '/skills':
            openBox('Tätigkeiten und Kompetenzen', skillsContent);
            break;
        case '/interests':
            openBox('IT-Themen die mich interessieren', interestsContent);
            break;
        default:
            alert('invalid command!');
            break;        
    }
}