import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "redux/advertsSlice";
import { DownBtn } from "components/DownBtn/DownBtn";
import makesData from "data/makes.json";
import {
  Wrapper,
  Label,
  Input,
  MileageWrapper,
  Button,
  ListMakes,
  ItemMake,
} from "./Dropdown.styled";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const [makesIsVisible, setMakesIsVisible] = useState(false);
  const [makeValue, setMakeValue] = useState("");
  const [
    priceValue,
    //setPriceValue
  ] = useState("");
  const [
    mileageMinValue,
    //setMileageMinValue
  ] = useState("");
  const [
    mileageMaxValue,
    //setMileageMaxValue
  ] = useState("");

  var numbers = [];
for (var i = 10; i <= 500; i += 10) {
  numbers.push(i);
}

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
          readOnly
        />
        <DownBtn visible={makesIsVisible} onHandleClick={setMakesIsVisible} />
        <ListMakes
          id="listMakes"
          className={` ${makesIsVisible ? "makes_visible" : "makes_hidden"}`}
        >
          <ItemMake
            className={`make_item ${makeValue === "" ? "active_item" : ""}`}
            data-value={""}
            onClick={() => {
              setMakeValue("");
              document
                .getElementById("listMakes")
                .classList.add("makes_hidden");
              setMakesIsVisible(false);
            }}
          >
            All
          </ItemMake>
          {makesData.map((make, index) => (
            <ItemMake
              key={index}
              className={`make_item ${makeValue === make ? "active_item" : ""}`}
              data-value={make}
              onClick={() => {
                setMakeValue(make);
                document
                  .getElementById("listMakes")
                  .classList.add("makes_hidden");
                setMakesIsVisible(false);
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
