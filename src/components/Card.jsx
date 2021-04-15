import React from "react";

// create a card component with an emoji name, icon and description
function Card(props){
    return(<div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emojiIcon}
            </span>
            <span>{props.emojiName}</span>
          </dt>
          <dd>
           {props.emojiMeaning}
          </dd>
        </div>
      </dl>
    </div>);
}

export default Card;