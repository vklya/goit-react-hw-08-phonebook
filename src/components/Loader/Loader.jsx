import { BounceLoader } from "react-spinners";
import css from './loader.module.scss';

const Loader = () => <BounceLoader color="#3a5199" className={css.loader} />;

export default Loader;