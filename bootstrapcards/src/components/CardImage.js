const CardImage = (props) => {
  return (
    <img
      src={props.img}
      className="card-img-top"
      alt="photo of location"
    />
  );
};

export default CardImage;