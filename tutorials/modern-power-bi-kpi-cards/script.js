const copyStatus = document.querySelector('.copy-status');
let statusTimer;

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const prompt = document.getElementById(button.dataset.copy)?.textContent;
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
      button.classList.add('copied');
      button.textContent = 'Copied';
      copyStatus.textContent = 'Prompt copied. Paste it into your AI chat or Codex conversation.';
      copyStatus.classList.add('visible');
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => {
        button.classList.remove('copied');
        button.textContent = 'Copy prompt';
        copyStatus.classList.remove('visible');
      }, 2200);
    } catch {
      copyStatus.textContent = 'Clipboard access is unavailable. Expand the prompt and select its text to copy.';
      copyStatus.classList.add('visible');
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => copyStatus.classList.remove('visible'), 4000);
    }
  });
});
