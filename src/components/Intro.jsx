import React, { PropTypes } from 'react';
import Typist from 'react-typist';
import 'styles/Intro';


function delayGenerator(mean, std, { line, lineIdx, charIdx, defDelayGenerator }) {
  if (lineIdx === 0 && charIdx === 9) {
    return 700;
  }
  if (lineIdx === 0 && charIdx === line.length - 1) {
    return 1000;
  }
  if (lineIdx === 2) {
    if (charIdx === 16 || charIdx === 17 || charIdx === 18) return 600;
  }
  return defDelayGenerator();
}

export default function Intro({ onIntroDone }) {
  const typistProps = {
    delayGenerator,
    startDelay: 4500,
    avgTypingDelay: 80,
    onTypingDone: onIntroDone,
    cursor: { hideWhenDone: true, hideWhenDoneDelay: 2000 },
  };

  return (
    <div className="Intro">
      <Typist {...typistProps}>
        > Hi there, I'm Juan.
        <br />
        > Ask me anything...
      </Typist>
    </div>
  );
}

Intro.propTypes = {
  onIntroDone: PropTypes.func,
};

