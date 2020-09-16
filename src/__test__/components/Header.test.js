import React from 'react';
import Header from '../../components/Header/Header';
import Enzyme, { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header tests', () => {
  test('should render Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });
});
