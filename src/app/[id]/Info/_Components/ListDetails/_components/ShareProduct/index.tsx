import { FavoriteLink, ShareLink, SyncLink } from "./ShareLinks";

const ShareProduct = () => {
  return (
    <div className="flex gap-1 justify-center py-2">
      <FavoriteLink />
      <SyncLink />
      <ShareLink />
    </div>
  );
};
export default ShareProduct;
