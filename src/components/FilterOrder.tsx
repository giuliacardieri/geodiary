import React from "react";
import Button from "./Button";
import Form from "./form/Form";
import Input from "./form/Input";
import Country from "../interfaces/Country.interface";
import "../css/filterOrder.css";
import {
  faAdd,
  faFilter,
  faSearch,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

/*
props:
- ordering
  - alphabetically a-z
  - alphabetically z-a
  - updated a long time ago
  - most recent updated
  - less categories
  - more categories
- filtering
  - string
  - category
*/

interface FilterOrderProps {}

class FilterOrder extends React.Component<
  FilterOrderProps,
  { countries: Country[] }
> {
  constructor(props: FilterOrderProps) {
    super(props);
    this.state = {
      countries: [
        {
          name: "Brazil",
          linkName: "brazil",
          flag: "br",
          tips: 10,
          categories: ["cars", "landscape"],
        },
        {
          name: "Dominican Republic",
          linkName: "dominican-republic",
          flag: "do",
          tips: 2,
          categories: ["brands", "landscape"],
        },
      ],
    };
  }

  render() {
    return (
      <div className="filter-order">
        <Form inline>
          <Input
            type="text"
            placeholder="Search"
            name="search"
            icon={faSearch}
          />
          <Button label="Go" />
        </Form>
        <Button label="New tip/country" secondary icon={faAdd} />
        <Button label="Order" icon={faSort} />
        <Button label="Filter" icon={faFilter} />
      </div>
    );
  }
}

export default FilterOrder;
