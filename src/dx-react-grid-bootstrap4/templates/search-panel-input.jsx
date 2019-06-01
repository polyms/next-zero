/* @flow */
import { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  value?: any,
  onValueChange: Function,
  getMessage: Function,
  className?: string,
};

// export const SearchPanelInput = ({ onValueChange, value, getMessage, className, ...restProps }) => (
//   <input
//     type="text"
//     className={classNames('form-control w-25', className)}
//     onChange={e => onValueChange(e.target.value)}
//     value={value}
//     placeholder={getMessage('searchPlaceholder')}
//     {...restProps}
//   />
// );

export class SearchPanelInput extends PureComponent<Props> {
  state = { value: null };

  handleChange = e => this.setState({ value: e.target.value });

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onValueChange(this.state.value);
    }
  };

  render() {
    const { onValueChange, value, getMessage, className, ...restProps } = this.props;

    return (
      <input
        type="text"
        className={classNames('form-control w-25 ml-2', className)}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        defaultValue={value}
        placeholder={getMessage('searchPlaceholder')}
        {...restProps}
      />
    );
  }
}

SearchPanelInput.defaultProps = {
  value: null,
  className: undefined,
};
