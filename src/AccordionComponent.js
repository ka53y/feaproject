import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
  import './App.css';
import SurveyComponent from './SurveyComponent';
function AccordionComponent() {
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
  return(
<Accordion style={{height: '30%', width: '60%', padding: '50px', border: '1px solid', borderRadius: '25px'}} allowToggle allowMultiple>
<AccordionItem>
<AccordionButton style={{height: '5%', width: '100%', padding: '10px', border: '1px solid', borderRadius: '25px', textAlign:'center'}}  _expanded={{ bg: '#FFD700', color: 'black' }}>
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
      <SurveyComponent />
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
  );
}
export default AccordionComponent;