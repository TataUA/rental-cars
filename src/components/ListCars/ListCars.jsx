import { ItemCar } from "components/ItemCar/ItemCar";
import PropTypes from "prop-types";
import { List } from "./ListCars.styled";

export const ListCars = ({ items }) => {
  return (
    <>
      <List>
        {items.map((item) => (
          <ItemCar key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};

ListCars.propTypes = {
  items: PropTypes.array.isRequired,
};
