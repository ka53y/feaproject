import './App.css';
import React from 'react';
import "survey-react/survey.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AccordionComponent from './AccordionComponent';


function App() {
  const col1 ="PLT";
  const col2 ="T40";
  const col3="Individual";
  const col4 ="Team";
  const col5 ="Collective";
  const col6 ="Knowledge";
  const col7 ="Crew";
  const col8 ="Scope";
  const col9 ="Comm 2";
  const col10 ="Comm 3";
  const col11="Radar 2";
  const col12 ="Radar 3";
  const col13 ="IFF 2";
  const col14 ="Cec 2";
  const col15 ="Cec 4";
  const col16 ="Link16-1";
  const col17 ="Link16-2";
  const col18 ="Link16-3";
  const col19 ="ESM 2";
  const col20 ="ESM 3";
  const col21 ="ESM 4";
  const col22 ="Enemy Target Attributes";
  const col23 ="Friendly Target Attributes";
  const col24 ="A/A and A/S Missle Atrributes";
  const col25 ="Sam Attributes";
  const col26 ="S2S Attributes";
  const col27 ="Threat Aircraft Attributes";
  const col28 ="Console Attributes 1";
  const col29 ="Console Attributes 2";
  const col30 ="Console Attributes 3";
  
  return (
    <div className="App">
      <header className="App-header">
      <Tabs>
    <TabList>
      <Tab><text>{col1}</text></Tab>|| 
      <Tab><text>{col2}</text></Tab>|| 
      <Tab><text>{col3}</text></Tab>|| 
      <Tab><text>{col4}</text></Tab>|| 
      <Tab><text>{col5}</text></Tab>|| 
      <Tab><text>{col6}</text></Tab>|| 
      <Tab><text>{col7}</text></Tab>|| 
      <Tab><text>{col8}</text></Tab>|| 
      <Tab><text>{col9}</text></Tab>|| 
      <Tab><text>{col10}</text></Tab>|| 
      <Tab><text>{col11}</text></Tab>|| 
      <Tab><text>{col12}</text></Tab>|| 
      <Tab><text>{col13}</text></Tab>|| 
      <Tab><text>{col14}</text></Tab>|| 
      <Tab><text>{col15}</text></Tab>|| 
      <Tab><text>{col16}</text></Tab>|| 
      <Tab><text>{col17}</text></Tab>|| 
      <Tab><text>{col18}</text></Tab>|| 
      <Tab><text>{col19}</text></Tab>|| 
      <Tab><text>{col20}</text></Tab>|| 
      <Tab><text>{col21}</text></Tab>|| 
      <Tab><text>{col22}</text></Tab>|| 
      <Tab><text>{col23}</text></Tab>|| 
      <Tab><text>{col24}</text></Tab>|| 
      <Tab><text>{col25}</text></Tab>|| 
      <Tab><text>{col26}</text></Tab>|| 
      <Tab><text>{col27}</text></Tab>||
      <Tab><text>{col28}</text></Tab>|| 
      <Tab><text>{col29}</text></Tab>||
      <Tab><text>{col30}</text></Tab>
    </TabList>

    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><AccordionComponent /></h2>
    </TabPanel>

  </Tabs>


      </header>
    </div>
  );
}

export default App;
