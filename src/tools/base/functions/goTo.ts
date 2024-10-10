
// ---------- import Local Tools
import { tools } from '../..';

type Tprops_goTo = {
  args: any;
  pass: { path: string };
};
export const goTo = async (props: Tprops_goTo) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { path } = pass;
console.log({path});

  // ---------- get Function from A_Project Scope
  return tools.goTo(path);
};

