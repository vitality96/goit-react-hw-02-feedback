import React, { Component } from "react";
import Statictics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    getKeys = () => Object.keys(this.state);

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
    };

    onLeaveFeedback = (key) => {
        this.setState((prevState) => {
            return {
                [key]: prevState[key] + 1,
            };
        });
    };


    render() {
    const total = this.countTotalFeedback();

        return (
            <>
                <Section title="Please leave feedback">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <FeedbackOptions options={this.getKeys()} onLeaveFeedback={this.onLeaveFeedback} />
                    </div>
                </Section>
                <Section title="Statistics">
                    {total > 0 ? (
                        <Statictics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                    ) : (
                            <Notification message="There is no feedback"/>
                    )}
                </Section>
            </>
        );
    };
};