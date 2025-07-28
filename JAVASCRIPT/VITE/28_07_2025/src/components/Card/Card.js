import "./Card.css";

const Card = (element) => {
  return `
    <h2>${element.name}</h2>
    <h3>${element.short}</h3>
    `;
};

export default Card;
