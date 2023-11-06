import PropTypes from "prop-types";
import logo from "images/logo.png";
import {
  ItemWrapper,
  Image,
  DescriptionWrapper,
  ItemTitle,
  Model,
  Year,
  WrapperUp,
  WrapperDown,
  Tag,
  Button,
  Description,
  DetailsTitle,
  Accessories,
  AccessoriesItem,
  Functionalities,
  FunctionalitiesItem,
  Condition,
} from "./ModalItemCar.styled";

export const ModalItemCar = ({ item }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    functionalities,
    fuelConsumption,
    engineSize,
    rentalPrice,
    address,
    mileage,
    description,
    accessories,
    rentalConditions,
  } = item;

  const adressArray = address.split(",");

  const conditionsRental = rentalConditions.split("\n");
  const minimumAge = conditionsRental[0].split(":");

  return (
    <ItemWrapper>
      {img ? (
        <Image src={img} alt={make} width={461} height={248}></Image>
      ) : photoLink ? (
        <Image src={photoLink} alt={make} width={461} height={248}></Image>
      ) : (
        <Image src={logo} alt="car" width={461} height={248}></Image>
      )}

      <DescriptionWrapper>
        <ItemTitle>
          {make} &nbsp;<Model>{model}</Model>
          <Year>, {year}</Year>
        </ItemTitle>
        <WrapperUp>
          <Tag>{adressArray[adressArray.length - 2]}</Tag>
          <Tag>{adressArray[adressArray.length - 1]}</Tag>
          <Tag className="tag_id">{`Id: ${id}`}</Tag>
          <Tag className="tag_year">{`Year: ${year}`}</Tag>
          <Tag className="tag_type">{`Type: ${type}`}</Tag>
        </WrapperUp>
        <WrapperDown>
          <Tag className="tag_fuelConsumption">{`Fuel Consumption: ${fuelConsumption}`}</Tag>
          <Tag className="tag_engineSize">{`Engine Size: ${engineSize}`}</Tag>
        </WrapperDown>
        <Description>{description}</Description>
        <DetailsTitle>Accessories and functionalities:</DetailsTitle>
        <Accessories>
          {accessories.map((item, index) => (
            <AccessoriesItem key={index}>{item}</AccessoriesItem>
          ))}
        </Accessories>
        <Functionalities>
          {functionalities.map((item, index) => (
            <FunctionalitiesItem key={index}>{item}</FunctionalitiesItem>
          ))}
        </Functionalities>
        <DetailsTitle>Rental Conditions: </DetailsTitle>
        <WrapperUp>
          <Condition>
            Minimum age: <span>{minimumAge[1]}</span>
          </Condition>
          <Condition>{conditionsRental[1]}</Condition>
        </WrapperUp>
        <WrapperDown>
          <Condition>{conditionsRental[2]} </Condition>
          <Condition>
            Mileage: <span>{mileage.toLocaleString("en-US")}</span>
          </Condition>
          <Condition>
            Price: <span>{`${rentalPrice.substring(1)}$`}</span>
          </Condition>
        </WrapperDown>
      </DescriptionWrapper>
      <Button href="tel:+380730000000">Rental car</Button>
    </ItemWrapper>
  );
};

ModalItemCar.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string,
    photoLink: PropTypes.string,
    functionalities: PropTypes.array,
    fuelConsumption: PropTypes.array,
    rentalPrice: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.array,
    rentalConditions: PropTypes.array,
  }).isRequired,
};
