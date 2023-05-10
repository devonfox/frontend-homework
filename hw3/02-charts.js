const backgroundColors = [
  'rgba(64, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(64, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const url = 'https://thronesapi.com/api/v2/Characters';

const renderChart = async () => {
  const donutChart = document.querySelector('.donut-chart');

  const response = await fetch(url);
  const characters = await response.json();
  const houses = {};
  characters.forEach((character) => {
    if (character.family.includes('House')) {
      if (houses[character.family]) {
        houses[character.family] += 1;
      } else {
        // creating the key as we loop through
        houses[character.family] = 1;
      }
    }
  });

  // second pass to make sure houses all exist and THEN add if we find a partial match
  characters.forEach((character) => {
    if (!character.family.includes('House')) {
      for (const key in houses) {
        if (key.includes(character.family)) {
          houses[key] += 1;
        }
      }
    }
  });

  const [labels, characterCount] = [Object.keys(houses), Object.values(houses)];

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'House Counts',
          data: characterCount,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
