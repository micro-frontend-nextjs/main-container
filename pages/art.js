// import MicroFrontend from "../components/MicroFrontend";
import MicroFrontend from "../components/MicroFrontend";

const { NEXT_PUBLIC_ART_HOST: artHost } = process.env;

function Art() {
  return <MicroFrontend host={artHost} name="Art" />;
}

export default Art;
