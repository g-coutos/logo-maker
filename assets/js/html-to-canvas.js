import html2canvas from '/../../node_modules/html2canvas/dist/html2canvas.esm.js';

const generateButton = document.getElementById('generate');

generateButton.onclick = () => {
  html2canvas(document.querySelector('.logo__box'), {
    scale: 4,
    backgroundColor: null,
  }).then(function (canvas) {
    let link = document.createElement('a');
    link.download = 'logo.png';
    link.href = canvas.toDataURL();
    link.click();
  });
};
