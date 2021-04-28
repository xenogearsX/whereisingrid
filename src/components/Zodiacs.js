import './Zodiacs.css'

const Zodiacs = zodiac => {
  return (
    <div key={zodiac.zodiac.id} className="zodiac">
      <h2>{zodiac.zodiac.name}</h2>
      <h3>{zodiac.zodiac.date}</h3>
      <img src={zodiac.zodiac.constellation} alt={zodiac.zodiac.name} />
      <p>{zodiac.zodiac.description}</p>
      <p>Elément: {zodiac.zodiac.element}</p>
    </div>
  );
};

export default Zodiacs;
