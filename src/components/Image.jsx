import product from "../../product";
function Image() {
  return (
    <>
      <img src={product.imageUrl} width="200" />
    </>
  );
}
export default Image;
