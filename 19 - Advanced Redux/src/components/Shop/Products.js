import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Pão",
    description: "Pão de forma",
    quantity: 1,
    price: 10,
  },
  {
    id: 2,
    title: "Mangekyou Sharingam",
    description: "beans",
    quantity: 1,
    price: 999,
  },
  { id: 3, title: "arroz", description: "arroiz", quantity: 1, price: 2 },
  {
    id: 4,
    title: "manteiga",
    description: "cabeça de touro",
    quantity: 1,
    price: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={props.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
