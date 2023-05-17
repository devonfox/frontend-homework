import './Houses.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';

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

const Houses = () => {
  const [houses, setHouses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const characters = await response.json();
        const updatedHouses = {};

        characters.forEach((character) => {
          if (character.family.includes('House')) {
            if (updatedHouses[character.family]) {
              updatedHouses[character.family] += 1;
            } else {
              updatedHouses[character.family] = 1;
            }
          }
        });
        
        // checking again here
        characters.forEach((character) => {
          if (!character.family.includes('House')) {
            for (const key in updatedHouses) {
              if (key.includes(character.family)) {
                updatedHouses[key] += 1;
              }
            }
          }
        });

        setHouses(updatedHouses);
      } catch (error) {
        console.error('Error fetching data.');
      }
    };

    fetchData();
  }, []);

  const [labels, characterCount] = [Object.keys(houses),Object.values(houses)];

  // structurin' the incoming data
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count',
        data: characterCount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-10 col-md-8 col-lg-6 col-12">
        <div className="text-center display-5 my-4">Houses</div>
        <ChartComponent chartType="doughnut" data={data} />
      </div>
    </div>
  );
};

export default Houses;