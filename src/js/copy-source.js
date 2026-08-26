document.addEventListener('copy', (event) => {
  const selection = window.getSelection().toString().trim();

  if (!selection) return;

  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;

  const copiedContent = `${selection}\n\nИсточник: ${canonicalUrl} © Сайт Цветов`;

  event.clipboardData?.setData("text/plain", copiedContent);
  event.preventDefault();
});