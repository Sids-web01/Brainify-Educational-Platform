document.getElementById("searchInput").addEventListener("input", function () {
    let input = this.value.toLowerCase();
    let courses = document.querySelectorAll(".course-card");

    courses.forEach(course => {
        let title = course.getAttribute("data-title").toLowerCase();
        if (title.includes(input) || input === "") {
            course.style.display = "flex";
        } else {
            course.style.display = "none";
        }
    });
});

document.querySelector(".nav-toggle").onclick = () =>
    document.querySelector(".nav-menu").classList.toggle("active");