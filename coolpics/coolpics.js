function toggleMenu() {
    const navBar = document.querySelector('.links');
    navBar.classList.toggle("show")
}

function handleResize() {
    const menu = document.querySelector(".menuButton");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `
    <div class="viewer">
      <div class="viewer-content">
        <button class="closeViewer">X</button>
        <img src="${pic}" alt="${alt}">
      </div>
    </div>
  `;
}

function viewHandler(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === 'IMG') {
    const srcParts = clickedElement.src.split('_');
    const fullSizeSrc = srcParts[0] + '_full.jpeg';
    const altText = clickedElement.alt;

    const viewerHTML = viewerTemplate(fullSizeSrc, altText);
    document.body.insertAdjacentHTML('afterbegin', viewerHTML);

    document.querySelector('.closeViewer').addEventListener('click', closeViewer);
  }
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
  }
}