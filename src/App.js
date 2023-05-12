
import './App.css';
//import Clock from './components/Clock';
//import LoginControl from './components/LoginControl';
//import { useState } from 'react';
// import Blog from './components/Blog';
//import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import { useState } from 'react';

function App() {
    const [searchText, setSearchText] = useState();
    //const [flag, setFlag] = useState(true);
    // const toggle = () => {
    //   setFlag(!flag);
    // }

    const handleSearch = (e)=> {
      setSearchText(e.target.value);
    }

    const posts = [
      {
        id: 1,
        title: 'Damage dealer',
        name: 'Raiden Shogun'
      },
      {
        id: 2,
        title: 'Sheild',
        name: 'Zhongli'
      },{
        id: 3,
        title: 'Sub DPS',
        name: 'Ganyu'
      },
      {
        id: 4,
        title: 'Healer',
        name: 'Bennet'
      }
    ]

    const filterList = posts.filter((items)=>{
     return items.name.toLocaleLowerCase().includes(searchText);
    });

  return (
    <>
    {/* onClick function do tarah se call kr sakte hai ek upar function bana k dusra anonymous function se jo neeche button me bana hua hai
    <button onClick={()=>setFlag(!flag)}>Toggle</button>
    {flag ? <Clock /> : "Nothing to display here"} 
    <LoginControl />
    
    <Blog posts = {posts}/>
    <Form />
    */}
      <Search searchText={searchText} handleSearch={handleSearch}/>
      <List list={filterList}/>
    </>
    
  );
}

export default App;
