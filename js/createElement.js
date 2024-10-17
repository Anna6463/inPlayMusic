// Helper function to create elements
export function createElement(
  tag,
  className = "",
  attributes = {},
  textContent = ""
) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );
  if (textContent) element.textContent = textContent;
  return element;
}
