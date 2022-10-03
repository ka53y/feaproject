import './App.css';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Text } from 'react-native';

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  
  render() {
    let json = {
        "q1t": "proper air intercept control communications in the format described in the TOPGUN manual.",
        "q1n": "4.5.6.1.1",
        "q2t": "data",
      
      questions: [
        {
          type: "dropdown",
          name: "4.5.6.1.1",
          title: "proper air intercept control communications in the format described in the TOPGUN manual.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.2",
          title: "various formations.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.3",
          title: "correct picture calls IAW TOPGUN standardization",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.4",
          title: "air contacts according to the ROE in effect.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.5",
          title: "appropriate tactics.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.6",
          title: "detection procedures.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.7",
          title: "tracking procedures.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.8",
          title: "optimimal system set-up, utilization, and evaluation procedures.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.9",
          title: "proper communications procedures.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        },
        {
          type: "dropdown",
          name: "4.5.6.1.10",
          title: "proper crew coordination procedures.",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ]
          
          
        }
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}


function App() {
  const ac1 = "AAWs";
  const ac1p1 = "AAW 201 - Strike FIghter Tactics (DISTRUIBUTED/LVC)";
  const ac1p2 = "AAW 202 - Non-Permissive Fighter Tactics (NFT)";
  const ac1p3 = "AAW 203 - Permissive Fighter Tactics (PFT) DISTRIBUTED/LVC";
  const ac1p4 = "AAW 205 - High / Very Fast Flier - DISTRIBUTED/LVC";
  const ac1p5 = "AAW 208 AR-2 (SAME AS AAW206 & AAW207)";
  const ac1p6 = "AAW 210 SINGLE LANE Division DCA - DISTRIBUTED/LVC (SAME AS AAW209)";
  const ac1p7 = "AAW 211 - Intercept and Escort";
  const ac1p8 = "AAW 213 Division OCA (SAME AS 212)";
  const ac1p9 = "AAW 214 Slide / Scram / Retrograde Procedures";
  const ac1p10 = "AAW 215 - NIFC-CA FTS";
  const ac1p11 = "AAW 216 - NIFC-CA FTA - IAMD";
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

<Accordion style={{height: '30%', width: '60%', padding: '50px', border: '1px solid', borderRadius: '25px'}} allowToggle allowMultiple>
<AccordionItem>
<AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#FFD700', color: 'black' }}>
        <Box textAlign='center' flex='1'>
        <text>{ac1}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%',align: 'center', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box textAlign='center' flex='1'>
        <text>{ac1p1}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    
    <AccordionPanel pb={4}>
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
      <Tab><text>{col30}</text></Tab>||
    </TabList>

    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>
    <TabPanel>
      <h2><SurveyComponent /></h2>
    </TabPanel>

  </Tabs>
    </AccordionPanel>
    
  </AccordionItem >
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p2}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SurveyComponent />
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p3}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SurveyComponent />
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p4}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p5}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p6}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p7}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p8}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p9}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p10}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
        <text>{ac1p11}</text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </AccordionPanel>
  </AccordionItem>
  </Accordion>

      </header>
    </div>
  );
}

export default App;
