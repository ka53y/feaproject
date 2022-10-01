import './App.css';
import React from "react";
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
  return (
    <div className="App">
      <header className="App-header">

<Accordion style={{height: '30%', width: '60%', padding: '50px', border: '1px solid', borderRadius: '25px'}} allowToggle allowMultiple>
<AccordionItem>
<AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#FFD700', color: 'black' }}>
        <Box textAlign='center' flex='1'>
        AAWs
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%',align: 'center', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box textAlign='center' flex='1'>
        AAW 201 - Strike FIghter Tactics (DISTRUIBUTED/LVC)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    
    <AccordionPanel pb={4}>
    <SurveyComponent />
    </AccordionPanel>
    
  </AccordionItem >
  <AccordionItem>
    <h2>
      <AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}} _expanded={{ bg: '#145369', color: 'black' }}>
        <Box flex='1' textAlign='center'>
          AAW 202 - Non-Permissive Fighter Tactics (NFT)
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
          AAW 203 - Permissive Fighter Tactics (PFT) DISTRIBUTED/LVC
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
          AAW 205 - High / Very Fast Flier - DISTRIBUTED/LVC
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
          AAW 208 AR-2 (SAME AS AAW206 & AAW207)
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
          AAW 210 SINGLE LANE Division DCA - DISTRIBUTED/LVC (SAME AS AAW209)
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
          AAW 211 - Intercept and Escort
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
          AAW 213 Division OCA (SAME AS 212)
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
          AAW 214 Slide / Scram / Retrograde Procedures
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
          AAW 215 - NIFC-CA FTS
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
          AAW 216 - NIFC-CA FTA - IAMD
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
