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
  ListPrices,
  ItemPrice,
} from "./Dropdown.styled";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const [makesIsVisible, setMakesIsVisible] = useState(false);
  const [pricesIsVisible, setPricesIsVisible] = useState(false);
  const [makeValue, setMakeValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [
    mileageMinValue,
    //setMileageMinValue
  ] = useState("");
  const [
    mileageMaxValue,
    //setMileageMaxValue
  ] = useState("");

  var prices = [];
  for (var i = 10; i <= 500; i += 10) {
    prices.push(i);
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
        <DownBtn visible={pricesIsVisible} onHandleClick={setPricesIsVisible} />
        <ListPrices
          id="listPrices"
          className={` ${pricesIsVisible ? "prices_visible" : "prices_hidden"}`}
        >
          <ItemPrice
            className={`price_item ${priceValue === "" ? "active_item" : ""}`}
            data-value={""}
            onClick={() => {
              setPriceValue("");
              document
                .getElementById("listPrices")
                .classList.add("prices_hidden");
              setPricesIsVisible(false);
            }}
          >
            All
          </ItemPrice>
          {prices.map((price, index) => (
            <ItemPrice
              key={index}
              className={`price_item ${
                priceValue === price ? "active_item" : ""
              }`}
              data-value={price}
              onClick={() => {
                setPriceValue(price);
                document
                  .getElementById("listPrices")
                  .classList.add("prices_hidden");
                setPricesIsVisible(false);
              }}
            >
              {price}
            </ItemPrice>
          ))}
        </ListPrices>
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
          dispatch(setQuery({ make: `${makeValue}`, rentalPrice: `${priceValue}` }));
        }}
      >
        Search
      </Button>
    </Wrapper>
  );
};
