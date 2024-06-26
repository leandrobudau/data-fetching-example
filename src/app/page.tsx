import View from "@/components/View";
import Link from 'next/link';

interface Item {
  id: string
  title: string
}

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();

  const renderView = () => {
    return result.map((item: Item) => {
      return <View key={item.id} id={item.id} title={item.title} />;
    });
  };

  return (<main>
    <Link href="/page1">Proxima página</Link>
    <hr />
    {renderView()}
  </main>);
};

export default Home;
