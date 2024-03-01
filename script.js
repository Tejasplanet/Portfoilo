const myProjects = [
    {
        category: 'Robotics Engineer',
        title: 'Vehicle-based Safety System',
        description: "Ignition interlock: tests breath for alcohol; prevents car start if levels unsafe, promoting road safety.",
        image: 'ro.JPG',
        link: 'pro.html'
    },
    {
        category: 'App development',
        title: 'Chat App',
        description: "A chatting app where you can create your account using a Google account and start chatting with your friends, family, and others.",
        image: 'chat.png',
        link: 'chat.html'
    },
    // Add more projects as needed
];

const myProjectGrid = document.getElementById('projectGrid');
const loadMoreButton = document.getElementById('loadMoreButton');
const projectsToShowInitially = 3;
let projectsToShow = projectsToShowInitially;

function renderMyProjects() {
    myProjectGrid.innerHTML = ''; // Clear existing projects

    myProjects.slice(0, projectsToShow).forEach((myProject, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'relative group';
        projectElement.innerHTML = `
                <div class="bg-[#2f56d2] rounded-lg overflow-hidden shadow-md flex flex-col relative">
                    <img src="${myProject.image}"  alt="Project Image"
                        class="w-full h-60 object-cover sm:h-48 md:h-60 lg:h-72">
                    <div class="flex flex-col justify-between px-5 py-8 md:px-8 md:py-6 text-white h-full relative">
                        <div>
                            <span class="text-blue-500 font-bold uppercase bg-white text-xs py-1.5 px-4 rounded-lg">${myProject.category}</span>
                            <h2 class="text-base font-bold mt-4 mb-2">${myProject.title}</h2>
                            <p class="mb-6 text-sm md:text-base">${myProject.description}</p>
                        </div>
                        <div>
                            <a href="${myProject.link}" class="bg-blue-500 border-white text-white px-4 py-2 rounded hover:bg-blue-600">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <svg class="absolute right-0 -bottom-24" width="204" height="198" viewBox="0 0 204 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Row 1 -->
                    <circle cx="192.666" cy="88" r="1.66667" fill="#ffffff" />
                    <circle cx="192.666" cy="73.3333" r="1.66667" fill="#ffffff" />
                    <circle cx="192.666" cy="59" r="1.66667" fill="#ffffff" />
                    <circle cx="192.666" cy="45" r="1.66667" fill="#ffffff" />
                    <circle cx="192.666" cy="30.6666" r="1.66667" fill="#ffffff" />
                    <!-- Row 2 -->
                    <circle cx="178.666" cy="88" r="1.66667" fill="#ffffff" />
                    <circle cx="178.666" cy="73.3333" r="1.66667" fill="#ffffff" />
                    <circle cx="178.666" cy="59" r="1.66667" fill="#ffffff" />
                    <circle cx="178.666" cy="45" r="1.66667" fill="#ffffff" />
                    <circle cx="178.666" cy="30.6666" r="1.66667" fill="#ffffff" />
                    <!-- Row 3 -->
                    <circle cx="164.666" cy="88" r="1.66667" fill="#ffffff" />
                    <circle cx="164.666" cy="73.3333" r="1.66667" fill="#ffffff" />
                    <circle cx="164.666" cy="59" r="1.66667" fill="#ffffff" />
                    <circle cx="164.666" cy="45" r="1.66667" fill="#ffffff" />
                    <circle cx="164.666" cy="30.6666" r="1.66667" fill="#ffffff" />
                </svg>
                </div>
         

            `;
        myProjectGrid.appendChild(projectElement);
    });

    if (myProjects.length > projectsToShowInitially) {
        loadMoreButton.style.display = 'block';
    } else {
        loadMoreButton.style.display = 'none';
    }
}

loadMoreButton.addEventListener('click', () => {
    projectsToShow = projectsToShow === myProjects.length ? projectsToShowInitially : myProjects.length;
    renderMyProjects();
    updateLoadMoreButtonText();
});

function updateLoadMoreButtonText() {
    loadMoreButton.textContent = projectsToShow === myProjects.length ? 'Show Less' : 'Show More';
}

// Initial rendering
renderMyProjects();
updateLoadMoreButtonText();

const workData = [
    {
        imageSrc: "ro.jpg",
        title: "Vehicle-based Safety System",
        description:
            "If someone is drunk and tries to start a car, an ignition interlock system stops the car from working. It makes the driver take a breath test, and if the alcohol level is too high, the car won't start. This helps keep the roads safer by preventing drunk driving.",
        link: "pro.html",
    },
    {
        imageSrc: "chat.png",
        title: "Chitchat App",
        description: "A chatting app where you can create your account using a Google account and start chatting with your friends, family, and others.",
        link: "chat.html",
    },
    {
        imageSrc: "SlideX.png",
        title: "Slidex",
        description:
            "SlideX is a user-friendly online presentation tool, similar to PowerPoint but simpler to use. It offers straightforward features for creating engaging slideshows without unnecessary complexity. Ideal for both personal and professional use, SlideX helps users craft polished presentations with ease.",
        link: "#",
    },
];

