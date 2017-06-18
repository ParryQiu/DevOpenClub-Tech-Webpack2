export default (text='hello world!',class1,class2) => {
  const element = document.createElement('div');
  element.innerHTML = text;
  element.className = class1;

  const p = document.createElement('input');
  p.type = 'checkbox';
  p.className = class2;
  element.appendChild(p);

  return element;
};
