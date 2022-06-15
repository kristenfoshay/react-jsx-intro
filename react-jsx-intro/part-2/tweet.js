const Tweet = ({ username, name, date, message }) => {
    return (
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid black' }}>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Date: {date}</p>
        <p>Message: {message}</p>
      </div>
    );
  };