
import './App.css'
import Button from './button';

function App() {
  

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.3Yi8Q7FETt0r9GvFWIOhIQHaFj&pid=Api&P=0&h=180')" }}>
    <header className="bg-green-200 text-blue-700 border-4 p-4 rounded-md text-center transition-colors duration-300 hover:bg-green-300">
      Happy Mother's Day
    </header>
    <h1 className="bg-black text-yellow-500 border-4 border-yellow-500 p-4 rounded-md text-center mt-4 transition-transform duration-500 transform hover:scale-105">
      Happy Mother's Day Messages, Sayings, Jokes, and Quotes
    </h1>
    <div className="bg-red-200 w-1/2 h-auto m-5 p-4 border-4 border-red-500 overflow-auto mt-4">
      <p>Wish Mom a Happy Mother&apos;s Day or say &quot;I love you&quot; with these heartfelt messages, sayings, jokes, prayers, and quotes that show you care. Moms are so important; they show us what love is, and they help us grow into strong women with families of our own.</p>
    </div>
  </div>
);
}

export default App
