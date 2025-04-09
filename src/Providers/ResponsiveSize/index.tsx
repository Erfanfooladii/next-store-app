import useWindowDimensions from "@/utils/media.hook";
import { ReactNode, useEffect, useState } from "react";

const ProviderMobileSize = ({
  children,
  isReverse = false,
}: {
  children: ReactNode;
  isReverse?: boolean;
}) => {
  const sizeScreen = useWindowDimensions();
  const [isRender, setIsRender] = useState<boolean>(false);
  useEffect(() => {
    if (sizeScreen.width !== null && sizeScreen.width > 500) {
      setIsRender(true);
    } else {
      setIsRender(false);
    }
  }, [sizeScreen.width]);
  if (isReverse) {
    return isRender ? null : children;
  } else {
    return isRender ? children : null;
  }
};
export { ProviderMobileSize };
