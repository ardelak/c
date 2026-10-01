document.querySelectorAll('script[type="text/x-c"]').forEach((source) => {
    const code = source.textContent.replace(/^\n/, '');
    const windowElement = document.createElement('div');
    windowElement.className = 'win-c';

    const header = document.createElement('div');
    header.className = 'hd';

    const filename = document.createElement('span');
    filename.textContent = source.dataset.f || 'code.c';
    header.append(filename);

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.textContent = 'Копировать';
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code);
            copyButton.textContent = 'Готово';
        } catch {
            copyButton.textContent = 'Не удалось';
        }
        window.setTimeout(() => {
            copyButton.textContent = 'Копировать';
        }, 1200);
    });
    header.append(copyButton);

    const pre = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.textContent = code;
    pre.append(codeElement);

    windowElement.append(header, pre);
    source.replaceWith(windowElement);
});