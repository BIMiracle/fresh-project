import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date(new Date().getTime() + 10000);
  console.log(date.toLocaleString());
  
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}