

export const numberFormatter = (value) => {
    value += '';
    // eslint-disable-next-line radix
    value = parseInt(value.replace(/[\D]+/g, ''));
    value += '';
    value = value.replace(/([0-9]{3})$/g, '.$1');
  
    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{3}$)/g, '.$1.$2');
    }
    if (value.length > 9) {
      value = value.replace(/([0-9]{3}),([0-9]{3}),([0-9]{3}$)/g, '.$1.$2.$3');
    }
  
    if (value === 'NaN') value = '';
    return value;
  };
