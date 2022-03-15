import React from 'react';
import { render } from '@testing-library/react';
import RobotsContext from '../context/RobotsContext';
import { mockRobots } from './mocks';
import RobotContainer from '../components/RobotContainer';

describe('RobotContainer component', () => {
  it('render the correct texts and titles', () => {
    const { getByTestId } = render(
      <RobotsContext.Provider value={mockRobots}>
        <RobotContainer />
      </RobotsContext.Provider>,
    );

    const headerText = getByTestId('robot-cards-container');
    expect(headerText).toBeTruthy();

    mockRobots.robots.forEach((robot) => {
      const robotTitle = robot.title;
      const rt = getByTestId(robot.title);

      expect(rt.innerHTML).toBe(robotTitle);
      expect(robotTitle).toBeTruthy();
    });
  });
});
