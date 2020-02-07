const fs = require('fs');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomSelect(array) {
  return array[getRandomInt(0, array.length)];
}

function getDate() {
  let endDate = new Date();
  let startDate = new Date().setYear(endDate.getFullYear() - 2).valueOf();

  return new Date(
    getRandomInt(startDate, endDate)
  );
}

function getPhone() {
  let num = (min, max) => String(getRandomInt(min, max));
  return (
    num(0, 10) + num(0, 10) + num(0, 10) + '-'
    + num(0, 10) + num(0, 10) + num(0, 10) + '-'
    + num(0, 10) + num(0, 10) + num(0, 10) + num(0, 10)
  );
}

function getStatus() {
  return randomSelect([
    'Not Deployed',
    'New Updates Not Deployed',
    'Deploying',
    'Deployment Error',
    'Deployed'
  ]);
}

function getDescription() {
  const lorem = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum quam non purus semper viverra. Aenean tristique rhoncus velit lobortis faucibus';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const loremArr = lorem.split(' ');
  const descArr = loremArr.slice(0, getRandomInt(4, loremArr.length));
  return randomSelect(chars) + descArr.join(' ') + '.';
}

function getAlert() {
  return randomSelect([true, false]);
}


if(!process.argv[2]) {
  console.error('Please provide the number of objects you would like to create.');
} else {
  const numberOfObjects = parseInt(process.argv[2]);
  const newData = {
    customerData: {
      data: []
    }
  }

  for (let i = 0; i < numberOfObjects; i++) {
    newData.customerData.data.push({
      id: i,
      date: getDate(),
      amount: getRandomInt(0, 1000 * numberOfObjects),
      phone: getPhone(),
      status: getStatus(),
      description: getDescription(),
      alert: getAlert(),
    });
  }

  fs.writeFile("src/app/datasets/tableData.json", JSON.stringify(newData), function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("Success: Table data refreshed!");
}); 
}
