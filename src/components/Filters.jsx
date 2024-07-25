import { Form, Link, useLoaderData } from "react-router-dom";
import { FormCheckBox, FormInput, FormRange, FormSelect } from ".";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="rounded-md bg-base-200 px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        size={"input-sm"}
        type={"search"}
        label={"Search Product"}
        name={"search"}
      />
      {/* CATEGORIES */}
      <FormSelect
        label={"Select Company"}
        list={meta.companies}
        size={"select-sm"}
        name={"company"}
      />
      {/* COMPANIES */}
      <FormSelect
        label={"Select Category"}
        list={meta.categories}
        size={"select-sm"}
        name={"category"}
      />
      {/* ORDER */}
      <FormSelect
        label={"Sort By"}
        list={["a-z", "z-a", "high to low", "low to high"]}
        size={"select-sm"}
        name={"order"}
      />
      {/* RANGE */}
      <FormRange name={"price"} label={'Select price'} size={"range-sm"} />
      {/* SHIPPING */}
      <FormCheckBox name={"shipping"} label={"free shipping"} size={"checkbox-sm"} />
      {/* BUTTONS */}
      <button className="btn btn-primary btn-sm"> Search </button>
      <Link to={"/products"} className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
