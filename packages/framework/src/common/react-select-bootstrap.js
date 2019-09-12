const neutral10 = '#ced4da';
const primary = '#afc7fc';

export const RS_BOOTSTRAP_STYLES = {
  container: styles => ({ ...styles, width: '100%' }),
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    minHeight: 'calc(2.07rem + 2px)',
    // eslint-disable-next-line no-nested-ternary
    borderColor: isDisabled ? neutral10 : isFocused ? primary : neutral10,
    boxShadow: isFocused ? '0 0 0 0.2rem rgba(52, 114, 247, 0.25)' : 'none',
  }),
  dropdownIndicator: base => ({ ...base, padding: '0 .5rem' }),
  clearIndicator: base => ({ ...base, padding: '0 .5rem' }),
};
