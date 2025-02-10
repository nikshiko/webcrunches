document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon");
    const dock = document.querySelector(".dock");

    dock.addEventListener("mousemove", (e) => {
        icons.forEach((icon) => {
            const rect = icon.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const distance = Math.abs(centerX - e.clientX);

            // Gaussian-like function to scale and move up icons
            const scale = 1 + Math.exp(-Math.pow(distance / 50, 2)) * 1.5;
            const moveUp = -Math.exp(-Math.pow(distance / 50, 2)) * 10;
            console.table("With Exp",scale, moveUp)

            console.table(1 + Math.pow(distance / 50, 2) * 1.5, -Math.pow(distance / 50, 2) * 10)
            icon.style.transform = `scale(${scale}) translateY(${moveUp}px)`;
        });
    });

    // Reset when mouse leaves
    dock.addEventListener("mouseleave", () => {
        icons.forEach((icon) => {
            icon.style.transform = "scale(1) translateY(0)";
        });
    });
});
