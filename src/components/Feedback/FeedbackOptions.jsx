import PropTypes from 'prop-types';
import css from 'components/Feedback/Feedback.module.css';

export const FeedbackOptions = ({ appFeedbeck }) => {
  return (
    <div className={css.optionsDiv}>
      <button
        className={css.optionsButton}
        type="button"
        name="good"
        onClick={e => appFeedbeck(e.target.name)}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        type="button"
        name="neutral"
        onClick={e => appFeedbeck(e.target.name)}
      >
        neutral
      </button>
      <button
        className={css.optionsButton}
        type="button"
        name="bad"
        onClick={e => appFeedbeck(e.target.name)}
      >
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  appFeedbeck: PropTypes.func.isRequired,
};
