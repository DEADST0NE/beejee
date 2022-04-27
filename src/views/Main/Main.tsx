import { Header, Tasks } from '../../components';

import './Main.scss';

const Main = () => (
  <>
    <Header />
    <section className="app-container">
      <Tasks />
    </section>
  </>
);

export default Main;
