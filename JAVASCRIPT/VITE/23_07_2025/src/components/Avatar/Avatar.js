import "./Avatar.css";
import colors from "../../colors";

const Avatar = (name, imageURL) => {
  const randomColorPos = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorPos];

  if (imageURL) {
    return `
        <div class="avatar">
            <img src="${imageURL}" alt="${name} avatar"/>
        </div>
        `;
  } else {
    return `
         <div class="avatar" style="background-color: ${color};">
            <h2>${name[0]}</h2>
         </div>
        `;
  }
};

export default Avatar;
