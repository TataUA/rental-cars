import { useState } from "react";
import { useDispatch } from "react-redux";
import { DownBtn } from "components/DownBtn/DownBtn";
import {
  Wrapper,
  Label,
  Input,
  MileageWrapper,
  Button,
  ListMakes,
  ItemMake,
} from "./Dropdown.styled";
import { setQuery } from "redux/advertsSlice";

export const Dropdown = () => {
  const makes = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
  ];
  const dispatch = useDispatch();
  const [makesIsVisible, setMakesIsVisible] = useState(false);
  const [makeValue, setMakeValue] = useState("");
  const [priceValue, 
    //setPriceValue
  ] = useState("");
  const [mileageMinValue, 
    //setMileageMinValue
  ] = useState("");
  const [mileageMaxValue, 
    //setMileageMaxValue
  ] = useState("");

  return (
    <Wrapper>
      <Label>
        Car brand
        <Input
          className={"input-make"}
          type="text"
          value={makeValue}
          name="make"
          placeholder="Enter the text"
        />
        <DownBtn visible={makesIsVisible} onHandleClick={setMakesIsVisible} />
        <ListMakes
          className={` ${makesIsVisible ? "makes_visible" : "makes_hidden"}`}
        >
          <ItemMake
            className={`make_item ${makeValue === "" ? "active_item" : ""}`}
            data-value={""}
            onClick={() => {
              setMakeValue("");
            }}
          >
            All
          </ItemMake>
          {makes.map((make, index) => (
            <ItemMake
              key={index}
              className={`make_item ${makeValue === make ? "active_item" : ""}`}
              data-value={make}
              onClick={() => {
                setMakeValue(make);
              }}
            >
              {make}
            </ItemMake>
          ))}
        </ListMakes>
      </Label>

      <Label>
        Price/ 1 hour
        <Input
          className={"input-price"}
          type="text"
          value={priceValue}
          name="price"
          readOnly
        />
        <DownBtn />
      </Label>
      <Label>
        Сar mileage / km
        <MileageWrapper>
          <Input
            className={"input-mileageMin"}
            type="text"
            value={mileageMinValue}
            name="mileageMin"
            readOnly
          />
          <Input
            className={"input-mileageMax"}
            type="text"
            value={mileageMaxValue}
            name="mileageMax"
            readOnly
          />
        </MileageWrapper>
      </Label>
      <Button
        type="submit"
        onClick={() => {
          dispatch(setQuery({ make: `${makeValue}` }));
        }}
      >
        Search
      </Button>
    </Wrapper>
  );
};
