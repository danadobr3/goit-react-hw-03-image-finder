import { TailSpin } from 'react-loader-spinner';

import cssloader from './Loader.module.css';

const Loader = () => (
  <div className={cssloader.Loader}>
    <TailSpin type="TailSpin" color="#02be6e" height={100} width={100} />
  </div>
);

export default Loader;
