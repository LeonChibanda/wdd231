{
    document.addEventListener("DOMContentLoaded", () => {
        const hamButton = document.querySelector("#menu");
        const navigation = document.querySelector("nav");

        // Toggle navigation menu
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });

        // footer
        document.getElementById("currentyear").textContent =
            new Date().getFullYear();
        document.getElementById(
            "lastModified"
        ).textContent = `Last Modified: ${document.lastModified}`;

        // Highlight active navigation link
        const bodyId = document.body.id;
        const navLinks = document.querySelectorAll("nav .nav-a");

        navLinks.forEach((link) => {
            if (
                link.getAttribute("href").includes(bodyId.replace("-page", ""))
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}