const App = () => (
    <div>
      <Person
        name='Ponyo'
        age={5}
        hobbies={['Eating Ham', 'Swimming']}
      />
      <Person
        name='Sosuke'
        age={5}
        hobbies={['Fishing', 'Swimming', 'Floating Toy Boats']}
      />
      <Person name='Lisa' 
      age={35} 
      hobbies={['Cooking', 'Driving', 'Being a Good Mom']} />
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));