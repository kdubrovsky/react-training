import { render } from 'react-dom';
import Counter from './components/Counter';

const root = document.querySelector('#root');

render(
  <div>
    <Counter />
  </div>,
  root
);
