function PgAboutMe() {
  const favoriteFoods = ["tacos", "pizza", "indian food", "chocolate"];
  return (
    <div>
      <h3>Rob</h3>
      <p>I'm from Fort Wayne Indiana</p>
      <ul>
        <li>Korea</li>
        <li>Guam</li>
        <li>Hong Kong</li>
      </ul>
      <p>Favorite Foods</p>
      <ul>
        {favoriteFoods.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default PgAboutMe;
