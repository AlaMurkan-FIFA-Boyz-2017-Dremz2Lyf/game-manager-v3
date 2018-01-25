let scratchSpace;
beforeEach(() => {
  scratchSpace = document.createElement('div');
  scratchSpace.id = 'scratchSpace';
  scratchSpace.style.display = 'none';
  document.body.appendChild(scratchSpace);


});
afterEach(() => {
  document.body.removeChild(scratchSpace);
});
