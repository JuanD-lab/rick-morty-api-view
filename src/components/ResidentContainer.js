
import '../App.css';
import ResidentInfo from './ResidentInfo'

function ResidentContainer({arrayCharacters}) {
  
  const arrayCharactersMap = arrayCharacters.map((value) => (
    <ResidentInfo arrayCharactersUrl={value}/>
  ));

  return (
    <div className="ResidentContainer">
        {arrayCharacters.length > 0 && arrayCharactersMap}
    </div>
  );
}
export default ResidentContainer;
