import React from 'react';
import GithubTable from '../../components/GithubTable';
import Enzyme, { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Github table', () => {
  test('should render table', () => {
    const table = shallow(
      <ProviderMock>
        <GithubTable />
      </ProviderMock>
    );
    expect(table.length).toEqual(1);
  });
});
