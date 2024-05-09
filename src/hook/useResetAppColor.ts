import { useContext, useEffect } from "react";
import { AppContext } from "@/pages/_app";

export const useResetAppColor = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    if (
      context &&
      (context.appColor.background !== "#fff" ||
        context.appColor.text !== "#000")
    ) {
      context.setAppColor({
        background: "#fff",
        text: "#000",
      });
    }
  }, []);
};
