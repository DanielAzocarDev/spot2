//Style
import "./Spot.css";

const Spot = ({ spot }) => {
  return (
    <div className="spot">
      <img src="" alt="" />
      <div>
        <h3>{spot?.name}</h3>
        <p>{spot?.reference ? spot?.reference : "No tiene"}</p>
        <p>{`Descripción: ${
          spot?.description ? spot?.description : "No tiene Descripción"
        }`}</p>
        <p>{`Metros cuadrados: ${spot?.square_space}`}</p>
        <p>{`Calle: ${spot?.street}`}</p>

        {spot?.photo && spot?.photo.map((img) => <img src={img} alt="" />)}
      </div>
    </div>
  );
};

export default Spot;
