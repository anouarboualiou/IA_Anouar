import PuntitoVerde from "./PuntitoVerde/PuntitoVerde";

export default function IconoOnline({ isOnline }) {
  console.log("IconoOnline render");
  return <PuntitoVerde isOnline={isOnline} />;
}
