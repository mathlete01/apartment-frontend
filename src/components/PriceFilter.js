import React from 'react';

class PriceFilter extends React.Component {
    render() {
    return (
      <form>
        <span>$</span>
        <input
          type="text"
          onChange={event => this.props.updatePriceLow(event.target.value, (parseInt(event.target.value) + 99))}
          placeholder={this.props.priceLow}
          />
        <span> - $</span>
        <input
          type="text"
          onChange={event => this.props.updatePriceHigh(event.target.value)}
          placeholder={this.props.priceHigh}
        />
      </form>
    )
  }
}

export default PriceFilter; 