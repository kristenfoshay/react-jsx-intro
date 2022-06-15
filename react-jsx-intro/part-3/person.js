const Person = ({ name, age, hobbies }) => {
    return (
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid black' }}>
        <p>Learn some information about this person</p>
        <p>Name: {name && name.length >= 8 ? name.substr(0, 6) : name}</p>
        {age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18!</h3>}
        <div>
          <b>Hobbies:</b>
          <ul>
            {hobbies.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };