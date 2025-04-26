"use client";
import SliderImages from "./_components/SliderImage";
import { useProductCard } from "@/app/[id]/hook";
import TitleProduct from "./_components/TitleProduct";
import DescriptionProduct from "./_components/DescriptionProduct";
import RatingProduct from "./_components/RatingProduct";
import PriceProduct from "./_components/PriceProduct";
import ColorProduct from "./_components/ColorProduct";
import QytProduct from "./_components/QytProduct";
import ShareProduct from "./_components/ShareProduct";
import ButtonProduct from "./_components/ButtonProduct";
import LoadingPage from "@/Components/Loading";
const ListDetails = ({ id }: { id: string }) => {
  const { isLoading, data, error, buttonHadnler, isCart } = useProductCard({
    id,
  });
  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="md:flex md:gap-2 md:justify-center">
      <div className="w-full md:w-[700px] rounded-lg min-h-72 p-2 bg-orange-400">
        <SliderImages images={data?.images} />
      </div>
      <div className="p-2">
        <div className="flex h-full flex-col border-b border-white py-1 md:justify-between">
          <TitleProduct title={data?.name} />
          <DescriptionProduct description={data?.description} />
          <RatingProduct
            rating={data?.rating}
            ratingCount={data?.ratingCount}
          />
          <PriceProduct price={data?.price} />
          <div className="flex gap-2">
            <QytProduct />
            <ColorProduct />
          </div>
          <ShareProduct />
          <ButtonProduct isCart={isCart} buttonHadnler={buttonHadnler} />
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
