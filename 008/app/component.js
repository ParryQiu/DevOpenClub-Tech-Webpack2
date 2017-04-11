export default (text="hello world!") => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
}
