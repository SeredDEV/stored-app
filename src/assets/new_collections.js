import mainecoon1_img from "./Product/cats/mainecoon1.png";
import mainecoon2_img from "./Product/cats/mainecoon2.png";
import mainecoon3_img from "./Product/cats/mainecoon3.png";
import mainecoon4_img from "./Product/cats/mainecoon4.png";
import mainecoon5_img from "./Product/cats/mainecoon5.png";
import mainecoon6_img from "./Product/cats/mainecoon6.png";
import mainecoon7_img from "./Product/cats/mainecoon7.png";
import mainecoon8_img from "./Product/cats/mainecoon8.png";
import persa1_img from "./Product/cats/persa1.png";
import persa2_img from "./Product/cats/persa2.png";
import persa3_img from "./Product/cats/persa3.png";
import persa4_img from "./Product/cats/persa4.png";
import persa5_img from "./Product/cats/persa5.png";
import persa6_img from "./Product/cats/persa6.png";
import persa7_img from "./Product/cats/persa7.png";
import persa8_img from "./Product/cats/persa8.png";
import ragdoll1_img from "./Product/cats/ragdoll1.png";
import ragdoll2_img from "./Product/cats/ragdoll2.png";
import ragdoll3_img from "./Product/cats/ragdoll3.png";
import ragdoll4_img from "./Product/cats/ragdoll4.png";
import ragdoll5_img from "./Product/cats/ragdoll5.png";
import ragdoll6_img from "./Product/cats/ragdoll6.png";
import ragdoll7_img from "./Product/cats/ragdoll7.png";
import ragdoll8_img from "./Product/cats/ragdoll8.png";
import siames1_img from "./Product/cats/siames1.png";
import siames2_img from "./Product/cats/siames2.png";
import siames3_img from "./Product/cats/siames3.png";
import siames4_img from "./Product/cats/siames4.png";
import siames5_img from "./Product/cats/siames5.png";
import siames6_img from "./Product/cats/siames6.png";
import siames7_img from "./Product/cats/siames7.png";
import siames8_img from "./Product/cats/siames8.png";

// Función para seleccionar aleatoriamente dos índices de imágenes de cada raza de gatos
function getRandomIndexes(max) {
  const indexes = [];
  while (indexes.length < 2) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

let new_collections = [
  {
    id: 1,
    name: "Maine Coon",
    image: mainecoon1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "Maine Coon cat relaxing in the sun.",
  },
  {
    id: 3,
    name: "Persian",
    image: persa1_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "Fluffy Persian cat with blue eyes.",
  },
  {
    id: 5,
    name: "Ragdoll",
    image: ragdoll8_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "Ragdoll cat with striking blue eyes.",
  },
  {
    id: 8,
    name: "Siamese",
    image: siames7_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "Siamese kitten exploring the garden.",
  },
  {
    id: 2,
    name: "Maine Coon",
    image: mainecoon5_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Playful Maine Coon kitten on a couch.",
  },
  {
    id: 6,
    name: "Ragdoll",
    image: ragdoll2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Cute Ragdoll kitten playing with a toy.",
  },
  {
    id: 7,
    name: "Siamese",
    image: siames1_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "Elegant Siamese cat on a windowsill.",
  },
  {
    id: 4,
    name: "Persian",
    image: persa6_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "Persian cat sitting on a pillow.",
  },
];

export default new_collections;