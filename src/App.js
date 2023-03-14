import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
                
        <h1>lets build this app please </h1>
        <h2>here is one of the updates</h2>
      <AmplifySignOut/>
    </div>
    </AmplifyAuthenticator>
  );
}

export default App;
