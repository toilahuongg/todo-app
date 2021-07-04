import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useStore = (callback: (st: any) => any) => {
  const { store } = useContext(MobXProviderContext);
  return callback(store);
};

export default useStore;