createElement = function(tagName, attrs = {}, ...children) {

  const elem = document.createElement(tagName)
  if (attrs) {
      for (const entry of Object.entries(attrs)) {
          elem.setAttribute(...entry);
      }
  }
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child)
    else elem.append(child)
  }
  return elem
}
