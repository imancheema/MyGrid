import { Load } from "../../models/loads";
import {
  deleteLoad,
} from "../../frontend-services/loads.services.ts"
interface ILoadHeader {
  load: Load;
  setOpenModal: Function;
}

const LoadHeader = ({ load, setOpenModal }: ILoadHeader) => {

  const deletethisLoad = () => {

    deleteLoad(load.Id)
    window.location.reload();
  };

  return (
      <td>
        <div className="Load-Head" id="Load-Head1">{load.Name}</div>
        <div className="Load-Value" id="Load-Value">{load.Powerusage}kWh</div>
        <div>
            <button className="Edit" onClick={() => {
              setOpenModal({open: true, type: 'edit', load: load});
            }}>Edit</button>
            <button className="Delete" onClick={deletethisLoad}>Delete</button>
        </div>
      </td>
  );
};

export default LoadHeader;
