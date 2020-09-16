import React from 'react';
import FilterRepos from '../../components/FilterRepos';
import Enzyme, { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('filterRepos tests', () => {
  test('should render filterRepos', () => {
    const filterRepos = shallow(
      <ProviderMock>
        <FilterRepos />
      </ProviderMock>
    );
    expect(filterRepos.length).toEqual(1);
  });
});
