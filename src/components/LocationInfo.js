import '../App.css';

function LocationInfo({info}) {
  return (
    <div className="LocationInfo">
      <h1>Location Info</h1>
      <h2>Name: {info[0]}</h2>
      <h2>Dimension: {info[1]}</h2>
      <h2>Type: {info[2]}</h2>
      <h2>Residents: {info[3]}</h2>
    </div>
  );
}

export default LocationInfo;
