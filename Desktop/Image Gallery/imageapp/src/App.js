import img1 from "./assets/images/image1.avif";
import img2 from "./assets/images/image2.webp";
import img3 from "./assets/images/image3.webp";
import img4 from "./assets/images/image4.jpg";
import img5 from "./assets/images/image5.webp";
import img6 from "./assets/images/image6.jpg";
import img7 from "./assets/images/image7.webp";
import img8 from "./assets/images/image8.avif";

var arr = [
  {
    img: img1,
    name: "Alleppey",
    desc: "This image captures a tranquil scene in the backwaters of Kerala, India, a popular travel destination"
  },
  {
    img: img2,
    name: "Munnar",
    desc: "This image shows the scenic tea gardens of Munnar, a popular hill station in Kerala, India"
  },
  {
    img: img3,
    name: "Kerala backwaters",
    desc: "This image captures a serene moment in the Kerala backwaters"
  },
  {
    img: img4,
    name: "Kathakali",
    desc: "This image shows a performer dressed for Kathakali, a traditional dance-drama form originating"
  },
  {
    img: img5,
    name: "Athirappilly Water Falls",
    desc: "This is the majestic Athirappilly Water Falls, the largest waterfall in Kerala, India, situated on the Chalakudy River"
  },
  {
    img: img6,
    name: "Vembanad Lake",
    desc: "This image depicts a serene morning on the Vembanad Lake in Kerala, India"
  },
  {
    img: img7,
    name: "Alappuzha",
    desc: "This image captures a serene boat ride through the lush backwaters of Kerala, India, a popular tourist experience"
  },
  {
    img: img8,
    name: "Munnar",
    desc: "The image shows the expansive, rolling tea plantations in Munnar, a popular hill station located in Kerala, India"
  }
]

function Place(props) {
  return (
    <div className="image">
      <img src={props.Pimg} alt="places"></img>
      <h2>{props.Pname}</h2>
      <p>{props.Pdesc}</p>
    </div>
  )
}

function App() {
    return (
        <div>
            <div className="heading">
                <h1>Beauty of Kerala</h1>
            </div>
            <div className="imgcontainer">
                {
                    arr.map(function (item) {
                        return <Place Pimg={item.img} Pname={item.name} Pdesc={item.desc}></Place>
                    })
                }
            </div>
        </div>
    )
}

export {App};
