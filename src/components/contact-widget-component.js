import React, { Component } from 'react';

export default class ContactWidgetComponent extends Component {
  state = { widgetData: null };
  widgetContainerStyles = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    padding: '1rem',
    'border-radius': '5px',
    background: 'black',
    color: 'white',
    'min-height': '20%',
    'min-width': '10%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'font-size': 'larger',
    'font-weight': 'bold',
  };

  widgetLabelStyles = {
    padding: '0 1rem 1rem',
  };

  widgetPhoneNumberStyles = {
    padding: '0.2rem 1rem',
    'border-radius': '10px',
    background: '#4ed44e47',
    color: 'lime',
  };

  componentDidMount() {
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET', 'https://codifyinditest.com/script_test/api-test/');
    xhrRequest.send();
    xhrRequest.onload = () => {
      const responseData =
        JSON.parse(xhrRequest.response)['script test'] || null;
      this.setState({ widgetData: responseData });
    };
  }
  render() {
    return this.state.widgetData ? (
      <div style={this.widgetContainerStyles}>
        <div style={this.widgetLabelStyles}>{this.state.widgetData.labels}</div>
        <div style={this.widgetPhoneNumberStyles}>
          {this.state.widgetData.phone_number}
        </div>
      </div>
    ) : (
      ''
    );
  }
}
