import MyLoader from '../response/myLoader.gif'
import Spinner from '../response/spinner.gif'
import '../styles/myLoader.css';

export default function Loader() {
  return (
    <div className="myLoader">
      <img src={Spinner} alt="imgae not found" />
    </div>
  )
}
