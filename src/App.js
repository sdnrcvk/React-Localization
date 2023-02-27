import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'
import { useEffect, useState } from 'react';

const messages = {
    "tr-TR":{
      title: "Merhaba Kullanıcı!",
      description:"{count} yeni mesajınız var..."
    },
    "en-US":{
      title: "Hello User!",
      description:"You have {count} new messages...",
    }
};


function App() {
  const isLocale=localStorage.getItem("locale");
  const defaultLocale=isLocale ? isLocale : navigator.language;
  const [locale,setLocale]=useState(defaultLocale);


  useEffect(()=>{
    localStorage.setItem("locale",locale);

  },[locale]);


  return (
    <div className="App">
      <div style={{margin:"50px auto",backgroundColor:"#FFB84C",padding:"20px",width:"500px"}}>
          <IntlProvider 
            locale={locale}
            messages={messages[locale]}
          >
            <FormattedMessage id="title"/>
            <p>
              <FormattedMessage id="description" values={{count: 5}}/>
            </p>
            <br />
            <button onClick={()=>setLocale("tr-TR")} style={{padding:"10px",borderRadius:"5px",cursor:"pointer"}}>TR</button>&nbsp;
            <button onClick={()=>setLocale("en-US")} style={{padding:"10px",borderRadius:"5px",cursor:"pointer"}}>EN</button>
          </IntlProvider>
      </div>
    </div>
  );
}

export default App;
