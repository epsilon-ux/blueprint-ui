const mkdirp = require('mkdirp');
const fs = require('fs');

// Randomly generates an int where the maximum is exclusive and the minimum is inclusive.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Randomly selects an item from an array
function randomSelect(array) {
  return array[getRandomInt(0, array.length)];
}

// Creates a random date between today and 2 years ago today
function getDate() {
  let endDate = new Date();
  let startDate = new Date().setYear(endDate.getFullYear() - 2).valueOf();

  return new Date(
    getRandomInt(startDate, endDate)
  );
}

// Creates a random USA formatted phone number
function getPhone() {
  let num = (min, max) => String(getRandomInt(min, max));
  return (
    num(0, 10) + num(0, 10) + num(0, 10) + '-'
    + num(0, 10) + num(0, 10) + num(0, 10) + '-'
    + num(0, 10) + num(0, 10) + num(0, 10) + num(0, 10)
  );
}

// Creates a random status
function getStatus() {
  return randomSelect([
    'Not Deployed',
    'New Updates Not Deployed',
    'Deploying',
    'Deployment Error',
    'Deployed'
  ]);
}

// Creates a random decription
function getDescription() {
  const lorem = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum quam non purus semper viverra. Aenean tristique rhoncus velit lobortis faucibus';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const loremArr = lorem.split(' ');
  const descArr = loremArr.slice(0, getRandomInt(4, loremArr.length));
  return randomSelect(chars) + descArr.join(' ') + '.';
}

// Creates a random alert (true or false)
function getAlert() {
  return randomSelect([true, false]);
}

// Writes to the tableData file
async function writeFile(path, content) {
  //Creates folder if folder doesn't already exist
  let folderPath = path.split('/');
  folderPath.pop();
  await mkdirp(folderPath.join('/'));

  // Overwrites tableData.json with newData
  fs.writeFile(path, content, function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("Success: Table data refreshed!");
  });
}

// Creates basic data structure and handles script arguments
if(!process.argv[2]) {
  console.error('Please provide the number of objects you would like to create.');
} else {
  const numberOfObjects = parseInt(process.argv[2]);
  const newData = {
    customerData: {
      data: []
    }
  }

  // Creates numberOfObjects data points
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

  writeFile('src/app/datasets/tableData.json', JSON.stringify(newData));
}
