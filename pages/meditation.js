import MicroFrontend from "../components/MicroFrontend";

const { NEXT_PUBLIC_MEDITATION_HOST: meditationHost } = process.env;

function Meditation() {
  return <MicroFrontend host={meditationHost} name="Meditation" />;
}

export default Meditation;
