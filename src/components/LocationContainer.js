import '../App.css';
import LocationInfo from './LocationInfo'
import ResidentContainer from './ResidentContainer'

function LocationContainer({characters, arrayInfo}) {
  return (
    <div className="LocationContainer"> 
      <LocationInfo info={arrayInfo}/>
      <ResidentContainer arrayCharacters={characters}/>
    </div>
  );
}

export default LocationContainer;