const workListContainer = document.querySelector(".work-list");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");

// Function to display the specified number of projects
function displayProjects(numProjects) {
    workListContainer.innerHTML = workData
        .slice(0, numProjects)
        .map(
            (workItem) => `
                <div class="work">
                    <img src="${workItem.imageSrc}" alt="">
                    <div class="layer">
                        <h3 class="text-2xl font-medium">${workItem.title}</h3>
                        <p class="text-base text-justify">${workItem.description}</p>
                        <a href="${workItem.link}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            `
        )
        .join("");

    // Show or hide "See More" button based on the number of projects
    if (workData.length > numProjects) {
        seeMoreBtn.style.display = "block";
    } else {
        seeMoreBtn.style.display = "none";
    }
}

// Show the initial three projects
displayProjects(3);

seeMoreBtn.addEventListener("click", () => {
    // Show all projects
    displayProjects(workData.length);
    seeMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
});

showLessBtn.addEventListener("click", () => {
    // Show only three projects again
    displayProjects(3);
    seeMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
});


document.getElementById("myForm").addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault();

        // Add z-50 to the alert
        var alertElement = document.querySelector(".alert");
        if (alertElement) {
            alertElement.classList.add("z-50");

            // Position the alert below the fixed header
            var fixedHeaderHeight = document.getElementById("header").offsetHeight;
            alertElement.style.marginTop = fixedHeaderHeight + "px";
        }

        alert("Please fill out all the required fields.");
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Function to handle tab selection and scrolling
    function handleTabClick(event) {
        event.preventDefault();

        // Get the target section ID from the link
        const targetId = this.getAttribute('href').substring(1);

        // Get the target section element
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Update tab underlines
        const tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    // Add click event listeners to all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.addEventListener('click', handleTabClick));

    // Function to update active tab based on scroll position
    function updateActiveTabOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 300;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const targetId = section.getAttribute('id');
                const targetLink = document.querySelector(`.tab-link[data-tab="${targetId}"]`);

                if (targetLink) {
                    const tabLinks = document.querySelectorAll('.tab-link');
                    tabLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    }

    // Add scroll event listener to update active tab on scroll
    window.addEventListener('scroll', updateActiveTabOnScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'tab-link'
    const tabLinks = document.querySelectorAll('.tab-link');

    // Your existing code
    tabLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const selectedTab = event.target.getAttribute("data-tab");
            // Set 'active' class to the selected tab and close the menu popup
            tabLinks.forEach((tabLink) => {
                tabLink.classList.remove("active");
            });
            link.classList.add("active");
            menuPopup.classList.add("hidden");
        });
    });

});


var typed = new Typed("#element", {
    strings: ["Web developer", "App Developer", "Robotics Engineer"],
    typeSpeed: 50,
});
// Function to select a tab and add underline
function selectTab(tabNumber) {
    const tab1Label = document.querySelector("#tab1 + label");
    const tab2Label = document.querySelector("#tab2 + label");
    const tab1Content = document.getElementById("tab1-content");
    const tab2Content = document.getElementById("tab2-content");

    // Reset styles for both labels before applying new styles
    tab1Label.style.borderBottom = "none";
    tab1Label.style.marginBottom = "0";
    tab2Label.style.borderBottom = "none";
    tab2Label.style.marginBottom = "0";

    // Define the color, height, and margin-top for the underline
    const underlineColor = "red"; // Set your desired underline color
    const underlineHeight = "2px"; // Set your desired height for the underline
    const underlineMarginTop = "-4px"; // Set your desired margin-top for the underline, e.g., '-4px'

    if (tabNumber === 1) {
        tab1Content.classList.remove("hidden");
        tab2Content.classList.add("hidden");
        tab1Label.style.borderBottom = `${underlineHeight} solid ${underlineColor}`;
        tab1Label.style.marginBottom = underlineMarginTop;
    } else if (tabNumber === 2) {
        tab1Content.classList.add("hidden");
        tab2Content.classList.remove("hidden");
        tab2Label.style.borderBottom = `${underlineHeight} solid ${underlineColor}`;
        tab2Label.style.marginBottom = underlineMarginTop;
    }
}
// Select the default tab (Skills tab)
selectTab(1);

document.addEventListener('DOMContentLoaded', function () {
    const mobileButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const mobileMenu = document.getElementById('navbar-default');

    mobileButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Set the default selected menu item to Home
    const defaultMenuItem = document.querySelector('a[aria-current="page"]');
    if (defaultMenuItem) {
        defaultMenuItem.classList.add('active');
        defaultMenuItem.classList.add('bg-blue-700'); // Add background color to the selected item
    }

    // Handle menu item clicks
    const menuItems = document.querySelectorAll('#navbar-default a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class and background color from all menu items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
                menuItem.classList.remove('bg-blue-700');
            });

            // Add 'active' class and background color to the clicked menu item
            this.classList.add('active');
            this.classList.add('bg-blue-700');

            // Hide the menu on mobile screens after clicking
            mobileMenu.classList.add('hidden');
        });
    });
});
