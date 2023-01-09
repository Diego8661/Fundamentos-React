import React from 'react';
import Post from './Post'
import Header from './Header';


function App(){
  return (
    <>
      <Header>
        <h2>Posts da Semana </h2>
      </Header>
      

      <hr />

      <Post
        likes={20}
        post={{
          title: 'Post 01',
          subtitle: 'Programação 1',
        }}
      />
      <Post
        likes={30}
        post={{
          title: 'Post 02',
          subtitle: 'Programação 2',
        }}
      />
      <Post
        likes={15}
        post={{
          title: 'Post 03',
          subtitle: 'Programação 3',
        }}
      />
    </>
  );
}

export default App;