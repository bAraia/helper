import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import awsConfig from './aws-exports';
import {Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator> {({signOut, user}) => (
      <main>
        <h1> hello {user.username} </h1>
        <button onClick={signOut} > Sign Out </button>
      </main>
    )}
    <div className="App">
                
        <h1>lets build this app please </h1>
        <h2>here is one of the updates</h2>
    </div>
    </Authenticator>
  );
}

export default App;
