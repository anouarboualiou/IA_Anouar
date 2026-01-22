import IconoOnline from "./IconoOnline/IconoOnline";

export default function Avatar({ avatar, isOnline }) {
  console.log("Avatar render");

  return (
    <div>
      <img src={avatar} width={50} />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
}
