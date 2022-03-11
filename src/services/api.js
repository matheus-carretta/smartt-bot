export const fetchRobots = async () => {
  const response = await fetch('https://api-front-test.k8s.smarttbot.com/api/v1/robot');
  const data = await response.json();
  return data;
};

export const fetchRobotsOrveview = async () => {
  const response = await fetch('https://api-front-test.k8s.smarttbot.com/api/v1/robot/overview');
  const { data } = await response.json();
  return data;
};
