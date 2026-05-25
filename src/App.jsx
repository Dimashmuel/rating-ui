import Rating from './components/Rating';


const App = () => {
  return <div>
    <Rating
      heading='How do you feel about React?'
      feedbackMessages={['Hate it', 'Dislike', 'Neutral', 'Like it', 'Love it']}
    />
  </div>;
};

export default App;