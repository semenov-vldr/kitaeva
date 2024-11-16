// Закрытие dialog по клику на backdrop
function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) dialogElement.close();
}

const dialogElements = document.querySelectorAll("dialog");

if (dialogElements) {
  dialogElements.forEach(dialogElement => dialogElement.onclick = closeOnBackDropClick);
}