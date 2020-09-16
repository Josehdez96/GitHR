import React from 'react';
import CandidateForm from '../../components/CandidateForm';
import Enzyme, { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Form tests', () => {
  test('should render Form', () => {
    const form = shallow(
      <ProviderMock>
        <CandidateForm />
      </ProviderMock>
    );
    expect(form.length).toEqual(1);
  });
});
