const callback = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundColor = "burlywood";
            //
            //observer.unobserve(entry.target);
        } else {
            entry.target.style.backgroundColor = "beige";
        }
    })
}

const options = {
    threshold: 0.5,
  }

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));