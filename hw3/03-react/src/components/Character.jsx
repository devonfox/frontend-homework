import './Character.css';

// custom component for a character card
const Character = ({ character }) => {
  return (
    <div className="card text-center border-0">
      <div className="card-bg"></div>
      <img src={character.imageUrl} className="card-img-top portrait p-2 mt-4" alt={character.name} />
      <div className="card-body p-2">
        <div className="card-title fw-bold fs-5 mx-auto">{character.fullName}</div>
      </div>
    </div>
  );
};

export default Character;
