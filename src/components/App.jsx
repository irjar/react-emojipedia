import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"



// take a single emoji term; return a single Card component 
// and pass the props: key, emojiIcon, emojiName and emojiMeaning
// map through the emojipedia array and render Card components
function App() {
  return (
    <div>
    <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map( newCard =>(
    <Card
    key={newCard.id}
    emojiIcon={newCard.emoji}
    emojiName={newCard.name}
    emojiMeaning={newCard.meaning}
    />
        ))}
    </dl>
    </div>
  );
}

export default App;
