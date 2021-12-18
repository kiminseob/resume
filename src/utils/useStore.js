import React from 'react';
import { MobXProviderContext } from 'mobx-react';

function useStore() {
  return React.useContext(MobXProviderContext);
}

export default useStore;
