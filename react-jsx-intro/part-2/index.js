const App = () => (
    <div>
      <Tweet
        username='Buzz'
        name='Lightyear'
        date='06/14/2022'
        message='To infinity and beyond!'
      />
      <Tweet
        username='KikisDelivery'
        name='Jiji'
        date='06/13/2022'
        message='I can deliver your goods by broom!'
      />
      <Tweet
        username='Jinx'
        name='Powder'
        date='06/12/2022'
        message='I make things go boom!'
      />
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));