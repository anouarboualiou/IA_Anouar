export default function PuntitoVerde({ isOnline }) {
  console.log("PuntitoVerde render");

  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: isOnline ? "green" : "red",
      }}
    />
  );
}
