import React, { Component } from 'react';
import './contact-widget-component.css';

export default class ContactWidgetComponent extends Component {
  state = { widgetData: null };

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
      <div className="widget-container">
        <div className="widget-label"> {this.state.widgetData.labels} </div>
        <div className="widget-phone-number">
          {this.state.widgetData.phone_number}
        </div>
      </div>
    ) : (
      ''
    );
  }
}
