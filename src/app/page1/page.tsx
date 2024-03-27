import View from "@/components/View";
import { Item } from "./interfaces";

const Page1 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();

  return (
    <div>
      {result.map((item: Item) => {
        return <View key={item.id} id={item.username} title={item.email} />;
      })}
    </div>
  );
};

export default Page1;
