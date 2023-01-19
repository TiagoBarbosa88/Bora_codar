const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);

const data = {
  run: ['01-18','01-19','01-20'],
  water: ['01-18','01-19','01-20'],
  food: ['01-18','01-19','01-20'],
  study: ['01-17','01-19','01-20'],
}

nlwSetup.setData(data)
nlwSetup.load()