export default (text='hello world!') => {
  const element = document.createElement('div');
  element.innerHTML = text;
  //let a = 1;
  return element;
};
