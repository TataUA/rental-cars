import { ItemCar } from "components/ItemCar/ItemCar";
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
