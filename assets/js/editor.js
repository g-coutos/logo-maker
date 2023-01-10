
const textareaHTML = document.getElementById('textarea-html');
const textareaCSS = document.getElementById('textarea-css');

textareaHTML.value = `<div class="logo__box">
  <img src="/assets/img/2.png" class="logo__number"  />
  <img src="/assets/img/5.png" class="logo__number"  />
  <img src="/assets/img/percentage.png" />
  <img src="/assets/img/off.png" />
</div>

<!-- Por favor, não apague o código abaixo 🙏  -->

<button id="generate">DOWNLOAD</button>

<script src="/assets/js/html-to-canvas.js" type="module"></script>
`;

textareaCSS.textContent = `.logo__box {
  width: fit-content;
  height: fit-content;
}

.logo__number {
}

#generate {
  margin-top: 1rem;
}
`;

const updateHTML = (text) => {
  let resultElement = document.getElementById('highlight-content-html');

  if(text[text.length - 1] === "\n") {
    text += " ";
  }

  resultElement.textContent = text;

  Prism.highlightElement(resultElement);
};

const updateCSS = (text) => {
  let resultElement = document.getElementById('highlight-content-css');
  
  if(text[text.length - 1] === "\n") {
    text += " ";
  }

  resultElement.textContent = text
                              
  Prism.highlightAll();
};

const syncScrollHTML = (element) => {
  let resultElement = document.getElementById('highlight-html');

  resultElement.scrollTop = element.scrollTop;
  resultElement.scrollLeft = element.scrollLeft;
};

const syncScrollCSS = (element) => {
  let resultElement = document.getElementById('highlight-css');

  resultElement.scrollTop = element.scrollTop;
  resultElement.scrollLeft = element.scrollLeft;
};

document.addEventListener('DOMContentLoaded', () => {
  updateHTML(textareaHTML.value);
  updateCSS(textareaCSS.value);
});

textareaHTML.oninput = () => {
  updateHTML(textareaHTML.value)
  syncScrollHTML(textareaHTML);
};

textareaCSS.oninput = () => {
  updateCSS(textareaCSS.value);
  syncScrollCSS(textareaCSS);
};

textareaHTML.onscroll = () => {
  syncScrollHTML(textareaHTML);
};

textareaCSS.onscroll = () => {
  syncScrollCSS(textareaCSS);
}

const editCode = () => {
  iframe.contentWindow.document.open();

  iframe.contentWindow.document.writeln(
    textareaHTML.value + '<style>' + textareaCSS.value + '</style>'
  );

  iframe.contentWindow.document.close();

  iframe.onload = () => {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  };
};

const iframe = document.getElementById('iframe-logo');

const saveButton = document.getElementById('save');

saveButton.onclick = () => {
  editCode();
};
