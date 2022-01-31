function PgAboutMe(props) {
  const { name, location, favoriteFoods } = props;
  //? If you want to destructure then you can
  return (
    <div>
      <h3>{name}</h3>
      <p>{props.location}</p>
      <ul>
        <li>Korea</li>
        <li>Guam</li>
        <li>Hong Kong</li>
      </ul>
      <p>Favorite Foods</p>
      <ul>
        {props.favoriteFoods.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default PgAboutMe;
