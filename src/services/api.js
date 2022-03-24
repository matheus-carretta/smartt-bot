export const fetchRobots = async () => {
  try {
    const response = await fetch('https://api-front-test.k8s.smarttbot.com/api/v1/robot');
    const data = await response.json();
    return data;
  } catch (error) {
    alert(`Falha ao obter os dados: ${error}`);
    return '';
  }
};

export const fetchRobotsOverview = async () => {
  try {
    const response = await fetch('https://api-front-test.k8s.smarttbot.com/api/v1/robot/overview');
    const { data } = await response.json();
    return data;
  } catch (error) {
    alert(`Falha ao obter os dados: ${error}`);
    return '';
  }
};

export const createRobot = (body) => {
  fetch('https://api-front-test.k8s.smarttbot.com/api/v1/robot', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(() => alert('Falha ao cadastras, tente novamente mais tarde.'));
};
