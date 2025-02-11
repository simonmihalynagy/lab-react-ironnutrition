import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props) {
  const [quantity, setQuantity] = useState(0);

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const onAddFoodToToday = () => {
    if (quantity !== 0) {
      const calories = props.food.calories * quantity;
      const food = {
        name: props.food.name,
        calories: calories,
        quantity: quantity,
      };

      props.onAddToMenu(food);
    } else {
      return;
    }
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt="foodPic" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={quantityChangeHandler}
              />
            </div>
            <div className="control">
              <button
                onClick={onAddFoodToToday}
                type="button"
                className="button is-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
