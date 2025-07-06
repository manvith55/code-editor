function run() {
      const htmlCode = document.getElementById("html-code").value;
      const cssCode = document.getElementById("css-code").value;
      const jsCode = document.getElementById("js-code").value;
      const outPut = document.getElementById("output");

      const dark = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim() !== '#ffffff';
      const outputTextColor = dark ? 'white' : 'black';
      const outputBgColor = dark ? '#0f2027' : '#ffffff';

      outPut.contentDocument.body.innerHTML =
        `<style>
          body {
            color: ${outputTextColor};
            background-color: ${outputBgColor};
            margin: 10px;
            font-family: sans-serif;
          }
          ${cssCode}
        </style>
        ${htmlCode}`;

      outPut.contentWindow.eval(jsCode);
    }

    function toggleTheme() {
      const root = document.documentElement;
      const icon = document.getElementById("theme-icon");
      const dark = getComputedStyle(root).getPropertyValue('--bg-color').trim() !== '#ffffff';

      if (dark) {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#1f1f1f');
        root.style.setProperty('--box-bg', '#ffffff');
        root.style.setProperty('--label-bg', '#eaeaea');
        root.style.setProperty('--label-text-color', '#000000');
        root.style.setProperty('--textarea-bg', '#f5f5f5');
        root.style.setProperty('--textarea-text-color', '#1f1f1f');
        root.style.setProperty('--iframe-bg', '#ffffff');
        root.style.setProperty('--output-text-color', '#000000');
        root.style.setProperty('--accent', '#007acc');
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        root.style.setProperty('--bg-color', '#0f2027');
        root.style.setProperty('--text-color', '#e0e0e0');
        root.style.setProperty('--box-bg', '#1e1e1e');
        root.style.setProperty('--label-bg', '#111');
        root.style.setProperty('--label-text-color', '#00f7ff');
        root.style.setProperty('--textarea-bg', '#121212');
        root.style.setProperty('--textarea-text-color', '#00ffea');
        root.style.setProperty('--iframe-bg', '#0f2027');
        root.style.setProperty('--output-text-color', '#ffffff');
        root.style.setProperty('--accent', '#00f7ff');
        icon.classList.replace('fa-sun', 'fa-moon');
      }

      run();
    }

    document.addEventListener("DOMContentLoaded", run);