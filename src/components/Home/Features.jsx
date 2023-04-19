import demo from "../../assets/images/demo3.PNG";

const features = [
  {
    title: "User Friendly",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
  },
  {
    title: "Unlimited Features",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
  },
  {
    title: "Free Updates",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
  },
  {
    title: "Lifetime Access",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
  },
];

const Features = () => {
  return (
    <div>
      <p className="feature-title">
        Outstanding Core Features <br /> of The Product
      </p>
      <div className="feature-container">
        <div className="features">
          {features.map((feature) => (
            <div className="feature" key={feature.title}>
              <p>{feature.title}</p>
              <div>{feature.description}</div>
            </div>
          ))}
        </div>
        <div className="feature-img">
          <img src={demo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
