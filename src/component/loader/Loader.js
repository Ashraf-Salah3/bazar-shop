import ReactDOM from 'react-dom';
import classes from "./loader.module.css"
import { loaderImg } from '../../assest';
const Loader = () => {
    return ReactDOM.createPortal(
        <div className={classes.wrapper}>
            <div className={classes.loader}>
                <img src={loaderImg} alt='Loading...'></img>
            </div>
        </div>,
        document.getElementById("loading")
    );
}

export default Loader;