import * as Survey from "survey-react";
import "survey-react/survey.css";
import React from "react";

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
  export default SurveyComponent;