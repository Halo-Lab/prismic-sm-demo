import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import state from "../.slicemachine/libraries-state.json";
import { components } from "../slices";

const SliceSimulatorPage = () => (
<SliceSimulator
  sliceZone={(props) => <SliceZone {...props} components={components} />}
  state={state}
/>);

export default SliceSimulatorPage;