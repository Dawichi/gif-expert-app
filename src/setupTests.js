// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';


// Enzyme - https://enzymejs.github.io/enzyme/
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// Enzyme-To-JSON - https://www.npmjs.com/package/enzyme-to-json
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

