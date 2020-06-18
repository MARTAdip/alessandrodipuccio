import React, { Component } from 'react';
import './read-more.scss';

const ELLIPSES = '…';
const SHOW_LESS_TEXT = 'Mostra Meno';
const SHOW_MORE_TEXT = 'Leggi Tutto';

export default class ReadMore extends Component {
  static defaultProps = {
    numberOfLines: 5,
    lineHeight: 2,
    readMoreCharacterLimit: 500,
    showLessButton: false,
  };

  state = {
    showingAll: false,
  };

  componentDidMount() {
    this.props.onContentChange();
  }

  toggleReadMore = (e) => {
    console.log(e);
    
    this.setState({
      showingAll: !this.state.showingAll,
    });
  };

  _getReadMoreParts = ({ text, numberOfLines, readMoreCharacterLimit }) => {
    let teaserText;
    let remainingText;
    const remainingWordsArray = [];

    if (text) {
      const teaserWordsArray = text.split(' ');

      while (teaserWordsArray.join(' ').length > readMoreCharacterLimit) {
        remainingWordsArray.unshift(teaserWordsArray.pop());
      }

      teaserText = teaserWordsArray.join(' ');

      if (remainingWordsArray.length > 0) {
        remainingText = remainingWordsArray.join(' ');
      }
    }

    return {
      teaserText,
      remainingText,
    };
  };

  getText = ({ showingAll, text, readMoreCharacterLimit, numberOfLines }) => {
    const { teaserText, remainingText } = this._getReadMoreParts({ text, numberOfLines, readMoreCharacterLimit });

    if (!showingAll && text.length > readMoreCharacterLimit) {
      return (
        <span className="span">
          {teaserText.replace(/\s*$/, '')}
          <span className="read-more__text--remaining read-more__text--hide">{remainingText}</span>
          {ELLIPSES}
        </span>
      );
    }

    return (
      <span className="span">
        {teaserText}
        <span className="read-more__text--remaining read-more__text--show">{remainingText}</span>
      </span>
    );
  };

  getActionButton = ({ showingAll, showLessButton }) => {
    if (showingAll && !showLessButton) {
      return;
    }

    const buttonText = showingAll ? SHOW_LESS_TEXT : SHOW_MORE_TEXT;

    return (
      <button onClick={this.toggleReadMore} type="button" className="read-more__button">
        {buttonText}
      </button>
    );
  };

  render() {
    const { text, readMoreCharacterLimit, showLessButton, onContentChange, numberOfLines, lineHeight } = this.props;

    const maxHeight = numberOfLines * lineHeight;
    const style = {
      lineHeight,
      maxHeight: `${maxHeight}em`,
    };
    const { showingAll } = this.state;
    const textToDisplay = this.getText({ showingAll, text, readMoreCharacterLimit, numberOfLines });
    const actionButton = this.getActionButton({ showingAll, showLessButton });

    return (
      <div className="read-more">
        {textToDisplay} {actionButton}
      </div>
    );
  }
}
