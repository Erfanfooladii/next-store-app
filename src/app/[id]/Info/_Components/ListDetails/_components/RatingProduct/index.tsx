const RatingProduct = ({
  rating,
  ratingCount,
}: {
  ratingCount: string | undefined;
  rating: string | undefined;
}) => {
  return (
    <div className="flex flex-col">
      <p>
        Rating: <span>{Number(rating).toFixed(2)}</span>
      </p>
      <p>
        Number of points:
        <span>{ratingCount}</span>
      </p>
    </div>
  );
};
export default RatingProduct;
