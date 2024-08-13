import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEye,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

export default function IconList() {
  return (
    <div>
      <p>Danh sách icon</p>
      <FontAwesomeIcon
        icon={faCoffee}
        style={{ width: "30px", height: "30px" }}
      />
      <FontAwesomeIcon icon={faEye} style={{ width: "30px", height: "30px" }} />
      <FontAwesomeIcon
        icon={faFloppyDisk}
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
}
